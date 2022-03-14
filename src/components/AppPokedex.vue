<template>
  <div v-if="pokemons && pokemons.length > 0" class="grid" style="margin-bottom: 50px">
    <div class="row" style="margin-bottom: 30px">
      <div v-for="pokemon in pokemons" :key="pokemon.id" class="col-2">
        <app-pokemon-card :pokemon="pokemon" class="pokemon-card" />
      </div>
    </div>
    <button type="button" class="btn btn-primary" v-on:click="getNextPokemons">Charger plus de pokémons</button>
  </div>
</template>

<script>
import {PokemonClient} from "pokenode-ts";
import AppPokemonCard from "@/components/AppPokemonCard";

export default {
  name: "AppPokedex",

  components: {
    AppPokemonCard
  },
  data() {
    return {
      pokemons: [],
      currentOffset: 0,
      limit: 20
    }
  },
  methods: {
    getNextPokemons() {
      (async () => {
        // this.$store.commit('increment')
        // console.log(this.$store.state.count)
        const api = new PokemonClient();

        api.listPokemons(this.currentOffset, this.limit)
            .then((pokemons) => {
              for (const pokemon of pokemons.results) {
                api.getPokemonByName(pokemon.name)
                    .then((pokemon) => this.pokemons.push(pokemon));
              }
              this.currentOffset += this.limit
            });
      })();
    }
  },
  mounted() {
    this.getNextPokemons();
  }
}
</script>

<style scoped>

.pokemon-card {
  margin-bottom: calc(var(--bs-gutter-x) * .5);
  margin-top: calc(var(--bs-gutter-x) * .5);
}
</style>
