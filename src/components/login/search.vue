<template>
	<div class="hole">
		<header>
			<i class="iconfont l back" @click="back()">&#xeb09;</i>
			<span class="title1">搜索中心</span>
			<router-link to="index">
				<i class="iconfont r">&#xe65d;</i>
			</router-link>
		</header>
		<div style="height: 39px;"></div>
		<div class="search1">
			<i class="search2 iconfont">&#xe614;</i>
			<input class="search3" type="text" placeholder="书名|作者|关键词"  />
		</div>
		<div class="search4" v-show="flag==1" >
			<router-link to="../bookdetail">
			<ul class="search5" v-for="item in list6.slice(0,9)">
				<li class="search6">
					{{item.title}}
				</li>				
			</ul>
			</router-link>
		</div>
		<div class="search4" v-show="flag==2" >
			<router-link to="../bookdetail">
			<ul class="search5" v-for="item in list6.slice(9,18)">
				<li class="search6">
					{{item.title}}
				</li>				
			</ul>
			</router-link>
		</div>
		<div class="search4" v-show="flag==3" >
			<router-link to="../bookdetail">
			<ul class="search5" v-for="item in list6.slice(18)">
				<li class="search6">
					{{item.title}}
				</li>				
			</ul>
			</router-link>
		</div>
		<div class="change" v-on:click="changeflag">
      	 <span>换一换</span>
      	 <span class="iconfont reflesh">&#xe62d;</span>
      </div>
		<v-footer></v-footer>
		
	</div>
</template>

<script>
	 import Footer from '../common/footer.vue'
		export default{	
			components:{
			'v-footer':Footer
		},
			name:'search4',
		  	data(){
		  		return{
		  			flag: 1,
					count: 1,
		  			msg:'hoiewhipefip3if3',
		  			list6:[]		  			
		  		}
		  	},
		  	methods:{
			back(){
				this.$router.go(-1)
			},
			changeflag() {
					this.count++;
					if(this.count > 3) {
						this.count = 1;
					}
					this.flag = this.count;
				}
		},
		  	mounted(){
		  		
		  		var _this=this;
		  		this.$http.get('./data/model.json')
		  		.then(function(res){
		  			_this.list6=res.data.list6
		  		})
		  		.catch(()=>{
		  			
		  		})
		  		.finally((f)=>{
		  		})
		  	}
	}
</script>

<style scoped="scoped">
	.hole{
		border: 1px solid #F3F3F3;		
	}
	header{
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
	}
	header i{
		color: #00C98D;
		font-size: 20px;
		width: 30%;
	}	
    .title1{
		display: inline-blockblock;
		width: 30%;
		margin-left: 10%;
		font-size: 16px;
	}
	.l{
		float: left;
		margin-left: 4%;
		font-size: 22px;
	}
	.r{
		float: right;
		margin-right: 4%;
		text-align: right;
		font-size: 24px;
	}
	.search1{
		width: 100%;
		height: 38px;
		background-color: whitesmoke;
		padding: 3% 0 3% ;
	}
	.search2{
		display: block;
		float: left;
		font-size: 25px;
		width: 9%;
		height: 40px;
		background-color: white;
		line-height: 40px;
		text-align: center;
		color: #00C98D;
		margin-left: 3%;
	}
	.search3{
		display: block;
		float: right;
		border: none;
		height: 40px;
		width: 85%;
		margin-right: 3%;
		outline: none;
	}
	.search4{
		width: 100%;		
	}
	
	.search6{
		width: 20%;
		background-color: white;
		border: 1px solid #F3F3F3;
		float: left;
		margin-left: 5%;
		margin-top: 5%;
		font-size: 14px;
		text-align: center;
		padding: 2% 3% 2% 2%;
		border-radius: .6rem;
		overflow: hidden;
	    white-space: nowrap;
	    text-overflow: ellipsis;
	    word-break: break-all;
	    
	}
	.change{
	width: 100%;
	height: 10%;
	color: #333;
	font-size: .28rem;
	vertical-align: middle;
	display: inline-block;
	text-align: center;	
	padding: 0.8rem 0;
	border-top: 1px solid #f3f3f3;
	margin-top: 10%;
}

.change .reflesh{
	width: .24rem;
    height: .24rem;
    margin-left: 0.6rem;
    line-height: .96rem;
}
</style>