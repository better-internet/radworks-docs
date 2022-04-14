---
id: getting-started
title: Getting started
sidebar_label: Getting started
---

Hosting and collaboration on code in Radicle relies on two clients: the Radicle CLI and Radicle Upstream. The Radicle
CLI handles identity and interacting with Git to push code to the network, while Upstream provides a visual layer for
collaborating on patches to your projects.

In this getting started guide, you'll Radicle CLI and create a Radicle identity, which are the first two steps in
accessing the Radicle network.

<details>
  <summary><b>DISCLAIMER 🌱</b></summary>
  <br />
  <em>
    <p>
      As the Software is of experimental nature and deployed for testing
      purposes in a testnet environment only, you acknowledge that this Beta
      Version of the Software is likely to contain bugs, defects, or errors
      (including any bug, defect, or error relating to or resulting from the
      display, manipulation, processing, storage, transmission, or use of data)
      that may materially and adversely affect the use, functionality, or
      performance of Radicle or any product or system containing or used in
      conjunction with Radicle.
    </p>
    <p>
      You are aware and acknowledge that your processing, development,
      exchange, storage sharing, provision of, collaboration to or other
      involvement in Content on or via Radicle takes place in a testnet
      environment for testing purposes only. You acknowledge and agree that you
      have no claim to integrity and consistency regarding any Content
      whatsoever. You acknowledge and agree to the risk of total and
      irretrievable loss of Content throughout and after the Beta phase. You
      acknowledge and agree that any Content will most likely and without prior
      notice be irretrievably deleted upon completion of the testing phase. You
      acknowledge and agree that you are solely responsible for secure storage
      (e.g. backup copies) of Content and that the Foundation shall not be
      responsible and liable under any circumstance for any loss or corruption
      of Content.
    </p>
    <p>
      Read the rest of our Terms of Use <a href="https://radicle.xyz/terms.html">here</a>.
    </p>
  </em>
</details>

## Install the Radicle CLI

The easiest way to install the Radicle CLI on **Linux** and **x86_64 macOS** systems is compiling from the source code
stored on a Radicle seed node. Make sure you have
[Cargo](https://doc.rust-lang.org/cargo/getting-started/installation.html) and [CMake](https://cmake.org/) installed,
then run:

```
$ cargo install --force --locked --git https://seed.alt-clients.radicle.xyz/radicle-cli.git radicle-cli
```

When finished, you'll be able to use the `rad` command for managing projects and interacting with the Radicle network.

> See the [radicle-cli
> repository](https://app.radicle.network/alt-clients.radicle.eth/rad:git:hnrkmg77m8tfzj4gi4pa4mbhgysfgzwntjpao/) for
> other installation methods and instructions.

> **M1/Apple Silicon users**: We're still working on an ideal installation method for running Radicle CLI on your
> machine&mdash;see [our M1 troubleshooting
> section](understanding-radicle/troubleshooting.md#install-radicle-cli-on-apple-silicon) for our latest progress until
> we're ready to publish an official method.

## Create your Radicle identity

To interact with the Radicle network, you need an **identity**, which you generate with `rad auth`.

After choosing a display name and setting a passphrase, the Radicle CLI generates two unique identifiers.

First is your **Peer ID**, which identifies your device and the code you publish on the Radicle network, and is secured
with an Ed25519 keypair. Second is your **personal 🌱 URN**, which identifies you across devices.

```
$ rad auth
Initializing your 🌱 profile and identity

ok Username · 
ok Passphrase · ********
ok Creating your 🌱 Ed25519 keypair...
ok Adding to ssh-agent...
ok Profile 3ae66df3-6ac7-4466-9013-83839749ed05 created.

Your radicle Peer ID is hyncoz7x4s8x9447g6yogy4iy41q8i4juy5uhou57w1ga7obt644wo. This identifies your device.
Your personal 🌱 URN is rad:git:hnrkmx6trm4bu19bwa4apbxj8ftw8f7amfdyy. This identifies you across devices.

=> To create a radicle project, run `rad init` from a git repository.
```

> There is currently no way to retrieve a lost or forgotten passphrase, so please store it safely!

You can use `rad auth` to create and manage multiple Radicle identities via profiles, but we'll stick with one for now.

## Further `rad` usage

The `rad` CLI tool comes with a number of useful commands for recalling details about your identity or the projects
you've already synced with the Radicle network.

- `rad help`: See all the commands provided by `rad`.
- `rad self`: See information about your current profile and display name, URN, Peer ID, and keys.
- `rad ls`: View a list of your synced Radicle projects.
- `rad [command] --help`: See additional options for an individual command.

## What's next?

The next best steps depends mostly on how you're most likely to interact with projects hosted on the Radicle network.

If you're a maintainer (delegate) of a project:

- [View and share projects](using-radicle/view-share.md)
- [Review and merge patches](using-radicle/track-review-merge.md)

If you're a collaborator:

- [View and share projects](using-radicle/view-share.md)
- [Clone a project](using-radicle/clone.md)
- [Push changes](using-radicle/push.md)

> Radicle development is public by default and completely open source. [Join our
> community](get-involved/join-the-community) to learn more about the future of Radicle or contribute code,
> documentation, or design.
