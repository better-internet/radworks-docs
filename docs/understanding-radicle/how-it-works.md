---
id: how-it-works
title: How it Works
---

Behind every repository is a version control system—the most popular of these being Git, created in 2005 by Linus Torvalds for the development of the Linux kernel. Git marked the rise of distributed version control systems as developers realized the centralized model of SVN and CVS didn't scale well with the number of contributors. In fact, Git was only created when Linus’ free Bitkeeper license was revoked after a Linux kernel contributor tried to reverse engineer its networking protocols. Git brought distributed version control to the forefront and changed the way software is developed today.

Code collaboration platforms, or "forges", started building on top of Git: they introduced search and discovery, canonicity, and social collaboration (issues & code review) to Git-based workflows, albeit not always following the same distributed model that Git was designed for.

Radicle was designed to provide this same functionality while retaining Git’s peer-to-peer nature, building on what made distributed version control so powerful in the first place.

## Git gossips well

The earliest version of Radicle adopted a generalized approach to replication—it wasn’t tailored to replicating collaboration artifacts or source code and as we discovered, was ill-suited to the demands of real-world code collaboration.

On the other hand, the current iteration is specifically designed for this use case. The most outstanding difference is the decision to use Git as our storage and replication layer, instead of a decentralized storage network such as IPFS. In our experimentation with decentralized storage, we realized that replicating Git repos on the storage layer didn't permit the use of packfiles, one of the key protocols that makes Git useable at scale. Essentially, this approach would make source code a second-class citizen— making it impractical to store repositories with large histories. The reason is simple: the packfile protocol is interactive, which means before data is transferred between two parties, they determine exactly what needs to be sent over the wire, and the server puts together a packfile on the fly, before sending it downstream. This incredibly efficient approach isn't compatible with simple file storage protocols such as IPFS, which operate on the premise that content is usually static, unlike active code repositories that are constantly updated.

   The dumb protocol is simple but a bit inefficient, and it can't handle writing of data from the client to the server. The smart protocol is a more common method of transferring data, but it requires a process on the remote end that is intelligent about Git—it can read local data, figure out what the client has and needs, and generate a custom packfile for it.

   — Git Internals

In order to keep Git's efficiency when it comes to data replication, while offering global decentralized repository storage, we chose to design Radicle as a peer-to-peer networking layer on top of Git's smart transfer protocol. Radicle would take care of discovering peers, offloading the actual data transfer to Git.

## radicle-link

Radicle Link is a peer-to-peer protocol with a generic distributed version control backend. It aims to be general enough to be used on top of systems such as pijul or mercurial, though it's initial implementation is focused on supporting Git.

Radicle Link extends Git with peer-to-peer network discovery. Taking inspiration from Secure Scuttlebutt, a peer-to-peer protocol for social networking, data is disseminated via a process called gossip. That is, participants in the network share and spread data they are "interested" in by keeping redundant copies locally and sharing deltas with peers. With Radicle, we replicate data across connected repositories according to a “social graph” of contributors and maintainers, enabling source code and changesets to be disseminated according to use and value: the more peers who are interested in a certain project, the more available this project is made to the network.

## How it works

Repositories are the base unit of replication in Radicle. To publish a repository to the network, it must first be initialized as a project. Projects combine source code, issues and proposed changes under a single umbrella, and carry a unique, shareable peer-to-peer identifier. The entirety of the project data and metadata, including social artefacts such as comments, are stored within the repository. To create a project, the owner of a repository defines a project identity. In the background, a project.json file is created in a predetermined disjoint branch of the repository, by convention rad/id. This file contains important metadata such as the project name, list of maintainers, as well as any related links.

The owner of the repository thus becomes the founder of the project and signs the initial version of the project metadata file (project.json) with their private key. The digest of the initial version, becomes the Project ID.

In addition to the repository, a Radicle project includes the identities of all its maintainers: peers with designated rights over the project's identity. Initially, the only maintainer is the founder. By adding other maintainers to the project metadata, additional layers of trust can be introduced around the project. Any update to the project metadata must be signed by a quorum of maintainers, providing a cryptographically secure way to manage project state & metadata, for example in the case of transferring ownership. The history of the metadata file is backed by the underlying DVCS, and is verified upon replication, ensuring it was't tampered with.

### Replication and validation

To ensure data integrity and authenticity in the peer-to-peer network, we adopt an algorithm similar to the root file update process from The Update Framework (TUF). In this process, peers can fetch and verify the project metadata before replicating the latest changesets and revisions. This is important, since it effectively allows data to be served by any peer, in a secure manner. The physical location from which project data is fetched becomes irrelevant to the user.

### Tracking and discovery

When a project is published to the network the specific repository or source tree becomes identifiable by the maintainer of this tree. This allows repositories to be addressed by a shareable URL, which is then resolved to a physical location on the network, for the purpose of replication. This URL has the following form:

`rad://<project-id>/<maintainer-id>`

Peers decide what data to replicate through the tracking of projects. Tracking a project signals interest, and means to impliestracking its maintainers, therefore replicating the data within their social graphs. In the context of a project, maintainers of a repository may choose to track the repositories of other owners (this is called a remote in Git terminology: a named reference to a remote repository). If the remote repository is found to track other remotes, the tracking repository shall also transitively track those, up to a configurable N degrees out.

### Availability

To improve data availability, participants in the network can choose to act as seeds. This is similar in concept to a pub in Secure Scuttlebutt: seeds are "always-on" nodes that automatically track discovered projects, thereby increasing the availability of these projects on the network. Since seeds may track a large number of repositories for a given project, replicating a project from a seed will greatly increase the connectedness of the tracking graph. Tracking a seed will also increase the number of paths leading back to the original upstream, ensuring that contributions can flow back up to the project maintainers even if they come from participants not within the set of tracked repositories of the maintainer.

### Offline and local-first

With the introduction of hosted platforms came new ‘enhanced’ workflows like pull requests, issue tracking, and code reviews. These workflows were unique because they were non-Git native but still tied to source code through rich user interfaces and features. As a result, they have further defined the common developer experience by making collaboration more than just code—the social interactions captured in issues, code reviews and discussions are just as important as the source code itself. However, they've also locked-in developers to the platforms that host these workflows and their artifacts. If you lost access to your GitHub account you'd have access to your source code, but wouldn't have access to any of your issues, reviews, or pull requests. Even worse, access to valuable conversations could be completely lost.

With Radicle, central servers are unnecessary for ensuring the discoverability and availability of changesets and social artifacts. In addition, by returning to a fully distributed model, it enables a more complete offline experience. Not only is the source code available offline, but so is everything else. Radicle is built to provide a convenient collaboration experience without intermediaries or vendor lock-in.

Having Git as the nexus of replication builds on its strengths and decentralized nature. Having issues, pull requests, comments, and reviews locally gives developers the tools to manage and design their workflows as they see fit. By existing as an open source protocol instead of a platform, Radicle gives developers the freedom to collaborate without reliance on third parties.

You can follow the development of Radicle Link in the #development category of our radicle.community forum or sign up to our mailing list.

