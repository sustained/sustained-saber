<template>
  <div>test: {{ $site }}</div>
</template>

<script>
export default {
  mounted() {
    console.log(this.$site, this.page)
  },
}
</script>
