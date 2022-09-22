---
id: glossary
title: Glossary
---

## clone
To create a working copy of a [project](#project) on a user's machine. This working copy is where a person can make and
publish changes to a project locally, then push to their [remote](#remote).

## contributor
A [peer](#peer) who has pushed code to a [project](#project).

## delegate
Any [peer](#peer) who can sign on behalf of the project, which means their state is trusted within the context of the
project. There can be one or more delegates of a given project.

## display name
A non-unique human-readable name chosen by a Radicle [user](#user), like a "nickname" for someone's [Peer ID](#peer-id).

## git
A free and open source distributed version control system.

## gossip
A means of peer-to-peer communication that relies on the interactions of peers to disseminate information. Participants
share and spread data by keeping redundant copies of projects locally and sharing updates with peers. This allows data
to be disseminated according to use and value: the more peers who are interested in certain data the more available it
is made to the network.

## identity
A cryptographically-signed (with a Ed25519 keypair) JSON document that identifies a device or a project, stored
alongside standard Git data when hosted, cloned, and replicated.

## maintainer
A [user](#user) who manages and pushes updates to the canonical view of a project. A maintainer is explicitly associated
with the [project](#project) at the time of creation or later as a [delegate](#delegate), but there may be multiple
maintainers of a project, all maintaining their own remotes.

## main
How Radicle refers to the default development branch of a project.

## monorepo
Radicle uses Git as a database, with project data, remotes, and identities stored in a single Git monorepo.

## network
The people who use Radicle tooling and the projects they collaborate on, supported by seed nodes, which provide a data
availability layer for projects and identities.

## passphrase
A sequence of characters used to encrypt a peer's private key (see [identity](#identity)) to enable access to the
Radicle network. It's also needed to fetch and push changesets to the Radicle network.

## peer
A device using `rad` or another client to push/pull/sync data from the Radicle network.

## peer ID
One half of your Radicle [identity](#identity), which identifies your device, non-unique [display name](#display-name),
and code you publish on the Radicle network. Find your peer ID with `rad self`.

## personal URN
The other half of your Radicle [identity](#identity), which identifies you across devices. Find your personal URN with
`rad self`.

## project
A project consists of source code, issues, and patches. It carries a unique, shareable [project URN](#project-urn). A
project also includes the identities of all its [delegates](#delegate) and contributors. All project data and metadata,
including social artifacts such as comments, are stored within the project's repository on the user's machine.

## project name
A human-readable, non-unique name for a [project](#project).

## project URN
A unique identifier for a specific project on the Radicle network, roughly akin to the way GitHub identifies projects
with `user-name/project-name`. Required for sharing a project with collaborators and cloning. Find it by navigating to a
Radicle project on your system and running `rad .`.

## publish
To make data public to the network. Once something is published, it may be
fetched and replicated by connected peers.

## Radicle network
The network of seed nodes that store project and identity data and make it available to access or view via `rad` or the
web app.

## remote
A version of your project managed by another person. To collaborate with others by viewing, approving, and merging their
patches, you must track other remotes. View your project's current remotes with `rad track --remote` and add new ones
with `rad track <REMOTE-URN>`. For more on how remote repositories work, see the [Git
documentation](https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes).

## seed node
An always-on node stores Radicle project data/identities and makes them available for interactions with `rad` or through
the [web app](#web-app), acting as a data availability layer for the Radicle [network](#network).

## user
Any individual who has created a Radicle [identity](#identity) on the Radicle [network](#network).

## web app
The [Radicle web app](https://app.radicle.xyz) for viewing project data in a browser.
