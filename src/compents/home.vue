<template>

<el-container>
<el-container>
  <el-aside width="200px">
    <el-menu :default-openeds="['1','2','3']">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-s-home"></i>首页</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <router-link to="/"><el-menu-item index="1-1">首页1</el-menu-item></router-link>
          <router-link to="/list2"><el-menu-item index="1-2">首页2</el-menu-item></router-link>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">新闻1</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">新闻2</template>
          <el-menu-item index="1-4-1">新闻2-1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-user"></i>用户中心</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <router-link to="/vip"><el-menu-item index="2-1">普通用户1</el-menu-item></router-link>
          <el-menu-item index="2-2">普通用户2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="2-3">会员用户1</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="2-4">
          <template slot="title">超级会员</template>
          <el-menu-item index="2-4-1">超级会员1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-s-data"></i>数据中心</template>
        <el-menu-item-group>
          <template slot="title">分组1</template>
          <router-link to="/data1"><el-menu-item index="3-1">数据1</el-menu-item></router-link>
          <router-link to="/data2"> <el-menu-item index="3-2">数据2</el-menu-item></router-link>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="3-3">数据3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="3-4">
          <template slot="title">数据4</template>
          <el-menu-item index="3-4-1">数据4-1</el-menu-item>
        </el-submenu>
      </el-submenu>
    </el-menu>
  </el-aside>
  <el-main>
    <router-view></router-view>
  </el-main>
    <el-footer>
      123
    </el-footer>
  </el-container>
</el-container>
</template>

<style lang="less" scoped>
 .el-main{
    padding:0
  }
  .el-footer{
  
  }
  a {
    text-decoration: none;
  }
  .router-link-active {
    text-decoration: none;
  }



</style>
<script>
  export default {
    data () {
      return {
        msg: ""
      }
    },
    methods:{
      jump(){
        this.$router.push("/list")
      }
    }
  }
</script>