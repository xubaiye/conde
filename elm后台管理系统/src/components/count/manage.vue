<template>
  <div class="manage">
    <el-container style="height:100%;width: 100%; border:none">
      <el-aside width="300px" style="background-color:#324057">
        <el-menu>
            
          <div class="sy"><i class="el-icon-menu"></i><router-link to="/manage/homepage">首页</router-link></div>
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-document"></i>数据管理
            </template>
            <el-menu-item index="1-1" @click="$router.push('/manage/userlist')">用户列表</el-menu-item>
            <el-menu-item index="1-2" @click="$router.push('/manage/business')">商家列表</el-menu-item>
            <el-menu-item index="1-4">食品列表</el-menu-item>
            <el-menu-item index="1-5">订单列表</el-menu-item>
            <el-menu-item index="1-6">管理员列表</el-menu-item>
          </el-submenu>


          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-plus"></i>添加数据
            </template>
            <el-menu-item index="1-1">添加商品</el-menu-item>
            <el-menu-item index="1-2">添加商品</el-menu-item>
          </el-submenu>


          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-star-on"></i>图表
            </template>
            <el-menu-item index="1-1">用户分布</el-menu-item>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-edit"></i>编辑
            </template>
            <el-menu-item index="1-1">文本编辑</el-menu-item>
          </el-submenu>


          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-setting"></i>设置
            </template>
            <el-menu-item index="1-1">管理员设置</el-menu-item>
          </el-submenu>

           <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-warning"></i>说明
            </template>
            <el-menu-item index="1-1">说明</el-menu-item>
          </el-submenu>

        </el-menu>
      </el-aside>


      <el-container>
			<router-view></router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "manage"
};
</script>

<style lang="less">
.manage{
    width: 100%;
    height: 100%;
}
.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
    
  }
.el-aside {
    color: #333;
}
.el-submenu__title{
    background: #324057;
    color: #bfcbd9;
	font-size: 20px;
}
// .el-menu-item{
//     background: #324057;
// }
.el-menu-item{
    background: #1f2d3d;
    color: #bfcbd9;
	font-size: 20px;
}
.is-active{
    color: #1f62e0;
    background: #1f2d3d;
}
.sy{
    height: 56px;
    // font-size: 14px;
    color: #bfcbd4;
    padding: 0 24px;
    box-sizing: border-box;
    background: #324157;
    display: flex;
    align-items: center;
	font-size: 20px;
    >i{
        font-size: 18px;
        margin-right: 6px;
    }
}
.sy:hover{
    background-color: #48576A;
}
.el-submenu__title i{
    color: #bfcbd9;
}
.el-submenu__title:hover{
	background:#48576A;
}
.el-menu-item:hover{
	background:#48576A;
}
a{
	text-decoration: none;
	color: #bfcbd9;
}
.router-link-active{
	color: #1f62e0;
}
</style>