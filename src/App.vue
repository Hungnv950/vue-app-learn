<template>
  <component :is="layout">
    <router-view/>
  </component>
</template>

<script>
  const default_layout = "default";

  export default {
    name: 'app',
    computed: {
      layout() {
        return (this.$route.meta.layout || default_layout) + '-layout';
      }
    }
  }
</script>

<style src="./assets/style.css"></style>
<style>
  body {
    padding-top: 54px;
    height: 100%;
    font-family: 'Josefin Sans', sans-serif;
  }

  a {
    font-size: 20px;
  }

  button a {
    color: #fff;
  }
  .navbar-header a {
    font-size: 32px;
  }
  .navbar-default {
    background-color: #fff;
  }
</style>
