---
id: faq
title: FAQ
---

import Grid, { Button } from '@site/src/components/Grid'

:::note

 Please note that we are not recommending any of these third party tools over the other. This document is meant to provide some basic descriptions, examples and instructions to help make onboarding to voting and proposal creation flows in governance more approachable for our community members. Each individual is **strongly encouraged** to perform their own due diligence before trusting third-party services listed below.

:::

## Wallet Basics & Safety
Most wallet providers have great documentation and safety tips on their websites. Here are a few examples:
* [Basic Safety & Security Tips for MetaMask](https://support.metamask.io/hc/en-us/articles/360015489591-Basic-Safety-and-Security-Tips-for-Metamask)
* [Rainbow: Protect your wallet](https://learn.rainbow.me/protect-your-wallet)
* [Coinbase Security Tips](https://www.coinbase.com/security/security-tips)
* [Security Tips for Hardware Wallets](https://www.ledger.com/academy/hardwarewallet/best-practices-when-using-a-hardware-wallet)

### What is the difference between a hot and hardware wallet?
#### Hot Wallet
Any web-based wallet (desktop or mobile app) is considered a hot wallet. These wallets are usually less secure than hardware wallets, but are convenient to use and access.

*Examples of hot wallets:* MetaMask, Rainbow, Coinbase, etc.

#### Hardware Wallet
Hardware wallets are devices specially designed to securely store private keys and give the user absolute ownership and control of tokens and other assets. They usually come in the form of a USB-like device.

*Examples of hardware wallets:* Ledger, Trezor, etc.

### What is the difference between a hosted vs self-hosted wallet (also known as custodial vs non-custodial wallets)?

#### Self-Hosted
These can be hardware or hot wallets. These wallets don’t require you to trust a third party, but this also means there is more responsibility on you for keeping track of your keys and information.

*Examples of self-hosted or non-custodial wallets:* MetaMask, Rainbow, any hardware wallet

#### Hosted
These wallets require more  trust in an intermediary to host your wallet than a non-custodial wallet, but many still be preferred as they don’t require as much responsibility and are usually more user friendly. As these wallets are hosted by centralized entities that are privy to regulation, there is a risk of losing access to these wallets by the company running into issues. Please note that community members have experienced issues voting with hosted wallets  in the past. Please see our troubleshooting section below if you experience issues.

*Examples of hosted or custodial wallets:* Coinbase, Binance

## Governance Tools

### What platform should I use to vote on off-chain Formal Reviews?
Snapshot is the voting platform used for gathering off-chain consensus. Check out the [Radworks Snapshot space](https://snapshot.org/#/gov.radworks.eth).

### What platform should I use to vote for on-chain proposals?
On-chain voting can take place on any on-chain governance interface. We primarily use [Boardroom](https://boardroom.io/radworks/proposals#) and [Tally](https://www.tally.xyz/gov/radworks) as they are actively curated and trusted platforms in the broader DAO ecosystem. 

See the ‘Voting Tips & Troubleshooting’ section below for more details on how to vote on these platforms.

### What platform should I use to create new on-chain proposals?
Proposal creation is also possible on Boardroom and Tally. They make it easy for anyone to confirm they are eligible to create a proposal and to create the proposal itself. See the ‘On-chain Proposal Creation Tips & Trouble-shooting’ section below for more details on how to create a proposal on these platforms.

## Voting Tips & Trouble-shooting

### What do I need to know before voting?

* No matter what wallet or voting platform you use, to participate in off-chain and on-chain voting you have to first delegate the voting power of your RAD to yourself or another address. If you do not delegate to yourself or another address before voting, the transaction will go through but the vote will show having 0 RAD voting power.

* Any delegation made on-chain will be mirrored to Snapshot for off-chain votes - i.e. any $RAD that is delegated to your wallet on-chain will be able to be able to be used to vote in off-chain Snapshot polls.

* In order to utilize delegated voting power in a vote, delegation needs to take place before the vote goes live.

* Delegation only needs to be set up once. The only time you need to redelegate is to change or remove the address you are delegating to, otherwise delegation will continue to the assigned address.

### What are some troubleshooting steps I can try if I am having  trouble connecting a wallet or voting?
* If you are having troubles on one platform (Boardroom, Tally), try using the other.
* If you are having troubles in one browser, try using another.
* If you are having troubles on desktop, try using mobile and vice versa.
* Reach out in the [#faq-support](https://discord.gg/radworks) channel on Discord for help

### How do I connect a hot wallet to vote?
#### Delegating to yourself
* Connect your wallet to an on-chain voting platform (Boardroom, Tally)
* Delegate your votes by selecting “Delegate Vote” on Tally or “Set up delegation” on Boardroom in the top right part of the screen
* Select “Delegate to myself”
* Confirm the transaction as prompted (this will have a gas fee)
* Select the proposal you would like to vote on
* Review the options available to vote - “For” or “Against” or “Abstain”
* Select the option you would like to vote for and select “Vote”
  * *Optional:* You can leave a comment on why you are voting on way or another before confirming the vote
* Confirm the transaction as prompted (this will have a gas fee)

#### Delegating to another address
* Connect your wallet to an on-chain voting platform (Boardroom, Tally)
* Delegate your votes by selecting “Delegate Vote” on Tally or “Set up delegation” on Boardroom in the top right part of the screen
* Select “Delegate to another address”
* Confirm the transaction as prompted (this will have a gas fee)
* The other address is ready to vote on proposals on- and off-chain with the newly delegated voting power

:::note
It may take a few minutes for transactions to go through and be shown on governance interfaces.
:::

### How do I connect a hardware wallet to vote?

:::note 

**Boardroom:** supported hardware wallets include:
  * *Ledger:* connect via Ledger Live.
  * *KeepKey, Trezor and others:* connect via WalletConnect

**Tally:** supported hardware wallets include:
  * *Ledger, Gridplus and Lattice* connect via WalletConnect

:::

1. Connect your hardware wallet to the platform. If you are having troubles, reach out to the platform’s support teams ([Tally](https://discord.gg/63Pj2mR8), [Boardroom](https://discord.gg/yRXgGNQn))
2. Delegate to yourself or another address and confirm the transaction as prompted
3. That address is ready to vote on proposals on- and off-chain with the newly delegated voting power

### How do I connect a multisig to vote?
#### On Tally
* Use Wallet Connect to connect the multisig wallet
* Delegate and vote as usual

#### On Boardroom
* Use Wallet Connect to connect as the multisig wallet directly
* Delegate and vote as usual
* Follow the rest of the steps to publish the proposal

## On-chain Proposal Creation Tips & Trouble-shooting

### What do I need to know before creating a proposal?
You need at least 1M $RAD (1% of total $RAD supply) delegated to your address to post an on-chain proposal. You need at least 1K $RAD delegated to your wallet to post an off-chain Snapshot poll. Make sure that delegation is set up to the correct wallet before trying to post a proposal.

*The following instructions are for on-chain proposal creation. [Follow these instructions](https://docs.snapshot.org/user-guides/proposals/create) to post an off-chain proposal on Snapshot.*

### How do I create a proposal with a hot wallet?
* Connect your wallet to an on-chain voting platform (Boardroom, Tally)
* Select “Create a new proposal” or “Add a new proposal”
* The platform will confirm if the wallet you have connected meets all of the requirements to post a proposal. If you do not meet the requirements, follow the instructions on the screen. If you do, continue to the proposal page
* Fill in the necessary information as prompted and publish the proposal

### How do I create a proposal with a hardware wallet?
:::note 

**Boardroom:** supported hardware wallets include:
  * *Ledger:* connect via Ledger Live.
  * *KeepKey, Trezor and others:* connect via WalletConnect

**Tally:** supported hardware wallets include:
  * *Ledger, Gridplus and Lattice* connect via WalletConnect

:::

* Connect your hardware wallet via the appropriate  connection option on Boardroom
* Follow the steps on your device to connect
* Select “Create a new proposal” or “Add a new proposal”
* Boardroom will confirm if the wallet you have connected meets all of the requirements to post a proposal. If you do not meet the requirements, follow the instructions on the screen. If you do, continue to the proposal page
* Fill in the necessary information as prompted and publish the proposal

### How do I create a proposal with a multisig?
#### On Tally
* Login with an [Externally Owned Account (EOA)](https://ethereum.org/en/whitepaper/#ethereum-accounts)
* Create a draft of the proposal
* Logout
* Use WalletConnect to connect as the multisig wallet
* Follow remaining steps to publish the proposal

#### On Boardroom
* Use WalletConnect to connect as the multisig wallet directly
* Follow the regular steps to publish the proposal
