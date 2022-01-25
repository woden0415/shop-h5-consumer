<script lang="ts">import { defineComponent } from 'vue'
import HeaderBase from '@/pages/main/components/header-base.vue'

export default defineComponent({
  name: 'HeaderMagazine',
  components: { HeaderBase }
})
</script>

<template lang="pug">
header-base
  template(#left)
    span 性别切换
  template(#center)
    span 杂志
  template(#right)
    span 购物车
</template>
