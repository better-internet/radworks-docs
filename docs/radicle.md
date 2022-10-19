---
id: what-is-radicle
title: Get started with Radicle
sidebar_label: Get started
slug: /
---

import Installation from '@site/src/components/Installation'
import Grid from '@site/src/components/Grid'

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

Two interlacing clients create this experience:

1. The **[`rad` command-line tool](https://github.com/radicle-dev/radicle-cli)**, which interacts with Git and the
   Radicle network to help you host code or collaborate on projects.
2. The **[web app](https://app.radicle.xyz)**, which provides a visual interface for discovering projects, viewing
   code, and viewing patches from collaborators.

Curious about the ideas and protocols that make these clients possible? Read about [how Radicle
works](understanding-radicle/how-radicle-works.md).

Radicle also addresses **open source funding** through [Drips](https://www.drips.network/), an Ethereum protocol for
generating recurring income with subscriptions and NFT memberships. Drips helps you create a circular funding network by
dripping funds to your favorite creators and dedicating a percentage of your incoming drips to others.

## How do I get started?

Hosting and collaborating on code in Radicle relies on our CLI tooling &mdash; the bridge between Git and the Radicle
network &mdash; and your identity, which is a **Peer ID** and **personal URN**, which cryptographically verify you and
your devices with a secure Ed25519 keypair.

<Installation />

<Grid>
  <div>
    <a href="/migrate-github-radicle">
      Leaving GitHub in favor of Radicle's sovereign code infrastructure? Check out our migration guide!
    </a>
  </div>
  <div>
    <a href="/using-radicle/collaboration">
      Learn about Radicle's code collaboration workflows using CLI-based issues and patches.
    </a>
  </div>
</Grid>

:::tip

If you need help installing or using Radicle, check out our [troubleshooting](troubleshooting.md) guide,
[FAQ](understanding-radicle/faq.md), or join a [community channel](get-involved/community.md) where our core teams hang
out.

:::

## What's next?

Now that you've installed `rad` and created your Radicle identity, it's time to securely collaborate on a sovereign code
infrastructure.

### Learn the basics of `rad`

- `rad help`: See all the commands provided by `rad`.
- `rad self`: See information about your current identity and display name, URN, Peer ID, and more.
- `rad ls`: View a list of projects you've synced with the Radicle network.
- `rad auth`: Create and manage multiple Radicle [identities](using-radicle/identity.md).
- `rad [command] --help`: See additional options for an individual command.

### Start hosting and collaborating on code

<Grid>
  <div>
    <a href="/using-radicle/create">
      Create a new Radicle project
    </a>
  </div>
  <div>
    <a href="/using-radicle/clone">
      Clone an existing project
    </a>
  </div>
  <div>
    <a href="/using-radicle/issues">
      Create or view issues
    </a>
  </div>
  <div>
    <a href="/using-radicle/track-review-merge">
      Collaborate with patches
    </a>
  </div>
</Grid>

### Learn more about how Radicle works

<Grid>
  <div>
    <a href="/understanding-radicle/how-radicle-works">
      Peek into the ideas, protocols, networks, and clients that create the Radicle experience.
    </a>
  </div>
  <div>
    <a href="/understanding-radicle/faq">
      Learn about sovereign code infrastructure, the state of the Radicle ecosystem, and more.
    </a>
  </div>
</Grid>
