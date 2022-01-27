<script lang="ts">
import {
  defineComponent, reactive, toRefs, watchEffect
} from 'vue'
import TypeRole, { useRoleStore } from '../store/modules/role'

export default defineComponent({
  name: 'ToggleRole',
  setup() {
    const { _getRole, _setRole } = useRoleStore()

    const onChange = () => {
      const _needToSwitchRole = _getRole() === TypeRole.female ? TypeRole.male : TypeRole.female
      _setRole(_needToSwitchRole)
    }

    const state = reactive({
      roleName: _getRole() === TypeRole.female ? '男士' : '女士'
    })
    watchEffect(() => {
      state.roleName = _getRole() === TypeRole.female ? '男士' : '女士'
    })
    return { onChange, ...toRefs(state) }
  }
})
</script>

<template lang="pug">
div.toggle-role_wrapper(@click="onChange")
  van-icon.m-r-10(name="exchange")
  span() {{roleName}}
</template>
