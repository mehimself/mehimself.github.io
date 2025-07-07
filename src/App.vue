<template>
  <div id="app">
    <nav class="main-nav">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/blog" class="nav-link">Blog</router-link>
      <router-link to="/about" class="nav-link">About</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
}

body {
  margin: 0;
  padding: 0;
}

.main-nav {
  background: #2c3e50;
  padding: 15px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-link {
  color: white;
  text-decoration: none;
  margin: 0 20px;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #3498db;
}

.nav-link.router-link-active {
  color: #3498db;
  font-weight: 600;
}
</style>