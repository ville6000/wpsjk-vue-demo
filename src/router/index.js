import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/PostList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'PostList',
      path: '/',
      component: PostList
    }
  ]
})
