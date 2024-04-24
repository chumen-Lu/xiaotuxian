// 创建Router路由和History路由
import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/views/Login/index.vue'
import Layout from '@/views/Layout/index.vue'
import Home from '@/views/Home/index.vue'
import Category from '@/views/Category/index.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      component:Layout,
      children:[
        {
          //滞空
          path:'',
          component:Home
        },
        {
          path:'Category',
          component:Category
        }
      ]
    },
    {
      path:'/login',
      component:Login
    }
    
  ]
})

export default router
