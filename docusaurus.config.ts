import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  trailingSlash: true,
  title: 'Kater Documentation',
  tagline: 'Build your company\'s data blueprint. A powerful way to automate data workflows and generate insights.',
  favicon: 'img/favicon-docs-rounded.png',
  plugins: [require.resolve("docusaurus-plugin-image-zoom")],

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
          routeBasePath: 'docs',
          include: ["**/*.md"],
          sidebarPath: './sidebars.ts',
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
    algolia: {
      // The application ID provided by Algolia
      appId: '38BWQ7QUKE',

      // Public API key: it is safe to commit it
      apiKey: 'ac9011af37bc27e95d9f4d3248ec9142',

      indexName: 'docs',

      // Optional: see doc section below
      contextualSearch: true,

      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',

      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },

      // Optional: Algolia search parameters
      searchParameters: {},

      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,
    },
    zoom: {
      // CSS selector to apply the plugin to, defaults to '.markdown img'
      selector: 'img:not(.navbar img):not(.footer img)',
      background: {
        light: 'rgb(0 18 25)',
        dark: 'rgb(0 18 25)',
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
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
          position: 'left',
          label: 'Docs',
          to: '/docs',
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
