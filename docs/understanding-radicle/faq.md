---
id: faq
title: FAQ
---

import Highlight from '@site/src/components/Highlight'

## How do I get started with Radicle?

<Highlight>

  See the **[Radicle website](https://radicle.xyz/get-started.html)** for the most up to date installation instructions
  for macOS and Linux, including the process for creating your Radicle identity.

</Highlight>

Our [get started guide](getting-started.md) has a little more information about using `rad`, along with some helpful
links.

## What is 'sovereign code infrastructure'?

TK

## What is the state of the Radicle ecosystem?

TK

As far as a roadmap goes, we're currently in **Phase 0** of achieving our vision of sovereign code infrastructure.

- **Phase 0** (active): Users can self-host or publish repositories to a network of hosted seed nodes. The network is
  still in the process of decentralizing and is prone to change.
- **Phase 1**: With gossip activated, user-deployed seed nodes can find each other and share their data without relying
  on an intermediary. The network is resilient and censorship-resistant.
- **Phase 2**: Any user can host their content locally and have it discovered by the Radicle network. At this stage, the
  network has become fully self-sovereign.

## How is Radicle funded and licensed?

TK

Radicle is completely free and open-source, licensed under version 3 of the GNU General Public License (GPLv3) with the
Radicle Linking Exception. You can read more about [how this license was
chosen](https://radicle.community/t/radicle-licensing-model/282/8).

## Why is Radicle a hosted service?

TK

## How is collaborating on Radicle different than GitHub?

In contrast to centralized code collaboration platforms, Radicle is designed for
bazaar-style collaboration. On the Radicle network, content is distributed
peer-to-peer via a process called gossip. This means that peers are in control
of their social interactions as they self-host their own content and the content
of any peers they are interested in. This also means that within projects, there
isn't a single `master` branch that contributors merge into. Each peer maintains
a view of a project with their changesets and branches. These views are gossiped
around to other peers that are interested in those changes.

## How is Radicle more secure than centralized platforms?

The Radicle network is peer-to-peer and built on public key cryptography. To
start, this means that there is no need to rely on third parties to access or
use the Radicle network. It is harder to take down because there is no central
point of failure, and is resistant to corporate and state capture and censorship. In
addition, all data on the Radicle network is cryptographically signed & verified
as it's gossiped between peers. While centralized platforms rely on user
interface components and key oracles to signal trust from user to user, Radicle
has designed trust into the core of the protocol.

## How does Radicle interact with Git?

Radicle's CLI tooling (`rad`) uses a push-pull transport mechanism that's built on top of Git. When you run `rad init`
in a Git repository for the first time, it adds a `rad` remote that points to the project's local state, which you then
push to a seed node when you run `rad push`.

`rad` also creates and manages your identity &mdash; a unique Peer ID and personal URN &mdash; and cryptographically
secures them with an Ed25519 keypair to identify you across the Radicle network.

## How will issues and patches (PRs) work?
Social collaboration features (i.e. bug reports, patches, discussions etc...)
are all on the Radicle roadmap. They will work very similarly to the experiences
we have now, but will be local-first and cryptographically signed. This means
issues, PRs, and discussions will be more secure, available offline, and stored
on your machine as git objects — not on a central server!

## Can I back up or mirror a GitHub project on Radicle?

Yes! Publishing a codebase to Radicle is a great way to create a peer-to-peer backup of your repositories. Maintaining a
mirror of a project on Radicle is as simple as pushing to another remote. 

To create a mirror, follow the [getting started](getting-started.md) guide using your existing repository, which
initializes your project, and push the code to the Radicle network with `rad push`. To synchronize state between your
GitHub and Radicle versions, run `rad push` on the `main`/`master` branch after every change.

## Can I replace GitHub with Radicle?
If you want! While our Beta release will have only the basic collaboration features
(i.e. code hosting, sharing, checking out, and pushing/pulling), we plan to
introduce features that could support a similar day-to-day code collaboration
experience to GitHub. They will include bug reporting, patches, code review, and
discussions.

That being said, while we believe that reducing one's reliance on
centrally-hosted platforms is generally a good idea, we also believe that code
collaboration solutions serve different purposes for different people. Radicle *will* support social collaboration through one or more projects, but our priority will be
delivering secure, local-first, peer-to-peer code collaboration — not an exact
GitHub replica.

## Where is my data stored?

Radicle currently uses seed nodes and a **push-pull** protocol that uses `git push` to send changes to seed nodes and
`git pull` to fetch updates. With this method, your data is only stored on the seed node you chose to sync your project
with when you [ran `rad init`](getting-started.md#create-your-radicle-project-from-a-git-directory), and with anyone who
uses `rad clone` to create a copy of the project.

We're currently working 

## Can I create private repositories on Radicle?

No, not yet &mdash; but private projects with end-to-end encryption are on our roadmap! In the meantime, please note
that everything you put on Radicle will be publicly available.

## What's a remote, peer ID, personal URN, project URN, and so on?

Please see our [glossary](glossary.md) for definitions of various terms in a Radicle context.

## Can I use Radicle with multiple devices?

Yes and no.

There is no explicit support, but if you got started with the Radicle network using the CLI tooling, you can, in theory,
use the same keyfile (`librad.key`) to authenticate the same Peer ID on multiple devices, which would allow you to
push/pull code to the same project without having to manage multiple identities.

## How do I make sure nobody else has my display name?

You can't.... yet.

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

Check out our [troubleshooting](understanding-radicle/troubleshooting.md) doc. If you don't find an answer to your
question there, join our [#support channel on Discord](https://discord.gg/j2HZCBDUvF) and ask away.

## How do I join your Matrix channel?

Head over to matrix.radicle.community and create an account. Our Matrix rooms are synced with our #general and #support
channels on Discord, so you'll always see the same information.
