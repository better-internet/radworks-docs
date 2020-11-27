---
id: pushing-changes
title: Pushing changes
---

To push code to Radicle, you first need to make sure your shell is configured
correctly by following the instructions in the [Getting Started][gs] section to
add the Radicle remote helper.

After the Radicle remote helper is configured, navigate to the working copy of
your project. You can see the branches of your project with `git branch -a` or
the remotes with `git remote show`. 

After changes are made and commited to a branch, they can be pushed to the
Radicle remote via:

`git push rad <branch name>`

To set up branch tracking, run:

`git push -u rad <branch_name>` or `git push --set-upstream rad <branch_name>`

as you would with any other Git code hosting platform.

The `rad` remote points to your monorepo where all Radicle data is stored.
Pushing to the `rad` remote publishes the changes to the network so they can be
found and fetched by connected peers. 

For help using Git, please refer to the [relevant documentation][rd].

<blockquote>
It's important to note that once changes are pushed to the Radicle remote, they
are published to the Radicle network and will be publicly available to anybody
you are connected with. While you can push to the Radicle remote while offline,
updates are only published to the network if the Upstream client is running.
</blockquote>

[br]: understanding-radicle/glossary.md/#branch
[ch]: understanding-radicle/glossary.md/#checkout
[fo]: understanding-radicle/how-it-works.md/#following
[go]: understanding-radicle/how-it-works.md/#gossip
[gs]: getting-started.md
[pn]: understanding-radicle/glossary.md/#project-name
[ri]: understanding-radicle/glossary.md/#project-id
[re]: understanding-radicle/glossary.md/#remote

[id]: /img/radicle-id-seed-node.png
[ps]: /img/peer-switcher.png
[sb]: /img/search-bar.png

[rd]: https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup
