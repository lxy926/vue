import VueRouter from 'vue-router'

// 导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue'
import MemberContainer from './components/tabbar/MemberContainer.vue'
import ShopContainer from './components/tabbar/ShopContainer.vue'
import SearchContainer from './components/tabbar/SearchContainer.vue'

import NewsList from './components/news/NewsList.vue'
import NewsInfo from './components/news/NewsInfo.vue'

// 创建路由对象
const router = new VueRouter({
  routes: [//配置路由对象
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/shopcar',component:ShopContainer},
    {path:'/search',component:SearchContainer},
    {path:'/home/newslist',component:NewsList},
    {path:'/home/newsInfo/:id',component:NewsInfo}
  ],
  linkActiveClass:'mui-active' // 覆盖默认路由高亮的类 ，默认的类叫做router-link-active

})

export default router