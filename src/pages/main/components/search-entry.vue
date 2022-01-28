<script lang="ts">
import { defineComponent } from 'vue'
import pageRouter from '../router/navigator'

export default defineComponent({
  name: 'SearchEntry',
  setup() {
    const searchHandler = () => {
      pageRouter.push({ name: 'search' })
    }

    return {
      searchHandler
    }
  }
})
</script>

<template lang="pug">
div.search-entry_wrapper
  van-icon(name="search" @click="searchHandler" size="18px")
</template>

<style lang="less" scoped></style>
