<script lang="ts">
import { defineComponent } from 'vue'
import pageRouter from '../router/navigator'

export default defineComponent({
  name: 'ShopcarEntry',
  setup() {
    const shopHandler = () => {
      pageRouter.push({ name: 'shopcar' })
    }

    return {
      shopHandler
    }
  }
})
</script>

<template lang="pug">
div.shopcar-entry_wrapper
  van-icon(name="shopping-cart-o" @click="shopHandler" size="18px")
</template>

<style lang="less" scoped></style>
