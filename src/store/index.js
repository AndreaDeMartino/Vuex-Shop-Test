import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// Import Root Vuex
import rootGetters from './getters.js'
import rootMutations from './mutations.js'
import rootActions from './actions.js'

// Modules
import cardModule from './modules/card/index.js'
import authModule from './modules/auth/index.js'

export default new Vuex.Store({
  state: {
    cart: []
  },
  getters: rootGetters,
  mutations: rootMutations,
  actions: rootActions,


  modules: {
    card: cardModule,
    auth: authModule,
  }
})
