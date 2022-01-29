import { createApp } from 'vue'
import Vant from 'vant'
import VConsole from 'vconsole'
import App from './App.vue'
import '@/commons/assets/styles/reset.less'
import './assets/styles/index.less'

import 'vant/lib/index.css'
import route from './router/index'
import component from './components/component'

const app = createApp(App)

app.use(Vant)
  .use(route)
  .use(component)

if (process.env.NODE_ENV !== 'production') {
  const vConsole = new VConsole()
  console.log('vConsole :>> ', vConsole)
}
app.mount('#app')
