<template>
  <div v-if="sprites">
    <img :src="hover ? shiny ? sprites.back_shiny : sprites.back_default : shiny ? sprites.front_shiny : sprites.front_default"
         class="card-img-top"
         @mouseover="hover = true"
         @mouseleave="hover = false"
    />
    <div class="shiney-container">
      <div class="form-check form-switch">
        <label class="form-check-label" for="shiny">Shiny</label>
        <input class="form-check-input" type="checkbox" role="switch" id="shiny" v-model="shiny">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AppPokemonPicture",
  props: {
    sprites: null
  },
  data() {
    return {
      hover: false,
      shiny: false
    }
  },
}
</script>

<style scoped>
.shiney-container {
  padding: 5px;
  position: absolute;
  top: 0;
  right: 0;
}
input:hover {
  cursor: pointer;
}
</style>
