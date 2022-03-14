<template>
  <div class="container">
    <div v-if="pokemons && pokemons.length > 0" class="grid" style="margin-bottom: 50px">
      <div class="row" style="margin-bottom: 30px">
        <div v-for="pokemon in pokemons" :key="pokemon.id" class="col-6 col-lg-4 col-xl-3">
          <router-link :to="{name: 'pokemon_page', params: { id: pokemon.id } }">
            <app-pokemon-card :pokemon="pokemon" class="pokemon-card" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <button type="button" class="btn btn-primary" v-on:click="findNextPokemons">Charger plus de pokémons</button>
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
    findNextPokemons() {
      this.$store.commit('findNextPokemons', 20);
    }
  },
  mounted() {
    this.$store.commit('findFirstPokemons', 20)
  }
}
</script>

<style scoped>

.pokemon-card {
  margin-bottom: calc(var(--bs-gutter-x) * .5);
  margin-top: calc(var(--bs-gutter-x) * .5);
}
</style>
