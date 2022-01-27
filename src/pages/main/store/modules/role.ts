import { reactive } from 'vue'

enum TypeRole {
  female = 'female',
  male = 'male',
  child = 'child'
}
export default TypeRole
export interface TypeRoleState {
  _role: TypeRole
}
export interface TypeReturnRoleStore {
  _getRole: () => TypeRole,
  _setRole: (name: TypeRole) => void
}

// reactive对象放到use函数外就可以作为全局状态
const state: TypeRoleState = reactive({
  _role: TypeRole.female
})

export const useRoleStore = (): TypeReturnRoleStore => {
  // 获取数据
  const _getRole = () => state._role || TypeRole.female // 默认为女性视角

  // 赋值数据
  const _setRole = (name: TypeRole) => {
    state._role = name
  }

  return {
    _getRole,
    _setRole
  }
}
