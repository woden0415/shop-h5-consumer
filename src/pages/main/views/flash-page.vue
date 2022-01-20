<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
// import LayoutFrame from "../components/layout-frame.vue"

import { useRouter } from 'vue-router'
// 闪屏广告页面
export default defineComponent({
  name: 'FlashPage',
  // components: {LayoutFrame},
  setup(){
    const router = useRouter();
    const state = reactive({
      time: 5,
      show: false
    })

    // 声明跳转到首页的方法
    const goToMain = ()=>{
      clearInterval(timer)
      router.push({name: 'main'})
    }

    // 声明跳转到首页的方法
    const goToLogin = ()=>{
      router.push({name: 'login'})
    }

    // 定时器自动跳转
    const timer = setInterval(()=>{
      state.time--
      if(state.time<=0) {
        goToMain()
      }
    }, 1000)

    return {...toRefs(state),goToMain,goToLogin}
  }
})
</script>

<template lang="pug">
layout-frame()
  template(#body) 
    div.page-center_wrapper() 
      h1 闪屏页面
      h2 {{time}}
      button(@click="goToMain") 手动跳过
      button(@click="goToLogin") 登录页面
      button(@click="show=!show") 切换hello
      transition(name="slide-fade")
        p(v-show="show") hello
</template>

<style lang="less">
@import "@/commons/assets/styles/variables-color.less";
.page-center_wrapper {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: @bgColor;
  
}


p {
  font-size: 16px;
}
</style>