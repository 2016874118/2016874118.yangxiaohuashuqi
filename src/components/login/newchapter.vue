<template>
	<div class="hole">
		<p class="titlenew">第两千零四十二章 丹道神师！</p>
		<p class="titlenew1">登录享更多特权</p>
		<p class="titlenew1">请先登录后，再购买本章</p>
		<span class="titlenew2">
			<router-link to="/login">
		                    账号登录
			</router-link>
		</span>
	</div>
</template>

<script>
	export default {
		methods: {
			back() {
				this.$router.go(-1)
			}
		}
	}
</script>

<style scoped="scoped">
	.hole {
		width: 100%;
		height: 735px;
		background: #ffeecc;
		border: 1px solid #F3F3F3;
	}
	
	.titlenew {
		padding: 7% 4% 25% 4%;
		font-size: 22px;
	}
	
	.titlenew1 {
		font-size: 15px;
		text-align: center;
		margin-bottom: 1%;
	}
	
	.titlenew2 {
		width: 70%;
		display: block;
		height: 42px;
		line-height: 42px;
		border: 1px solid black;
		font-size: 16px;
		margin-top: 7%;
		margin-left: 15%;
		text-align: center;
		border-radius: 9%;
	}
</style>