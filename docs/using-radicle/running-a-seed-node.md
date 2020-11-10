---
id: running-a-seed-node
title: Running a seed node
---

To improve data availability, participants in the network can choose to act as
seeds. This is similar in concept to a pub in Secure Scuttlebutt: seeds are
always-on nodes that automatically track discovered projects, thereby
increasing the availability of these projects on the network.

To be able to build and run a seed node, you'll need to have some prerequisites
set up on your machine:

  - [Rust toolchain][rust]
  - [yarn][yarn]


Clone and set up the `radicle-bins` repository:

    git clone https://github.com/radicle-dev/radicle-bins.git
    cd radicle-bins
    git submodule update --init --recursive
    cd seed

Install UI depependencies and build the UI:

    (cd ui && yarn && yarn build)

To run a seed node, you'll have to generate a private key:

    mkdir -p ~/.radicle-seed
    cargo run -p radicle-keyutil -- --filename ~/.radicle-seed/secret.key

**Note**: for users to be able to connect to the seed node from the internet,
you'll have to allow incomming connections to the following ports:

  - UDP:12345  - for peer data exchange
  - TCP:80     - for the seed node UI

Let's assume that for this example we have the following public IP address
`1.2.3.4` at our disposal and that the router is set up to forward the UDP:12345
and TCP:80 ports to the machine where the seed node will be running.

While not strictly necessary, it's nice to have a domain name set up for the
IP address, for this example let's say we have the following record set up:

    myseed.myorg.com. A 1.2.3.4

Start the seed node configured to listen on all interfaces ports 12345, 80
and private key supplied via STDIN:

    cargo run --bin radicle-seed-node -- \
      --root ~/.radicle-seed \
      --peer-listen 0.0.0.0:12345 \
      --http-listen 0.0.0.0:80 \
      --name "seedling" \
      --public-addr "myseed.myorg.com:12345" \
      < ~/.radicle-seed/secret.key

The `--name` and `--public-addr` options are only for showing extra information
in the web based UI and are not mandatory.

<details>
  <summary>This is what you'll see in the terminal:</summary>

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

When pointing your browser at the seed node UI on http://127.0.0.1, you'll see
something like this:

![Seed node UI](/img/seed-node-ui.png)

The shareable seed node address which can be used by Upstream to connect to your
new seed node, can be obtained from the seed node UI. A shareable seed node
address looks like this:

    hybecxsmx5t11emgg9mqkggihp5d7rd66tyuubaruiyym5f458fs1s@myseed.myorg.com:12345

[seed]: https://github.com/radicle-dev/radicle-bins/tree/master/seed
[rust]: https://www.rust-lang.org/tools/install
[yarn]: https://yarnpkg.com/getting-started/install
