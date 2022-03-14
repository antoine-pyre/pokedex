import {PokemonClient} from "pokenode-ts";
import store from "@/store/index";

const pokemons = {
  state() {
    return {
      pokemons: {
        list: [],
        currentOffset: 0,
        limit: 20
      }
    }
  },
  getters: {
    getPokemonsList: (state) => {
      return state.pokemons.list;
    },
    // eslint-disable-next-line no-unused-vars
    getName: (state, getters, rootState, rootGetters) => (pokemon) => {
      if (pokemon && pokemon.pokemonSpecie && pokemon.pokemonSpecie.names) {
        return store.getters.getLocaleName(pokemon.pokemonSpecie.names);
      }
      return '';
    },
    getById: (state) => (id) => {
      for (const pokemon of state.pokemons.list) {
        if (pokemon.id.toString() === id) {
          return pokemon;
        }
      }
      store.commit('findPokemonById', id);
      return null;
    }
  },

  mutations: {
    completePokemon(state, pokemon) {
      const api = new PokemonClient();

      api.getPokemonSpeciesById(pokemon.id)
        .then((pokemonSpecie) => {
          pokemon.pokemonSpecie = pokemonSpecie;

          state.pokemons.list.push(pokemon)
          state.pokemons.list.sort((a, b) => {
            return a.id > b.id;
          })
        });
    },
    findPokemonById(state, id) {
      const api = new PokemonClient();

      api.getPokemonById(id)
        .then((pokemon) => {
          store.commit('completePokemon', pokemon)
        });
    },
    findPokemonByName(state, name) {
      const api = new PokemonClient();

      api.getPokemonByName(name)
        .then((pokemon) => {
          store.commit('completePokemon', pokemon)
        });
    },
    findNextPokemons(state) {
      const api = new PokemonClient();

      api.listPokemons(state.pokemons.currentOffset, state.pokemons.limit)
        .then((pokemons) => {
          for (const pokemon of pokemons.results) {
            store.commit('findPokemonByName', pokemon.name)
          }
          state.pokemons.currentOffset += state.pokemons.limit
        });
    },
    findFirstPokemons(state) {
      const api = new PokemonClient();

      state.pokemons = {
        list: [],
        currentOffset: 0,
        limit: 20
      }
      api.listPokemons(state.pokemons.currentOffset, state.pokemons.limit)
        .then((pokemons) => {
          for (const pokemon of pokemons.results) {
            store.commit('findPokemonByName', pokemon.name)
          }
          state.pokemons.currentOffset += state.pokemons.limit
        });
    }
  }
};

export default pokemons;