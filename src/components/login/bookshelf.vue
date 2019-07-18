<template>
	<div class="hole">
		<header>
			<router-link to="index">
				<i class="iconfont l">&#xe65d;</i>
			</router-link>

			<span class="title1">书架</span>
			<i class="iconfont r">&#xe670;</i>
		</header>
		<div style="height: 39px;"></div>

		<div class="shelflist" v-for="(item,index) in list5">
			<ul>
				<li class="shelflist1">
					<img :src="item.src" />
					<span>{{item.shelf1}}</span>
					<span class="shelflist2" @click="del(index)">{{item.shelf2}}</span>
				</li>
			</ul>
		</div>
		<v-footer></v-footer>
	</div>

</template>

<script>
	import Footer from '../common/footer.vue'
	export default {

		name: 'shelflist',
		data() {
			return {
				msg: 'hoiewhipefip3if3',
				showl: true,
				list5: []
			}
		},
		components: {
			'v-footer': Footer
		},
		mounted() {
			var _this = this;
			this.$http.get('./data/model.json')
				.then(function(res) {
					_this.list5 = res.data.list5
				})
				.catch(() => {

				})
				.finally((f) => {})
		},
		methods: {
			del(index) {
				this.list5.splice(index,1)
			}

		}
	}
</script>

<style scoped="scoped">
	.hole {
		border: 1px solid #F3F3F3;
		border-bottom: none;
	}
	
	header {
		width: 100%;
		max-width: 750px;
		height: 40px;
		border-bottom: 1px solid #F3F3F3;
		border-top: 1px solid #F3F3F3;
		overflow: hidden;
		line-height: 40px;
		position: fixed;
		top: 0;
		background-color: white;
		z-index: 120;
	}
	
	header i {
		color: #00C98D;
		font-size: 20px;
		width: 30%;
	}
	
	.title1 {
		display: inline-blockblock;
		width: 30%;
		margin-left: 10%;
		font-size: 16px;
	}
	
	.l {
		float: left;
		margin-left: 4%;
		font-size: 22px;
	}
	
	.r {
		float: right;
		margin-right: 4%;
		text-align: right;
		font-size: 24px;
	}
	
	.shelflist {
		width: 100%;
		height: auto;
		margin-top: 10%;
	}
	
	.shelflist1 {
		width: 30%;
		height: auto;
		float: left;
		margin-left: 2.5%;
		margin-bottom: 5%;
		position: relative;
	}
	
	.shelflist1 img {
		width: 100%;
		height: auto;
		margin-bottom: 4%;
	}
	
	.shelflist2 {
		width: 20px;
		height: 20px;
		border-radius: 50%;
		background-color: pink;
		z-index: 10;
		text-align: center;
		line-height: 18px;
		color: white;
		font-size: 18px;
		position: absolute;
		top: -5%;
		right: -5%;
	}
</style>