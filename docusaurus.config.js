// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Radicle Docs',
  tagline: 'A peer-to-peer stack for building software together.',
  url: 'https://docs.radicle.xyz',
  // In the future, we'll change `baseUrl` to `/`, along with enabling
  // `routBasePath`, to resolve `docs.radicle.xyz` instead of
  // `docs.radicle.xyz/docs/`. We'll also need to enable some redirects at the
  // same time.
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'radicle-dev',
  projectName: 'radicle-docs',
  trailingSlash: false,
  plugins: [
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexBlog: false,
      },
    ],
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // We'll use `routeBasePath` eventually to remove the `/docs/` part of
          // the path for every document, but only when we're ready for some
          // redirects. 
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/radicle-dev/radicle-docs/blob/master/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/radicle_meta.png',
      navbar: {
        title: '',
        logo: {
          alt: 'Radicle',
          src: 'img/radicle-logo.svg',
          srcDark: 'img/radicle-logo-dark.svg',
          href: '/',
          target: '_self',
          width: 128,
          height: 87
        },
        items: [
          {
            href: 'https://github.com/radicle-dev/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} The Radicle Team <dev@radicle.xyz> and contributors.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
