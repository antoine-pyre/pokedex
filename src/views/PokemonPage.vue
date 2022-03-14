<template>
  <div class="home">
    {{ this.$route.params.id }}
    {{ this.pokemon }}
  </div>
</template>


<script>
export default {
  name: "AppPokemonPage",
  computed: {
    pokemon () {
      return this.$store.getters.getPokemonById(this.$route.params.id)
    }
  }
}
</script>

<style scoped>
.home {
  background-color: white;
}
</style>
