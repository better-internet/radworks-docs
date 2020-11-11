---
id: running-a-seed-node
title: Running a seed node
---

To improve data availability, participants in the network can choose to act as
seeds. This is similar in concept to a pub in Secure Scuttlebutt: seeds are
always-on nodes that automatically track discovered projects, thereby
increasing the availability of these projects on the network.

To build and run a seed node, you'll have to install some prerequisites on your
machine first:

  - [Rust toolchain][rust]
  - [yarn][yarn]

Next, clone and set up the `radicle-bins` repository:

    git clone https://github.com/radicle-dev/radicle-bins.git
    cd radicle-bins/seed

Install UI depependencies and build the UI:

    (cd ui && yarn && yarn build)

Then you'll have to generate a private key:

    mkdir -p ~/.radicle-seed
    cargo run -p radicle-keyutil -- --filename ~/.radicle-seed/secret.key

In order for users to connect to the seed node from the internet, you'll have
to allow incomming connections for the following ports:

  - `UDP:12345`  - for peer data exchange
  - `TCP:80`     - for the seed node UI

For this example, let's assume that we have the public IP address `1.2.3.4` at
our disposal and that our router is set up to forward the ports UDP:12345 and
TCP:80 to the machine where the seed node will be running.

While not strictly necessary, it's nice to have a domain name set up for the
public IP address as well. For this example, we'll use this record:
`myseed.myorg.com. A 1.2.3.4`.

Now you're ready to start the seed node. Let's configure it to listen to ports
12345 and 80 on all interfaces, the private key is supplied via `STDIN`:

    cargo run --bin radicle-seed-node -- \
      --root ~/.radicle-seed \
      --peer-listen 0.0.0.0:12345 \
      --http-listen 0.0.0.0:80 \
      --name "seedling" \
      --public-addr "myseed.myorg.com:12345" \
      < ~/.radicle-seed/secret.key

We supplied the `--public-addr` option so the UI can generate a shareable seed
node address, more on that below.

<details>
  <summary>This is what you'll see in the terminal when starting the seed node:</summary>

    $ cargo run --bin radicle-seed-node -- \
      --root ~/.radicle-seed \
      --peer-listen 0.0.0.0:12345 \
      --http-listen 0.0.0.0:80 \
      --name "seedling" \
      --public-addr "myseed.myorg.com:12345" \
      < ~/.radicle-seed/secret.key
        Finished dev [unoptimized + debuginfo] target(s) in 0.39s
         Running `/Users/rudolfs/work/radicle-bins/target/debug/radicle-seed-node --root /Users/rudolfs/.radicle-seed --peer-listen '0.0.0.0:12345' --http-listen '0.0.0.0:80' --name seedling --public-addr 'myseed.myorg.com:12345'`
    Nov 10 16:48:11.006  INFO radicle_seed: Initializing tracker to track everything..
    Nov 10 16:48:11.006  INFO Protocol::run{local.id=hybecxsmx5t11emgg9mqkggihp5d7rd66tyuubaruiyym5f458fs1s local.addr=0.0.0.0:12345}: librad::net::protocol: Listening
    Nov 10 16:48:11.011  INFO Server::run{addr=V4(0.0.0.0:80)}: warp::server: listening on http://0.0.0.0:80
    Nov 10 16:48:11.012  INFO radicle_seed_node::frontend: Listening(V4(0.0.0.0:12345))
</details>

Now point your browser http://127.0.0.1. This is the seed node dashboard.

![Seed node UI](/img/seed-node-ui.png)

For Upstream clients to connect to your new seed node, you'll need a shareable
seed node address. This address can be found in the UI under the seed node
name. In our example the address is:

    hybecxsmx5t11emgg9mqkggihp5d7rd66tyuubaruiyym5f458fs1s@myseed.myorg.com:12345

Have a look at the [Adding a seed node to Upstream](getting-started/getting-started.md#adding-a-seed-node-to-upstream)
section for more information on how to set up the new seed node in Upstream.

[seed]: https://github.com/radicle-dev/radicle-bins/tree/master/seed
[rust]: https://www.rust-lang.org/tools/install
[yarn]: https://yarnpkg.com/getting-started/install
