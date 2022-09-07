---
id: push
title: Push your changes
---

How you make changes to your local working copy of a Radicle project is entirely up to you. Once you're finished, add
and commit your changes with `git add` and `git commit` just as you would when collaborating on any other Git-based
forge like GitHub or GitLab. 

Use `rad push` to synchronize your changes with a secondary source tree within the project.

```
$ rad push
Pushing 🌱 to remote `rad`
$ git push rad
To rad://hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy.git
   e2cc2f9..5198e4c  main -> main

Git version 2.35.1
Radicle signing key ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAILnTPdmcmdNPtJtBT/1S9G+4jOL0V0GD9pPYWgvXmxxQ

Syncing 🌱 project rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy to https://willow.radicle.garden/

ok Project synced.

🍃 Your project is available at:

   (web) https://app.radicle.xyz/seeds/willow.radicle.garden/rad:git:hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy/remotes/hynh7gxq3u1c7gu7wupyw99k16tz5td8n6tmwdy9s1xcfwn6zucqfy
   (git) https://willow.radicle.garden/hnrkmkfqk1yadewcgasm1s6mp5pn1hc5ch6wy.git
```

Click on the `(web)` link to visit *your* source tree within the project using the web app, which you can also navigate
to using the tree selector.

![Selecting a tree to view](/img/web-interface_trees.png)
