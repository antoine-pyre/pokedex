<template>
  <div v-if="sprites" class="app-pokemon-picture">
    <img :src="hover ? currentSprites.back: currentSprites.front"
         class="card-img-top"
         @mouseover="hover = true"
         @mouseleave="hover = false"
    />
    <div class="shiney-container">
      <div class="form-check form-switch">
        <div class="btn-group">
          <button v-if="shinySprites !== null" class="btn btn-secondary btn-sm" @click="this.shiny=!this.shiny" :class="shiny ? 'active' : ''">
            Shiny
          </button>
          <button v-if="femaleSprites !== null"  class="btn btn-secondary btn-sm" @click="this.female=true" :class="female ? 'active' : ''">
            <i class="fa-solid fa-venus sexe-icone"></i>
          </button>
          <button v-if="femaleSprites !== null"  class="btn btn-secondary" @click="this.female=false" :class="female ? '' : 'active'">
            <i class="fa-solid fa-mars sexe-icone"></i>
          </button>
        </div>
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
      shiny: false,
      female: false
    }
  },
  computed: {
    currentSprites() {
      if (this.shiny === true && this.female === true) {
        return this.shinyFemaleSprites;
      } else if (this.shiny === true) {
        return this.shinySprites;
      } else if (this.female === true) {
        return this.femaleSprites;
      }
      return this.defaultSprites;
    },
    shinyFemaleSprites() {
      if (this.sprites && this.sprites.front_shiny_female) {
        return {
          front: this.sprites.front_shiny_female,
          back: this.sprites.back_shiny_female
        }
      }
      return null;
    },
    shinySprites() {
      if (this.sprites && this.sprites.front_shiny) {
        return {
          front: this.sprites.front_shiny,
          back: this.sprites.back_shiny
        }
      }
      return null;
    },
    femaleSprites() {
      if (this.sprites && this.sprites.front_female) {
        return {
          front: this.sprites.front_female,
          back: this.sprites.back_female
        }
      }
      return null;
    },
    defaultSprites() {
      if (this.sprites) {
        return {
          front: this.sprites.front_default,
          back: this.sprites.back_default
        }
      }
      return null;
    }
  }
}
</script>

<style scoped>
.app-pokemon-picture {
  position: relative;
}
.shiney-container {
  padding: 5px;
  position: absolute;
  top: 0;
  right: 0;
}
.form-check-input:hover, .form-check-label:hover {
  cursor: pointer;
}
.btn {
  padding: 0 10px;
  min-width: 30px;
}
</style>
