// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Radicle Docs',
  tagline: 'A peer-to-peer stack for building software together.',
  url: 'https://docs.radicle.xyz',
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
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: '/understanding-radicle/how-radicle-works',
            from: '/docs/what-is-radicle.html'
          },
          {
            to: '/understanding-radicle/how-radicle-works',
            from: '/understanding-radicle/what-is-radicle'
          },
          {
            to: '/understanding-radicle/how-radicle-works',
            from: '/understanding-radicle/why-radicle'
          },
          {
            to: '/troubleshooting',
            from: '/understanding-radicle/troubleshooting'
          }
        ]
      }
    ]
  ],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
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
          src: 'img/favicon.svg',
          srcDark: 'img/favicon.svg',
          href: '/',
          target: '_self',
          width: 56,
          height: 48
        },
        items: [
          {
            href: 'https://radicle.xyz',
            label: 'Home',
            position: 'right',
          },
          {
            href: 'https://app.radicle.xyz',
            label: 'Browse Radicle',
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
