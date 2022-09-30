---
id: collaboration
title: Radicle's collaboration workflow
---

import Grid from '@site/src/components/Grid'

:::note

This is a practical overview of the current collaboration workflow using Radicle-built projects. This will change as
both the protocols and projects change and add new functionality in the future.

:::

Maintainers (known in Radicle as _delegates_) use [create](using-radicle/create.md) a project and associate it with one
or more seed nodes on the Radicle network. As they make changes, they [synchronize](using-radicle/push.md) project data
between their local state and a remote associated with the project on the Radicle network. This makes the project
[viewable](using-radicle/view-share.md) on the Radicle web app.

Contributors [clone](using-radicle/clone.md) the maintainer's remote and development branch (typically `main` or
`master`) from the Radicle network, initializing a new remote in the process. 

With the project data stored on their local system, they can make changes, commit them with Git, and push them to
_their_ remote. Remotes are Radicle's version of forks, with the contributor's now diverged from the latest commit on
the delegate's branch.

Maintainers can use the CLI to find, track, and [review/merge](using-radicle/track-review-merge.md) collaborations to
their project. Once the changes have been merged, the maintainer pushes them to their remote, thus re-establishing the most up to date state of the project.

Contributors can now synchronize the state of their remote with the maintainer's and begin to the code collaboration
cycle once more.

<Grid>
  <div>
    <a href="/using-radicle/issues">
      Create or view issues
    </a>
  </div>
  <div>
    <a href="/using-radicle/track-review-merge">
      Collaborate with patches
    </a>
  </div>
</Grid>
