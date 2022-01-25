<script lang="ts">import { defineComponent } from 'vue'
import HeaderBase from '@/pages/main/components/header-base.vue'

export default defineComponent({
  name: 'HeaderBrand',
  components: { HeaderBase }
})
</script>

<template lang="pug">
header-base
  template(#center)
    span 品牌
  template(#right)
    span.m-r-10 搜索
    span 购物车
</template>
