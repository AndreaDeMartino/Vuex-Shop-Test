export default {
  addToCart(state, payload) {
    // Check se esiste già articolo
    let index = state.cart.findIndex((title) => title.title == payload.title);

    // Se esiste incrementa qt altrimenti pusha con qt = 1
    if (index !== -1) {
      state.cart[index].qt++;
    } else {
      state.cart.push(payload);
      state.cart[state.cart.length - 1].qt = 1;
    }
  },
  removeFromCart(state, payload) {
    // Check se esiste già articolo
    let index = state.cart.findIndex((title) => title.title == payload.title);

    // Se esiste incrementa elimina articolo da carrello
    if (index !== -1) {
        state.cart.splice(index, 1);
    }
  },
};
