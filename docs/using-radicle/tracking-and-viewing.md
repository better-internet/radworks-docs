---
id: tracking-and-viewing
title: Tracking and viewing contributions
---

To view someone else's changes to your project, you first need to add them as a
`remote` to track their view of your project.

### Adding remotes
To view and pull changes from another user's version of your project, you must
first **add them as a remote**. To do this, you must add their **Device ID** to
the list of remotes that you follow. You can do so by clicking Manage Remotes in
the peer switcher on your project page and adding their Device ID. This is also
where you can switch between the different views of peers to see their changes
before fetching them locally.

<video style="border-radius: 16px; margin: 16px 0; width: 100%; height: 100%;"
  playsinline autoplay muted loop>
  <source src="/img/add-remote.mp4" type="video/mp4">
</video>

Adding a peer as a remote automatically tracks their view of your project,
subscribing you to any updates they push to their branches. It's important to
note that these changes may not instantly appear. We rely on the connectedness
of the network to ensure that we hear about the changes from a peer we follow.
When revisions (otherwise known as pull requests) are introduced, it will be
easier to keep track of peer's changes to your project. Until then, you'll have
to manage remotes manually. 

If you are having trouble adding another peer as a remote, see our
[troubleshooting][tr] guide.

[tr]: troubleshooting.md

[id]: /img/radicle-id-seed-node.png
[ps]: /img/peer-switcher.png
[sb]: /img/search-bar.png

[rd]: https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup
[sn]: http://seedling.radicle.xyz/
