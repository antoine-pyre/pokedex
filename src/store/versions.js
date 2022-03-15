import {GameClient} from "pokenode-ts";

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
          console.log(versionName, version)
          return rootGetters.getLocaleName(version.names);
        }
      }
      console.log(versionName)
      return versionName
    }
  },
  mutations: {
    listAllVersions(state) {
      const api = new GameClient();

      api.listVersions(0,100)
        .then((versions) => {
          for (const version of versions.results) {
            api.getVersionByName(version.name)
              .then((v) => {
                state.versions.push(v);
              })
          }
        })
    }
  }
}

export default versions;
