---
id: tracking-and-viewing
title: Tracking and viewing contributions
---

On Radicle, peers track projects they are interested in. If a peer wants to
contribute to a project, they fork it, create their own view of the project that
they publish changes to and then package those changes as a patch.

Therefore, to view someone else's patch to your project, you first need to add
them as a remote to track their view of your project.

### Adding remotes
To add a peer as a remote, you must add their **Device ID** to the list of
remotes that you follow. You can do so by clicking the _Manage Remotes_ option
in the peer selector on your project page. From there, you can add their Device
ID. This is also where you can switch between the different views of peers to
see their changes before fetching them locally.

<video style="border-radius: 16px; margin: 16px 0; width: 100%; height: 100%;"
  playsinline autoplay muted loop>
  <source src="/img/add-remote.webm" type="video/webm">
</video>

Adding a peer as a remote automatically tracks their view of your project,
subscribing you to any updates they push to their branches as well as any
patches they might have. It's important to note that these changes may not
instantly appear. We rely on the connectedness of the network to ensure you see
the changes from a contributor.

If you are having trouble adding peer as a remote, see our [FAQ][fq].

[fq]: understanding-radicle/faq.md/#i-cant-find-a-project-on-the-network-or-see-a-peers-changes-what-should-i-do
[id]: /img/radicle-id-seed-node.png
[ps]: /img/peer-switcher.png
[sb]: /img/search-bar.png

[rd]: https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup
[sn]: http://sprout.radicle.xyz/
