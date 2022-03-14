---
id: getting-started
title: Getting started
sidebar_label: Getting started
---

The easiest way to access the Radicle network for hosting code or managing and publishing projects is through the
[Radicle CLI][cl].

In this getting started guide, you'll install Radicle CLI, create a Radicle identity, initialize an existing repository,
push your code to the Radicle network, and view your project with the Radicle [web
client][https://app.radicle.network/].

Radicle development is public by default and completely open source. [Join our
community][get-involved/join-the-community] to learn more about the future of Radicle or contribute code, documentation,
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
      Read the rest of our Terms of Use [here][te].
    </p>
  </em>
</details>

## Install the Radicle CLI

The Radicle CLI installs on Linux, macOS, Windows-based systems, either by compiling from source or via Homebrew, to
supply the `rad` command for initializing new repositories and interacting with the Radicle network.

Requirements:
- A recent version of Git (2.34.0 or later)
- `ssh-agent`
- OpenSSH (8.0 or later)

### From source

Installation from source requires a [working installation of Rust][https://www.rust-lang.org/tools/install] and any
additional development tooling for your operating system.

Run the following to build and install the Radicle CLI directly from our seed node.

```
cargo install --force --locked --git https://seed.alt-clients.radicle.xyz/radicle-cli.git radicle-cli
```

### With Homebrew on x86_64/Intel macOS

If your macOS system is **x86_64/Intel-based**, install Radicle CLI directly from the Radicle [seed
node][understanding-radicle/glossary/#seed] using [Homebrew][https://brew.sh/].

```
brew tap radicle/cli https://seed.alt-clients.radicle.xyz/radicle-cli-homebrew.git
brew install radicle/cli/core
```

> **M1/arm64 users**: We're still working on an ideal installation method for running Radicle CLI on your
> machine&mdash;see this [GitHub Gist][https://gist.github.com/sebastinez/d8f2d4979cad0d9f23c162702cdd4735] for our
> latest progress until we're ready to publish an official method.

## Create your Radicle identity

To interact with the Radicle network, you need an **identity**, which you generate with `rad auth`.

After choosing a display name and setting a passphrase, the Radicle CLI generates two unique identifiers, your **Peer
ID** and **personal 🌱 URN**, which identify your device and identify you across devices, respectively, along with a
Ed25519 keypair for securing your identity.

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

`rad init` creates a unique identity for your repository and associates your Peer ID with it for sharing on the Radicle
network.

Navigate to an existing Git repository, run `rad init`, enter a description, and specify the name of your default branch
(typically `master` or `main`).

```
$ rad init
Initializing local 🌱 project acme

ok Description · The Acme Corporation is an ironic name for the fictional corporation
ok Default branch · main
ok Initializing new project...
ok Project initialized: rad:git:hnrkqi6ohci9m59i54ppiy3fqkedkjt98ymdo

=> To publish, run `rad push`.
```

## Publish your code on the Radicle network

The first time you push code using `rad push`, it asks select a seed node to sync with. Radicle offers three default
seed nodes — [pine.radicle.garden](https://app.radicle.network/seeds/pine.radicle.garden), [willow.radicle.garden](https://app.radicle.network/seeds/willow.radicle.garden), and [maple.radicle.garden](https://app.radicle.network/seeds/maple.radicle.garden) — with identical
functionality.

```
$ rad push
Pushing 🌱 to remote `rad`
Everything up-to-date

Git version 2.35.1
Select a seed node to sync with...
* pine.radicle.garden
* willow.radicle.garden
* maple.radicle.garden
```

> To push to your own seed node, or to multiple seed nodes from the same project, specify its address with the `--seed`
> option: `rad push --seed seed.example.com`.

Once your project finishes syncing for the first time, you'll find important information about where your project lives
on the Radicle Network.

```
Git signing key ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIL460KIEccS4881p7PPpiiQBsxF+H5tgC6De6crw9rbU

Syncing 🌱 project rad:git:hnrkqi6ohci9m59i54ppiy3fqkedkjt98ymdo to https://willow.radicle.garden

ok Syncing delegate identity hnrkqdpm9ub19oc8dccx44echy76hzfsezyio...
ok Syncing project identity...
ok Syncing project refs...
ok Fetching remotes (*)...
ok Project synced.

🌱 Your project is synced and available at:

    (web) https://app.radicle.network/seeds/willow.radicle.garden/rad:git:hnrkqi6ohci9m59i54ppiy3fqkedkjt98ymdo/
    (git) https://willow.radicle.garden/hnrkqi6ohci9m59i54ppiy3fqkedkjt98ymdo.git
```

Note the `(web)` and `(git)` URLs, which you'll use in the next step.

## View your project and share with others

After you've pushed your project to the Radicle network, it's available for viewing on the Radicle [web
client](https://app.radicle.network).

To view your project, paste the URL after `(web)` into your browser of choice. You can use this interface to browse your
code, view individual files, explore your commit history, and more.

![The Radicle web client for viewing a published
project](https://user-images.githubusercontent.com/1153921/157982795-0bfcaa58-ec9d-44f2-8da3-ad0900172e0e.png)

You can also use this web client to other projects hosted on the Radicle network organized either by the seed node
they're synced with or the organization they are published under, such as Radicle's own
[alt-clients](https://app.radicle.network/alt-clients.radicle.eth) organization.

## What's next?

The `rad` CLI tool comes with a number of useful commands for recalling details about your Radicle ID or the
repositories you've already synced with the Radicle network.

See information about your Radicle ID with `rad self`, and view a list of your synced repositories with `rad ls`.

If you need help with using the Radicle CLI, run `rad help` to see additional options, or `rad [command] --help`, like
`rad auth --help`.



[cl]: 
[wi]: 
[jc]: 
[rt]: 
[sn]: 
[hb]: 
[gg]: 