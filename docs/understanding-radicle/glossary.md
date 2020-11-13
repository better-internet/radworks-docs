---
id: glossary
title: Glossary
---

## branch
A parallel version of a [repository][re] that consists of changesets. A branch
is separate from the default branch, allowing one to work freely without
disrupting the "live" version of a [repository][re]. Once changes are made, a
branch can be merged back into the default branch to publish changes.

## checkout
To create a working copy of a [project][pr]. This working copy is where a
[user][us] can make and publish changes to [repository][re] via 'git push rad'.

## commit
An individual change to a file (or set of files) that represents a single point
in a version controlled history. Every commit can be identified by it's unique
ID (in Git, the "SHA" or "hash"). This allows you to keep a record of all
changes committed to a [project][pr] history along with who made them and when.
Commits can also contain a brief description of what changes were made, also
known as a commit message.

To "commit" is the action of storing a new snapshot of the [project][pr]'s
state in the version controlled [project][pr] history. This new commit also
represents the current state of the index and advances HEAD to point at the new
commit.

## connect
To create a network connection to another Radicle [peer][pe]. Connected peers
spread information between each other.

## contributor
A [user][us] that has pushed code or other data to a [branch][br] of a
[project][pr].

## display name
A changeable and non-unique human-readable name chosen by the [user][us]. Like
a "nickname" for a [Radicle ID][ri]. You can change it in your profile at any
time.

## follow
Following a [project][pr] or [user][us] replicates it's data to the
[user][us]'s machine. This allows a [user][us] to subscribe to the changes of a
remote [repository][re] and signal interest by further replicating the data
within their social graphs.

## git
A free and open source distributed version control system.

## gossip
A means of peer-to-peer communication that relies on the interactions of peers
to disseminate information. Participants in the Radicle network share and
spread data by keeping redundant copies of repositories locally and sharing
updates with peers. This allows data to be disseminated according to use and
value: the more peers who are interested in certain data the more available a
[project][pr] is made to the network.

## maintainer
A [user][us] that manages the work of a [project][pr]'s [repository][re] by
triaging issues and adjusting permissions of other [user][us]s who wish to
contribute to the [project][pr]. A maintainer is explicitly associated with the
[project][pr] at the time of creation or later, via the [project][pr] metadata.

All (or a quorum of) maintainer signatures are required to write to the
canonical upstream branch of a [project][pr]. Maintainers are a subset of
contributors. There can be more than one per [project][pr], and at creation,
the creator of the [project][pr] is the sole maintainer.

## main
How radicle-upstream refers to the default development branch.

## master
How git refers to the default development branch.

## node
A peer running an instance of the Radicle Link protocol. There must be only one
node running per PeerID. peer and node can be used interchangeably.

## passphrase
A passphrase is used to protect your account on your computer. Think of it like
a computer's password. You can't recover your account with it, but it prevents
someone from accessing your account if your computer is stolen or hacked.

## peer
See node, they are used interchangeably.

## peerID
A unique shareable identifier that's owned by a [user][us] and tied to their
device. It's an encoding of a public key — a signature made in Radicle can be
verified against it.

## profile
A [user][us]'s visual identity on the Radicle network. It includes the
[user][us]'s display name, Radicle ID, and avatar. This is what peers see about
other [user][us]'s they discover on the network.

## project
A [project][pr] consists of source code, issues, and proposed changesets. It
carries a unique, shareable peer-to-peer identifier ([project][pr] ID). A
[project][pr] also includes the identities of all its maintainers: peers with
designated rights over the [project][pr]'s identity. The entirety of the
[project][pr] data and metadata, including social artifacts such as comments,
are stored within the [project][pr]'s [repository][re]. [project][pr]s are the
principle unit of replication.

## project ID
The initial version of the [project][pr] metadata file ([project][pr].json)
together with the author's private key is digested and used to generate the
[project][pr] ID. A [project][pr] ID is a 32-byte random identifier.

## project metadata
The [project][pr] metadata is stored in [project][pr].json. It includes the
name, description, and maintainer identities (i.e. PeerIDs) of the
[project][pr]. Any update to the [project][pr] metadata must be signed by a
quorum (as defined by the [project][pr]'s governance) of maintainers. The
history of the metadata file is backed by the underlying DVCS (usually Git),
and is verified upon replication.

## project name
A human-readable [project][pr] name that is given to the [project][pr] ID. It
is not guaranteed to be unique

## publish
To make data public to the network. Once something is published, it may be
replicated and stored in multiple copies on the network.

## rad remote
The remote a [user][us] has to push to in order for their [repository][re] to
be published on Radicle. This is the only remote managed by Radicle that can be
pushed to.

`git push rad`

## Radicle Link
A peer-to-peer replication protocol built on Git. You can read more about it
[here][rl].

## Radicle network
The network of peers that are replicating on the Radicle Link protocol.

## radicle-upstream
A desktop application (graphic [user][us] interface, GUI) built to interact
with and enable access to the Radicle Network and, initially, the primary
end-[user][us] experience. However, it is one of many potential clients that
[user][us]s can use to access the Radicle Network.

## remote
A remote copy of a [repository][re] with the same [project][pr] ID, tracked by
the VCS. Remotes can be pulled/fetched from. Maintainers of a [repository][re]
may choose to track the repositories of other owners. If the remote
[repository][re] (or "remote," in Git terminology) is found to track other
remotes, the tracking [repository][re] shall also transitively track those, up
to a configurable N degrees out.

## repository
A physical manifestation or working copy of a [project][pr], tied to a
[user][us]'s machine. A [repository][re] in Radicle contains the owner's view
and the view of any tracked peers. To publish a [repository][re] to the
network, it must first be initialized as a [project][pr] or part of a
[project][pr]. A [repository][re] can be addressed by a shareable URN, which is
then resolved to a physical location on the network, for the purpose of
replication. This URN has the following form: `rad:git:<identity hash>`

## seed node
An "always-on" node that automatically tracks new and updated [project][pr]s
and serves that data to their connected peers (see join), thereby increasing
the availability of these [project][pr]s on the network. More on the [role and
impacts of seeds][rl].

## upstream
The [repository][re] in which code contributions for a [project][pr] are
intended to be merged once they pass the review process (i.e. canonical
upstream or mainline). The upstream is often the [repository][re] of the
[project][pr]'s original maintainer or creator. For everyone but the creator of
this [repository][re], upstream will be a remote [repository][re].

## user
Any individual who has created a Radicle ID on the Radicle network.


[br]: #branch
[pe]: #peer
[pr]: #project
[re]: #repository
[ri]: #radicle-id
[us]: #user

[rl]: https://radicle.xyz/radicle-link.html
