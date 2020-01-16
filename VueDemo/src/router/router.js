import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)

// 引入路由需要映射的组件
import Content from '@/components/Content.vue'
import ProductDetail from '@/components/ProductDetail.vue'
const routes = [
    {
        path: '/products',  
        name: 'productsRoute',   // 给路由配置名称
        component: Content, 
        children:[
            {
                path: '/productDetail/:id', 
                name: 'productDetailRoute',  // 给路由配置名称
                component: ProductDetail    
            }
        ]
    }
]

const router = new Router({
    routes: routes
})

export default router