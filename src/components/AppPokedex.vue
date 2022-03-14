<template>
  <div v-if="pokemons && pokemons.length > 0" class="grid" style="margin-bottom: 50px">
    <div class="row" style="margin-bottom: 30px">
      <div v-for="pokemon in pokemons" :key="pokemon.id" class="col-2">
        <app-pokemon-card :pokemon="pokemon" class="pokemon-card" />
      </div>
    </div>
  </div>
  <button type="button" class="btn btn-primary" v-on:click="getNextPokemons">Charger plus de pokémons</button>
</template>

<script>
import AppPokemonCard from "@/components/AppPokemonCard";

export default {
  name: "AppPokedex",

  components: {
    AppPokemonCard
  },
  computed: {
    pokemons() {
      return this.$store.state.pokemons.list;
    }
  },
  methods: {
    getNextPokemons() {
      this.$store.commit('getNextPokemons', 20);
    }
  },
  mounted() {
    if (this.pokemons.length === 0) {
      this.getNextPokemons();
    }
  }
}
</script>

<style scoped>

.pokemon-card {
  margin-bottom: calc(var(--bs-gutter-x) * .5);
  margin-top: calc(var(--bs-gutter-x) * .5);
}
</style>
