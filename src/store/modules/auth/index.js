// Import Root Vuex
import authGetters from "./getters.js";
import authMutations from "./mutations.js";
import authActions from "./actions.js";

export default {
  state: {
    auth: false,
  },
  getters: authGetters,
  mutations: authMutations,
  actions: authActions,
};
