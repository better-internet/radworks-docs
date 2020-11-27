---
id: fetching-and-merging
title: Fetching and merging contributions
---

To be able to collaborate on a Radicle project, you need to know how to fetch
and merge contributions from other people. To fetch and merge changes from a
contributor, you first need to add them as a remote to your project. If you
haven't done so, then first follow the steps in [Tracking & viewing
contributions][tv] section.

If you can see your a tracked peer's changes after adding them as a remote, this
means they have been successfully replicated to your machine. If you have added
a peer as a remote and can't see their changes, head over to our
[Troubleshooting][tr] section.

## Fetching changes 

If you're interested in merging these changes into one of your branches, you'll
need to fetch these commits into your working copy. To make sure you can fetch or push changes, you need to add the
[`git-rad-remote` helper][gs] to your `$PATH`.

Navigate to your woking copy in a terminal. Here you can inspect the remotes of
your project by running the `git remote` command. For example, a project that
tracks multiple people might look something like this.

```
$ git remote show
fintohaps@hybaapjdrhj8mg4mathpwjaeuktfzxd8uqfpjknp65fyncehpxxzze
merle@hyb1exienq5txww75rgdftuf6j78qehtigma6hn19zt8gz5pu5k73g
rad
```

As you can see, the format of a remote handle is:

```
<display name>@<Device ID>
```

where the display name is the name you see on a user's profile page in Upstream.

You may be used to the concept of setting up an `origin` remote for a
project when pushing to a centrally hosted platform like GitHub. This allows you
to fetch and push changes from the server that hosts your project. In Radicle,
these remotes point to the Git monorepo on your machine that stores all of your
Radicle data. They allow you to fetch changes from your peers and push your
changes. This means that fetching and pushing to remotes are _local first_
actions. To read more about how Radicle is built on Git see our [**How it Works**][gi] section.

To fetch the changes of a specific remote, run the `git fetch` command with
their remote handle:


```
$ git fetch merle@hyb1exienq5txww75rgdftuf6j78qehtigma6hn19zt8gz5pu5k73g
remote: Enumerating objects: 7, done.
remote: Counting objects: 100% (7/7), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 6 (delta 0), reused 6 (delta 0), pack-reused 0
Unpacking objects: 100% (6/6), 1.50 KiB | 1.50 MiB/s, done.
From rad://hwd1yre8wtxufyqnt8xzxt8ps3n7ww8qzpfmud5pibarumshawnpcrjzjme
 * [new ref]         hyb1exienq5txww75rgdftuf6j78qehtigma6hn19zt8gz5pu5k73g/heads/main -> merle/main
```

A successful fetch will have a similar output to the example above and show that
the reference is now located as a remote branch (e.g. `merle@hyb1exienq5txww75rgdftuf6j78qehtigma6hn19zt8gz5pu5k73g/main`). We can
confirm this is under a remote branch by entering the following command:


```
$ git branch -a
main
remotes/merle@hyb1exienq5txww75rgdftuf6j78qehtigma6hn19zt8gz5pu5k73g/main
remotes/rad/main
```


Once changes have been fetched, you can view the changes by getting a diff of
your changes:

```
$ git diff merle/main 
diff --git a/README.md b/README.md
index b72e7d4..8c98464 100644
--- a/README.md
+++ b/README.md
@@ -1 +1 @@
-Radicle is the next big thing!
+Radicle
```

If you are happy with these changes, you can merge them into your own branch:

```
$ git merge merle/main
[main e6ee76d] Merge remote-tracking branch 'merle/main' into main
```

or for those of you who prefer rebasing:

```
$ git rebase merle/main
[main 3e0e32d] Radicle Update
 1 file changed, 2 insertions(+)
Successfully rebased and updated refs/heads/main.
```

This puts your working copy in a state this up-to-date with your contributor's
changes. 

You can publish these changes to the Radicle network by running `git push
rad`(See [Pushing changes][pc]):

```
$ git push rad main
Enumerating objects: 2, done.
Counting objects: 100% (2/2), done.
Delta compression using up to 8 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (2/2), 1.72 KiB | 1.72 MiB/s, done.
Total 2 (delta 0), reused 0 (delta 0), pack-reused 0
To rad://hwd1yre8wtxufyqnt8xzxt8ps3n7ww8qzpfmud5pibarumshawnpcrjzjme.git
   e6ee76d..57917bf  main -> main
```

Once you have published the changes from your working copy, you can view the
changes you made in **Radicle Upstream**. If the changes were successfully
published to the network, you should see the new commits on your project page.
If you are connected to the network, these changes will also be gossiped to your
connected peers. If you are a maintainer, this means that anybody who tracks
your project will be able to find, view, and fetch your updates to the project.

If you can't see your changes on Radicle Upstream they may not have been
published successfully. See [Troubleshoooting][tr] for more help.


[pc]: using-radicle/pushing-changes.md
[tv]: using-radicle/tracking-and-viewing.md
[tr]: using-radicle/troubleshooting.md
[gi]: understanding-radicle/how-it-works.md/#git-implementation
[gs]: getting-started.md/#configuring-your-system
