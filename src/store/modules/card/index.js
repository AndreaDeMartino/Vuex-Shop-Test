// Import Root Vuex
import cardGetters from "./getters.js";
import cardMutations from "./mutations.js";
import cardActions from "./actions.js";

export default {
  state: {
    // cardInfo: 'lol',
    cardInfo: [
      {
        title: "Fotocamera",
        price: '99.90',
        img:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        title: "Accendino",
        price: '21.99',
        img:
          "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        title: "Cassa Bluethooth",
        price: '45.00',
        img:
          "https://images.pexels.com/photos/1279107/pexels-photo-1279107.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
    ],
  },

  getters: cardGetters,
  mutations: cardMutations,
  actions: cardActions,
};
