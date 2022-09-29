---
id: faq
title: FAQ
---
## How do I get started?
Head over to [user hub](/) section for instructions on how to download and 
install the Radicle CLI, which helps you host code on the Radicle network and
collaborate on projects.

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

The Radicle CLI uses a push-pull transport mechanism that's built on top of Git. When you run `rad init` in a Git
repository for the first time, it adds a `rad` remote that points to the project's local state, which you then push to a
seed node when you run `rad push`.

The Radicle CLI also uses the identity portion of [Radicle Link](https://github.com/radicle-dev/radicle-link)) to create
unique Peer IDs and personal URNs, which identify your devices and your identity across devices, respectively.

## How is Radicle licensed?
Radicle is completely free and open-source. It's licensed under version 3 of the
GNU General Public License (GPLv3) with the Radicle Linking Exception. You can
read more about how this license was chosen [here][ls].

## How will issues and PRs work?
Social collaboration features (i.e. bug reports, patches, discussions etc...)
are all on the Radicle roadmap. They will work very similarly to the experiences
we have now, but will be local-first and cryptographically signed. This means
issues, PRs, and discussions will be more secure, available offline, and stored
on your machine as git objects — not on a central server!

## When will CLI tooling be available?

The [Radicle CLI](https://github.com/radicle-dev/radicle-cli/) is available now, and is currently the best way to [get
started](/) with hosting code on the Radicle network.

## Can I backup a GitHub project on Radicle?

Yes! Publishing a codebase to Radicle is a great way to create a peer-to-peer
backup of your repositories. Maintaining a mirror of a project on Radicle is as
simple as pushing to another remote. 

To create a mirror, follow the [GitHub migration guide](migrate-github-radicle.mdx) using your existing repository, which will initialize your project and push the code to the Radicle network. To synchronize state between your GitHub and Radicle versions, run `rad push` on the `main`/`master` branch after every change.

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

There are currently two methods of transporting data on the Radicle network.

The original method is through a distributed peer-to-peer via a process called
**gossip**. This means that peers self-host their own content — and the content of
any peers they are interested in — locally on their machine in a [Git monorepo][hw].
It also means that whenever your data is published to the network, it can be
replicated and stored on another peer's machine.

The newer method is a **push-pull** method that uses `git push` to send changes to seed nodes and `git pull` to fetch
updates. With this method, your data is only stored on the seed node you chose to sync your project with when you [ran
`rad init`](using-radicle/create.md), and with anyone who uses `rad clone`
to create a copy of the project.

Currently, only the push-pull method is utilized by the [CLI tooling](https://github.com/radicle-dev/radicle-cli/), but
there are plans to re-introduce the P2P gossip method, and potentially allow users to choose which method they prefer.

## Can I create private repositories on Radicle?
No, not yet - but in the future! Private projects with end-to-end encryption are
on our roadmap. In the meantime, be sure to note that everything you put on
Radicle will be publicly available.

## What's a remote?
A remote refers to a version of your project that is maintained by another
person. To collaborate with others on Radicle, you have to add and follow other
their remotes to be able to fetch changes from them. You can manage remotes
on your project page. For more on how remote
repositories work, see the [Git documentation][mr].

## What's the difference between a Peer ID, a personal URN, and a project URN?

In short, a [Peer ID](understanding-radicle/glossary.md#peer-id) identifies your device, a [personal
URN](understanding-radicle/glossary.md#personal-urn) identifies you across devices, and a [project
URN](understanding-radicle/glossary.md#project-urn) identifies individual repositories of code.

You can always find your Peer ID and personal URN with `rad self`, or create multiple identities with `rad auth --init`
and switch between them using `rad auth`.

If you're sharing a project with a collaborator, all you need is the project URN, which helps others find your project
on the Radicle [web interface](https://app.radicle.xyz/) or to clone it with `rad clone`. To find your project URN, use `rad ls` or `cd` into the repository and run `rad .`

## Can I use Radicle with multiple devices?

Yes and no. 

There is no explicit support, but if you got started with the Radicle network using the CLI tooling, you can, in theory,
use the same keyfile (`librad.key`) to authenticate the same Peer ID on multiple devices, which would allow you to
push/pull code to the same project without having to manage multiple identities.

## How do I make sure nobody else has my display name?
You can't.... yet. We will be introducing unique names soon 👍

## What happens if I forget my passphrase?

Without your passphrase, Radicle tools can't use the secret keypair that validates your Peer ID on the network, which means you've lost access to push to existing projects on the Radicle network. Make sure you keep it safe!

## Can I change my passphrase?
Not yet — so make sure to keep it in a safe place!

## Why do I have to enter my passphrase every time ?

You shouldn't need to enter your passphrase every time you interact with the Radicle network. Depending on your setup,
you may need to enter it once after login using `rad auth`.

## Can I delete a project?
Currently, this feature is not supported but it is on the roadmap and will be
included in an upcoming release. Until then, you can only remove your
project from your local machine, thus limiting the number of peers who can find
and replicate your project. You can not delete a project from another peer's
local machine, as they retain control over their local data.

## I ran into a issue, where can I report it?
Please reach out to us in our [#support channel][sc], or submit an issue on our
[GitHub repository][gh].

## I need some help, where do I reach out?
For help, join our #support channel in our Matrix chat or in the Help category
of our Discourse.

## How do I join your Matrix channel?
To join our Matrix chat, follow these steps:

* Go to https://matrix.radicle.community
* Create an account
* Verify your account by email
* Join the [community page][cc]

To join our Matrix chat with an account from another Matrix server, you can use
this [direct invite link][mc] to join #general. For more information on our
community channels see [Join our Community][cc].


[ai]: https://docs.appimage.org/user-guide/run-appimages.html#integrating-appimages-into-the-desktop
[cu]: https://github.com/radicle-dev/radicle-decisions/blob/master/proposals/0004.md
[hw]: how-it-works.md/#git-implementation
[tr]: how-it-works.md/#tracking
[cc]: get-involved/community.md

[sd]: /img/seed-dashboard-search.png

[eb]: https://en.wikipedia.org/wiki/Gossip_protocol
[hp]: https://en.wikipedia.org/wiki/Hole_punching_(networking)
[ls]: https://radicle.community/t/radicle-licensing-model/282/8
[mc]: https://matrix.to/#/#general:radicle.community
[mr]: https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes
[sc]: https://matrix.to/#/#support:radicle.community
[si]: https://github.com/radicle-dev/radicle-bins/tree/master/seed
[sm]: https://radicle.community/
