<template>
  <div class="post-list">
    <h1>Post List</h1>

    <ul v-if="posts.length > 0">
      <li
        v-for="post in posts"
        :key="post.id">
        <router-link
          :to="{ name:'SinglePost', params: { id: post.id, slug: post.slug } }"
          v-html="post.title.rendered"/>
      </li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'PostList',
    data () {
      return {
        posts: []
      }
    },
    created () {
      this.fetchPosts()
    },
    methods: {
      fetchPosts () {
        axios.get(process.env.VUE_APP_REST_URL).then((response) => {
          this.posts = response.data
        })
      }
    }
  }
</script>

<style scoped>

</style>
