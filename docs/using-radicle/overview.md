---
id: overview
title: Overview
---

## How do I collaborate on Radicle?

As a result of its [design][dr], Radicle Link supports a bazaar-style development model
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

To help make Radicle's collaboration model easier to understand, here are some
guides for answering some common questions we get on how to use Radicle:

* [How do I publish a project?][1]
* [How do I push changes to my project?][2]
* [How do I share my project?][3]
* [How do I see contributions or changes to my project?][4]
* [How do I fetch and merge contributions to my project?][5]
* [How do I find other projects?][6]
* [How do I contribute to a project?][7]


[1]: using-radicle/creating-projects.md
[2]: using-radicle/pushing-changes.md
[3]: using-radicle/sharing-projects.md
[4]: using-radicle/tracking-and-viewing.md
[5]: using-radicle/fetching-and-merging.md
[6]: using-radicle/contributing.md
[7]: using-radicle/contributing.md

[dr]: radicle.md/#how-is-radicle-different-from-github
[rp]: https://radicle.xyz/radicle-link.html
[rl]: https://github.com/radicle-dev/radicle-link
