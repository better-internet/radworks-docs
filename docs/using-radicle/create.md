---
id: create
title: Create a project
---

You can create a Radicle project from any existing Git repository and publish it on the Radicle network using two CLI commands — `rad init` and `rad push`.

Projects contain all files of a Git repository and their revision history, but they also have associated
Radicle-specific metadata such as a name, description, and information about
[delegates](understanding-radicle/glossary.md#delegate), which are the identities with write access to the project's
canonical branch.

Each project carries a unique, shareable peer-to-peer identifier known as a [project
URN](understanding-radicle/glossary.md#project-urn).

## Initialize a project

Navigate to an existing Git repository on your local system.

Run `rad init`, enter a description, specify the name of your default branch (typically `main` or `master`), and hit
`Enter`. You'll be asked whether you want to associate the key for your Radicle identity with this project — hit `Y` to
accept.

```
$ rad init
Initializing local 🌱 project in .

ok Name · radicle-example
ok Description · An example project for documentation purposes!
ok Default branch · main
ok Initializing...
 ⤷ Configure 🌱 signing key SHA256:5uI9GGFkdKgvC66yt5USJWTTZZEcvKm1/f/ZwX51+vk in local checkout? [Y ⤷ Configure 🌱 signing key SHA256:5uI9GGFkdKgvC66yt5USJWTTZZEcvKm1/f/ZwX51+vk in local checkout? yes
ok Created .gitsigners file
ok Signing configured in .git/config

Your project id is rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy. You can show it any time by running:
   rad .

To publish your project to the network, run:
   rad push
```

At this point, `rad init` created a project URN for your project and associated your Peer ID with it for sharing on the
Radicle network.

## Push your project to the Radicle network

The Radicle CLI works with peer-to-peer [seed nodes](understanding-radicle/glossary.md#seed), which function as replicas
for Radicle project data and are are accessible on the public internet and through the [web
interface](https://app.radicle.xyz). Radicle offers three default seed nodes with identical functionality:

- [pine.radicle.garden](https://app.radicle.xyz/seeds/pine.radicle.garden)
- [willow.radicle.garden](https://app.radicle.xyz/seeds/willow.radicle.garden)
- [maple.radicle.garden](https://app.radicle.xyz/seeds/maple.radicle.garden)

When you run `rad push` for the first time in a new project, the CLI asks you which seed node to sync with.

```
$ rad push
Pushing 🌱 to remote `rad`
$ git push rad
Everything up-to-date

Git version 2.35.1
Select a seed node to sync with...

* pine.radicle.garden
* willow.radicle.garden
* maple.radicle.garden
```

After syncing your project with the Radicle network for the first time, the CLI outputs information about how to find
and share your project for [sharing](view-share.md), [cloning](clone.md), and
[collaboration](using-radicle/collaboration.md).

```
Radicle signing key ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAIBndIloOmjGvHkqgfJ9sEkaZb1iBG9lrfjODqG5uoqjV

Syncing 🌱 project rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy to https://willow.radicle.garden/

ok Project synced.

🍃 Your project is available at:

   (web) https://app.radicle.xyz/seeds/willow.radicle.garden/rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy
   (web) https://app.radicle.xyz/seeds/willow.radicle.garden/rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy/remotes/hyyc74e14b4pddma6jko8385cnjdj154aorp71456gqb4o5uqwkwpk
   (git) https://willow.radicle.garden/hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy.git

ok Saving seed configuration to local git config...
=> To override the seed, pass the '--seed' flag to `rad sync` or `rad push`.
=> To change the configured seed, run `git config rad.seed <url>` with a seed URL.
```

The two `(web)` URLs lead to your project's presence on the [web app](view-share.md). The first points to the delegate's
canonical branch, and the second points to your remote, which may or may not be different.

You can append the `(git)` URL to `rad clone` to [clone](clone.md) the project elsewhere.
