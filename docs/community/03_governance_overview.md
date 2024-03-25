---
id: governance-overview
title: Overview
---

import Grid, { Button } from '@site/src/components/Grid'

Welcome to Radworks' version-controlled governance documentation! These docs consist of carefully curated information
and resources that lay out the Radworks token voting governance process and how to participate in it.

The Radworks’ treasury is managed by an on-chain governance mechanism ([Compound-Governor](https://wiki.tally.xyz/docs/compound-governor)) via the project’s native governance token - $RAD. Holders of $RAD can participate in decision-making by voting on and creating Radworks Governance Proposals (RGPs). Voting power is derived directly from the number of [tokens delegated](https://github.com/radicle-foundation/radworks-governance/blob/main/manual.md#delegating) to an address (1 token = 1 vote). 

### Onchain Governance

Onchain governance is used to make decisions on proposals that include executable code. This includes:
* Treasury distributions of RAD, ETH, and USDC
* Upgrades to the onchain governance system (e.g. quorum)
* Changes to parameters of Treasury-governed contracts (e.g. Drips)

### Offchain Governance

Offchain governance is used to gain community consensus on decisions. Currently, consensus is needed for:
*  Confirming a proposal with executable code is ready to be submitted for onchain voting (also known as [Formal Review](https://github.com/radicle-foundation/radworks-governance/blob/main/manual.md#formal-review))
*  Proposals that do not include executable code, but still require consensus from the community (e.g. updates to the governance process)

<Grid>
   <Button
    href="https://github.com/better-internet/radworks-governance/blob/main/manual.md#proposal-types"
    title="Learn about the proposal process"
    cta="Learn more about the different proposal types and RGP process"
  >
  </Button>
  <Button
    href="https://github.com/better-internet/radworks-governance/blob/main/manual.md#proposal-cycles"
    title="Learn about proposal cycles"
    cta="Learn about the monthly proposal cycles that Radworks governance opperates within"
  >
  </Button>
  <Button
    href="https://github.com/better-internet/radworks-governance/blob/main/manual.md#delegating"
    title="Delegate voting power"
    cta="Learn how to delegate RAD"
  >
  </Button>
  <Button
    href="https://github.com/better-internet/radworks-governance/blob/main/manual.md#voting"
    title="Vote on proposals"
    cta="Learn how to vote onchain and offchain"
  >
  </Button>
</Grid>

### Voting Thresholds

An RGP is approved if it satisfies the following minimum vote thresholds:

**Quorum:** The minimum number of RAD votes required to be cast in support of a proposal in order for a quorum to be reached and for a vote to succeed. Quorum is currently measured as a % of the total $RAD supply. The required quorum to pass a proposal is **4% (4M $RAD) of total supply (100M $RAD)**

**Approval Threshold:** If quorum is met, the proposal passes if a majority of the votes are “in-favor”.

_Proposals in the Formal Review and Submission phases are required to meet quorum requirements._

### Relevant Contracts

* [Radworks Governance Contracts](https://github.com/radicle-foundation/radworks-governance/blob/main/manual.md#formal-review)
* Governance: [0x690e775361AD66D1c4A25d89da9fCd639F5198eD](https://etherscan.io/address/0x690e775361AD66D1c4A25d89da9fCd639F5198eD)
* Timelock: [0x8dA8f82d2BbDd896822de723F55D6EdF416130ba](https://etherscan.io/address/0x8dA8f82d2BbDd896822de723F55D6EdF416130ba)
* Genesis: [0x6838f63899728816f602B3e9bF73952e2bD6dc35](https://etherscan.io/address/0x6838f63899728816f602B3e9bF73952e2bD6dc35)
