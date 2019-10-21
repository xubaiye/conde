<template>
	<div class="signin">
		<h1>elm后台管理系统</h1>
		<div class="box">
			<el-input placeholder="用户名" v-model="user" clearable></el-input>
			<el-input placeholder="密码" v-model="password" show-password></el-input>
			<el-button type="primary" :plain="true" @click="signin()">登录</el-button>
			<!-- <el-button ></el-button> -->
			<p>温馨提示：<br />
			   未登录过的新用户，自动注册<br />
			   注册过的用户可凭账号密码登录
			</p>
		</div>
		
	</div>
</template>

<script>
	export default {
		data(){
			return{
				user:'',
				password:''
			}
		},
		methods:{
			signin(){
				 
				this.$axios.post('/admin/login',{
					user_name:String(this.user),
					password:String(this.password),
				}).then(res=>{
					if(res.data.status==0){
						 this.$message({
							message: res.data.message,
							type: 'success'
						 });
					}else if(res.data.status==1){
						this.$router.push('/manage')
						this.$message({
							message: res.data.success,
							type: 'success',
						});
					}
					// console.log(res)
				})
			}
		}
	}
</script>

<style scoped lang="less">
	.signin{
		width: 100%;
		height: 100%;
		border: 1px solid darkslateblue;
		background: darkslateblue;
		text-align: center;
	}
	h1{
		color: white;
		font-size: 40px;
		margin-top: 200px;
	}
.box{
	width: 500px;
	height: 350px;
	background: white;
	margin: 50px auto;
	border-radius: 4px;
	p{
		margin-top: 20px;
		color: red;
	}
	.el-input,.el-button{
		width:400px;
		height: 40px;
		margin-top: 40px;
	}
	// .el-button{
	// 	width: 260px;
	// 	
	// }
		
}
</style>