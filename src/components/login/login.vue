<template>
	<div class="hole">
		<header>
			<i class="iconfont l back" @click="back()">&#xeb09;</i>
			<span class="title1">登录</span>
			<router-link to="index">
				<i class="iconfont r">&#xe65d;</i>
			</router-link>
		</header>
		<div style="height: 39px;"></div>
		
		<p class="box1">
			<span class="loginleft loginl"  @click="loginl()" v-bind:class="{'loginl-active':isactive,'loginr-active':!isactive}">账号密码</span>
			<span class="loginright loginr" @click="loginr()" v-bind:class="{'loginl-active':!isactive,'loginr-active':isactive}">手机验证码</span>
		</p>
			
		<!--账户密码登录-->	
		<div class="login1" v-show="showl">
			<section class="box2">
				<span class="box3">账户</span>
				<input id="pass1" class="box4" type="text" placeholder="请输入手机号码"/>
				<i class="iconfont box5">&#xe664;</i>
				<p class="r1">{{pass3}}</p>
			</section>
			<section class="box2">
				<span class="box3" >密码</span>
				<input id="pass2" class="box4" type="text" placeholder=""/>
				<i class="iconfont box5">&#xe664;</i>
				<p class="r2">{{pass4}}</p>
			</section>				
		</div> 					
		<!--验证码登录-->
		<div class="login2" v-show="showr">
		 	<section class="box2">
				<span class="box3" >手机号</span>
				<input class="box4" id="pass9" type="text" placeholder="请输入手机号码"/>
				<i class="iconfont box5">&#xe664;</i>
			</section>
			<section class="boox2">
				
		    	<section class="box2">
					<span class="box3">验证码</span>
					<input class="box4" id="pass7" type="text" placeholder=""/>
					<button class="iconfont box8">获取验证码</button>
			   </section>	
			   
			</section>
		 </div> 
		 
		<p class="check">
			<input  class="check1" type="checkbox" />
			同意<span class="check2">《阿里文学用户服务协议》</span>和<span class="check2">《隐私服务协议》</span>				
		</p>
		
		 <button class="check3"  @click="login1()" >登录</button>
		 <p class="check4">
		 	<span class="check5">忘记密码</span>
		 	<span class="check6">
		 		<router-link to="/register"  style="color: #00C98D;">注册</router-link>		 			
		 	</span>
		 </p>	 
	</div>
</template>

<script>	
	export default{	
		data(){
			return{
				
				showl:true,
				showr:false,
				isactive: false,
				pass3:"",
				pass4:""
			}
		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			loginl(){
				
				this.showl=true,
				this.showr=false,
				this.isactive = !this.isactive
			},
			loginr(){
				this.showl=false,
				this.showr=true,
				this.isactive = !this.isactive
			},
			login1(){
				if(pass1.value==""&&pass2.value==""){
					this.pass3="请输入手机号码"
					this.pass4="请输入密码"
				}
				else if(pass1.value!=""&&pass2.value==""){
				this.pass3=""
				this.pass4="请输入密码"
			}
				else if(pass1.value==""&&pass2.value!=""){
				this.pass3="请输入手机号码"
				this.pass4=""
			}
				else{
					this.pass3=""
					this.pass4=""
				}
	      }
	}
}
	
</script>

<style scoped="scoped">
	.hole{
		border: 1px solid #F3F3F3;
		border-bottom: none;		
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
	.box1{
		width: 100%;
		height: auto;
		overflow: hidden;
		font-size: 16px;
		text-align: center;
		border-bottom: 1px solid #F3F3F3;
	}
	.loginleft{
		width: 50%;
		float: left;
		color: #00C98D;
		padding: 4% 0 4% 0;
		/*border-bottom: 2px solid #00C98D;*/
	}
	.loginl-active{
		border-bottom: none;
		color: black;
	}
	.loginr-active{
		
		border-bottom: 2px solid #00C98D;
		color:#00C98D
	}	
	.loginright{
		width: 50%;
		float: right;
		padding: 4% 0 4% 0;
	}
	.login1{
		margin-top: 10%;
		margin: 10% 4% 10% 4%;				
	}
	.box2{
		font-size: 18px;
		border-bottom: 1px solid #F3F3F3;
		padding-bottom: 1%;
		margin-bottom: 10%;
	}
	
	.box3{
		margin-right: 2%;
	}
	.box4{
		border: none;
		font-size: 16px;
		outline: none;	
		width: 44%;	
	}
	.checkbox1{
		font-size: 18px;
		border-bottom: 1px solid #F3F3F3;
		padding-bottom: 1%;
		margin-bottom: 10%;
	}
	.box5{
		float: right;
	}
	.boox5{
		display: block;
	}
	.boox5 img{
		width: 20%;
		height: 100%;
	}
	.checkbox1{
		border-bottom: 1px solid #f3f3f3;
	    font-size: 18px;
	    display: -webkit-box;
	    margin-top: .44rem;
	    position: relative;
	    overflow: hidden;
	}
	.boox3{
		color: #333;
	    line-height: .5rem;
	    margin-right: .56rem;
	}
	.boox4{
		height: 16px;
	    overflow: hidden;
	    font-size: 100%;
	    vertical-align: middle;
	    list-style: none;
	    border: none;
	    outline: none;
	}
	.boox5{
		position: absolute;
	    right: -12%;
	    top: -6px;
	}
	.boox5 img{
		width: 30%;
		height: auto;
	}
	.boxchange{
		color: #00C98D;
    	font-size: 14px;
    	position: absolute;
	    right: 0;
	    top: -3px;
	}
	.login2{
		margin-top: 10%;
		margin: 10% 4% 10% 4%;
	}
	.box8{
		color: white;
		background-color: #00C98D;
		border: none;
		font-size: 14px;
		border-radius: 0.6rem;
	}
	.check{
		text-align: center;
	}	
	.check2{
		color: #00C98D;
	}
	.check3{
		width: 80%;
		height: 10%;
		background-color: #00C98D;
		text-align: center;
		line-height: 32px;
		color: white;
		margin-left: 10%;
		border: none;
		margin-top: 10%;
		font-size: 16px;
		
	}
	.check4{
		text-align: center;
		width: 80%;
		margin-left: 10%;
		height: auto;  
		margin-top: 2%;
	}
	.check5{
		color: #999;
		float: left;
	}
	.check6{
		color: #00C98D;
		float: right;
	}
	.r1{
		color: #00C98D;
        padding-bottom: 1%;
        font-size: 14px;
	}
	.r2{
		color: #00C98D;
        padding-top: 1%;
        font-size: 14px;
	}
</style>