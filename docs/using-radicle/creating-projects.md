---
id: creating-projects
title: Creating projects
---

In Radicle, local Git repositories are published and shared as [projects][pr].
Projects contain all files of a repository and their revision history.
Projects also have associated metadata such as a name and description. 

Each project carries a unique, shareable peer-to-peer identitifer known as a
**Radicle ID**.

![Radicle ID][ri]

A project also includes the identities of all its [maintainers][ma]. Maintainers
are people with designated rights over the project's metadata. At this point in
time, the person who creates the project is considered its sole maintainer, but
multiple maintainers will be able to be added in the future.

To read more about how projects are designed are replicated across the Radicle
network, head to our [How it Works][hw] section.

## Creating projects

Creating a project is as easy as initializing a repository in Git. In the
Upstream client, you can create a project from scratch or from an existing
repository. 

If creating from scratch, the client will create a new Git repository in the
location you choose. If creating from an existing repository, Upstream will
initialize your repository as a project and publish it to the Radicle network.

At the moment, [projects can only be created through the Upstream client][fa].


[fa]: understanding-radicle/faq.md/#when-will-cli-tooling-be-available
[ma]: understanding-radicle/glossary.md/#maintainer
[pr]: understanding-radicle/glossary.md/#project
[hw]: understanding-radicle/how-it-works.md

[ri]: /img/radicle-id.png
