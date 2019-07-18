<template>
	<div class="hole">
		<header class="toph">
			<i class="iconfont l back" @click="back()">&#xeb09;</i>
			<span class="title">精品书单</span>
			<router-link to="index">
				<i class="iconfont r">&#xe65d;</i>
			</router-link>
		</header>
        <div style="height: 39px;"></div>
        <router-link to="boygirllists">
		<div class="booklists" v-for="(item,index) in list4">
			<div class="booklistingleft">
				<h3>{{item.title}}</h3>
				<p>{{item.dele}}</p>
				<p>
					<span class="tag">{{item.tag1}}</span>
					<span class="tag">{{item.tag2}}</span>
					<span class="tag">{{item.tag3}}</span>
					<span class="tag">{{item.tag4}}</span>
				</p>
			</div>
			<div class="booklistimgright">
				<li>
					<img :src="item.src1" />
					<img :src="item.src2" />
				</li>
				<img class="bookindex" :src="item.src3" />
			</div>
		</div>
		</router-link>
		<p class="loadmore">
			<img src="../../assets/img/loading-book.gif" /> 正在加载
		</p>
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
		name: 'booklists',
		data() {
			return {
				msg: 'hoiewhipefip3if3',
				list4: [],
			}
		},
		mounted() {

			var _this = this;
			this.$http.get('./data/model.json')
				.then(function(res) {
					_this.list4 = res.data.list4
				})
				.catch(() => {

				})
				.finally((f) => {})
		}
	}
</script>

<style scoped="scoped">
	.toph {
		max-width: 750px;
		width: 100%;
		height: 40px;
		border-bottom: 1px solid #F3F3F3;
		border-top: 1px solid #F3F3F3;
		overflow: hidden;
		line-height: 40px;
		position: fixed;
		background-color: white;
		z-index: 1000;
		opacity: 1;
	}
	
	.toph i {
		color: #00C98D;
		font-size: 20px;
		width: 30%;
	}
	
	.title {
		display: inline-blockblock;
		width: 30%;
		padding-left: 8%;
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
	
	.booklists {
		overflow: hidden;
		width: 94%;
		padding: 5% 2% 7% 4%;
	}
	
	.booklistingleft {
		float: left;
		width: 57%;
	}
	
	.booklistingleft h3 {
		font-weight: normal;
	}
	
	.booklistimgright {
		position: relative;
		float: left;
		margin-left: 8%;
		width: 27%;
		margin-top: 5%;
	}
	
	.booklistimgright li img {
		float: left;
		display: inline-block;
		width: 50%;
		height: auto;
		z-index: 1;
	}
	
	.booklistimgright .bookindex {
		z-index: 10;
		width: 60%;
		height: auto;
		position: absolute;
		right: 15%;
		bottom: 0;
	}
	
	.booklistingleft p {
		font-size: .24rem;
		padding-top: 8%;
		color: #999;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.tag {
		border: 1px solid #F3F3F3;
		padding: 1% 2% 0 2%;
	}
	
	.loadmore {
		padding: 5% 0 0 0;
		font-size: 15px;
		width: 100%;
		color: #999;
		text-align: center;
	}
</style>