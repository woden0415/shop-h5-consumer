<script lang="ts">
import TypeTabbarEnum from '@/pages/main/interfaces/interface.footer-tabbar'
import { useHomeIndexStore } from '@/pages/main/store/modules/homeIndex'
import {
  computed, defineComponent, reactive, toRefs, watchEffect
} from 'vue'
import HeaderMine from './header-mine.vue'
import HeaderCategory from './header-category.vue'
import HeaderHome from './header-home.vue'
import HeaderMagazine from './header-magazine.vue'
import HeaderBrand from './header-brand.vue'

export default defineComponent({
  name: 'HeaderEntry',
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
    HeaderMine,
    HeaderCategory,
    HeaderHome,
    HeaderMagazine,
    HeaderBrand
  }

})
</script>

<template lang="pug">
header-home(v-if="isHome")
header-brand(v-else-if="isBrand")
header-category(v-else-if="isCategory")
header-magazine(v-else-if="isMaganize")
header-mine(v-else)
</template>
