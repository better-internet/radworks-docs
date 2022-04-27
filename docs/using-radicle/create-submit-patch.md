---
id: create-submit-patch
title: Create and submit a patch
---

In Radicle, patches are like GitHub's pull requests. If you have a fix or enhancement you’d like to contribute to a
project, you can do so by **submitting a patch** in Upstream. If you don't yet have Upstream, see the [get started guide](/docs/getting-started.md).

First, navigate to your project's working copy with `cd`. Create and checkout a new branch that will contain the changes for your patch. The branch name should be short and descriptive – it will be used to identify the patch.

```
git checkout --branch my-proposed-changes
```

Make your changes, add the changed files with `git add ...`, and commit with `git commit ...`.

Now you can create your patch using the `upstream` CLI tool, which you set up during :

```
upstream patch create
```

Your default editor opens, allowing you to enter the title and description for the patch. The first line is the title,
followed by a blank newline, followed by the description of the patch. Reference relevant issues by including their URL
in the patch description. Save and exit the editor.

Verify that the patch shows up in Upstream by navigating to the project’s **Patches** tab in Upstream.

## Inform the project's delegates about your patch

First, you'll need to share your Peer ID with the delegate so that they can [track](track-review-merge.md) your patch in
Upstream.

You can find your Peer ID on the Upstream client's homepage, under your name. Click on the text to copy your Device ID
to your system clipboard. Your Peer ID should look something like:
`hynsqc3d693bfidom5docik9oj5hy1kciw7dz3j8pwpcnsa9cftbzk`.
        
![Finding your Peer ID in Upstream](/img/upstream_peer-id.png)
    
The delegate needs to [add your Peer ID](track-review-merge.md) to their list of remotes for the project. Once they do,
they'll see the patch you created.

At this point, the delegate will review your patch. If it passes review, it will be merged and published.

## Address requested changes if needed

If any changes are required, you can update and re-publish your patch. First, go to the project checkout directory, and
make sure you're on the same branch as when you proposed the patch:

```
cd path/to/working/copy
git checkout my-proposed-changes
```

Make the requested changes, add the changed files with `git add ...`, and commit with `git commit ...`.

Now you can update the patch:

```
upstream patch update
```

This will open the existing patch title/description in your editor. You can either update the title/description or save
as it is. Once you leave your editor, the terminal will prompt you for your passphrase and publish the updated patch.

Inform the maintainers that you addressed their requested changes and updated your patch. They may repeat this process a
few times until they're ready to accept, merge, and publish your patch.
