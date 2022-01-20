<script lang="ts">
import { defineComponent } from 'vue'
import FooterTabbar from '../components/footer-tabbar.vue'

export default defineComponent({
  name: 'HomeIndex',
  components: { FooterTabbar },
  setup() {}
})
</script>

<template lang="pug">
layout-frame
  template(#header)
    h1 顶部栏
  template(#body)
    div 主题内容
  template(#footer)
    footer-tabbar

</template>
