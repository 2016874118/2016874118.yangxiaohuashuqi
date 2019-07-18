<template>
	<div class="hole">
		<header>
			<i class="iconfont l back" @click="back()">&#xeb09;</i>
			<span class="title1">目录</span>
			<router-link to="index">
				<i class="iconfont r">&#xe65d;</i>
			</router-link>
		</header>
		<div style="height: 39px;"></div>
		<p class="logue1">
			1~100章
			<i class="iconfont logue2"> &#xe617;</i>
			<i class="iconfont logue3"> &#xe802;</i>
		</p>
		<p class="logue4" v-for="(item,index) in list10">
			{{item.logue}}
			<i class="iconfont logue5"> &#xe61d;</i>
		</p>
	</div>
</template>

<script>
	export default {

		methods: {
			back() {
				this.$router.go(-1)
			}
		},
		name: 'logue4',
		data() {
			return {
				msg: 'hoiewhipefip3if3',
				list10: [],
			}
		},
		mounted() {

			var _this = this;
			this.$http.get('./data/model.json')
				.then(function(res) {
					_this.list10 = res.data.list10
				})
				.catch(() => {

				})
				.finally((f) => {})
		}
	}
</script>

<style scoped="scoped">
	.hole {
		border: 1px solid #F3F3F3;
	}
	
	header {
		width: 100%;
		max-width: 750px;
		height: 40px;
		border-bottom: 1px solid #F3F3F3;
		border-top: 2px solid #F3F3F3;
		overflow: hidden;
		line-height: 40px;
		position: fixed;
		top: 0;
		background-color: white;
		z-index: 110;
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
	
	.logue1 {
		padding: 5% 4% 4% 5%;
		font-size: 15px;
		border-bottom: 1px solid #F3F3F3;
	}
	
	.logue2 {
		color: #999;
		font-size: 20px;
	}
	
	.logue3 {
		color: #999;
		font-size: 20px;
		float: right;
	}
	
	.logue4 {
		padding: 5% 4% 4% 5%;
		font-size: 14px;
		border-bottom: 1px solid #F3F3F3;
	}
	
	.logue5 {
		color: #999;
		font-size: 16px;
		float: right;
		margin-bottom: 5%;
	}
</style>