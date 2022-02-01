---
id: creating-projects
title: Creating projects
---

Creating a project is as easy as initializing a repository in Git. In the
Upstream client, you can create a project from scratch or from an existing
repository. Creating a project on Upstream will publish it to the Radicle
network, making it available to any of your connected peers.

## Starting a new project

When starting a new project from scratch, choose `Create from a new repository`
in the **Start a new project** modal. This will prompt you to choose a location
on your machine for the repository to be created. At the moment, [projects can
only be created through the Upstream client][fa].

![Start New Project][np]

This will initialize a Git repository (with the name you've given it) in the
location you choose and publish it to the Radicle network. Note, when a project
is published to the network, it will be able to be replicated by any connected
peers.

## Publishing an existing project

If you have a repository that you'd like to publish to the network, choose the
`Create from an existing repository` in the **Start a new project** modal. This
will allow you to choose the repository and its configured default branch. All
branches present when you add the repository will be published.

![Start Existing Project][ep]

The name of the project on the network will be taken from the name of the
repository.

⚠️ On project creation, **all branches that have a local head will be
published**. You can see what branches will be published by running `git branch
-a`.

To see if your project was published correctly, you can search for it on the
[Radicle seed dashboard][sn]. If it has been correctly replicated by the seed,
you will be able to see it under the **Projects** section of the seed dashboard.

![Seed Dashboard Search][ss]

### How are projects different from repositories?

In Radicle, local Git repositories are published and shared as [projects][pr].
This is done via the Radicle monorepo on your machine, which pulls in updates to
your local working copies and stores them as Git objects. A client (like Radicle
Upstream) then publishes changes to your monorepo to Radicle, making it
available to your network of connected peers.

Projects contain all files of a Git repository and their revision history, but
they also have associated Radicle-specific metadata such as a name and
description.

Each project carries a unique, shareable peer-to-peer identifier known as a
**Radicle ID**.

![Radicle ID][ri]

A project also includes the Radicle identities of all its [maintainers][ma].
Maintainers are people with designated rights over the project's metadata. At
this point in time, the person who creates the project in Radicle is considered
its sole maintainer, but multiple maintainers will be able to be added in the
future.

To read more about how projects are replicated across the Radicle
network, head to our [How it Works][hw] section.

[fa]: understanding-radicle/faq.md/#when-will-cli-tooling-be-available
[ma]: understanding-radicle/glossary.md/#maintainer
[pr]: understanding-radicle/glossary.md/#project
[hw]: understanding-radicle/how-it-works.md/#peer-discovery--replication

[ri]: /img/radicle-id.png
[ss]: /img/seed-dashboard-search.png
[np]: /img/create-new-project-finish.png
[ep]: /img/create-existing-project.png


[sn]: http://sprout.radicle.xyz/
