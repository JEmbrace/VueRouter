import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)

// 引入路由需要映射的组件
import Index from '@/components/Index.vue'
import PageContent from '@/components/PageContent.vue' 
const routes = [
    {
        path: '/index',  // 具体的路由
        component: Index //映射的目标组件
    },
    //新增一条动态路由
    {
        path: '/pageContent/:id',   // 动态路由
        component: PageContent  //动态路由映射的目标组件
    }
]

const router = new Router({
    routes: routes
})

export default router