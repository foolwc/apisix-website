module.exports = {
  title: "Apache APISIX® --  Cloud-Native API Gateway",
  tagline:
    "Apache APISIX is a dynamic, real-time, high-performance Cloud-Native API gateway, based on the Nginx library and etcd.",
  url: "https://apisix.apache.org/",
  baseUrl: "/",
  organizationName: "Apache",
  projectName: "apisix-website",
  favicon: "img/favicon.png",
  customFields: {
    tagline2:
      "Apache APISIX software provides rich traffic management features such as load balancing, dynamic upstream, canary release, circuit breaking, authentication, observability, and more.",
    showcases: require("./static/data/showcases.json"),
    events: require("./static/data/events.json"),
    repoUrl: "https://github.com/apache/apisix",
    docsUrl: "",
    docs: [
      {
        name: "APISIX®",
        nameInParamCase: "apisix",
        description: "A dynamic, real-time, high-performance API gateway.",
        shape: "triangle",
        color: "#e8433e",
        githubRepo: "apache/apisix",
        version: "2.8",
        releaseDate: "2021-07-27",
        firstDocPath: "/getting-started",
      },
      {
        name: "APISIX® Dashboard",
        nameInParamCase: "dashboard",
        description:
          "Designed to make it as easy as possible for users to operate Apache APISIX through a frontend interface.",
        shape: "square",
        color: "#10B981",
        githubRepo: "apache/apisix-dashboard",
        version: "2.7.1",
        releaseDate: "2021-08-15",
        firstDocPath: "/USER_GUIDE",
      },
      {
        name: "APISIX® Ingress Controller",
        nameInParamCase: "ingress-controller",
        description: "An Apache APISIX control plane component.",
        shape: "hexagon",
        color: "#2563EB",
        githubRepo: "apache/apisix-ingress-controller",
        version: "1.2.0",
        releaseDate: "2021-08-15",
        firstDocPath: "/getting-started",
      },
      {
        name: "APISIX® Helm Charts",
        nameInParamCase: "helm-chart",
        description: "An Apache APISIX Helm Charts provide the installation of Apache APISIX components for kubernetes.",
        shape: "pentagon",
        color: "#C71585",
        githubRepo: "apache/apisix-helm-chart",
        version: "0.4.0",
        releaseDate: "2021-03-12",
        firstDocPath: "/apisix",
      },
      {
        name: "APISIX® Docker",
        nameInParamCase: "docker",
        description: "Docker tooling for Apache APISIX.",
        shape: "diamond",
        color: "#FFD700",
        githubRepo: "apache/apisix-docker",
        version: "1.0.0",
        releaseDate: "2020-12-1",
        firstDocPath: "/build",
      },
      {
        name: "APISIX® Java Plugin Runner",
        nameInParamCase: "java-plugin-runner",
        description: "Runs Apache APISIX plugins written in Java. Implemented as a sidecar that accompanies Apache APISIX.",
        shape: "star",
        color: "#FB9300",
        githubRepo: "apache/apisix-java-plugin-runner",
        version: "0.1.0",
        releaseDate: "2021-07-09",
        firstDocPath: "/development",
      },
      {
        name: "APISIX® Go Plugin Runner",
        nameInParamCase: "go-plugin-runner",
        description: "Runs Apache APISIX plugins written in Go. Implemented as a sidecar that accompanies Apache APISIX.",
        shape: "octagon",
        color: "#3B14A7",
        githubRepo: "apache/apisix-go-plugin-runner",
        version: "0.1.0",
        releaseDate: "2021-07-15",
        firstDocPath: "/getting-started",
      }
    ],
    downloads: [
      {
        name: "APISIX®",
        nameInParamCase: "apisix",
        description: "A dynamic, real-time, high-performance API gateway.",
        shape: "triangle",
        color: "#e8433e",
        githubRepo: "apache/apisix",
        githubBranch: "master",
        downloadPath: "apisix/2.8/apache-apisix-2.8-src",
        version: "2.8",
        releaseDate: "2021-07-27",
        firstDocPath: "/getting-started",
      },
      {
        name: "APISIX® Dashboard",
        nameInParamCase: "dashboard",
        description:
          "Designed to make it as easy as possible for users to operate Apache APISIX through a frontend interface.",
        shape: "square",
        color: "#10B981",
        githubRepo: "apache/apisix-dashboard",
        githubBranch: "master",
        downloadPath: "apisix/dashboard/2.7.1/apache-apisix-dashboard-2.7.1-src",
        version: "2.7.1",
        releaseDate: "2021-08-15",
        firstDocPath: "/USER_GUIDE",
      },
      {
        name: "APISIX® Ingress Controller",
        nameInParamCase: "ingress-controller",
        description: "An Apache APISIX control plane component.",
        shape: "hexagon",
        color: "#2563EB",
        githubRepo: "apache/apisix-ingress-controller",
        githubBranch: "master",
        downloadPath: "apisix/ingress-controller/1.2.0/apache-apisix-ingress-controller-1.2.0-src",
        version: "1.2.0",
        releaseDate: "2021-08-15",
        firstDocPath: "/getting-started",
      },
      {
        name: "APISIX® Java Plugin Runner",
        nameInParamCase: "java-plugin-runner",
        description: "Runs Apache APISIX plugins written in Java. Implemented as a sidecar that accompanies Apache APISIX.",
        shape: "star",
        color: "#FB9300",
        githubRepo: "apache/apisix-java-plugin-runner",
        githubBranch: "main",
        downloadPath: "apisix/java-plugin-runner/0.1/apisix-java-plugin-runner-0.1.0-src",
        version: "0.1.0",
        releaseDate: "2021-07-09",
        firstDocPath: "/development",
      },
      {
        name: "APISIX® Go Plugin Runner",
        nameInParamCase: "go-plugin-runner",
        description: "Runs Apache APISIX plugins written in Go. Implemented as a sidecar that accompanies Apache APISIX.",
        shape: "octagon",
        color: "#3B14A7",
        githubRepo: "apache/apisix-go-plugin-runner",
        githubBranch: "master",
        downloadPath: "apisix/go-plugin-runner/0.1.0/apisix-go-plugin-runner-0.1.0-src",
        version: "0.1.0",
        releaseDate: "2021-07-15",
        firstDocPath: "/getting-started",
      }
    ],

    team: require("./static/data/team.json"),
    plugins: require("./static/data/plugin.json"),

    allRepos: [
      "apache/apisix",
      "apache/apisix-dashboard",
      "apache/apisix-website",
      "apache/apisix-docker",
      "apache/apisix-ingress-controller",
      "apache/apisix-helm-chart",
      "apache/apisix-control-plane",
      "apache/apisix-java-plugin-runner",
      "apache/apisix-go-plugin-runner"
    ],
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "zh"],
    localeConfigs: {
      en: {
        label: "English",
      },
      zh: {
        label: "简体中文",
      },
    },
  },
  onBrokenLinks: "log",
  onBrokenMarkdownLinks: "log",
  noIndex: false,
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          path: "docs/general",
          routeBasePath: "/docs/general",
          sidebarPath: require.resolve("./docs/general/sidebars.json"),
          editUrl: function ({
            locale,
            version,
            versionDocsDirPath,
            docPath,
            permalink,
          }) {
            return `https://github.com/apache/apisix-website/edit/master/website/docs/general/${docPath}`;
          },
        },
        blog: {
          path: "blog",
        },
        theme: {
          customCss: "../src/css/customTheme.css",
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
  ],
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "events",
        routeBasePath: "events",
        path: "events",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "releases",
        routeBasePath: "releases",
        path: "releases",
      },
    ],
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "articles",
        routeBasePath: "articles",
        path: "articles",
        blogSidebarCount: 0,
        blogTitle: "Article"
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-apisix",
        path: "docs/apisix",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        routeBasePath: "/docs/apisix",
        sidebarPath: require.resolve("./docs/apisix/sidebars.json"),
        editUrl: function ({
          locale,
          version,
          versionDocsDirPath,
          docPath,
          permalink,
        }) {
          return `https://github.com/apache/apisix/edit/master/docs/${locale}/latest/${docPath}`;
        },
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-apisix-dashboard",
        path: "docs/apisix-dashboard",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        routeBasePath: "/docs/dashboard",
        sidebarPath: require.resolve("./docs/apisix-dashboard/sidebars.json"),
        editUrl: function ({
          locale,
          version,
          versionDocsDirPath,
          docPath,
          permalink,
        }) {
          return `https://github.com/apache/apisix-dashboard/edit/master/docs/en/latest/${docPath}`;
        },
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-apisix-ingress-controller",
        path: "docs/apisix-ingress-controller",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        routeBasePath: "/docs/ingress-controller",
        sidebarPath: require.resolve(
          "./docs/apisix-ingress-controller/sidebars.json"
        ),
        editUrl: function ({
          locale,
          version,
          versionDocsDirPath,
          docPath,
          permalink,
        }) {
          return `https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/${docPath}`;
        },
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-apisix-helm-chart",
        path: "docs/apisix-helm-chart",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        routeBasePath: "/docs/helm-chart",
        sidebarPath: require.resolve("./docs/apisix-helm-chart/sidebars.json"),
        editUrl: function ({
          locale,
          version,
          versionDocsDirPath,
          docPath,
          permalink,
        }) {
          return `https://github.com/apache/apisix-helm-chart/edit/master/docs/en/latest/${docPath}`;
        },
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-apisix-docker",
        path: "docs/apisix-docker",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        routeBasePath: "/docs/docker",
        sidebarPath: require.resolve("./docs/apisix-docker/sidebars.json"),
        editUrl: function ({
          locale,
          version,
          versionDocsDirPath,
          docPath,
          permalink,
        }) {
          return `https://github.com/apache/apisix-docker/edit/master/docs/en/latest/${docPath}`;
        },
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-apisix-java-plugin-runner",
        path: "docs/apisix-java-plugin-runner",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        routeBasePath: "/docs/java-plugin-runner",
        sidebarPath: require.resolve("./docs/apisix-java-plugin-runner/sidebars.json"),
        editUrl: function ({
          locale,
          version,
          versionDocsDirPath,
          docPath,
          permalink,
        }) {
          return `https://github.com/apache/apisix-java-plugin-runner/edit/main/docs/en/latest/${docPath}`;
        },
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "docs-apisix-go-plugin-runner",
        path: "docs/apisix-go-plugin-runner",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        routeBasePath: "/docs/go-plugin-runner",
        sidebarPath: require.resolve("./docs/apisix-go-plugin-runner/sidebars.json"),
        editUrl: function ({
          locale,
          version,
          versionDocsDirPath,
          docPath,
          permalink,
        }) {
          return `https://github.com/apache/apisix-go-plugin-runner/edit/master/docs/en/latest/${docPath}`;
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      title: "Apache APISIX®",
      logo: {
        src: "img/logo2.svg",
      },
      items: [
        {
          label: "Docs",
          position: "right",
          to: "/docs",
          items: [
            {
              label: "Apache APISIX®️",
              to: "/docs/apisix/getting-started",
            },
            {
              label: "Apache APISIX®️ Dashboard",
              to: "/docs/dashboard/USER_GUIDE",
            },
            {
              label: "Apache APISIX®️ Ingress Controller",
              to: "/docs/ingress-controller/getting-started/",
            },
            {
              label: "Apache APISIX®️ Helm Charts",
              to: "/docs/helm-chart/apisix/",
            },
            {
              label: "Apache APISIX®️ Docker",
              to: "/docs/docker/build/",
            },
            {
              label: "Apache APISIX®️ Java Plugin Runner",
              to: "/docs/java-plugin-runner/development/"
            },
            {
              label: "Apache APISIX®️ Go Plugin Runner",
              to: "/docs/go-plugin-runner/getting-started/"
            },
            {
              label: "General",
              to: "/docs/general/security",
            },
          ],
        },
        {
          label: "FAQ",
          position: "right",
          items: [
            {
              label: "Apache APISIX®",
              to: "/docs/apisix/FAQ/",
            },
            {
              label: "Apache APISIX® Dashboard",
              to: "/docs/dashboard/FAQ/",
            },
            {
              label: "Apache APISIX® Ingress Controller",
              to: "/docs/ingress-controller/FAQ/",
            },
            {
              label: "Apache APISIX® Helm Chart",
              to: "/docs/helm-chart/FAQ/",
            },
          ]
        },
        {
          to: "/blog",
          label: "Blog",
          position: "right",
        },
        {
          to: "/downloads",
          label: "Downloads",
          position: "right",
        },
        {
          to: "/team",
          label: "Team",
          position: "right",
        },
        {
          label: "Resources",
          position: "right",
          items: [
            {
              to: "/plugins",
              label: "Plugin Hub",
            },
            {
              to: "/events",
              label: "Events",
            },
            {
              to: "/releases",
              label: "Releases",
            },
            {
              to: "/help",
              label: "Help",
            },
          ]
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    hideableSidebar: true,
    footer: {
      links: [
        {
          title: "ASF",
          items: [
            {
              label: "Foundation",
              to: "https://www.apache.org/",
            },
            {
              label: "License",
              to: "https://www.apache.org/licenses/",
            },
            {
              label: "Events",
              to: "https://www.apache.org/events/",
            },
            {
              label: "Security",
              to: "https://www.apache.org/security/",
            },
            {
              label: "Sponsorship",
              to: "https://www.apache.org/foundation/sponsorship.html",
            },
            {
              label: "Thanks",
              to: "https://www.apache.org/foundation/thanks.html",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub Issue Tracker",
              to: "https://github.com/apache/apisix/issues",
            },
            {
              label: "Slack",
              to: "https://join.slack.com/t/the-asf/shared_invite/zt-nggtva4i-hDCsW1S35MuZ2g_2DgVDGg",
            },
            {
              label: "Twitter",
              to: "https://twitter.com/ApacheAPISIX",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "https://apisix.apache.org/blog/",
            },
          ],
        },
      ],
      logo: {
        alt: "Apache Software Foundation",
        src: "img/asf_logo_wide_small.png",
        href: "https://www.apache.org/",
      },

      copyright:
        "Copyright © 2019-2021 The Apache Software Foundation. Apache APISIX, APISIX®, Apache, the Apache feather logo, and the Apache APISIX project logo are either registered trademarks or trademarks of the Apache Software Foundation.",
    },
    announcementBar: {
      id: 'query',
      backgroundColor: "#e8433e",
      textColor: 'white',
      content:
        '\u{1F914} Have queries regarding apache APISIX, Join slack channel to discuss them <a target="_blank" rel="noopener noreferrer" href="https://join.slack.com/t/the-asf/shared_invite/zt-nggtva4i-hDCsW1S35MuZ2g_2DgVDGg">join #apisix channel</a>! ⭐️',
    },
    prism: {
      theme: require('prism-react-renderer/themes/github'),
      darkTheme: require('prism-react-renderer/themes/dracula'),
      defaultLanguage: 'bash',
    },
    algolia: {
      apiKey: "287206c9872faf0e77b7c5228d4c3789",
      indexName: "apache_apisix",
      contextualSearch: true,
    },
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    image: 'img/favicon.png',
    metadatas: [
      {
        name: "description",
        content:
          "Apache APISIX is a dynamic, real-time, high-performance Cloud-Native API gateway, based on the Nginx library and etcd.",
      },
      {
        name: "robots",
        content: "index,follow"
      }
    ],
    gtag: {
      trackingID: "G-WQLBQL6GY3",
    },
  },
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap",
  ],
};
