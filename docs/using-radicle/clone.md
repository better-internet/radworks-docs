---
id: clone
title: Clone a project
---

To start collaborating on a project, you first need to clone the project's to your local system.

When using the Radicle [web app](view-share.md), click on the **Clone** button to display a dropdown with the full
`rad clone...` command, which you can paste into your terminal.

![Finding the clone command via the web app](/img/web-interface_clone.png)

If you choose not to use the web app, you can also build the clone URL with the syntax
`rad://<seed-id>/<project-urn>`, with the `rad:git:` portion of the URN removed. Ask the project's maintainer if you
don't have either of these identifiers.

Use `rad clone` to fetch a copy of the project and check out the canonical branch on your local system.

```
$ rad clone rad://willow.radicle.garden/hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy
Git version 2.35.1

Syncing 🌱 project rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy from https://willow.radicle.garden/
...
```

You'll be asked to verify whether you want to associate the key for your Radicle identity with this project — hit `Y` to
accept. Once the clone is finished, you can double-check the project URN and seed node.

```
$ git config --local rad.seed
https://willow.radicle.garden/
$ rad .
rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy
```

You can also see who else has contributed to the project with `rad remote`:

```
$ rad remote
joelhans hyyc74e14b4pddma6jko8385cnjdj154aorp71456gqb4o5uqwkwpk delegate
```

The output will show one or more collaborators, some of which may also be a
[delegate](understanding-radicle/glossary.md#delegate), along with the display name and Peer ID for each.
