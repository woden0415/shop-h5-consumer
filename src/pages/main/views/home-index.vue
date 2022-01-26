<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useHomeIndexStore } from '../store/modules/homeIndex'
import FooterTabbar from '../components/footer-tabbar.vue'
import HeaderEntry from './home-index/header/header-entry.vue'
import TabEntry from './home-index/tab/tab-entry.vue'

export default defineComponent({
  name: 'HomeIndex',
  components: { FooterTabbar, HeaderEntry, TabEntry },
  setup() {
    const { _getTabbarName } = useHomeIndexStore()
    const currentTab = computed(() => _getTabbarName())
    console.log('currentTab :>> ', currentTab)

    return { currentTab }
  }
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
