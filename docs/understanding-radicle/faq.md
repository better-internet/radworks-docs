---
id: faq
title: Frequently Asked Questions
---
## How do I get started?
Head over to the [Getting Started][gs] section for instructions on how to
download and install the Radicle Upstream client.

## How is collaborating on Radicle different than GitHub?
In contrast to centralized code collaboration platforms, Radicle is designed for
bazaar-style collaboration. On the Radicle network, content is distributed
peer-to-peer via a process called gossip. This means that peers are in control
of their social interactions as they self-host their own content and the content
of any peers they are interested in. This also means that within projects, there
isn't a single `master` branch that contributors merge into. Each peer maintains
a view of a project with their changesets and branches. These views are gossiped
around to other peers that are interested in those changes. Read more about the
implications and approach to this design [here][sm].

## How is Radicle more secure than centralized platforms?
The Radicle network is peer-to-peer and built on public key cryptography. To
start, this means that there is no need to rely on third parties to access or
use the Radicle network. It is harder to take down because there is no central
point of failure, and is resistant to corporate capture and censorship. In
addition, all data on the Radicle network is cryptographically signed & verified
as it's gossiped between peers. While centralized platforms rely on user
interface components and key oracles to signal trust from user to user, Radicle
has designed trust into the core of the protocol.

## How does Radicle interact with Git?
Radicle Link — the protocol that powers the Radicle network is built on Git. It
basically uses Git as a database. This means everything is stored in a single
Git monorepo that is read and written from via the Upstream client. To read more
about Radicle's Git Implementation, see [How it Works][hw].

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

## When CLI tooling?
We're working on it! We will introduce CLI tooling alongside of Upstream
development.

## Can I backup a GitHub project on Radicle?
Yes! Publishing a codebase to Radicle is a great way to create a peer-to-peer
backup of your repositories. Maintaining a mirror of a project on Radicle is as
simple as pushing to another remote. Read more about [creating and sharing
projects][cp].

## Can I replace GitHub with Radicle?
If you want! While our Beta release will have the basic collaboration features
(i.e. code hosting, sharing, checking out, and pushing/pulling), we plan to
introduce features that could support a similar day-to-day code collaboration
experience to GitHub. They will include bug reporting, patches, code review, and
discussions. 

That being said, while we believe that reducing one's reliance on
centrally-hosted platforms is generally a good idea, we also believe that code
collaboration solutions serve different purposes for different people. Radicle
Upstream *will* support social collaboration, but it's priority will be
delivering secure, local-first, peer-to-peer code collaboration — not an exact
GitHub replica. 

## Where is my data stored? 
On the Radicle network, content is distributed peer-to-peer via a process called
gossip. This means that peers self-host their own content — and the content of
any peers they are interested in — locally on their machine. It also means that
whenever your data is published to the network, it can be replicated and stored
on another peer's machine.

## Can I create private repositories on Radicle?
No, not yet - but in the future! Private projects with end-to-end encryption are
on our roadmap. In the meantime, be sure to note that everything you put on
Radicle will be publicly available.

## What is a remote?
A 'remote' refers to a version of your project that is maintained by another
person. To collaborate with others on Radicle, you have to add and follow other
people's remotes to be able to fetch changes from them. You can manage remotes
on your project page (See [Adding Remotes][ar]). For more on how remote
repositories work, see the [Git documentation][mr]]. 

## What's a Radicle ID?
A Radicle ID is a unique way to identify projects in the Radicle
Network. You use a project's Radicle ID to find it on Radicle Upstream.

## What's a Device ID?
A Device ID is the encoding of a peer's public key tied to a specific device.
People will be able to manage multiple Device IDs in the future, but for now can
only have one Device ID per identity.

## What does `following` mean in Radicle?
Following a project replicates its data to your
machine. This allows the follower to subscribe to updates from the project's
maintainer(s) or other remotes. It is also a way to signal interest in the
project or peer by further replicating the data across their network, making it
available to other people on the network. See [Tracking][tr].

## Can I use Radicle with multiple devices?
Yes and no. While there isn't multi-device support yet, you can still create
accounts on different devices, they just won't be linked under one Upstream user
account.

## How do I make sure nobody else has my display name?
You can't.... yet. We will be introducing unique names soon 👍

(P.S. While your display name isn't unique, your emoji avatar is!)

## What happens if I forget my passphrase?
Without your passphrase, there is no way to grant the Upstream client access to
your secret key. This means that without your passphrase, there is no way to
access or publish data to the Radicle network - so make sure you keep it safe!

## I ran into a issue, where can I report it?
Please submit a support request our #support channel, or submit an issue on our
GitHub repository.

## I need some help, where do I reach out?
For help, join our #support channel in our Matrix chat or in the Help category
of our Discourse.


[ar]: /using-radicle/pushing-and-pulling-changes#adding-remotes
[cp]: /using-radicle/creating-and-sharing-projects.md
[gs]: /getting-started/getting-started.md
[hw]: /understanding-radicle
[tr]: /how-it-works.md/#tracking

[ls]: https://radicle.community/t/radicle-licensing-model/282/8
[mr]: https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes
[sm]: https://radicle.community/
