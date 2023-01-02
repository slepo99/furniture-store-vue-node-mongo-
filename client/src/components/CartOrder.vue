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
        <p>total price ${{ getTotalPrice() }}</p>
      </div>
    </div>
    <div style="display: flex; justify-content: center">
      <order-window />
    </div>
  </div>
</template>
<script>
import { mapGetters, mapState } from "vuex";
import OrderWindow from "./OrderWindow.vue";

export default {
  components: { OrderWindow },
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
  border-radius: 12px;
  margin: 30px 0 30px 0;
  max-width: 100%;
  min-width: 435px;
  height: fit-content;
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
  padding: 0 50px 0 50px;
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
  text-align: start;
}
.wrapper_total-price {
  font-style: normal;
  font-weight: 900;
  font-size: 22px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-transform: capitalize;
}
</style>
