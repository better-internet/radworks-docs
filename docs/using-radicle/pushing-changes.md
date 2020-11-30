---
id: pushing-changes
title: Pushing changes
---

To push code to Radicle, you first need to add the Radicle remote helper to your
shell configuration. If you haven't done so, follow the instructions in the
[Getting Started][gs] section.

After the remote helper is configured, navigate to the working copy of
your project. You can see the branches of your project with `git branch -a` or
the remotes with `git remote show`. 

After changes are made and commited to a branch, they need to be published to
the network so they can be found and replicated by peers. To do so,
changes need to be pushed to the `rad` remote — similar to what you would do
with any other Git code hosting platform. The `rad` remote points to your
monorepo where all Radicle data is stored.

To push changes to the `rad` remote run:

`git push rad <branch name>`

To set up branch tracking, run:

`git push -u rad <branch_name>` or `git push --set-upstream rad <branch_name>`

For help using Git, please refer to the [relevant documentation][rd].

<blockquote>
It's important to note that once changes are pushed to the Radicle remote, they
are published to the network and will be publicly available to anybody
you are connected with. While you can push to the Radicle remote while offline,
updates are only published to the network if the Upstream client is running.
</blockquote>

[br]: understanding-radicle/glossary.md/#branch
[ch]: understanding-radicle/glossary.md/#checkout
[fo]: understanding-radicle/how-it-works.md/#following
[go]: understanding-radicle/how-it-works.md/#gossip
[gs]: getting-started.md/#configuring-your-system
[pn]: understanding-radicle/glossary.md/#project-name
[ri]: understanding-radicle/glossary.md/#project-id
[re]: understanding-radicle/glossary.md/#remote

[id]: /img/radicle-id-seed-node.png
[ps]: /img/peer-switcher.png
[sb]: /img/search-bar.png

[rd]: https://git-scm.com/doc
