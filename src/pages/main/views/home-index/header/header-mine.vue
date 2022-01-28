<script lang="ts">import { defineComponent } from 'vue'
import HeaderBase from '@/pages/main/components/header-base.vue'
import ShopcarEntry from '@/pages/main/components/shopcar-entry.vue'

export default defineComponent({
  name: 'HeaderMine',
  components: { HeaderBase, ShopcarEntry }
})
</script>

<template lang="pug">
header-base
  template(#center)
    span 我的账户
  template(#right)
    ShopcarEntry
</template>
