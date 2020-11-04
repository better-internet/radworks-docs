---
id: creating-and-sharing-projects
title: Creating and sharing projects
---

In Radicle, local git repositories are published and shared as [projects](understanding-radicle/glossary.md/#project). Projects contain all of files of a repository and stores each file's revision history. It also carries a unique, shareable peer-to-peer identitifer known as a projectID. In Radicle, a project also includes the identities of all its [maintainers](understanding-radicle/glossary.md/#maintainer): peers with designated rights over the project's metadata. To read more about how projects are replicated across the Radicle network, head to our [Understanding Radicle](understanding-radicle/how-it-works.md) section.

## Creating a project

Creating a project is as easy as creating a repository in git. In the Upstream client, you can create a project from scratch or from an existing repository. If creating from scratch, the client will create a new git repository in the location you choose. If creating from an existing repository, Radicle will initialize your repository as a project and publish it to the Radicle netowrk.

## Sharing a project

While you will be able to search for projects directly on Radicle using the projectID, the only way to currently do so is to add another user as a remote to your project. For instructions on how to do this, head to [pushing & pulling changes](using-radicle/doc2-1.md)



