---
id: overview
title: Overview
---

## How do I collaborate on Radicle?

Radicle is designed for bazaar-style development. This means that there is no
single canonical view (e.g. master) of any project, but multiple upstreams
maintained by maintainers and contributors that exchange patches with each
other.

Within the same project, two people will have subjective (and often diverging
views), but *your* view of the project becomes the sum of all other views of the
project. Conceptually, the project becomes decentralized among the many views of
its maintainers and contributors, instead of being confined to the control of a
small group of people with read/write access.

In practice, this means that to fetch and receive changes from contributors, you
have to [add other people as remotes to your project][ar]. Adding someone as a
remote automatically tracks them, giving you a way to continuously subscribe to
the updates they make to your project (i.e. new commits).

You may be used to the concept of setting up an `origin` remote for a project
when pushing to a centrally hosted platform like GitHub. This allows you to
fetch and push changes from the server that hosts your project. In Radicle,
remotes of other peers point to the Git monorepo on your machine that stores all
of your Radicle data. These remotes allow you to fetch changes from your peers
and publish your changes to the Radicle network. This means that fetching and
pushing to remotes are _local first_ actions. To read more about how Radicle is
built on Git see our [**How it Works**][gi] section.

<!-- OPTIONAL TODO: UPDATE THIS PIECE OF TEXT -->

The introduction of social coding features like bug reporting, patches, and code
review will improve the process of finding and fetching changes between people
on the network by making it easier to know those changes exist in the first
place.

To help make this collaboration model easier to understand, here are some guides
for answering some common questions we get on how to use Radicle:

* [How do I publish a project?][1]
* [How do I push changes to my project?][2]
* [How do I share my project?][3]
* [How do I see someone created a patch for my project?][4]
* [How do I contribute a patch to a project?][5]
* [How do I fetch and merge patches into my project?][6]

For more help on using Radicle, be sure to join our [community channels][cc].

[1]: using-radicle/creating-projects.md
[2]: using-radicle/pushing-changes.md
[3]: using-radicle/sharing-projects.md
[4]: using-radicle/tracking-and-viewing.md
[5]: using-radicle/creating-patches.md
[6]: using-radicle/viewing-and-merging-patches.md

[cc]: get-involved/community.md
[dr]: radicle.md/#how-is-radicle-different-from-github
[gi]: understanding-radicle/how-it-works.md
[rl]: https://github.com/radicle-dev/radicle-link
[ar]: using-radicle/tracking-and-viewing.md#adding-remotes

