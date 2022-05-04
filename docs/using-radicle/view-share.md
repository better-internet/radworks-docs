---
id: view-share
title: View and share projects
---

After you've pushed your project to the Radicle network, you can view it using either the Upstream desktop app or the
web interface. They have a similar user interface and experience &mdash; the primary difference is that Upstream
supports patches.

## View a project on Upstream

If you're a delegate of the project, or you've previously [cloned](clone.md) and [pushed](push.md) code to the network,
you'll see the project on your profile page. Click on the box to view that project.

If you're looking for another Radicle user's project, you need the project URN, which you can find and copy either via
the project's delegate or the [web interface](#view-a-project-on-the-web-interface). Click on the magnifying glass icon
(🔍) and paste in the project URN. If you're not currently tracking this project, click the **Track** button to search
for it on the Radicle network. Once your profile page updates, click the box to view the project.

![Viewing a project in Upstream](/img/upstream_project.png)

## View a project on the web interface

All projects [published](create.md) to Radicle are discoverable via the web interface at `https://app.radicle.network`.
The web interface is organized by either the seed node a project is synced with or the organization it's published
under, such as Radicle's [alt-clients](https://app.radicle.network/alt-clients.radicle.eth) organization.

Click on one of the seed nodes and explore the list of projects hosted there. Click on any project to view its tree,
primary README, commit history, contributors, and more.

![Viewing a specific project with the web interface](/img/web-interface_project.png)

## Explore a project

Both interfaces let you explore files and the commit history. Click on folders to expand them or individual files to
show their syntax-highlighted content and the latest relevant commit.

Click **X commit(s)** to view project's commit history, including the commit message, the committer's name, and the
time/date of the commit. Click on any commit to view changes, such as additions and deletions, as a diff.

In Upstream, click **Patches** to view open, closed, or all the project's patches.

In the web interface, click the **< >** icon to explore the state of the project at that commit.

## Share a project

If you're looking to onboard a new collaborator to your Radicle-hosted project, you need to let them know where they can
find the project, explore it, and [clone](clone.md) it.

Generally speaking, the collaborator needs to know the project URN and the seed node.

The easiest way to share a project is the full URL of its page on the web interface, like
[radicle-example](https://app.radicle.network/seeds/willow.radicle.garden/rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy)
at `https://app.radicle.network/seeds/willow.radicle.garden/rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy`. Here,
they'll be able to find all the information they need to [clone](clone.md) your project and start collaborating.

### Find the project URN

**In Upstream**, click the string beneath your project's title to copy the URN to your clipboard.

![A project URN in Upstream](/img/upstream_urn.png)

**In the web interface**, click the icon beneath your project's title to copy the URN to your clipboard.

![A project URN discovered in the web interface](/img/web-interface_urn.png)

**On your local system**, `cd` into your project and use `rad .` (or `rad inspect`) to display the URN:

```
$ rad .
rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy
```

### Find the seed node

In the web interface, your project's seed node is shown between the **Clone** and commit history buttons. In this case,
the project is synchronized with `willow.radicle.garden`.

![A project's seed node in the web interface](/img/web-interface_seed.png)

You can also find the seed node from your local system. `cd` into your project and check the local Git configuration:

```
$ git config --local rad.seed
https://willow.radicle.garden/
```

At this point, no matter how you share the project URN and seed nodes, your collaborator has all the information they
need to [clone the project](clone.md) and [push](push.md) their changes.
