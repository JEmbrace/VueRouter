<template>
  <div class="hello">
    <p>这里是HelloWorld组件</p>
    <!-- 可跳转的URL -->
    <router-link to="/index">点击这里渲染出另外一个组件</router-link>
    
    <!-- 使用下面的这个标签可以告诉vue-router将匹配到的组件渲染到这个位置 -->
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
