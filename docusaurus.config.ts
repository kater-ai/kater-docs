import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Kater.ai Documentation Portal',
  tagline: 'Turn non-technical business experts into data analytics leads.',
  favicon: 'img/Favicon_kater_docs.png',

  // Set the production url of your site here
  url: 'https://docs.kater.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'doc',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/kater-ai/kater-docs/',
        },
        blog: {
          showReadingTime: true,
          blogTitle: 'The Kater Kafé',
          blogDescription: 'Where all Katerers have coffee and talk about everything data-related',
          postsPerPage: 'ALL',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    imageZoom: {
      // CSS selector to apply the plugin to, defaults to '.markdown img'
      selector: '.markdown img',
      // Optional medium-zoom options
      // see: https://www.npmjs.com/package/medium-zoom#options
      options: {
        margin: 24,
        background: '#001219',
        scrollOffset: 0,
        container: '#zoom-container',
        template: '#zoom-template',
      },
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    // Replace with your project's social card
    image: 'img/Kater-Social-Card.png',
    navbar: {
      logo: {
        alt: 'Kater Logo',
        src: 'img/kater-docs.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guides',
        },
        { to: '/blog', label: 'Kater Kafé', position: 'left' },
      ],
    },
    footer: {
      logo: {
        alt: 'Kater Logo',
        src: 'img/kater-docs.png',
        width: 200
      },
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Kater.AI, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
