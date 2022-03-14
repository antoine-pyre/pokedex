<template>
  <app-pokedex></app-pokedex>
</template>

<script>

import AppPokedex from "@/components/AppPokedex";
export default {
  name: 'App',
  components: { AppPokedex },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
