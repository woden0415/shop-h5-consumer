<script lang="ts">
import { defineComponent } from 'vue'
import HeaderBase from '../../components/header-base.vue'
import PageBack from '../../components/page-back.vue'
import ShopcarEntry from '../../components/shopcar-entry.vue'

export default defineComponent({
  name: 'GoodsLike',
  setup() { },
  components: { HeaderBase, PageBack, ShopcarEntry }
})
</script>

<template lang="pug">
header-base
  template(#left)
    PageBack
  template(#center)
    span() 心愿单
  template(#right)
    ShopcarEntry
</template>

<style lang="less" scoped></style>
