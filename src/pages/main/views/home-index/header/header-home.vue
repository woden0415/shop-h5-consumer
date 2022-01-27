<script lang="ts">import {
  defineComponent, reactive, toRefs, watchEffect
} from 'vue'
import HeaderBase from '@/pages/main/components/header-base.vue'
import TypeSex, { useRoleStore } from '@/pages/main/store/modules/role'
import ToggleRole from '@/pages/main/components/toggle-role.vue'

export default defineComponent({
  name: 'HeaderHome',
  components: { HeaderBase, ToggleRole },
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
    span.m-r-10 搜索
    span 购物车
</template>
