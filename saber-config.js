// https://saber.land/docs/saber-config.html
module.exports = {
  siteConfig: {
    lang: "en-GB",
    title: "sustained.name",
    keywords: ["blog", "portfolio", "sustained"],
    description: "Blog and portfolio of sustained.",
  },
  permalinks: {
    post: "/blog/:year/:month/:day/:slug",
    page: "/:slug",
  },
  plugins: [
    {
      // https://github.com/saberland/saber/tree/master/packages/saber-plugin-prismjs#saber-plugin-prismjs
      resolve: "saber-plugin-prismjs",
    },
    {
      // https://github.com/saberland/saber/tree/master/packages/saber-plugin-query-posts#saber-plugin-query-posts
      resolve: "saber-plugin-query-posts",
      options: {
        perPage: 10,
        tagsMap: {
          js: "javascript",
          gamedev: "game-development",
          "game-dev": "game-development",
          webdev: "web-development",
          "web-dev": "web-development",
        },
        permalinks: {
          tag: "/blog/tags/:tag",
          category: "/blog/categories/:category",
        },
      },
    },
    {
      // https://github.com/saberland/saber/tree/master/packages/saber-plugin-search#saber-plugin-search
      resolve: "saber-plugin-search",
    },
  ],
  // locales: {
  //   "/sv": {
  //     siteConfig: {
  //       lang: "sv-SE",
  //     },
  //   },
  //   "/de": {
  //     siteConfig: {
  //       lang: "de-DE",
  //     },
  //   },
  // },
}
