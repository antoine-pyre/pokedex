
const locale = {
  state() {
    return {
      locale: 'fr',
    }
  },
  getters: {
    getLocaleName: (state) => (names) => {
      if (names) {
        for (const name of names) {
          if (name.language.name === state.locale) {
            return name.name;
          }
        }
      }
      return '';
    }
  }
}

export default locale;
