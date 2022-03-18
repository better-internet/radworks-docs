---
id: collaboration
title: How collaboration works in Radicle
---

TK

**There is currently no pull request or patch functionality built into Radicle.** Our teams are working hard on improvements to the underlying Radicle Link protocol and Upstream desktop application to provide richer collaboration experiences!

Here's how contribution works for now:

Maintainers (also known as delegates) use `rad init` and `rad push` to create a project and synchronize project data
between their local state and a canonical branch (usually `main` or `master`) on the the configured seed node. This
makes the project discoverable on the Radicle [web client](https://app.radicle.network) and clone-able using `rad
clone`.

Contributors use `rad clone` to copy the canonical branch of an existing project on the Radicle network to their local
state, make changes, and use `rad push` to synchronize those changes with a second source tree within the project.

Maintainers then use `rad track` to find contributions to their project and view the remote peer from their working
copy. They then use `git diff` to see which changes were contributed, `git merge` to merge them, and `rad push` to
publish the new state of the canonical branch.

<!-- Radicle is designed for bazaar-style development. This means that there is no
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
built on Git see our [**How it Works**][gi] section. -->