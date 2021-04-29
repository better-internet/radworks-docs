---
id: troubleshooting
title: Troubleshooting
---

As the developers of Upstream we want you, the user, to have the best experience
possible. Also, as the developers of Upstream, we know that there will be bugs
and errors in our Beta release. To help consolidate these diametrically opposed
pieces of knowledge, we will try and document any of the errors that we are
aware of and provide some troubleshooting advice.

In the event that this information doesn't resolve your issue, we encourage you
to submit a formal request through our [#support channel][sc] on our Matrix
server, in the [Support category][rc] of our radicle.community forum, or [open
an issue][gi] on GitHub.

If you're having issues using Git, see the [Working with Git][wg] category of this section.

For our known failures, we categorise them with a PascalCase code word that
gives a high level idea of what went wrong. When you encounter one of these
errors you will receive a notification in the application which allows you to
copy the error output. The code will be included in this JSON data.

![Error with copy to clipboard button][er]

The next sections will start with the header of the code, followed by a reason
for the error, and perhaps a way to mitigate the error and get you back on track
with enjoying your Radicle experience.

## SessionFetchFailure
#### Reason

The app failed to log into the backend process that manages the peer-to-peer
network. This might indicate that your identity in the network was not properly
created or that your on-disk state became corrupted.

#### Action
Since the cause of this error is most likely corrupted data you should reach out
to us on [radicle.community][rc] so we can help you solve the issue.


## ProjectRequestFailure

### DefaultBranch
#### Reason

During creation or replication of a project, the default branch was not created
or fetched. This will result in the application not being able to browse the
specific project.

#### Action

**Caution**: this advice involves inspecting the state and manually deleting
some references. Be careful when attempting to apply this fix. If you are at all
unsure then reach out to us on the previously mentioned channels.

In the error you will spot that the `urn` of the project is in the JSON data.
The suffix after `rad:git` will correspond to the namespace of the project — see
[here][mo] for more details.

Your monorepo will live under `$XDG_DATA_HOME/radicle-link/<active_profile_id>/git`. Running the
following command you should see something like:

```
$ tree $XDG_DATA_HOME/radicle-link/*/git/refs

/home/user/.local/share/radicle-link/d9a6c997-c481-4e0b-888f-6b0e30792458/git/refs/
├── heads
├── namespaces
│   ├── hwd1yre8ibmso5webrog7uqwcrys4fmdijcyjfoso73utnz7y41dbtqudxe
│   │   └── refs
│   │       └── rad
│   │           ├── id
│   │           ├── self
│   │           └── signed_refs
│   └── hwd1yredpofbnmb6d8ea4ofqu31fzziho8xoejjcd15p553fyr4msmg4k8w
│       └── refs
│           ├── heads
│           │   └── main
│           └── rad
│               ├── id
│               ├── ids
│               │   └── hwd1yre8ibmso5webrog7uqwcrys4fmdijcyjfoso73utnz7y41dbtqudxe
│               ├── self
│               └── signed_refs
└── tags
```

The suffix we pointed out earlier should correspond to one of these entries. In
this error case the `refs/heads/main` will be missing.

If you just **replicated** the project, then delete this namespace entry and try
replicate again.

If you just **created** the project, then navigate to your working copy and do
the following:

```
$ git checkout -b <default branch>
```

Add a `README.md` and commit this to the `<default branch>`, then:

```
$ git push rad <default branch>
```

### Stats
#### Reason

The [browser][rs] for the project could not fetch the statistics for your
project.

This could be down to an error in git.

#### Action

Reach out to us on one of our channels, mention the `Stats` code, and provide as
much detail as possible.

### SignedRefs
#### Reason

`signed-refs` are the git references that peers advertise which they have also
signed with their secret key. This means that when your peer receives
`signed-refs` it attempts to verify the signature using the advertised [Device
ID][di]. If this verification fails, then this project may be left in a broken
state.

#### Action

Some of these cases may not be errors and the `signed-refs` did not actually
come from that Device ID. If you think this is indeed an error, then we can
attempt to inspect the `signed-refs`.

To get the JSON data for the `signed-refs` we must run the following commands,
filling in the details for your particular project and remote.

```
$ cd $XDG_DATA_HOME/radicle-link/<active_profile_id>/git

$ git ls-tree refs/namespaces/<id>/refs[/remotes/<peer>]/rad/signed_refs
100644 blob e3f6e6bd25955802060698f5b5449c874969aa71    refs

$ git cat-file -p e3f6e6bd25955802060698f5b5449c874969aa71
{"refs":{"heads":{},"remotes":{}},"signature":"hyydp6mkwkrx1cuz8i4pg3wfojujxaa3s81higa846msaroegcdspp3qe358wmpa3f85s6zmyha5zfgtqnkszwcc6a3k7pfd35fnceoec"}
```

If you report this JSON payload and the offending Device ID, we can take a look
and see if we notice anything out of the ordinary.

## BackendTerminated
### Reason

The app runs a backend process in the background that handles networking and
file system access. The error indicates that this process was either killed by
the user or the system or crashed.

### Action

The first thing you can do is try to restart the app which will restart the
backend process. If the problem persists, the logs from the process might tell
you what the issue is and give you an idea how you might fix it. For example,
another process may be listening on the port we’re using or the backend does not
have the permissions to write to a certain directory.

If you’re not able to fix the problem, please open an [issue on GitHub][gi].

## UnknownException
### Reason

This is catch all error. As we categorise our errors more & more — and even
better, eliminate them! — then we should see less & less of this particular
case.

### Action

Please report these errors to [GitHub][gi] with as much detail as possible —
checking first that it's not already reported by another user.

<!--
TODO(finto): Link to our monorepo explanation
-->

# Working with Git

This section will try to resolve common errors you may run into while trying to
interact with Radicle as a remote.

### Radicle remote helper not configured correctly
If you try to `git fetch` or `git push rad` without first adding the Radicle
remote helper to your shell configuration, you'll recieve an error similar to
the following:

```
git: 'remote-rad' is not a git command. See 'git --help'.
```

To make sure you can fetch or push changes you need to add the `git-rad-remote`
helper to your `$PATH` by adding the following to your shell configuration:

```
$ export PATH=$PATH:$HOME/.radicle/bin
```

This custom remote helper ensures that commits are verified by a peer when you
interact with the Radicle network. For more instructions on how to do this, see
[Getting Started][gs].


**Note** that the `git-rad-remote` helper was included with your installation of
**Radicle Upstream** and lives under `$HOME/.radicle/bin`.

### Radicle does not prompt for password
Every git command interacting with the rad remote prompts you for the password.
It does so via git which relies on the `SSH_ASKPASS` environment variable.
If you have that variable broken you won't get prompted for a password and see:
```
Error: Error unsealing key: Unable to decrypt secret box using the derived key
```
**Note**: this is also the error message for entering a wrong password.

You can solve the issue by fixing your `SSH_ASKPASS`. One nice trick can be
to have a wrapper like `pass show radicle-password` in `~/bin/print-radicle-pw`
and then use `SSH_ASKPASS=print-radicle-pw git push rad`.

# Lost Passphrase

**Caution**: this advice involves manually deleting a file created by radicle.
If you are at all unsure then reach out to us on the previously mentioned channels.

If you lost your passphrase for your radicle identity, there is currently no way
to restore it.
To start with a new identity, you need to delete the `active_profile` file.
This file stores the `active_profile_id` that points radicle to the profile aka
directory it needs to access for your identity specific data.
The `active_profile` file can be found under
`$XDG_CONFIG_HOME/radicle-link/active_profile`.
Stop the app _before_ removing the file. When you start it up again, the app
should automatically begin with the onboarding screen to create a new identity.

[di]: glossary#device-id
[gs]: getting-started.md
[mo]: understanding-radicle/how-it-works.md
[wg]: #working-with-git

[er]: /img/error.png

[gi]: https://github.com/radicle-dev/radicle-upstream/issues
[rc]: https://radicle.community/c/help
[rs]: https://github.com/radicle-dev/radicle-surf
[sc]: https://matrix.to/#/#support:radicle.community
