<template>
  <!-- Fixed navbar -->
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar"
                aria-expanded="false" aria-controls="navbar">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="/">Gunb</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li class="active">
            <router-link :to="{ name: 'Home' }">Home</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'About' }">About</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Contact' }">Contact</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'ToDo' }">To Do</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <router-link :to="{ name: 'Login' }">Login</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Signup' }">Signup</router-link>
          </li>
        </ul>
      </div><!--/.nav-collapse -->
    </div>
  </nav>
</template>

<script>
  export default {
    name: 'Navigation',
    data() {
      return {}
    }
  }
</script>
