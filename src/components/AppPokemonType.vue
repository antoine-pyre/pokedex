<template>
 <span v-if="type" class="badge bg-secondary">
   {{type.type.name.replace(/^\w/, (c) => c.toUpperCase())}}
 </span>
</template>

<script>
import {PokemonType} from "pokenode-ts";

export default {
  name: "AppPokemonType",
  props: {
    type: PokemonType
  },
  mounted() {
  }
}
</script>

<style scoped>
</style>
