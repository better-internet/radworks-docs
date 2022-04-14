---
id: view-share
title: View and share projects
---

After you've pushed your project to the Radicle network, it's available for viewing on the Radicle [web
interface](https://app.radicle.network), which helps you discover new projects hosted on the network. The web interface
is organized by either the seed node a project is synced with or the organization it's published under, such as
Radicle's [alt-clients](https://app.radicle.network/alt-clients.radicle.eth) organization.

![The Radicle web interface for viewing a published project](/img/web-interface.png)

## View a project on the web interface

All projects [published](create.md) to Radicle are discoverable via the web interface at `https://app.radicle.network`.

Click on one of the seed nodes and explore the list of projects hosted there. Click on any project to view its tree,
primary README, commit history, contributors, and more.

![Viewing a specific project with the web interface](/img/web-interface_project.png)

### View folders and files

The project view includes a tree of files and folders. Click on folders to expand them or individual files to show their
syntax-highlighted content and the latest relevant commit.

![Viewing a project's files](/img/web-interface_files.png)

### View the commit history

The **X commit(s)** button displays the project's commit history, including the commit message, the committer's name,
and the time/date of the commit.

![Viewing the commit history](/img/web-interface_commits.png)

Click on any commit to view additions and deletions as a diff.

![Viewing a single commit](/img/web-interface_commit-changes.png)

Click on the **< >** button to view the full file, and explore the rest of the project's tree, at that point in its
history.

### Find the project URN

The project URN is a unique identifier that starts with `rad:git:...`. Think of it like how GitHub identifies projects
with `github.com/<user-name>/<project-name>`. You'll need this URN to [share](#share-a-project) with collaborators.

Look beneath a project's its title for its URN:

![A project URN discovered in the web interface](/img/web-interface_urn.png)

### Find the seed node

You'll also need the project's seed node to share it with collaborators, which is shown between the **Clone** and commit
history buttons. In this case, the project is synchronized with `willow.radicle.garden`.

![A project's seed node in the web interface](/img/web-interface_seed.png)

## Share a project

The easiest way to share a project is the full URL of its page on the web interface, like
[radicle-example](https://app.radicle.network/seeds/willow.radicle.garden/rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy)
at `https://app.radicle.network/seeds/willow.radicle.garden/rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy`.

But you can share any project as long as you know its seed node and project URN. The process for finding these via the
web interface is detailed above, but you can also find this information for any project on your local system.

Find the seed node by view your local Git configuration with `git config --local rad.seed`:

```
$ git config --local rad.seed
https://willow.radicle.garden/
```

Find the project URN with `rad .` (or `rad inspect`):

```
$ rad .
rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy
```

Whether you share the project via the web interface or just the seed node/project URN, your collaborator now has all the
information they need to [clone the project](clone.md) and [push](push.md) their changes.
