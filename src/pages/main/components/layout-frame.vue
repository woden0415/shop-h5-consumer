<script lang="ts">
import { defineComponent } from "vue";
  export default defineComponent({
    name: 'LayoutFrame',
    setup(){}
  })
</script>
<template lang="pug">
div.layout-frame_wrapper()
  div.layout-header_slot()
    slot(name="header")
  div.layout-body_slot()
    slot(name="body")
  div.layout-footer_slot()
    slot(name="footer")
</template>

<style lang="less" scoped>
.layout-frame_wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.layout-body_slot {
  flex: 1;
  background-color: aliceblue;
}
</style>