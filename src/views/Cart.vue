<template>
  <div class="cart">
    <div class="alert-cart" v-if="getCartLen == 0">
      <h2>Sorry but this Cart is empty</h2>
    </div>
    
    <app-card
      v-for="card in getCart"
      :key="card.title"
      :card="card"
      :isCart="true"
    ></app-card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    appCard: Card,
  },
  computed: {
    ...mapGetters(["getCart","getCartLen"]),
  },
};
</script>

<style lang="scss" scoped>
.cart {
  max-width: 1150px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
