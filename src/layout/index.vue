<template>
  <div class="container">
    <top-tab/>
    <content/>
    <bootom/>
  </div>
</template>

<script setup> 
import topTab from "./components/topTab.vue"
import content from "./components/content.vue"
import bootom from "./components/footer.vue"
</script>

<style scoped>
.container{
    /* position: relative;
    display: flex; */

    width: 100%;
    height: 100%;
}
</style>