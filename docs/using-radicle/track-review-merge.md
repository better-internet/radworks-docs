---
id: track-review-merge
title: Review and merge patches
---

As a project's maintainer, which typically means you're also a [delegate](understanding-radicle/glossary.md#delegate),
you can review and merge changes from any collaborator back into the canonical branch (typically `main` or `master`) of
the project.

This is where Radicle's current workflow for collaboration diverges most from centralized forges like GitHub or GitLab.
Currently, Radicle doesn't have any built-in pull request/patch support, which means the exact process you use for
reviewing and discussing changes with collaborators is up to you.

## Track a patch

To review and merge any code, you first need to find any patches to your project that have been published to a Radicle
seed node. `rad track --remote` queries the project's default seed node and returns a list of collaborators' Peer IDs
and their branches.

> You can also use `rad track --seed <seed-url>` to query other seed nodes for possible patches from other
> Radicle users.

```
$ rad track --remote
radicle-example rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy (willow.radicle.garden)
├── hynh7gxq3u1c7gu7wupyw99k16tz5td8n6tmwdy9s1xcfwn6zucqfy docs-tester
│   └── main 5198e4c43412ecf34ecef812dcffec4efb6eb62c Change to gitignore
│
├── hynz3cahu1pnmah6a1m59en8c6bujbc5go5inst8chmcr8ahn6byw4 joelhans
│   └── main 9733b3735dd4424666a384e6a397a11c69bac818 Add context to README
│
└── hyyc74e14b4pddma6jko8385cnjdj154aorp71456gqb4o5uqwkwpk joelhans delegate you
    └── main e2cc2f98df61de3503edfcf6904993add918cda6 Add example folder and files
```

In the example above, you can see the canonical `main` branch, managed by the project's delegate, in addition to two
additional source trees from collaborators.

Let's say you want to track the patch from the `docs-tester` user. Use `rad track <peer-id>` to track the remote peer
from your working copy.

```
$ rad track hynh7gxq3u1c7gu7wupyw99k16tz5td8n6tmwdy9s1xcfwn6zucqfy
🌱 Establishing tracking relationship for rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy...
ok Tracking relationship hynh7gxq3u1c7gu7wupyw99k16tz5td8n6tmwdy9s1xcfwn6zucqfy established
ok Syncing peer refs from willow.radicle.garden...
ok Remote-tracking branch peer/docs-tester/main created for hynh7gx…6zucqfy
```

This sets up a remote in your working copy and a tracking branch named after the peer and project's default branch — for
example, `peer/docs-tester/main`, which you can see in the last line of the above output.

<!-- TODO: Figure this out  -->
<!-- ### Update existing tracked branches -->
<!-- If you've previously set up a tracking branch and that collaborator has since added more commits to it, you need to update the -->

## Review a patch

There is currently no pull request or patch functionality built into Radicle, which means you can either use `git`
directly or view a patch using the web interface.

### On your local system with `git`

Compare the tracking branch against the local state of your canonical branch with `git diff`.

```
$ git diff main..peer/docs-tester/main
```

### On the web interface

Another option is to use the [web interface](https://app.radicle.network). Navigate to your project's page and select
which peer's branch you want to review.

![Selecting a tree to view](/img/web-interface_trees.png)

Click on the **X commit(s)** button to show the [commit history](view-share.md#view-the-commit-history), and then click
on an individual commit to see a diff of the additions and deletions.

![Reviewing a patch in the web interface](/img/web-interface_review.png)

## Merge a patch

If you're happy with the changes, merge them into your local copy and push everything to your project.

```
$ git merge peer/docs-tester/main
$ rad push
```
