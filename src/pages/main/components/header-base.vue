<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'HeaderBase'
})
</script>

<template lang="pug">
div.header-basic_wrapper
  div.header-left_slot
    slot(name="left")
  div.header-center_slot
    slot(name="center")
  div.header-right_slot
    slot(name="right")
</template>

<style lang="less" scoped>
.header-basic_wrapper {
  display: flex;
  flex-direction: row;
  border-bottom: 4px solid #000;
  padding: 12px 0;
  margin: 0 14px;
}
.header-center_slot {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
</style>
