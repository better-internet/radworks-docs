---
id: what-is-radicle
title: What is Radicle?
sidebar_label: What is Radicle?
---

Radicle is an open-source stack for code collaboration 🌱. It enables developers
to collaborate on code without relying on intermediaries. It's a robust,
functional, and secure alternative to centralized code collaboration platforms.

Read more about our vision for decentralized code collaboration [here][wh].

## How it works

Radicle is built on open protocols — not platforms. It was designed to provide
similar functionality to centralized code collaboration platforms, or "forges",
while retaining Git’s peer-to-peer nature, building on what made distributed
version control so powerful in the first place.

The network is powered by a peer-to-peer replication protocol built on Git,
called Radicle Link. Radicle Link extends Git with peer-to-peer network
discovery by disseminating data via a process called gossip. That is,
participants in the network share and spread data they are "interested" in by
keeping redundant copies locally and sharing, otherwise known as "replicating",
their local data with selected peers. By leveraging Git's smart transfer
protocol, Radicle Link keeps Git's efficiency when it comes to data replication
while offering global decentralized repository storage through the peer-to-peer
networking layer.

Since all data on the network is stored locally by peers on the network,
develops can share and collaborate on Git repositories *without* relying on
intermediaries such as hosted servers.

For more on Radicle Link, check out the [Understanding Radicle][wh] section.

## How is Radicle different from GitHub?

When coming to Radicle from a centralized code collaboration platform like
Github or Gitlab, you might notice that Radicle priotizes different concerns. In
contrast to the traditional Web2.0 model of centralized code collaboration
platforms (i.e. global by default, reliance on service providers, convienience),
Radicle ensures that:

1. People control their identity
2. People control their content
3. People control their social interactions

These concerns have informed the design of [Radicle Link][rl], the peer-to-peer
protocol that powers the Radicle network. Radicle Link gossips and replicates
data between `peers`.

In Radicle:

1. Peers follow other peers.
2. Peers track projects they are interested in.
3. Peers gossip about projects - this means tracking peers can replicate objects
   from the peers they follow, about the projects they are interested in.

These interactions create a "trusted" social graph of peers and projects that
becomes the foundation for collaboration within Radicle.

Read more about the [Radicle collaboration model][fa].

## How do I use Radicle?

The easiest way to use Radicle is with **Upstream**, a desktop client developed by
the founding team of the Radicle project. With Upstream, you can create an
identity, host your code, and collaborate with others on the Radicle network.

Head over to [Getting Started][gs] for a walkthrough on how to download Upstream
and become a part of the Radicle network.


[fa]: understanding-radicle/faq.md
[gs]: getting-started.md
[wh]: understanding-radicle/why-radicle.md
