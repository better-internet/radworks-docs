---
id: view-share
title: View and share projects
---

All projects [published](create.md) to the Radicle network are accessible via the web app at `https://app.radicle.xyz`.

When you created your project or most recently pushed to it, `rad` pushed 

`(web) https://app.radicle.network/seeds/willow.radicle.garden/rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy`

If you can't access that URL, you can also create the URL with information about the seed node you're synced with and your project URN.

- `https://app.radicle.xyz/seeds/` + `YOUR-SEED/` + `YOUR-PROJECT-URN/`

To find the seed node from your local system, `cd` into your project and check the local Git configuration:

```
$ git config --local rad.seed
https://willow.radicle.garden/
```

To find the project URN, `cd` into your project and use `rad .` (or `rad inspect`) to display the URN:

```
$ rad .
rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy
```

Now that you have the URL to your project on the Radicle web app, you can start exploring.

## Explore a project

The web app shows a project's tree, primary README, commit history, contributors, and more.

![Viewing a specific project with the web interface](/img/web-interface_project.png)

Click on folders to expand them or individual files to show their syntax-highlighted content and the latest relevant
commit.

Click **X commit(s)** to view project's commit history, including the commit message, the committer's name, and the
time/date of the commit. Click on any commit to view changes, such as additions and deletions, as a diff. Click the **<
>** icon to explore the state of the project at that commit.

## Share a project

If you're looking to onboard a new collaborator to your Radicle-hosted project, you need to let them know where they can
find the project, explore it, and [clone](clone.md) it.

Generally speaking, the collaborator needs to know the project URN and the seed node.

The easiest way to share a project is the full URL of its page on the web interface, like
[radicle-example](https://app.radicle.network/seeds/willow.radicle.garden/rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy)
at `https://app.radicle.network/seeds/willow.radicle.garden/rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy`. Here,
they'll be able to find all the information they need to [clone](clone.md) your project and start collaborating.

You can also share only the seed node and project URN, discoverable using the commands listed above, and let them use
`rad clone` manually to [clone](clone.md) your project and [push](push.md) their changes.
