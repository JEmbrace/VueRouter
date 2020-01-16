<template>
    <div class='productContent'> 
        <div class="productList">
            <!-- 产品列表  -->
            <h1>产品列表</h1>
            <p v-for="(item,index) in productsList" v-bind:key='index' v-on:click='productHandle(index)'> 
                {{item.name}}
            </p> 
        </div>
        <!-- 产品详情 -->
        <router-view />
    </div>
</template>
<script>
export default {
    name: 'Content',
    data() {
        return {
            productsList: [
                {
                    url: '/productDetail/1',
                    name: '产品1',
                    routeName: 'productDetailRoute'
                },{
                    url: '/productDetail/2',
                    name: '产品2',
                    routeName: 'productDetailRoute'
                }
            ]
        }
    },
    methods: {
        productHandle: function(index) {
            var id = index+1;
            //使用命令路由
            this.$router.push({name:'productDetailRoute', params: {id: id}})
        }
    }

}
</script>
<style scoped>
    .productContent{
        margin-left: 150px;
    }
    .productList{
        border:1px solid #ddd;
        margin: 10px;
    }
    p{
        cursor: pointer;
    }
</style>