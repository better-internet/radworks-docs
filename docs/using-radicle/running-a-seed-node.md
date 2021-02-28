---
id: running-a-seed-node
title: Running a seed node
---

To improve data availability of Radicle's peer-to-peer network, participants in
the network can choose to act as [seeds][se]. Seeds are always-on nodes that
automatically track discovered projects, thereby increasing the availability of
these projects on the network. Conceptually, they are similar to pubs in [Secure
Scuttlebutt][ss].

> Running a seed node is for contributing to the availability
> and redundancy of Radicle's peer-to-peer network. Running a seed node is not
> related to token incentives at this time. For more on how the Radicle token
> works, please refer to the [Introducing RAD][ir] post.

To build and run a seed node, you'll have to install some prerequisites on your
machine first:

  - [Rust toolchain][ru], you'll need Rust **nightly**, easiest way to set it
    up is via [rustup][rp]
  - [yarn][ya]

Next, clone and set up the `radicle-bins` repository:

    git clone https://github.com/radicle-dev/radicle-bins.git
    cd radicle-bins

Install UI depependencies and build the UI:

    (cd seed/ui && yarn && yarn build)

Next, let's set up a directory where the seed can store its data. This is
important in case you are running a Radicle Upstream client on the same machine.
The default path for both Radicle Upstream and the seed node would otherwise be
the same and could result in unexpected behaviour.

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
`seed.example.com. A 1.2.3.4`.

Now you're ready to start the seed node. Let's configure it to listen on ports
12345 and 80 on all interfaces, the private key is supplied via `STDIN`:

    cargo run -p radicle-seed-node --release -- \
      --root ~/.radicle-seed \
      --peer-listen 0.0.0.0:12345 \
      --http-listen 0.0.0.0:80 \
      --name "seedling" \
      --public-addr "seed.example.com:12345" \
      --assets-path seed/ui/public \
      < ~/.radicle-seed/secret.key

**Note:** we configured the seed to use `~/.radicle-seed` as its data directory
with the `--root` option. Remember to adjust `--public-addr` and `--name` to
your setup. `--name` will be shown as a heading and `--public-addr` will appear
in the seed address as `<SEED-ID>@<PUBLIC-ADDR>:<PORT>`.

<details>
  <summary>
    This is what you'll see in the terminal when starting the seed node:
  </summary>

    $ cargo run -p radicle-seed-node --release -- \
      --root ~/.radicle-seed \
      --peer-listen 0.0.0.0:12345 \
      --http-listen 0.0.0.0:80 \
      --name "seedling" \
      --public-addr "seed.example.com:12345" \
      --assets-path seed/ui/public \
      < ~/.radicle-seed/secret.key
        Finished release [optimized] target(s) in 0.19s
         Running `target/release/radicle-seed-node --root /Users/rudolfs/.radicle-seed --peer-listen '0.0.0.0:12345' --http-listen '0.0.0.0:80' --name seedling --public-addr 'seed.example.com:12345' --assets-path seed/ui/public`
    Nov 12 10:48:03.758  INFO radicle_seed: Initializing tracker to track everything..
    Nov 12 10:48:03.758  INFO Protocol::run{local.id=hyy5s7ysg96fqa91gbe7h38yddh4mkokft7y4htt8szt9e17sxoe3h local.addr=0.0.0.0:12345}: librad::net::protocol: Listening
    Nov 12 10:48:03.760  INFO Server::run{addr=0.0.0.0:80}: warp::server: listening on http://0.0.0.0:80
    Nov 12 10:48:03.760  INFO radicle_seed_node::frontend: Listening(0.0.0.0:12345)
</details>

Now point your browser to the address you set instead of http://seed.example.com. This is the seed node dashboard.

![Seed node UI][sn]

For Upstream clients to connect to your new seed, you'll need to share the seed
address. This address can be found in the UI under the name of the seed. In our
example the address is:

    hyy5s7ysg96fqa91gbe7h38yddh4mkokft7y4htt8szt9e17sxoe3h@seed.example.com:12345

Have a look at the [Adding a custom seed node][ad] section for more information
on how to set up the new seed in Upstream.

### Common issues

When trying to start the seed, you may run into a few common issues:

1. `error: linker 'cc' not found`

You don't have a C compiler installed. In debian/ubuntu try `apt-get install build-essential`. In redhat-based systems try `yum install gcc`.

2. `error binding to 0.0.0.0:80 (...) Permission denied`

Ports below 1024 are often reserved for administrator accounts. You can change the `http-listen` parameter to a higher port, or run behind a proxy.

3. `Address already in use`

Another services is already listening on one of the requested ports. Either use a different port for radicle, or find the conflicting service using tools like `netstat` or `lsof`.


[ad]: using-radicle/adding-a-seed-node.md
[se]: understanding-radicle/glossary.md/#seed

[sn]: /img/seed-node-ui.png

[rp]: https://rustup.rs
[ru]: https://www.rust-lang.org/tools/install
[ss]: https://scuttlebutt.nz
[ya]: https://yarnpkg.com/getting-started/install
[ir]: https://radicle.xyz/blog/introducing-rad.html
