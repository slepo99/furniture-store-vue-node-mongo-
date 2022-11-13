<template>
  <div class="product-order">
    <div class="product">
      <div v-for="item in cartProducts" :key="item" class="wrapper_list">
        <div class="wrapper_list-name">
          <p>product name: {{ item.name }}</p>
        </div>
        <div class="wrapper_list-price">
          <p>${{ price(item.price, item.quantity) }}</p>
        </div>
      </div>
      <div class="wrapper_total-price">
        <p>price ${{ getTotalPrice() }}</p>
      </div>
    </div>
    <div>
      <button>order now</button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "cart-order",
  computed: {
    ...mapState({
      cartProducts: (state) => state.cart.cartProducts,
    }),
  },
  methods: {
    ...mapGetters({
      getTotalPrice: "cart/getTotalPrice",
    }),
    price(price, quantity) {
      return price * quantity;
    },
  },
  mounted() {
    this.getTotalPrice;
  },
};
</script>
<style lang="scss" scoped>
.product-order {
  background: #f2f2f2;
  min-width: 400px;
  min-height: 400px;
  max-height: 700px;
  border-radius: 12px;
  margin-top: 30px;
}
.product {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.wrapper_list {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 15px;
}
.wrapper_list-price {
  width: 70px;
  display: flex;
  align-items: center;
}
.wrapper_list-price p {
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 26px;
  text-transform: capitalize;
  color: #842c68;
}
.wrapper_list-name {
  width: 250px;
}
.wrapper_list-name p {
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    display: flex;
    align-items: center;
    text-transform: capitalize;
  }
  .wrapper_total-price {
    
  }
</style>
