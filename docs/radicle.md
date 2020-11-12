---
id: what-is-radicle
title: What is Radicle?
sidebar_label: What is Radicle?
---

Radicle is an open-source stack for code collaboration 🌱. It enables developers to collaborate on code without relying on intermediaries. It's a robust, functional, and secure alternative to centralized code collaboration platforms.

Read more about the vision for decentralized code collaboration [here](understanding-radicle/why-radicle.md).

## How it works

Radicle is built on open protocols — not platforms. It was designed to provide similar functionality to centralized code collaboration platforms, or "forges", while retaining Git’s peer-to-peer nature, building on what made distributed version control so powerful in the first place.

The network is powered by a peer-to-peer replication protocol built on Git, called Radicle Link. Radicle Link extends Git with peer-to-peer network discovery by disseminating data via a process called gossip. That is, participants in the network share and spread data they are "interested" in by keeping redundant copies locally and sharing, otherwise known as "replicating", their local data with selected peers. By leveraging Git's smart transfer protocol, Radicle Link keeps Git's efficiency when it comes to data replication while offering global decentralized repository storage through the peer-to-peer networking layer.

Since all data on the network is stored locally by peers on the network, develops can share and collaborate on Git repositories *without* relying on intermediaries such as hosted servers.

For more on Radicle Link, check out the [Understanding Radicle](understanding-radicle/why-radicle.md) section.

## How is Radicle different from GitHub?

When coming to Radicle from a centralized code collaboration platform like Github or Gitlab, you might notice that Radicle priotizes different concerns. Concretely:

1. users being in control of their identity
2. users being in control of their content
3. users being in control of their social interactions

These concerns support a model for collaboration that might be familiar to the free and open-source hackers of the 90s and early 2000s — one that is radically different from the prevailing 'Web 2.0' platform approach.

The radicle-link protocol distinguishes between two types of identities: user and project. The first describes an actor in the system, while the second describes a (software) repository within which one or more actors collaborate. In Radicle:

1. peers follow other peers.
2. Peers track projects they are interested in.
3. peers gossip about projects. This means tracking and replicating objects from the peers they follow, about the projects they are interested in.

It's this "trusted" social graph of peers and projects that becomes the foundation for collaboration within Radicle.

If you have already interacted with other decentralized social networks, this model might remind you of secure scuttlebutt. In fact, Radicle is heavily inspired by secure scuttlebutt's design but diverges from SSB in a few ways.

[Read more about the Radicle collaboration model](understanding-radicle/faq.md)

## How do I use Radicle?

The easiest way to use Radicle is with Upstream, a desktop client developed by the founding team of the Radicle project. With Upstream, you can create an identity, host your code, and collaborate with others on the Radicle network. Head over to [Getting Started](getting-started/getting-started.md) for a walkthrough on how to download Upstream and becomee a part of the Radicle network.
