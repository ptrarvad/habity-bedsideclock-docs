export default {
  title: "Habity Docs",
  base: '/habity-bedsideclock-docs/',
  appearance: 'auto',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Montserrat:wght@400;500;600&display=swap', rel: 'stylesheet' }]
  ],
  themeConfig: {
    logo: {
      light: 'https://habity.design/cdn/shop/files/habity_logo_black.png?v=1760530239',
      dark: 'https://habity.design/cdn/shop/files/habity_logo_white_edb2e4c5-9e72-4486-984c-17f819ff668c.png?v=1760530405'
    },
    logoLink: 'https://habity.design',
    siteTitle: false,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/Getting started/Welcome' },
      { text: 'habity.design ↗', link: 'https://habity.design', target: '_blank' }
    ],
    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Welcome', link: '/Getting started/Welcome' }
        ]
      },
      {
        text: 'Troubleshooting',
        items: [
          { text: 'Troubleshooting', link: '/Troubleshooting/Troubleshooting' }
        ]
      }
    ],
    footer: {
      message: 'Habity Bedsideclock Documentation',
      copyright: '© 2026 Habity ApS'
    }
  }
}