<template>
	<div class="hole">
		<header>
			<i class="iconfont l back" @click="back()">&#xeb09;</i>
			<span class="title1">书籍详情</span>
			<router-link to="index">
				<i class="iconfont r">&#xe65d;</i>
			</router-link>
		</header>
		<div style="height: 39px;"></div>
		<div class="bookinstr">
			<section class="bookinstrl">
				<img src="../../assets/img/book2.jpg" />
			</section>
			<section class="bookinstrr">
				<h3>古代搭伙之旅</h3>
				<p>王妃</p>
				<p>古代言情 495万字</p>
				<p>连载中</p>
			</section>
		</div>
		<ul class="det1">
			<router-link to="./newchapter">
			   <li class="btn1 btn2">开始阅读</li>
			</router-link>
			<router-link to="login">
			   <li class="btn1">离线下载</li>
			</router-link>
			<router-link to="bookshelf">
			   <li class="btn1">加书架</li>
			</router-link>
		</ul>
		<p class="btn3">
			前世蒙蔽双眼，穆唯西深陷诡秘陷阱，亲手推最爱自己的人入黄泉，重生归来，她竟有两幅嘴脸，人前冷厉如魔鬼，虐渣男斗白莲惩极品，而在江枫眠面前，她却…‘需要江江抱抱才能起床’‘需要江江亲亲才能开心’‘需要…喂喂喂江枫眠你干嘛！”男人挽唇压下身来‘今天不起了，好好研究生儿子’。穆唯西此生最大的心愿便是——余生每天皆许江枫眠（甜甜甜）
		</p>
		<router-link to="/newchapter">
			<ul class="btn4">
				<li class="iconfont btn5">&#xe60c;</li>
				<li class="btn5">最新</li>
				<li class="btn5">第八百三十六章</li>
				<li class="iconfont btn5">&#xe627;</li>
			</ul>
		</router-link>
		<router-link to="/catalogue">
			<ul class="btn4">
				<li class="iconfont btn5">&#xe609;</li>
				<li class="btn5">目录</li>
				<li class="btn5">9个小时前更新</li>
				<li class="iconfont btn5 btn6">&#xe627;</li>
			</ul>
		</router-link>
		<header class="header">
			<h3 class="indextitle">
      		  &nbsp;&nbsp;&nbsp;&nbsp;精华评论    		
      	    </h3>
		</header>
		<ul class="btn7">
			<img src="../../assets/img/top.jpg" />
			<span class="btn8">书友67564656</span>
			<p class="btn9">新书来啦新书来啦喜欢的宝儿来留个脚印么么么么么么么哒~</p>
		</ul>
		<ul class="btn7">
			<img src="../../assets/img/a1.jpg" />
			<span class="btn8">未夏Yee</span>
			<p class="btn9">本以为前几天的事处理完就能好好更新，但是对不起大家，大前天开始浑身肌肉关节酸痛，发烧不退，可能会断更两天，真的抱歉，打字时手指关节是疼的，真的没法码字，对不起大家，身体康复一定会继续更新</p>
		</ul>
		<ul class="btn7">
			<img src="../../assets/img/a2.jpg" />
			<span class="btn8">怅然若失</span>
			<p class="btn9">超喜欢闷骚江江和撩汉唯西，嘿嘿😁，对了，大大，顾少是不是喜欢唯西啊，希望顾少有个好的结果</p>
		</ul>
		<header class="header">
			<h3 class="indextitle">
      		&nbsp;&nbsp;&nbsp;&nbsp;看过这本书的人还在看    		
      	</h3>
		</header>
		<div class="books-group-4n">

			<ul class="books-group-4">
				<router-link to="boygirllists">
					<li class="book">
						<div class="book-cover">
							<img src="../../assets/img/bg11.jpg" />
						</div>
						<div class="book-title">我不是公主</div>
					</li>
					<li class="book">
						<div class="book-cover">
							<img src="../../assets/img/book10.jpg" />
						</div>
						<div class="book-title">农家小医后</div>
					</li>
					<li class="book">
						<div class="book-cover">
							<img src="../../assets/img/book11.jpg" />
						</div>
						<div class="book-title">奉子成婚</div>
					</li>
					<li class="book">
						<div class="book-cover">
							<img src="../../assets/img/book9.jpg" />
						</div>
						<div class="book-title">将军谁料理</div>
					</li>
					<li class="book">
						<div class="book-cover">
							<img src="../../assets/img/book3.jpg" />
						</div>
						<div class="book-title">戏精总裁...</div>
					</li>
					<li class="book">
						<div class="book-cover">
							<img src="../../assets/img/book4.jpg" />
						</div>
						<div class="book-title">那个王爷坏得很</div>
					</li>
					<li class="book">
						<div class="book-cover">
							<img src="../../assets/img/book5.jpg" />
						</div>
						<div class="book-title">养家小丫鬟</div>
					</li>
					<li class="book">
						<div class="book-cover">
							<img src="../../assets/img/book6.jpg" />
						</div>
						<div class="book-title">养虾日常</div>
					</li>
				</router-link>
			</ul>

		</div>
		<div class="change showhidden">
			<span>换一换</span>
			<span class="iconfont reflesh">&#xe62d;</span>
		</div>
		<div class="seperator"></div>
		<header class="header btn14" @click="showhidden">
			<h3 class="indextitle iconfont">
      		&nbsp;&nbsp;&nbsp;&nbsp;看过这本书的人还在看  
      		<span class="iconfont btn10 btns1" >&#xe617;</span>
      	</h3>
		</header>
		<div v-bind:class="{'show-active1':isactive,'show-active2':!isactive}" class="btn13">
			<p class="btn11">版权来源：<span class="btn12">书旗小说</span></p>
			<p class="btn11">本书的数字版权由原创版权提供，授权本软件使用，制作,发行，若包含不良信息，请及时告知客服。</p>
		</div>
		<div class="seperator"></div>
		<v-footer></v-footer>

	</div>
</template>

<script>
	import Footer from '../common/footer.vue'
	export default {
		data() {
			return {
				msg: 'hoiewhipefip3if3',
				list7: [],
				isactive: false
			}
		},
		components: {
			'v-footer': Footer
		},
		methods: {
			back() {
				this.$router.go(-1)
			},
			showhidden: function() {
				this.isactive = !this.isactive
			}
		},

		name: 'books-group-4',
		mounted() {

			var _this = this;
			this.$http.get('./data/model.json')
				.then(function(res) {
					_this.list7 = res.data.list7
				})
				.catch(() => {

				})
				.finally((f) => {})
		}
	}
</script>

<style scoped="scoped">
	.hole {
		overflow-x: hidden;
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
		z-index: 1000;
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
	
	.bookinstr {
		width: 100%;
		height: auto;
		overflow: hidden;
		padding-bottom: 4%;
		padding-top: 4%;
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
		margin-top: 3%;
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
		font-size: 15px;
	}
	
	.det1 {
		width: 100%;
		padding: 0 2% 0 2%;
		overflow: hidden;
	}
	
	.btn1 {
		width: 28%;
		height: 36px;
		font-size: 14px;
		float: left;
		margin-right: 4%;
		border: 1px solid #00C98D;
		text-align: center;
		line-height: 36px;
		border-radius: 7%;
		color: #00C98D;
	}
	
	.btn2 {
		background-color: #00C98D;
		color: white;
	}
	
	.btn3 {
		color: #999;
		font-size: 14px;
		margin-top: 5%;
		padding: 0 2% 0 2%;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 4;
		-webkit-box-orient: vertical;
	}
	
	.btn4 {
		width: 100%;
		padding: 5% 2% 8% 2%;
		border: 1px solid #F3F3F3;
	}
	
	.btn5 {
		float: left;
		margin-right: 2%;
		font-size: 14px;
		line-height: 14px;
	}
	
	.btn4 .iconfont {
		font-size: 18px;
		color: #999;
	}
	
	.btn4 .btn5:nth-of-type(3) {
		color: #999;
		margin-left: 2%;
	}
	
	.btn4 .btn5:nth-of-type(4) {
		display: block;
		margin-left: 39%;
	}
	
	.header {
		max-width: 750px;
		background: #fff;
		width: 100%;
		padding: 1% 1%;
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
		top: 16px;
		left: 0;
	}
	
	.btn7 {
		display: block;
		width: 100%;
		height: auto;
		padding: 5% 2% 5% 2%;
		border: 1px solid #F3F3F3;
	}
	
	.btn7 img {
		width: 30px;
		height: 30px;
		border-radius: 50%;
		overflow: hidden;
		vertical-align: middle;
	}
	
	.btn8 {
		font-size: 15px;
		color: #999;
		margin-left: 3%;
		line-height: 20px;
	}
	
	.btn9 {
		font-size: 15px;
		margin-left: 11%;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
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
		overflow: hidden;
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
	}
	
	.change .reflesh {
		width: .24rem;
		height: .24rem;
		margin-left: 0.6rem;
		line-height: .96rem;
	}
	
	.seperator {
		background-color: #F0F0F2;
		width: 100%;
		height: 8px;
	}
	
	.btn10 {
		margin-left: 45%;
		color: #999;
	}
	
	.btn11 {
		color: #999;
		margin: 0 5% 0 5%;
		font-size: 15px;
	}
	
	.btn12 {
		color: #00C98D;
	}
	
	.show-active1 {
		display: block;
	}
	
	.show-active2 {
		display: none;
	}
	
	.btn13 {
		padding-top: 3%;
		padding-bottom: 5%;
	}
	
	.btn14 {
		border: none;
		font-size: 10px;
	}
	
	.btn14 h3 {
		font-size: 15px;
	}
</style>