---
id: creating-and-sharing-projects
title: Creating and sharing projects
---

In Radicle, local Git repositories are published and shared as [projects](understanding-radicle/glossary.md/#project). Projects contain all of files of a repository and stores each file's revision history. It also carries a unique, shareable peer-to-peer identitifer known as a projectID. 

[insert picture of projectID under project handle]

In Radicle, a project also includes the identities of all its [maintainers](understanding-radicle/glossary.md/#maintainer): peers with designated rights over the project's metadata. To read more about how projects are replicated across the Radicle network, head to our [Understanding Radicle](understanding-radicle/how-it-works.md) section.

## Creating projects

Creating a project is as easy as initializing a repository in Git. In the Upstream client, you can create a project from scratch or from an existing repository. If creating from scratch, the client will create a new Git repository in the location you choose. If creating from an existing repository, Radicle will initialize your repository as a project and publish it to the Radicle netowrk.

At the moment, [projects can only be created through the Upstream client](understanding-radicle/faq.md).

## Sharing projects

Projects can be shared with their projectID. The projectID can be found under the project name on the project page. 

Copy and pasting a projectID into your search bar will find it on the network for you. Following a project will replicate it to your local machine, making it available to all of your connected peers. To learn more about following & replication, [click here](understanding-radicle/how-it-works.md).






