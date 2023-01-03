<template>
  <div class="container-header">
    <div class="container-logo">
      <div>
        <router-link class="link-store" to="/">
          <img src="@/assets/icons/header/Logo-Maynooth.svg" alt="logo" />
        </router-link>
      </div>
    </div>
    <div class="container-links">
      <div>
        <p class="link">LIVING ROOM</p>
      </div>
      <div @click="openSearchFieldToStore">
        <router-link class="link-store" to="/store"
          ><p class="link">STORE</p></router-link
        >
      </div>
      <div>
        <p class="link">CONTACT</p>
      </div>
    </div>

    <logout-window :show="show" @cancelLoggingOut="cancelLoggingOut" />

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

      <div class="dropdown">
        <img
          class="container-tools-login"
          src="@/assets/icons/header/Login.png"
          alt="Login"
        />
        <div class="dropdown-content">
          <p v-if="this.credentials.token !== null">
            Hello {{ credentials.user.username }}
          </p>
          <a
            v-if="this.credentials.token == null && this.$route.name !== 'auth'"
            @click="userAuth"
            >Log in</a
          >
          <a
            v-if="this.credentials.token !== null"
            @click="callLogoutDialogWindow"
            >Log out</a
          >
          <a
            v-if="this.credentials.token == null"
            @click="$router.push('/registration')"
            >Sign up</a
          >
        </div>
      </div>
      <div v-if="this.$route.name == 'store'">
        <div @click="changeStatusOfSearchField">
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
import LogoutWindow from "../LogoutWindow.vue";

export default {
  components: { LogoutWindow },
  name: "vue-header",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    ...mapMutations({
      changeStatus: "headerProducts/changeStatus",
    }),
    changeStatusOfSearchField() {
      this.changeStatus();
    },
    userAuth() {
      if (this.credentials.token == null) {
        this.$router.push("/auth");
      }
    },
    callLogoutDialogWindow() {
      return (this.show = true);
    },
    cancelLoggingOut() {
      return (this.show = false);
    },
  },
  computed: {
    ...mapGetters({
      cartProducts: "cart/cartProducts",
      openSearchFieldToStore: "headerProducts/openSearchFieldToStore",
    }),
    ...mapState({
      isOpen: (state) => state.headerProducts.isOpen,
      credentials: (state) => state.auth.credentials,
    }),
  },
};
</script>

<style scoped lang="scss">
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
.link:hover {
  color: #842c68;
  cursor: pointer;
}
.link:active {
  font-size: 20px;
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
  transition: width 1s, height 1s;
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
  transition: width 1s, height 1s;
}
.container-tools-search {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 25px;
  width: 22px;
  cursor: pointer;
  transition: width 1s, height 1s;
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  cursor: pointer;
}
.dropdown-content p {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
}
.dropdown:hover .container-tools-login {
  height: 20px;
  width: 20px;
}
.dropdown:hover .dropbtn {
  background-color: #3e8e41;
}
.container-tools-login:hover {
  height: 20px;
  width: 20px;
}
.container-tools-cart:hover {
  height: 25px;
  width: 25px;
}
.container-tools-search:hover {
  height: 30px;
  width: 30px;
}
</style>
