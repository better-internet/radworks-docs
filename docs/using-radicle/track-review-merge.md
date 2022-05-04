---
id: track-review-merge
title: Track, review, and merge patches
---

As a project's [delegate](understanding-radicle/glossary.md#delegate), you can review and merge patches from any
collaborator back into the canonical branch (typically `main` or `master`) of the project.

We recommend you track patches in Upstream, although it's also possible using the CLI.

## Upstream

### Track a remote user

To view patches from a collaborator in Upstream, you need to add their Peer ID to your project. Navigate to your project
and click on the pencil icon, which opens the **Edit remotes** modal.

![Opening the remotes modal in Upstream](/img/upstream_track.png)

In the text field, enter the Peer ID of the collaborator you'd like to follow, then click **Add**. After a few seconds,
you should see their Radicle ID and Peer ID show up in the list of remotes.

![List of tracked remotes](/img/upstream_remotes.png)

:::caution

If the system is having trouble following the Peer ID you supplied, make sure that the collaborator has run `rad push`
in their project's main branch.

:::

### Review the patch

Click on the **Patches** button to view all open patches from collaborators you're tracking via the previous step, and
then on the patch you'd like to review, which shows the patch's title, description, and a list of commits. Click on a
commit to view a diff of files added, deleted, and changed.

![Reviewing a patch in Upstream](/img/upstream_patches.png)

Click the **Checkout patch** button to get a pair of commands that will help you checkout the entire patch to your local
system, which allows you to review all the changes and run tests locally.

```
$ upstream patch fetch hydqsnkr181w1zfidtocgosxghdu8n8d1wsemzgtszhzjru55ggazk/deploy-design-system
$ git checkout radicle-patch/hydqsnkr181w1zfidtocgosxghdu8n8d1wsemzgtszhzjru55ggazk/deploy-design-system
```

At this point, you can [collaborate](#collaborate-on-changes) on changes or [merge](#merge-the-patch) directly.

## CLI

### Track a remote user

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

### Review on your local system with `git`

Compare the tracking branch against the local state of your canonical branch with `git diff`.

```
$ git diff main..peer/docs-tester/main
```

<!-- ### Review On the web interface

Another option is to use the [web interface](https://app.radicle.network). Navigate to your project's page and select
which peer's branch you want to review.

![Selecting a tree to view](/img/web-interface_trees.png)

Click on the **X commit(s)** button to show the [commit history](view-share.md#view-the-commit-history), and then click
on an individual commit to see a diff of the additions and deletions.

![Reviewing a patch in the web interface](/img/web-interface_review.png) -->

## Collaborate on changes

There currently is no code review or commenting features built into Radicle. All this communication happens outside of
Radicle tooling, and the processes are entirely up to your discretion. As you work through the review process with your
collaborator, they will need to [run `upstream patch
update`](create-submit-patch.md#address-requested-changes-if-needed) to ensure you're seeing the most up-to-date
changes.

## Merge the patch

Once you're happy with the changes, merge them into your local copy and push everything to your project, updating the
primary branch.

```
$ git merge peer/docs-tester/main
$ rad push
```
