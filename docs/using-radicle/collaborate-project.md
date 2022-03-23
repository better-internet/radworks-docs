---
id: collaborate-project
title: Collaborate on a project
---

To contribute to any project hosted on the Radicle network, you first need its [project URN and seed
node](discover-project.md).

## Clone a project

There are two ways to clone a project you've discovered on Radicle. First, click the **Clone** button on any project in the Radicle web client to view and copy the entire command, which you can paste into your terminal. Second, build the cloning URL using the syntax `rad://<seed-host>/<project-urn>`, minus `rad:git:` portion of the project URN.

Use `rad clone` to fetch a copy of the project.

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

This output details one remote setup, which is a project's [**delegate**](understanding-radicle/glossary.md#delegate),
along with their display name and Peer ID. A delegate is a peer who can sign on behalf of the project, which means their
state is trusted within the context of the project.

## Make changes and push your contribution

How you make changes to your local working copy is entirely up to you. 

Once you're finished, add and commit your changes with `git add` and `git commit` just as you would when collaborating
on any other Git-based forge like GitHub or GitLab. Then use `rad push` to synchronzize your changes with a secondary
source tree within the project.

To help a maintainer see your changes, so that they can [track, review, and merge](track-review-merge.md)
them, you might want to contact them to share your [Peer ID](understanding-radicle/glossary.md#peer-id) (which you can
find with `rad self`).
