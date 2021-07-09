---
id: creating-an-org
title: Creating an Org
---

<!-- TODO: What's an Org-->

If you want to create an org, you have to make sure you have a wallet connected and your Radicle ID is attested to that wallet.

Now that your wallet is connected you'll see the **Create an Org** button in the sidebar.

![Create an Org][co]

Once you click the **Create an Org** button, a modal shows up allowing you to choose between starting an single-signer or a multi-signer org. Here we'll focus on the single-signer org, which means you're deploying an org contract with the connected wallet as it's owner.

When selecting single-signer, we'll prefill you're connected wallet as the owner, but you can choose to enter any other valid Ethereum address you control. That could also be an existing multi-sig, but for the sake of this example, we're gonna focus on your own connected wallet.

![Create Org Modal][om]

Once you've clicked **Confirm in your wallet**, your connected wallet will prompt you to sign the transaction. 

![Confirm Org][co2]

After you sign the transaction, Upstream will deploy the contract and notify you when your org is ready for you.

![Deploy Org][do]

Now that your org is created, the sidebar icon is clickable and you have a notification that allows you to navigate to your org.

![Org Created][oc]

You can click either the **Go to org** button in the notification or the icon in the sidebar. Both will land you on your new single-signer org. Here you can see the org address and the wallet that owns it bellow.

![Org Page][op]

You are now ready to use your org 🌱


[ad]: using-radicle/adding-a-seed-node.md
[se]: understanding-radicle/glossary.md/#seed

[co]: /img/create-an-org.png
[om]: /img/create-org-modal.png
[co2]:/img/confirm-org.png
[do]:/img/deploy-org.png
[oc]: /img/org-created.png
[op]: /img/org-page.png



