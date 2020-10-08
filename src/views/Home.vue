<template>
  <div class="home">

    <div class="alert-auth" v-if="!getAuth">
      <h2>Please do the Login to see products</h2>
    </div>

    <app-card
      v-for="card in getCard"
      :key="card.title"
      :card="card"
      v-if="getAuth"
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
    ...mapGetters(["getCard","getAuth"]),
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

.alert-auth{
  height: 100%;
  width: 100%;
  box-shadow: 2px 2px 2px 0 rgba(0, 0, 0, 0.3);
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
