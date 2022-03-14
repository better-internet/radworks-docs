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
  organizationName: 'radicle-dev', // Usually your GitHub org/user name.
  projectName: 'radicle-docs', // Usually your repo name.
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/radicle-dev/radicle-docs/',
        },
        // theme: {
        //   customCss: require.resolve('./src/css/custom.css'),
        // },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: '',
        logo: {
          alt: 'Radicle',
          src: 'img/radicle.svg',
          href: '/docs/what-is-radicle',
          target: '_self',
          width: 128,
          height: 87
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'what-is-radicle',
          //   position: 'left',
          //   label: 'What is Radicle?',
          // },
          // {
          //   type: 'doc',
          //   docId: 'getting-started',
          //   position: 'left',
          //   label: 'Getting started',
          // },
          {
            href: 'https://github.com/radicle-dev/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'What is Radicle?',
                to: '/docs/what-is-radicle',
              },
              {
                label: 'Getting started',
                to: '/docs/getting-started'
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Forum',
                href: 'https://radicle.community/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/radicle',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/radicle-dev/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Radicle Team <dev@radicle.xyz> and contributors.`,
      },
      algolia: {
        // The application ID provided by Algolia
        appId: 'YOUR_APP_ID',

        // Public API key: it is safe to commit it
        apiKey: '8bd6e28f1096b67612c18dbc3ba55438',

        indexName: 'radicle',

        // Optional: see doc section below
        contextualSearch: true,

        // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
        externalUrlRegex: 'external\\.com|domain\\.com',

        // Optional: Algolia search parameters
        searchParameters: {},

        // Optional: path for search page that enabled by default (`false` to disable it)
        searchPagePath: 'search',

        //... other Algolia params
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;


// module.exports = {
//   // ...
//   presets: [
//     [
//       '@docusaurus/preset-classic',
//       {
//         docs: {
//           // Docs folder path relative to website dir.
//           path: '../docs',
//           // Sidebars file relative to website dir.
//           sidebarPath: require.resolve('./sidebars.json'),
//         },
//         // ...
//       },
//     ],
//   ],
//   themeConfig: {
//     navbar: {
//       title: 'Docusaurus',
//       logo: {
//         alt: 'Radicle',
//         src: 'img/radicle.svg',
//       },
//       items: [],
//     },
//     // ...
//   },
// };