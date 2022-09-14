---
id: issues
title: Create, view, and comment on issues
---

:::caution

This document details an experimental feature that's still undergoing active development. There will likely be bugs and breaking changes.

:::

`rad` supports creating, reading, reacting to, and commenting on issues.

We'll eventually bring these features to the Radicle [web app](https://app.radicle.xyz), but for now, they work only on
the CLI.

## Create an issue

Run `rad issue new` to open a temporary text file in your terminal for editing its title, labels, and description.

Labels and descriptions aren't yet displayed in the CLI, but you can still add them now for later use.

:::tip

Run `rad issue new --title <title> --description <text>` to create an issue non-interactively.

:::

## View issues

`rad issue list` displays a list of existing issues, along with their unique ID and title.

```
hnrkbz8ta5uqzpjguhfoykdxo7s656k8w7z9o An example issue
hnrknjfmh9xi8z1b6jj66zqf5qi8txbc64z3y A second example
```

## Comment on existing issues

Run `rad comment <id>`, replacing `<id>` with the ID of an issue in your Radicle project, to 

:::tip

As with new issues, `rad comment <id> --description <text>` creates a comment non-interactively after replacing `<text>`
with your comment.

:::

## Delete issues

Run `rad issue delete <id>` to remote an issue from your Radicle project.
