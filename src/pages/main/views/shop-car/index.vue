<script lang="ts">
import { defineComponent } from 'vue'
import HeaderBase from '../../components/header-base.vue'
import PageBack from '../../components/page-back.vue'
import LikeEntry from '../../components/like-entry.vue'

export default defineComponent({
  name: 'ShopCar',
  components: {
    HeaderBase, PageBack, LikeEntry
  },
  setup() {}
})
</script>

<template lang="pug">
header-base
  template(#left)
    PageBack
  template(#center)
    span() 购物袋
  template(#right)
    LikeEntry
</template>

<style lang="less" scoped></style>
