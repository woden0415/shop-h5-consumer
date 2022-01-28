<script lang="ts">
import { defineComponent } from 'vue'
import FooterTabbar from '../../components/footer-tabbar.vue'
import HeaderEntry from './header/header-entry.vue'
import TabEntry from './tab/tab-entry.vue'

export default defineComponent({
  name: 'HomeIndex',
  components: { FooterTabbar, HeaderEntry, TabEntry },
  setup() {}
})
</script>

<template lang="pug">
layout-frame
  template(#header)
    header-entry
  template(#body)
    tab-entry
  template(#footer)
    footer-tabbar

</template>
