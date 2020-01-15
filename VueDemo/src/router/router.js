import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)

// 引入路由需要映射的组件
import Content from '@/components/Content.vue'
import ProductDetail from '@/components/ProductDetail.vue'
const routes = [
    {
        path: '/products',  // 具体的路由
        component: Content, // 路由映射的组件
        // 产品详情需要使用路由嵌套才能实现
        children:[
            {
                path: '/productDetail/:id', //这里使用了动态路由
                component: ProductDetail    // 路由映射的组件
            }
        ]
    }   
]

const router = new Router({
    routes: routes
})

export default router