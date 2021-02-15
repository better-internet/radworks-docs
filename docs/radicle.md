---
id: what-is-radicle
title: What is Radicle?
sidebar_label: What is Radicle?
---

Radicle is a set of protocols design for decentralized code collaboration 🌱. It enables developers
to collaborate on code without relying on trusted intermediaries. Radicle was designed
to provide similar functionality to centralized code collaboration platforms — or "forges" —
while retaining Git’s peer-to-peer nature, building on what made distributed
version control so powerful in the first place.

<blockquote>
Read more about our vision for decentralized code collaboration <a href="https://radicle.xyz/blog/towards-decentralized-code-collaboration.html">here</a>.
</blockquote>

Radicle also features an opt-in Ethereum integration. This smart contract system enables unique global names, decentralized organizations, and features that help maintainers sustain their open-source work.

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

<blockquote>
For more on Radicle Link, check out the <a href="understanding-radicle/how-it-works.md">Understanding Radicle</a> section.
</blockquote>

## How is Radicle different from GitHub?

Collaborating on Radicle is a slightly different than collaborating on centralized code collaboration platforms like GitHub and GitLab. 

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

<blockquote>
For more on the Radicle's social model, check out <a href="https://radicle.xyz/blog/collaborating-on-radicle.html">Collaborating on Radicle</a>. 
</blockquote>

## How do I use Radicle?

The easiest way to use Radicle is with **Upstream**, a desktop client developed by
the founding team of the Radicle project. With Upstream, you can create an
identity, host your code, and collaborate with others on the Radicle network.

Head over to [Getting Started][gs] for a walkthrough on how to download Upstream
and become a part of the network.


[gs]: getting-started.md
[wh]: https://radicle.xyz/blog/towards-decentralized-code-collaboration.html

