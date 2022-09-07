---
id: get-started
title: Get started
sidebar_label: Get started
---

import Highlight from '@site/src/components/Highlight'

Hosting and collaborating on code in Radicle relies on our CLI tooling and your identity.

The CLI tooling is your bridge between Git and the Radicle network, while your identity allows you to host and
collaborate on projects with your unique identifiers.

<Highlight>

  See the **[Radicle website](https://radicle.xyz/get-started.html)** for the most up to date installation instructions for macOS and Linux, including the process for creating your Radicle identity.

</Highlight>

> You can also find additional instructions, such as installing from source, in the [`radicle-cli`
> repository](https://app.radicle.xyz/alt-clients.radicle.eth/rad:git:hnrkmg77m8tfzj4gi4pa4mbhgysfgzwntjpao).

When you create an identity with `rad auth`, you get your **Peer ID**, which identifies your device and the code you
publish on the Radicle network with a secure Ed25519 keypair, and a **personal 🌱 URN**, which identifies you across
devices.

:::caution

There is currently no way to retrieve a lost or forgotten passphrase, so please store it safely!

:::

### Further `rad` usage

The `rad` CLI tool comes with a number of useful commands for recalling details about your identity or the projects
you've already synced with the Radicle network.

- `rad help`: See all the commands provided by `rad`.
- `rad self`: See information about your current profile and display name, URN, Peer ID, and keys.
- `rad ls`: View a list of your synced Radicle projects.
- `rad auth`: Create and manage multiple Radicle identities with profiles.
- `rad [command] --help`: See additional options for an individual command.

Read more about CLI workflows in the [`rad` man
page](https://github.com/radicle-dev/radicle-cli/blob/master/rad.1.adoc).

## What's next?

The next best steps depends mostly on how you're most likely to interact with projects hosted on the Radicle network.

**If you're a maintainer (delegate) of a project:**

- [View and share projects](using-radicle/view-share.md)
- [Review and merge patches](using-radicle/track-review-merge.md)

**If you're a collaborator:**

- [View and share projects](using-radicle/view-share.md)
- [Clone a project](using-radicle/clone.md)
- [Push changes](using-radicle/push.md)

> Radicle development is public by default and completely open source. [Join our
> community](get-involved/join-the-community) to learn more about the future of Radicle or contribute code,
> documentation, or design.
