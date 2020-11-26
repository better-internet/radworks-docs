---
id: contributing
title: Contributing to projects
---

To contribute to another user's project, you must first find it on the Radicle
network. To find a project, you need its [**Radicle ID**][ri]. This can be found
in the project page under the [project name][pn], or in a seed node dashboard
such as seedling.radicle.xyz.

![Identity][id]

[INSERT PICTURE OF RADICLE ON SEED NODE DASHBOARD]

Once found, copy the Radicle ID into the Upstream search bar. From there,
following the project will replicate it to your local machine once it's found in
your network of connected peers. You won't see the project metadata — such as,
the name of the project — until it is verified by Radicle Link. 

![Search bar][sb]

### Cloning projects

To clone a working copy of a followed project to your computer, you can use the
**Fork** option within the Upstream client. This will clone the project to a
specified location on your local machine and publish your version to the Radicle
network.

Forking a project will move it from the **Following** tab to the **My Projects**
tab. This is because once you fork a project, you create your own view of it
that is unique to your Device ID. You can push changes to this view and publish
them to the Radicle network. If another person has added you as a remote (See
[Tracking & viewing contributions][tv]), they will be able to fetch these
changes and merge them into their branches (See [Fetching and merging
contributions][fm]).

[tv]: pushing-and-pulling-changes.md
[fm]: fetching-and-merging.md
[pn]: understanding-radicle/glossary.md/#project-name
[ri]: understanding-radicle/glossary.md/#radicle-id

[id]: /img/radicle-id-seed-node.png
[ps]: /img/peer-switcher.png
[sb]: /img/search-bar.png


