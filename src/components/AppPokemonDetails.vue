<template>
  <div v-if="pokemon" class="grid">
    <div class="row">
      <div>
        <h5>Taille</h5>
        <p>{{this.height}}</p>
        <h5>Poids</h5>
        <p>{{this.weight}}</p>
      </div>
    </div>
    <div>
      <h5>{{pokemon.types.length > 0 ? 'Types' : 'Type'}}</h5>
      <span v-for="type in pokemon.types" :key="type.slot" class="type">
        <app-pokemon-type :type="type.type"/>
      </span>
    </div>
    <div>
      <h5>{{weaknesses.length > 0 ? 'Faiblesses' : 'Faiblesse'}}</h5>
      <span v-for="weakness in weaknesses" :key="weakness" class="type">
        <app-pokemon-type :type="weakness"/>
      </span>
    </div>
  </div>
</template>

<script>
import AppPokemonType from "@/components/AppPokemonType";

export default {
  name: "AppPokemonDetails",
  components: { AppPokemonType },
  props: {
    pokemon: null
  },
  computed: {
    weight() {
      if (this.pokemon !== null) {
        const centimeters = this.pokemon.weight % 10;
        const meters = (this.pokemon.weight - centimeters) / 10;
        return centimeters !== 0 ? meters + ',' + centimeters + ' kg' : meters + ' kg';
      }
      return null;
    },
    height() {
      if (this.pokemon !== null) {
        const g = this.pokemon.height % 10;
        const kg = (this.pokemon.height - g) / 10;
        return g !== 0 ? kg + ',' + g + ' m' : kg + ' m';
      }
      return null;
    },
    weaknesses() {
      if (this.pokemon !== null) {
        return this.$store.getters.getWeaknessesForTypes(this.pokemon.types)
      }
      return []
    }
  }
}
</script>

<style scoped>
.type {
  margin: 2px;
}
</style>
