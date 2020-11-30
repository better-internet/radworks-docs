---
id: contributing
title: Contributing to projects
---

To contribute to another user's project, you must first find it on the
network. To find a project, you need its [**Radicle ID**][ri]. This can be found
in the project page under the project name, or in a seed node dashboard such as
[seedling.radicle.xyz](seedling.radicle.xyz).

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

[tv]: tracking-and-viewing.md
[fm]: fetching-and-merging.md
[pc]: pushing-changes.md
[pn]: understanding-radicle/glossary.md/#project-name
[ri]: understanding-radicle/glossary.md/#radicle-id

[id]: /img/radicle-id-seed-node.png
[ps]: /img/peer-switcher.png
[sb]: /img/search-bar.png
[fp]: /img/project-found.png
[fo]: /img/fork-project.png
