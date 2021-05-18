---
id: contributing
title: Creating patches
---

To contribute to another user's project, you must first find it on the
network. To find a project, you need its [**Radicle ID**][ri]. This can be found
in the project page under the project name, or in a seed node dashboard such as
[sprout.radicle.xyz](http://sprout.radicle.xyz).

![Identity][id]

Once you have the Radicle ID, copy it into the Upstream search bar. From there,
you can follow the project to track it. This will replicate it to your local
machine once it's found in your network of connected peers. You won't see the
project metadata — such as, the name of the project — until it is verified by
the protocol.

![Search bar][sb] ![Found Project][fp]

### Forking projects

To create your own view of a project, you can use the **Fork** option within the
Upstream client. This will clone the project to a specified location on your
local machine and publish your version to the Radicle network as a new project.

<!-- TODO: Update screenshot to have patches -->

![Fork Project][fo]

Forking a project will move it from the **Following** tab to the **Projects**
tab. This is because once you fork a project, you create your own view of it
that is unique to your Device ID. You can [push changes][pc] to this view via
the `rad` remote and publish them to the network. You are able to clone your
project with the **Checkout** option on your project page.

### Creating a patch

Now that you have your own view of the project and you have it checked out, you
can start creating a patch. In your view of the project you'll see a patches tab next to `Files` and `Commits`. There you see a `New patch` button which will guide you through the steps.

<!-- TODO: Replace with new screenshot -->

![New Patch][np]

First thing you do is make your changes as you always would and commit those
locally. Once you've done that you have to package them as a patch by creating
an annotated git tag that starts with `radicle-patch/`, like this:

`git tag--annotate radicle-patch/<name>`

Be sure to replace `<name>` with the name of your patch.

Next git will allow you to add a title and description to the tag, those will be
the ones that show up in the UI, so be sure to add those to make it easy for the
maintainer to understand the changes you're proposing.

<!-- TODO: Replace with screenshot showing the tag message thing -->

![Tag Message][tm]

All that's left to do is to publish the new patch by simply pushing the git tag to the network: `git push --tags rad`. Your patch is now public 🎉.

Make sure the maintainer is tracking you so that they see your patch. To learn how to do that, take a look at [tracking and viewing contributions][tv].

If you are a maintainer of a project, it is suggested that you provide a link to
a channel for receiving contributor Device IDs.

[pc]: pushing-changes.md
[tv]: tracking-and-viewing.md
[ri]: understanding-radicle/glossary.md/#radicle-id

[id]: /img/radicle-id-seed-node.png
[sb]: /img/search-bar.png
[fp]: /img/project-found.png
[fo]: /img/fork-project.png

<!-- TODO: REPLACE LINKS TO PROPER IMAGES -->

[np]: /img/fork-project.png
[tm]: /img/fork-project.png
