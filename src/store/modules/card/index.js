// Import Root Vuex
import cardGetters from "./getters.js";
import cardMutations from "./mutations.js";
import cardActions from "./actions.js";

export default {
  state: {
    cardInfo: [
      {
        title: "Camera",
        price: "99.90",
        img:
          "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        title: "Lighter",
        price: "21.99",
        img:
          "https://images.pexels.com/photos/335257/pexels-photo-335257.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        title: "Headset",
        price: "45.00",
        img:
          "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
    ],
  },

  getters: cardGetters,
  mutations: cardMutations,
  actions: cardActions,
};
