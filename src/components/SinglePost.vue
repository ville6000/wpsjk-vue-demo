<template>
  <article
    class="post"
    v-if="post">

    <h1
      class="entry-title"
      v-html="post.title.rendered" />

    <div class="entry-meta">
      <div class="entry-date">
        {{ post.modified | moment('DD.MM.YYYY H:m') }}
      </div>
    </div>

    <div
      class="entry-content"
      v-html="post.content.rendered"/>
  </article>
</template>

<script>
  import axios from 'axios'

  export default {
    name: 'SinglePost',
    data () {
      return {
        post: false
      }
    },
    created () {
      this.fetchPost(this.$route.params.id)
    },
    methods: {
      fetchPost (postId) {
        axios.get(process.env.VUE_APP_REST_URL + postId).then((response) => {
          this.post = response.data
        })
      }
    }
  }
</script>

<style scoped>
  .entry-meta {
    color: #666;
  }
</style>
