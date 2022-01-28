/* eslint-disable class-methods-use-this */
/*
 * 封装跳转方法
 * @Author: wangdong
 * @Date: 2022-01-28 16:24:50
 * @Last Modified by: wangdong
 * @Last Modified time: 2022-01-28 17:15:57
 */

import { RouteLocationRaw } from 'vue-router'
import router from '.'

const pageRouter = {
  push: (params: RouteLocationRaw) => {
    router.push(params)
  },
  back: () => {
    router.go(-1)
  }
}
export default pageRouter
