---
id: doc1
title: What is Radicle?
sidebar_label: What is Radicle?
---

Radicle is an open-source stack for code collaboration 🌱. It's a peer-to-peer network built on Git that gives developers a way to collaborate on code without relying on intermediaries. It's a robust, functional, and secure alternative to centralized code collaboration platforms.

Read more about the vision for decentralized code collaboration [here](understanding-radicle/doc3.md).

## How it works

Radicle is built on open protocols — not platforms. It was designed to provide the same functionality as code collaboration platforms, or "forges", while retaining Git’s peer-to-peer nature, building on what made distributed version control so powerful in the first place.

The network is powered by a peer-to-peer replication protocol built on Git, called Radicle Link. Radicle Link extends Git with peer-to-peer network discovery by disseminating data via a process called gossip. That is, participants in the network share and spread data they are "interested" in by keeping redundant copies locally and sharing, otherwise known as "replicating", their local data with selected peers. By leveraging Git's smart transfer protocol, Radicle Link keeps Git's efficiency when it comes to data replication while offering global decentralized repository storage through the peer-to-peer networking layer.

Since all data on the network is stored locally by peers on the network, develops can share and collaborate on Git repositories *without* relying on intermediaries such as hosted servers.

For more on Radicle Link, check out the [Understanding Radicle](understanding-radicle/doc3-1.md) section.

## How is Radicle different from GitHub?

While GitHub and other platforms offer an easy and standard way to collaborate on code, their centrally-hosted approach has surfaced numerous platform and security risks. Despite relying on the open protocols of Git, these platforms are vulnerable to censorship as well as capitalist ends, which are often misaligned with the goals of free and open source software.

As the status quo for code collaboration, these platforms host the largest repositories of open source development made up of not just code, but issues, pull requests, reviews, and comments. These parts of the code collaboration process exist solely within these platforms, along with the largest social network for developers in the world.

Radicle was designed to be a robust, functional, and secure alternative for code collaboration that anyone in the world can use, however they want, whenever they want. The goal is to provide everything that a centrally-hosted platform does without relying on intermediaries or third parties. Radicle is also a free and open source project that anyone can build on and contribute to. 

## How do I use Radicle?

The easiest way to use Radicle is with Upstream, a desktop client developed by the founding team of the Radicle project. With Upstream, you can create an identity, host your code, and collaborate with others on the Radicle network. Head over to [Getting Started](getting-started/doc1-1.md) for a walkthrough on how to download Upstream and becomee a part of the Radicle network.

