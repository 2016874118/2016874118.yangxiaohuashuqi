<template>
	<div class="hole">
		<header>
			<i class="iconfont l back" @click="back()">&#xeb09;</i>
			<span class="title1">排行</span>
			<router-link to="index">
				<i class="iconfont r">&#xe65d;</i>
			</router-link>
		</header>
	</div>
</template>

<script>
	export default {
		methods: {
			back() {
				this.$router.go(-1)
			}
		},
		props: ['title']
	}
</script>

<style scoped="scoped">
	header {
		width: 100%;
		max-width: 750px;
		height: 40px;
		border-bottom: 1px solid #F3F3F3;
		border-top: 1px solid #F3F3F3;
		overflow: hidden;
		line-height: 40px;
		top: 0;
		position: fixed;
		background-color: white;
	}
	
	header i {
		color: #00C98D;
		font-size: 20px;
		width: 30%;
	}
	
	.title1 {
		display: inline-blockblock;
		width: 35%;
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
</style>