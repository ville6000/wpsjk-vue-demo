<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  html {
    overflow-y: scroll;
  }

  #app {
    margin: 2rem auto;
    max-width: 1080px;
    width: 92.5%;
    color: #2c3e50;
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
