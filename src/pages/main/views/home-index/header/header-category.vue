<script lang="ts">import { defineComponent } from 'vue'
import HeaderBase from '@/pages/main/components/header-base.vue'
import SearchEntry from '@/pages/main/components/search-entry.vue'
import ShopcarEntry from '@/pages/main/components/shopcar-entry.vue'

export default defineComponent({
  name: 'HeaderCategory',
  components: { HeaderBase, SearchEntry, ShopcarEntry }
})
</script>

<template lang="pug">
header-base
  template(#center)
    span 分类
  template(#right)
    search-entry.m-r-10
    ShopcarEntry
</template>
