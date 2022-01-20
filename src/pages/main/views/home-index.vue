<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import FooterTabbar from '../components/footer-tabbar.vue'
import { tabbarName } from '../composables/homeIndex'

// @todo 共享菜单底部选项数据
export default defineComponent({
  name: 'HomeIndex',
  components: { FooterTabbar },
  setup() {
    const state = reactive({
      currentTab: tabbarName.value
    })
    return {...toRefs(state)}
  }
})
</script>

<template lang="pug">
layout-frame
  template(#header)
    h1 顶部栏
  template(#body)
    div 主题内容 {{currentTab}}
  template(#footer)
    footer-tabbar

</template>
