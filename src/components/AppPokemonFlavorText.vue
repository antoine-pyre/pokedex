<template>
    <small>{{localeVersion}}</small>
    <p>{{flavorText.flavor_text}}</p>
</template>

<script>
export default {
  name: "AppPokemonFlavorText",
  props: {
    flavorText: Object
  },
  computed: {
    localeVersion() {
      return this.$store.getters.getLocalVersionFromVersionName(this.flavorText.version.name);
    }
  },
}
</script>