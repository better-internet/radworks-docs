---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

## Download & Installation

The Radicle network can be accessed via **Radicle Upstream**, an open-source
desktop client.

Radicle development is public by default and completely open-source. You can
follow along development in our [Matrix channel][mc] or on
[radicle.community][co]. For more information on our community channels, see
[Join our Community][cc].

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
      Read the rest of our Terms of Services [here][te].
    </p>
  </em>
</details>

### Supported Platforms

Radicle Upstream is available for download on Linux and macOS (version 10.14 and
newer).

**→ [Download Radicle Upstream for Linux (AppImage)][d1]**

**→ [Download Radicle Upstream for macOS (dmg)][d2]**

Once you've downloaded the binary for your respective platform, start it like
this:

#### On Linux:

1. Make the package executable with: `chmod +x radicle-upstream-X.X.X.AppImage`
2. Start the app: `./radicle-upstream-X.X.X.AppImage`

#### On macOS:

1. Open the `radicle-upstream-x.x.x.dmg` package and install Upstream by
   dragging the `Radicle Upstream` binary to the `/Applications` folder.

<video style="border-radius: 16px; margin: 16px 0; width: 100%; height: 100%;"
  playsinline autoplay muted loop>
  <source src="/img/macOS-install.mp4" type="video/mp4">
</video>

If you are installing on a [Mac computer with Apple Silicon ][as] please note
that you may experience issues as Radicle Upstream has not been tested on the
Apple Silicon platform.

<blockquote>
While we are participating in the Apple Developer Program to ensure
accessibility to our macOS users, we do not agree with Apple's financial
gatekeeping and increasing control over application distribution on their
platform. Forcing developers to "pay-to-play" under the guise of a security
solution is an extractive form of vendor lock-in that inhibits the growth and
accessibility of open software.
</blockquote>

If you are running a different operating system (e.g. NixOS or an older macOS)
you can trying [building Radicle Upstream from source][bs].


## Creating an identity
To create an identity on the Radicle network, use the Upstream client.
After choosing a display name and setting a passphrase, it will generate a
unique identifier — known as a [**Device ID**][di] — that's paired to the
computer you've installed it on. 

For now, this Device ID is the only way other users can find and collaborate
with you. Later on, you will be able to manage multiple Device IDs under one
user handle, enabling support and consistency across multiple devices.

![Identity][id]

### Setting a passphrase
The client will also prompt you to create a passphrase. This passphrase *isn't* a
private key — it is a password that decrypts your keypair to access and publish
to the network. You will also be prompted for this passphrase when
pushing and fetching code from your local machine to Radicle via
your command line.

<blockquote>
There is no way to recover this passphrase yet, so be sure to keep it in a very
safe place!
</blockquote>

## Configuring your system

### Setting up Git
To create and publish projects to the network, you must make sure your
commits are associated with a username in Git.

You can do so by running the following command:

```
git config --global user.name "YOUR NAME"
```
For more help, refer to the relevant [Git documentation][gd].

### Adding the remote helper
To publish code to the network via the Upstream client, you first have
to add the Radicle gitremote-helper to your shell configuration.

- Add `export PATH="$HOME/.radicle/bin:$PATH"` to your shell configuration
- Restart your shell
- Check that the remote helper is available in your path by running:

```
$ which git-remote-rad
<home path>/.radicle/bin/git-remote-rad
```

With the remote helper installed, you will be able to [push changes][pc] from
your working copies to your Radicle [monorepo][ri] or [fetch changes][fc] from
other peers via the `rad` remote. The Upstream client then publishes
these changes to the network.

To start using Radicle, continue on to the [Using Radicle][ur] section.

[ur]: using-radicle/overview.md
[di]: understanding-radicle/glossary.md/#device-id
[pc]: using-radicle/pushing-changes
[fc]: using-radicle/fetching-and-merging
[rg]: understanding-radicle/faq.md#
[ri]: understanding-radicle/how-it-works.md/#git-implementation
[sn]: using-radicle/running-a-seed-node.md
[cc]: using-radicle/community.md

[id]: /img/identity.png

[as]: https://support.apple.com/en-us/HT211814
[bs]: https://github.com/radicle-dev/radicle-upstream/blob/master/DEVELOPMENT.md
[co]: https://radicle.community
[d1]: https://releases.radicle.xyz/radicle-upstream-0.1.5.AppImage
[d2]: https://releases.radicle.xyz/radicle-upstream-0.1.5.dmg
[gd]: https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup
[sd]: https://github.com/radicle-dev/radicle-bins/tree/master/seed
[te]: https://radicle.xyz/terms.html
[mc]: https://matrix.radicle.community
