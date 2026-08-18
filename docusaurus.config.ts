import type { Config, Plugin } from "@docusaurus/types";
import tailwindcss from "@tailwindcss/postcss";
import path from "node:path";
import { fileURLToPath } from "node:url";

const siteDir = path.dirname(fileURLToPath(import.meta.url));

function niomSourceAliases(): Plugin {
  return {
    name: "niom-source-aliases",
    configureWebpack(config) {
      const configuredAliases = config.resolve?.alias;
      const existingAliases = Array.isArray(configuredAliases)
        ? Object.fromEntries(
            configuredAliases.map(({ name, alias }) => [name, alias]),
          )
        : (configuredAliases ?? {});

      return {
        mergeStrategy: {
          "resolve.alias": "replace" as const,
        },
        resolve: {
          alias: {
            ...existingAliases,
            "@components": path.resolve(siteDir, "src/components"),
            "@atoms": path.resolve(siteDir, "src/components/atoms"),
            "@molecules": path.resolve(siteDir, "src/components/molecules"),
            "@organisms": path.resolve(siteDir, "src/components/organisms"),
            "@hooks": path.resolve(siteDir, "src/hooks"),
            "@utils": path.resolve(siteDir, "src/utils"),
            "@media": path.resolve(siteDir, "src/media"),
            "@type": path.resolve(siteDir, "src/type"),
          },
        },
        module: {
          rules: [
            {
              test: /\.js$/,
              include: path.resolve(siteDir, ".docusaurus"),
              type: "javascript/auto",
            },
          ],
        },
      };
    },
    configurePostCss(postCssOptions: { plugins: unknown[] }) {
      postCssOptions.plugins.push(tailwindcss());
      return postCssOptions;
    },
  };
}

const config: Config = {
  title: "Niom Parts UI",
  tagline: "React components built for practical product interfaces.",
  favicon: "img/favicon.ico",
  url: "https://niom-ui.vercel.app",
  baseUrl: "/",
  organizationName: "NiomParts",
  projectName: "niomUI",
  trailingSlash: false,
  onBrokenLinks: "throw",
  onBrokenAnchors: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
    localeConfigs: {
      en: {
        label: "EN",
        htmlLang: "en",
      },
      fr: {
        label: "FR",
        htmlLang: "fr",
      },
    },
  },
  markdown: {
    mermaid: false,
  },
  themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    niomSourceAliases,
    [
      "@cmfcmf/docusaurus-search-local",
      {
        indexDocs: true,
        indexDocSidebarParentCategories: 2,
        includeParentCategoriesInPageTitle: true,
        indexBlog: false,
        indexPages: true,
        language: ["en", "fr"],
        maxSearchResults: 8,
      },
    ],
  ],
  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "docs",
          sidebarPath: "./docs/sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/docusaurus/styles.css",
        },
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "Niom Parts UI",
      hideOnScroll: false,
      items: [
        {
          to: "/docs/intro",
          label: "Docs",
          position: "right",
          activeBasePath: "/docs",
        },
        {
          href: "https://www.npmjs.com/package/niom-parts",
          label: "npm",
          position: "right",
        },
        {
          href: "https://github.com/NiomParts/niomUI",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
          className: "navbar-locale-switcher",
        },
      ],
    },
    liveCodeBlock: {
      playgroundPosition: "bottom",
    },
  },
};

export default config;
