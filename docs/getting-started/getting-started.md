---
id: getting-started
title: Getting Started
sidebar_label: Getting Started
---

## Installation & Download

The Radicle network can be accessed via Upstream, a desktop client. To download the app, click [here](https://buildkite.com/monadic/radicle-upstream/builds/6098). While Upstream is currently the only client for using Radicle, it won't be the only one. Upstream development is public by default and completely open source. You can follow along development on [radicle.community](https://radicle.community)

## Creating an identity

To create an identity on the Radicle network, you can use the Upstream app. The app will create a unique peer identity — known as a [**peerID**](understanding-radicle/glossary.md/#peerid) — for you that's paired to the computer you installed it on. For now, this peerID is how others can discover you on the Radicle network. Later on, you will be able to pair multiple peerIDs under one user handle, enabling support and consistency across multiple devices.

[insert pic of identity]

The app will also prompt you to create a passphrase. This passphrase *isn't* a private key — it is a password for accessing the Upstream app. It will also be required when pushing code from your local machine to the Radicle network via your rad remote.

## Configuring your system

To push code to the Radicle network via the Upstream client, you first have to add the radicle remote helper to your shell configuration.

- Add ` export PATH="$HOME/.radicle/bin:$PATH" ` to your shell configuration
- Restart your shell
- Check that the remote helper is available in your path by running:

```
$ which git-remote-rad
<home path>/.radicle/bin/git-remote-rad
```

With the remote helper installed, you will be able to [push](collaborating-on-radicle/pushing-and-pulling-changes.md#pushing-changes-to-a-project) to the Radicle network.

## Joining a seed node

Seed nodes are "always-on" nodes running on public IPs that serve data to any connected peers. By joining a seed node, it automatically tracks you and shares your data across it's network of other connected users. This increases the availability of your data throughout the network, while making it easier to find other's data as well. We recommend joining the official Radicle seed node to bootstrap your connectivity.

1. Navigate to *Settings*. There, under the *Network* header, you'll find your seed list.
2. Add the seed address to the input box and submit by pressing `RETURN`

    `hybh5cb7spafgs7skjg6qkssts3uxht31zskpgs4ypdzrnaq7ye83k@seedling.radicle.xyz:12345`

3. Check that you're connected by hovering over your Connection icon in your Homebar.

Recent activity and connected peers on the Radicle network can be viewed at http://seedling.radicle.xyz/.


To learn how to use Radicle, head over to the [Collaborating on Radicle](collaborating-on-radicle/creating-and-sharing-projects.md) section


