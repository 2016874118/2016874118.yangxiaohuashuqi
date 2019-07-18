
import Vue from 'vue'
//vue文件自动去node_modules文件寻找
import VueRouter from 'vue-router'

import App from './App.vue'

import router from './js/router.js'

import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css'
Vue.use(Mint)

import axios from 'axios'
Vue.prototype.$http=axios
//引用mint-ui
//import Vue from 'vue';




//当前路径 ./
//import index1 from './components/index/index.vue'
//import my from './components/index/my.vue'

//配置每个实例对象可以使用vue
Vue.use(VueRouter)
new Vue({
  el: '#app',
  router,
  render: h => h(App)  
})

//var router=new VueRouter({
//	router:[
//	{
//		path:'/index1',component:index1
//	},
//	{
//		path:'/my',component:my
//	}
//	]
//})
//new Vue({
//el: '#app',
//render: h => h(App),
//router
//})
