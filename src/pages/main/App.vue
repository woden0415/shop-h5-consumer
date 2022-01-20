<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  name: 'App',
  setup(){
    
   }
})
</script>

<template lang="pug">
router-view(v-slot="{ Component, route  }")
  transition(:name="route.meta.transition" mode="out-in")
    component(:is="Component")
</template>

<style lang="less">
@import "./assets/styles/page-transition.less";
</style>