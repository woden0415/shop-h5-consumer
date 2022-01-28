<script lang="ts">import { defineComponent } from 'vue'
import HeaderBase from '@/pages/main/components/header-base.vue'
import SearchEntry from '@/pages/main/components/search-entry.vue'
import ShopcarEntry from '@/pages/main/components/shopcar-entry.vue'

export default defineComponent({
  name: 'HeaderHome',
  components: { HeaderBase, SearchEntry, ShopcarEntry }
})
</script>

<template lang="pug">
header-base
  template(#left)
    span 性别切换
  template(#center)
    span NET-A-PORTER
  template(#right)
    search-entry.m-r-10
    ShopcarEntry
</template>
