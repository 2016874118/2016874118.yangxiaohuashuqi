<template>
	<div class="hole">
		<nav class="topHeader">
			<h1 class="logo">
           <span class="logo-img">
              <img src="../../assets/img/logo.png" />
           </span>
           <span class="logo-name">
           	  <img src="../../assets/img/website-name.png" />
           </span>
        </h1>
			<ul class="items">
				<li class="btns">
					<router-link to="./login">
						<img id="loginpic" src="../../assets/img/avatar.png" />
					</router-link>
				</li>
				<li class="btns">
					<router-link to="./bookshelf">
						<img src="../../assets/img/bookshelf.png" />
					</router-link>
				</li>

				<li class="btns">
					<router-link to="./search">
						<img src="../../assets/img/search.png" />
					</router-link>
				</li>
			</ul>
		</nav>
		<div class="navicons">
			<nav class="nav-icon">
				<ul class="navul">

					<li class="navli">
						<router-link to="classification">
							<img src="../../assets/img/pic1.png" />
							<h2>分类</h2>
						</router-link>
					</li>
					<li class="navli">
						<router-link to="rank">
							<img src="../../assets/img/pic2.png" />
							<h2>排行</h2>
						</router-link>
					</li>
					<li class="navli">
						<router-link to="girllist">
							<img src="../../assets/img/pic3.png" />
							<h2>女频</h2>
						</router-link>
					</li>
					<li class="navli">
						<router-link to="boylist">
							<img src="../../assets/img/pic4.png" />
							<h2>男频</h2>
						</router-link>
					</li>
					<li class="navli">
						<router-link to="booklist">
							<img src="../../assets/img/pic5.png" />
							<h2>书单</h2>
						</router-link>
					</li>
				</ul>
			</nav>
		</div>
		<div class="info-block">
			<div class="info-detail-block">
				<router-link to="bookdetail">
					<h3 class="ellip">最近阅读: 鬼医毒妃: 嫁个绝色小相公</h3>
					<div class="arrow"><i class="iconfont">&#xe627;</i></div>
				</router-link>
			</div>
		</div>
		<div class="scbanner row-banner">
			<a href="">
				<img src="../../assets/img/nav.jpg" />
			</a>
		</div>
		<header class="header">
			<h3 class="indextitle">
      		&nbsp;&nbsp;&nbsp;&nbsp;精品推荐     		
      	</h3>
		</header>
		<div class="books-group-4n">
			<ul class="books-group-4">
				<router-link to="bookdetail">
					<li class="book">
						<div class="book-cover">
							<img src="../../assets/img/book7.jpg" />
						</div>
						<div class="book-title">都市大领主</div>
						<div class="book-author">木土</div>
					</li>
				</router-link>
				<router-link to="bookdetail">
					<li class="book">
						<div class="book-cover">
							<img src="../../assets/img/book1.jpg" />
						</div>
						<div class="book-title">重回六零：...</div>
						<div class="book-author">南方荔枝</div>
					</li>
				</router-link>
				<router-link to="bookdetail">
					<li class="book">
						<div class="book-cover">
							<img src="../../assets/img/book2.jpg" />
						</div>
						<div class="book-title">薛小冉的古...</div>
						<div class="book-author">千墨</div>
					</li>
				</router-link>
				<router-link to="bookdetail">
					<li class="book">
						<div class="book-cover">
							<img src="../../assets/img/book5.jpg" />
						</div>
						<div class="book-title">将军快跑..</div>
						<div class="book-author">千墨</div>
					</li>
				</router-link>
			</ul>
		</div>
		<div class="change">
			<span>换一换</span>
			<span class="iconfont reflesh">&#xe62d;</span>
		</div>
		<div class="seperator"></div>
		<header class="header">
			<h3 class="indextitle">
      		&nbsp;&nbsp;&nbsp;&nbsp;女生美文     		
      	</h3>
		</header>
		<div class="books-group-4n">
			<ul class="books-group-4">
				<router-link to="bookdetail">
					<li class="book">
						<div class="book-cover">
							<img src="../../assets/img/book9.jpg" />
						</div>
						<div class="book-title">农女小当家</div>
						<div class="book-author">妻久十</div>
					</li>
				</router-link>
				<router-link to="bookdetail">
					<li class="book">
						<div class="book-cover">
							<img src="../../assets/img/book10.jpg" />
						</div>
						<div class="book-title">农门小医后</div>
						<div class="book-author">流苏入面</div>
					</li>
				</router-link>
				<router-link to="bookdetail">
					<li class="book">
						<div class="book-cover">
							<img src="../../assets/img/book11.jpg" />
						</div>
						<div class="book-title">将军快跑..</div>
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

		<div class="book-list">
			<router-link to="bookdetail">
				<div class="book-list-item">
					<div class="book-list-item-title">
						<div class="book-list-item-text">农门俏娘子：捡个郎君生个娃</div>
						<div class="tags">
							<span class="tag-serial">连载</span>
							<span class="tag">古代言情</span>
						</div>
					</div>
					<div class="books-list-item-desc">穿越到苦哈哈的农村，上有寡母，下有幼弟，还被未婚夫退了亲，夏白薇抓了一手烂牌。</div>
				</div>
			</router-link>
			<router-link to="bookdetail">
				<div class="book-list-item">
					<div class="book-list-item-title">
						<div class="book-list-item-text">半欢半爱：戏精总裁赖上身</div>
						<div class="tags">
							<span class="tag-serial">连载</span>
							<span class="tag">现代言情</span>
						</div>
					</div>
					<div class="books-list-item-desc">人家求锤得锤，陈思语也求男得男，求炮得炮。几杯酒灌醉自己后，还真睡了一只“鸭”。第二天早上，留下千元炮资就溜，结果被“鸭王”找到要求尝还巨款，一穷二白的陈思语无力垫付巨额炮资，只能包他住包他吃了……</div>
				</div>
			</router-link>
			<router-link to="bookdetail">
				<div class="book-list-item">
					<div class="book-list-item-title">
						<div class="book-list-item-text">穿越种田：抱紧首辅粗大腿</div>
						<div class="tags">
							<span class="tag-serial">连载</span>
							<span class="tag">古代架空</span>
						</div>
					</div>
					<div class="books-list-item-desc">穿进书中，变成个小村姑她只能被迫接受，只是还成了个反派恶毒继妹，最后被这个首辅哥哥做成了人彘?</div>
				</div>
			</router-link>
		</div>

		<div class="change">
			<span>换一换</span>
			<span class="iconfont reflesh">&#xe62d;</span>
		</div>
		<div class="seperator"></div>

		<header class="header">
			<h3 class="indextitle">
      		&nbsp;&nbsp;&nbsp;&nbsp;男生热文     		
      	</h3>
		</header>
		<div class="books-group-4n">
			<ul class="books-group-4">
				<router-link to="bookdetail">
					<li class="book">
						<div class="book-cover">
							<img src="../../assets/img/book12.jpg" />
						</div>
						<div class="book-title">冥龙神尊</div>
						<div class="book-author">深意童年</div>
					</li>
				</router-link>
				<router-link to="bookdetail">
					<li class="book">
						<div class="book-cover">
							<img src="../../assets/img/book13.jpg" />
						</div>
						<div class="book-title">诸天之主</div>
						<div class="book-author">云泪天南</div>
					</li>
				</router-link>
				<router-link to="bookdetail">
					<li class="book">
						<div class="book-cover">
							<img src="../../assets/img/book14.jpg" />
						</div>
						<div class="book-title">万古神尊</div>
						<div class="book-author">绯南</div>
					</li>
				</router-link>
				<router-link to="bookdetail">
					<li class="book">
						<div class="book-cover">
							<img src="../../assets/img/book7.jpg" />
						</div>
						<div class="book-title">都市大领主</div>
						<div class="book-author">千墨</div>
					</li>
				</router-link>
			</ul>
		</div>

		<div class="book-list">
			<router-link to="bookdetail">
				<div class="book-list-item">
					<div class="book-list-item-title">
						<div class="book-list-item-text">都市之极品至尊</div>
						<div class="tags">
							<span class="tag-serial">连载</span>
							<span class="tag">都市生活</span>
						</div>
					</div>
					<div class="books-list-item-desc">意外夺得通天本领的传承，从此以后一鸣惊人，看他如何以无敌之姿强势把所有不服者碾在脚下！但凡犯我唐远天威者，近必屠，远必诛！</div>
				</div>
			</router-link>
			<router-link to="bookdetail">
				<div class="book-list-item">
					<div class="book-list-item-title">
						<div class="book-list-item-text">重生之武魂至尊</div>
						<div class="tags">
							<span class="tag-serial">连载</span>
							<span class="tag">东方玄幻</span>
						</div>
					</div>
					<div class="books-list-item-desc">天门篆刻真言：代天罚，灵界之人永久不得飞升荒界！号称三千年来最为惊才绝艳的炎火至尊同样无法挣脱天门桎梏，在雷劫下黯然陨落。</div>
				</div>
			</router-link>
			<router-link to="bookdetail">
				<div class="book-list-item">
					<div class="book-list-item-title">
						<div class="book-list-item-text">乡村超级医圣</div>
						<div class="tags">
							<span class="tag-serial">连载</span>
							<span class="tag">都市生活</span>
						</div>
					</div>
					<div class="books-list-item-desc">【火爆乡村医生】一名从三流中医学院毕业的学生，毕业后无处可去，只好回到乡下成为了一名村医。原以为这辈子将是混吃等死碌碌无为，从天而降的医圣传承为他打开了一扇新的大门。掌握最强医术，成为超级村医，权贵屈膝，美人倾心，袖手天下！醒掌世人生死，醉卧美人膝。超级医圣，你值得拥有！</div>
				</div>
			</router-link>
		</div>

		<div class="change">
			<span>换一换</span>
			<span class="iconfont reflesh">&#xe62d;</span>
		</div>
		<div class="seperator"></div>

		<header class="header">
			<h3 class="indextitle">
      		&nbsp;&nbsp;&nbsp;&nbsp;新书专区     		
      	</h3>
		</header>

		<router-link to="bookdetail">
			<div class="newbook">
				<div class="onebox">
					<div class="oneboxpic1">
						<img class="" src="../../assets/img/book16.jpg" />
					</div>
					<div class="oneboxpic2"></div>
				</div>

				<div class="twobox">
					<h3>特战军魂</h3>
					<p>火狼</p>
					<p> 热血少年，投身行伍，赤子之心，报效祖国，西南军区，火狼特战队深入金三角，血雨腥风的清虎行动。</p>
					<span class="tag-serial">连载</span>
					<span class="tag">65万字</span>
					<span class="tag">铁血</span>
					<span class="tag">励志</span>
				</div>
			</div>
		</router-link>
		<router-link to="bookdetail">
			<div class="newbooknum">
				<ul class="newbookleft">
					<li>2</li>
					<li>豪婿</li>

				</ul>
				<ul class="newbookright">
					<span>连载</span>
					<span>都市生活</span>
				</ul>
			</div>

			<div class="newbooknum">
				<ul class="newbookleft">
					<li>3</li>
					<li>都市之最强狂兵</li>

				</ul>
				<ul class="newbookright">
					<span>连载</span>
					<span>都市生活</span>
				</ul>
			</div>
			<div class="newbooknum">
				<ul class="newbookleft">
					<li>4</li>
					<li>我的总裁未婚妻</li>

				</ul>
				<ul class="newbookright">
					<span>连载</span>
					<span>都市异能</span>
				</ul>
			</div>
			<div class="newbooknum">
				<ul class="newbookleft">
					<li>5</li>
					<li>最强狂兵</li>

				</ul>
				<ul class="newbookright">
					<span>连载</span>
					<span>都市生活</span>
				</ul>
			</div>
		</router-link>
		<router-link to="boygirllists">
			<div class="newbookmore">查看更多</div>
		</router-link>
		<div class="seperator"></div>

		<header class="header">
			<h3 class="indextitle">
      		&nbsp;&nbsp;&nbsp;&nbsp;书旗畅销榜     		
      	</h3>
		</header>

		<router-link to="bookdetail">
			<div class="newbook">
				<div class="onebox">
					<div class="oneboxpic1">
						<img class="" src="../../assets/img/book17.jpg" />
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

			<div class="newbooknum">
				<ul class="newbookleft">
					<li>2</li>
					<li>道法永恒</li>

				</ul>
				<ul class="newbookright">
					<span>连载</span>
					<span>东方玄幻</span>
				</ul>
			</div>

			<div class="newbooknum">
				<ul class="newbookleft">
					<li>3</li>
					<li>我在古代有超市</li>

				</ul>
				<ul class="newbookright">
					<span>完结</span>
					<span>古代言情</span>
				</ul>
			</div>
			<div class="newbooknum">
				<ul class="newbookleft">
					<li>4</li>
					<li>炮灰药逆袭</li>

				</ul>
				<ul class="newbookright">
					<span>连载</span>
					<span>穿越时空</span>
				</ul>
			</div>
			<div class="newbooknum">
				<ul class="newbookleft">
					<li>5</li>
					<li>农门巧厨娘</li>

				</ul>
				<ul class="newbookright">
					<span>连载</span>
					<span>古代架空</span>
				</ul>
			</div>
		</router-link>
		<div class="newbookmore">
			<router-link to="/boygirllists">查看更多</router-link>
		</div>
		<div class="seperator"></div>

		<header class="header">
			<h3 class="indextitle">
      		&nbsp;&nbsp;&nbsp;&nbsp;精选书单     		
      	</h3>
		</header>
		<router-link to="booklist">
			<div class="booklists">
				<ul class="booklistingleft">
					<h3>奶油味恋爱</h3>
					<p>文笔和情节都不错的小说 喜欢he的不要错过 这些作者的文质量都有保证 还有一些文在这里搜不到 就没添加了 不过这几本书到时可以反复读</p>
				</ul>
				<ul class="booklistimgright">
					<li>
						<img src="../../assets/img/bg2.jpg" />
						<img src="../../assets/img/bg3.jpg" />
					</li>
					<img class="bookindex" src="../../assets/img/bg1.jpg" />
				</ul>
			</div>
		</router-link>
		<router-link to="booklist">
			<div class="booklists">
				<div class="booklistingleft">
					<h3>推荐一波小清新古言</h3>
					<p>文笔和情节都不错的小说 喜欢he的不要错过 这些作者的文质量都有保证 还有一些文在这里搜不到 就没添加了 不过这几本书到时可以反复读</p>
					<p>
						<span class="tag">宠文</span>
						<span class="tag">重生</span>
						<span class="tag">穿越</span>
					</p>
				</div>
				<div class="booklistimgright">
					<li>
						<img src="../../assets/img/book5.jpg" />
						<img src="../../assets/img/book5.jpg" />
					</li>
					<img class="bookindex" src="../../assets/img/book4.jpg" />
				</div>
			</div>
		</router-link>
		<router-link to="booklist">
			<section class="newbookmore">
				查看更多
			</section>
		</router-link>
		<div class="seperator"></div>

		<header class="header">
			<h3 class="indextitle">
      		&nbsp;&nbsp;&nbsp;&nbsp;根据你的阅读兴趣为你推荐  		
      	</h3>
		</header>
		<router-link to="bookdetail">
			<div class="bookinstr" v-for="(item,index) in list">
				<div class="bookinstrl">
					<img :src="item.src" />
				</div>
				<div class="bookinstrr">
					<h3>{{item.title}}</h3>
					<p>{{item.p1}}</p>
					<p>{{item.p2}}</p>
					<span class="tag-serial">{{item.tag1}}</span>
					<span class="tag">{{item.tag2}}</span>
					<span class="tag">{{item.tag3}}</span>
					<span class="tag">{{item.tag4}}</span>
				</div>
			</div>
		</router-link>
		<button class="download">下载书旗小说客户端</button>
		<p class="newbookbuttom">海量图书，更高品质阅读体验</p>
		<p class="bookbuttom">©2016书旗网shuqi.com</p>
		<p class="bookbuttom">粤ICP备13078413号-1</p>
		<p class="bookbuttom"><img src="../../assets/img/coryright-wen.png" />网络文化经营许可证：粤网文[2017]3018-499号</p>
		<p class="bookbuttom">增值电信业务经营许可证：粤B2-20130742</p>
		<p class="bookbuttom">广州阿里巴巴文学信息技术有限公司 版权所有</p>
		<p class="bookbuttom">广州市天河区黄埔大道西平云路163号广电平云广场B塔13层自编03单元</p>
		<p class="bookbuttom">0571-26883636</p>

	</div>
</template>

<script>
	export default {
		name: 'bookinstrr',
		data() {
			return {
				msg: 'hoiewhipefip3if3',
				list: []
			}
		},
		mounted() {
			var _this = this;
			this.$http.get('./data/model.json')
				.then(function(res) {
					_this.list = res.data.list
				})
				.catch(() => {

				})
				.finally((f) => {})
		}
	}
</script>

<style scoped="scoped">
	* {
		padding: 0px;
		margin: 0px;
		list-style: none;
	}
	
	li {
		display: list-item;
	}
	
	#app {
		background-color: white;
		border: 1px solid #f3f3f3;
	}
	
	.hole {
		border: 1px solid #F3F3F3;
	}
	
	.topHeader {
		overflow: hidden;
		width: 100%;
		border-bottom: 1px solid #f3f3f3;
		padding-bottom: 2%;
	}
	
	.topHeader h1 {
		display: inline-block;
		margin-left: 4%;
		margin-top: 10px;
		float: left;
		width: 34.5%;
		height: auto;
		line-height: 25px;
	}
	
	.logo-img img {
		height: 100%;
		width: 23%;
	}
	
	.logo-name img {
		width: 66%;
		height: 100%;
		margin-bottom: 5px !important;
	}
	
	.topHeader .items {
		width: 38%;
		height: 100%;
		float: right;
	}
	
	.topHeader .items li {
		float: left;
		width: 20%;
		height: 100%;
		margin-top: 10px;
		margin-right: 11%;
	}
	
	.topHeader .items li img {
		width: 100%;
		height: 100%;
	}
	
	.items #loginpic {
		border-radius: 50%;
	}
	
	.btns a img {
		width: 66%;
		height: 100%;
	}
	
	.navicons {
		border-bottom: 1px solid #f3f3f3;
		overflow: hidden;
	}
	
	.nav-icon {
		padding-top: 15px;
		padding-bottom: 12px;
		margin-left: 6%;
		margin-right: 6%;
		display: block;
	}
	
	.navul {
		width: 100%;
		margin-left: 2.6%;
		overflow: hidden;
	}
	
	.navli {
		width: 13.5%;
		height: auto;
		text-align: center;
		display: list-item;
		float: left;
		margin-right: 6.5%;
	}
	
	.navli i {
		display: inline-block;
		width: 100%;
		height: 50px
	}
	
	.navli h2 {
		width: 100%;
		height: 15%;
		margin-top: 15px;
		font-size: .24rem;
		color: #999;
		position: relative;
		font-weight: 400;
	}
	
	.navli img {
		width: 100%;
		height: 100%;
	}
	
	.info-block {
		width: 91.5%;
		height: auto;
		padding: 12px 4%;
		border-bottom: 1px solid #f3f3f3;
		margin-left: 3%;
	}
	
	.info-detail-block {
		height: auto;
		overflow: hidden;
	}
	
	.ellip {
		font-size: .28rem;
		color: #333;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		word-break: break-all;
		font-weight: 400;
		float: left;
	}
	
	.arrow {
		float: right;
		text-align: center;
		color: #999;
	}
	
	.scbanner img {
		width: 100%;
		height: auto;
		vertical-align: middle;
		border: 1px solid #f1f1f1;
	}
	
	.header {
		max-width: 750px;
		background: #fff;
		width: 100%;
		padding: 1% 0 1% 0;
		font-size: 8px;
		position: relative;
		display: block;
		color: #333;
	}
	
	header .indextitle:after {
		max-width: 750px;
		content: '';
		width: 0.7%;
		height: 50%;
		line-height: 28px;
		display: inline-block;
		background: #00c98d;
		position: absolute;
		top: 8px;
		left: 0;
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
	
	.book-list {
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
	}
	
	.newbook {
		width: 100%;
		height: auto;
		overflow: hidden;
		padding-bottom: 4%;
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
		background-image: url(../../assets/img/num.png);
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
		font-size: 20px;
		padding-left: 2%;
	}
	
	.newbooknum {
		width: 100%;
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
		color: #FFBE73;
		font-size: 22px;
	}
	
	.newbookleft li:nth-of-type(2) {
		line-height: 28px;
		font-size: 15px;
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
		padding: 0 2% 0 2%;
	}
	
	.newbookright span:nth-of-type(1) {
		color: #70a7e3;
	}
	
	.newbookright span:nth-of-type(2) {
		color: #999;
	}
	
	.newbookmore {
		text-align: center;
		font-size: 14px;
		padding: 5% 0;
		border-top: 1px solid rgba(153, 153, 153, .3);
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
	
	.booklistingleft {
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
	
	.bookinstrr h3 {
		font-weight: normal;
		font-size: 16px;
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
	
	.bookinstrr span {
		display: inline-block;
		margin-top: 6%;
	}
	
	.download {
		color: white;
		text-align: center;
		border: none;
		background-color: #00C98D;
		line-height: 18%;
		padding: 5% 10%;
		border-radius: .6rem;
		font-size: .28rem;
		width: 88%;
		margin-left: 6%;
		margin-top: 7%;
	}
	
	.newbookbuttom {
		width: 100%;
		height: auto;
		padding: 3% 0;
		text-align: center;
	}
	
	.bookbuttom {
		width: 100%;
		height: auto;
		text-align: center;
		color: #999;
		padding: 0.8% 0;
	}
	
	.bookbuttom img {
		width: 20px;
		height: 20px;
	}
	
	.bookbuttom:nth-last-of-type {
		padding-bottom: 8%;
	}
</style>