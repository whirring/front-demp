<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" >
    <el-menu-item index="1">{{name}}</el-menu-item>
    <el-submenu index="2">
      <template slot="title">周报</template>
      <el-menu-item index="2-1" @click="Post">周报提交</el-menu-item>
      <el-menu-item index="2-2" @click="Edit">周报修改</el-menu-item>
      <el-menu-item index="2-2" @click="Check">周报查看</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">用户中心</template>
      <el-menu-item index="3-1" @click="AddStudent">添加学生</el-menu-item>
      <el-menu-item index="3-2" @click="AddTeacher">添加导师</el-menu-item>
    </el-submenu>
    <el-menu-item index="4" @click = "Logout">退出
    </el-menu-item>
  </el-menu>
</template>

<script>
import userUtils from '../const/username'
export default {
  name: 'Header',
  data () {
    return {
      name: userUtils.username
    }
  },
  methods: {
    Logout () {
      this.$router.replace('/')
    },
    Post () {
      this.$router.replace('/post')
    },
    Edit () {
      this.$router.replace('/edit')
    },
    Check () {
      this.$router.replace('/check')
    },
    AddStudent () {
      this.$router.replace('/student')
    },
    AddTeacher () {
      this.$router.replace('/teacher')
    }
  }
}
</script>

<style scoped>
</style>
