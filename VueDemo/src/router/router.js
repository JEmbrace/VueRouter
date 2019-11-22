// vue-router使用第一步：引入vue-router
import Vue from "vue"
import Router from "vue-router"

// vue-router使用第二步：组件注册到全局
Vue.use(Router)

// 第三步：定义路由配置

// 引入路由需要映射的组件
import Index from '@/components/Index.vue'
const routes = [
    {
        path: '/index',  // 具体的路由
        component: Index //路由匹配到的目标组件
    }
]

// 第四步：创建vue-router实例，传递前面定义的路由配置
const router = new Router({
    routes: routes
})

// 第五步：将vue-router实例使用export导出（供其他模块使用）
export default router