<template lang="jade">
.app {{count}}
p {{message}}
p hello Vue.js
</template>

<style scoped>
.app {
  color: red;
}
</style>

<script>
export default {
  data: function () {
    return {
      message: "hello world!!!",
      count: 50,
    }
  },

  ready() {
    setInterval(() => {
      this.count++
    }, 1000)
  }
}
</script>
