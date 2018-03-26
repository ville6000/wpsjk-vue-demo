<template>
  <div class="post-list">
    <h1>Post List</h1>

    <ul>
      <li
        v-for="post in posts"
        :key="post.id"
        v-html="post.title.rendered" />
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
