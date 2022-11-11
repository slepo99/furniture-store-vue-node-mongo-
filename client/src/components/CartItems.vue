<template>
    <div>
      <div v-for="(item, id) in cartProducts" :key="id">
        <div class="product">
            <p> name{{item.name}}</p>
            <p> quantity{{item.quantity}}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { mapGetters, mapState } from 'vuex';
  export default {
  name: 'cart-items',
  data() {
    return {
        cart: null
    }
  },
  computed: {
    //   ...mapGetters({
    //       cartProducts: 'cart/cartProducts'
    //   }),
      ...mapState({
        cartProducts: (state) => state.cart.cartProducts
      })
  },


  }
  </script>
  
  <style scoped lang="scss">
  .product {
    display: flex;
    min-width: 1280px;
    height: 100px;
    background-color: rgb(203, 201, 201);
  }
  
  </style>