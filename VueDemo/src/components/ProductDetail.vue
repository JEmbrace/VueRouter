<template>
    <div class='productDetail'> 
        <p>
            名称：产品{{$route.params.id}}
        </p>
        <p>
            详细信息：这是产品{{$route.params.id}}的详细信息......
        </p>
    </div>
</template>
<script>
export default {
    name: 'ProductDetail',
}

</script>
<style scoped>
.productDetail{
    border:1px solid #ddd;
    margin: 10px;
}
</style>