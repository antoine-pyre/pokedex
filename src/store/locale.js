
const locale = {
  state() {
    return {
      locale: 'fr',
    }
  },
  getters: {
    getLocale: (state) => {
      return state.locale;
    },
    getLocaleName: (state) => (names) => {
      if (names) {
        for (const name of names) {
          if (name.language.name === state.locale) {
            return name.name;
          }
        }
      }
      for (const name of names) {
        if (name.language.name === 'en') {
          return name.name;
        }
      }
      return '';
    }
  }
}

export default locale;
