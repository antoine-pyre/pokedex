import {PokemonClient} from "pokenode-ts";

const types = {
  state() {
    return {
      types: []
    }
  },
  getters: {
    getLocalTypeFromTypeName: (state, getters, rootState, rootGetters) => (typeName) => {
      for (const type of state.types) {
        if (type.name === typeName) {
          return rootGetters.getLocaleName(type.names);
        }
      }
      return typeName
    }
  },
  mutations: {
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
}

export default types;
