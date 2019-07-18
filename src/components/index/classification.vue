<template>
	<div class="hole">
		<header>
			<i class="iconfont l back" @click="back()">&#xeb09;</i>
			<span class="title1">分类</span>
			<router-link to="index">
				<i class="iconfont r">&#xe65d;</i>
			</router-link>
		</header>
		<div style="height: 39px;"></div>
		<p class="classsex">女生分类</p>

		<router-link to="booklist">
			<div class="rank" v-for="(item,index) in list2">
				<div class="ranklist">
					<section class="ranklistl">
						<img :src="item.src1" />
					</section>
					<section class="ranklistr">
						<h3>{{item.sale}}</h3>
						<p>{{item.full}}</p>
					</section>
				</div>
			</div>
		</router-link>
		<p class="classsex">男生分类</p>
		<router-link to="booklist">
			<div class="rank" v-for="(item,index) in list3">
				<div class="ranklist">
					<section class="ranklistl">
						<img :src="item.src1" />
					</section>
					<section class="ranklistr">
						<h3>{{item.sale}}</h3>
						<p>{{item.full}}</p>
					</section>
				</div>
			</div>
		</router-link>
		<v-footer></v-footer>

	</div>
</template>

<script>
	import Footer from '../common/footer.vue'
	export default {
		components: {
			'v-footer': Footer
		},
		methods: {
			back() {
				this.$router.go(-1)
			}
		},

		name: 'rank',
		data() {
			return {
				msg: 'hoiewhipefip3if3',
				list2: [],
				list3: []
			}
		},
		mounted() {

			var _this = this;
			this.$http.get('./data/model.json')
				.then(function(res) {
					_this.list2 = res.data.list2
					_this.list3 = res.data.list3
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
	
	.classsex {
		font-size: 10px;
		margin-left: 4%;
		color: #999;
		padding: 4% 0 4% 0;
	}
	
	.ranklist {
		overflow: hidden;
		width: 100%;
		padding: 5% 0 5% 0;
		border-bottom: 1px solid #F3F3F3;
	}
	
	.ranklist:nth-of-type(1) {
		border-top: 1px solid #F3F3F3;
	}
	
	.ranklistl {
		width: 10%;
		float: left;
		margin-left: 4%;
	}
	
	.ranklistl img {
		width: 100%;
		height: inherit;
	}
	
	.ranklistr {
		width: 70%;
		float: left;
		padding: 1% 0 2% 3%;
		padding-top: 2%;
		padding-bottom: 2%;
	}
	
	.ranklistr h3 {
		padding-bottom: 0.5%;
		font-weight: normal;
	}
	
	.ranklistr p {
		color: #999;
	}
	
	.seperator {
		background-color: #F0F0F2;
		width: 100%;
		height: 8px;
	}
</style>