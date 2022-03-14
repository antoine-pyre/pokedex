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

<style scoped>
.badge {
  color: black;
  max-width: 110px;
  width: 38.4375%;
}
.grass {
  background-color: #9bcc50;
}
.poison {
  background-color: #b97fc9;
  color: white;
}
.fire {
  background-color: #fd7d24;
  color: white;

}
.flying {
  background-color: #3dc7ef;
  background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
}
.water {
  background-color: #4592c4;
  color: white;
}
.bug {
  background-color: #729f3f;
  color: white;

}
.normal {
  background-color: #a4acaf;
}
.electric {
  background-color: #eed535;
}
.ground {
  background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
  background-color: #f7de3f;
}
.fairy {
  background-color: #fdb9e9;
}
.fighting {
  background-color: #d56723;
  color: #fff;
}
.rock {
  background-color: #a38c21;
  color: #fff;
}
.ghost {
  background-color: #7b62a3;
  color: #fff;
}
.steel {
  background-color: #9eb7b8;
}
.psychic {
  background-color: #f366b9;
  color: #fff;
}
.ice {
  background-color: #51c4e7;
}
.dragon {
  background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
  background-color: #53a4cf;
  color: #fff;
}
.dark {
  background-color: #707070;
  color: white;
}
.unknown {}
.shadow {}
</style>
