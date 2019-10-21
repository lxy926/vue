//入口文件
import Vue from 'vue'

//导入 MUI样式
import '../lib/mui/css/mui.min.css'

//按需导入 Mint-ui 中的组件
import { Header } from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.component(Header.name, Header)


//导入根组件
import app from './App.vue'

var vm = new Vue({
    el:'#app',
    render: c => c(app)
})
