---
id: creating-an-org
title: Creating an org
---

Radicle Orgs are a decentralized, platform-agnostic, and secure alternative to orgs on centralized forges (i.e. GitHub, Gitlab). They are on-chain entities that can be managed by one or many maintainers via a multi-sig wallet. With Radicle Orgs, projects can maintain an auditable and transparent history of project state that is anchored and secured on Ethereum. 

Interactions with Radicle Orgs can be programmed to trigger workflows like the distribution of developer rewards, software releases, or any important upgrades. With the Gnosis Safe integration, teams can experiment with decentralized admin control and collectively govern codebases.

## Creating an org

If you want to create an org, you must first connect a wallet and Link your Radicle ID to that wallet's Ethereum address. [Learn how here][suyw]

Now that your wallet is connected you'll see the **Create an org** button in the sidebar.

![Create an Org][co]

Once you click the **Create an org** button, a modal appears allowing you to choose between creating a **Single-signer** or a **Multi-signer** org. 

A single-signer org means you're deploying an org contract owned by a single Ethereum address. To create a single-signer org, select **Single-signer** and input the Ethereum address you'd like to control the org. In Upstream, the address of your connected wallet will automatically prefill, but you can choose to enter any valid Ethereum address you control.

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

## Sharing your org

After creating an org, you can view and share it with others via the Radicle web client, [app.radicle.network][wc]. You can either search for it via the search bar on the homepage, or click **View in the browser** on your org page.

![View in browser][vib]

All orgs can be shared via their unique URL with the following structure:

`https://app.radicle.network/orgs/YOUR_ORG_ID`

To add a name, social handles, and avatar to your org page, be sure to [register and set a name][rn]!


[wc]: https://app.radicle.network/
[gs]: https://gnosis-safe.io/
[an]: connecting-to-ethereum/anchoring-projects.md
[rn]: connecting-to-ethereum/registering-a-name.md

[co]: /img/create-an-org.png
[om]: /img/create-org-modal.png
[co2]:/img/confirm-org.png
[do]:/img/deploy-org.png
[oc]: /img/org-created.png
[op]: /img/org-page.png
[mop]: /img/multi-sig-page.png
[vib]: /img/view-in-browser.png
[suyw]: connecting-to-ethereum/setting-up-wallet.md
