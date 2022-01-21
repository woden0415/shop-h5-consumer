<script lang="ts">
import { computed, defineComponent } from 'vue'
import { useRouter } from 'vue-router'
import TypeTabbarEnum from '../interfaces/interface.footer-tabbar'
import { useHomeIndexStore } from '../store/modules/homeIndex'

export default defineComponent({
  name: 'FooterTabbar',
  setup() {
    const { _getTabbarName, _setTabbarName } = useHomeIndexStore()
    const currentTab = computed(() => _getTabbarName())
    const router = useRouter()
    const onChange = (index: TypeTabbarEnum) => {
      _setTabbarName(index)
      router.push(`/main/${index}`)
    }
    return { currentTab, onChange }
  }
})
</script>
<template lang="pug">
div.wd-footer-tabbar_wrapper()
  van-tabbar.bottom-safe(v-model="currentTab" @change="onChange" safe-area-inset-bottom)
    van-tabbar-item(name="home" :icon="currentTab === 'home' ? 'wap-home' : 'wap-home-o'") 首页
    van-tabbar-item(name="brand" :icon="currentTab === 'brand' ? 'medal' : 'medal-o'") 品牌
    van-tabbar-item(name="category" :icon="currentTab === 'category' ? 'bag' : 'bag-o'") 分类
    van-tabbar-item(name="magazine" :icon="currentTab === 'magazine' ? 'coupon' : 'coupon-o'") 杂志
    van-tabbar-item(name="mine" :icon="currentTab === 'mine' ? 'manager' : 'manager-o'") 我的
</template>

<style lang="less" scoped>
.wd-footer-tabbar_wrapper {
  /deep/ .van-tabbar {
    padding: 4px 0 2px;
  }
  .bottom-safe {
    padding-bottom: 15px;
  }
}

</style>
