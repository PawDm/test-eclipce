import { createStore } from 'vuex'

export default createStore({
  state: {
    valutes: [],
    fromValute: {},
    toValute: {},
    qty: 1,
    rubles: 0,
  },

  getters: {
    resultConverter: (state) =>
      (
        (state.qty * state.fromValute.Value * state.toValute?.Nominal) /
        (state.toValute?.Value * state.fromValute?.Nominal)
      ).toFixed(3),
  },
  mutations: {
    INIT_VALUTE(state, { Valute }) {
      state.valutes = Object.values(Valute)
      state.fromValute = state.valutes[0]
      state.toValute = state.valutes[10]
    },
    CHANGE_SELECTED_VALUTES(state) {
      const tmp = state.toValute
      state.toValute = state.fromValute
      state.fromValute = tmp
    },
    SET_QTY(state, { qty }) {
      state.qty = qty
    },
    SET_VALUTE(state, { valute, fromValute }) {
      if (fromValute) state.fromValute = valute
      else state.toValute = valute
    },
  },
  actions: {
    async GET_VALUTE({ commit }) {
      const { Valute } = await fetch(
        'https://www.cbr-xml-daily.ru/daily_json.js'
      )
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          return data
        })
      commit('INIT_VALUTE', { Valute })
    },
  },
  modules: {},
})
