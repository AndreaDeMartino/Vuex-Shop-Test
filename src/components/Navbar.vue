<template>
  <nav class="navbar">
    <div class="navbar__container">
      <router-link class="navbar__logo" to="/" tag="div">VUE SHOP</router-link>

      <div class="navbar__navigation">
        <router-link class="navigation__item" to="/">Products</router-link>
        <router-link class="navigation__item" to="/cart">Cart</router-link>
        <div class="cart__number">0</div>
      </div>
      <div class="navbar__auth">
        <div class="auth__button">Login</div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.navbar {
  height: 60px;
  background: #95a5a6;
  margin-bottom: 50px;
  &__container {
    height: 100%;
    width: 1150px;
    margin: 0 auto;
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
      letter-spacing: 0.1rem;
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
    }
  }
}
</style>
