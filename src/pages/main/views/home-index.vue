<script lang="ts">
import { computed, defineComponent } from 'vue'
import FooterTabbar from '../components/footer-tabbar.vue'
import { useHomeIndexStore } from '../store/modules/homeIndex'
import HeaderEntry from './home-index/header/header-entry.vue'

export default defineComponent({
  name: 'HomeIndex',
  components: { FooterTabbar, HeaderEntry },
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
    router-view(v-slot="{ Component, route  }")
      transition(:name="route.meta.transition" mode="out-in")
        component(:is="Component")
  template(#footer)
    footer-tabbar

</template>
