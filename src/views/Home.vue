<template>
  <div class="home">
    <app-card></app-card>
    <app-card></app-card>
    <app-card></app-card>
  </div>
</template>

<script>
import Card from '@/components/Card.vue';

export default {
  components: {
    appCard: Card,
  }
};
</script>

<style lang="scss" scoped>
.home {
  width: 1150px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}
</style>
