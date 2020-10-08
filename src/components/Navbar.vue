<template>
  <nav class="navbar">
    <div class="navbar__container">
      <router-link class="navbar__logo" to="/" tag="div">VUEX SHOP</router-link>

      <div class="navbar__navigation">
        <router-link class="navigation__item" to="/">PRODUCTS</router-link>
        <router-link v-if="getAuth" class="navigation__item" to="/cart"
          >CART</router-link
        >
        <div v-if="getAuth" class="cart__number">{{ getCartLen }}</div>
      </div>
      <div class="navbar__auth">
        <div v-if="!getAuth" @click="changeAuth()" class="auth__button">
          Login
        </div>
        <div
          v-if="getAuth"
          @click="changeAuth(), backHome()"
          class="auth__button auth__out"
        >
          Logout
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["getCartLen", "getAuth"]),
  },
  methods: {
    ...mapActions(["changeAuth"]),
    backHome() {
      if (this.$router.currentRoute.name !== "Home") {
        this.$router.push("/");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  background: #95a5a6;
  margin-bottom: 50px;
  &__container {
    height: 100%;
    max-width: 1150px;
    margin: 0 auto;
    padding-right: 10px;
    padding-left: 10px;
    display: flex;
    align-items: center;
  }
  &__logo {
    width: 20%;
    font-size: 1.2rem;
    letter-spacing: 0.2rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #2c3e50;
    cursor: pointer;
  }
  &__navigation {
    width: 80%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .navigation__item {
      padding: 0 5px;
      text-decoration: none;
      color: #fff;
      &:hover {
        color: #2980b9;
      }
    }
    .cart__number {
      width: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 3px 0;
      background-color: #2980b9;
      border-radius: 50%;
      color: #fff;
    }
    &:before {
      position: absolute;
      content: "";
      bottom: -8px;
      width: 50%;
      height: 1px;
      background-color: rgba(255, 255, 255, 0.7);
    }
  }
  &__auth {
    width: 20%;
    .auth__button {
      background-color: #2980b9;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      color: #fff;
      border-radius: 0.3rem;
      opacity: 0.8;
      cursor: pointer;
      &:hover {
        opacity: 1;
      }
      &.auth__out {
        background-color: #e74c3c;
      }
    }
  }
}
</style>
