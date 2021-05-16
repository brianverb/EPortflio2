<template>
  <div id="app">
    <header id="nav">
      <router-link to="/">Home</router-link> |  
      <router-link to="/about">About</router-link>  |  
      <router-link to="/tutorial">Tutorial</router-link>  |  
      <!-- <router-link to="/curriculum">Curriculum Vitae</router-link>  |  -->
      <router-link to="/igniteTalk">Ignite Talk</router-link>  
    </header>
    <main>
      <router-view/>
    </main>
  </div>
</template>

<style>
body{
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  letter-spacing: 0.04ch;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
