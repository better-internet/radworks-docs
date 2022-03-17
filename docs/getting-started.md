---
id: getting-started
title: Getting started
sidebar_label: Getting started
---

The [Radicle
CLI](https://app.radicle.network/seeds/willow.radicle.garden/rad:git:hnrkmg77m8tfzj4gi4pa4mbhgysfgzwntjpao/tree/b1eda227c0ceaa5b15622905161ad8dcd92a3c04)
is the easiest way to access the Radicle network for hosting code or managing and publishing projects.

In this getting started guide, you'll install Radicle CLI, create a Radicle identity, initialize an existing repository,
push your code to the Radicle network, and view your project with the Radicle [web
client](https://app.radicle.network/).

Radicle development is public by default and completely open source. [Join our
community](get-involved/join-the-community) to learn more about the future of Radicle or contribute code, documentation,
or design.

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
      Read the rest of our Terms of Use [here](https://radicle.xyz/terms.html).
    </p>
  </em>
</details>

## Install the Radicle CLI

The Radicle CLI installs on Linux and macOS-based systems by compiling from source or with Homebrew.

When finished, you'll be able to use the `rad` command for managing projects and interacting with the Radicle network.

Requirements:
- A recent version of Git (2.34.0 or later)
- `ssh-agent`
- OpenSSH (8.0 or later)

### From source

Installation from source requires a [working installation of Rust](https://www.rust-lang.org/tools/install) and any
additional development tooling for your operating system.

Run the following to build and install the Radicle CLI directly from our seed node.

```
cargo install --force --locked --git https://seed.alt-clients.radicle.xyz/radicle-cli.git radicle-cli
```

### With Homebrew on x86_64/Intel macOS

If your macOS system is **x86_64/Intel-based**, install Radicle CLI directly from the Radicle [seed
node](understanding-radicle/glossary/#seed) using [Homebrew](https://brew.sh/).

```
brew tap radicle/cli https://seed.alt-clients.radicle.xyz/radicle-cli-homebrew.git
brew install radicle/cli/core
```

> **M1/Apple Silicon users**: We're still working on an ideal installation method for running Radicle CLI on your
> machine&mdash;see [our M1 troubleshooting
> section](understanding-radicle/troubleshooting.md##install-radicle-cli-on-apple-silicon) for our latest progress
> until we're ready to publish an official method.

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

You can use `rad auth` to create and manage multiple Radicle identities, but we'll stick with one for now.

## Create your Radicle project from a Git repository

`rad init` creates a **project URN** for your repository and associates your Peer ID with it for sharing on the Radicle
network.

Navigate to an existing Git repository, run `rad init`, enter a description, and specify the name of your default branch
(typically `master` or `main`).

```
Initializing local 🌱 project in .

ok Name · acme
ok Description · The Acme Corporation is an ironic name for the fictional corporation
ok Default branch · main
ok Initializing...
ok Created .gitsigners file
ok Signing key configured

Your project id is rad:git:hnrknpgjwt6uiyx13as9hfrx994nxc6zdei1y. You can show it any time by running:
   rad .

To publish your project to the network, run:
   rad push
```

## Publish your code on the Radicle network

The first time you push code using `rad push`, it asks you to select a seed node to sync with. 

Radicle seeds are peer-to-peer nodes, functioning as replicas for Radicle project data, that are accessible on the
public internet. Radicle offers three default seed nodes: [pine.radicle.garden](https://app.radicle.network/seeds/pine.radicle.garden),
[willow.radicle.garden](https://app.radicle.network/seeds/willow.radicle.garden), and
[maple.radicle.garden](https://app.radicle.network/seeds/maple.radicle.garden).

> To push to your own seed node, or to multiple seed nodes from the same project, specify its address with the `--seed`
> option: `rad push --seed seed.example.com`.

```
$ rad push
Pushing 🌱 to remote `rad`
$ git push rad
Everything up-to-date

Git version 2.35.1
Select a seed node to sync with...

* pine.radicle.garden
* willow.radicle.garden
* maple.radicle.garden
```

Once your project finishes syncing for the first time, you'll find important information about where your project lives
on the Radicle network.

```
Radicle signing key ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIBndIloOmjGvHkqgfJ9sEkaZb1iBG9lrfjODqG5uoqjV

Syncing 🌱 project rad:git:hnrknpgjwt6uiyx13as9hfrx994nxc6zdei1y to https://willow.radicle.garden/

ok Project synced.

🍃 Your project is available at:

   (web) https://app.radicle.network/seeds/willow.radicle.garden/rad:git:hnrknpgjwt6uiyx13as9hfrx994nxc6zdei1y
   (web) https://app.radicle.network/seeds/willow.radicle.garden/rad:git:hnrknpgjwt6uiyx13as9hfrx994nxc6zdei1y/remotes/hyyc74e14b4pddma6jko8385cnjdj154aorp71456gqb4o5uqwkwpk
   (git) https://willow.radicle.garden/hnrknpgjwt6uiyx13as9hfrx994nxc6zdei1y.git

ok Saving seed configuration to local git config...
=> To override the seed, pass the '--seed' flag to `rad sync` or `rad push`.
=> To change the configured seed, run `git config rad.seed <url>` with a seed URL.
```

Note the `(web)` and `(git)` URLs, which you'll use in the next step.

## View your project and share with others

After you've pushed your project to the Radicle network, it's available for viewing on the Radicle [web
client](https://app.radicle.network).

To view your project, paste the URL after `(web)` into your browser of choice. You can use this interface to browse your
code, view individual files, explore your commit history, and more. You can share this URL with others, which allows
them to view your code on the web client, clone your code into a new project.

![The Radicle web client for viewing a published
project](/img/radicle-web-client.png)

The Radicle [web client](https://app.radicle.network) also helps you discover new projects hosted on the network,
organized by either the seed node they're synced with or the organization they are published under, such as Radicle's
own [alt-clients](https://app.radicle.network/alt-clients.radicle.eth) organization.

## What's next?

The `rad` CLI tool comes with a number of useful commands for recalling details about your Radicle ID or the
repositories you've already synced with the Radicle network.

See information about your Radicle ID with `rad self`, and view a list of your synced repositories with `rad ls`. If you
need help with using the Radicle CLI, run `rad help` to see additional options, or `rad [command] --help`, like `rad
auth --help`.

Now that you've started hosting your code on the Radicle network, others can clone your project, make changes, and push
them to a sub-tree of your project, organized by their Peer ID. You can then pull their contribution locally, view the
changes, merge them, and push them back to your canonical source tree.

For now, read more about Radicle's current contribution flows in the [`rad` manual
page](https://github.com/radicle-dev/radicle-cli/blob/f7a9314b5ff176a6836923c0424157070f995533/rad.1.adoc#contributing-to-a-radicle-project).
