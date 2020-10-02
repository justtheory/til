<template>
  <div id="app">
    <div id="nav">
      <router-link to="/"> <p class="router-ptag">justtheory</p> <p class="router-ptag router-name">Pruthvi Raj</p> </router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  width: 100%;
  position: fixed;
  padding: 30px;
  background-color: #000000;
}

#nav a {
  font-weight: bold;
  font-family: 'Courier New', Courier, monospace;
  display: inline-block;
}

.router-ptag {
  margin: 0;
}

.router-name {
  font-size: 2vh;
}
#nav a.router-link-exact-active {
  color: #ffffff;
  text-decoration: none;
}
</style>
