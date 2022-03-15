<template>
  <div class="home container" v-if="pokemon">
    <h1>{{ name }}</h1>
    <div class="row">
      <div class="col-12 col-md-4 col-lg-6">
        <app-pokemon-picture class="pokemon-picture" :sprites="pokemon.sprites"/>
      </div>
      <div class="col-12 col-md-8 col-lg-6">
        <p>{{flavorTexts}}</p>
      </div>
    </div>
  </div>
</template>


<script>
import AppPokemonPicture from "@/components/AppPokemonPicture";
export default {
  name: "AppPokemonPage",
  components: { AppPokemonPicture },
  computed: {
    pokemon () {
      return this.$store.getters.getPokemonById(this.$route.params.id)
    },
    name() {
      console.log(this.pokemon)
      return this.$store.getters.getPokemonLocaleNameFromPokemon(this.pokemon);
    },
    flavorTexts() {
      return this.$store.getters.getPokemonLocaleFlavorTextsFromPokemon(this.pokemon);
    }
  }
}
</script>

<style scoped>
.container {
  border-radius: 5px;
}
.home {
  background-color: white;
}
.pokemon-picture  {
  background-color: rgb(240, 240, 240);
  border-radius: 5px;
}
</style>
