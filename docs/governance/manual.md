# RadicleDAO Governance Process

Radicle’s Ethereum integration is maintained and upgraded through a community governance system in which RAD
token-holders and their delegates debate, propose, and vote on all changes to the network’s Ethereum-based protocols. To
propose changes, community members must create a Governance Proposal, executable code that outlines a proposed set of
simple or complex actions and is subject to on-chain voting. Anybody with 1% of RAD delegated to their address can
propose a Governance Proposal.

_NOTE: Radicle governance only relates to its [Ethereum smart
contracts](https://radicle.xyz/blog/integrating-with-ethereum.html)._

> :exclamation: The Radicle governance process is meant to be owned and developed by the Radicle community, therefore
> this process should be considered an active work in progress and is subject to change.

## TL:DR;

Radicle’s governance process is structured around an expectation of self-direction. Community “champions” (the
individual(s) who created a proposal) are expected to escalate proposals from phase to phase, with guidance from
community moderators. There are **four stages** in the governance process. To be considered an official Governance
Proposal, a proposal has to go through all four stages.

```
Temperature Check → Discussion → Formal Review → Governance Proposal
```

1. Create a **Temperature Check** to initiate an informal discussion around a proposed idea and/or change.
2. Use feedback from the Temperature Check to draft a proposal that meets the criteria set in this document and start a
   **Discussion** (t/r 5 days)
3. Submit the draft proposal for **Formal Review** by creating a [Snapshot poll](https://snapshot.org/#/gov.radicle.eth)
   (t/r 5 days)
4. "If passed, deploy a Governance Proposal via [Boardroom](https://boardroom.io/radicle/proposals) or
   [Tally](https://www.tally.xyz/gov/eip155:1:0x690e775361AD66D1c4A25d89da9fCd639F5198eD). (t/r 3 days)

Please refer to the rest of the document for details on how to navigate each phase.

## Overview of Stages

### Phase 1: Temperature Check :fire: - Discourse

The path to creating an official proposal starts with an informal discussion in the Governance category of
[radicle.community](http://radicle.community/) by calling for a Temperature Check. Inspired by
[Uniswap](https://gov.uniswap.org/), a “Temperature Check” is a way to officially create a space for discussion around a
question or proposed change with the goal of developing arguments and background for a potential proposal. The purpose
of this phase is to get feedback on ideas and create the space for productive discourse. Anybody can create a
Temperature Check to start a community discussion around an idea, question, or proposal.

To start a **Temperature Check**:

- Create a topic and label it as follows: “Temperature Check :fire: - Your Topic of Discussion Here”.
- Ask a **general, non-biased question about a potential change, improvement, or action** (i.e. Should swapping on the Balancer LBP be unpaused?).
- Add any additional information to contextualize the question for the greater community.
- Collect feedback and engage in discussion for 3-5 days.

> It’s important to remain as objective as a view as possible. Present developed arguments and the “full picture” — not
> just your opinion!

### Phase 2: Discussion :seedling: - Discourse

To move a **Temperature Check** forward, it should then be presented for formal, structured discussion in Phase 2. Phase
2 requires two things: a **formal discussion** on Discourse and a **drafted proposal** that presents a thorough analysis
for formal review by Radicle stakeholders.

#### Drafted Proposal

The goal of this phase is to take the the ideas, arguments, and feedback generated in the Temperature Check and craft an
overview of the proposal that meets the following criteria:

- **Functional description** (what is this being proposed?)
- **Purpose** (what’s the “why”?)
- **Background** (what is the reasoning behind the proposal?)
- **Link to Temperature Check**
- **Reasoning & analysis** (what is the case for the proposal? what are the pros and cons?)
- **Technical implementation** (who will be writing the code? what is the scope required?)
- **Impact** (how does this contribute to the long-term resilience, sustainability and/or growth of the Radicle network?)
- **Open questions** (what else needs to be figured out?)

:::note

Governance Proposals are executable code and must be audited. The Radicle core team will support community members with
development resources if necessary, but please do not create a draft proposal without thinking through the technical
implementation.

:::

#### Discourse Post

To escalate a **Temperature Check** to a **Discussion**:

- Create a topic and label it as follows: “Discussion :seedling: - Your Title Here”.
- Include an overview of the drafted proposal that meets the criteria outlined above and link to it’s previous
  **Temperature Check**.

Anybody can escalate a Temperature Check to a Discussion by putting together an draft proposal that meets these
criteria. If a Discussion is started without demonstrating a successful Temperature Check, then it will be flagged and
closed by community moderators.

### Phase 3: Formal Review :herb: - Discourse + Snapshot

After a proposal is thoroughly discussed, the proposal can be submitted to the community for **Formal Review**.

To do this:

- Create a Snapshot poll that includes the updated overview of the proposal and options on how to move forward. The
  options can be multiple choice (if to present multiple options for the proposal) or be binary, but must include the
  choice Make no change. **Voting for Snapshot polls should start on a Monday, at 5pm CET and end on the following
  Monday, at 5pm CET**.

  :::note

  You can’t edit a Snapshot poll after it is submitted, so please make sure you include as much information as possible.

  :::

- Create a topic and label it as follows: “Formal Review :herb: - Your Title Here”. Link the Snapshot poll in the topic. Any topic that is labeled Formal Review and does not link to a successful Temperature check and/or does not meet the criteria outlined above will be flagged and removed.
- All Radicle stakeholders are responsible for ensuring proper review of any proposal in Formal Review. This includes the core team. However, as the ‘Champion’ of the proposal, it is your responsibility to gather support for your proposal by sourcing delegates, actively responding to questions, and addressing feedback regarding the proposal.

At the end of 5 days, whichever option has the majority of votes wins. 4% of participation is required for a Snapshot to pass Formal Review. Only then should it be deployed as an official Governance Proposal. If the option “Make no change” wins, the topic should be archived by community moderators.

### Phase 4: Governance Proposal :sunflower:

Once a draft proposal has been formally reviewed and consensus has been met in the Snapshot, it can be officially
proposed as a Governance Proposal. Governance Proposals are voted for on-chain via
[gov.radicle.network](https://gov.radicle.network/#/delegates/radicle). They are executable code, not suggestions for a
team or foundation to implement. All proposed code should be audited by a professional auditor. Anybody with 1% of RAD
delegated to their address can create a Governance Proposal. At the moment, proposals can be made with our [custom
governance CLI tool](https://github.com/radicle-dev/radgov). An official governance interface for creating proposals is
in development.

All proposals are subject to a 3-day voting period, and any address with voting power can vote for or against the
proposal Resources for proposing can be found [here](https://compound.finance/docs/governance#propose).

To create a Governance Proposal:

1. Write the proposal code and deploy the proposal via [rad gov](https://github.com/radicle-dev/radgov). All proposed
   code should be audited by a professional auditor.
2. Ensure at least 1 million $RAD is delegated to your address. If you do not have enough RAD to create a proposal, find
   a delegate to either delegate to you or propose on your behalf.
3. Create a topic titled “Governance Proposal [Proposal Number] — [Your Title Here]”. Be sure to include:
   - A link to the official proposal in gov.radicle.network.
   - Links to any relevant Snapshot polls/discussion threads and link to any relevant Snapshot polls/discussion threads.
   - A full overview of the proposal, with any feedback or changes introduced during the Formal Review.

*Topics that begin with “Governance Proposal” that have not successfully passed a Temperature Check and a Formal Review
should be removed by community moderators.*

## Community Moderators

Moderators steward governance by supporting community members as they escalate proposals through the governance process. This includes:

- Refining and updating governance processes based on needs of the project.
- Ensuring proper following of the governance process.
- Removing spam & members who violate Code of Conduct.

**:seedling: Current lead community moderator: [@abbey](https://radicle.community/u/abbey)**

:::note

This process is for creating official Governance Proposals for formal voting on-chain. “Off-chain” governance for
community actions & proposals that are not related to systems that the governor does not control, can be discussed and
improved via informal governance on this forum. This can include starting formal discussions around ideas, strategies,
and suggestions for refining and improving Radicle governance.

If you’d like to start a discussion on a topic that lies outside of formal governance, please be sure to tag the topic
as metagovernance.

:::
