<script lang="ts">
import TypeTabbarEnum from '@/pages/main/interfaces/interface.footer-tabbar'
import { useHomeIndexStore } from '@/pages/main/store/modules/homeIndex'
import {
  computed, defineComponent, reactive, toRefs, watchEffect
} from 'vue'
import TabMine from './tab-mine.vue'
import TabCategory from './tab-category.vue'
import TabHome from './tab-home.vue'
import TabMagazine from './tab-magazine.vue'
import TabBrand from './tab-brand.vue'

export default defineComponent({
  name: 'TabEntry',
  setup() {
    const { _getTabbarName } = useHomeIndexStore()
    const currentTab = computed(() => _getTabbarName())
    const state = reactive({
      isHome: currentTab.value === TypeTabbarEnum.home,
      isBrand: currentTab.value === TypeTabbarEnum.brand,
      isCategory: currentTab.value === TypeTabbarEnum.category,
      isMaganize: currentTab.value === TypeTabbarEnum.magazine
    })
    watchEffect(() => {
      state.isHome = currentTab.value === TypeTabbarEnum.home
      state.isBrand = currentTab.value === TypeTabbarEnum.brand
      state.isCategory = currentTab.value === TypeTabbarEnum.category
      state.isMaganize = currentTab.value === TypeTabbarEnum.magazine
    })

    return { ...toRefs(state), currentTab }
  },
  components: {
    TabMine,
    TabCategory,
    TabHome,
    TabMagazine,
    TabBrand
  }

})
</script>

<template lang="pug">
tab-home(v-if="isHome")
tab-brand(v-else-if="isBrand")
tab-category(v-else-if="isCategory")
tab-magazine(v-else-if="isMaganize")
tab-mine(v-else)
</template>
