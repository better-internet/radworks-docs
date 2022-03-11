---
id: getting-started
title: Getting started
sidebar_label: Getting started
---

The easiest way to access the Radicle network for hosting code or managing and publishing projects is through the
[Radicle CLI][cl].

In this getting started guide, you'll install Radicle CLI, create a Radicle identity, initialize an existing repository,
push your code to the Radicle network, and view your project with the Radicle [web interface][wi].

Radicle development is public by default and completely open source. [Join our community][jc] to learn more about the
future of Radicle or contribute code, documentation, or design.

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

## Installation

The Radicle CLI installs on Linux or macOS-based systems, either by compiling from source or via Homebrew, to supply the
`rad` command for initializing new repositories and interacting with the Radicle network.

### Linux from source

Installation from source requires a [working installation of Rust][rt]. 

Run the following:

```
cargo install --force --locked --git https://seed.alt-clients.radicle.xyz/radicle-cli.git radicle-cli
```

### macOS with Homebrew

If your system is**Intel/x64-based**, install Radicle CLI directly from the Radicle [seed node][sn] using
[Homebrew][hb].

```
brew tap radicle/cli https://seed.alt-clients.radicle.xyz/radicle-cli-homebrew.git
brew install radicle/cli/core
```

> **M1/arm64 users**: We're still working on an ideal installation method for running Radicle CLI on your
> machine&mdash;see this [GitHub Gist][gg] for our latest progress until we're ready to publish an official method.

## Create your Radicle identity

To interact with the Radicle network, you need an **identity**, which you generate with `rad auth`.

After choosing a display name and setting a passphrase, the Radicle CLI generates two unique identifiers, your **Peer
ID** and **personal 🌱 URN**, which respectively identify your device and identify you across devices, along with a
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

## Initialize a Radicle project

Let's initialize a project 

Create an empty repository, `cd` into it, initialize a Git repository, and then initialize a Radicle project.

```
mkdir acme
cd acme
git init
rad init
```

```
Initializing local 🌱 project acme

ok Description · The Acme Corporation is an ironic name for the fictional corporation
ok Default branch · main
ok Initializing new project...
ok Project initialized: rad:git:hnrkqi6ohci9m59i54ppiy3fqkedkjt98ymdo

=> To publish, run `rad push`.
```

## Push code to the Radicle network



## View your project and share with others


You can also explore the Radicle network using our [web client](wa).


## What's next?




[cl]: https://app.radicle.network/alt-clients.radicle.eth/rad:git:hnrkmg77m8tfzj4gi4pa4mbhgysfgzwntjpao/tree/f7a9314b5ff176a6836923c0424157070f995533
[wi]: https://app.radicle.network/
[jc]: get-involved/join-the-community
[rt]: https://www.rust-lang.org/tools/install
[sn]: understanding-radicle/glossary/#seed
[hb]: https://brew.sh/
[gg]: https://gist.github.com/sebastinez/d8f2d4979cad0d9f23c162702cdd4735
[di]: understanding-radicle/glossary.md/#device-id
