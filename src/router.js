import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import home from "./compents/home.vue";
import list from "./compents/list.vue";
import list2 from "./compents/list2.vue";
import vip from "./compents/vip.vue";
import data1 from "./compents/data1.vue";
import data2 from "./compents/data2.vue";
import echart from "./compents/echart.vue";
import echart2 from "./compents/echart2.vue";

// vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    component:home,
    children:[
      {
        path:'',
        component:list,
      },
      {
        path:'/list2',
        component:list2,
      },
      {
        path:'/vip',
        component:vip
      },
      {
        path:'/data1',
        component:data1
      },
      {
        path:'/data2',
        component:data2
      },
      {
        path:'/echart',
        component:echart
      },
      {
        path:'/echart2',
        component:echart2
      },

    ]
  },


]

var router =  new VueRouter({
  routes
})
export default router;