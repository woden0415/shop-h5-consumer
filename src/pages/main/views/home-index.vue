<script lang="ts">
import { computed, defineComponent } from 'vue'
import FooterTabbar from '../components/footer-tabbar.vue'
import { useHomeIndexStore } from '../store/modules/homeIndex'
import HeaderBase from '../components/header-base.vue'

export default defineComponent({
  name: 'HomeIndex',
  components: { FooterTabbar, HeaderBase },
  setup() {
    const { _getTabbarName } = useHomeIndexStore()
    const currentTab = computed(() => _getTabbarName())
    return { currentTab }
  }
})
</script>

<template lang="pug">
layout-frame
  template(#header)
    header-base
      template(#center) MR PORTER
  template(#body)
    router-view(v-slot="{ Component, route  }")
      transition(:name="route.meta.transition" mode="out-in")
        component(:is="Component")
  template(#footer)
    footer-tabbar

</template>
