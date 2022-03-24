---
id: track-review-merge
title: Track, review, and merge contributions
---

As a project's maintainer, which typically means you're also a [delegate](understanding-radicle/glossary.md#delegate),
you can review and merge changes from any collaborator back into the canonical branch (typically `main` or `master`) of
the project.

This is where Radicle's current workflow for collaboration diverges most from centralized forges like GitHub or GitLab.
Currently, Radicle doesn't have any built-in pull request/patch support, which means the exact process you use for
reviewing and discussing changes with collaborators is up to you.

## Track collaborations

To review and merge any code, you first need to find  of your project on a Radicle seed node. `rad track
--remote` queries the default seed node and returns a list of collaborators' Peer IDs and their branches.

```
$ rad track --remote
radicle-example rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy (willow.radicle.garden)
├── hynz3cahu1pnmah6a1m59en8c6bujbc5go5inst8chmcr8ahn6byw4 bob
│   └── main 9733b3735dd4424666a384e6a397a11c69bac818 Add context to README
│
└── hyyc74e14b4pddma6jko8385cnjdj154aorp71456gqb4o5uqwkwpk joelhans delegate you
    └── main 660dfc80a275b483fc16394ec301686a7647c951 Add gitignore
```

> You can also use `rad track --seed <seed-url>` to query other seed nodes for possible collaborations from other
> Radicle users.

In the example above, you can see the canonical `main` branch, managed by the project's delegate, and a second `main`
branch from a collaborator.

Now use `rad track <peer-id>` to track the remote peer from your working copy.

```
$ rad track hynz3cahu1pnmah6a1m59en8c6bujbc5go5inst8chmcr8ahn6byw4
🌱 Establishing tracking relationship for rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy...
ok Tracking relationship hynz3cahu1pnmah6a1m59en8c6bujbc5go5inst8chmcr8ahn6byw4 established
ok Syncing peer refs from willow.radicle.garden...
ok Remote-tracking branch peer/bob/main created for hynz3ca…hn6byw4
```

This sets up a remote in your working copy and a tracking branch named after the peer and project's default branch — for
example, `peer/bob/main`, which you can see in the last line of the above output.

## Review and merge changes

Currently, the best way to view the collaborator's changes is to use `git diff` to compare the remote branch against
your canonical branch.

```
$ git diff master..peer/bob/main
```

If you're happy with the changes, merge them into your local copy and push everything to your project.

```
$ git merge peer/bob/main
$ rad push
```
