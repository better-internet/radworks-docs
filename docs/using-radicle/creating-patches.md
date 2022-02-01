---
id: creating-patches
title: Creating patches
---

To make a contribution to another user's project, you must first find it on the
network. To find a project, you need its [**Radicle ID**][ri]. This can be found
on the project page under the project name, or in a seed node dashboard such as
[sprout.radicle.xyz](http://sprout.radicle.xyz).

![Identity][id]

Once you have the Radicle ID, copy it into the Upstream search bar. From there,
you can follow the project to track it. Once it is found in your network of
connected peers, it will replicate the project to your machine. You won't see
any information on the project until it is verified by the protocol.

![Search bar][sb]

![Found Project][fp]

### Forking projects

To contribute to another user's project you have to fork it first. Using the
**Fork** option in the Upstream client will clone the project to a specified
location on your local machine and publish your version to the Radicle network
as a new project.

![Fork Project][fo]

 Forking a project will move it from your **Following** tab to your **Projects**
tab. This is because once you fork a project, you create your own copy of it
that is unique to your Device ID. You can [push changes][pc] to this view via
the `rad` remote and broadcast them to your network of peers. You can clone your
project with the **Checkout** option on your project page.

### Creating a patch

Once you've checked out your fork of the project you'd like to contribute to,
you can **create a patch**. A patch is a set of proposed changes to the source
code of a project. Patches can be accepted & merged or rejected by a project's
maintainer. Similar to pull requests and merge requests, patches are used to
manage contributions to code repositories.

When viewing your fork of a project, you'll see a **Patches** tab next to
**Files** and **Commits**. The **New Patch** button will guide you through the
following steps:

![New Patch][np]

First, make your changes and commit them locally to a branch. Next, mark them as
a patch by creating an annotated git tag:

`git tag --annotate radicle-patch/<name>`

Be sure to replace `<name>` with the name of your patch.

This command will open your editor and allow you to add a title and description
to your patch like this:

```
My patch Title

And add an optional description
on multiple lines
```

 Be sure to add these to make it easy for the maintainer to understand the
changes you're proposing to their project. *Note: you can't edit these later!*

![Tag Message][tm]

All that's left to do is to publish the new patch by simply pushing the git tag
to the network:

`git push --tags rad`

Your patch is now public 🎉. To view your patch, just refresh the Upstream app.

Once you've published a patch, make sure you notify them and share your Device
ID. For a maintainer to view your patch, they must add your Device ID as a
remote to their project (See [tracking and viewing contributions][tv]).

If you are a maintainer, we suggest providing a way for your contributors
contact you with their Device IDs to easily submit patches. Your `README.md`
might be a good place for this.

### Updating a patch

If you want to make some changes to a patch, updating them is really simple:
1. First make the changes to your local branch
2. Re-tag the changes by running: `git tag --annotate --force
   radicle-patch/<name>`
3. And push again `git push rad --tags --force`.


[pc]: pushing-changes.md
[tv]: tracking-and-viewing.md
[ri]: understanding-radicle/glossary.md/#radicle-id

[id]: /img/radicle-id-seed-node.png
[sb]: /img/search-bar.png
[fp]: /img/project-found.png
[fo]: /img/fork-project.png
[np]: /img/new-patch.png
[tm]: /img/tag-message.png
