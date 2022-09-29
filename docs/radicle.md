---
id: what-is-radicle
title: What is Radicle?
sidebar_label: What is Radicle?
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

Radicle also addresses **open source funding** through [Drips](https://www.drips.network/), an Ethereum protocol for
generating recurring income with subscriptions and NFT memberships. Drips helps you create a circular funding network by
dripping funds to your favorite creators and dedicating a percentage of your incoming drips to others.

## How do I get started with Radicle?

<Installation />

<Grid>
  <div>
    <a href="/migrate-github-radicle">
      Leaving GitHub in favor of Radicle's sovereign code infrastructure? Check out our migration guide!
    </a>
  </div>
  <div>
    <a href="/using-radicle/collaboration">
      Learn about Radicle's code collaboration workflows using issues and patches.
    </a>
  </div>
</Grid>

If you need help using Radicle, check out our [troubleshooting](troubleshooting.md) guide,
[FAQ](understanding-radicle/faq.md), or join a [community channel](get-involved/community.md) where our core teams hang
out.
