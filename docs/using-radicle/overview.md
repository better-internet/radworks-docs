---
id: overview
title: Overview
---

## Collaborating on Radicle
When coming to Radicle from a centralized code collaboration platform like
GitHub or Gitlab, users might be puzzled by Radicle's collaboration model. This
is because Radicle  prioritizes different concerns

In contrast to the traditional Web2.0 model of centralized code collaboration
platforms (i.e. global by default, reliance on service providers, convienience),
Radicle prioritizes different concerns:

1. People should control of their identity
2. People should control of their content
3. People should control of their social interactions

These concerns have informed the design of Radicle Link, the peer-to-peer
protocol that powers the Radicle network. Radicle Link gossips data between
`peers`

In Radicle:

1. Peers follow other peers.
2. Peers track projects they are interested in.
3. Peers gossip about projects. This means tracking and replicating objects from
   the peers they follow, about the projects they are interested in.

To read more about the implications of the protocol design on user experience,
check out this post. 

### Workflow

As a result of it's design, Radicle Link supports a bazaar-style development
where there is no single canonical view of any project, but multiple upstreams
maintained by maintainers and contributors that exchange patches with each
other. 

Within the same project, two people will have subjective (and often diverging
views), but *your* view of the project becomes the sum of all other views of the
project. This means that when you find and follow a project on Radicle, you are
not only able to replicate the maintainer's view of the project, but all other
contributor's views as well. Conceptually, the project becomes decentralized
among the many views of it's maintainers and contributors, instead of being
confined to the control of a small group of people with access.

In practice, this means that to fetch and receive changes to your project, you
have to **add other people as remotes to your project**. Adding someone as a
remote automatically tracks them, giving you a way to continuously subscribe to
updates they make to their view of the project (i.e. new commits).

The introduction of social coding features like bug reporting, patches, and
discussions will improve the process of finding and fetching changes between
people on the Radicle network by making it easier to know those changes exist in
the first place. 
