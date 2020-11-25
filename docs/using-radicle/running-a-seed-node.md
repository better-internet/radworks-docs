---
id: running-a-seed-node
title: Running a seed node
---

To improve data availability, participants in the network can choose to act as
[seeds][se]. Seeds
are always-on nodes that automatically track discovered projects, thereby
increasing the availability of these projects on the network. Conceptually, they are similar to pubs in [Secure Scuttlebutt][ss]: 

To build and run a seed node, you'll have to install some prerequisites on your
machine first:

  - [Rust toolchain][ru]
  - [yarn][ya]

Next, clone and set up the `radicle-bins` repository:

    git clone https://github.com/radicle-dev/radicle-bins.git
    cd radicle-bins

Install UI depependencies and build the UI:

    (cd seed/ui && yarn && yarn build)

First, let's set up a directory where the seed can store its data. This is
important in case you are running an Upstream client on the same machine. The
default path for both Upstream and the seed node would otherwise be the same
and could result in unexpected behaviour.

    mkdir -p ~/.radicle-seed

Then, you'll have to generate a private key:

    cargo run -p radicle-keyutil -- --filename ~/.radicle-seed/secret.key

In order for people to connect to the seed node from the internet, you'll have
to allow incomming connections for the following ports:

  - `UDP:12345`  - for peer data exchange
  - `TCP:80`     - for the seed node UI

For this example, let's assume that we have the public IP address `1.2.3.4` at
our disposal and that our router is set up to forward the ports UDP:12345 and
TCP:80 to the machine where the seed node will be running.

While not strictly necessary, it's nice to have a domain name set up for the
public IP address as well. For this example, we'll use this record:
`seed.my.org. A 1.2.3.4`.

Now you're ready to start the seed node. Let's configure it to listen on ports
12345 and 80 on all interfaces, the private key is supplied via `STDIN`:

    cargo run -p radicle-seed-node --release -- \
      --root ~/.radicle-seed \
      --peer-listen 0.0.0.0:12345 \
      --http-listen 0.0.0.0:80 \
      --name "seedling" \
      --public-addr "seed.my.org:12345" \
      --assets-path seed/ui/public \
      < ~/.radicle-seed/secret.key

**Note:** we configured the seed to use `~/.radicle-seed` as its data directory
with the `--root` option. The `--public-addr` option is needed so the UI can
show the seed address, more on that below.

<details>
  <summary>
    This is what you'll see in the terminal when starting the seed node:
  </summary>

    $ cargo run -p radicle-seed-node --release -- \
      --root ~/.radicle-seed \
      --peer-listen 0.0.0.0:12345 \
      --http-listen 0.0.0.0:80 \
      --name "seedling" \
      --public-addr "seed.my.org:12345" \
      --assets-path seed/ui/public \
      < ~/.radicle-seed/secret.key
        Finished release [optimized] target(s) in 0.19s
         Running `target/release/radicle-seed-node --root /Users/rudolfs/.radicle-seed --peer-listen '0.0.0.0:12345' --http-listen '0.0.0.0:80' --name seedling --public-addr 'seed.my.org:12345' --assets-path seed/ui/public`
    Nov 12 10:48:03.758  INFO radicle_seed: Initializing tracker to track everything..
    Nov 12 10:48:03.758  INFO Protocol::run{local.id=hyy5s7ysg96fqa91gbe7h38yddh4mkokft7y4htt8szt9e17sxoe3h local.addr=0.0.0.0:12345}: librad::net::protocol: Listening
    Nov 12 10:48:03.760  INFO Server::run{addr=0.0.0.0:80}: warp::server: listening on http://0.0.0.0:80
    Nov 12 10:48:03.760  INFO radicle_seed_node::frontend: Listening(0.0.0.0:12345)
</details>

Now point your browser http://seed.my.org. This is the seed node dashboard.

![Seed node UI][sn]

For Upstream clients to connect to your new seed, you'll need to share the seed
address. This address can be found in the UI under the name of the seed. In our
example the address is:

    hyy5s7ysg96fqa91gbe7h38yddh4mkokft7y4htt8szt9e17sxoe3h@seed.my.org:12345

Have a look at the [Adding a custom seed node][ad] section for more
information on how to set up the new seed in Upstream.


[ad]: getting-started.md#adding-a-seed-node-to-upstream
[se]: understanding-radicle/glossary.md/#seed

[sn]: /img/seed-node-ui.png

[ru]: https://www.rust-lang.org/tools/install
[ss]: https://scuttlebutt.nz
[ya]: https://yarnpkg.com/getting-started/install
