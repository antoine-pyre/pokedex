import {PokemonClient} from "pokenode-ts";
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      pokemons: {
        list: [],
        currentOffset: 0
      },
    }
  },
  mutations: {
    getPokemonByName(state, name) {
      const api = new PokemonClient();

      api.getPokemonByName(name)
        .then((pokemon) => {
          state.pokemons.list.push(pokemon)
          state.pokemons.list.sort((a, b) => {
            return a.id > b.id;
          })
        });
    },
    getNextPokemons(state, limit) {
      const api = new PokemonClient();

      api.listPokemons(state.pokemons.currentOffset, limit)
        .then((pokemons) => {
          for (const pokemon of pokemons.results) {
            store.commit('getPokemonByName', pokemon.name)
          }
          state.pokemons.currentOffset += limit
        });
    },
    increment(state) {
      state.count++
    }
  }
})

export default store;
