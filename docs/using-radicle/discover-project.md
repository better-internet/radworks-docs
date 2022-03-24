---
id: discover-project
title: Discover an existing project
---

Any type of collaboration on Radicle starts with knowing the [project
URN](understanding-radicle/glossary.md#project-urn) and seed node that's hosting the project.

The project URN is a unique identifier that starts with `rad:git:...`. Think of it like the way GitHub identifies
projects with `github.com/<user-name>/<project-name>`.

There are three default seed nodes — `willow.radicle.garden`, `pine.radicle.garden`, and `maple.radicle.garden` — but if
the project is on a self-hosted seed node, you'll also need to know its URL.

## How to find a project URN and seed node

There are a few ways to find these identifiers based on whether you're a maintainer or a collaborator. Some
organizations may have established other workflows to share this information, particularly if projects are hosted on a
self-hosted seed node, so another solution is to just ask!

### On the Radicle web client

Open up the [Radicle web client](https://app.radicle.network/) on your browser. If you know the seed node or
organization hosting the project, that's the best place to start. Otherwise, check each seed node for the project you're
looking for.

Once you've found a project, look beneath its title for the project URN:

![A project URN discovered in the Radicle web alcient](/img/web-client-urn.png)

You can also use the URL of a project in the Radicle network to identify its project URN and seed node. For example, the
project at
`https://app.radicle.network/seeds/maple.radicle.garden/rad:git:hnrk81fjxemf69dqc5knbmtc6frdi1n3rbh9o/tree/65e4ba4eee4fbddae19afaac8dae54725677d90a`
is hosted on the `maple.radicle.garden` seed node with the project URN of
`rad:git:hnrk81fjxemf69dqc5knbmtc6frdi1n3rbh9o`.

Once you have this information, you can [clone the project](using-radicle/clone-push.md) to start collaborating.

### On a local repository

You can also find the project URN and default seed node of any Radicle project you have on your local machine, whether
you're a maintainer who wants to share the information with a collaborator, or a collaborator in need of a reminder.

`cd` into the repository on your local system and run `rad .`, which displays the project URN.

To find the seed node, run `git config --local rad.seed` from the same directory.
