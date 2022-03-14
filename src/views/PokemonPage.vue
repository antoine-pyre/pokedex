<template>
  <div class="home container" v-if="pokemon">
    <h1>{{ name }}</h1>
    <app-pokemon-picture :sprites="pokemon.sprites"/>
  </div>
</template>


<script>
import AppPokemonPicture from "@/components/AppPokemonPicture";
export default {
  name: "AppPokemonPage",
  components: { AppPokemonPicture },
  computed: {
    pokemon () {
      return this.$store.getters.getById(this.$route.params.id)
    },
    name() {
      return this.$store.getters.getPokemonLocaleNameFromPokemon(this.pokemon);
    }
  }
}
</script>

<style scoped>
.home {
  background-color: white;
}
</style>
