<template>
    <div class='productContent'> 
        <div class="productList">
            <!-- 产品列表  -->
            <h1>产品列表</h1>
            <p v-for="(item,index) in productsList" v-bind:key='index'> 
                <router-link v-bind:to="item.url">{{item.name}}</router-link>
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
                    name: '产品1'
                },{
                    url: '/productDetail/2',
                    name: '产品2'
                }
            ]
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
</style>