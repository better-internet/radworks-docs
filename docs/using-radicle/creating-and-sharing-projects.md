---
id: creating-projects
title: Creating projects
---

In Radicle, local Git repositories are published and shared as [projects][pr].
Projects contain all files of a repository and stores each file's revision
history. It also carries a unique, shareable peer-to-peer identitifer known as a
[Radicle ID][rad]. 

![Radicle ID][ri]

A project also includes the identities of all its [maintainers][ma]: peers with
designated rights over the project's metadata. To read more about how projects
are replicated across the Radicle network, head to our [Understanding
Radicle][un] section.

## Creating projects

Creating a project is as easy as initializing a repository in Git. In the
Upstream client, you can create a project from scratch or from an existing
repository. If creating from scratch, the client will create a new Git
repository in the location you choose. If creating from an existing repository,
Upstream will initialize your repository as a project and publish it to the
Radicle network.

At the moment, [projects can only be created through the Upstream client][fa].

## Sharing projects

Projects can be shared with their Radicle ID. The Radicle ID can be copied from
the project page (see above).

Copy and pasting a project's Radicle ID into your search bar will find it on the
network for you. Following a project will replicate it to your local machine,
making it available to all of your connected peers. To learn more about
following & replication, [See Replication][un].


[fa]: understanding-radicle/faq.md#when-will-cli-tooling-be-available
[ma]: understanding-radicle/glossary.md/#maintainer
[pr]: understanding-radicle/glossary.md/#project
[rad]: understanding-radicle/glossary.md/#radicle-id
[un]: understanding-radicle/how-it-works.md/#replication-model

[ri]: /img/radicle-id.png
