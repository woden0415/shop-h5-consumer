import { createApp } from 'vue'
import Vant from 'vant'
import App from './App.vue'
import '@/commons/assets/styles/reset.less'
import './assets/styles/index.less'

import 'vant/lib/index.css'
import route from './router/index'
import component from './components/component'

createApp(App)
  .use(Vant)
  .use(route)
  .use(component)
  .mount('#app')
