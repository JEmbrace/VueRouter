<template>
  <div id="app">
    <!-- 菜单  -->
    <ul>
      <li v-for='(item,index) in menuList' v-bind:key='index' >
          <router-link v-bind:to='item.url'>{{item.name}}</router-link>
      </li>
    </ul>
    <!-- 内容区 -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      menuList: [
        {
          url: '/index',
          name: '首页'
        },{
          url: '/products',
          name: '产品'
        }
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
ul {
    display: inline-block;
    width: 100px;
    border: 1px solid #ddd;
    padding: 100px 0px 100px 20px;
    position: fixed;
    top: -10px;
    bottom: 0px;
}
a{
  text-decoration: none;
}
</style>