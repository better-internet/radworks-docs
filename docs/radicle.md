---
id: what-is-radicle
title: What is Radicle?
sidebar_label: What is Radicle?
---

Radicle is a peer-to-peer stack for code collaboration 🌱. It enables developers
to collaborate on code without relying on trusted intermediaries. Radicle was designed
to provide similar functionality to centralized code collaboration platforms — or "forges" —
while retaining Git’s peer-to-peer nature, building on what made distributed
version control so powerful in the first place.

Read more about our vision for decentralized code collaboration [here][wh].

## How it works

The network is powered by a peer-to-peer replication protocol built on Git,
called Radicle Link. Radicle Link extends Git with peer-to-peer
discovery by disseminating data via a process called gossip. That is,
participants in the network share and spread data they are "interested" in by
keeping redundant copies locally and sharing, otherwise known as "replicating",
their local data with selected peers. By leveraging Git's smart transfer
protocol, Radicle Link keeps Git's efficiency when it comes to data replication
while offering global decentralized repository storage through the peer-to-peer
networking layer.

Since all data on the network is stored locally by peers on the network,
developers can share and collaborate on Git repositories *without* relying on
intermediaries such as hosted servers.

The Radicle Link protocol distinguishes between two types of identities: personal and project.
The first describes a person running a node on the network (e.g. a peer), while the second describes a repository (e.g. a project)
on which one or more people collaborate. In Radicle: 

1. Peers track projects they are interested in.
2. Peers track other peers by adding them as remotes to projects.
3. Peers gossip about projects. This means they replicate objects from the peers they follow and 
make them available to the peers that follow them.

It's this "trusted" social graph of peers and projects that becomes the foundation for
collaboration within Radicle.

For more on Radicle Link, check out the [Understanding Radicle][wh] section.

## How is Radicle different from GitHub?

When coming to Radicle from a centralized code collaboration platform like
Github or Gitlab, you might notice that Radicle priotizes different concerns. Concretely:

- People being in control of their identity
- People being in control of their content
- People being in control of their social interactions

Read more about the [Radicle collaboration model][fa].

The concerns above led us to a design and implementation that differentiates itself from
centralized forges in a few critical ways:

1. The Radicle stack is open-source from top to bottom. There are no "closed" components.
Every component of the Radicle stack is auditable, modifiable and extendable.
2. Radicle is build *entirely* on open protocols. There are no "special servers", privileged
users or companies in control of your collaboration.
3. Radicle is based on a peer-to-peer architecture instead of a client server model.
4. Radicle is **not** global by default. Instead, the social graph of peers and projects you 
track determines what content you see, interact with, and replicate.
5. Radicle is designed for bazaar-style development. This means that within projects, there isn't 
a single master branch that contributors merge into. Instead, peers maintain their own views of 
projects that can be fetched and merged by other peers via patches.

## How do I use Radicle?

The easiest way to use Radicle is with **Upstream**, a desktop client developed by
the founding team of the Radicle project. With Upstream, you can create an
identity, host your code, and collaborate with others on the Radicle network.

Head over to [Getting Started][gs] for a walkthrough on how to download Upstream
and become a part of the Radicle network.


[fa]: understanding-radicle/faq.md
[gs]: getting-started.md
[wh]: understanding-radicle/why-radicle.md
