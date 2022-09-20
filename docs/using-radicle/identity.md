---
id: identity
title: Manage your Radicle identity
---

Your Radicle identity is your ticket to hosting and collaborating on code in the Radicle network, but it's not a fixed
entity. You can manage multiple identities, creating/delete them at will, and even edit them to a degree.

Many of the actions below require your personal URN, which you can find using `rad self`.

## View your active identity

Run `rad self` to see details on how you're identified on the Radicle network, including your:

- Active [display name](#edit-your-display-name)
- Personal URN
- Peer ID
- Hashed and full encryption keys
- File locations of your Git monorepo and encryption keys

## Create a new identity

Add new identities at any time. For example, use different identities for the personal projects you host on Radicle
versus your professional work for a company or DAO.

```
rad auth --init
```

## Switch between identities

If you have multiple identities, switch between them with `rad auth`.

Choose the identity you want active, enter your passphrase, and hit **Enter**.

## Edit your display name

Change your _display name_, which is how you're identified on the Radicle web app (not the same as your Peer ID or
personal URN!):

```
rad edit <YOUR-PERSONAL-URN>
```

Change the `"name"` value to your new display name in the file that appears.

```
{
  "https://radicle.xyz/link/identities/person/v1": {
    "name": "your-display-name"
  }
}
```

Re-run `rad self` to see that your **Name** changed, but your personal URN and Peer ID stayed the same.

## Remove an identity

If you forgot your identity's passphrase or don't need a certain profile any longer, you can delete the folders that
contain Radicle identities you no longer want to use.

To find where `rad` stores your identities, run `rad self` and look at the last two lines.

```
├── Storage (git)  <your-git-storage-folder>
└── Storage (keys) <your-key-storage-folder>
```

You can now navigate to these locations and delete any folders with personal URNs that match the identities you want to
remove.
