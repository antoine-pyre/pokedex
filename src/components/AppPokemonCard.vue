<template>
  <div v-if="pokemon" class="card" style="max-width: 18em">
    <img :src="pokemon.sprites.front_default" class="card-img-top"/>
    <div class="card-body">
      <h5 class="card-title">{{this.capitalize(pokemon.name)}}</h5>
      <span v-for="type in pokemon.types" :key="type.slot" style="margin: 2px">
        <app-pokemon-type :type="type"></app-pokemon-type>
      </span>
    </div>
  </div>
</template>

<script>
import AppPokemonType from "@/components/AppPokemonType";
import {Pokemon} from "pokenode-ts";

export default {
  name: 'AppPokemonCard',
  components: { AppPokemonType },
  props: {
    pokemon: Pokemon
  },
  methods: {
     capitalize : function (s) {
      if (typeof s !== 'string') return ''
      return s.charAt(0).toUpperCase() + s.slice(1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
