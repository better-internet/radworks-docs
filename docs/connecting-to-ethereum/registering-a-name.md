---
id: registering-a-name
title: Registering a name
---

Today's hosted platforms benefit from the network effects that come with centralized server-side data hosting. Peer-to-peer systems lack this global namespace and the discoverability that comes with it. In Radicle, you can register a unique ENS name, under the `radicle.eth` domain (e.g. `cloudhead.radicle.eth`) for your profile or org. This will be a name that other users can use to recognize you not only within the Radicle network, but also the global Ethereum network. These names are interoperable and self-sovereign usernames that resolve to an Ethereum address.

## How does it work?

The Radicle Registrar is built on the Ethereum Name Service (ENS). ENS is a distributed, open, and extensible naming system based on the Ethereum blockchain. It's job is to map human-readable names like ‘alice.eth’ to machine-readable identifiers such as Ethereum addresses, other cryptocurrency addresses, content hashes, and metadata. ENS also supports ‘reverse resolution’, making it possible to associate metadata such as canonical names or interface descriptions with Ethereum addresses. 

[Read more about ENS][ens].

## Claiming a name

To register a `radicle.eth` name, navigate to the Radicle web client at [app.radicle.network][app]. Be sure to **Connect your wallet** in the top-right corner.

> While Radicle Upstream is integrated with WalletConnect, the Radicle web client isn't yet. You'll have to use Metamask or another browser-based wallet to connect. 

![Radicle Web Client][wc] 

Search for the name you'd like to register to see if it's available. If it is, you'll be given the option to register the name. If it is taken, you'll be able to the address that owns the name. 

![Register name][rn] 

Clicking **Begin Registration** will start the on-chain committal and registration flow to resolve the ENS name to your address. This will open your wallet and ask you to confirm the first of two transactions required for the registration. After confirming this transaction, you'll have to wait a moment before being asked to confirm the second. Once the second transaction has been successfully included, you'll receive a confirmation in the client.

![Registration Success][rs]

You can find and edit this name at any time by navigating to its specific URL at:

`https://app.radicle.network/registrations/THE_REGISTERED_NAME`

## Updating a Registration

Once you've registered a name, you can update its records to link relevant information like a website, avatar, and social handles. To update a registration click **Edit** on the name's registration page and add the information you'd like to link to the name. Updating the records will trigger another transaction in your wallet. Confirm it to update the name. 

To set this name to an org, follow the instructions in [Setting up a name][sn].

[ens]: https://ens.domains/
[app]: https://app.radicle.network/
[sn]: connecting-to-ethereum/setting-up-a-name.md

[wc]: /img/web-client.png
[rn]: /img/register-name.png
[rs]: /img/registration-success.png
