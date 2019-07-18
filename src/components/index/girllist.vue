<template>
	<div class="hole">
		<header>
			<i class="iconfont le back" @click="back()">&#xeb09;</i>
			<span class="title1">女生专区</span>
			<router-link to="index">
				<i class="iconfont ri">&#xe65d;</i>
			</router-link>
		</header>
		<div style="height: 40px;"></div>
		<header class="header">
			<h3 class="indextitle">
      		&nbsp;&nbsp;&nbsp;&nbsp;主编力荐    		
      	</h3>
		</header>
		<div class="books-group-4n">
			<div class="books-group-4">
				<ul v-show="flag1==1">
						<router-link to="bookdetail">
						<li class="book" v-for="item in change1.slice(0,4)">
						<div class="book-cover">
							<img :src="item.src" />
						</div>
						<div class="book-title">{{item.title}}</div>
						<div class="book-author">{{item.author}}</div>
					 </li>
					 </router-link>
					</ul>	
				
			
				
					<ul v-show="flag1==2">
						<router-link to="bookdetail">
						<li class="book" v-for="item in change1.slice(4,8)">
						<div class="book-cover">
							<img :src="item.src" />
						</div>
						<div class="book-title">{{item.title}}</div>
						<div class="book-author">{{item.author}}</div>
					 </li>
					 </router-link>
					</ul>	
				
				
					<ul v-show="flag1==3">
						<router-link to="bookdetail">
						<li class="book" v-for="item in change1.slice(8,12)">
						<div class="book-cover">
							<img :src="item.src" />
							<!--<img src="../../assets/img/book7.jpg" />-->
						</div>
						<div class="book-title">{{item.title}}</div>
						<div class="book-author">{{item.author}}</div>
					 </li>
					 </router-link>
					</ul>	
			</div>
		</div>

		<div class="book-list">
			
				<div v-show="flag2==1">
					<router-link to="bookdetail">
					<div class="book-list-item" v-for="item in change2.slice(0,3)">
					<div class="book-list-item-title">
						<div class="book-list-item-text">{{item.title}}</div>
						<div class="tags">
							<span class="tag-serial">{{item.tag1}}</span>
							<span class="tag">{{item.tag2}}</span>
						</div>
					</div>
					<div class="books-list-item-desc">{{item.des}}</div>
				</div>
				</router-link>
				</div>
				<div v-show="flag2==2">
					<router-link to="bookdetail">
					<div class="book-list-item" v-for="item in change2.slice(3,6)">
					<div class="book-list-item-title">
						<div class="book-list-item-text">{{item.title}}</div>
						<div class="tags">
							<span class="tag-serial">{{item.tag1}}</span>
							<span class="tag">{{item.tag2}}</span>
						</div>
					</div>
					<div class="books-list-item-desc">{{item.des}}</div>
				</div>
				</router-link>
				</div>
				<div v-show="flag2==3">
					<router-link to="bookdetail">
					<div class="book-list-item" v-for="item in change2.slice(6,9)">
					<div class="book-list-item-title">
						<div class="book-list-item-text">{{item.title}}</div>
						<div class="tags">
							<span class="tag-serial">{{item.tag1}}</span>
							<span class="tag">{{item.tag2}}</span>
						</div>
					</div>
					<div class="books-list-item-desc">{{item.des}}</div>
				</div>
				</router-link>
				</div>
		</div>

		<div class="change" v-on:click="changeflag1">
			<span>换一换</span>
			<span class="iconfont reflesh">&#xe62d;</span>
		</div>
		<header class="header">
			<h3 class="indextitle">
      		&nbsp;&nbsp;&nbsp;&nbsp;热门女生分类 		
      	</h3>
		</header>
		<p class="box4">
			<span class="box1 box3"></span>
			<span class="box2 box3">&nbsp;&nbsp;现言精选&nbsp;&nbsp;</span>
			<span class="box1 box3"></span>
		</p>
		<div class="books-group-4n">
			<ul class="books-group-4">
				<router-link to="bookdetail">
					<li class="book">
						<div class="book-cover">
							<img src="../../assets/img/book7.jpg" />
						</div>
						<div class="oneboxpic2 oneboxpic3"></div>
						<div class="book-title">都市大领主</div>
						<div class="book-author">木土</div>
					</li>
				</router-link>
				<router-link to="bookdetail">
					<li class="book">
						<div class="book-cover">
							<img src="../../assets/img/book1.jpg" />
						</div>
						<div class="oneboxpic2 oneboxpic4"></div>
						<div class="book-title">重回六零：...</div>
						<div class="book-author">南方荔枝</div>
					</li>
				</router-link>

				<router-link to="bookdetail">
					<li class="book">
						<div class="book-cover">
							<img src="../../assets/img/book2.jpg" />
						</div>
						<div class="oneboxpic2 oneboxpic5"></div>
						<div class="book-title">薛小冉的古...</div>
						<div class="book-author">千墨</div>
					</li>
				</router-link>
				<router-link to="bookdetail">
					<li class="book">
						<div class="book-cover">
							<img src="../../assets/img/book4.jpg" />
						</div>
						<div class="book-title">将军快跑..</div>
						<div class="book-author">千墨</div>
					</li>
				</router-link>
			</ul>
		</div>
		<div class="book5">
			<ul class="box6">
				<li class="box7"></li>
				<li class="box7"></li>
				<li class="box7"></li>
				<li class="box7"></li>
				<li class="box7"></li>
			</ul>
		</div>
		<router-link to="classification">
			<div class="newbookmore">查看更多</div>
		</router-link>
		<div class="seperator"></div>
		<header class="header">
			<h3 class="indextitle">
      		&nbsp;&nbsp;&nbsp;&nbsp;女频听书 		
      	</h3>
		</header>
		<div class="books-group-4n">
			<div class="books-group-4">
				<ul v-show="flag3==1">
						<router-link to="bookdetail">
						<li class="book" v-for="item in change1.slice(8,12)">
						<div class="book-cover">
							<img :src="item.src" />
						</div>
						<div class="book-title">{{item.title}}</div>
						<div class="book-author">{{item.author}}</div>
					 </li>
					 </router-link>
					</ul>	
				
			
				
					<ul v-show="flag3==2">
						<router-link to="bookdetail">
						<li class="book" v-for="item in change1.slice(4,8)">
						<div class="book-cover">
							<img :src="item.src" />
						</div>
						<div class="book-title">{{item.title}}</div>
						<div class="book-author">{{item.author}}</div>
					 </li>
					 </router-link>
					</ul>	
				
				
					<ul v-show="flag3==3">
						<router-link to="bookdetail">
						<li class="book" v-for="item in change1.slice(0,4)">
						<div class="book-cover">
							<img :src="item.src" />
						</div>
						<div class="book-title">{{item.title}}</div>
						<div class="book-author">{{item.author}}</div>
					 </li>
					 </router-link>
					</ul>	
			</div>
		</div>
		<div class="book-list">
			
				<div v-show="flag4==1">
					<router-link to="bookdetail">
					<div class="book-list-item" v-for="item in change2.slice(0,3)">
					<div class="book-list-item-title">
						<div class="book-list-item-text">{{item.title}}</div>
						<div class="tags">
							<span class="tag-serial">{{item.tag1}}</span>
							<span class="tag">{{item.tag2}}</span>
						</div>
					</div>
					<div class="books-list-item-desc">{{item.des}}</div>
				</div>
				</router-link>
				</div>
				<div v-show="flag4==2">
					<router-link to="bookdetail">
					<div class="book-list-item" v-for="item in change2.slice(3,6)">
					<div class="book-list-item-title">
						<div class="book-list-item-text">{{item.title}}</div>
						<div class="tags">
							<span class="tag-serial">{{item.tag1}}</span>
							<span class="tag">{{item.tag2}}</span>
						</div>
					</div>
					<div class="books-list-item-desc">{{item.des}}</div>
				</div>
				</router-link>
				</div>
				<div v-show="flag4==3">
					<router-link to="bookdetail">
					<div class="book-list-item" v-for="item in change2.slice(6,9)">
					<div class="book-list-item-title">
						<div class="book-list-item-text">{{item.title}}</div>
						<div class="tags">
							<span class="tag-serial">{{item.tag1}}</span>
							<span class="tag">{{item.tag2}}</span>
						</div>
					</div>
					<div class="books-list-item-desc">{{item.des}}</div>
				</div>
				</router-link>
				</div>
		</div>
		<div class="change" v-on:click="changeflag2">
			<span>换一换</span>
			<span class="iconfont reflesh">&#xe62d;</span>
		</div>
		<header class="header">
			<h3 class="indextitle">
      		&nbsp;&nbsp;&nbsp;&nbsp;女生美文榜	
      	</h3>
		</header>
		<router-link to="bookdetail">
			<div class="newbook">
				<div class="onebox">
					<div class="oneboxpic1">
						<img class="" src="../../assets/img/book2.jpg" />
					</div>
					<div class="oneboxpic2"></div>
				</div>

				<div class="twobox">
					<h3>蜜汁炖鱿鱼</h3>
					<p>墨宝非宝</p>
					<p>《蜜汁炖鱿鱼》改编的电视剧《亲爱的，热爱的》由杨紫、李现、李鸿其、李泽锋等主演，胡一天特别出演！翻唱界的软萌小天后，佟年从来没想到她会对一个人一见钟情。她以为她追的是个三次元帅哥，不想，此人却是电竞圈的远古传说。“韩商言”，她微微仰着头，“我喜欢你。”喜欢到恨不得一天有二十五个小时能和你在一起，就黏着你，看你生气，看你笑，看你发脾气，看你认真工作……他用几乎不能听到的声音，回答她：“听到了。”佟年，你有多想得到我，我就有多想要你。除了你，谁都不行。</p>
					<span class="tag-serial">完结</span>
					<span class="tag">12万字</span>
					<span class="tag">爱情</span>
					<span class="tag">甜宠</span>
				</div>
			</div>
		</router-link>
		<router-link to="bookdetail">
			<div class="newbooknum">
				<ul class="newbookleft">
					<li>2</li>
					<li>买个娘子生娃子</li>

				</ul>
				<ul class="newbookright">
					<span>连载</span>
					<span>古典架空</span>
				</ul>
			</div>

			<div class="newbooknum">
				<ul class="newbookleft">
					<li>3</li>
					<li>神医嫡女</li>

				</ul>
				<ul class="newbookright">
					<span>完结</span>
					<span>穿越时空</span>
				</ul>
			</div>
			<div class="newbooknum">
				<ul class="newbookleft">
					<li>4</li>
					<li>媳妇有点辣</li>

				</ul>
				<ul class="newbookright">
					<span>完结</span>
					<span>现代言情</span>
				</ul>
			</div>
			<div class="newbooknum">
				<ul class="newbookleft">
					<li>5</li>
					<li>再入侯门</li>

				</ul>
				<ul class="newbookright">
					<span>连载</span>
					<span>古代言情</span>
				</ul>
			</div>
		</router-link>
		<router-link to="classification">
			<div class="newbookmore">查看更多</div>
		</router-link>
		<div class="seperator"></div>
		<v-footer></v-footer>

	</div>
</template>

<script>
	import Footer from '../common/footer.vue'
	export default {
		components: {
			'v-footer': Footer
		},
		name: 'book',
		data() {
			return {
				flag1:1,
				flag2:1,
				flag3:1,
				flag4:1,
				count1: 1,
				count2: 1,
				msg: 'hoiewhipefip3if3',
				change1:[],
				change2:[]
			}
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			changeflag1() {
					this.count1++;
					if(this.count1 > 3) {
						this.count1 = 1;
					}
					this.flag1 = this.count1;
					this.flag2 = this.count1
			},
			changeflag2() {
					this.count2++;
					if(this.count2 > 3) {
						this.count2 = 1;
					}
					this.flag3 = this.count2;
					this.flag4 = this.count2;
			}
		},
		
		mounted() {
			var _this = this;
			this.$http.get('./data/model.json')
				.then(function(res) {
					_this.change1 = res.data.change1
					_this.change2 = res.data.change2
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
		max-width: 750px;
		overflow-x: hidden;
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
	
	.le {
		float: left;
		margin-left: 4%;
		font-size: 22px;
	}
	
	.ri {
		float: right;
		margin-right: 4%;
		text-align: right;
		font-size: 24px;
	}
	
	.header {
		max-width: 750px;
		background: #fff;
		width: 100%;
		font-size: 8px;
		position: relative;
		display: block;
		color: #333;
	}
	
	header .indextitle:after {
		max-width: 750px;
		content: '';
		width: 0.7%;
		height: 34%;
		line-height: 28px;
		display: inline-block;
		background: #00c98d;
		position: absolute;
		top: 14px;
		left: 0;
	}
	
	.books-group-4 {
		max-width: 750px;
		margin: 0;
		text-align: center;
		display: block;
		padding-bottom: 5%;
	}
	
	.books-group-4 .book {
		width: 22%;
		height: 140px;
		display: inline-block;
		margin: 0;
		padding-right: .32rem;
	}
	
	.book {
		width: 100%;
	}
	
	.book .book-cover {
		width: 100%;
		height: 75%;
		padding-top: 5%;
		position: relative;
		overflow: hidden;
		margin-bottom: 10px;
	}
	
	.book .book-cover img {
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 100%;
	}
	
	.book-title {
		color: #333;
		width: 100%;
		height: 17.5%;
		font-size: .24rem;
	}
	
	.book-author {
		color: #999;
		height: 17.5%;
		padding-left: 28%;
		text-align: left;
		font-size: 10px;
	}
	
	.book-list {
		max-width: 750px;
		position: relative;
		width: 100%;
		border-top: 1px solid #f3f3f3;
	}
	
	.book-list-item:first-of-type {
		padding: 20px 0 2px 10px;
		cursor: pointer;
		width: 100%;
		height: auto;
		margin-bottom: 20px;
	}
	
	.book-list-item:nth-of-type(2) {
		border-top: 1px solid #f3f3f3;
		padding: 20px 0 2px 10px;
		cursor: pointer;
		width: 100%;
		height: auto;
		margin-bottom: 20px;
	}
	
	.book-list-item:last-of-type {
		border-top: 1px solid #f3f3f3;
		padding: 20px 0 2px 10px;
		cursor: pointer;
		width: 100%;
		margin-bottom: 20px;
	}
	
	.book-list-item-title {
		display: flex;
		align-items: center;
		font-size: .3rem;
	}
	
	.books-list-item-title-text {
		color: #333;
		line-height: .4rem;
		flex: 1;
		overflow: hidden;
		white-space: nowrap;
		word-break: break-all;
		float: left;
		width: 80%;
	}
	
	.tags {
		display: inline-block;
		float: right;
		margin-left: 32%;
		width: 30%;
	}
	
	.tag-serial {
		color: #70a7e3;
		border-color: rgba(112, 167, 227, .3);
		line-height: 16px;
		vertical-align: text-bottom;
		border-radius: .04rem;
		border: 1px solid rgba(153, 153, 153, .3);
		margin-left: 1%;
	}
	
	.tag {
		line-height: 16px;
		padding: 0 .11rem;
		border: 1px solid rgba(153, 153, 153, .3);
		border-radius: .04rem;
		font-size: .2rem;
		color: #999;
		margin-right: 2%;
		vertical-align: text-bottom;
		background: transparent;
		clear: both;
	}
	
	.books-list-item-desc {
		width: 100%;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		word-break: break-all;
		font-size: .24rem;
		line-height: .32rem;
		height: .64rem;
		color: #999;
		cursor: pointer;
		padding-top: 6%;
		max-width: 750px;
	}
	
	.change {
		width: 100%;
		height: 10%;
		color: #333;
		font-size: .28rem;
		vertical-align: middle;
		display: inline-block;
		text-align: center;
		border-top: 1px solid #f3f3f3;
		padding: 0.8rem 0;
		max-width: 750px;
	}
	
	.change .reflesh {
		width: .24rem;
		height: .24rem;
		margin-left: 0.6rem;
		line-height: .96rem;
	}
	
	.box1 {
		width: 36%;
		display: inline-block;
		border-top: 1px solid #F3F3F3;
	}
	
	.box2 {
		vertical-align: middle;
		color: #00C98D;
		line-height: .34rem;
	}
	
	.box3 {
		font-size: 16px;
	}
	
	.box4 {
		max-width: 750px;
		text-align: center;
		margin: 4% 4%;
		line-height: .10rem;
	}
	
	.books-group-4 {
		margin: 0;
		text-align: center;
		display: block;
		padding-bottom: 5%;
	}
	
	.books-group-4 .book {
		width: 22%;
		height: 140px;
		display: inline-block;
		margin: 0;
		padding-right: .32rem;
	}
	
	.book {
		width: 100%;
		position: relative;
	}
	
	.book .book-cover {
		width: 100%;
		height: 75%;
		padding-top: 5%;
		position: relative;
		overflow: hidden;
		margin-bottom: 10px;
	}
	
	.book .book-cover img {
		display: block;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		height: 100%;
	}
	
	.book-title {
		color: #333;
		width: 100%;
		height: 17.5%;
		font-size: .24rem;
	}
	
	.book-author {
		color: #999;
		height: 17.5%;
		padding-left: 28%;
		text-align: left;
		font-size: 10px;
	}
	
	.oneboxpic2 {
		display: inline-block;
		position: absolute;
		background-repeat: no-repeat;
		background-size: contain;
		font-size: .4rem;
		text-align: center;
		color: #fff;
		width: 20%;
		left: 5%;
		height: 20%;
		top: 0;
		z-index: 11;
	}
	
	.oneboxpic3 {
		background-image: url(../../assets/img/num.png);
	}
	
	.oneboxpic4 {
		background-image: url(../../assets/img/num1.png);
	}
	
	.oneboxpic5 {
		background-image: url(../../assets/img/num2.png);
	}
	
	.box5 {
		text-align: center;
		width: 100%;
		height: auto;
		max-width: 750px;
	}
	
	.box6 {
		display: inline-block;
		width: 100%;
		height: auto;
		margin-left: 45%;
	}
	
	.box7 {
		border-radius: 50%;
		background-color: #00C98D;
		width: 7px;
		height: 7px;
		display: inline-block;
		list-style-type: square;
		margin-bottom: 5%;
	}
	
	.newbookmore {
		text-align: center;
		font-size: 15px;
		padding: 5% 0;
		max-width: 750px;
		border-top: 1px solid rgba(153, 153, 153, .3);
	}
	
	.seperator {
		background-color: #F0F0F2;
		width: 100%;
		height: 8px;
	}
	
	.newbook {
		width: 100%;
		height: auto;
		overflow: hidden;
		padding-bottom: 4%;
		max-width: 750px;
	}
	
	.onebox {
		width: 25%;
		height: auto;
		padding: 0 2%;
		position: relative;
		float: left;
	}
	
	.oneboxpic1 {
		width: 100%;
		height: 100%;
		overflow: hidden;
	}
	
	.oneboxpic1 img {
		width: 100%;
	}
	
	.oneboxpic2 {
		display: inline-block;
		position: absolute;
		background-repeat: no-repeat;
		background-size: contain;
		font-size: .4rem;
		text-align: center;
		color: #fff;
		width: 20%;
		left: 7%;
		height: 20%;
		top: 0;
		z-index: 11;
	}
	
	.twobox {
		float: left;
		width: 65%;
		padding: 0 2%;
		padding-top: 3%;
	}
	
	.twobox h3 {
		font-weight: normal;
		font-size: 15px;
	}
	
	.twobox p {
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
	
	.book-list-item-text span {
		color: orange;
		font-size: 20px;
		padding-left: 2%;
	}
	
	.newbooknum {
		width: 100%;
		max-width: 750px;
		font-size: 16px;
		overflow: hidden;
		text-align: center;
		padding: 5% 0;
		border-top: 1px solid rgba(153, 153, 153, .3);
	}
	
	.newbookleft {
		float: left;
		width: 40%;
	}
	
	.newbookleft li {
		float: left;
		margin-left: 4%;
	}
	
	.newbookleft li:nth-of-type(1) {
		color: orange;
		font-size: 22px;
	}
	
	.newbookleft li:nth-of-type(2) {
		line-height: 28px;
		font-size: 16px;
		padding-left: 2%;
	}
	
	.newbookright {
		float: left;
		width: 35%;
		margin-left: 20%;
		line-height: 28px;
	}
	
	.newbookright span {
		border: 1px solid rgba(153, 153, 153, .3);
		margin-left: 2%;
		font-size: 14px;
		padding: 1% 2%;
	}
	
	.newbookright span:nth-of-type(1) {
		color: #70a7e3;
	}
	
	.newbookright span:nth-of-type(2) {
		color: #999;
	}
</style>