---
id: setting-up-wallet
title: Setting up your wallet
---

<!-- TODO: Add intro on wallets -->
## Connecting your wallet

To connect your wallet, just head to the wallet tab in the sidebar of your Radicle Upstream client and click **Connect your wallet**.

![Wallet][cw]

After clicking **Connect your wallet** you'll be prompted to connect using a [WalletConnect supported wallet][wc].

![Wallet Connect][qr]

When scanning the QR code you'll be prompted in your wallet to "Connect to Radicle Upstream". Once you've done that, Upstream will update to show the balance of your connected wallet.

![Wallet Page][wp]

Your wallet is now connected. The next step is to link your Radicle ID to your Ethereum address.

## Linking your Radicle ID

Now that your wallet is connected, the next step is to link your Radicle ID to your Ethereum address. This will mean that we can find your Ethereum address based on your Radicle ID and vice versa.

Start by clicking **Link your ID**.

![Link ID][li]

This will open the transaction modal, where you can see what ID it will link to your connected Ethereum address.

![Link ID Modal][lm]

After clicking **Link your ID** you'll be prompted in your wallet app to confirm the transaction.

![Loading ID][ld]

Once it's confirmed you'll see the transaction in your list of transactions, this means your Radicle ID is now connected to your Ethereum address! 

![Link Success][ls]


[wc]: https://registry.walletconnect.org/wallets


[cw]: /img/connecting-wallet.png
[qr]: /img/qr-code.png
[wp]: /img/wallet-page.png
[li]: /img/link-id.png
[lm]: /img/link-id-modal.png
[ld]: /img/loading-id.png
[ls]: /img/linked-id-success.png
