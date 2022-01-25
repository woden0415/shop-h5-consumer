<script lang="ts">import { defineComponent } from 'vue'
import HeaderBase from '@/pages/main/components/header-base.vue'

export default defineComponent({
  name: 'HeaderMine',
  components: { HeaderBase }
})
</script>

<template lang="pug">
header-base
  template(#center)
    span 我的账户
  template(#right)
    span 购物车
</template>
