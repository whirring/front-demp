import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/Login.vue'
import Home from '../components/Home.vue'
import Post from '../components/Post.vue'
import Edit from '../components/Edit.vue'
import Check from '../components/Check.vue'
import Student from '../components/Student.vue'
import Teacher from '../components/Teacher.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta: {
        keepAlive: false
      }
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/post',
      name: 'post',
      component: Post,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/check',
      name: 'check',
      component: Check,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/edit',
      name: 'edit',
      component: Edit,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/student',
      name: 'student',
      component: Student,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/teacher',
      name: 'teacher',
      component: Teacher,
      meta: {
        keepAlive: true
      }
    }
  ]
})
