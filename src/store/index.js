import {PokemonClient} from "pokenode-ts";
import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      pokemons: {
        list: [],
        currentOffset: 0
      },
      locale: 'fr',
      types: []
    }
  },
  mutations: {
    getPokemonByName(state, name) {
      const api = new PokemonClient();

      api.getPokemonByName(name)
        .then((pokemon) => {

          api.getPokemonSpeciesById(pokemon.id)
            .then((pokemonSpecie) => {
              pokemon.pokemonSpecie = pokemonSpecie;

              state.pokemons.list.push(pokemon)
              state.pokemons.list.sort((a, b) => {
                return a.id > b.id;
              })
            });
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
    listAllTypes(state) {
      const api = new PokemonClient();

      api.listTypes()
        .then((types) => {
          for (const type of types.results) {
            api.getTypeByName(type.name)
              .then((t) => {
                state.types.push(t);
              })
          }
        })
    }
  }
})

export default store;
