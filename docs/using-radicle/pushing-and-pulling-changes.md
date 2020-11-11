---
id: pushing-and-pulling-changes
title: Pushing and pulling changes
---

## Committing and pushing code

To push code to Radicle, you first need to make sure your shell is configured correctly by following the instructions in the [Getting Started](getting-started/doc1-1.md) section.

After the Radicle remote helper is configured, pushing to Radicle is as simple as pushing to any other platform. After changes are added and commited, they can be pushed to the Radicle remote via `git push rad`. For help using Git, please refer to [relevant documentation](https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup).

It's important to note that once changes are pushed to your Radicle remote, they are published to the Radicle network and will be publicly available to anybody you are connected with. Updates are only published to the network if the Upstream client is running. 

Radicle projects also support [branches](understanding-radicle/glossary.md/#branch). A new branch can be made by following common Git commands.

`git checkout -b <branch name>`

It can be pushed to Radicle with:

`git push rad <branch name>`

## Finding & cloning projects

### Following projects

To contribute to another user's project, you must first find it on the Radicle network. To find a project, you need its [**Radicle ID**](understanding-radicle/glossary.md/#project-id). This can be found in the project page under the [project name](understanding-radicle/glossary.md/#project-name), or in a seed node UI.

![Identity](/img/radicle-id-seed-node.png)

Once found, copy the Radicle ID into the Upstream search bar. Following the project will replicate it to your local machine once it's found in your network of connected peers.

![Search bar](/img/search-bar.png)

### Cloning projects

To clone a working copy of a followed project to your computer, you can use the [**Checkout**](understanding-radicle/glossary.md/#checkout) option within the Upstream client. This will clone the project to a specified location on your local machine.

Commiting and publishing changes to this working copy will create a new [remote](understanding-radicle/glossary.md/#remote) for that project which is uniquely linked to your peerID. You can view this remote in the peer switcher.

![Peer switcher](/img/peer-switcher.png)

Once a remote is created for a project, it will also move the project to your **Projects** tab.

## Getting changes from a project

### Adding remotes
To view and pull changes from another user's version of your project, you must first **add their remote**. To do this, you must add their **Device ID** to the list of remotes that you follow.

<video width="100%" height="100%" playsinline autoplay muted loop>
  <source src="/img/add-remote.mp4" type="video/mp4">
<video>

Adding a peer's remote means that you wish to track their changes to your project. It's important to note that these changes may not instantly appear. We rely on the connectedness of the network to ensure that we hear about the changes from a peer we follow. Assuming that the network of peers also track the peer you are looking for, you will get their changes:

1. On application startup, where your peer will ask for any new changes from all the peers you follow. For more information on following, [click here](understanding-radicle/how-it-works.md/#following).
2. Whenever your peer receives a gossip message about the peer you wish to follow.  For more information on gossip, [click here](understanding-radicle/how-it-works.md/#gossip).

You can view all remotes of a project with the command:

`git remote show`

Or, list all branches of all remotes with the command:

`git branch -a`

### Fetching changes
After a remote has been added, any changes can be fetched with:

`git fetch <remote>`

Where `<remote>` is of the following form: `<display name>@<Device ID>/<branch>` and can be looked up by inspecting the output of `git branch -a`. Remotes returned by `git branch -a` match the remotes found in the "Manage remotes" modal.
