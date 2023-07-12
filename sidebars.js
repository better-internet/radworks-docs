const sidebars = {
  communitySidebar: [
    'community/community',
    'community/ecosystem',
    'community/our-story',
    {
      type: 'category',
      label: 'Governance',
      collapsed: false,
      items: [
        'community/governance-overview',
        {
          type: 'link',
          label: 'Governance Manual', // The link label
          href: 'https://app.radicle.xyz/seeds/seed.radworks.org/rad:zPUsinVa3gP71g6Dt47LP76phAWd/tree/main/manual.md', // The external URL
        },
        'community/obtaining-rad',
        'community/stay-up-to-date',
        'community/faq',
        
      ]
    },
    'community/code-of-conduct',
  ],
};

module.exports = sidebars;
