<template>
  <div class="home">
    <app-card
      v-for="card in getCard"
      :key="card.title"
      :title="card.title"
      :price="card.price"
      :logo="card.img"
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
    ...mapGetters(["getCard"]),
  },
};
</script>

<style lang="scss" scoped>
.home {
  max-width: 1150px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
