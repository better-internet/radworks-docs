---
id: what-is-radicle
title: What is Radicle?
sidebar_label: What is Radicle?
slug: /
---

Radicle is a decentralized code collaboration network built on open protocols 🌱. It enables developers to collaborate
on code without relying on trusted intermediaries. Radicle was designed to provide similar functionality to centralized
code collaboration platforms — or "forges" — while retaining Git’s peer-to-peer nature, building on what made
distributed version control so powerful in the first place. 

- Instead of user accounts and logins, Radicle uses public key cryptography to identify projects and their
  collaborators.
- Instead of issue trackers hosted and owned by a corporation, Radicle uses seed nodes. The Radicle Foundation sponsors
  some, but you can always host a seed node of your own, and use all the same collaboration tools/processes, using
  [open-source code](https://github.com/radicle-dev/radicle-client-services).
- Instead of dictating your process for collaboration, Radicle lets anyone build new tools or design new workflows
  around completely open protocols.

You get recognizable collaboration flows from centralized code hosting platforms — the "forges" like GitHub and GitLab —
while also eliminating the reliance and risk on these corporate platforms.

Two interlacing clients create this experience.

1. The **[`rad` command-line
   tool](https://app.radicle.xyz/alt-clients.radicle.eth/rad:git:hnrkmg77m8tfzj4gi4pa4mbhgysfgzwntjpao/tree)**, which interacts with Git and the Radicle network to help you host code or collaborate on projects.
2. The **[web app](https://app.radicle.xyz)**, which provides a visual interface for discovering projects, viewing
   code, and viewing patches from collaborators.

Apart from **code collaboration**, Radicle also tries to address the issue of **open source funding** through
[Drips](https://www.drips.network/), an Ethereum protocol for generating recurring income with subscriptions and NFT
memberships. Drips helps you create a circular funding network by dripping funds to your favorite creators and
dedicating a percentage of your incoming drips to others.

## How do I use Radicle?

Because Radicle is built on open protocols, there will never be *one true way* to do something on the Radicle network.

Instead, this documentation offers an *opinionated* way to take common actions around hosting code on the Radicle
network and collaborating with others using Radicle-developed projects and interfaces.

> **To start hosting and collaborating on code in the Radicle network, see our [getting started
> guide](getting-started.md).**

Additional discovery and collaboration features are planned and under active development.

For more help on using Radicle, be sure to join our [community channels](get-involved/community.md).

## Radicle's collaboration workflow

> Note: This is a practical overview of the current collaboration workflow using Radicle-built projects. This will
> change as both the protocols and projects change and add new functionality in the future.

Maintainers (also known as delegates) use `rad init` and `rad push` to create a project and synchronize project data
between their local state and a canonical branch (usually `main` or `master`) on the configured seed node. This makes
the project discoverable on the Radicle web interface if collaborators know the [project URN and seed
node](using-radicle/view-share.md).

Collaborators use `rad clone` to [clone](using-radicle/clone.md) the canonical branch of an existing project on the
Radicle network to their local state, make changes, and [use `rad push`](using-radicle/push.md) to synchronize those
changes with a seed node.

Maintainers can use the CLI to [find](using-radicle/view-share.md) and
[review/merge](using-radicle/track-review-merge.md) collaborations to their project. With the CLI, they use `rad track`
to view the remote peer from their working copy, `git diff` to see the proposed changes, `git merge` to merge them, and
`rad push` to publish the new state of the canonical branch.
