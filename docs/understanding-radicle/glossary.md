---
id: glossary title: Glossary
---

## branch
A parallel version of a [project][]. A branch is separate from the default
branch, allowing one to work freely without disrupting the "live" version of a
[repository][re]. Once changes are made, a branch can be merged back into the
default branch to publish changes.

## checkout
To create a working copy of a [project][pr]. This working copy is where a
[user][us] can make and publish changes to [repository][re] via 'git push rad'.
For more on how working copies work in Radicle, see [Working
Copies](/how-it-works.md/#working-copies)

## commit
An individual change to a file (or set of files) that represents a single point
in a version controlled history. Every commit can be identified by it's unique
ID (in Git, the "SHA" or "hash"). This allows you to keep a record of all
changes committed to a [project][pr] history along with who made them and when.
Commits can also contain a brief description of what changes were made, also
known as a commit message.

To "commit" is the action of storing a new snapshot of the [project][pr]'s state
in the version controlled [project][pr] history. This new commit also represents
the current state of the index and advances HEAD to point at the new commit.

## connect
To create a network connection to another Radicle [peer][pe]. Connected peers
spread information between each other via gossip.

## contributor
A [user][us] that has pushed code or other data to their version of another's
[project][pr].

## display name
A changeable and non-unique human-readable name chosen by the [user][us]. Like a
"nickname" for a [Radicle ID][ri]. This will be possible to change in the
future. 

## follow
Following a [project][pr] or [peer][us] replicates it's data to the your machine
(See [Tracking](/how-it-works.md/#tracking)). This allows the follower to
subscribe to updates from the project / peer and signal interest by further
replicating the data across their network, making it available to their social
graph.

## git
A free and open source distributed version control system.

## gossip
A means of peer-to-peer communication that relies on the interactions of peers
to disseminate information. Participants in the Radicle network share and spread
data by keeping redundant copies of proejcts locally and sharing updates with
peers. This allows data to be disseminated according to use and value: the more
peers who are interested in certain data the more available a [project][pr] is
made to the network. See [Gossip](/how-it-works.md/#replication-model)

## maintainer
A [user][us] that manages updates to the canonical view of a project. A
maintainer is explicitly associated with the [project][pr] at the time of
creation or later, via the [project][pr] metadata [See Data
Model](/how-it-works.md/#data-model), but there may be multiple maintainers of a
project, all maintaining their own views. At creation, the creator of the
[project][pr] is the sole maintainer.

All (or a quorum of) maintainer signatures are required to write to the
canonical upstream branch of a [project][pr]. 

## main
How radicle-upstream refers to the default development branch of a project.

## master
How git refers to the default development branch of a repository

## node
A peer running an instance of the Radicle Link protocol. There can only one node
running per device.

## passphrase
A passphrase used to decrypt a peer's keypair (See
[Identities](how-it-works.md/#identities)) to enable access to the Radicle
network through the Upstream client. It's also needed to fetch and push
changesets to the Radicle network. 

## peer
A person running a node on the Radicle network. There can be only one peer per
device.

## peerID
The encoding of a peer's public key tied to their device. At Beta, there will
only be one peerID per device (See
[Architecture](how-it-works.md/#architecture))

## profile
A [user][us]'s visual identity on Upstream. It includes the [user][us]'s display
name, Radicle ID (for now, their peerID), and emoji avatar. This is what other
users see when they discover on the network.

## project
A [project][pr] consists of source code, issues, and proposed changesets. It
carries a unique, shareable [Radicle ID](Radicle ID). A [project][pr] also
includes the identities of all its [maintainers](maintainers) The entirety of
the [project][pr] data and metadata, including social artifacts such as
comments, are stored within the [project][pr]'s [repository][re]. [project][pr]s
are the principle unit of replication.

## project name
A human-readable [project][pr] name that is chosen for a project. It is not
guaranteed to be unique.

## publish
To make data public to the network. Once something is published, it may be
fetched and replicated by connected peers.

## Radicle ID
Unique shareable identifiers for peers and projects in the Radicle Network. 

## Radicle Link
A peer-to-peer replication protocol built on Git. See [How it
Works](how-it-works.md).

## Radicle network
The network of peers that replicate and gossip data with Radicle Link.

## radicle-upstream
A desktop application (graphic [user][us] interface, GUI) built to interact with
and enable access to the Radicle Network and, initially, the primary
end-[user][us] experience. However, it will be one of many potential clients
that [user][us]s can use to access the Radicle Network.

## remote
Another peer's view of a project. Remotes can be pulled/fetched from.
Maintainers of a project may choose to track other peer's views of their project
by adding them as a remote. In the context of a project, maintainers of a
repository may choose to track the views of other owners (this is called a
remote in Git terminology: a named reference to a remote repository). If the
remote repository is found to track other remotes, the tracking repository shall
also transitively track those, up to a configurable N degrees out (currently in
the works).

## repository
A physical manifestation or working copy of a [project][pr], tied to a
[user][us]'s machine. A [repository][re] in Radicle contains the owner's view
and the view of any tracked peers. To publish a [repository][re] to the network,
it must first be initialized as a [project][pr] or part of a [project][pr]. A
[repository][re] can be addressed by a shareable URN (See Radicle ID), which is
then resolved to a physical location on the network, for the purpose of
replication (See Radicle URNs)

## seed node
Always-on nodes that automatically track discovered projects and serves data to
their connected peers (see join), thereby increasing the availability of these
projects on the network. More on the [role and impacts of seeds][rl].

## upstream
The [repository][re] in which code contributions for a [project][pr] are
intended to be merged once they pass the review process (i.e. canonical upstream
or mainline). The upstream is often the [repository][re] of the [project][pr]'s
original maintainer or creator. For everyone but the creator of this
[repository][re], upstream will be a remote [repository][re].

## user
Any individual who has created a Radicle ID on the Radicle network through the
Upstream app. 


[br]: #branch [pe]: #peer [pr]: #project [re]: #repository [ri]: #radicle-id
[us]: #user

[rl]: https://radicle.xyz/radicle-link.html
