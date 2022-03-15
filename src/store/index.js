import {createStore} from 'vuex'
import pokemons from "@/store/pokemons";
import locale from "@/store/locale";
import types from "@/store/types";

const store = createStore({
  modules: {
    pokemons: pokemons,
    locale: locale,
    types: types
  }
})

export default store;
