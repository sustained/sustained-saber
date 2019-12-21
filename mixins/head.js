export default {
  head() {
    return {
      title: `${this.page.title} - ${this.$siteConfig.title}`,
      meta: [
        {
          name: "keywords",
          content: this.page.keywords
            ? this.page.keywords
            : this.$siteConfig.keywords,
        },
        {
          name: "description",
          content: this.page.description
            ? this.page.description
            : this.$siteConfig.description,
        },
      ],
    }
  },
}
