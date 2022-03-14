<template>
  <!--app-pokedex></app-pokedex-->
  <div id="nav">
    <router-link to="/">Pokedex</router-link> |
    <router-link :to="{name: 'pokemon_page', params: { id: 1 } }">Pokemon details</router-link>
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  background-color: #464646;
}
</style>
