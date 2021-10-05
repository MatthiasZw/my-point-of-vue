<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/Bricks">Bricks</router-link>
    </nav>
    <router-view/>
  <footer>
    &copy; MZ
  </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

footer, nav {
  padding: 30px;
  background-color: #ccc;
  border-bottom: 1px solid rgb(255, 0, 0);
  width: 100%;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #428db9;
}
</style>
