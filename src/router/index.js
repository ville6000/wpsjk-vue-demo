import Vue from 'vue'
import Router from 'vue-router'
import PostList from '@/components/PostList'
import SinglePost from '@/components/SinglePost'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'PostList',
      path: '/',
      component: PostList
    },
    {
      name: 'SinglePost',
      path: '/:id/:slug',
      component: SinglePost
    }
  ]
})
