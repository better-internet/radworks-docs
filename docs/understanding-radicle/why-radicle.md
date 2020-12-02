---
id: why-radicle
title: Why Radicle?
---

## An overview of Radicle, what we're building and why.

Throughout the last decade, open source has become a standard for software
development. Sharing code freely and publicly has made it drastically cheaper
and easier to build software—and tech innovation is surging as a result.

Code hosting and collaboration platforms like GitHub and GitLab have contributed
heavily to the growth of open source by bringing it to a mainstream audience.
They defined standard vocabulary and behaviors, made git accessible to a greater
audience, empowered social coding, and created global communities of developers.
It is an undeniable fact that they have completely changed the way people write
code.

As the status quo for code collaboration, these platforms also host the largest
repositories of open source development made up of not just code, but issues,
pull requests, reviews, and comments. Even the social relationships—stars,
likes, follows—exist solely within these platforms.

These platforms, however, are owned by corporations. They are subject to
corporate law and have the right to define their terms of services. They can
implement user bans—like those currently in place against Iranian, Syrian, and
Crimean GitHub accounts in response to pressure from the U.S. government. They
are vulnerable to censorship as well as corporate and state ends, which are often
misaligned with the goals of free and open source communities.

In a world where nearly all software relies on open source code, maintaining the
resilience and health of the free and open source ecosystem is more important
than ever. That's why we believe that dependence on centrally hosted platforms
and corporations for the distribution of critical open source infrastructure is
unsustainable. Reliance on such centralized services contradicts the values of
the free and open source ecosystem and threatens its well-being.

Radicle was conceived as an alternative. Its goal is to eliminate intermediaries
and create a peer-to-peer ecosystem that is robust, functional, and secure.
There must be an intentional shift in narrative to prioritize the adoption of
decentralized alternatives for code collaboration that abide by the principles
of free and open source software.

    "At the core of the open source ethos is the idea of liberty. Open source
    is about inverting power structures and creating access and opportunities
    for everyone." — GitHub employees' letter to GitHub

### Exploring alternatives

Alternatives to GitHub exist ranging from platforms like SourceForge and GitLab,
to more established methods of collaboration such as mailing lists. Platforms
like Gitea or Gogs offer self-hosted and open source solutions for code
collaboration that have low platform risk but leave developers in isolated
environments with no access to the global network of developers. One proposed
alternative is federation. Proposals such as ForgeFed and federated GitLab are a
step in the right direction, but implementations are underdeveloped or lacking.
In addition, federation is dependent on domain names which can and are regularly
seized by governments.

Other well-established open-source projects such as the Linux kernel adopt more
bazaar and accessible development environments that aren't confined to single
platforms, such as mailing lists. These work, but they falter when held to the
usability standard that platforms like GitHub have established.

Peer-to-peer protocols like Scuttlebutt have provided us with alternative
solutions to share and host information. These protocols are able to work
offline without reliance on servers, but applications built on them lack the
ability for users to easily coordinate on a global scale. This isn't too much of
an issue for a blogging or social networking use case, but when it comes to
software collaboration, a canonical global registry is necessary to meet the
usability and discoverability standards of centralized platforms today. The
ability for anybody to contribute to any open source project no matter where
they are is necessary to cultivate a truly free and open network.

### Designing by principles

As we set out to build an alternative, we started by thinking about the values
that we recognize as integral to free and open source code collaboration. With
that said, we developed the following list of guiding principles:

1. It must prioritize user freedom In the words of the free software movement:

        […] users have the freedom to run, copy, distribute, study, change and
        improve the software. Thus, "free software" is a matter of liberty, not
        price.

2. It must be accessible and uncensorable

    Anyone should have the freedom to use the software to collaborate with
    others. No single party should be able to ban users from accessing the
    system, or content from being shared. It must be auditable and transparent.
    In addition, users should have the freedom to control their interactions and
    the content they see on an individual basis.

3. It must be user-friendly

    The software must be easy to use and not expect tremendous change in
    behavior from the user. Responsiveness and functionality must meet the
    standards established by current platforms.

4. It must be offline-first

    It must not require internet connectivity, DNS or online portals to
    function. There must be no single point of failure and it must be always
    available.

5. It must not compromise on security

    Trust in a third party or intermediary must not be required for use. Every
    artefact of the system must be attested with cryptographic signatures, and
    verified.

Let’s look at hosting platforms like GitHub or GitLab in the context of this
framework: they succeed by being user-friendly and accessible, but since they
are centrally controlled, they are censorable, and do not prioritize user
freedoms. If we look at self-hosted solutions like Gitea, Phabricator or Gogs,
they are free, uncensorable, and user-friendly, however, they are not easily
accessible due to gate-keeping and isolated environments: users across
Phabricator deployments cannot interact with each other. This is the case for
all currently available self-hosted solutions we've looked at. They also present
single points of failure and require internet connectivity for most interactions
with the system.

Hypothetically, a federated GitLab could fill all the requirements, however,
federated services cannot be offline-first and don’t offer sovereignty over
user's identity. Users are tied to specific instances and thus subject to some
of the same drawbacks as centralized services.

Bazaar-style solutions like the Linux Kernel mailing list succeed at almost all
outlined principles, but are limited in terms of user friendliness. It's hard to
compare the usability of email threads to the sophisticated workflows possible
on platforms like GitHub and GitLab.

### Radicle: A peer-to-peer stack for code collaboration 🌱

Radicle adopts the Scuttlebutt social overlay paradigm by establishing a
peer-to-peer replication layer on top of distributed version control systems,
starting with git. User accounts and login is replaced by public key
cryptography, hosted issue trackers are replaced by local peer replication, and
the idea of a single canonical upstream is replaced by a patch-based
peer-to-peer or "bazaar" model.

To complement the replication layer we introduce an opt-in registry built on Ethereum
which holds canonical project metadata. This allows projects to anchor important
information — such as project state and repository heads — with the guarantee of
global availability and immutability.

The three major themes to highlight are the decisions to focus on a peer-to-peer
code collaboration model, to build on the underlying distributed version control
system for replication, and to adopt a protocol-first approach.

### Revisiting the Bazaar

The Cathedral and the Bazaar describes two approaches to free software
development. The cathedral model, exemplified by projects like Emacs, makes
releases open and available but keeps development exclusive to so called
"individual wizards". On the other hand, the bazaar model—popularized by Linus
Torvalds and validated by the massive success of Linux, calls for completely
open development with frequent and early releases, delegation throughout
communities, and as many "eyeballs" on the code as possible. The conclusion of
the essay speaks to the success of bazaar development practices in open source
projects. In other words, given enough eyeballs, all bugs are shallow.

Peer-to-peer networking makes it far easier for developers and maintainers to
develop not just a shared, but a trusted representation of project state
grounded in actual source code and secure peer identities. With peer
replication, patches become more comprehensive because they are tied to local
issues, comments, and reviews connected to the development process. With more
comprehensive patches, bazaar-style development can retain its flexibility while
supporting more sophisticated workflows. This is why Radicle replaces the idea
of a single canonical upstream with a peer-to-peer model familiar to the open
source hackers of the 90s and early 2000s. It makes bazaar-style development
easier and better.

This potential is what caused Radicle to settle on a gossip-based "social
overlay" built on distributed version control systems that is free and always
available without the hassle of self-hosting or trusting companies with user
data.

### Git gossips well

The next design decision came as a result of our experimentation with
decentralized storage. After building the first version of Radicle on IPFS, we
ran into performance and functionality issues. A more detailed analysis can be
found [here](https://github.com/radicle-dev/radicle-alpha/issues/689), but the
major realization was that replicating git repos peer-to-peer on the storage
layer left us no choice but losing the packfile protocol, one of the things that
makes git fast. This approach would make source code a second-class
citizen—making it impractical to store repositories with
large histories.

When reflecting on the above, the almost obvious thought returned: why not use
git itself to distribute data? Storing collaboration artifacts (issues, pull
requests, comments, ...) in git has been done before and the data structures
available in git satisfy all our needs. Paired with a gossip layer, git becomes
exactly what's necessary to store, replicate and distribute code and
collaboration artifacts.

By building a peer-to-peer overlay on top of git, we find not only a performant
solution, but one that is better adapted for code collaboration. Issues,
comments and reviews become local artifacts that are cryptographically signed
and interacted with offline.

### Protocols, not platforms

The story of the big code hosting platforms coincides with the general shift of
the internet from open protocols to privately-owned platforms. Most social
coding platforms today actually leverage open protocols (git, mercurial, ssh)
but have built up closed gardens.

Radicle's approach is meant to return to the protocol-first philosophy by
focusing on building code collaboration primitives instead of user experiences,
and to reject data collection and siloing by intermediaries. This is reflected
in the decision to build on and extend git. Having it as the nexus of
replication builds on its strengths and decentralized nature. Having issues,
pull requests, comments, and reviews locally gives developers the tools to
manage and design their workflows without locking them into a new "experience".
Despite any front-end interface that will be built (😉), Radicle exists foremost
as an open protocol — not a platform.
