# Welcome to Radworks' docs! 👋

This is the repository for the Radworks documentation site at [`docs.radworks.org`](https://docs.radworks.org), which
includes community-, and governance-focused documentation.

This document outlines some contributing guidelines, contact points, and other resources to make it easier to contribute
to Radworks' documentation.

[`docs.radworks.org`](https://docs.radworks.org) is created with [Vocs](https://vocs.dev/).

If you run into a problem or have a suggestion, browse the open
[issues](https://github.com/radicle-foundation/radworks-docs/issues) before opening a new one. We use the following
[label system](https://github.com/radicle-foundation/radworks-docs/labels) to organize our issues.

- ![](https://img.shields.io/badge/-fixup-critical) for typos, broken links, and other quick fixes
- ![](https://img.shields.io/badge/-troubleshooting-%23FBCA04) for additions to the FAQ and Troubleshooting sections
- ![](https://img.shields.io/badge/-improvement-blueviolet) for revisions, rewrites, and larger improvements
- ![](https://img.shields.io/badge/-feedback-%23DD0BE1) for feedback on structure & content
- ![](https://img.shields.io/badge/-question-C0EE59) for questions that can't be answered via documentation
- ![](https://img.shields.io/badge/-ui-1d76db) for improvements and fixups related to the look and feel of the docs site

## Best practices for managing contributions

- If a question is asked more than twice in a support channel, a Radworks contributor should add as an outstanding
  ![](https://img.shields.io/badge/-troubleshooting-%23FBCA04) issue. If a resolution is found, it should be captured in
  the issue before it's closed or in a following pull request. Those involved in the support process should contribute
  to the documentation (i.e. if you answered the question, be sure to capture the outcome in the relevant
  documentation).
- If a piece of unaddressed feedback is given more than three times, an
  ![](https://img.shields.io/badge/-feedback-%23DD0BE1) issue should be created.
- ![](https://img.shields.io/badge/-improvement-blueviolet) issues should be created to capture upcoming documentation
  work related to new features or releases.

## How to contribute

First, [create a fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) of the `radworks-docs` repository
and clone that to your local system, where you'll make your edits and create Git commits.

```
git clone git@github.com:<YOUR-GITHUB-USERNAME>/radworks-docs.git
```

### Run the website locally

First, install [NodeJS](https://nodejs.org/en/download/) on your system. 

Navigate into the `radworks-docs` folder on your local system and install dependencies:

```sh
cd radworks-docs/
npm install
```

You can then run the dev server and access it at `http://localhost:5173` from your browser of choice.

```sh
npm run dev
```

### Add a new doc

When you create a new Markdown document in the `docs/pages` folder &mdash; we very prefer `.mdx` files, by the way! &mdash;

You must add your new doc to the sidebar, specified in `vocs.config.ts`. Find the appropriate place in the sidebar for
your doc.

### Governance docs

We house many explanatory docs for how governance works in this repository, with a few exceptions &mdash;
notably the **Governance Manual**, which which describes the current governance processes of the Radworks and can only
be updated via off-chain approval.

Changes to the Manual follow a [separate contribution
process](https://github.com/radicle-foundation/radworks-governance/blob/main/contributing.md).

### Commit signing

We require all commits to be signed for a branch to be merged into `main`. Learn more on setting up commit signing
[here](https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification/signing-commits).
