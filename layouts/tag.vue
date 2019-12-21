<template>
  <div id="app">
    <Header />

    <div id="content">
      <slot #default />
    </div>
  </div>
</template>

<script>
import head from "@/mixins/head"
import Header from "@/components/Header"

export default {
  props: ["page"],
  mixins: ["head"],
  components: { Header },
}
</script>
