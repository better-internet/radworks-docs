---
id: troubleshooting
title: Troubleshooting
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

As the team behind the various protocols and projects that utilize the Radicle network, we want you, the user, to have
the best experience possible. Also, as the developers, we know that there will be bugs and errors. 

To help consolidate these diametrically opposed pieces of knowledge, we will try and document any of the errors that we
are aware of and provide some troubleshooting advice.

## I ran into a issue — where can I report it?

We suggest you send your report through the **#support** channel on our [Discord server](https://discord.gg/j2HZCBDUvF)
or in the **Support** category of our [forum](https://radicle.community). A member of the Radicle team will try resolve
your issue right away, and if they can't, work with you on creating a formal issue/request.

If you know which Radicle project is most relevant to your issue, you can also create an issue in the appropriate
[repository on GitHub](https://github.com/radicle-dev).

## Installation prerequisites for `rad`

If you have trouble with [installing the Radicle CLI](https://radicle.xyz/get-started.html), make sure you have
installed the correct versions of the following:

- Git: `2.34.0` or later
- OpenSSH: `8.0` or later

## Issues with `ssh-agent`

The following two errors are related to your cryptographic keys, which Radicle uses to authenticate your identity, not
being properly managed by `ssh-agent`.

```
Fatal: the key is not in the ssh-agent, consider adding it via lnk profile ssh add
```

```
error: Load key "/tmp/.git_signing_key_tmp....": Invalid format
```

The most likely issue is that your system isn't running `ssh-agent`. After you get `ssh-agent` running using one of the two methods below, based on your OS, run `rad auth` once more to ensure your keys are properly added.

<Tabs>
<TabItem value="macos" label="macOS">

```bash
lnk profile ssh add
rad auth
```

</TabItem>
<TabItem value="linux" label="Linux">

```bash
eval "$(ssh-agent -s)"
rad auth
```

</TabItem>
</Tabs>

When `rad` successfully loads a key into `ssh-agent`, it outputs the following:

```
ok Unlocking...
ok Radicle key added to ssh-agent
ok Signing key configured in git
```

## Unsupported Git version

If you see the below error when using `git` after initializing a project, you're most likely running a version of Git
that's incompatible with `rad`.

```
error: unsupported value for gpg.format
```

See our [prerequisites](#installation-prerequisites-for-rad) for the minimum Git version number you need to run `rad`
and access the Radicle network. 

## SLOP failure

When Git pushes a signed commit to a remote repository, it sends a nonce &mdash; an arbitrary number only used once &mdash; based on your system time as a security measure. If that nonce doesn't match with what the remote system expects, Git outputs this warning:

```
remote: Running pre-receive hook...        
remote: Verifying certificate...        
remote: Received `SLOP` certificate status, please re-submit signed push to request new certificate        
remote: Error: failed certification verification
```

There are two solutions:

1. Push your code again using `rad push`.
2. Check your system time for discrepancies.

## Install Radicle CLI on Apple Silicon

Previously, installing `rad` on M1/M2-based systems required you to install the x86_64 version of Homebrew.

As of September 2022, you can install Radicle using our formulae repository whether you're on Apple Silicon or an older
Intel-based system. If you're on Apple Silicon, `rad` will not run natively, but it will work!

See our [installation instructions](https://radicle.xyz/get-started.html) for the Homebrew method.

## Install Radicle on Windows with WSL

This installation method isn't officially supported by the Radicle team, but you can try it at your own risk! 

:::note

Our thanks go to the folks behind [radicle-jetbrains-plugin](https://github.com/cytechmobile/radicle-jetbrains-plugin/),
who first discovered this [method](https://github.com/cytechmobile/radicle-jetbrains-plugin/blob/main/README.md) of
installing `rad` on WSL and Windows.

:::

Assuming you already have [WSL installed](https://docs.microsoft.com/en-us/windows/wsl/install), follow the
**Debian/Ubuntu** instructions on our [get started guide](https://radicle.xyz/get-started.html).

Check what version of Git your WSL installation has with `git --version`. If it's lower than `2.34.0`, you need to
update, and if you're using the WSL default &mdash; Ubuntu 20.04 &mdash; you can add the [`git-core`
PPA](https://launchpad.net/~git-core/+archive/ubuntu/ppa) to your system to supply a newer version of Git.

```
sudo add-apt-repository ppa:git-core/ppa
sudo apt update
sudo apt install git
```

With the appropriate version of Git installed, run `rad auth` to create your identity.

But to properly load and manage your identity's keys, you need an SSH agent. Install
[keychain](https://manpages.ubuntu.com/manpages/xenial/man1/keychain.1.html) with `sudo apt install keychain`, then open
your `~/.bashrc` file. Add the following two lines:
    
```
eval `keychain --quiet --eval --agents ssh`;
export WSLENV=$WSLENV:SSH_AGENT_PID:SSH_AUTH_SOCK;
```

Save the file, exit WSL, and relaunch.

You can now navigate to an existing Git repository and run `rad init` to create a new Radicle project, or
[clone](using-radicle/clone.md) an existing project with `rad clone`.
