---
id: faq
title: FAQ
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
implications and approach to this design [here][ov].

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
Radicle Link — the protocol that powers the Radicle network is built on Git. All
Radicle data is stored in a single Git monorepo on your machine that is read
from and written to via the Upstream client. To read more
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

## When will CLI tooling be available?
We're working on it! 🤞 We will introduce CLI tooling alongside of Upstream
development.

## Can I backup a GitHub project on Radicle?
Yes! Publishing a codebase to Radicle is a great way to create a peer-to-peer
backup of your repositories. Maintaining a mirror of a project on Radicle is as
simple as pushing to another remote. Read more about [creating
projects][cp].

## Can I replace GitHub with Radicle?
If you want! While our Beta release will have only the basic collaboration features
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
any peers they are interested in — locally on their machine in a [Git monorepo][hw].
It also means that whenever your data is published to the network, it can be
replicated and stored on another peer's machine.

## Can I create private repositories on Radicle?
No, not yet - but in the future! Private projects with end-to-end encryption are
on our roadmap. In the meantime, be sure to note that everything you put on
Radicle will be publicly available.

## What is a remote?
A remote refers to a version of your project that is maintained by another
person. To collaborate with others on Radicle, you have to add and follow other
their remotes to be able to fetch changes from them. You can manage remotes
on your project page (See [Adding Remotes][ar]). For more on how remote
repositories work, see the [Git documentation][mr].

## What's a Radicle ID?
A Radicle ID is a unique way of identifying projects in the Radicle Network.
You can find it on a project's page or on the [seed node dashboard][sn]. You
use a project's Radicle ID to find it via Radicle Upstream.

## What's a Device ID?
A Device ID is the encoding of a peer's public key that is tied to a specific device.
People will be able to manage multiple Device IDs in the future, but for now you can
only have one Device ID per identity.

To be [added as a remote][ar] to a project, you need to share your Device ID.

## What does following mean in Radicle?
Following a project replicates its data to your machine by tracking it. This
allows the follower to subscribe to updates from the project's maintainer(s) or
other remotes. It is also a way to signal interest in the project or peer by
further replicating the data across their network, making it available to other
people on the network. See [Tracking][tr].

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

## Can I change my passphrase?
Not yet — so make sure to keep it in a safe place!

## Why do I have to enter my passphrase everytime?
Interactions through Git and the remote helper are ad-hoc and don't have the
benefit of a long-running daemon - i.e. Upstream client. That means for now the
passphrase has to be provided every time you interact with Radicle outside of
a client.

## I can't find a project on the network or see a peer's changes. What should I do?
First, check to see if you are connected to the seed node by hovering over the
Connection Status icon in your toolbar. If you are connected to one or more
peer, navigate to the seed node dashboard (e.g. sprout.radicle.xyz) to see if
you can find your Device ID.

![Seed Dashboard Search][sd]

If you are connected to the seed node and can find yourself on the dashboard,
try restarting the app. On restart, if there is still outstanding data to be
found, try refreshing the app. Wait one minute before restarting the app again.

If you are still running into problems, please submit a request in our [#support
channel][sc].

## Can I delete a project?
Currently, this feature is not supported but it is on the roadmap and will be
included in an upcoming release. Until then, you can only remove your
project from your local machine, thus limiting the number of peers who can find
and replicate your project. You can not delete a project from another peer's
local machine, as they retain control over their local data.

## Why am I only connected to one peer?
By default, the Upstream client is conecting to a seed node operated by Radicle.
While we support [epidemic broadcast][eb] to find and connect to other peers, we
don't have support for [hole punching][hp] just yet, which will prevent a stable conenction
between two computers.

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

## Can I run Radicle as a daemon?
While technically possible, we haven't bundled it yet in a convenient package
for anyone to run in the background. We are working hard to change that so we can
help people operate Radicle nodes in many different ways. Should you be keen to
have it as a daemon right now, check out how the [seed][si] is implemented, and
try to run your own.

## Is it possible to launch Upstream via links on the web?
Yes, as of Upstream v0.2.1 we support opening links to Radicle projects in
Upstream. Clicking the following link will launch Upstream and navigate to the
specified project:

  radicle://link/v0/rad:git:hnrkmzko1nps1pjogxadcmqipfxpeqn6xbeto

The custom protocol is registered automatically when installing Upstream on
macOS.

On Linux you'll have to either manually register the custom protocol or
integrate Upstream into your system with `AppImageLauncher` or `appimaged` as
described [here][ai].

Assuming you have downloaded the latest Upstream in
`$HOME/Downloads/radicle-upstream-0.2.1.AppImage`, you can register the
protocol by running the following commands:

```sh
chmod +x $HOME/Downloads/radicle-upstream-0.2.1.AppImage

cat > $HOME/.local/share/applications/radicle-upstream.desktop <<EOF
[Desktop Entry]
Exec=$HOME/Downloads/radicle-upstream-0.2.1.AppImage %U
Terminal=false
Type=Application
MimeType=x-scheme-handler/radicle;
EOF

update-desktop-database ~/.local/share/applications
```

**Note**: It's advisable to move the Upstream binary to a stable location
before registering the custom protocol, otherwise the custom protocol
handling will break if the binary is renamed or moved to another location.

On Linux you can verify whether the custom protocol is working like this:
```sh
xdg-open "radicle://link/v0/rad:git:hnrkmzko1nps1pjogxadcmqipfxpeqn6xbeto"
```

Read more about the custom Radicle client URI scheme [here][cu].


[ai]: https://docs.appimage.org/user-guide/run-appimages.html#integrating-appimages-into-the-desktop
[ar]: using-radicle/tracking-and-viewing.md
[cp]: using-radicle/creating-projects.md
[cu]: https://github.com/radicle-dev/radicle-decisions/blob/master/proposals/0004.md
[ov]: using-radicle/overview.md
[gs]: getting-started.md
[hw]: how-it-works.md/#git-implementation
[tr]: how-it-works.md/#tracking
[cc]: get-involved/community.md

[sd]: /img/seed-dashboard-search.png

[eb]: https://en.wikipedia.org/wiki/Gossip_protocol
[gh]: https://github.com/radicle-dev/radicle-upstream/issues
[hp]: https://en.wikipedia.org/wiki/Hole_punching_(networking)
[ls]: https://radicle.community/t/radicle-licensing-model/282/8
[mc]: https://matrix.to/#/#general:radicle.community
[mr]: https://git-scm.com/book/en/v2/Git-Basics-Working-with-Remotes
[sc]: https://matrix.to/#/#support:radicle.community
[si]: https://github.com/radicle-dev/radicle-bins/tree/master/seed
[sm]: https://radicle.community/
[sn]: http://sprout.radicle.xyz/
