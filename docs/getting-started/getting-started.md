---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

## Installation & Download

The Radicle network can be accessed via Upstream, a desktop client. To download the app, click [here](https://buildkite.com/monadic/radicle-upstream/builds/6098). While Upstream is currently the only client for using Radicle, it won't be the only one. Upstream development is public by default and completely open source. You can follow along development on [radicle.community](https://radicle.community)

<details>
    <summary><b> DISCLAIMER 🌱 </b></summary>
    <br>
        <p><em>
            As the Software is of experimental nature and deployed for testing purposes in a testnet environment only, you acknowledge that this Beta Version of the Software is likely to contain bugs, defects, or errors (including any bug, defect, or error relating to or resulting from the display, manipulation, processing, storage, transmission, or use of data) that may materially and adversely affects the use, functionality, or performance of Radicle or any product or system containing or used in conjunction with Radicle.
        </p>
        <p>
            You are aware and acknowledge that your processing, development, exchange, storage sharing, provision of, collaboration to or other involvement in Content on or via Radicle takes place in a testnet environment for testing purposes only. You acknowledge and agree that you have no claim to integrity and consistency regarding any Content whatsoever. You acknowledge and agree to the risk of total and irretrievable loss of Content throughout and after the Beta phase. You acknowledge and agree that any Content will most likely and without prior notice be irretrievably deleted upon completion of the testing phase. You acknowledge and agree that you are solely responsible for secure storage (e.g. backup copies) of Content and that the Foundation shall not be responsible and liable under any circumstance for any loss or corruption of Content.
        </p>
        <p>
            Read the rest of our Terms of Services <a href=radicle.xyz//terms.html>here</a>
        </p></em>
</details>

## Creating an identity

To create an identity on the Radicle network, you can use the Upstream app. The app will create a unique peer identity — known as a [**peerID**](understanding-radicle/glossary.md/#peerid) — for you that's paired to the computer you installed it on. For now, this peerID is how others can discover you on the Radicle network. Later on, you will be able to pair multiple peerIDs under one user handle, enabling support and consistency across multiple devices.

[insert pic of identity]

The app will also prompt you to create a passphrase. This passphrase *isn't* a private key — it is a password for accessing the Upstream app. It will also be required when pushing code from your local machine to the Radicle network via your rad remote.

## Configuring your system

To push code to the Radicle network via the Upstream client, you first have to add the pRadicle git remote helper](understanding-radicle/faq.md) to your shell configuration.

- Add ` export PATH="$HOME/.radicle/bin:$PATH" ` to your shell configuration
- Restart your shell
- Check that the remote helper is available in your path by running:

```
$ which git-remote-rad
<home path>/.radicle/bin/git-remote-rad
```

With the remote helper installed, you will be able to [push](using-radicle/pushing-and-pulling-changes.md#pushing-changes-to-a-project) to the Radicle network. 

## Joining a seed node

Seed nodes are "always-on" nodes running on public IPs that serve data to any connected peers. By joining a seed node, it automatically tracks you and shares your data across it's network of other connected users. This increases the availability of your data throughout the network, while making it easier to find other's data as well. We recommend joining the official Radicle seed node to bootstrap your connectivity.

1. Navigate to *Settings*. There, under the *Network* header, you'll find your seed list.
2. Add the seed address to the input box and submit by pressing `RETURN`

    `hybh5cb7spafgs7skjg6qkssts3uxht31zskpgs4ypdzrnaq7ye83k@seedling.radicle.xyz:12345`

3. Check that you're connected by hovering over your Connection icon in your Homebar.

Recent activity and connected peers on the Radicle network can be viewed at http://seedling.radicle.xyz/.


To learn how to use Radicle, head over to the [Collaborating on Radicle](collaborating-on-radicle/creating-and-sharing-projects.md) section
