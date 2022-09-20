---
id: radicle-versus-github-gitlab
title: Radicle versus GitHub and GitLab
---

You probably already use GitHub or GitLab for code hosting and collaboration, and we recognize that to convince you to
migrate to Radicle, you want to know how the products stack up. Let's talk about how they differ in key areas.

This isn't designed to be a comprehensive feature-by-feature comparison but to provide transparency into the core
philosophies behind Radicle's continued development of sovereign code infrastructure.

## Fundamentals

### Open source

**Radicle** uses an [open-source stack](https://github.com/radicle-dev) from  top to bottom—there are no "closed"
components. Every component of the Radicle stack is auditable, modifiable, and extendable.

**GitHub** uses proprietary code.

**GitLab** uses [open-source code](https://gitlab.com/gitlab-org) across its stack.

### Authorship

**Radicle** automatically verifies all user artifacts, like comments, issues, and code reviews, through cryptographic
keys, ensuring you know who you're collaborating with even if you don't know their "true" identity.

**GitHub** and **GitLab** support signing code commits with GPG, but not issues, comments, or pull requests.

### Sovereignty

**Radicle** user and project identities, plus all metadata, is wholly owned by you. You can always migrate away from a
Radicle-sponsored seed node to a [self-hosted](https://github.com/radicle-dev/radicle-client-services) one, using all
the features in a decentralized fashion.

**GitHub** and **GitLab** own your user and project identities. You can clone/mirror your code elsewhere, but you can
never own the "namespace" that your project exists at (`your-username/your-project`) or its metadata.

### Distributed

**Radicle** uses multiple seed nodes, and allows anyone to [self-host a seed
node](https://github.com/radicle-dev/radicle-client-services), to get all of Radicle's features using their own
infrastructure. In the future, Radicle will also use a peer-to-peer protocol for distributing Git data and Radicle
identities across users and seed nodes in a cryptographically secure manner.

**GitHub** and **GitLab** are centralized services. While their infrastructure is distributed across multiple public
cloud providers and locations for resiliency, your project data and collaboration always goes through their servers.

### Local-first

**Radicle** can be used offline in perpetuity, with all your project's commit history and Radicle metadata &mdash; such
as already-pulled issues and patches &mdash; stored locally.

**GitHub** and **GitLab** require you to be online to review PRs or collaborate on code.

### Censorship-resistant

**Radicle** users can't be barred from using Radicle tools, and can't have their projects, code, or accounts deleted at
a platform level, because one can always [self-host](https://github.com/radicle-dev/radicle-client-services) an
open-source seed node. In addition, Radicle is a self-sustained and community-owned network &mdash; not a corporation
&mdash; with governance organized by a token called RAD that lives on Ethereum.

**GitHub, Inc.** has been a subsidiary of Microsoft since 2018. **GitLab Inc.** is a publicly-traded corporation. Both
companies have a verified history of removing repositories, and entire user accounts, in response to DMC takedown
notices, other legal notices, and government pressure.

## Features

### CLI

**Radicle** is CLI-first, with efficient workflows, integrations with your favorite editors, automation, and the ability
to use other multiple clients for the best experience for you.

**GitHub** offers a CLI experience for listing issues, creating PRs, checking out PRs, and more.

**GitLab** has no CLI tooling.

### Code collaboration

**Radicle** offers CLI-based code collaboration through multiple remotes (similar to forks), issues, and patches (our
version of pull requests), with support for viewing issues and patches on the web app coming soon.

**GitHub** and **GitLab** web-based management of forks/branches, pull requests, interactive code reviews, and more.

### CI/CD

**Radicle** is working on CI/CD functionality.

**GitHub** is tightly integrated with GitHub Actions, with integrations for external CI/CD platforms like Jenkins and
CircleCI.

**GitLab** is tightly integrated with GitLab CI/CD, with integrations for external CI/CD platforms.

### Private repositories

**Radicle** does not support private repositories.

**GitHub** and **GitLab** offer repositories that are private to other users, not GitHub or GitLab themselves.
