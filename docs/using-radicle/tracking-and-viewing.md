---
id: tracking-contributions
title: Tracking and viewing contributions
---

To be able to collaborate on any Git project, you need to know how to manage your remote repositories. Remote repositories are versions of your project that are hosted on the Internet or network somewhere. You can have several of them, each of which generally is either read-only or read/write for you. Collaborating with others involves managing these remote repositories and pushing and pulling data to and from them when you need to share work. Managing remote repositories includes knowing how to add remote repositories, remove remotes that are no longer valid, manage various remote branches and define them as being tracked or not, and more. In this section, we’ll cover some of these remote-management skills.

To view changes of a contributor on your Radicle project, you need to know how to manage your remotes. In Radicle, 

To view someone else's changes to your project, you first need to add them as a `remote` to track their view of your project.

### Adding remotes
To view and pull changes from another user's version of your project, you must
first **add them as a remote**. To do this, you must add their **Device ID** to the
list of remotes that you follow. You can do so
by clicking Manage Remotes in the peer switcher on your project page and adding
their Device ID. This is also where you can switch between the different views
of peers to see their changes before fetching them locally.

<video
  style="border-radius: 16px; margin: 16px 0; width: 100%; height: 100%;"
  playsinline
  autoplay
  muted
  loop>
  <source src="/img/add-remote.mp4" type="video/mp4">
</video>

Adding a peer as a remote automatically tracks their view of your project,
subscribing you to any updates they push to their branches. It's important to note that these changes may not instantly appear. We
rely on the connectedness of the network to ensure that we hear about the
changes from a peer we follow. When revisions (otherwise known as pull requests) are introduced, it will be easier to keep track of peer's changes
to your project. Until then, you'll have to manage remotes manually. 

If you are having trouble adding another peer as a remote, see our [troubleshooting][tr] guide.

[tr]: troubleshooting.md

[id]: /img/radicle-id-seed-node.png
[ps]: /img/peer-switcher.png
[sb]: /img/search-bar.png

[rd]: https://git-scm.com/book/en/v2/Getting-Started-First-Time-Git-Setup
[sn]: http://seedling.radicle.xyz/
