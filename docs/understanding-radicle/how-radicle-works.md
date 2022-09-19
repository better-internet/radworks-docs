---
id: how-radicle-works
title: How Radicle works
---

At its most global, Radicle is a decentralized autonomous organization (DAO) solving challenges around sovereign code
infrastructure and incentives for open-source work.

If you're curious about that global vision, we recommend reading [_Towards decentralized code
collaboration_](https://radicle.mirror.xyz/Qz4Rr0R54KLPurqqswsQ2tfRtBs9MOYpw3dlY9VjyQ8) and [_Introducing
RAD_](https://radicle.mirror.xyz/CgcHpSXUlPvwMVaUVVaJ7r8bIJI2BOKOytaI9-nO9oY), which details the governance token used
by the DAO.

However, for the sake of this document, we'll focus on the user-facing parts of this ecosystem &mdash; what you can
interact with, as a user, to securely collaborate on software over a peer-to-peer network built on Git.

## Key parts of the Radicle landscape

There are a few important open-source protocols, concepts, projects, and assets that integrate to make [Radicle's
vision](https://radicle.mirror.xyz/Qz4Rr0R54KLPurqqswsQ2tfRtBs9MOYpw3dlY9VjyQ8) for decentralized code collaboration
possible.

- [**Identity**](#radicle-identity): A cryptographically-signed JSON document that identifies a device or a
  project, and which is stored alongside standard Git data when hosted, cloned, and replicated.
- [**Network**](#radicle-network): The people who use Radicle tooling and the projects they collaborate on,
  which is supported by seed nodes, which provide a data availability layer through a monorepo of projects and
  identities.
- [**Peer-to-peer protocol**](#peer-to-peer-protocol): The fully peer-to-peer protocol for disseminating Git
  repositories via gossip-based replication, enabling the hosting and sharing of projects without knowing where it’s
  physically stored within the Radicle network.
- **Command-line tooling**: 
- **Web app**: 
- **Drips**: 

## Radicle identity

Everything Radicle is trying to build around decentralized code collaboration starts with the concept of identity. In
Radicle, an identity is a *portable* JSON document that defines a user or a project on the Radicle network.

The most important part is the hashed content identifier—the **peer ID**—which identifies it uniquely wherever it’s
stored or discovered on the Radicle network. Each Radicle identity also has a few required metadata fields, which
determine whether it’s a user or project identity:

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

An identity can also be extended with additional metadata as needed by the client or interface that’s interacting with
it.

When you create a user identity, it’s signed with an Ed25519 keypair that ensures only you can change the identity and
push changes to the Radicle network on behalf of your peer ID.

When you create a project, your identity is added as a **delegate**—more on those in a moment.

### Why Radicle starts with identity

At their core, Git repositories are just commit histories. Eventually, these commit histories develop into complex trees
of folders, files, and code.

But if you take two Git repositories at face value, there’s no genuine way of comparing them. You can look at the commit
logs, diff individual files, but there’s no way of knowing, just through the data that is stored in Git, whether project
A and project B are meant to converge someday. There’s no way of knowing whether their histories and their `HEAD` should
be the same. There’s also no way of identifying which repository is meant to be canonical.

All this uncertainty happens because source code is *portable*—it can be cloned, edited, and hosted somewhere else
without the project’s maintainer knowing about it.

Centralized code collaboration platforms like GitHub and GitLab create also create identities for the projects they
host. If you create two identical repositories on these platforms, their identities are `github.com/bob/project` and
`gitlab.com/bob/project`. You might know they’re the same, but to a someone else, there’s no guarantee that the projects
are the same despite seemingly sharing a `bob/project` identity.

With centralized platforms, the code remains portable, but the *identity is non-portable*.

A portable Radicle identity solves this problem because your Radicle identity is always owned by *you*. Your identity
might be replicated many times across the Radicle network, but because it’s signed by your key, it’s always yours. Your
project may be replicated many times across the Radicle network, but because your identity is a delegate, only you can
make changes to the canonical remote/branch.

Radicle identities are perfect for a peer-to-peer protocol because *the data is shipped with the source code, but not in
the source code*.

### Delegates

Aside from is portable identity, the most important part of a project is the delegates.

When you create a project, you add your identity as a delegate. Every time you push new changes to the project, they’re
signed with your Radicle identity and your key.

When a project has multiple contributors, all of whom may be pushing code and patches to their individual remotes, the
delegate's remote is considered the "canonical" version of the project's code base.

## Radicle network

The Radicle network is the web of connections between users (via their identities, devices, and projects) and protocols.
No one owns this network, and it's all built on open-source code.

As we continue developing the [peer-to-peer protocol](#peer-to-peer-protocol) that enables decentralization via Git
gossip and replication, all your interactions with the Radicle network happen via seed nodes.

### Seed nodes

Seed nodes are the data availability layer for the Radicle network, designed to ensure that even if everyone in your
peer-to-peer network is offline, you can always retrieve Radicle project data from a seed node. Seed nodes store your
identity, but not your private keys, which means they can’t take actions on your behalf.

Seed nodes are based on fully [open-source
code](https://app.radicle.network/alt-clients.radicle.eth/rad:git:hnrkk9c4zt9thuxhwi1ukxqcrs5tmhbtcsony/tree/a19cdcb846a8360d8f55c10aac8175368881a6ee),
and Radicle currently maintains three seed nodes &mdash; willow.radicle.garden, pine.radicle.garden, and
maple.radicle.garden &mdash; with identical functionality.

Just like each person who uses Radicle, seed nodes store data in a monorepo, which organizes Radicle identities, project
metadata, and multiple remotes from anyone who has collaborated on a specific project. The data looks a little bit like
this:

```jsx
namespaces/
  refs/
    <project-one>/
      refs/
        heads/
        remotes/
          alice/
          eve/
    <project-two>/
      refs/
        heads/
        remotes/
          bob/
          tom/
          alice/
          eve/
    ...
```

Seed nodes have three primary components.

- The **HTTP API** (`radicle-http-api`), which allows for browsing Radicle projects on the web. It’s the foundation of
  the [Radicle web app](https://app.radicle.xyz/), but the API is entirely [open
  source](https://github.com/radicle-dev/radicle-interface) for anyone else to develop additional clients.
- The **Git server** (`radicle-git-server`), which acts as a bridge between the seed node's Git server and those who use
  it, replicating Git data and Radicle identities.

The Git server is the primary mode of replication at the moment, and it behaves in a push-pull fashion, just like
running `git push` or `git pull` to a repository you have with GitHub or any other Git provider. A lot happens behind
the scenes, like pushing identities, validating signatures, and replicating additional data like peers and sub-trees.

We could stop here, because seed nodes are already decentralized and open source. If you wanted to run a private Radicle
network, you can [host your own seed node](https://github.com/radicle-dev/radicle-client-services) for true peer-to-peer
collaboration.

But, the push-pull relationship between a local machine, seed node, and collaborators means that the project’s
location—which seed node contains the most up-to-date state—is a prominent part of the user experience. You *have* to
know and remember which seed note you’re working with.

Radicle's peer-to-peer protocol will solve this problem.

:::tip

The open-source code behind Radicle's seed nodes is maintained by the clients team at
[radicle-client-services](https://github.com/radicle-dev/radicle-client-services).

:::

## Peer-to-peer protocol

Radicle's vision for sovereign code collaboration has always been a peer-to-peer protocol that uses gossiping and
replication to decentralize data stored by Git.

With a P2P protocol:

- Peers track other peers.
- Peers track projects they are interested in.
- Peers gossip about projects, which means replicating updates from the peers they track and the projects they are
  interested in.

If you’re looking for a project hosted on the Radicle network, you can ask the network to fetch it based only on its
project URN. The P2P protocol asks anyone you’ve added as a peer, and if none of them have the project, they ask their
peers, going as deep as necessary to find the project you’re looking for.

Gossip abstracts away the need to know where the project is stored, which is how seed nodes are currently used. And
thanks to the [Radicle identity](#radicle-identity) system, you don't care whether you get a project's data directly
from a seed node or another Radicle user. You can always verify the integrity of the project and the identity of the
person who authored it, making it truly trustless.


The *Link team*


The `radicle-node` project is already underway

    Implementing a gossip protocol that is efficient enough and resilient to DoS.
        In an untrusted, open network, it’s very easy to produce misleading messages
        about where some project may be found. We need to work on mitigating this.
        Expiring routing table entries may be challenging, as well as knowing When
        a project may be out of sync.
    Scaling Git as a database.
        Git is basically loose refs (files) plus packed refs (packfiles). On the one
        side, keeping around hundreds of thousands or even millions of files is
        inefficient and not what file-systems were designed for; and on the other
        side, the packed ref format doesn’t allow for efficient eg. O(1) lookups.
        Since we’re potentially storing thousands or more repositories in one large
        monorepo, these numbers quickly add up. It’s worth exploring whether
        the monorepo storage itself is a good idea, or whether storage should
        involve multiple repos.
    Implementing Git replication between nodes.
        Doing this efficiently, and including validation of identities is tricky,
        since we’re operating on potentially the same refs. Proper locking of refs
        needs to be implemented, and staging of updates until refs are validated.
        We need a way of dealing with unintentional forks in commit histories.
    Implementing a simpler and more user-friendly identity system.
        We want first class support for public keys as user identifiers, with
        the option to support key-rotation etc.
        We’d like to have familiar workflows when editing project identity documents.


## Radicle CLI

TK

:::tip

The Radicle CLI is maintained by the *Clients team* at [radicle-cli](https://github.com/radicle-dev/radicle-cli).

:::

## Radicle web app

TK

:::tip

The Radicle web app is maintained by the *Clients team* at
[radicle-interface](https://github.com/radicle-dev/radicle-interface).

:::

## Radicle Drips

TK

:::tip

TK

:::
