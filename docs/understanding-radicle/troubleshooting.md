---
id: troubleshooting
title: Troubleshooting
---

As the team behind the various protocols and projects that utilize the Radicle network, we want you, the user, to have
the best experience possible. Also, as the developers, we know that there will be bugs and errors. To help consolidate
these diametrically opposed pieces of knowledge, we will try and document any of the errors that we are aware of and
provide some troubleshooting advice.

## I ran into a issue — where can I report it?

We suggest you send your report through the **#support** channel on our [Discord server](https://discord.gg/j2HZCBDUvF)
or in the **Support** category of our [forum](https://radicle.community). A member of the Radicle team will try resolve
your issue right away, and if they can't, work with you on creating a formal issue/request.

If you know which Radicle project is most relevant to your issue, you can also create an issue in the appropriate
[repository on GitHub](https://github.com/radicle-dev).

## I need some help — where do I reach out?

You will get the fastest response in the **#support** channel on our [Discord server](https://discord.gg/j2HZCBDUvF).

## How do I join your Matrix channel?

Head over to [matrix.radicle.community](https://matrix.radicle.community/) and create an account. Our Matrix rooms are
synced with our #general and #support channels on Discord, so you'll always see the same information.

## Install Radicle CLI on Apple Silicon

To build the Radicle CLI on Apple Silicon, you need to be able to install x86_64 Homebrew packages, which means
installing Homebrew to the `/usr/local` location previously used by Intel systems instead of the default `/opt/homebrew`
for Apple Silicon systems.

The Radicle team is still working on simplifying this installation process — we'd love to hear
[feedback](get-involved/community.md) on your experiences!

> See this [GitHub Gist](https://gist.github.com/sebastinez/d8f2d4979cad0d9f23c162702cdd4735) for more instructions, or
this [post on installing multiple versions of
Homebrew](https://medium.com/mkdir-awesome/how-to-install-x86-64-homebrew-packages-on-apple-m1-macbook-54ba295230f) and
setting up aliases for a more advanced configuration.

First, install Rosetta 2.

```
$ /usr/sbin/softwareupdate --install-rosetta
```

Next, install an Intel-friendly version of Homebrew:

```
$ arch -x86_64 zsh
$ /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

Finally, install the Radicle CLI to the Intel-based Homebrew.

```
$ brew tap radicle/cli https://seed.alt-clients.radicle.xyz/radicle-cli-homebrew.git
$ brew install radicle/cli/core
```

