---
id: adding-a-seed-node
title: Adding a custom seed node
---

Seed nodes are "always-on" nodes running on public IP addresses that serve data
to connected peers. By adding a seed to Upstream, that seed automatically tracks
you and shares your data across its network of other connected peers [^1]. This
increases the availability of your data throughout the network, while making it
easier to find other's data as well. Upstream is preconfigured with a Radicle
operated seed to bootstrap your connectivity. If you have removed the default
seed and need to re-add it or would like to add a custom seed address, you can
do so by following these steps:

1. Navigate to *Settings*. There, under the *Network* header, you'll find your
   seed list.
2. Paste the seed address into the input box and submit by pressing
   <kbd>RETURN</kbd>.

    Radicle Upstream's default seed node:
    `hynewpywqj6x4mxgj7sojhue3erucyexiyhobxx4du9w66hxhbfqbw@seedling.radicle.xyz:12345`

3. Check that you're connected by hovering over your Connection icon in your
   sidebar.

Recent seed node activity and connected peers can be viewed on the added seed
node's dashboard (e.g. http://seed.my.org). The default seed dashboard for
Upstream can be viewed at http://seedling.radicle.xyz/.

[^1]: Seed nodes can be configured to either track and share all data across the
      network, or to propagate only a specific set of peers or projects. Please
      refer to your seed operator for details. If you're running your own seed,
      have a look at the [Running a seed node][sn] section and the [seed node
      documentation][sd].

[sn]: using-radicle/running-a-seed-node.md
[sd]: https://github.com/radicle-dev/radicle-bins/tree/master/seed

