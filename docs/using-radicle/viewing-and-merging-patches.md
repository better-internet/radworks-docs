---
id: viewing-and-merging-patches
title: Viewing and merging patches
---

To collaborate on a Radicle project, you need to know how to view and merge
patches from other people. To view and merge patches from a contributor, you
first need to add them as a remote to your project. If you haven't done so,
follow the instructions in [Tracking & viewing contributions][tv] section.

If you can see a peer's patches after adding them as a remote, they have been
successfully replicated to your machine. If you have added a peer as a remote
and can't see their changes, head over to our [FAQ][fq] section.

## Viewing patches

Now that you're tracking the contributor, you can navigate to the `Patches` tab
on your project and see any patches that contributor has created.

<!-- TODO: replace with final image -->

![Patches][pa]

You can then click on the patch that you're interested in and get a detailed
view. You'll see the title, description, commits, and the branches it's
comparing. If you're the maintainer, you'll also see two buttons: `Checkout` and
`Merge`.

<!-- TODO: replace with final image -->

![PatchDetail][pd]

## Checking out & merging a patch

 If you're the maintainer, you can easily checkout a patch by clicking
 `Checkout` and copying the command:

`git fetch rad
tags/radicle-patch/<patch-name>:tags/radicle-patch/<peer-name>/<patch-name>`

<!-- TODO: replace with final image -->

![PatchDetailCheckout][pdc]

If you like the patch, you can merge it by running the command in the modal that
appears after pressing `Merge`.
<!-- TODD: replace with actual merge command -->

`git fetch rad
tags/radicle-patch/<patch-name>:tags/radicle-patch/<peer-name>/<patch-name>`

<!-- TODO: replace with final image -->

![PatchDetailMerge][pdm]

That command merges the patch into your main branch. When you push the changes
with `git push rad` you'll have merged and closed the patch.

![PatchlistClosed][pc]

[tv]: using-radicle/tracking-and-viewing.md
[fq]: understanding-radicle/faq.md/#i-cant-find-a-project-on-the-network-or-see-a-peers-changes-what-should-i-do

<!-- TODO: REPLACE LINKS TO PROPER IMAGES -->

[pa]: /img/fork-project.png
[pd]: /img/fork-project.png
[pdc]: /img/fork-project.png
[pdm]: /img/fork-project.png
[pc]: /img/fork-project.png
