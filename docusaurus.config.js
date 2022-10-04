// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Common UI Toolkit',
  tagline: 'Best Flutter UI',
  url: 'https://common-ui-toolkit.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'hassanannajjar', // Usually your GitHub org/user name.
  projectName: 'common-ui-toolkit-documentation', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: 'en',
  //   locales: ['en', 'ar'],
  // },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        editUrl:
            'https://github.com/hassanannajjar/common-ui-toolkit-documentation/tree/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/hassanannajjar/common-ui-toolkit-documentation/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
      },
      // algolia :{},
      navbar: {
        title: 'Common UI Toolkit',
        hideOnScroll: true,
        logo: {
          alt: 'Common UI Toolkit Logo',
          src: 'img/cut.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'index',
            position: 'left',
            label: 'Docs',
          },  
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/hassanannajjar/common_ui_toolkit',
            label: 'GitHub',
            position: 'right',
          },
          {
            type: 'docsVersionDropdown',
          },
          // {
          //   position: 'right',
          //   type: 'localeDropdown',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Components',
                to: '/docs/category/components',
              },
              {
                label: 'Styles',
                to: '/docs/category/styles',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/common-ui-toolkit',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/M7vbSnX3Xd',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/hassanannajjar/common_ui_toolkit',
              },
            ],
          },
          {
            title: 'Built with',
            items: [
              {
                label: 'Docusaurus',
                href: 'https://docusaurus.io/',
              },
              {
                label: 'Netlify',
                href: 'https://www.netlify.com/',
              },
            ],
          },
        ],
      },
      prism: {
        theme: darkCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
