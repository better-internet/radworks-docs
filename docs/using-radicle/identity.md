---
id: identity
title: Manage your Radicle identity
---

Your Radicle identity is your ticket to hosting and collaborating on code in the Radicle network, but it's not a fixed
entity. You can manage multiple identities, creating/delete them at will, and even edit them to a degree.

Many of the actions below require your personal URN, which you can find using `rad self`.

## Create a new identity

TK

```
rad auth --init
```

## Switch between identities

```
rad auth
```

## Edit your display name

Change your _display name_, which is how you're identified on the Radicle web app (not the same as your Peer ID or
personal URN!):

```
rad edit
```

In the file that appears, change the `"name"` value to your new display name.

```
{
  "https://radicle.xyz/link/identities/person/v1": {
    "name": "your-display-name"
  }
}
```

Run `rad self` again to see that your **Name** changed, but your personal URN and Peer ID stayed the same.

## Delete your identity

```
rad rm YOUR-PERSONAL-URN
```
