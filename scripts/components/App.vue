<template lang="jade">
.app
  ul
    li(v-for="h in headingList") {{h}}
  div {{{content}}}
</template>

<style scoped>
.app {
  padding: 20px;
}
</style>

<script src="./AppSource.js">
</script>
