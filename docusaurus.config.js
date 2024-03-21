// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Radworks Documentation',
  tagline: 'Learn more about how Radworks funds new, resilient, permissionless technologies to cultivate internet freedom.',
  url: 'https://docs.radworks.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'radicle-dev',
  projectName: 'radicle-docs',
  trailingSlash: false,
  scripts: [
    {src: 'https://plausible.io/js/script.js', defer: true, 'data-domain': 'docs.radworks.org'}
  ],
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
            to: '/',
            from: [
              '/community/calls',
              '/community/get-started',
              '/community/manual-overview',
              '/community/transition-dao',
              '/community/treasury',
              '/get-involved/community',
              '/migrate-github-radicle',
              '/get-started',
              '/troubleshooting',
              '/understanding-radicle/faq',
              '/understanding-radicle/glossary',
              '/understanding-radicle/how-radicle-works',
              '/understanding-radicle/radicle-versus-github-gitlab',
              '/using-radicle/clone',
              '/using-radicle/collaboration',
              '/using-radicle/create',
              '/using-radicle/identity',
              '/using-radicle/issues',
              '/using-radicle/push',
              '/using-radicle/track-review-merge',
              '/using-radicle/view-share',
            ]
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
          editUrl: 'https://github.com/radicle-dev/radicle-docs/blob/main/',
          showLastUpdateTime: true,
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
      image: 'img/radworks_meta.png',
      navbar: {
        title: '',
        logo: {
          alt: 'Radicle',
          src: 'img/radworks_logo.png',
          srcDark: 'img/radworks_logo.png',
          href: '/',
          target: '_self',
          width: 48,
          height: 48
        },
        items: [
          
        ],
      },
      footer: {
        style: 'light',
        copyright: `Copyright © ${new Date().getFullYear()} Radworks <dev@radicle.xyz> and contributors.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
