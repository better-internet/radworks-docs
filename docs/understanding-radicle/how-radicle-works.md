---
id: how-radicle-works
title: How Radicle works
---

import Highlight from '@site/src/components/Highlight'

At its most global, Radicle is a software stack of applications and protocols to help developers host and collaborate on
code using a sovereign infrastructure. This also includes creating new opportunities and incentives for open-source
work.

Development of these applications and protocols is handled by the RadicleDAO, a decentralized autonomous organization.

If you're curious about that global vision, we recommend reading [_Towards decentralized code
collaboration_](https://radicle.mirror.xyz/Qz4Rr0R54KLPurqqswsQ2tfRtBs9MOYpw3dlY9VjyQ8) and [_Introducing
RAD_](https://radicle.mirror.xyz/CgcHpSXUlPvwMVaUVVaJ7r8bIJI2BOKOytaI9-nO9oY), which details the governance token used
by the DAO.

However, for the sake of this document, we'll focus on the user-facing components of this ecosystem &mdash; what you can
interact with, as a user, to securely collaborate on software over a peer-to-peer network built on Git.

## Key components of the Radicle ecosystem

There are a few important open-source protocols, concepts, projects, and assets that integrate to make [Radicle's
vision](https://radicle.mirror.xyz/Qz4Rr0R54KLPurqqswsQ2tfRtBs9MOYpw3dlY9VjyQ8) for decentralized code collaboration
possible.

- [**Identity**](#radicle-identity): A cryptographically-signed JSON document that identifies a person or a project,
  stored alongside standard Git data when hosted, cloned, and replicated.
- [**Network**](#radicle-network): The people who use Radicle tooling and the projects they collaborate on, supported by
  seed nodes, which provide a data availability layer for code hosting and collaboration.
- [**Peer-to-peer (P2P) protocol**](#peer-to-peer-protocol): The protocol for disseminating Git repositories via gossip-based
  replication, enabling the hosting and sharing of projects without knowing where it's physically stored within the
  Radicle network.
- [**Command-line tooling (`rad`)**](#command-line-tooling-rad): The core tool for managing your code, project, and
  identity.
- [**Web app**](#web-app): The web-based interface for discovering, viewing, and sharing Radicle projects.
- [**Open-source funding (Drips)**](#open-source-funding-drips): An Ethereum protocol for continuously streaming funds
  to others, which will be integrated into the [web app](#web-app) as new value flows for developers to sustain their
  FOSS work.

## Radicle identity

Everything Radicle is trying to build around decentralized code collaboration starts with the concept of identity. In
Radicle, an identity is a *portable* JSON document that defines a `Person` or a `Project` on the Radicle network.

There are a few key benefits of integrating identity into Radicle's protocols and clients from the beginning.

- Your identity is local-first, stored and shipped within the Git data for your projects.
- You maintain ownership of your identity no matter where it might be stored on the Radicle network, like seed nodes or,
  in the future, across the P2P network.
- All actions you or others take within a Radicle project are cryptographically verified by default.

As a user, your identity includes a **Peer ID**, a hashed Ed25519 public key that cryptographically identifies a
_device_, which proves your identity when you're taking actions on the Radicle network, like pushing commits, commenting
on [issues](using-radicle/issues.md), or working with patches. Others can then verify those actions via your public key.
The **personal URN**, on the other hand, identifies you across devices.

A project identity is similar, except that it includes two additional fields, description and the default branch.

Each Radicle identity also has a few required metadata fields, which determine whether it's a `Person` or `Project`
identity:

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

An identity can also be extended with additional metadata as needed by the client or interface that's interacting with
it, which would let developers extend Radicle's core functionality. There are many future practical uses for metadata,
but for now, they include adding an Ethereum address or using project [issues](using-radicle/issues.md).

### Delegates

When you create a project, you add your identity as a delegate. Every time you push new changes to the project, they're
signed with your Radicle identity and your key.

Those involved in a Radicle project can choose to manage delegates and decide on canonical versions however they'd like.
If you're the only contributor to a project, and you're the delegate, then you'd likely consider the tip of your
`main`/`master` branch to be the canonical version.

<!-- When a project has multiple contributors and/or delegates, their remotes diverge as they individually add and push code
to Radicle. In this case, they need to agree on a mechanism, like a quorum on the most recent commit, to determine the
canonical state.

For example, let's use an example of a project with two delegates and their respective default branches `main` (commits
from bottom to top, top being the newest):

```
commit 3                 commit 5
commit 2                 commit 2
commit 1                 commit 1
delegate A `main` |  delegate B `main`
```

The quorum is at commit `2` making that the latest canonical version. But, this is just one example of how delegates
might manage their projects. -->

## Radicle network

The Radicle network is the web of connections between users (via their identities, devices, and projects) and protocols.
No one owns this network, and it's all built on open-source code.

As we continue developing the [peer-to-peer protocol](#peer-to-peer-protocol) that enables decentralization via Git
gossip and replication, all your interactions with the Radicle network happen via seed nodes.

### Seed nodes

Seed nodes are the data availability layer for the Radicle network, designed to ensure that even if everyone in your
peer-to-peer network is offline, you can always retrieve Radicle project data from a seed node. Seed nodes store your
identity, but not your private keys, which means they can't take action on your behalf.

Seed nodes are based on fully [open-source code](https://github.com/radicle-dev/radicle-client-services), and Radicle
currently maintains three seed nodes &mdash;
[willow.radicle.garden](https://app.radicle.xyz/seeds/willow.radicle.garden),
[pine.radicle.garden](https://app.radicle.xyz/seeds/pine.radicle.garden), and
[maple.radicle.garden](https://app.radicle.xyz/seeds/maple.radicle.garden) &mdash; with identical functionality.

Like each person using Radicle, seed nodes store identities, project metadata, and project data using Git, in a format
that looks a like this:

```jsx
refs/
  namespaces/
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

Seed nodes have two primary components.

- The **HTTP API** (`radicle-http-api`), which allows for browsing Radicle projects on the web. It's the backend of the
  [Radicle web app](https://app.radicle.xyz/), but the API is entirely [open
  source](https://github.com/radicle-dev/radicle-interface) for anyone else to develop additional clients.
- The **Git server** (`radicle-git-server`), which acts as a bridge between the seed node's Git server and those who use
  it, replicating Git data and Radicle identities.

The Git server is the primary mode of replication at the moment, and it behaves in a push-pull fashion, just like
running `git push` or `git pull` to a repository you have with GitHub or any other Git provider. A lot happens behind
the scenes, like pushing identities, validating signatures, and replicating additional data like peers and sub-trees.

We could stop here, because seed nodes are already decentralized and open source. If you want to run a private Radicle
network, you can [host your own seed node](https://github.com/radicle-dev/radicle-client-services) for true peer-to-peer
collaboration.

But, the push-pull relationship between a local machine, seed node, and collaborators means that the project's
location—which seed node contains the most up-to-date state—is a prominent part of the user experience. You *have* to
know and remember which seed node you're working with.

Radicle's peer-to-peer protocol will solve this problem.

:::info

The open-source code behind Radicle's seed nodes is maintained by the clients team at
[`radicle-client-services`](https://github.com/radicle-dev/radicle-client-services).

:::

## Peer-to-peer protocol

Radicle's vision for sovereign code collaboration has always been a peer-to-peer protocol for decentralizing data stored
by Git.

With a P2P protocol:

- Peers track other peers.
- Peers track projects they are interested in.
- Peers gossip about projects, which means replicating updates from the peers they track and the projects they are
  interested in.

If you're looking for a project hosted on the Radicle network, you can ask the network to fetch it based only on its
project URN. The P2P protocol asks anyone you've added as a peer, and if none of them have the project, they ask their
peers, going as deep as necessary to find the project you're looking for.

Gossip abstracts away the need to know where the project is stored, which is how seed nodes are currently used. And
thanks to the [Radicle identity](#radicle-identity) system, you don't care whether you get a project's data directly
from a seed node or another Radicle user. You can always verify the integrity of the project and the identity of the
person who authored it, making it truly trustless.

### The Heartwood project

As of [August 2022](https://radicle.community/t/alt-clients-community-update-august-2022/3024), Radicle sunset the
long-running [Radicle Link](https://github.com/radicle-dev/radicle-link) project in favor of the [**Heartwood** protocol
and stack](https://github.com/radicle-dev/heartwood).

The primary function of the P2P protocol is to locate repositories on the network and serve them to users in a timely
and resource-efficient manner. Thus, the protocol needs to:

- Locate repositories by finding which nodes host it.
- Replicate a given repository between two nodes.
- Verify the authenticity of all data retrieved from the network so that any node can serve any data without needing
  centralized notions of "trust."

Some of [projects and challenges](https://radicle.community/t/alt-clients-community-update-august-2022/3024/2) ahead for
the team include:

- **Implementing a gossip protocol that is efficient enough and resilient to DoS.**
- **Scaling Git as a database.**
- **Implementing Git replication between nodes.**
- **Implementing a simpler and more user-friendly identity system.**

The Heartwood project is under active development and not yet ready for use. We highly recommend reading the [Radicle
Improvement Proposals
(RIPs)](https://app.radicle.xyz/seeds/clients.radicle.xyz/rad:git:hnrkx7ruakgb9ozzi7atwb1rh6moq8pjonp6o/tree) current
state and future of Radicle's P2P network.

:::info

The P2P protocol is maintained by the *Clients team* at [`heartwood`](https://github.com/radicle-dev/heartwood).

:::

## Command-line tooling (`rad`)

The Radicle command-line tooling, available with the `rad` command, allow developers to [manage software and publish
code securely](https://radicle.xyz/) on the Radicle network.

`rad` is responsible for creating and managing your [identity](#radicle-identity), including your secret keys and Git
data. You also use it to initialize new Radicle projects, push your project to the [network](#radicle-network), create
and manage issues, collaborate with patches, and much more.

If you're hoping to get started with Radicle for the first time, installing `rad` is your first step.

<Highlight>

  See the **[Radicle website](https://radicle.xyz/get-started.html)** for the most up to date installation instructions for macOS and Linux, including the process for creating your Radicle identity.

</Highlight>

:::info

The CLI tooling is maintained by the *Clients team* at [`radicle-cli`](https://github.com/radicle-dev/radicle-cli).

:::

## Web app

The Radicle web app, often referred to as the Radicle Interface (`radicle-interface`), is hosted at
[app.radicle.xyz](https://app.radicle.xyz/).

The web app interacts with the HTTP API bundled in [seed nodes](#seed-nodes) to allow developers to [view and
share](using-radicle/view-share.md) projects, [clone](using-radicle/clone.md) projects, navigate a project's tree and
individual files, look at the commit history with rich diffs, and much more. Because it uses the open-source HTTP API,
it could eventually be one of many web interfaces created for exploring the Radicle network.

See
[`radicle-example`](https://app.radicle.network/seeds/willow.radicle.garden/rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy/tree)
for a basic example project or the
[`radicle-cli`](https://app.radicle.xyz/seeds/seed.alt-clients.radicle.xyz/rad:git:hnrkmg77m8tfzj4gi4pa4mbhgysfgzwntjpao/tree/cc80d84ea5be6466647777224c1131b2e0ad11c8)
for a functional project.

As development continues, the Clients team will enable additional collaboration and discovery features on the web app,
including creating/managing issues, reviewing patches, and more.

:::info

The web app is maintained by the *Clients team* at
[`radicle-interface`](https://github.com/radicle-dev/radicle-interface).

:::

## Open-source funding (Drips)

Drips is an Ethereum protocol that allows users and web3 apps to continuously stream funds to others, with continuous
settlement for use cases like contributor payments, vesting and subscription memberships. Drips is an agnostic protocol
&mdash; others could leverage in applications outside of Radicle.

In [August 2022](https://radicle.community/t/new-core-team-radicle-funding/3021), RadicleDAO announced the Funding team,
which merges the Drips and Workstreams core teams to focus on the protocols and user experiences will enable a more
sustainable future for FOSS developers using Radicle.

This effort includes:

- Drips smart contracts
- Drips landing page and application
- Drips SDK and subgraphs
- Funding experiences within the [web app](#web-app)
- Maintaining the Workstreams application, which may be merged with Drips

The Funding team's goal is to create a new cultural norm where projects and developers programatically and transparently
fund their code dependencies using the Drips protocol.

:::tip

Drips is maintained by the *Funding team* at [`drips-app-v2`](https://github.com/radicle-dev/drips-app-v2),
[`drips-contracts`](https://github.com/radicle-dev/drips-contracts),
[`drips-js-sdk`](https://github.com/radicle-dev/drips-js-sdk), and more.

:::
