---
id: adding-members
title: Adding members
---

## What is a member

A member of an org is an other person who can initiate transactions such as registrations or anchors for your org. You can only add members to multi signature orgs, single signer orgs only have 1 member.

## Adding a member

To start with you need to navigate to the **Members** tab in your multi signature org.

![single member org page][om]

Once you click **Add a member** you'll be informed that adding a member happens in the Gnosis Safe web UI.

![single member button press][bp]

You'll land on the Gnosis Safe web UI in the settings tab where you can click on the owners tab to manage owners.

![gnosis safe ui owners][gso]

You can follow their flow to add a owner by clicking **Add new owner**. You'll have to decide on the transaction threshold and other things, read more about it in the [Gnosis Safe Docs][gsd]

![gnosis safe add owners][gsa]

After you've done that, you should see the new safe owner (or org member) in the Gnosis Safe UI.

![gnosis safe add owners][gsm]

And when you go back to Upstream, you'll see the member there as well.

![gnosis safe add owners][ums]

This member can now do everything the original member could do and depending on the quorum (or transaction threshold), they'll need be able to execute it alone or just be the first signer of the transaction.


[om]: /img/org-member-1member@2x.png
[bp]: /img/org-member-button@2x.png
[gso]: /img/org-member-gnosis-member@2x.png
[gsd]: https://help.gnosis-safe.io/en/articles/3950657-add-owners
[gsa]: /img/org-member-gnosis-add@2x.png
[gsm]: /img/org-member-gnosis-added@2x.png
[ums]: /img/org-member-2members@2x.png
