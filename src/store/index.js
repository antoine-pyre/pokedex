import {createStore} from 'vuex'
import pokemons from "@/store/pokemons";
import locale from "@/store/locale";
import types from "@/store/types";
import versions from "@/store/versions";

const store = createStore({
  modules: {
    pokemons: pokemons,
    locale: locale,
    types: types,
    versions: versions
  }
})

export default store;
