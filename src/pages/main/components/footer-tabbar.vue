<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";

export default defineComponent({
  name: 'FooterTabbar',
  setup(){
    const state = reactive({
      active: 0,
    })
    return { ...toRefs(state) }
  }
})
</script>
<template lang="pug">
div.wd-footer-tabbar_wrapper()
  van-tabbar(v-model="active")
    van-tabbar-item(icon="home-o") 标签
    van-tabbar-item(icon="search") 标签
    van-tabbar-item(icon="friends-o") 标签
    van-tabbar-item(icon="setting-o") 标签
</template>