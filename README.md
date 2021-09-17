# Welcome to Radicle Docs 👋

This is the repository for the Radicle documentation site
[docs.radicle.xyz][wi]. radicle-docs accepts contributions via Radicle patches
and GitHub pull requests. This document outlines some contributing guidelines,
contact points, and other resources to make it easier to contribute to
radicle-docs.

[docs.radicle.xyz][wi] was created with [Docusaurus][do]. Full Docusaurus
documentation can be found on their [website][do].

If you've run into a problem or have a suggestion, browse the open [issues][is]
before opening a new one. We use the following [label system][la] to organize
our issues.

* ![][cr] for typos, broken links, and other quick fixes
* ![][tr] for additions to the FAQ and Troubleshooting sections
* ![][im] for revisions, rewrites, and larger improvements
* ![][fe] for feedback on structure & content
* ![][qu] for questions that can't be answered via documentation
* ![][fi] for improvements and fixups related to the look and feel of the docs
  site

### Best practices for managing contributions

* If a question is asked more than twice in a support channel, it should be
  added as an outstanding ![][tr] issue. If a resolution is found, it should be
  captured in the issue before it's closed or in a following pull request.
  Those involved in the support process should contribute to the documentation
  (i.e. if you answered the question, be sure to capture the outcome in the
  relevant documentation).

* If a piece of unaddressed feedback is given more than three times, a ![][fe]
  issue should be created and added to the [Feedback Hub][fh] to be prioritized
  in the following weekly sync.

* ![][im] issues should be created to capture upcoming documentation work
  related to new features or releases.

* Issues will be reviewed on a rolling basis and triaged weekly by
  @abbey-titcomb.

# How to Contribute

- [Get Started](#get-started)
- [Editing Content](#editing-content)
- [Adding Content](#adding-content)
- [Contributing](#contributing)

## Get Started

1. Make sure all the dependencies for the website are installed:

```sh
yarn
```

2. Run your dev server:

```sh
yarn start
```

3. Publish to GH Pages

```sh
GIT_USER=<ENTER_YOUR_GITHUB-USER_HERE> \
CURRENT_BRANCH=master \
USE_SSH=true \
yarn deploy
```

## Editing Content

### Editing an existing docs page

Edit docs by navigating to `docs/` and editing the corresponding document:

`docs/doc-to-be-edited.md`

```markdown
---
id: page-needs-edit
title: This Doc Needs To Be Edited
---

Edit me...
```

For more information about docs, click [here][na]

## Adding Content

### Adding a new docs page to an existing sidebar

1. Create the doc as a new markdown file in `/docs`, example
   `docs/newly-created-doc.md`:

```md
---
id: newly-created-doc
title: This Doc Needs To Be Edited
---

My new content here..
```

1. Refer to that doc's ID in an existing sidebar in `website/sidebars.json`:

```javascript
// Add newly-created-doc to the Getting Started category of docs
{
  "docs": {
    "Getting Started": [
      "quick-start",
      "newly-created-doc" // new doc here
    ],
    ...
  },
  ...
}
```

For more information about adding new docs, click [here][na]

## Contributing

💡 We require all commits to be signed for a branch to be merged into master.
Learn more on setting up commit signing [here][cs].

Contributions to radicle-docs can be made via pull requests on GitHub or
through Radicle. If opening a PR, please tag any associated parties and
@abbey-titcomb for visibility.

If contributing via Radicle, submit your patch for review by sending an email
to abbey@monadic.xyz in the following format:

```
Subject line:

  *[PATCH] Description of patch*

Message body:

  *[Device ID]*
  *[Display name]*

  *Description of patch and other relevant information*
  ```



[cr]: https://img.shields.io/badge/-fixup-critical
[cs]: https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification/signing-commits
[do]: https://docusaurus.io
[fe]: https://img.shields.io/badge/-feedback-%23DD0BE1
[fh]: https://github.com/orgs/radicle-dev/projects/19
[fi]: https://img.shields.io/badge/-ui-1d76db
[im]: https://img.shields.io/badge/-improvement-blueviolet
[is]: https://github.com/radicle-dev/radicle-docs/issues
[la]: https://github.com/radicle-dev/radicle-docs/labels
[na]: https://docusaurus.io/docs/en/navigation
[qu]: https://img.shields.io/badge/-question-C0EE59
[tr]: https://img.shields.io/badge/-troubleshooting-%23FBCA04
[wi]: https://docs.radicle.xyz/docs/what-is-radicle.html
