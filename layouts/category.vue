<template>
  <div id="app">
    <Header />

    <ul>
      <li v-for="post in page.posts" :key="post.permalink">
        <a :href="post.permalink">
          {{ post.title }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import head from "@/mixins/head"
import Header from "@/components/Header"

// export const data = {
//   injectAllPosts: true,
// }

export default {
  props: ["page"],
  mixins: ["head"],
  components: { Header },
  mounted() {
    console.log(this.page)
  },
}
</script>
