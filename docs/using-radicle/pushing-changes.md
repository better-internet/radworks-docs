---
id: pushing-changes
title: Pushing changes
---

To push code to Radicle, you first need to make sure your shell is configured
correctly by following the instructions in the [Getting Started][gs] section to
add the Radicle remote helper.

After the Radicle remote helper is configured, pushing to Radicle is as simple
as pushing to any other remote, with the Radicle network being known as 'rad'.
After changes are added and commited in git, they can be pushed to the Radicle
remote via `git push rad`. This will push your upstream tracking branch. 

Radicle projects also support [branches][br]. Specific branches can be pushed to
Radicle with:

`git push rad <branch name>`

To set up branch tracking, run:

`git push -u rad <branch_name>` or `git push --set-upstream rad <branch_name>`

as you would with any other Git code hosting platform.

For help using Git, please refer to the [relevant documentation][rd].

It's important to note that once changes are pushed to the Radicle remote, they
are published to the Radicle network and will be publicly available to anybody
you are connected with. While you can push to the Radicle remote while offline,
updates are only published to the network if the Upstream client is running.

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
