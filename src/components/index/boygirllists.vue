<template>
	<div class="hole">
		<header>
			<i class="iconfont l back" @click="back()">&#xeb09;</i>
			<span class="title1">精品畅销</span>
			<router-link to="index">
				<i class="iconfont r">&#xe65d;</i>
			</router-link>
		</header>
		<div style="height: 39px;"></div>
		<p class="box1">
			<span class="loginleft loginl"  @click="loginl()" v-bind:class="{'loginl-active':isactive,'loginr-active':!isactive}">女生</span>
			<span class="loginright loginr" @click="loginr()" v-bind:class="{'loginl-active':!isactive,'loginr-active':isactive}">男生</span>
		</p>
		<router-link to="bookdetail">
			<div class="bookinstr" v-for="(item,index) in list8" v-show="showl">
				<div class="bookinstrl">
					<img :src="item.src" />
				</div>
				<div class="bookinstrr">
					<h3>{{item.title}}</h3>
					<p>
						{{item.p1}}
						<span class="btns1 iconfont ">&#xe664;</span>
						<span class="btns1">{{item.num}}</span>
					</p>
					<span class="tag-serial">{{item.tag1}}</span>
					<span class="tag">{{item.tag2}}</span>
					<span class="tag">{{item.tag3}}</span>
					<span class="tag">{{item.tag4}}</span>
				</div>
			</div>
		</router-link>
		<router-link to="bookdetail">
			<div class="bookinstr" v-for="(item,index) in list9" v-show="showr">
				<div class="bookinstrl">
					<img :src="item.src" />
				</div>
				<div class="bookinstrr">
					<h3>{{item.title}}</h3>
					<p>
						{{item.p1}}
						<span class="btns1 iconfont ">&#xe664;</span>
						<span class="btns1">{{item.num}}</span>
					</p>
					<span class="tag-serial">{{item.tag1}}</span>
					<span class="tag">{{item.tag2}}</span>
					<span class="tag">{{item.tag3}}</span>
					<span class="tag">{{item.tag4}}</span>
				</div>
			</div>
		</router-link>
		<p class="loadmore">
			<img src="../../assets/img/loading-book.gif" /> 正在加载
		</p>
	</div>
</template>

<script>
	export default {
		components: {
			
		},
		name: 'booklists',
		data() {
			return {
				msg: 'hoiewhipefip3if3',
				list8: [],
				list9: [],
				showl: true,
				showr: false,
				isactive: false
			}
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			loginl() {

				this.showl = true,
				this.showr = false,
				this.isactive = !this.isactive

			},
			loginr() {
				this.showl = false,
				this.showr = true
				this.isactive = !this.isactive
                
			}
		},
		
		mounted() {

			var _this = this;
			this.$http.get('./data/model.json')
				.then(function(res) {
					_this.list8 = res.data.list8
					_this.list9 = res.data.list9
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
	
	.loginleft {
		width: 50%;
		float: left;
		text-align: center;
		color: #00C98D;
		padding: 4% 0 4% 0;
		font-size: 15px;
		border-bottom: 2px solid #00C98D;
	}
	
	.loginl-active{
		border-bottom: none;
		color: black;
	}
	.loginr-active{
		
		border-bottom: 2px solid #00C98D;
		color:#00C98D
	}	
	
	.loginright {
		width: 50%;
		float: right;
		text-align: center;
		font-size: 15px;
		padding: 4% 0 4% 0;
	}
	
	.bookinstr {
		width: 100%;
		height: auto;
		overflow: hidden;
		padding-bottom: 4%;
		padding-top: 4%;
		border-bottom: 1px solid rgba(153, 153, 153, .3);
	}
	
	.bookinstrl {
		width: 25%;
		height: auto;
		padding: 0 2%;
		position: relative;
		float: left;
	}
	
	.bookinstrr {
		float: left;
		width: 65%;
		padding: 0 2%;
		padding-top: 3%;
	}
	
	.bookinstrl img {
		width: 100%;
		height: 100%;
	}
	
	.bookinstrr p {
		font-size: .24rem;
		color: #999;
		margin-top: 2%;
		max-height: 100%;
		padding-bottom: 1%;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
	}
	
	.bookinstrr h3 {
		font-weight: normal;
	}
	
	.bookinstrr span {
		display: inline-block;
		margin-top: 6%;
		color: #999;
		border: 1px solid #F3F3F3;
		margin-right: 2%;
		padding: 1% 1% 1% 1%;
	}
	
	.btns1 {
		border: none !important;
		margin-right: 1% !important;
	}
	
	.btns1:nth-of-type(1) {
		margin-left: 55%;
	}
	
	.loadmore {
		padding: 5% 0 5% 0;
		font-size: 15px;
		width: 100%;
		color: #999;
		text-align: center;
	}
</style>