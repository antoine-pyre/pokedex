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
      <h5 class="card-title">{{ this.findName(pokemon.pokemonSpecie.names) }}</h5>
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
  methods: {
    findName: function (names) {
      for (const name of names) {
        if (name.language.name === this.$store.state.locale) {
          return name.name;
        }
      }
      return '';
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
  background-color: rgb(245, 245, 245);
}
.card-title {
  font-weight: bold;
}
.card-body {
  background-color: white;
}
</style>
