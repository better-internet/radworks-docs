# Welcome to Radicle's docs! 👋

This is the repository for the Radicle documentation site at [`docs.radicle.xyz`](https://docs.radicle.xyz), which
includes user-, community-, and governance-focused documentation.

This document outlines some contributing guidelines, contact points, and other resources to make it easier to contribute
to Radicle's documentation.

[`docs.radicle.xyz`](https://docs.radicle.xyz) was created with [Docusaurus](https://docusaurus.io/).

If you run into a problem or have a suggestion, browse the open
[issues](https://github.com/radicle-dev/radicle-docs/issues) before opening a new one. We use the following [label
system](https://github.com/radicle-dev/radicle-docs/labels) to organize our issues.

- ![](https://img.shields.io/badge/-fixup-critical) for typos, broken links, and other quick fixes
- ![](https://img.shields.io/badge/-troubleshooting-%23FBCA04) for additions to the FAQ and Troubleshooting sections
- ![](https://img.shields.io/badge/-improvement-blueviolet) for revisions, rewrites, and larger improvements
- ![](https://img.shields.io/badge/-feedback-%23DD0BE1) for feedback on structure & content
- ![](https://img.shields.io/badge/-question-C0EE59) for questions that can't be answered via documentation
- ![](https://img.shields.io/badge/-ui-1d76db) for improvements and fixups related to the look and feel of the docs site

## Best practices for managing contributions

- If a question is asked more than twice in a support channel, a Radicle contributor should add as an outstanding
  ![](https://img.shields.io/badge/-troubleshooting-%23FBCA04) issue. If a resolution is found, it should be captured in
  the issue before it's closed or in a following pull request. Those involved in the support process should contribute
  to the documentation (i.e. if you answered the question, be sure to capture the outcome in the relevant
  documentation).
- If a piece of unaddressed feedback is given more than three times, an
  ![](https://img.shields.io/badge/-feedback-%23DD0BE1) issue should be created.
- ![](https://img.shields.io/badge/-improvement-blueviolet) issues should be created to capture upcoming documentation
  work related to new features or releases.

## How to contribute

First, [create a fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) of the `radicle-docs` repository
and clone that to your local system, where you'll make your edits and create Git commits.

```
git clone git@github.com:<YOUR-GITHUB-USERNAME>/radicle-docs.git
```

### Run the website locally

First, install [NodeJS](https://nodejs.org/en/download/) and
[Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#debian-stable) on your system. 

Navigate into the `radicle-docs` folder on your local system and install dependencies:

```sh
cd radicle-docs/
yarn install
```

You can then run the dev server and access it at `http://localhost:3000` from your browser of choice.

```sh
yarn start
```

### Add a new doc

When you create a new Markdown document in the `docs/` folder &mdash; we very prefer `.mdx` files, by the way! &mdash;
make sure your frontmatter section includes an `id` that matches the filename and a `title` field, which Docusaurus uses
on the website directly.

You *must* add your new doc to the sidebar, specified in `sidebars.js`. Find the appropriate place in the sidebar for
your doc, create a newline, and add the `id` of your doc.

```javascript
const sidebars = {
  docsSidebar: [
    ...
    {
      type: 'category',
      label: 'Example',
      collapsed: false,
      items: [
        'using-radicle/create',
        'your-new-doc',         // A new document with the `id` of `your-new-doc`.
      ]
    },
  ...
  ]
...
}
```

For more information about adding new docs to the sidebar, or configuring the sidebar itself, see the [Docusaurus
docs](https://docusaurus.io/docs/en/navigation).

### Governance docs

We house many explanatory docs for how RadicleDAO governance works in this repository, with a few exceptions &mdash;
notably the **Governance Manual**, which which describes the current governance processes of the RadicleDAO and can only
be updated via off-chain approval.

Changes to the Manual follow a [separate contribution
process](https://github.com/radicle-dev/radicle-governance/blob/main/contributing.md).

### Commit signing

We require all commits to be signed for a branch to be merged into `master`. Learn more on setting up commit signing
[here](https://docs.github.com/en/github/authenticating-to-github/managing-commit-signature-verification/signing-commits).

### Tips for managing your fork of `radicle-docs`

When you clone your fork of `radicle-docs`, the repository at `YOUR-GITHUB-USERNAME>/radicle-docs` is set as the default
`origin` remote. If you want to keep your fork up-to-date with the state of the `radicle-dev/radicle-docs` repository,
you need to occasionally pull new commits into your fork. The best way to do that is to add a new `upstream` remote to your fork and 

On your local system:

```
cd radicle-docs/
git remote add upstream https://github.com/radicle-dev/radicle-docs.git
```

You can now pull changes from `upstream` to synchronize `master` branches across repositories:

```
git pull upstream master
```

If you need to combine the latest changes from `upstream/master` to a branch you're currently working on in your fork,
you should perform a [rebase](https://git-scm.com/docs/git-rebase).

```
git pull --rebase upstream master
```

If your branch and `upstream/master` have diverged, you'll need to resolve them using a text editor, add the file with
`git add <FILENAME>`, and run `git rebase --continue`.

When the rebase completes, you can push the updated state to `origin/master`:

```
git push --force origin master
```
