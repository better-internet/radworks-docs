---
id: what-is-radicle
title: What is Radicle?
sidebar_label: What is Radicle?
---


Radicle is a decentralized code collaboration network built on open protocols 🌱. It enables developers
to collaborate on code without relying on trusted intermediaries. Radicle was designed
to provide similar functionality to centralized code collaboration platforms — or "forges" —
while retaining Git’s peer-to-peer nature, building on what made distributed
version control so powerful in the first place.

> Read more about our vision for decentralized code collaboration <a href="https://radicle.xyz/blog/towards-decentralized-code-collaboration.html">here</a>.

Radicle also leverages Ethereum (opt-in) for unique global names, decentralized organizations, and protocols that help maintainers sustain their open-source work.

> Read more about the Radicle Ethereum integration <a href="https://radicle.xyz/blog/integrating-with-ethereum.html">here.</a>

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

> For more on Radicle Link, check out the [Understanding Radicle](understanding-radicle/how-it-works.md) section.

## How is Radicle different from GitHub?

Collaborating on Radicle is slightly different than collaborating on centralized code collaboration platforms like GitHub and GitLab. 

1. The Radicle stack is open-source from top to bottom. There are no "closed" components.
Every component of the Radicle stack is auditable, modifiable, and extendable.


2. Radicle is built *entirely* on open protocols. There are no "special servers", privileged
users or companies in control of your collaboration.


3. Radicle is based on a peer-to-peer architecture instead of a client-server model.


4. Radicle is **not** global by default. Instead, the social graph of peers and projects you 
track determines what content you see, interact with, and replicate.


5. Radicle is designed for bazaar-style development. This means that within projects, there isn't 
a single master branch that contributors merge into. Instead, peers maintain their own views of 
projects that can be fetched and merged by other peers via patches.

6. Radicle replaces the Org functionality of centralized forges and their hierarchical admin models with decentralized organizations on Ethereum

7. Radicle is a self-sustained and community-owned network — not a corporation. It's governance is organized by a token called RAD that lives on Ethereum.


> For more on the Radicle's social model, check out <a href="https://radicle.xyz/blog/collaborating-on-radicle.html">Collaborating on Radicle</a>. 

## How do I use Radicle?

The best way to start hosting code on the Radicle network is to use the [Radicle CLI][wc], which helps you create a
identity, initialize a repository, host your code on a [seed node][sn], and share your project with others.

[Get started][gs] in just a few steps.

> Additional discovery and collaboration features, like pulling patches for review, are planned and under active
> development.



[wc]: https://radicle.network/
[sn]: understanding-radicle/glossary/#seed
[gs]: getting-started.md