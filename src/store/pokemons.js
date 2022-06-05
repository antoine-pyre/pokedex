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
    getPokemonLocaleFlavorTextsFromPokemon: (state, getters, rootState, rootGetters) => (pokemon) => {
      if (pokemon && pokemon.pokemonSpecie && pokemon.pokemonSpecie.flavor_text_entries) {
        const locale = rootGetters.getLocale;
        const resultList = [];

        for (const flavor_text_entry of pokemon.pokemonSpecie.flavor_text_entries) {
          if (flavor_text_entry.language.name === locale) {
            resultList.push(flavor_text_entry);
          }
        }
        return resultList;
      }
      return [];
    },
    getPokemonLocaleNameFromPokemon: (state, getters, rootState, rootGetters) => (pokemon) => {
      if (pokemon && pokemon.pokemonSpecie && pokemon.pokemonSpecie.names) {
        return rootGetters.getLocaleName(pokemon.pokemonSpecie.names);
      }
      return '';
    },
    getPokemonById: (state) => (id) => {
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
