<template>
  <div class="card">

    <div class="card__top">
      <div class="card__logo">
        <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="product">
      </div>

      <div class="card__info">
        <h3>Card Title</h3>
        <div class="card__price">€99.90</div>
        <p class="card__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
      </div>
    </div>

    <div class="card__bottom">
      <div class="card__button">Add to Cart</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.card {
  width: 40%;
  min-height: 100px;
  margin: 1rem;
  padding: 1rem;
  box-shadow: 2px 0px 8px rgba(0 ,0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__top {
    display: flex;
    justify-content: center;
    align-items: center;
    .card__logo{
      flex-basis: 30%;
      img{
        width: 100%;
      }
    }
    .card__info{
      flex-basis: 70%;
      padding: 20px;
    }
  }
  &__bottom{
    .card__button{
      margin: 15px 10px;
      padding: 0.7rem;
      background: #27ae60;
      color: #fff;
      border-radius: 0.3rem;

    }
  }
}
</style>
