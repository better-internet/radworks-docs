---
id: creating-an-org
title: Creating an org
---

<!-- TODO: What's an Org-->

If you want to create an org, you have to make sure you have a wallet connected and your Radicle ID is attested to that wallet.

Now that your wallet is connected you'll see the **Create an Org** button in the sidebar.

![Create an Org][co]

Once you click the **Create an Org** button, a modal shows up allowing you to choose between starting an **single-signer** or a **multi-signer** org. 

A single-signer org means you're deploying an org contract owned by a single Ethereum address. To create a single-signer org, select **Single-Signer** and input the Ethereum address you'd like to control the org. In Upstream, the address of your connected wallet will automatically prefill, but you can choose to enter any valid Ethereum address you control.

A multi-signer org means you're deploying an org contract owned by a multi-signature contract. In Radicle Upstream and on [app.radicle.network][wc], deploying a multi-signature org creates a [Gnosis Safe][gs] and sets the address of the connected wallet as the first member. The Gnosis Safe becomes the owner of the org.

![Create Org Modal][om]

Once you've clicked **Confirm in your wallet**, your connected wallet will prompt you to sign the transaction. 

![Confirm Org][co2]

After you sign the transaction, Upstream will deploy the contract and notify you when your org is ready for you.

![Deploy Org][do]

Once your org is created, you can navigate to it by clicking the newly generated icon in your sidebar.

![Org Created][oc]

Here you can see the org address and its owner's address. To add projects to your org, you can anchor them here. Read more about [Anchoring][an].

![Org Page][op]

If you've created a multi-signature org, you can also view the members of your org and easily navigate to your the Gnosis Safe interface to manage your org, add/remove members and sign transactions.

![Multi-sig Org Page][mop]

[ad]: using-radicle/adding-a-seed-node.md
[se]: understanding-radicle/glossary.md/#seed
[wc]: https://app.radicle.network/
[gs]: https://gnosis-safe.io/
[an]: connecting-to-ethereum/anchoring-projects.md

[co]: /img/create-an-org.png
[om]: /img/create-org-modal.png
[co2]:/img/confirm-org.png
[do]:/img/deploy-org.png
[oc]: /img/org-created.png
[op]: /img/org-page.png
[mop]: /img/multi-sig-page.png



