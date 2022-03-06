import App from './App'
// 按需导入api.js中封装的request
import {myRequest} from 'util/api.js'
// 挂载到vue的原型对象上，通过this.$request进行调用
Vue.prototype.$request=myRequest
// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif