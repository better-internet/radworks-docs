---
id: troubleshooting
title: Troubleshooting
---

[for error codes, we can use same formatting as glossary]

## branch
A parallel version of a [repository](#repository) that consists of changesets. A branch is separate from the default branch, allowing one to work freely without disrupting the "live" version of a [repository](#repository). Once changes are made, a branch can be merged back into the default branch to publish changes.

## checkout
To create a working copy of a [project](#project). This working copy is where a [user](#user) can make and publish changes to [repository](#repository) via 'git push rad'.

## commit
An individual change to a file (or set of files) that represents a single point in a version controlled history. Every commit can be identified by it's unique ID (in Git, the "SHA" or "hash"). This allows you to keep a record of all changes committed to a [project](#project) history along with who made them and when. Commits can also contain a brief description of what changes were made, also known as a commit message.

To "commit" is the action of storing a new snapshot of the [project](#project)'s state in the version controlled [project](#project) history. This new commit also represents the current state of the index and advances HEAD to point at the new commit.

## connect
To create a network connection to another Radicle [peer](#peer). Connected peers spread information between each other.

## contributor
A [user](#user) that has pushed code or other data to a [branch](#branch) of a [project](#project).

## display name
A changeable and non-unique human-readable name chosen by the [[user](#user)](#[user](#user)). Like a "nickname" for a [Radicle ID](#radicle-id). You can change it in your profile at any time.

## follow
Following a [project](#project) or [user](#user) replicates it's data to the [user](#user)'s machine. This allows a [user](#user) to subscribe to the changes of a remote [repository](#repository) and signal interest by further replicating the data within their social graphs.

## git
A free and open source distributed version control system.

## gossip
A means of peer-to-peer communication that relies on the interactions of peers to disseminate information. Participants in the Radicle network share and spread data by keeping redundant copies of repositories locally and sharing updates with peers. This allows data to be disseminated according to use and value: the more peers who are interested in certain data the more available a [project](#project) is made to the network.

## maintainer
A [user](#user) that manages the work of a [project](#project)'s [repository](#repository) by triaging issues and adjusting permissions of other [user](#user)s who wish to contribute to the [project](#project). A maintainer is explicitly associated with the [project](#project) at the time of creation or later, via the [project](#project) metadata.

All (or a quorum of) maintainer signatures are required to write to the canonical upstream branch of a [project](#project). Maintainers are a subset of contributors. There can be more than one per [project](#project), and at creation, the creator of the [project](#project) is the sole maintainer.

## main
How radicle-upstream refers to the default development branch.

## master
How git refers to the default development branch.

## node
A peer running an instance of the Radicle Link protocol. There must be only one node running per PeerID. peer and node can be used interchangeably.

## passphrase
A passphrase is used to protect your account on your computer. Think of it like a computer's password. You can't recover your account with it, but it prevents someone from accessing your account if your computer is stolen or hacked.

## peer
See node, they are used interchangeably.

## profile
A [user](#user)'s visual identity on the Radicle network. It includes the [user](#user)'s display name, Radicle ID, and avatar. This is what peers see about other [user](#user)'s they discover on the network.

## project
A [project](#project) consists of source code, issues, and proposed changesets. It carries a unique, shareable peer-to-peer identifier ([project](#project) ID). A [project](#project) also includes the identities of all its maintainers: peers with designated rights over the [project](#project)'s identity. The entirety of the [project](#project) data and metadata, including social artifacts such as comments, are stored within the [project](#project)'s [repository](#repository). [project](#project)s are the principle unit of replication.

## project ID
The initial version of the [project](#project) metadata file ([project](#project).json) together with the author's private key is digested and used to generate the [project](#project) ID. A [project](#project) ID is a 32-byte random identifier.

## project metadata
The [project](#project) metadata is stored in [project](#project).json. It includes the name, description, and maintainer identities (i.e. PeerIDs) of the [project](#project). Any update to the [project](#project) metadata must be signed by a quorum (as defined by the [project](#project)'s governance) of maintainers. The history of the metadata file is backed by the underlying DVCS (usually Git), and is verified upon replication.

## project name
A human-readable [project](#project) name that is given to the [project](#project) ID. It is not guaranteed to be unique

## publish
To make data public to the network. Once something is published, it may be replicated and stored in multiple copies on the network.

## rad remote
The remote a [user](#user) has to push to in order for their [repository](#repository) to be published on Radicle. This is the only remote managed by Radicle that can be pushed to.

`git push rad`

## Radicle ID
A unique shareable identifier that's owned by a [user](#user) and tied to their device. It's an encoding of a public key — a signature made in Radicle can be verified against it.

## Radicle Link
A peer-to-peer replication protocol built on Git. You can read more about it here: https://radicle.xyz/radicle-link.html.

## Radicle network
The network of peers that are replicating on the Radicle Link protocol.

## radicle-upstream
A desktop application (graphic [user](#user) interface, GUI) built to interact with and enable access to the Radicle Network and, initially, the primary end-[user](#user) experience. However, it is one of many potential clients that [user](#user)s can use to access the Radicle Network.

## remote
A remote copy of a [repository](#repository) with the same [project](#project) ID, tracked by the VCS. Remotes can be pulled/fetched from. Maintainers of a [repository](#repository) may choose to track the repositories of other owners. If the remote [repository](#repository) (or "remote," in Git terminology) is found to track other remotes, the tracking [repository](#repository) shall also transitively track those, up to a configurable N degrees out.

## repository
A physical manifestation or working copy of a [project](#project), tied to a [user](#user)'s machine. A [repository](#repository) in Radicle contains the owner's view and the view of any tracked peers. To publish a [repository](#repository) to the network, it must first be initialized as a [project](#project) or part of a [project](#project). A [repository](#repository) can be addressed by a shareable URN, which is then resolved to a physical location on the network, for the purpose of replication. This URN has the following form: `rad:git:<identity hash>`

## seed node
An "always-on" node that automatically tracks new and updated [project](#project)s and serves that data to their connected peers (see join), thereby increasing the availability of these [project](#project)s on the network. More on the role and impacts of seeds: https://radicle.xyz/radicle-link.html.

## upstream
The [repository](#repository) in which code contributions for a [project](#project) are intended to be merged once they pass the review process (i.e. canonical upstream or mainline). The upstream is often the [repository](#repository) of the [project](#project)'s original maintainer or creator. For everyone but the creator of this [repository](#repository), upstream will be a remote [repository](#repository).

## [user](#user)
Any individual who has created a Radicle ID on the Radicle network.