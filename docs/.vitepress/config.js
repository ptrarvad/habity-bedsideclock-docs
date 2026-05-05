export default {
  title: "Habity Bedsideclock",
  base: '/habity-bedsideclock-docs/',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap', rel: 'stylesheet' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/Getting started/Welcome' }
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
    ]
  }
}