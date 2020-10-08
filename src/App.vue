<template>
  <div id="app">
    <!-- Nav -->
    <app-navbar></app-navbar>

    <!-- Content -->
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity .2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
