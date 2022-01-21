import { reactive } from 'vue'
import TypeTabbarEnum from '../../interfaces/interface.footer-tabbar'

export interface TypeHomeIndexState {
  _tabbarName: TypeTabbarEnum
}

export interface TypeReturnHomeIndexStore {
  _getTabbarName: () => TypeTabbarEnum,
  _setTabbarName: (name: TypeTabbarEnum) => void
}

// reactive对象放到use函数外就可以作为全局状态
const state: TypeHomeIndexState = reactive({
  _tabbarName: TypeTabbarEnum.home
})

export const useHomeIndexStore = (): TypeReturnHomeIndexStore => {
  // 获取数据
  const _getTabbarName = () => state._tabbarName

  // 赋值数据
  const _setTabbarName = (name: TypeTabbarEnum) => {
    state._tabbarName = name
  }

  return {
    _getTabbarName,
    _setTabbarName
  }
}

// 封装store，传入state${name}变量，导出useStore${name} => {}

/**
 * function decoratorStore
 */
