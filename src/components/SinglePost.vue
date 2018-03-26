<template>
  <article
    class="post"
    v-if="post">

    <h1 class="entry-title">
      {{ post.title.rendered }}
    </h1>

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

</style>
