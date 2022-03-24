---
id: clone-push
title: Clone and push to a project
---

To contribute to any project hosted on the Radicle network, you first need its [project URN and seed
node](discover-project.md).

## Clone a project

There are two ways to clone a project you've discovered on Radicle. First, click the **Clone** button on any project in the Radicle web client to view and copy the entire command, which you can paste into your terminal. Second, build the cloning URL using the syntax `rad://<seed-host>/<project-urn>`, minus `rad:git:` portion of the project URN.

Let's use the 

Use `rad clone` to fetch a copy of the project.

```
$ rad clone rad://willow.radicle.garden/hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy
Git version 2.35.1

Syncing 🌱 project rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy from https://willow.radicle.garden/
...
```

The CLI fetches and checks out the canonical branch on your local system. You can use `rad inspect` and `git config
--local rad.seed` to double-check the project URN and seed node.

```
$ rad inspect
rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy
$ git config --local rad.seed
https://willow.radicle.garden/
```

You can also check the configured Radicle remotes with `rad remote`:

```
$ rad remote
joelhans hyyc74e14b4pddma6jko8385cnjdj154aorp71456gqb4o5uqwkwpk delegate
```

This output shows one remote setup, which is the project's [**delegate**](understanding-radicle/glossary.md#delegate),
along with their display name and Peer ID. A delegate is a peer who can sign on behalf of the project and push to the
canonical branch.

## Make and push your changes

How you make changes to your local working copy is entirely up to you. 

Once you're finished, add and commit your changes with `git add` and `git commit` just as you would when collaborating
on any other Git-based forge like GitHub or GitLab. Then use `rad push` to synchronize your changes with a secondary
source tree within the project.

```
$ rad push
Pushing 🌱 to remote `rad`
$ git push rad
To rad://hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy.git
   660dfc8..9733b37  main -> main

Git version 2.35.1
Radicle signing key ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIK+WY5OTRLxz2JL39Ajs8GaQs2aG6itE7OLYQ+OC8EFN

Syncing 🌱 project rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy to https://willow.radicle.garden/

ok Project synced.

🪴 Your project is available at:

   (web) https://app.radicle.network/seeds/willow.radicle.garden/rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy/remotes/hynz3cahu1pnmah6a1m59en8c6bujbc5go5inst8chmcr8ahn6byw4
   (git) https://willow.radicle.garden/hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy.git
```

Click on the `(web)` link to visit your source tree within the project.

To help a maintainer see your changes so that they can [track, review, and merge](track-review-merge.md) them, you might
want to contact them to share your [Peer ID](understanding-radicle/glossary.md#peer-id) (which you can find with `rad
self`).
