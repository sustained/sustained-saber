<template>
  <div>
    <h2>Blog</h2>

    <slot #default />

    <ul>
      <li v-for="post in page.posts" :key="post.permalink">
        <a :href="post.permalink">
          {{ post.title }}
        </a>
      </li>
    </ul>

    <a :href="page.pagination.prevLink" v-if="page.pagination.hasPrev">
      ← Prev Page
    </a>

    <a :href="page.pagination.nextLink" v-if="page.pagination.hasNext">
      Next Page →
    </a>

    <h2>Tags</h2>

    <saber-link
      v-for="tag in tags"
      :key="`tag-${tag}`"
      :to="`/blog/tags/${tag}`"
    >
      {{ tag }}
    </saber-link>

    <h2>Categories</h2>

    <saber-link
      v-for="category in categories"
      :key="`cat-${category}`"
      :to="`/blog/categories/${category}`"
    >
      {{ category }}
    </saber-link>
  </div>
</template>

<script>
import head from "@/mixins/head"
import Header from "@/components/Header"

export default {
  props: ["page"],
  mixins: ["head"],
  components: { Header },
  mounted() {
    console.log(this.page)
  },
  computed: {
    tags() {
      return Array.from(
        new Set(
          this.page.posts.reduce((tags, page) => {
            tags.push(...(page.tags || []))
            return tags
          }, [])
        )
      )
    },
    categories() {
      return Array.from(
        new Set(
          this.page.posts.reduce((cats, page) => {
            cats.push(...(page.categories || []))
            return cats
          }, [])
        )
      )
    },
  },
}
</script>
