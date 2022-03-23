---
id: track-review-merge
title: Track, review, and merge contributions
---

As a maintainer of a project, which typically means you're also a
[delegate](understanding-radicle/glossary.md#delegate), you can review and merge changes from any collaborator back into
the canonical branch (typically `main` or `master`) of the project.

This is where Radicle's current workflow for collaboration diverges most from centralized forges like GitHub or GitLab.
Currently, Radicle doesn't have any built-in pull request/patch support, which means the exact process you use for
reviewing and discussing changes with collaborators is up to you.

## Track collaborations

To review and merge any code, you first need to find any additional versions of your project on a Radicle seed node.
`rad track --remote` queries the default seed node and returns a list of collaborators' Peer IDs and their branches.

```
$ rad track --

hybgwwnx3x94rk6afxygj35jh3fktnwirs44a1t5emdh4uxmiku18q bob
└── master 26fc90625774bc6e219bb15b51f5f9f51d26248b Update README.md
...
```

> You can also use `rad track --seed <seed-url>` to query other seed nodes for possible collaborations from other
> Radicle users.

Now use `rad track <peer-id>` to track the remote peer from your working copy.

```
$ rad track hybgwwnx3x94rk6afxygj35jh3fktnwirs44a1t5emdh4uxmiku18q
```

This sets up a remote in your working copy and a tracking branch named after the peer and project's default branch, such
as `peers/bob/master`.

## Review and merge changes

Currently, the best way to view the collaborator's changes is to use `git diff` to compare the remote branch against
your canonical branch.

```
$ git diff master..peers/bob/master
```

If you're happy with the changes, merge them into your local copy and push everything to your project.

```
$ git merge peers/bob/master
$ rad push
```
