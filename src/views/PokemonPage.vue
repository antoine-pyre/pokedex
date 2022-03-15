<template>
  <div class="home container" v-if="pokemon">
    <h1>{{ name }}</h1>
    <div class="row">
      <div class="col-12 col-md-4 col-lg-6">
        <app-pokemon-picture class="pokemon-picture" :sprites="pokemon.sprites"/>
      </div>
      <div class="col-12 col-md-8 col-lg-6">
        <div v-for="flavorText in flavorTexts" :key="flavorText.id">
          <app-pokemon-flavor-text :flavorText="flavorText"/>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import AppPokemonPicture from "@/components/AppPokemonPicture";
import AppPokemonFlavorText from "@/components/AppPokemonFlavorText";

export default {
  name: "AppPokemonPage",
  components: { AppPokemonPicture, AppPokemonFlavorText },
  computed: {
    pokemon () {
      return this.$store.getters.getPokemonById(this.$route.params.id)
    },
    name() {
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
