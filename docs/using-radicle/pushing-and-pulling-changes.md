---
id: pushing-and-pulling-changes
title: Pushing and pulling changes
---

## Committing and pushing code

To push code to Radicle, you first need to make sure your shell is configured correctly by following the instructions in the [Getting Started](getting-started/doc1-1.md) section.

After the Radicle remote helper is configured, pushing to Radicle is as simple as pushing to any other platform. After changes are added and commited, they can be pushed to the Radicle remote via `git push rad`. For help using Git, please refer to [relevant documentation](https://docs.github.com/en/free-pro-team@latest/github/using-git).

It's important to note that once changes are pushed to the Radicle remote, they are published to the Radicle network and are available to anybody who is connected to you in the network.

Radicle projects also support [branches](understanding-radicle/glossary.md/#branch). A new branch can be made by following common Git commands.

`git checkout -b <branch name>`

It can be pushed to Radicle with:

`git push rad <branch name>`

## Finding & cloning projects

### Following projects

To contribute to another user's project, you must first find it on the Radicle network. To find a project, you need its [**projectID**](understanding-radicle/glossary.md/#project-id). This can be found in the project page under the [project name](understanding-radicle/glossary.md/#project-name), or in a seed node UI.

[insert picture of projectID in seednode UI and in project page]

Once found, copy the projectID into the Upstream search bar. Following the project will replicate it to your local machine once it's found in your network of connected peers.

[insert picture of projectID & search bar]

### Cloning projects

To clone a working copy of a followed project to your computer, you can use the [**Checkout**](understanding-radicle/glossary.md/#checkout) option within the Upstream client. This will clone the project to a specified location on your local machine.

Commiting and publishing changes to this working copy will create a new [remote](understanding-radicle/glossary.md/#remote) for that project which is uniquely linked to your peerID. You can view this remote in the peer switcher.

[insert picture of peer switcher]

Once a remote is created for a project, it will also move the project to your **Projects** tab.

## Getting changes from a project

### Adding remotes
To view and pull changes from another user's version of your project, you must first **add their remote**. To do this, you must add their **peerID** to your list of remotes.

[insert gif of adding peerID to manage remotes modal]

Adding a user's remote is basically adding their version of your project to your machine. Once added, you'll be able to fetch changes from their version and apply them to your working copy. Read more about [how remotes work on Radicle](understanding-radicle/faq.md).

You can view all remotes of a project with the command:

`git remote show`

Or, list all branches of all remotes with the command:

`git branch -a`

### Fetching changes
After a remote has been added, any changes can be fetched with:

`git fetch <remote>`

Where `<remote>` is of the following form: `<display name>@<peerID>/<branch>` and can be looked up by inspecting the output of `git branch -a`. Remotes returned by `git branch -a` match the remotes found in the "Manage remotes" modal.
