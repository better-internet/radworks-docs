---
id: contribute-project
title: Contribute to a project
---

To contribute to any project hosted on the Radicle network, you 

## Clone a project

Make sure you have the [project URN and seed node](using-radicle/discover-project.md) of the project you want to
close before you get started.

The syntax for the cloning URL is `rad://<seed-host>/<project-urn>`, without the `rad:git:` portion for the project URN.
Or, click on the **Clone** button on any project in the Radicle web client to copy the entire command directly.

Then use `rad clone` to fetch a copy of the project from the seed node.

```
$ rad clone rad://seed.alt-clients.radicle.xyz/hnrkmg77m8tfzj4gi4pa4mbhgysfgzwntjpao
Git version 2.35.1

Syncing 🌱 project rad:git:hnrkmg77m8tfzj4gi4pa4mbhgysfgzwntjpao from https://seed.alt-clients.radicle.xyz/
...
```

The CLI fetches and checks out the canonical branch on your local system. You can use `rad inspect` and `git config
--local rad.seed` to double-check the project URN and seed node.

```
$ rad inspect
rad:git:hnrkmg77m8tfzj4gi4pa4mbhgysfgzwntjpao
$ git config --local rad.seed
https://seed.alt-clients.radicle.xyz/
```

You can also check the configured Radicle remotes with `rad remote`:

```
$ rad remote
cloudhead hyn9diwfnytahjq8u3iw63h9jte1ydcatxax3saymwdxqu1zo645pe delegate
```

This output details one remote setup, which is a project's [**delegate**](understanding-radicle/glossary.md#delegate), along with their display name and Peer ID.
A delegate is a peer who can sign on behalf of the project, which means their state is trusted within the context of the
project.

## Make changes and push your contribution

Once you've [cloned](using-radicle/contribute-project.md) a Radicle project to your local system and made your changes, apply them using `git add` and `git commit`, then use 


, you can make changes, apply them
using `git` as you would with other code collaboration tools, and then push those changes back to the Radicle network
using `rad push`.

Once you've made your changes, use `git add` and `git commit` as you normally would to update your local state.

Then, use `rad push` to push your changes to a want to push your code back to your secondary source tree within the
project.

To help a maintainer see your contribution, so that they can [track, review, and merge](using-radicle/track-review-merge.md)
your changes, share your [Peer ID](understanding-radicle/glossary.md#peer-id) (which you can find with `rad self`).
