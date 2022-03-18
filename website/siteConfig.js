// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: "Radicle docs",
  tagline: "A peer-to-peer stack for building software together.",
  url: "https://docs.radicle.xyz",
  baseUrl: "/",
  projectName: "radicle-docs",
  organizationName: "radicle-dev",
  headerLinks: [],
  headerIcon: "img/radicle.svg",
  favicon: "img/favicon.ico",
  colors: {
    primaryColor: "#5555ff",
    secondaryColor: "#ff55ff",
  },
  highlight: {
    theme: "default",
  },
  scripts: ["https://buttons.github.io/buttons.js"],
  onPageNav: "separate",
  cleanUrl: true,
  ogImage: "img/undraw_online.svg",
  twitterImage: "img/undraw_tweetstorm.svg",
  algolia: {
    apiKey: "8bd6e28f1096b67612c18dbc3ba55438",
    indexName: "radicle",
  },
};

module.exports = siteConfig;
