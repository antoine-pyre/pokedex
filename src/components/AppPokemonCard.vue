<template>
  <div v-if="pokemon && pokemon.pokemonSpecie"
       class="card"
  >
    <app-pokemon-picture :sprites="pokemon.sprites" class="card-img"/>
    <div class="card-body text-start" @click="$emit('pokemon-selected')">
      <h6 class="card-subtitle text-muted">No.{{ pokemon.id }}</h6>
      <h5 class="card-title">{{ name }}</h5>
      <span v-for="type in pokemon.types" :key="type.slot" style="margin: 2px">
        <app-pokemon-type :type="type"></app-pokemon-type>
      </span>
    </div>
  </div>
</template>

<script>
import AppPokemonType from "@/components/AppPokemonType";
import {Pokemon} from "pokenode-ts";
import AppPokemonPicture from "@/components/AppPokemonPicture";

export default {
  name: 'AppPokemonCard',
  components: { AppPokemonPicture, AppPokemonType },
  props: {
    pokemon: Pokemon
  },
  data() {
    return {
      hover: false
    }
  },
  computed: {
    name() {
      if (this.pokemon) {
        return this.$store.getters.getPokemonLocaleNameFromPokemon(this.pokemon);
      }
      return ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  border: none;
  border-radius: 5px;
  background-color: #b4b4b4;
}
.card-title {
  font-weight: bold;
}
.card-body:hover {
  cursor: pointer;
}
.card-body {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: white;
}
</style>
