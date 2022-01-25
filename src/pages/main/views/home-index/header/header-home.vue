<script lang="ts">import { defineComponent } from 'vue'
import HeaderBase from '@/pages/main/components/header-base.vue'

export default defineComponent({
  name: 'HeaderHome',
  components: { HeaderBase }
})
</script>

<template lang="pug">
header-base
  template(#left)
    span 性别切换
  template(#center)
    span NET-A-PORTER
  template(#right)
    span 搜索
    span 购物车
</template>
