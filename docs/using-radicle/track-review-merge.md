---
id: track-review-merge
title: Track, review, and merge patches
---

As a project's [delegate](understanding-radicle/glossary.md#delegate), you can review and merge patches from any
collaborator back into the canonical branch (typically `main` or `master`) of the project.

## Track a remote user

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

In the example above, you can see the canonical `main` branch, managed by the project's single delegate, in addition to
two additional source trees from collaborators.

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

## Review on your local system with `git`

Compare the tracking branch against the local state of your canonical branch with `git diff`.

```bash
git diff main..peer/docs-tester/main
```

## Collaborate on changes

There currently is no code review or commenting features built into Radicle. All this communication happens outside of
Radicle tooling, and the processes are entirely up to your discretion. 

As you work through the review process with your collaborator, they will need to run `rad push` on occasion to make sure
you're looking at the same state of the code.

## Merge the patch

Once you're happy with the changes, merge them into your local copy and push everything to your project, updating the
primary branch.

```bash
git merge peer/docs-tester/main
rad push
```
