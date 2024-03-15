---
id: governance-overview
title: Overview
---

import Grid, { Button } from '@site/src/components/Grid'

Welcome to Radworks' version-controlled governance documentation! These docs consist of carefully curated information
and resources that lay out the Radworks token voting governance process and how to participate in it.

The Radworks’ treasury is managed by an on-chain governance mechanism ([Compound-Governor](https://wiki.tally.xyz/docs/compound-governor)) via the project’s native governance token - $RAD. Holders of $RAD can participate in decision-making by voting on and creating Radworks Governance Proposals (RGPs). Voting power is derived directly from the number of tokens delegated to an address (1 token = 1 vote). 

**Onchain Governance**
Onchain governance is used to manage proposals that include executable code. Currently, this includes:
* Treasury distributions of RAD, ETH, and USDC
* Upgrades to the on-chain governance system (e.g. quorum)
* Changes to parameters of Treasury-governed contracts (e.g. Drips)

**Offchain Governance** 
Offchain governance is used to gain community consensus. Currently, consensus is needed for:
*  Confirming a proposal with executable code is ready to be voted on onchain (also known as [Formal Review](https://github.com/radicle-foundation/radworks-governance/blob/main/manual.md#formal-review))
*  Proposals that do not include executable code, but still require consensus from the community 

<Grid>
  <Button
    href="https://github.com/radicle-foundation/radworks-governance/blob/main/manual.md#proposal-process"
    title="Create a proposal"
    cta="Learn more about the RGP process"
  >
  </Button>
  <Button
    href="https://github.com/radicle-foundation/radworks-governance/blob/main/manual.md#voting"
    title="Vote on proposals"
    cta="Learn how to vote on-chain and off-chain"
  >
  </Button>
  <Button
    href="https://github.com/radicle-dev/radicle-governance/blob/main/manual.md#delegating"
    title="Delegate votes"
    cta="Learn how to delegate"
  >
  </Button>
</Grid>

### Relevant Contracts

* [Radworks Governance Contracts](https://github.com/radicle-foundation/radworks-governance/blob/main/manual.md#formal-review)
* Governance: [0x690e775361AD66D1c4A25d89da9fCd639F5198eD](https://etherscan.io/address/0x690e775361AD66D1c4A25d89da9fCd639F5198eD)
* Timelock: [0x8dA8f82d2BbDd896822de723F55D6EdF416130ba](https://etherscan.io/address/0x8dA8f82d2BbDd896822de723F55D6EdF416130ba)
* Genesis: [0x6838f63899728816f602B3e9bF73952e2bD6dc35](https://etherscan.io/address/0x6838f63899728816f602B3e9bF73952e2bD6dc35)
