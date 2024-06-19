const sidebars = {
  communitySidebar: [
    'community/community',
    'community/ecosystem',
    'community/rad-token',
    {
      type: 'category',
      label: 'Governance',
      collapsed: false,
      items: [
        'community/governance-overview',
        {
          type: 'link',
          label: 'Governance Manual', // The link label
          href: 'https://github.com/radicle-foundation/radworks-governance/blob/main/manual.md', // The external URL
        },
        
        'community/stay-up-to-date',
        'community/faq',
      ]
    },
    'community/grant-program',
    'community/our-story',
    'community/code-of-conduct',
  ],
};

module.exports = sidebars;
