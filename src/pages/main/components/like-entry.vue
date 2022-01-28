<script lang="ts">
import { defineComponent } from 'vue'
import pageRouter from '../router/navigator'

export default defineComponent({
  name: 'LikeEntry',
  setup() {
    const likeHandler = () => {
      pageRouter.push({ name: 'like' })
    }

    return {
      likeHandler
    }
  }
})
</script>

<template lang="pug">
div.like-entry_wrapper(@click="likeHandler")
  van-icon(name="star-o" size="18px")
</template>

<style lang="less" scoped></style>
