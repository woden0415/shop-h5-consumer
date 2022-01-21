<script lang="ts">
// 闪屏广告页面
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'FlashPage',
  setup() {
    const router = useRouter()
    const state = reactive({
      time: 5
    })
    let timer: any = null

    // 声明跳转到首页的方法
    const goToMain = () => {
      clearInterval(timer)
      router.push({ name: 'main' })
    }

    // 声明跳转到首页的方法
    const goToLogin = () => {
      router.push({ name: 'login' })
    }

    // 定时器自动跳转
    timer = setInterval(() => {
      state.time--
      if (state.time <= 0) {
        goToMain()
      }
    }, 1000)

    return { ...toRefs(state), goToMain, goToLogin }
  }
})
</script>

<template lang="pug">
layout-frame()
  template(#body)
    div.page-center_wrapper()
      div.btn-skip_wrapper(@click="goToMain") {{time}} 跳过
      div.slogan-title_wrapper
        div.slogan-title_text NET-A-PORTER
        div.slogan-title_text MR PORTTER
</template>

<style lang="less">
@import "@/commons/assets/styles/variables-color.less";
.page-center_wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: @bgDarkColor;
  position: relative;
}
.btn-skip_wrapper {
  position: absolute;
  top: 20px;
  right: 20px;
  color: @white;
  border: 1px solid @white;
  border-radius: 10px;
  font-size: 14px;
  width: 55px;
  text-align: center;
  line-height: 1.7;
}
.slogan-title_wrapper {
  font-size: 20px;
  color: @textDarkColor;
  text-align: center;
  line-height: 2;
  letter-spacing: 2px;
}
.slogan-title_text {
  &:first-child {
    border-bottom: 1px solid @white;
  }
}
</style>
