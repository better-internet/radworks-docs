---
id: glossary
title: Glossary
---


## checkout
To create a working copy of a [project][pr]. This working copy is where a
[user][us] can make and publish changes to the project [repository][re] via 'git push rad'.
For more on how working copies work in Radicle, see [Working
Copies](how-it-works.md/#working-copies)

An individual change to a file (or set of files) that represents a single point
in a version controlled history. Every commit can be identified by it's unique
ID (in Git, the "SHA" or "hash"). This allows you to keep a record of all
changes committed to a [project][pr] history along with who made them and when.
Commits can also contain a brief description of what changes were made, also
known as a commit message.


## connect
To create a network connection to another Radicle [peer][pe]. Connected peers
spread information between each other via gossip.

## contributor
A [user][us] who has pushed code to a project.
[project][pr].

## display name
A changeable and non-unique human-readable name chosen by the [user][us]. Like a
"nickname" for a [Radicle ID][ri]. This will be possible to change in the
future. 

## follow
Following a [project][pr] or [peer][us] replicates its data to the your machine
(See [Tracking](how-it-works.md/#tracking)). This allows the follower to
subscribe to updates from the project / peer and signal interest by further
replicating the data across their network, making it available to other peers.

## git
A free and open source distributed version control system.

## gossip
A means of peer-to-peer communication that relies on the interactions of peers
to disseminate information. Participants in the Radicle network share and spread
data by keeping redundant copies of projects locally and sharing updates with
peers. This allows data to be disseminated according to use and value: the more
peers who are interested in certain data the more available it is
made to the network. See [Gossip](how-it-works.md/#replication-model)

## maintainer
A [user][us] who manages updates to the canonical view of a project. A
maintainer is explicitly associated with the [project][pr] at the time of
creation or later, via the [project][pr] metadata [See Data
Model](how-it-works.md/#data-model), but there may be multiple maintainers of a
project, all maintaining their own trees. At creation, the creator of the
[project][pr] is the sole maintainer.


## main
How radicle-upstream refers to the default development branch of a project.


## node
A peer running an instance of the Radicle Link protocol. There can only one node
running per device.

## passphrase
A sequence of characters used to encrypt a peer's private key (See
[Identities](how-it-works.md/#identities)) to enable access to the Radicle
network. It's also needed to fetch and push
changesets to the Radicle network. 

## peer
A device running the Radicle Link protocol.

## Device ID
The encoding of a peer's public key tied to their device. In the Beta, there will
only be one Device ID per user (See
[Architecture](how-it-works.md/#architecture))


## project
A [project][pr] consists of source code, issues, and proposed changesets. It
carries a unique, shareable [Radicle ID](Radicle ID). A [project][pr] also
includes the identities of all its [maintainers](maintainers). The entirety of
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
Unique shareable identifier for users and projects in the Radicle Network. Radicle IDs are usually shared as URNs.

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

then resolved to a physical location on the network, for the purpose of

## seed node
An always-on node that automatically tracks discovered projects and serves data to
their connected peers, thereby increasing the availability of these
projects on the network. More on the [role and impacts of seeds][rl].

## upstream
The [repository][re] in which code contributions for a [project][pr] are
intended to be merged once they pass the review process (i.e. canonical upstream
or mainline). The upstream is often the [repository][re] of the [project][pr]'s
original maintainer or creator. For everyone but the creator of this
[repository][re], upstream will be a remote [repository][re].

## user
Any individual who has created a Radicle ID on the Radicle network.
Upstream app. 


[br]: #branch
[pe]: #peer
[pr]: #project
[re]: #repository
[ri]: #radicle-id
[us]: #user

[rl]: https://radicle.xyz/radicle-link.html
