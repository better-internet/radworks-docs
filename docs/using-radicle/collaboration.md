---
id: collaboration
title: How collaboration works
---

Radicle tries to take the best parts of code collaboration from existing platforms and decentralize it.

- Instead of user accounts and logins, Radicle uses public key cryptography to identify projects and their
  collaborators.
- Instead of issue trackers hosted and owned by a corporation, Radicle uses seed nodes. Some are sponsored by the
  Radicle Foundation, but you can always host a seed node of your own, and use all the same collaboration
  tools/processes, using [open-source code](https://github.com/radicle-dev/radicle-client-services).
- Instead of dictating your process for collaboration, Radicle lets anyone build new tools or design new workflows
  around completely open protocols.

In the end, you get recognizeable collaboration flows from centralized code hosting platforms — the "forges" like GitHub
and GitLab — while also eliminating the reliance and risk on these corporate platforms.

## How collaboration works on Radicle

> Note: This is a practical overview of the current collaboration workflow using Radicle-built projects. This will
> change as both the protocols and projects change and add new functionality in the future.

Maintainers (also known as delegates) use `rad init` and `rad push` to create a project and synchronize project data
between their local state and a canonical branch (usually `main` or `master`) on the configured seed node. This makes
the project discoverable on the Radicle [web client](https://app.radicle.network) and clone-able using `rad clone` if
collaborators know the [project URN and seed node](using-radicle/discover-project.md).

Collaborators use `rad clone` to [clone](collaborate-project.md) the canonical branch of an existing
project on the Radicle network to their local state, make changes, and use `rad push` to synchronize those changes with
a second source tree within the project.

Maintainers then use `rad track` to find collaborations to their project and view the remote peer from their working
copy. They then use `git diff` to see the proposed changes, `git merge` to merge them, and `rad push` to publish the new
state of the canonical branch.

**There is currently no pull request or patch functionality built into Radicle.** Our teams are working hard on
improvements to the underlying Radicle Link protocol and Upstream desktop application to provide richer collaboration
experiences!
