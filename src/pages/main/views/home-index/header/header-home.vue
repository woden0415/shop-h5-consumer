<script lang="ts">import {
  defineComponent, reactive, toRefs, watchEffect
} from 'vue'
import HeaderBase from '@/pages/main/components/header-base.vue'
import TypeSex, { useRoleStore } from '@/pages/main/store/modules/role'
import ToggleRole from '@/pages/main/components/toggle-role.vue'
import SearchEntry from '@/pages/main/components/search-entry.vue'
import ShopcarEntry from '@/pages/main/components/shopcar-entry.vue'

export default defineComponent({
  name: 'HeaderHome',
  components: {
    HeaderBase, ToggleRole, SearchEntry, ShopcarEntry
  },
  setup() {
    const { _getRole } = useRoleStore()
    const state = reactive({
      title: _getRole() === TypeSex.female ? 'NET-A-PORTER' : 'MR PORTER'
    })
    watchEffect(() => {
      state.title = _getRole() === TypeSex.female ? 'NET-A-PORTER' : 'MR PORTER'
    })
    return { ...toRefs(state) }
  }

})
</script>

<template lang="pug">
header-base
  template(#left)
    toggle-role
  template(#center)
    span {{title}}
  template(#right)
    search-entry.m-r-10
    ShopcarEntry
</template>
