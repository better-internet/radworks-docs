---
id: fetching-and-merging
title: Viewing and merging patches
---

To be able to collaborate on a Radicle project, you need to know how to view and
merge patches from other people. To view and merge patches from a contributor,
you first need to add them as a remote to your project. If you haven't done so,
follow the instructions in [Tracking & viewing contributions][tv] section.

If you can see a peer's patches after adding them as a remote, they have been
successfully replicated to your machine. If you have added a peer as a remote
and can't see their changes, head over to our [FAQ][fq] section.

## Viewing patches

Now that you're tracking the contributor, you can navigate to the patches tab on your project and see any patches that contributor has created.

<!-- TODO: replace with final image -->

![Patches][pa]

You can then click on the patch that you are interested in and get a detail view. You'll see the title of the patch, the description, which branches it's comparing and the commits. If you're the maintainer of the project, you'll also see two buttons, one to checkout the contribution and another to merge it.

<!-- TODO: replace with final image -->

![PatchDetail][pd]

## Checking out & merging a patch

If you're the maintainer of a project, you can easily checkout a patch by clicking the checkout button and copying the command.

`git fetch rad tags/radicle-patch/<patch-name>:tags/radicle-patch/<peer-name>/<patch-name>`

<!-- TODO: replace with final image -->

![PatchDetailCheckout][pdc]

If you've like the patch, you can then chose to merge it by copying the command that's in the modal when you click the merge button.
<!-- TODD: replace with actual merge command -->

`git fetch rad tags/radicle-patch/<patch-name>:tags/radicle-patch/<peer-name>/<patch-name>`

<!-- TODO: replace with final image -->

![PatchDetailMerge][pdm]

That should merge the patch into your main branch, if you then push the changes `git push rad` you'll have officially accepted the patch. When a patch has the same history as main, it will automatically show up as closed.

![PatchlistClosed][pc]

There you go, you've succesfully merged in a contribution into your project 🎉.

[tv]: using-radicle/tracking-and-viewing.md
[fq]: understanding-radicle/faq.md/#i-cant-find-a-project-on-the-network-or-see-a-peers-changes-what-should-i-do

<!-- TODO: REPLACE LINKS TO PROPER IMAGES -->

[pa]: /img/fork-project.png
[pd]: /img/fork-project.png
[pdc]: /img/fork-project.png
[pdm]: /img/fork-project.png
[pc]: /img/fork-project.png
