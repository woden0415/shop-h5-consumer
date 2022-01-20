<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
import { TypeTabbarEnum } from '../interfaces/interface.footer-tabbar'

interface TypeData {
  active: TypeTabbarEnum
}
export default defineComponent({
  name: 'FooterTabbar',
  setup() {
    const state:TypeData = reactive({
      active: TypeTabbarEnum.home
    })
    const onChange = (index: TypeTabbarEnum) => {
      console.log('index :>> ', index)
      state.active = index
    }
    return { ...toRefs(state), onChange }
  }
})
</script>
<template lang="pug">
div.wd-footer-tabbar_wrapper()
  van-tabbar(v-model="active" @change="onChange" safe-area-inset-bottom)
    van-tabbar-item(name="home" :icon="active==='home' ? 'wap-home':'wap-home-o'") 首页
    van-tabbar-item(name="brand" :icon="active==='brand' ?'medal':'medal-o'") 品牌
    van-tabbar-item(name="category" :icon="active==='category'?'bag':'bag-o'") 分类
    van-tabbar-item(name="magazine" :icon="active==='magazine'?'coupon':'coupon-o'") 杂志
    van-tabbar-item(name="mine" :icon="active==='mine'?'manager':'manager-o'") 我的
</template>
