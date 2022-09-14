---
id: troubleshooting
title: Troubleshooting
---

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

## `Fatal: the key for ... is not in the ssh-agent`

This error occurs when your system isn't running `ssh-agent`, which `rad` uses to store and use the cryptographic keys
associated with your Radicle identity.

In the error message, `rad` offers one method of starting `ssh-agent`, but if you're on Linux, you'll need to try
another method, like `eval "$(ssh-agent -s)"`.

## `error: unsupported value for gpg.format`

If you see the following error when using `git` after initializing a project, you're most likely running a version of Git that's incompatible with `rad`.

```
error: unsupported value for gpg.format: ssh
fatal: bad config variable 'gpg.format' in file '.git/config' at line 20
```

See our [prerequisites](#installation-prerequisites-for-rad) for the minimum Git version number you need to run `rad`
and access the Radicle network.

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
