---
id: pushing-and-pulling-changes
title: Pushing and pulling changes
---

## Pushing changes to a project

To push code to Radicle, you first need to make sure your shell is configured correctly by following the instructions in the [Getting Started](getting-started/doc1-1.md) section. 

After the Radicle remote helper is configured, pushing to Radicle is as simple as pushing to pushing to any other platform. After changes are added and commited, they can be pushed to the Radicle remote via `git push rad`. For help using Git, please refer to [relevant documentation](https://docs.github.com/en/free-pro-team@latest/github/using-git).

It's important to note that once changes are pushed to the Radicle remote, they are published to the Radicle network and are available to anybody who is connected to you in the network. 

Radicle projects also support [branches](understanding-radicle/glossary.md/#branch). A new branch can be made by following common Git commands.

`git checkout -b <branch name>`

It can be pushed to Radicle with:

`git push rad <branch name>`

## Finding & cloning a project

### Following projects

To clone a complete copy of another user's project to your machine, you must first find it on the Radicle network. To find a project, you need it's [**projectID**](understanding-radicle/glossary.md/#project-id). This can be found under in the project page under the [project name](understanding-radicle/glossary.md/#project-name), or in a seed node UI. 

[insert picture of projectID in seednode UI and in project page]

Once found, copy the projectID into the Upstream search bar. If the project exists in your network of connected peers, it will appear. Following the project will replicate it to you local machine.

[insert picture of projectID & search bar]

### Cloning projects

To clone a working copy of a followed project to your computer, you can use the [**Checkout**](understanding-radicle/glossary.md/#checkout) option within the Upstream client. This will clone the project to a specified location on your local machine and initialize a Git repository.

Checking out a project will create a new remote for that project. You can view this remote in the peer switcher.

[insert picture of peer switcher]

It will also add the project to your **My Projects** tab.

## Getting changes from a project 

### Adding remotes
To view and pull changes from another user's version of your project, you must first **add their remote**. To do this, you must add their **peerID** to your list of remotes. 

[insert gif of adding peerID to manage remotes modal]

You can view all remotes of a project with the command:

`git remote show` 

Or, list all the branches of a remote with the command:

`git branch -a`

### Fetching changes
After a remote has been added, any changes can be fetched with:

` git fetch <remote> ` 

Whereas the `<remote>` is the identifier found below the designated user in the Manage Remotes modal. (need to check on this)