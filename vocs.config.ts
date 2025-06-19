import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'Radworks',
  logoUrl: {
    light: '/logo-light.svg',
    dark: '/logo-dark.svg',
  },
  sidebar: [
    {
      text: 'Introduction',
      link: '/',
    },
    {
      text: 'RAD Token',
      link: '/rad-token',
    },
    { 
      text: 'Governance', 
      collapsed: false, 
      items: [ 
        { 
          text: 'Overview', 
          link: '/governance/overview', 
        },
        { 
          text: 'Stay up to date', 
          link: '/governance/stay-up-to-date', 
        },
        { 
          text: 'FAQ', 
          link: '/governance/faq', 
        },
      ], 
    },
    {
      text: 'Code of Conduct',
      link: '/code-of-conduct',
    },
  ],
})
