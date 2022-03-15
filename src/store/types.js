import {PokemonClient} from "pokenode-ts";

const types = {
  state() {
    return {
      types: []
    }
  },
  getters: {
    getTypeFromName: (state) => (name) => {
      for (const type of state.types) {
        if (type.name === name) {
          return type;
        }
      }
      return null;
    },
    getLocalTypeFromTypeName: (state, getters, rootState, rootGetters) => (typeName) => {
      for (const type of state.types) {
        if (type.name === typeName) {
          return rootGetters.getLocaleName(type.names);
        }
      }
      return typeName
    },
    getWeaknessesForTypes: (state, getters) => types => {
      const doubleDamageFrom = [];
      const halfDamageFrom = [];
      const noDamageFrom = [];
      for (const t of types) {
        const type = getters.getTypeFromName(t.type.name);
        if (type) {
          noDamageFrom.push(...type.damage_relations.no_damage_from);
          for (const double of type.damage_relations.double_damage_from) {
            doubleDamageFrom.push(getters.getTypeFromName(double.name))
          }
          for (const half of type.damage_relations.half_damage_from) {
            halfDamageFrom.push(getters.getTypeFromName(half.name))
          }
        }
      }
      for (const noDamage of noDamageFrom) {
        const indexDouble = doubleDamageFrom.findIndex(double => double.name === noDamage.name);
        if (indexDouble !== -1) {
          doubleDamageFrom.splice(indexDouble, 1);
        }
      }
      for (const half of halfDamageFrom) {
        const indexDouble = doubleDamageFrom.findIndex(double => double.name === half.name);
        if (indexDouble !== -1) {
          doubleDamageFrom.splice(indexDouble, 1);
        }
      }
      return doubleDamageFrom;
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
