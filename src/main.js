import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//自动设置 REM 基准值（HTML标签字体大小）
import 'amfe-flexible'
//导入所有组件，后期可改为按需加载或CDN
import Vant from 'vant'
import 'vant/lib/index.css'

Vue.use(Vant)

//加载全局样式
import './styles/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
