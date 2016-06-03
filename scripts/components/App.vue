<template lang="jade">
.app
  div.sction.toc
    ul
      li(li v-for="(index, tocItem) in headingList" track-by="$index").
        <div class="tocItem" @click="onTocItemClick(index)" v-bind:class="[index == currentIndex ?    'current': '']">
          {{tocItem}}
        </div>

  div.section.content
    div {{{content}}}
</template>

<style scoped>
.app {
  position: relative;
  padding: 20px;
}

.toc {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
}

.tocItem {
  cursor: pointer;
  color: #aaa;
  padding: 10px 5px;
}

.tocItem:hover {
  background: #f4f4f4;
}

.content {
  margin-left: 150px;

}

.current {
  color: red;
}
</style>

<script src="./AppSource.js">
</script>
