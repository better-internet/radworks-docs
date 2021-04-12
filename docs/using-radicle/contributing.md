---
id: contributing
title: Contributing to projects
---

To contribute to another user's project, you must first find it on the
network. To find a project, you need its [**Radicle ID**][ri]. This can be found
in the project page under the project name, or in a seed node dashboard such as
[sprout.radicle.xyz](http://sprout.radicle.xyz).

![Identity][id]

Once you have the Radicle ID, copy it into the Upstream search bar. From there,
you can follow the project to track it. This will replicate it to your local
machine once it's found in your network of connected peers. You won't see the
project metadata — such as, the name of the project — until it is verified by
the protocol. 

![Search bar][sb] ![Found Project][fp]

### Forking projects

To create your own view of a project, you can use the **Fork** option within the
Upstream client. This will clone the project to a specified location on your
local machine and publish your version to the Radicle network as a new project.

![Fork Project][fo]

Forking a project will move it from the **Following** tab to the **Projects**
tab. This is because once you fork a project, you create your own view of
it that is unique to your Device ID. You can [push changes][pc] to this view via
the `rad` remote and publish them to the network. If another person has
added you as a remote (See [Tracking & viewing contributions][tv]), they will be
able to fetch these changes and merge them into their branches (See [Fetching
and merging contributions][fm]).

You are able to clone your project with the **Checkout** option on your project
page.

## Getting a contribution merged

Once you [push changes][pc] to a fork of a project and they've been successfully
published to the network, they can be replicated by other peers. For another
peer (e.g. the maintainer of a project) to see your changes, they need to [add
you as a remote][fm] to their projects. This means that until [social coding features
are introduced][fq], you'll have to manually communicate your patches to the
maintainer of a project by sending them your Device ID. This can be done through
email, a developer chat, or social media channel. 

If you are a maintainer of a project, it is suggested that you provide a link to
a channel for receiving contributor Device IDs.

[tv]: tracking-and-viewing.md
[fm]: fetching-and-merging.md
[pc]: pushing-changes.md
[pn]: understanding-radicle/glossary.md/#project-name
[ri]: understanding-radicle/glossary.md/#radicle-id
[fq]: understanding-radicle/faq.md/#how-will-issues-and-prs-work

[id]: /img/radicle-id-seed-node.png
[ps]: /img/peer-switcher.png
[sb]: /img/search-bar.png
[fp]: /img/project-found.png
[fo]: /img/fork-project.png
