//入口文件
import Vue from 'vue'

//1.1导入路由包
import VueRouter from 'vue-router'
//1.2安装路由
Vue.use(VueRouter)

//2.1 导入 vue-resource
import VueResource from 'vue-resource'
//2.1 安装 vue-resource
Vue.use(VueResource)

//导入 MUI样式
import '../lib/mui/css/mui.min.css'
import '../lib/mui/css/icons-extra.css'
import '../lib/mui/fonts/mui-icons-extra.ttf'

//按需导入 Mint-ui 中的组件
import { Header,Swipe, SwipeItem } from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);


//1.3导入自己的router.js路由模块
import router from './router.js'




//导入根组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router  //1.4 挂在路由对象到vm实例对象上
})
