# Welcome to Radicle's docs! 👋

This is the repository for the Radicle documentation site at [`docs.radicle.xyz`](https://docs.radicle.xyz), which
includes user-, community-, and governance-focused documentation.

This document outlines some contributing guidelines, contact points, and other resources to make it easier to contribute
to Radicle's documentation.

[`docs.radicle.xyz`](https://docs.radicle.xyz) was created with [Docusaurus](https://docusaurus.io/).

If you've run into a problem or have a suggestion, browse the open
[issues](https://github.com/radicle-dev/radicle-docs/issues) before opening a new one. We use the following [label
system](https://github.com/radicle-dev/radicle-docs/labels)) to organize our issues.

- ![](https://img.shields.io/badge/-fixup-critical) for typos, broken links, and other quick fixes
- ![](https://img.shields.io/badge/-troubleshooting-%23FBCA04) for additions to the FAQ and Troubleshooting sections
- ![](https://img.shields.io/badge/-improvement-blueviolet) for revisions, rewrites, and larger improvements
- ![](https://img.shields.io/badge/-feedback-%23DD0BE1) for feedback on structure & content
- ![](https://img.shields.io/badge/-question-C0EE59) for questions that can't be answered via documentation
- ![](https://img.shields.io/badge/-ui-1d76db) for improvements and fixups related to the look and feel of the docs site

## Best practices for managing contributions

- If a question is asked more than twice in a support channel, it should be added as an outstanding
  ![](https://img.shields.io/badge/-troubleshooting-%23FBCA04) issue. If a resolution is found, it should be captured in
  the issue before it's closed or in a following pull request. Those involved in the support process should contribute
  to the documentation (i.e. if you answered the question, be sure to capture the outcome in the relevant
  documentation).

- If a piece of unaddressed feedback is given more than three times, a
  ![](https://img.shields.io/badge/-feedback-%23DD0BE1) issue should be created.

- ![](https://img.shields.io/badge/-improvement-blueviolet) issues should be created to capture upcoming documentation
  work related to new features or releases.

## How to contribute

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
GIT_USER=<ENTER_YOUR_GITHUB-USERNAME_HERE> \
CURRENT_BRANCH=master \
USE_SSH=true \
yarn deploy
```

### Edit an existing docs page

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

### Add a new docs page to an existing sidebar

1. Create the doc as a new markdown file in `/docs`, example
   `docs/newly-created-doc.md`x:

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

For more information about adding new docs to the sidebar, see the [Docusaurus
docs](https://docusaurus.io/docs/en/navigation).

### Commit signing

We require all commits to be signed for a branch to be merged into master. Learn more on setting up commit signing
[here](https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification/signing-commits).
