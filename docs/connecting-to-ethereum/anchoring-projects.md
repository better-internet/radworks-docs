---
id: anchoring-projects
title: Anchoring projects
---

## What's an anchor?

An anchor is basically an on-chain agreement between the owners of an org about the state of a project's source code. Anchors are comprised of the org address under which the project lives, the Radicle ID of the project, and the project's latest commit hash.

Anchors are a secure and verifiable way to present the canonical state of a repository that doesn't rely on a centralized admin or third-party. Use them to push releases, make important upgrades, or just collectively maintain codebases transparently.

## Creating an anchor

To anchor a project to your org, you must first have it published to the Radicle network. If you haven't done so, follow the steps to [Create
a Project][cp]. Once you have a Radicle project you'd like to anchor, navigate to your org and click **Anchor a project**.
from the project page.

![Anchor a project][ap]

From here, you'll be asked to select the project you'd like to anchor. You can choose which peer view and branch you'd like to anchor. In this case, we demonstrate the anchoring of the `main` branch of the maintainer's view of the `hello-universe` project. This will show you the latest commit and that's also the commit that will be anchored. Clicking **Confirm in your wallet** will send the transaction to your wallet to sign. If you have a single-signer org you'll be able to confirm the transaction in your connected wallet. If you are a member in the multi-signer org you'll need to confirm the transaction then execute it the transaction through the Gnosis Safe interface.

![Choose a peer and branch][ap1]

Once the transaction is included, you'll be able to view your anchored project in your org page. Hovering over the anchor icon will show the transaction hash as well as the commit hash. Clicking on the commit hash will bring you to the project.

![Anchor hash][ap2]

[cp]: using-radicle/creating-projects

[ap]: /img/anchor-a-project.png
[ap1]: /img/select-a-branch.png
[ap2]: /img/anchor-hash.png
