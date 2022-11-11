<template>
  <div class="container-header">
    <div class="container-logo">
      <div>
        <router-link class="link-store" to="/"
          ><img src="@/assets/icons/header/Logo-Maynooth.svg" alt=""
        /></router-link>
      </div>
    </div>
    <div class="container-links">
      <div>
        <p>LIVING ROOM</p>
      </div>
      <div @click="openSearchFieldToStore">
        <router-link class="link-store" to="/store">STORE</router-link>
      </div>
      <div>
        <p>CONTACT</p>
      </div>
    </div>

    <div class="container-tools">
      <router-link to="/cart" class="cart-link">
        <div class="container-tools-cart-box">
        
        <img
          class="container-tools-cart"
          src="@/assets/icons/header/Cart.png"
          alt="Cart"
        />
        <p v-if="cartProducts.length">
          {{ cartProducts.length }}
        </p>
      </div>
        </router-link>
     
      <div>
        <img
          class="container-tools-login"
          src="@/assets/icons/header/Login.png"
          alt="Login"
        />
      </div>
      <div v-if="this.$route.name == 'store'">
        <div @click="changeStatus">
          <img
            v-if="!isOpen"
            class="container-tools-search"
            src="@/assets/icons/header/Search.png"
            alt="Search"
          />
          <span
            v-else-if="isOpen"
            class="material-symbols-outlined container-tools-search"
          >
            close
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "vue-header",
  methods: {
    ...mapMutations({
      changeStatus: "headerProducts/changeStatus",
    }),
  },
  computed: {
    ...mapGetters({
      cartProducts: "cart/cartProducts",
      openSearchFieldToStore: "headerProducts/openSearchFieldToStore",
    }),
    ...mapState({
      isOpen: (state) => state.headerProducts.isOpen,
    }),
  },
};
</script>

<style scoped>
* {
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}

.container-header {
  margin: 0 auto;
  top: 0;
  right: 0;
  left: 0;
  max-width: 100%;
  height: 50px;
  background-color: black;
  position: fixed;
  display: flex;
  align-items: center;
  color: white;
  z-index: 101;
}
.container-logo div {
  display: flex;
}
.container-links {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
  margin: 0;
  max-width: 600px;
}
.link-store {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #ffffff;
}
.container-tools {
  display: flex;
  align-items: center;
  gap: 40px;
  width: 100px;
}

.container-tools-cart-box {
  display: flex;
}
.container-tools-cart-box p {
  font-size: 15px;
  color: white;
  
}
.cart-link {
  text-decoration: none;
}
.container-tools-cart {
  position: relative;
  display: flex;
  color: #fff;
  font-size: 25px;
  justify-content: flex-start;
  top: 5px;
  height: 20px;
  width: 20px;
  margin-bottom: 2px;
  cursor: pointer;
}
.container-tools-login {
  display: flex;
  color: #fff;
  font-size: 18px;
  justify-content: center;
  height: 15px;
  width: 15px;
  margin-top: 2px;
  cursor: pointer;
}
.container-tools-search {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 25px;
  width: 22px;
  cursor: pointer;
}
</style>
