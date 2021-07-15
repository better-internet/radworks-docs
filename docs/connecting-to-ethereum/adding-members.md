---
id: adding-members
title: Adding members
---

With multi-signature orgs, you can add multiple **members** who can also initiate transactions such as registrations or anchors in your org.  Read more about creating an org [here][co].

> Note: If you created a single-signer org, you can not add more members.

## Adding a member

After creating a multi-signer org, navigate to the **Members** tab in your org page.

![single member org page][om]

To add members, you must do so in your Gnosis Safe. Clicking **Add a member** will lead you to your Safe. 

![single member button press][bp]

If you haven't already, connect your wallet to the Gnosis Safe UI. Be sure to use the one that is linked to your Radicle identity. Click on the **Settings** tab and navigate to **Owners**.

![gnosis safe ui owners][gso]

Here, you can add additional owners and update your transaction threshold. This is number of owners needed to sign-off on transactions within the Gnosis Safe. This will be the number of people required to sign off on any anchor or other org interaction. Follow the instructions outlined in the [Gnosis Safe docs][gsd] if you need help.

![gnosis safe add owners][gsa]

If done successfully, you should see the new owner in the Gnosis Safe UI.

![gnosis safe add owners][gsm]

Back in Radicle Upstream or the [Radicle web client][wc], you'll see the new member added to your org.

![gnosis safe add owners][ums]

This member can now add new members, anchor projects, and manage the org as the other members do (depending on the quorum required).


[om]: /img/org-member-1member@2x.png
[bp]: /img/org-member-button@2x.png
[gso]: /img/org-member-gnosis-member@2x.png
[gsd]: https://help.gnosis-safe.io/en/articles/3950657-add-owners
[gsa]: /img/org-member-gnosis-add@2x.png
[gsm]: /img/org-member-gnosis-added@2x.png
[ums]: /img/org-member-2members@2x.png
[wc]: https://app.radicle.network/
[co]: connecting-to-ethereum/creating-an-org.md
