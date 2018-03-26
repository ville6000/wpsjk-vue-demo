<template>
  <div class="content">
    <article
      class="post"
      v-if="post">

      <h1
        class="entry-title"
        v-html="post.title.rendered"/>

      <div class="entry-meta">
        {{ post.modified | moment('DD.MM.YYYY HH:m') }}
      </div>

      <div
        class="entry-content"
        v-html="post.content.rendered"/>
    </article>

    <div class="sidebar">
      <PostList/>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import PostList from '@/components/PostList'

  export default {
    name: 'SinglePost',
    components: {
      'PostList': PostList
    },
    data () {
      return {
        post: false
      }
    },
    watch: {
      '$route': 'fetchPost'
    },
    created () {
      this.fetchPost()
    },
    methods: {
      fetchPost () {
        axios.get(process.env.VUE_APP_REST_URL + this.$route.params.id).then((response) => {
          this.post = response.data
        })
      }
    }
  }
</script>

<style scoped>
  .content {
    display: flex;
    justify-content: space-between;
  }

  .sidebar {
    width: 30%;
  }

  .post {
    width: 65%
  }

  .entry-meta {
    color: #666;
  }
</style>
