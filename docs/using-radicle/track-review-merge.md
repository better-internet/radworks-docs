---
id: track-review-merge
title: Track, review, and merge contributions
---

As a maintainer of a project, which means you're almost certainly a
[delegate](understanding-radicle/glossary.md#delegate) you can review and merge changes from any contributor back into the canonical branch (typically `main` or `master`) of the project.

This is where Radicle's workflow for collaboration diverges most from what you might be familiar with from centralized
platforms like GitHub or GitLab. Currently, Radicle doesn't have any built-in pull request/patch support, which means
the exact process you use for reviewing and discussing changes with collaborators is up to you.

## Track contributions



```
$ rad track --seed willow.radicle.garden

  hybgwwnx3x94rk6afxygj35jh3fktnwirs44a1t5emdh4uxmiku18q bob
  └── master 26fc90625774bc6e219bb15b51f5f9f51d26248b Update README.md
  ...
```

In the previous section we looked at the contributor flow. Now let's look at how
contributions can be merged back into the project by playing the role of a
maintainer.

Project maintainers will most often be *delegates*, this helps as delegate
branches are fetched by default via *rad-clone(1)* and automatically tracked.

As a maintainer, the first thing you will want to do is to find out if there
is any code published on the seed node that you may be interested in. To do
this, you can use *rad-track(1)* without specifying a peer. This will query
the seed node and return the list of contributors and branches:

  $ rad track --seed willow.radicle.garden

  hybgwwnx3x94rk6afxygj35jh3fktnwirs44a1t5emdh4uxmiku18q bob
  └── master 26fc90625774bc6e219bb15b51f5f9f51d26248b Update README.md
  ...

You may omit the __--seed__ argument if it is the default seed for this project,
but you must then pass the __--remote__ flag to indicate that you'd like to
query remote data.

Here we can see the earlier contribution we made and the id of the peer that
made it. If we're interested in viewing this commit and potentially merging it,
we can start by tracking the remote peer from our working copy:

  $ rad track hybgwwnx3x94rk6afxygj35jh3fktnwirs44a1t5emdh4uxmiku18q

This will setup a remote in our working copy, as well as a tracking branch
named after the peer and project default branch, eg. *peers/bob/master*.

## Review and merge changes

To see what changes were contributed, we can diff the remote branch against our
master:

  $ git diff master..peers/bob/master

If we're happy with these changes, we can merge them and publish our new
head:

  $ git merge peers/bob/master
  $ rad push