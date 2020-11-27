---
id: creating-projects
title: Creating projects
---

Creating a project is as easy as initializing a repository in Git. In the
Upstream client, you can create a project from scratch or from an existing
repository. 

## Creating a new project

If starting a new project from scratch, choose `Create from a new repository` in
the **Start a new project** modal. This will prompt you to choose a location on
your machine for the repository to be created. At the moment, [projects can only
be created through the Upstream client][fa].

[Insert picture of Start a new project modal]

This will initalize a Git repository (with the name you've given it) in the
location you choose and publish it to the Radicle network. Note, that when a
project is published to the network, it will be able to be replicated by any
connected peers. 

## Publishing an existing project

If you have a repository that you'd like to publish to the Radicle network,
choose the 'Create from an exisiting repository' in the **Start a new project**
modal. This will allow you to choose the repository and branch you wish to
publish to the network.

The name of the project on the network will be fetched from the name of the
repository.

To see if your project was published correctly, you can search for it on the
[Radicle seed node dashboard][sn]. If it has been correctly replicated by the
seed, you be able to see it under the **Projects** section.

[Insert picture of seed node UI]

### How are projects different from repositories?

In Radicle, local Git repositories are published and shared as [projects][pr].
Projects contain all files of a repository and stores each file's revision
history. Projects also have associated metadata such as a project name and
description. 

Each project carries a unique, shareable peer-to-peer identitifer known as a
**Radicle ID**.

![Radicle ID][ri]

A project also includes the identities of all its [maintainers][ma]. Maintainers
are people with designated rights over the project's metadata. At this point in
time, the person who creates the project is considered its sole maintainer, but
multiple maintainers will be able to be added in the future.

To read more about how projects are designed are replicated across the Radicle
network, head to our [How it Works][hw] section.

[fa]: understanding-radicle/faq.md/#when-will-cli-tooling-be-available
[ma]: understanding-radicle/glossary.md/#maintainer
[pr]: understanding-radicle/glossary.md/#project
[hw]: understanding-radicle/how-it-works.md

[ri]: /img/radicle-id.png

[sn]: http://seedling.radicle.xyz/