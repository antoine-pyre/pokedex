<template>
  <div v-if="pokemon && pokemon.pokemonSpecie"
       class="card"
  >
    <img :src="hover ? pokemon.sprites.back_default : pokemon.sprites.front_default"
         class="card-img-top"
         @mouseover="hover = true"
         @mouseleave="hover = false"
    />
    <div class="card-body text-start">
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

export default {
  name: 'AppPokemonCard',
  components: { AppPokemonType },
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
        return this.$store.getters.getName(this.pokemon);
      }
      return ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card:hover {
  cursor: pointer;
}
.card {
  border: none;
  border-radius: 5px;
  background-color: #b4b4b4;
}
.card-title {
  font-weight: bold;
}
.card-body {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: white;
}
</style>
