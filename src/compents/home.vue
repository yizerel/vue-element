<template>

<el-container>
<el-container>
  <el-aside width="200px">
    <el-menu :default-openeds="['1','2','3']">
      <el-submenu :index="String(index)" v-for="(subMenuItem, index) in homeInfo.subMenus" :key="index">
        <template slot="title"><i class="el-icon-s-home"></i>{{subMenuItem.subMenuTitle}}</template>
        <el-menu-item-group v-for="(subMenuGroupItem, index2) in subMenuItem.subMenuGroup" :key="index2" :title="subMenuGroupItem.subMenuGroupTitle">
          <template slot="title">{{subMenuGroupItem.subMenuGroupTitle}}</template>
          <!-- index 只需要是唯一的即可 -->
          <el-menu-item
            v-for="(item, index3) in subMenuGroupItem.subMenuItems"
            :key="index3"
            :index="`${index}-${index2}-${index3}`"
            @click="toPage(item.path)"
          >
            {{item.itemTitle}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </el-aside>
  <el-main>
    <router-view></router-view>
  </el-main>
  </el-container>
</el-container>
</template>

<style lang="less" scoped>
 .el-main{
    padding:0
  }

  a {
    text-decoration: none;
  }
  .router-link-active {
    text-decoration: none;
  }



</style>
<script>
  import Apihome from "../../api/home"

  export default {
    data () {
      return {
        msg: "",
        homeInfo:{
          hometitle:'',
          subMenus: [],
        },
      }
    },
    methods:{
      toPage(path) {
        if(!Boolean(path)){
          return false
        }
        this.$router.push(path).catch(()=>{});
      },
      async init(){
        const result = await Apihome.gethome()
        if(result.status === 200){
          this.homeInfo = result.data
        }
      },
    },
    mounted(){
      this.init()
    }
  }
</script>