---
id: governance-overview
title: Overview
---

import Grid, { Button } from '@site/src/components/Grid'
import ProposalProcess from '/static/img/updated-ecosystem-model.png';
import ProposalCycle from '/static/img/updated-ecosystem-model.png';


Welcome to Radworks' version-controlled governance documentation! These docs consist of carefully curated information
and resources that lay out the Radworks token voting governance process and how to participate in it.

The Radworks’ treasury is managed by an on-chain governance mechanism ([Compound-Governor](https://wiki.tally.xyz/docs/compound-governor)) via the project’s native governance token - $RAD. Holders of $RAD can participate in decision-making by voting on and creating Radworks Governance Proposals (RGPs). Voting power is derived directly from the number of [tokens delegated](https://github.com/radicle-foundation/radworks-governance/blob/main/manual.md#delegating) to an address (1 token = 1 vote). 

## Participate in Governance
<Grid>
  <Button
    href="https://community.radworks.org/c/governance/proposals/18"
    title="Review proposals"
    cta="Review proposals on the forum & leave feedback for proposal authors"
  >
  </Button>
  <Button
    href="https://www.tally.xyz/gov/radworks/delegates"
    title="Delegate voting power"
    cta="Find delegates & delegate voting power"
  >
  </Button>
 <Button
    href="https://snapshot.org/#/gov.radworks.eth"
    title="Vote offchain"
    cta="View & vote on active Snapshot polls"
  >
  </Button>
  <Button
    href="https://www.tally.xyz/gov/radworks"
    title="Vote onchain"
    cta="View & vote on active onchain submissions"
  >
  </Button>
</Grid>


## What is governance used for?
### Onchain Governance

Onchain governance is used to make decisions on proposals that include executable code. This includes:
* Treasury distributions of RAD, ETH, and USDC
* Upgrades to the onchain governance system (e.g. quorum)
* Changes to parameters of Treasury-governed contracts (e.g. Drips)

### Offchain Governance

Offchain governance is used to gain community consensus on decisions. Currently, consensus is needed for:
*  Confirming a proposal with executable code is ready to be submitted for onchain voting (also known as [Formal Review](https://github.com/radicle-foundation/radworks-governance/blob/main/manual.md#formal-review))
*  Proposals that do not include executable code, but still require consensus from the community (e.g. updates to the governance process)

## Proposal Process
Radworks governance process has three phases: Request for Comments, Formal Review, and Submission. [Learn more about different proposal types and the RGP process](https://github.com/better-internet/radworks-governance/blob/main/manual.md#proposal-types).

!["Diagram detailing the proposal phases of Radworks governance process"](/img/governance_phases.png)

## Proposal Cycles
Radworks proposals are reviewed in monthly cycles using the following schedule. [Learn more about monthly proposal cycles](https://github.com/better-internet/radworks-governance/blob/main/manual.md#proposal-cycles).

!["Diagram detailing the schedule of Radworks monthly proposal cycles"](/img/monthly_proposal-cycles.png)


## Proposal Types
All proposals are referred to as RAD Governance Proposals (RGPs). There are two types of RGPs: **Executable** & **Social**.

| Type | Description | Process |
| --- | --- | --- |
| Executable | On-chain actions such as treasury distributions, updates to contract parameters, and upgrades to governance system. | Request for Comments → Formal Review → Submission |
| Social | Off-chain changes that can not be enforced by governance on-chain but should have community approval (e.g. updates to the governance process) | Request for Comments → Formal Review  |


## Voting Thresholds

A RGP is approved if it satisfies the following minimum vote thresholds:

* **Quorum:** The minimum number of RAD votes required to be cast in support of a proposal in order for a quorum to be reached and for a vote to succeed. Quorum is currently measured as a % of the total $RAD supply. The required quorum to pass a proposal is **4% (4M $RAD) of total supply (100M $RAD)**

* **Approval Threshold:** If quorum is met, the proposal passes if a majority of the votes are “in-favor”.

Proposals in the Formal Review and Submission phases are required to meet quorum requirements.

## Delegation
To participate in off-chain and on-chain voting, $RAD must be delegated to the address that will be used to vote. Delegation can be executed via various governance management platforms (e.g. Tally). [Learn more](https://github.com/better-internet/radworks-governance/blob/main/manual.md#delegating
) about how to delegate $RAD and begin voting.

## Relevant Contracts

* [Radworks Governance Contracts](https://github.com/radicle-foundation/radworks-governance/blob/main/manual.md#formal-review)
* Governance: [0x690e775361AD66D1c4A25d89da9fCd639F5198eD](https://etherscan.io/address/0x690e775361AD66D1c4A25d89da9fCd639F5198eD)
* Timelock: [0x8dA8f82d2BbDd896822de723F55D6EdF416130ba](https://etherscan.io/address/0x8dA8f82d2BbDd896822de723F55D6EdF416130ba)
* Genesis: [0x6838f63899728816f602B3e9bF73952e2bD6dc35](https://etherscan.io/address/0x6838f63899728816f602B3e9bF73952e2bD6dc35)
