---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

## Installation & Download

The Radicle network can be accessed via Upstream, a desktop client. To download
the app, click [here][bk]. While Upstream is currently the only client for
using Radicle, it won't be the only one. Upstream development is public by
default and completely open source. You can follow along development on
[radicle.community][co].

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

## Creating an identity

To create an identity on the Radicle network, you can use the Upstream app. The
app will generate a unique identifier — known as a [**Device ID**][di] — that's
paired to the computer you've installed Radicle on. For now, this Device ID is
the only way other users can find and collaborate with you. Later on, you will
be able to manage multiple Device IDs under one user handle, enabling support
and consistency across multiple devices.

![Identity][id]

The app will also prompt you to create a passphrase. This passphrase *isn't* a
private key — it is a password decrypting your keypair to access and publish to
the Upstream app. You will also be prompted for this passphrase when pushing
and fetching code from your local machine to the Radicle network via your
command line.

## Configuring your system

To publish code to the Radicle network via the Upstream client, you first have
to add the [Radicle git remote helper][rg] to your shell configuration.

- Add `export PATH="$HOME/.radicle/bin:$PATH"` to your shell configuration
- Restart your shell
- Check that the remote helper is available in your path by running:

```
$ which git-remote-rad
<home path>/.radicle/bin/git-remote-rad
```

With the remote helper installed, you will be able to [push changes][pc] to
your [Radicle installation][ri], which will be published by the Upstream
client.

## Adding a seed node to Upstream

Seed nodes are "always-on" nodes running on public IP addresses that serve data
to connected peers. By adding a seed to Upstream, that seed automatically
tracks you and shares your data across its network of other connected peers
[^1]. This increases the availability of your data throughout the network,
while making it easier to find other's data as well. Upstream is preconfigured
with a Radicle operated seed to bootstrap your connectivity. If you have
removed the default seed, you can always re-add it later by following these
steps:

1. Navigate to *Settings*. There, under the *Network* header, you'll find your
   seed list.
2. Paste the seed address into the input box and submit by pressing
   <kbd>RETURN</kbd>.

    `hynewpywqj6x4mxgj7sojhue3erucyexiyhobxx4du9w66hxhbfqbw@seedling.radicle.xyz:12345`

3. Check that you're connected by hovering over your Connection icon in your
   Homebar.

Recent activity and connected peers on the Radicle network can be viewed at
http://seedling.radicle.xyz/.

To learn how to use Radicle, head over to the [Collaborating on Radicle][cr]
section.


[^1]: Seed nodes can be configured to either track and share all data across
      the network, or to propagate only a specific set of peers or projects.
      Please refer to your seed operator for details. If you're running your
      own seed, have a look at the [Running a seed node][sn] section and the
      [seed node documentation][sd].

[cr]: using-radicle/creating-and-sharing-projects.md
[di]: understanding-radicle/glossary.md/#peerid
[pc]: using-radicle/pushing-and-pulling-changes.md#pushing-changes-to-a-project
[rg]: understanding-radicle/faq.md
[ri]: understanding-radicle/how-it-works.md
[sn]: using-radicle/running-a-seed-node.md

[id]: /img/identity.png

[bk]: https://buildkite.com/monadic/radicle-upstream/builds/6098
[co]: https://radicle.community
[sd]: https://github.com/radicle-dev/radicle-bins/tree/master/seed
[te]: https://radicle.xyz/terms.html
