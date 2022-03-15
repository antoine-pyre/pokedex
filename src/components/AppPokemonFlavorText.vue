<template>
 <span v-if="localeType" class="badge" v-bind:class="type.type.name">
   {{localeType}}
 </span>
</template>

<script>
import {PokemonType} from "pokenode-ts";

export default {
  name: "AppPokemonType",
  props: {
    type: PokemonType
  },
  computed: {
    localeType() {
      return this.$store.getters.getLocalTypeFromTypeName(this.type.type.name);
    }
  },
}
</script>