<template>
    <div id="app" style="width: 100%;height: 98vh">
      <!-- 其他页 -->
      <el-container v-if="$route.meta.keepAlive" style="width: 100%;height: 100%">
          <el-header style="height: 3%">
              <!-- 导航栏 -->
            <header-nav></header-nav>
          </el-header>
          <el-main>
            <!-- Body -->
            <router-view></router-view>
          </el-main>
      </el-container>
      <!-- 登录页 -->
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </div>
</template>

<script>
import header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    headerNav: header
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
