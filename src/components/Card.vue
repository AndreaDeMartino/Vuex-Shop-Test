<template>
  <div class="card">
    <div class="card__top">
      <div class="card__logo">
        <img :src="card.img" alt="product" />
      </div>

      <div class="card__info">
        <h3>{{ card.title }} <span v-if="isCart"> ({{ card.qt }})</span></h3>
        <div class="card__price">€{{ card.price }}</div>
        <p class="card__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>

    <div class="card__bottom">
      <div v-if="!isCart" class="card__button" @click="addToCart(card)">Add to Cart</div>
      <div v-else class="card__button--cart" @click="removeFromCart(card)">Remove from Cart</div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    card: {
      type: Object,
      required: true,
    },
    isCart: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    ...mapMutations(["addToCart","removeFromCart"]),
  }
};
</script>

<style lang="scss" scoped>
.card {
  width: 40%;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 2px 0px 8px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0.9;
  transition: transform 0.3s linear;
  &:hover{
    transform: scale(1.1);
  }
  &__top {
    display: flex;
    justify-content: center;
    align-items: center;
    .card__logo {
      flex-basis: 30%;
      img {
        max-width: 100%;
        object-fit: cover;
      }
    }
    .card__info {
      flex-basis: 70%;
      padding: 20px;
      h3 {
        color: #2980b9;
      }
      .card__price {
        margin: 5px 0;
        padding: 2px;
        border-radius: 0.3rem;
        background-color: #f39c12;
        color: #fff;
        font-size: 0.9rem;
        width: 5rem;
        text-align: center;
      }
      .card__description {
        color: #777;
        font-size: 0.8rem;
      }
    }
  }
  &__bottom {
    .card__button {
      margin: 15px 10px;
      padding: 0.7rem;
      background: #27ae60;
      color: #fff;
      border-radius: 0.2rem;
      cursor: pointer;
    }
    .card__button--cart{
      margin: 15px 10px;
      padding: 0.7rem;
      background:#e74c3c;
      color: #fff;
      border-radius: 0.2rem;
      cursor: pointer;
    }
  }
}
</style>
