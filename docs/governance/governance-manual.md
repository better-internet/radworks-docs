---
title: Governance Manual
---

import Grid, { Button } from '@site/src/components/Grid'

<Grid>
  <Button
    style={{gridColumn: '1 / span 12'}}
    href="https://github.com/radicle-dev/radicle-docs/blob/master/docs/governance/manual.md"
    title="Read the Governance Manual on GitHub"
  >
  </Button>
</Grid>

The Governance Manual is a living document that outlines Radicle's governance processes. It is version-controlled and
maintained by the Governance team. The latest version of the Governance Manual can always be found here. To propose
changes to the Manual, please see the documentation's
[README.md](https://github.com/radicle-dev/radicle-docs#how-to-contribute).

---

The RadicleDAO’s Treasury is controlled by a tokenized governance mechanism
([Compound-Governor](https://wiki.tally.xyz/docs/compound-governor)) via the project’s native governance token ($RAD).
With token governance, holders of $RAD holders can participate in the decision-making around the treasury by voting and
creating on-chain governance proposals composed of executable actions. Currently, these actions include: 

- Treasury distributions of RAD, ETH, and USDC
- Upgrades to the on-chain governance system
- Changes to parameters of Treasury-governed contracts (e.g. Drips)

Proposals can be proposed on-chain by anyone who has an amount of $RAD greater than or equal to 1% of total total supply
delegated to their address. Once proposed, $RAD-holding participants can vote for/against the proposal on-chain. Voting
must meet a participation threshold of 4% of total supply to pass. The proposal only passes if the participation
threshold is met and votes are a majority “in-favor”. Once passed, the actions outlined in the proposal are executed. To
learn more about token governance and how the RadicleDAO’s on-chain governance system works, [see
here](https://wiki.tally.xyz/docs/compound-governor).
