import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from "./router.js"



Vue.use(ElementUI);


new Vue({
  render: h => h(App),
  router,  // 注入到根实例中
}).$mount('#app');