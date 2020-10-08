<template>
  <div id="app">
    <!-- Nav -->
    <app-navbar></app-navbar>

    <!-- Content -->
    <router-view></router-view>
  </div>
</template>

<script>
// Components
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    appNavbar: Navbar,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
