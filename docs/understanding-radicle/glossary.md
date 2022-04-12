---
id: glossary
title: Glossary
---

## clone
To create a working copy of a [project][pr] on a user's machine. This working
copy is where a person can make and publish changes to a project locally.

## connect
To create a network connection to another Radicle [peer][pe]. Connected peers
spread information between each other via [gossip][gp].

## contributor
A [peer][pe] who has pushed code to a [project][pr].

## display name
A non-unique human-readable name chosen by a Radicle [user][us]. Like a
"nickname" for someone's [Peer ID](#peer-id). This will be possible to change in
the future.

## follow
Following a [project][pr] replicates it to your machine. This allows the
follower to subscribe to updates from the project's [maintainer(s)][ma] or other
remotes. It is also a way to signal interest in the project or peer by further
replicating the data across their network, making it available to other people
on the network. See [Tracking][hiw-tr].

## fork
Forking a project in Radicle clones a working copy to your machine and publishes
it as a project to the network.

## git
A free and open source distributed version control system.

## gossip
A means of peer-to-peer communication that relies on the interactions of peers
to disseminate information. Participants in the Radicle network share and spread
data by keeping redundant copies of projects locally and sharing updates with
peers. This allows data to be disseminated according to use and value: the more
peers who are interested in certain data the more available it is made to the
network. See [Gossip][hiw-rm].

## maintainer
A [user][us] who manages and pushes updates to the canonical view of a project.
A maintainer is explicitly associated with the [project][pr] at the time of
creation or later, via the [project][pr] metadata (see [Data Model][hiw-dm]),
but there may be multiple maintainers of a project, all maintaining their own
trees. At creation, the creator of the [project][pr] is the sole maintainer.

## main
How Radicle Upstream refers to the default development branch of a project.

## monorepo
Radicle uses Git as a database. This means everything is stored in a single Git monorepo. Please see [here][hiw-mr] for more details. 

## node
A [peer][pr] running an instance of the Radicle Link protocol. There can only be
one node running per device.

## passphrase
A sequence of characters used to encrypt a peer's private key (See
[Identities][hiw-id]) to enable access to the Radicle network. It's also needed
to fetch and push changesets to the Radicle network.

## peer
A device running the Radicle Link protocol.

## peer ID

Part of your identity on the Radicle network. It identifies your device, a non-unique [display
name](#display-name) and the code you publish on the Radicle network, and is secured with an
Ed25519 keypair.

## personal URN

A unique identifier that allows you to register a permanent name with our opt-in integration with the Ethereum network.

## project
A [project][pr] consists of source code, issues, and proposed changesets. It
carries a unique, shareable [project URN](#project-urn). A [project][pr] also includes the
identities of all its [maintainers][ma]. The entirety of the [project][pr] data
and metadata, including social artifacts such as comments, are stored within the
[project][pr]'s repository on the user's machine. [Project][pr]s are the
principle unit of replication.

## project name
A human-readable name that is chosen for a [project][pe]. It is not guaranteed
to be unique.

## project URN

A unique identifier for a specific project on the Radicle network, roughly akin to the way GitHub identifies projects
with `user-name/project-name`. Required for sharing a project with collaborators and cloning.

## publish
To make data public to the network. Once something is published, it may be
fetched and replicated by connected peers.

## Radicle Link
A peer-to-peer replication protocol built on Git. See [How it Works][hiw].

## Radicle network
The network of peers that replicate and gossip data with Radicle Link.

## Radicle Upstream
An open-source desktop application (graphic [user][us] interface, GUI) built to
interact with and enable access to the Radicle network. However, in the future, it will be one of
many potential clients that [user][us]s can use to access the Radicle network.

## remote
Another peer's view of a project. Remotes can be pulled/fetched from.
Maintainers of a project may choose to track other peer's views of their project
by adding them as a remote. In the context of a project, maintainers of a
repository may choose to track the views of other owners by adding them as a
remote to the project. If the remote repository is found to track other remotes,
the tracking repository shall also transitively track those, up to a
configurable N degrees out.

## seed
An always-on node that automatically tracks discovered projects and serves data
to their connected peers, thereby increasing the availability of these projects
on the network. More on the [role and impacts of seeds][hiw-se].

## upstream
The [repository][re] in which code contributions for a [project][pr] are
intended to be merged once they pass the review process (i.e. canonical upstream
or mainline). The upstream is often the [repository][re] of the [project][pr]'s
original maintainer or creator. For everyone but the creator of this
[repository][re], upstream will be a remote [repository][re].

## user
Any individual who has created a Radicle ID on the Radicle network via the
Upstream client.


[br]: #branch
[gp]: #gossip
[ma]: #maintainer
[pe]: #peer
[pr]: #project
[re]: #repository
[ri]: #radicle-id
[us]: #user

[hiw]: how-it-works.md
[hiw-dm]: how-it-works.md/#data-model
[hiw-id]: how-it-works.md/#identities
[hiw-rm]: how-it-works.md/#replication-model
[hiw-se]: how-it-works.md/#seeding
[hiw-tr]: how-it-works.md/#tracking
[hiw-wc]: how-it-works.md/#working-copies
[hiw-mr]: how-it-works.md/#overview-2
