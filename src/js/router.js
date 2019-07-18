import VueRouter from 'vue-router'

import index from '../components/index/index.vue'

import rank from '../components/index/rank.vue'
import classification from '../components/index/classification.vue'
import booklist from '../components/index/booklist.vue'
import boylist from '../components/index/boylist.vue'
import girllist from '../components/index/girllist.vue'
import bookdetail from '../components/index/bookdetail.vue'
import boygirllists from '../components/index/boygirllists.vue'

import login from '../components/login/login.vue'
import register from '../components/login/register.vue'
import bookshelf from '../components/login/bookshelf.vue'
import search from '../components/login/search.vue'
import newchapter from '../components/login/newchapter.vue'
import catalogue from '../components/login/catalogue.vue'

import '../assets/css/base.css'
import '../assets/iconfont/iconfont.css'

export default new VueRouter({
	routes:[
	{
		path:'/index',component:index
	},	
	{
		path:'/rank',component:rank
	},
	{
		path:'/classification',component:classification
	},
	{
		path:'/booklist',component:booklist
	},
	{
		path:'/boylist',component:boylist
	},
	{
		path:'/girllist',component:girllist
	},
	{
		path:'/bookdetail',component:bookdetail
	},
	{
		path:'/login',component:login
	},
	{
		path:'/register',component:register
	},
	{
		path:'/bookshelf',component:bookshelf
	},
	{
		path:'/search',component:search
	},
	{
		path:'/boygirllists',component:boygirllists
	},
	{
		path:'/newchapter',component:newchapter
	},
	{
		path:'/catalogue',component:catalogue
	},	
	{
		path:'*',redirect:'/index'
	}
	]
})
