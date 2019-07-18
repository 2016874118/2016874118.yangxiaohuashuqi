<template>
	<div class="hole">
		<v-header></v-header>
		<div style="height: 39px;"></div>
		<router-link to="booklist">
			<div class="rank" v-for="(item,index) in list1">
				<div class="ranklist">
					<section class="ranklistl">
						<img :src="item.src1" />
					</section>
					<section class="ranklistr">
						<h3>{{item.sale}}</h3>
						<p>{{item.full}}</p>
					</section>
				</div>
				<div class="seperator">{{item.sepera}}</div>
			</div>
		</router-link>
		<v-footer></v-footer>
	</div>

</template>

<script>
	import Header from '../common/header.vue'
	import Footer from '../common/footer.vue'

	export default {

		components: {
			'v-header': Header,
			'v-footer': Footer
		},

		name: 'rank',
		data() {
			return {
				msg: 'hoiewhipefip3if3',
				list1: []
			}
		},
		mounted() {

			var _this = this;
			this.$http.get('./data/model.json')
				.then(function(res) {
					console.log(res)
					_this.list1 = res.data.list1
				})
				.catch(() => {

				})
				.finally((f) => {
					console.log('请求结束了')
				})
		}
	}
</script>

<style scoped="scoped">
	.hole {
		border: 1px solid #F3F3F3;
	}
	
	.ranklist {
		overflow: hidden;
		width: 100%;
		padding: 5% 0 5% 0;
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
	}
	
	.seperator {
		background-color: #F0F0F2;
		width: 100%;
		height: 8px;
	}
</style>