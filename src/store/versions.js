import {PokemonClient} from "pokenode-ts";

const versions = {
  state() {
    return {
      versions: []
    }
  },
  getters: {
    getLocalVersionFromVersionName: (state, getters, rootState, rootGetters) => (versionName) => {
      for (const version of state.versions) {
        if (version.name === versionName) {
          return rootGetters.getLocaleName(type.names);
        }
      }
      return versionName
    }
  },
  mutations: {
    listAllVersions(state) {
      const api = new PokemonClient();

      api.listVersion()
        .then((versions) => {
          for (const version of versions.results) {
            api.getTypeByName(version.name)
              .then((v) => {
                state.versions.push(v);
              })
          }
        })
    }
  }
}

export default versions;
