---
id: how-it-works
title: How it Works
---

Radicle Link is the peer-to-peer gossip protocol that powers the Radicle
network. This documentation will provide an overview on how the protocol works.
More information — including specifications, security considerations, and
implementation notes — can be found in the [corresponding repository][cr].

## Overview

Radicle Link is a peer-to-peer gossip protocol with a generic distributed
version control backend. It aims to be general enough to be used on top of
systems such as pijul or mercurial, though it's initial implementation is
focused on supporting Git.

The protocol disseminates Git repositories via gossip-based replication,
enabling the hosting and sharing of repositories without reliance on central
servers. Repositories on the Radicle network are called 'projects', which are
gossiped by 'peers'.

In Radicle:

* Peers track other peers
* Peers track projects they are interested in
* Peers gossip about projects. This means replicating updates from the peers
  they track and the projects they are interested in

These interactions create a "trusted" social graph of peers and projects that
become the foundation for collaboration within Radicle.

Radicle Link supports a bazaar-style collaboration model in which there is no
single canonical 'master' branch that contributors merge into, but a multitude
of upstreams exchanging patches via remotes.

<details>
  <summary><b>DISCLAIMER 🌱</b></summary>
  <br>
  <p>
    <em>
      While this documentation reflects the specification of the Radicle Link
      protocol, not all
      information is integrated into the Beta release
    </em>
  </p>
</details>

## Identities

### Overview

Radicle Link distinguishes two types of identities: personal and project. The
first describes an actor (a `peer`) in the system, while the second describes a
software project (repository) on which one or more actors collaborate.

The notion of "identity" in Radicle Link simply means the presence of an
identity document at a conventional location within a Git repository, where the
document is subject to certain verification rules. The hash of the initial
document is considered its stable identifier and encoded as a uniform resource
name (URN) of the form `rad:git:$HASH` (for Git repositories). The URN is
supposed to be resolvable on the network into a top-level Git repository of the
same name ($HASH.git), which is valid if it contains said identity document, and
the document passes the verification rules.

### Data Model

Our model for maintaining consistency on repository data, is based on The Update
Framework ([TUF][tu]), which was conceived as a means of securely distributing
software packages. Our approach is to establish an ownership proof, tied to the
network identity of a peer (`PeerId` - See [Key Architecture][ka]), or a set of
peers, such that the views of a project can be replicated according to the trust
relationships between peers ("tracking").

The identity of a project (repository) or peer is established using a document
of the form:

```rust
struct Doc<T, D> {
    replaces: Option<Revision>,
    payload: T,
    delegations: D,
}
```
where:

* `Revision` is a cryptographic hash of a document's contents, such that this
  document is content-addressable by this hash within the storage system.

* `replaces` refers to the previous revision of the document, or none if it is
  the first revision.

* `payload` is an extensible, forwards- and backwards-compatible datatype
  containing application-defined metadata about the repository. The protocol
  interprets some of the properties, as described in [Doc Payload][dp].

* `delegations` contains the public keys of key owners who are authorised to
  issue and approve new revisions of the document. The delegation format depends
  on the type of identity being established, as detailed below.

The `Doc` must be serialised in canonical form. See more in [Serialisation][se].

The authenticity of the `Doc` is captured by the following type:

```rust
struct Identity<T, D> {
    id: ContentId,
    root: Revision,
    revision: Revision,
    doc: Doc<T, D>,
    signatures: HashMap<PublicKey, Signature>,
}

```

where:

    *`id` is the content-addressable hash of the Identity itself
    *`root` is the initial revision of the identity Doc
    *`revision` is the current revision of the identity Doc
    *`doc` is the Doc described by revision
    *`signatures` contains signatures over the document history, indexed by the
    public keys used. A signature is made over the cryptographic hash of the
    concatenation of the Revisions chain, from most recent to the root.

An `Identity` describes the attestation of a `Doc`s validity and the `root` of a
verified `Identity` is the stable identifier of the repository.

*Read more in the [specification][sp]*

### Doc Payload

The doc payload determines the type of identity: personal or project. The
payload must include one of the following structures (but not both) for
interpretation by the protocol:

```rust
struct User {
    /// A short name (nickname, handle), without any prefix such as the `@`
    /// character
    name: String,
}

struct Project {
    /// A short name
    name: String,

    /// A slightly longer description (should fit in a headline)
    description: Option<String>,

    /// The default branch. "master" is assumed for git repositories if
    /// unspecified.
    default_branch: Option<String>,
}

```

There are currently no restrictions on the length (in bytes) of the fields.
Applications may add additional payload data, but must do so in a way which
unambiguously preserves the shape of the above definitions. See
[Serialisation][se].

### Radicle URNs

Identities are addressable within the Radicle Network by their stable
identifier, encoded as a URN. Radicle URNs are syntactically and functionally
equivalent to URNs as per [RFC8141][r8].

The syntax of a Radicle URN is defined as follows:

```rust
"rad" ":" protocol ":" root [ "/" path ]

```

where:

```rust
protocol = "git"
root     = MULTIBASE(MULTIHASH(id))
path     = pct-encoded
id       = BYTES

```

The `id` is the `root` field of a verified Identity, as specified previously.
The `MULTIBASE` and `MULTIHASH` encodings are specified in [multibase][mu] and
[multihash][mh], respectively. The preferred alphabet for the multibase encoding
is [z-base32][zb]. pct-encoded is defined in [RFC3986][r3], and the equivalence
rules as per [RFC8141][r8] apply.

An example of a Radicle URN:
`rad:git:hnrkmzko1nps1pjogxadcmqipfxpeqn6xbeto`.

In the Upstream client, Radicle URNs are called [**Radicle IDs**][ri].

Read more [here][ur]


### Delegations

As described in [Data Model][dm] Radicle Link distinguishes two types of
identities: personal and project. The first describes a person (usually denoted
as a `peer`) in the system, while the second describes a software project
(repository) on which one or more persons collaborate. Apart from their
[payload][dp] types `T`, they differ in their delegations type `D`:

Personal identities can only delegate to anonymous keys, while project
identities may attach a personal identity to a key delegation. More formally:

```rust
type User<T> = Identity<T, HashSet<PublicKey>>;

enum ProjectDelegation<U> {
    Key(PublicKey),
    User(User<U>),
}

type Project<T, U> = Identity<T, ProjectDelegation<U>>;

```

The `delegations` of a `Project` are also referred to as the project's
**maintainers**.

These delegations are used to verify the authenticity of data across the
network. See more notes on Verification [here][vr].


### Verification

Document revisions, as well as authenticity attestations, form a hash-linked
chain leading to the initial revision of the document. In order to verify the
authenticity of a given identity attestation (`Identity`), the chain of updates
must be contiguous and subject to the following verification rules.

There are four levels of validity:

1. **Untrusted**

    The identity document is well-formed, and points to a root object which is
    retrievable from local storage.

2. **Signed**

   The identity carrier passes **1.**, and is signed by at least one key
   specified in the delegations of the document.

3. **Quorum**

    The identity carrier passes **2.**, and is signed by a quorum of the keys
    specified in the delegations of the document (`Q > D/2`).

4. **Verified**

    The identity carrier passes **3.**, and: 
     * The document does not refer to a previous revision, and no previous revision is known 
     * Or, the set of signatures forms a quorum of the [delegations][dl] of the previous revision.

    It is an error if: 
     * No previous revision is given, but a parent in the identity attestation chain is found
     * A previous revision is given, but the identity attestation chain does not yield a parent
     * A previous revision is given, but it is not the same the parent attestation refers to
     * The current and parent attestations refer to different roots

## Git Implementation

### Overview

Radicle basically uses Git as a database. This means everything is stored in a
single Git monorepo that is read and written from via the Upstream client. Our
Git implementation was devised to create an incentive for the seeder to provide
all data necessary to resolve and verify a repository, while reducing latency by
eliminating gossip queries and git fetches as much as possible.

Read more about our approach [here][ir]

### Namespacing

Radicle uses [namespaces][ns] to store a `peer`'s Radicle data. By using
namespacing, Radicle Link partitions a single git repository - or monorepo -
into logical, smaller repos, that can be checked out individually. This monorepo
includes a `peer`'s identity (personal & project) data, as well as all tracked
Git repositories.

The namespacing scheme has the following format:

```rust
# Owner of the monorepo
let PEER_ID;

# Peer tracked by $PEER_ID, either directly or transitively
let TRACKED_PEER_ID;

# Identity hash of the project or peer
let IDENTITY;

# Identity hashes of certifiers of $IDENTITY
let CERTIFIER[1..];

$PEER_ID/refs/
`-- namespaces
    `-- $IDENTITY
        `-- refs
            |-- heads # <-- code branches owned by $PEER_ID go here
            |-- rad
            |   |-- id # <-- points to the identity document history
            |   |-- signed_refs # <-- signed refs of the peer
            |   |-- self # <-- points to the identity of $PEER_ID
            |   `-- ids
            |       |-- $CERTIFIER[1]
            |       `-- $CERTIFIER[2]
            `-- remotes
                `-- $TRACKED_PEER_ID
                    |-- heads
                    `-- rad
                        |-- id
                        |-- signed_refs
                        |-- self
                        `-- ids
                            |-- $CERTIFIER[1]
                            `-- $CERTIFIER[2]
```

Note that the **owned** $CERTIFIER[n] refs (ie. not those of remotes) are
[symbolic refs][sr], pointing to the `rad/id` branch of the respective
namespace. For example, if identity `A` is certified by identity `B`,
`refs/namespaces/A/refs/rad/ids/B` would contain:

```
ref: refs/namespaces/B/refs/rad/id
```
The certifier can only certify if the certifying identity is present locally and
is logically valid for the certifier to use for certifying. The symref ensures
that the certifying identity can be updated in one place, and stays up-to-date
at all use sites without maintenance.

The `rad/self` branch identifies `$PEER_ID`, i.e. the `rad/id` branch of the
corresponding identity namespace. For example, if the identity of `$PEER_ID` is
`C`, `rad/self` within the context of `$IDENTITY` would be a symref:

```
ref: refs/namespaces/C/rad/id
```

Any certifiers of the `self` identity must be included under `rad/ids/`. The
`rad/self` branch contains the  equivalent to the contributor file in the
radicle-link spec, rev1-draft, which is required iff the refs/heads/ hierarchy
of $PEER_ID is non-empty (ie. it is permissible to omit it if $PEER_ID does not
publish any branches of their own).

### Git Encoding

In the `git` implementation, a `Doc` corresponds to a `blob` object, stored as
the single entry of a `tree` object, such that its name (acc. to the `tree`) is
equal to the `blob` hash of the _initial_ version of the `Doc`, serialised in
canonical form. That is:

    let name = git hash-object -t blob doc.canonical_form()

An `Identity` corresponds to a `commit` object.

We map the fields as follows:

```rust
/* Simplified git object model */
struct Commit {
    id: Oid,
    tree: Tree,
    message: String,
}

struct Tree {
    id: Oid,
    entries: Vec<TreeEntry>,
}

struct TreeEntry {
    id: Oid,
    name: String,
    object: BlobOrTree,
}

struct Blob {
    id: Oid,
    content: Vec<u8>,
}

/* Mapping (trivial type conversions elided) */
let commit = /* .. */;
let identity = Identity {
    id: commit.id,
    root: commit.tree.entries[0].name,
    revision: tree.id,
    doc: deserialize(first_blob(commit.tree).content),
    signatures: from_trailers(commit.message),
};
```

Where:

* `first_blob` finds the first `TreeEntry` which is of type `blob`.
* `deserialize` is implemented by a standard JSON parser. `User` delegations
  from a `Project` are specified in the `Project`'s `Doc` as URNs, which are
  resolved by parsing a `blob` object of the same name as the URN's `id` field
  below the `tree` entry of type directory named `delegations`.
* `from_trailers` interprets the commit message as per
  [git-interpret-trailers][gt], and extracts the signatures from trailers with
  the token `x-rad-signature`.

The commit chain is stored in a branch at `refs/rad/id` in the peer's monorepo.

### Fetching

Fetching (or cloning) happens on a per-`$IDENTITY` basis, meaning when a peer
fetches a project, they only have to fetch information from the peers they are
interested in. Due to the [certifier symrefs][na], the peer being fetched from
is able to advertise a "proof" (or perhaps better: "promise") to be able to
include all relevant data (the `rad/id` branches) in the packfile. This enables,
in a single packfile, a "mirror" of the logical remote repository requested, *as
well as* all of the top-level logical repositories of all certifiers required to
verify the identity document(s).

See more on [Fetching][fs]

### Working Copies
Within the `rad` refs category, peers can obtain a working copy of a specific
repository that can hide "special" branches during to our namespacing scheme. We
call this `checking out`.

```rust
[remote "rad"]
    url = file://path/to/monorepo.git
    fetch = +refs/namespaces/$IDENTITY/refs/heads/*:refs/remotes/rad/refs/heads/*
```
In addition to this, we can see the branches of tracked peers by running `git
branch`. To provide a human-readable view of a project's remotes, when fetching
we inspect the `rad/self` identity metadata in order to find nicknames
(designated via Upstream client). This is managed entired by `librad`, which
reduces to the following in the working copy's config:

```rust
[include]
    path = /path/to/managed.inc
```

## Peer Discovery & Replication

### Overview

Radicle Link extends Git with peer-to-peer network discovery via a process
called **gossip**. This means that peers in the network share and spread data
they are "interested" in by keeping (replicating) redundant copies locally and
sharing deltas with peers. With Radicle, we replicate data across connected
repositories according to a “social graph” of peers and projects, enabling
source code and changesets to be disseminated according to use and value: the
more peers who are interested in a certain project, the more available this
project is made to the network.

### Replication Model

Repositories are the base unit of replication in Radicle. To publish a
repository to the network, it must first be initialized as a project. Project
combine source code, issues and proposed changes under a single umbrella, and
carry a unique, shareable peer-to-peer identifier. The entirety of the project
data and metadata, including social artefacts such as comments, are stored
within the repository. To create a project, the owner of a repository defines a
project identity. In the background, a project identity document is created in a
predetermined disjoint branch of the repository, by convention `rad/id`. This
file contains important metadata such as the project name, list of maintainers,
as well as any related links.

The unit of replication is a repository, identified by a `PeerID` in the context
of a project document (See [Data Model][dm]). The holder of the corresponding
`DeviceKey` is referred to as the **maintainer** of the repository. Repositories
belonging to the same project are represented locally as a single repository,
identified by a Radicle URN (or [Radicle ID][ru] in the Upstream client). In the
context of a project, the maintainer of a repository may choose to track the
repositories of other peers (this is called a remote in git terminology: a named
reference to a remote repository). If the remote repository is found to track
other remotes, the tracking repository will also transitively track those, up to
n hops out.

Therefore, a project on Radicle preserves the transitivity information of its
remotes (i.e. via which tracked PeerID another PeerID is tracked).

### Tracking
Tracking is the backbone of collaboration as it drives the exchange of projects
and their artifacts. In Radicle, peers track other peers and projects that they
are interested in. This happens when a peer clones another peer's project or
tracks a peer directly by adding them as a remote to their project via Upstream.

Since peers represent seperate devices in the network, they each have their own
view of the network. Each peer tracks this view of projects, identities, and
data from connected peers in its own monorepo (See [Git Implementation][gi]).

When a peer tracks another peer in the context of a project — say, if it clones
another peer's project — it sets the intention to fetch and gossip the other
peer's view of that project. This means includes the project metadata, all
working branches and commits, and changesets will be replicated and stored in
the tracking peer's monorepo, so that it can be fetched and collaborated on.

Specifically, this means the tracked peer will be added as a *remote* within the
tracking peer's monorepo as a `$TRACKED_PEER_ID`, as seen in the following
example:

```rust
# Owner of the monorepo
let PEER_ID;

# Peer tracked by $PEER_ID, either directly or transitively
let TRACKED_PEER_ID;

# Identity hash of the project or user
let IDENTITY;

# Identity hashes of certifiers of $IDENTITY
let CERTIFIER[1..];

$PEER_ID/refs/
`-- namespaces
    `-- $IDENTITY
        `-- refs
            |-- heads # <-- code branches owned by $PEER_ID go here
            |-- rad
            |   |-- id # <-- points to the identity document history
            |   |-- signed_refs # <-- signed refs of the peer
            |   |-- self # <-- points to the identity of $PEER_ID
            |   `-- ids
            |       |-- $CERTIFIER[1]
            |       `-- $CERTIFIER[2]
            `-- remotes
                `-- $TRACKED_PEER_ID
                    |-- heads <-- code branches owned by $TRACKED_PEER_ID go here
                    `-- rad
                        |-- id
                        |-- signed_refs
                        |-- self <-- points to the identity of $TRACKED_PEER_ID
                        `-- ids
                            |-- $CERTIFIER[1]
                            `-- $CERTIFIER[2]
```
See [Namespacing][na] for more on monorepo structure.

As well as being added to `remotes/$TRACKED_PEER_ID`, the tracking peer's
monorepo will also gain an entry in its `config` file (See [Fetching][fe]). This
means that if the tracked peer announces changes and they are gossiped to the
tracking peer — whether through their device or another peer's — they can be
fetched and applied to the tracking peer's monorepo.

#### Direct Tracking
The other way a peer can track another peer is by explicity telling their
monorepo to track a specific `PEER_ID`. Using the `track` function with
`PEER_ID` of interest, the monorepo creates a new entry in the git config. Any
updates from the tracked peer can be similarly fetched and applied the tracking
peer's monorepo.

The [`Manage Remotes`][mr] feature in Upstream uses the `track` function to add
peers as remotes directly to the project.

#### The Social Graph

In the case of multiple peer replications, any peer that tracks a project will
implicitly track it's maintainers as well. This means that when any peer on the
network clones a project, all of said project's maintainers will end up in that
peer's remote list. Since maintainers of the project work on the canonical view
of the project, this automatic tracking ensures the health and consistency of a
project as it's gossiped across the network.

This also means that for a single `PEER_ID`, we have a sub-graph that consists
of more `PEER_ID`s — whether they be the maintainers of the project or other
tracked peers. Any time a peer is replicated, a portion of their sub-graph is
replicated as well, up to 2 hops out.

This means that everytime you track a peer, you are not only adding them as a
remote, but also their remotes, and the remotes of their remotes. This ensures
that a project is consistently available across the network without a total
reliance on the maintainers of the project or the original tracked peer.

![Social Graph][sg]

### Validation

To ensure data integrity and authenticity, when creating a working copy of a
project, the attestation history according to the remote peer is fetched before
all other repository contents, and the verification procedure (See
[Verification][ve]) is run on it. If this does not yield a verified status, the
clone is aborted. The resulting repository state must include the attestation
histories of at least a quorum of the delegates (See [Delegation][dl]) as per
the remote peer's view of the identity document. In Git, the claim that this
will be the case can be determined before fetching the repository contents by
examining the advertised remote refs (See [Fetching][fe]). If these
preconditions are not met, the clone is aborted, and already fetched data is
pruned.

### Seeding

To improve data availability, participants in the network can choose to act as
seeds. This is similar in concept to a pub in [Secure Scuttlebutt][ss]. Seed
nodes are "always-on" nodes running on public IP addresses that serve data to
any connected peers. By joining a seed node, it automatically tracks you and
shares your data across its network of other connected users. This increases the
availability of your data throughout the network, while making it easier to find
other's data as well.

A seed may track a large number of repositories for a given project, so cloning
from a seed will greatly increase the connectedness of a tracking graph. Also
note that, by tracking a seed, upstream maintainers can increase the number of
paths leading back to them, such that contributions can flow back up even if
they come from participants not within the set of tracked repositories of a
maintainer.

Upstream is preconfigured with an official Radicle seed node to bootstrap your
connectivity. If you have removed the default seed node, you can always re-add
it later by following the steps in [Adding a seed node][gs].

If you're interested in running a seed node, see [Running a seed node][rs].


## Collaboration Model

Our construction of the `Identity` from a git commit allows for multiple `id`s
to describe the same revision of the document (and thus be equally valid). This
means that the respective delegates' histories may diverge in their _commit_
histories, but still converge to an agreement on the validity of the attested
document revision.

This means that there isn't a single canonical branch (or `master`) in Upstream,
as peers are all maintaining their own upstreams of the same project. However,
due to the data model of Radicle idenities, there will always be a 'canonical'
view of a project associated with its **maintainers**. Maintainers can follow a
leader-based workflow in which they are converging histories of contributing
peers into their main branch. Since their view is verifiable and implicitly
tracked whenever a peer follows a project, peers can ensure they are replicating
a canonical and updated view of a project.

In addition to this, the way Radicle Link works introduces certain implications
for end-user collaboration experience:

- **Your social graph determines what type of content you see, interact with and
  replicate.**

Assuming you have discovered a project of interest within the Radicle network
(more on discoverability later), then the first thing you have to do in order to
interact with it is to track it. Tracking a project signals interest, and by
design implies tracking the project's maintainers, therefore replicating the
data within their social graphs.

In the context of a project, maintainers of a repository may choose to track the
views of other owners (this is called a remote in Git terminology: a named
reference to a remote repository). If the remote repository is found to track
other remotes, the tracking repository shall also transitively track those, up
to a configurable N hops out (currently in the works).

- **Spam and content moderation is naturally handled by the peer's social
  graph**

While this might appear confusing at first, in fact its far more natural (it
actually mimics real life communication) and by design addresses issues like
spam and content moderation, which are naturally handled by the peer's social
graph.

A spammer's patches or issues will never be tracked by the actual maintainers
and as a result they wont be seen by the rest of the network (unless explicitly
tracked). Similarly, if you are not interested in a peer's views or
contributions to a project, you can simply un-follow them, stopping to
replicate, view and interact with their data.

- **Within the same project, two peers might have diverging views.**

The above design also means that even within the same project, peers have
subjective (and often diverging) views.

At minimum, your view of a project becomes the sum of the views of the people
you follow, plus the views of the maintainers of the project. In addition, you
can expand your perspective by configuring your replication settings to also
transitively track other remotes N hops out from the peers you follow (i.e.
peers of your peers / remotes of your remotes).

This design also addresses a significant problem with decentralized systems
relying exclusively on distributed ledger technology, the problem of "blockchain
poisoning". This is when someone deliberately adds illegal content to an append
only source in hopes to make the sole act of replicating the project legally
problematic, as correctly pointed out by Konstantin Ryabitsev of the Linux
foundation with regards to a [previous version](http://alpha.radicle.xyz) of
Radicle that was relying on [IPFS](https://ipfs.io/).

Read more about the [Radicle collaboration model][rc].


[dl]: #delegations
[dm]: #data-model
[dp]: #doc-payload
[fe]: #fetching
[gi]: #git-implementation
[gs]: using-radicle/adding-a-seed-node.md
[ka]: #key-architecture
[na]: #namespacing
[mr]: using-radicle/tracking-and-viewing.md
[ri]: glossary.md/#radicle-id
[rs]: using-radicle/running-a-seed-node.md
[ru]: #radicle-urns
[se]: #serialisation
[vr]: #verification

[sg]: /img/socialgraph.png


[cr]: https://github.com/radicle-dev/radicle-link
[de]: https://github.com/radicle-dev/radicle-link/blob/master/docs/spec/identities.md#delegations
[gt]: https://git-scm.com/docs/git-interpret-trailers
[fs]: https://github.com/radicle-dev/radicle-link/blob/master/docs/rfc/0001-identity_resolution.md#fetching
[ir]: https://github.com/radicle-dev/radicle-link/blob/master/docs/rfc/0001-identity_resolution.md
[mh]: https://multiformats.io/multihash/
[mu]: https://github.com/multiformats/multibase
[ns]: https://git-scm.com/docs/gitnamespaces
[r3]: https://tools.ietf.org/html/rfc3986
[r8]: https://tools.ietf.org/html/rfc8141
[rc]: https://radicle.community/t/the-radicle-social-model/317
[sc]: https://github.com/radicle-dev/radicle-link/blob/master/spec/radicle-link.md#cryptographic-identities
[se]: https://github.com/radicle-dev/radicle-link/blob/master/docs/spec/identities.md#serialisation
[sp]: https://github.com/radicle-dev/radicle-link/blob/9e1cfdf8bbb77a31f9a4c39352cf6faea220afc2/docs/spec/identities.md
[sr]: https://git-scm.com/docs/git-symbolic-ref
[ss]: https://scuttlebutt.nz/
[tu]: https://theupdateframework.io/
[ur]: https://github.com/radicle-dev/radicle-link/blob/master/docs/spec/identities.md#radicle-urns
[ve]: https://github.com/radicle-dev/radicle-link/blob/master/docs/spec/identities.md#verification
[zb]: http://philzimmermann.com/docs/human-oriented-base-32-encoding.txt
