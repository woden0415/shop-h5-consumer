/* eslint-disable class-methods-use-this */
/*
 * 封装跳转方法
 * @Author: wangdong
 * @Date: 2022-01-28 16:24:50
 * @Last Modified by: wangdong
 * @Last Modified time: 2022-01-28 16:47:38
 */

import { RouteLocationRaw } from 'vue-router'
import router from '.'

const pageRouter = {
  push: (params: RouteLocationRaw) => {
    router.push(params)
  }
}
export default pageRouter
