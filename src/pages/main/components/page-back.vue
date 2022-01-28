<script lang="ts">
import { defineComponent } from 'vue'
import pageRouter from '../router/navigator'

export default defineComponent({
  name: 'PageBack',
  setup() {
    const goBack = () => {
      pageRouter.back()
    }
    return { goBack }
  }
})
</script>

<template lang="pug">
div.page-back_wrapper(@click="goBack")
  van-icon(name="arrow-left" size="18px")
</template>

<style lang="less" scoped></style>
