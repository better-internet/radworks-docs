---
id: viewing-and-merging-patches
title: Viewing and merging patches
---

To collaborate with others on Radicle, you'll need to view and merge
patches from contributors. To view and merge patches from a contributor, **you
first need to add them as a remote to your project**. If you haven't done so,
follow the instructions in [tracking & viewing contributions][tv] section.

If you can see another peer's patches after adding them as a remote, they have been
successfully replicated to your machine. If you have added a peer as a remote
and can't see their changes, head over to our [FAQ][fq] section to troubleshoot.

## Viewing patches

Once you've added a contributor as a remote, you can view any patches they've published by navigating to the **Patches** tab in your project page.

![Patches][pa]

Clicking on the patch will provide a detailed
view inclunding the patch title, description, commits, and the branches it's
comparing. If you're the maintainer, you'll also see two buttons: **Checkout** and
**Merge**.


![PatchDetail][pd]

## Checking out & merging a patch

 If you're the maintainer, you can easily checkout a patch by clicking
 **Checkout** and copying the following command:

```
git fetch rad remotes/<Device ID>/tags/radicle-patch/change-styles:tags/radicle-patch/<branch_name>
git checkout tags/radicle-patch/coolprogrammer9000/change-styles
```


![PatchDetailCheckout][pdc]

Once checked out, you can compare and evaluate the changes locally. If you'd like to include the submitted changes, you can merge the patch by running the command in the modal that
appears after pressing **Merge**.

```
git pull rad remotes/<Device ID>/tags/radicle-patch/change-styles
```


![PatchDetailMerge][pdm]

This command merges the patch into your main branch locally. Publishing the changes via `git push rad` will merge and close the patch.

![PatchlistClosed][pc]

[tv]: using-radicle/tracking-and-viewing.md
[fq]: understanding-radicle/faq.md/#i-cant-find-a-project-on-the-network-or-see-a-peers-changes-what-should-i-do
[pa]: /img/patches.png
[pd]: /img/patch-detail.png
[pdc]: /img/patch-checkout.png
[pdm]: /img/patch-merge.png
[pc]: /img/patch-closed.png
