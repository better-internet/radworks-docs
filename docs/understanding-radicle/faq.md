---
id: faq
title: FAQ
---

import Installation from '@site/src/components/Installation'

## How do I get started with Radicle?

<Installation />

Our [user hub home](/) has a little more information about using `rad`, along with some helpful links.

## What is 'sovereign code infrastructure'?

We believe decentralized code collaboration &mdash; free, open-source, local-first, and censorship-resistant &mdash; is
only possible if we replace the tools created by centralized services, owned by corporations, with alternatives built on
open protocols and open-source code.

In Radicle, _sovereignty_ means you truly own all aspects of your user identity and project (meta)data. _Code
infrastructure_ refers to our growing network of hosted [seed nodes](glossary.md#seed-node), which is open-source
software anyone can self-host, and will eventually include our [peer-to-peer](glossary.md#peer-to-peer-p2p) (P2P)
network.

For more about the Radicle vision, see [_Towards decentralized code
collaboration_](https://radicle.mirror.xyz/Qz4Rr0R54KLPurqqswsQ2tfRtBs9MOYpw3dlY9VjyQ8).

## What is the state of the Radicle ecosystem?

Radicle is being actively developed by a handful of [core
teams](https://forest-text-046.notion.site/Core-Teams-8faf6989047a40dab77959469b456f90): Clients, Funding, Community
&amp; Governance, Growth, Marketing, and more.

The Radicle Foundation, which has previously managed and funded all aspects of Radicle core development, is currently
[transitioning into the
RadicleDAO](https://forest-text-046.notion.site/Radicle-Governance-Hub-01b9f8e757cc4426ab64d2146071f46b#ee45f5993b2e4ff2bc95bfa3536c6450).

We're currently in **Phase 0** of achieving our vision of sovereign code infrastructure.

- **Phase 0** (active): Users can self-host or publish repositories to a network of hosted seed nodes. The network is
  still in the process of decentralizing and is prone to change.
- Phase 1: With gossip activated, user-deployed seed nodes can find each other and share their data without relying on
  an intermediary. The network is resilient and censorship-resistant.
- Phase 2: Any user can host their content locally and have it discovered by the Radicle network. At this stage, the
  network has become fully self-sovereign.

## How is Radicle funded and licensed?

Radicle is funded through the Treasury of the Radicle Foundation, although we're transitioning that responsibility to
the
[RadicleDAO](https://forest-text-046.notion.site/Radicle-Governance-Hub-01b9f8e757cc4426ab64d2146071f46b#ee45f5993b2e4ff2bc95bfa3536c6450).
The [Treasury](https://etherscan.io/address/0x8da8f82d2bbdd896822de723f55d6edf416130ba#tokentxns) is a community-owned
and governed pool of capital for developing and growing the Radicle network and community. Those who own RAD tokens can
propose, vote on, and implement new initiatives, which are funded through the Treasury's combination of RAD token and
USDC.

See the [Radicle Governance
Hub](https://forest-text-046.notion.site/Radicle-Governance-Hub-01b9f8e757cc4426ab64d2146071f46b) for details on
Radicle's current governance and plans for the future of RadicleDAO.

Radicle is completely free and open-source, licensed under version 3 of the GNU General Public License (GPLv3) with the
Radicle Linking Exception. You can read more about [how this license was
chosen](https://radicle.community/t/radicle-licensing-model/282/8).

## Why is Radicle a hosted service?

Radicle currently hosts three seed nodes to provide data availability for the Radicle network. These seed nodes provide
a data availability layer for the Radicle network, storing your identity and project data, but not your private keys,
which means they can't take action, like altering your project's code or metadata, on your behalf.

If you don't want to use a seed node hosted by Radicle, you can
[self-host](https://github.com/radicle-dev/radicle-client-services) a seed node using hardware or a cloud instance you
own.

In the future, we'll deploy a new P2P network that allows data to flow directly between users rather than
only through seed nodes.

## How is Radicle more secure than centralized platforms?

The Radicle network is built on public key cryptography. All data related to identity and project data &mdash; not just
commits, but also issues, comments, and patches &mdash; is cryptographically signed and verified using an Ed25519
keypair. We designed trust into the core of our protocols, and you own all aspects of your user identity and project
(meta)data.

The protocols and tools for centralized platforms are generally closed-source or use APIs you can't access as an
individual. Because Radicle's protocols are all open-source, you're never locked into a single tool or client. Radicle
develops the [`rad` CLI tool](https://github.com/radicle-dev/radicle-cli) and [web
app](https://github.com/radicle-dev/radicle-interface), but anyone can build alternative clients or tools for accessing
Radicle-hosted projects.

Because seed nodes are [open-source](https://github.com/radicle-dev/radicle-client-services) and can be self-hosted,
there is no central point of failure, making the Radicle network resistant to corporate and state capture and
censorship.

These security measures will be enhanced when we deploy the newest iteration of our P2P network.

## How does Radicle interact with Git?

Radicle's CLI tooling (`rad`) uses a push-pull transport mechanism that's built on top of Git. When you run `rad init`
in a Git repository for the first time, it adds a `rad` remote that points to the project's local state, which you then
push to a seed node when you run `rad push`.

`rad` also creates and manages your identity &mdash; a unique Peer ID and personal URN &mdash; and cryptographically
secures them with an Ed25519 keypair to identify you across the Radicle network.

## How will issues and patches (PRs) work?

Social collaboration features &mdash; such as issues and patches &mdash; are being actively developed. They will work
very similarly to the experiences you're used to, but Radicle's are stored local-first, not on a centralized server,
making them available offline. They're also cryptographically signed for security and trust.

## How is collaborating on Radicle different than GitHub?

In contrast to centralized code collaboration platforms, Radicle is designed for bazaar-style collaboration. Within
projects, there isn't a single `master` branch that contributors merge into. Each peer maintains a view of a project
with their changesets and branches, and all those who participate in a project must collaborate on how they decide upon,
and merge into, a "canonical" version of their project. Unlike GitHub, Radicle doesn't force projects into the
["cathedral model"](https://radicle.mirror.xyz/Qz4Rr0R54KLPurqqswsQ2tfRtBs9MOYpw3dlY9VjyQ8).

## Can I back up or mirror a GitHub project on Radicle?

Yes! Publishing a codebase to Radicle is a great way to create a backup of your repositories. Maintaining a
mirror of a project on Radicle is as simple as pushing to multiple remotes.

To create a mirror, follow our [migrate from GitHub to Radicle](migrate-github-radicle.mdx) guide using your existing
repository, which helps you initialize your project and push the code to the Radicle network with `rad push`. To
synchronize your GitHub and Radicle versions, run `rad push` on your current branch after every committed change.

## Can I replace GitHub with Radicle?

Absolutely! While we're still working on in-depth collaboration features like issues and patches, you can already
[create a Radicle project](using-radicle/create.md) a Radicle project from an existing GitHub-hosted repository and
start pushing your changes with `rad push`.

While we believe reducing one's reliance on centrally-hosted platforms is generally a good idea, we also believe that
code collaboration solutions serve different purposes for different people. Radicle *will* support social collaboration
through one or more projects, but our priority will be delivering secure, local-first, P2P code collaboration &mdash;
not an exact GitHub replica.

## Where is my data stored?

Radicle currently uses seed nodes and a **push-pull** protocol that uses `git push` to send changes to seed nodes and
`git pull` to fetch updates. With this method, your data is only stored on the seed node you chose to sync your project
with when you ran `rad init`, and with anyone who uses `rad clone` to create a copy of the project.

## Can I create private repositories on Radicle?

No, not yet! In the meantime, please note that everything you put on Radicle will be publicly available.

## What's a remote, peer ID, personal URN, project URN, and so on?

Please see our [glossary](glossary.md) for definitions of various terms in a Radicle context.

## Can I use Radicle with multiple devices?

We provide no official support or guides to do so, but you can, in theory, use the same keyfile (`librad.key`) to
authenticate the same Peer ID on multiple devices. This would allow you to push/pull code to the same project without
having to manage multiple identities.

## How do I make sure nobody else has my display name?

User display names are non-unique, except when you link your your ENS name.

## What happens if I forget my passphrase?

Without your passphrase, `rad` can't unlock the keypair that validates your identity, which means you've lost access to
push to existing projects on the Radicle network.

You can't change your passphrase, so keep it in a safe place!

## Why do I have to enter my passphrase every time?

You shouldn't need to enter your passphrase every time you interact with the Radicle network. Depending on your setup,
you may need to enter it once after login using `rad auth`.

## Can I delete a project?

Currently, this feature is not supported. You can remove your project from your local machine, but you can't delete a
project from a Radicle seed node or another peer's local machine, as they retain control over their local data.

## I ran into a issue, where can I report it?

Please reach out to us in our [#support channel on Discord](https://discord.gg/j2HZCBDUvF), or submit an issue in one of
our [GitHub repositories](https://github.com/radicle-dev/).

## I need some help, where do I reach out?

Check out our [troubleshooting](troubleshooting.md) doc. If you don't find an answer to your question there, join our
[#support channel on Discord](https://discord.gg/j2HZCBDUvF) and ask away.

## How do I join your Matrix channel?

Head over to matrix.radicle.community and create an account. Our Matrix rooms are synced with our #general and #support
channels on Discord, so you'll always see the same information.
