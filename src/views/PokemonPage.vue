<template>
  <div class="home" v-if="pokemon">
    <h1>{{ this.pokemon.names }}</h1>
  </div>
</template>


<script>
export default {
  name: "AppPokemonPage",
  computed: {
    pokemon () {
      return this.$store.getters.getById(this.$route.params.id)
    }
  }
}
</script>

<style scoped>
.home {
  background-color: white;
}
</style>
