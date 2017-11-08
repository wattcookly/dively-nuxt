import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    strict: true,
    state: {
      locales: ['en', 'fr', 'de'],
      locale: 'en'
    },
    mutations: {
      increment (state) {
        state.counter++
      },
      setLanguage (state, locale) {
        if (state.locales.indexOf(locale) !== -1) {
          state.locale = locale
        }
      }
    }
  })
}

export default createStore
