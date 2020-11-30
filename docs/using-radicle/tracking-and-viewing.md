---
id: tracking-and-viewing
title: Tracking and viewing contributions
---

On Radicle, peers track projects they are interested in. If a peer wants to
contribute to a project, they fork it and create their own view of the project
that they publish changes to. 

Therefore, to view someone else's changes to your project, you first need to add
them as a `remote` to track their view of your project.

### Adding remotes
To add a peer as a remote, you must add their **Device ID** to the list of
remotes that you follow. You can do so by clicking the _Manage Remotes_ option
in the peer selector on your project page. From there, you can add their Device
ID. This is also where you can switch between the different views of peers to
see their changes before fetching them locally.

<video style="border-radius: 16px; margin: 16px 0; width: 100%; height: 100%;"
  playsinline autoplay muted loop>
  <source src="/img/add-remote.mp4" type="video/mp4">
</video>

Adding a peer as a remote automatically tracks their view of your project,
subscribing you to any updates they push to their branches. It's important to
note that these changes may not instantly appear. We rely on the connectedness
of the network to ensure you hear about the changes from a peer you track. When
patches and code review are introduced, it will be easier to keep track of
peer's changes to your project. Until then, you'll have to manage remotes
manually. 

If you are having trouble adding another peer as a remote, see our
[FAQ][fq].

[fq]: understanding-radicle/faq.md/#i-cant-find-a-project-on-the-network-or-see-a-peers-changes-what-should-i-do
[id]: /img/radicle-id-seed-node.png
[ps]: /img/peer-switcher.png
[sb]: /img/search-bar.png

[rd]: https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup
[sn]: http://seedling.radicle.xyz/
