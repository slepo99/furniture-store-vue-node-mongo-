<template>
  <div>
    <vue-button class="btn" @click="openOrderWindow">
      <p class="btn-text">order now</p>
    </vue-button>

    <dialog-window v-if="Logged" :show="show">
      <div class="box" v-if="setWindow == true">
        <div class="dialog-close">
          <span class="material-symbols-outlined" @click="closeDialog">
            close
          </span>
        </div>
        <form>
          <span class="text-center"
            >To place an order, please provide correct data</span
          >
          <div class="banking-box">
            <h4>Choose your country:</h4>
            <select class="banking-select" v-model="orderData.country" >
              <option default disabled value="">Select your country</option>
              <option  v-for="(item, id) of countries" :key="id" :value="item" >
                {{ item }}
              </option>
            </select>
          </div>
          <div class="input-container">
            <input
              type="text"
              required=""
              ref="focusInput"
              v-model="orderData.name"
            />
            <label>Name:</label>
          </div>
          <div class="input-container">
            <input type="text" required="" v-model="orderData.surname" />
            <label>Surname</label>
          </div>
          <div class="input-container">
            <input type="text" required="" v-model="orderData.city" />
            <label>City</label>
          </div>
          <div class="input-container">
            <input type="text" required="" v-model="orderData.adress" />
            <label>Adress</label>
          </div>
          <div class="input-container">
            <input type="text" required="" v-model="orderData.postCode" />
            <label>Post code</label>
          </div>
          <div class="input-container">
            <input type="text" required="" v-model="orderData.phoneNumber" />
            <label>Phone number</label>
          </div>

          <button type="button" @click="goNext" class="btn-window">
            submit
          </button>
        </form>
      </div>

      <div class="box" v-if="setWindow == false">
        <div class="navigation">
          <div class="get-back">
            <span class="material-symbols-outlined" @click="goBack">
              arrow_back
            </span>
          </div>
          <div class="dialog-close">
            <span class="material-symbols-outlined" @click="closeDialog">
              close
            </span>
          </div>
        </div>

        <form>
          <span class="text-center"
            >To place an order, please provide correct data</span
          >
          <div class="banking-box">
            <h4>Choose banking:</h4>
            <select class="banking-select" name="" id="">
              <option value="">Visa</option>
              <option value="">MASTERCARD</option>
              <option value="">Union pay</option>
            </select>
          </div>
          <div class="input-container">
            <input type="text" required="" ref="focusInput" />
            <label>Card number</label>
          </div>
          <div class="input-container">
            <input type="text" required="" />
            <label>MM/YY</label>
          </div>
          <div class="input-container">
            <input type="text" required="" />
            <label>CVV</label>
          </div>

          <button type="button" @click="compliteOrder" class="btn-window">
            submit
          </button>
        </form>
      </div>
    </dialog-window>
    <dialog-window v-else-if="notLogged" :show="show">
      <div class="message-box">
        <div class="dialog-close">
          <span class="material-symbols-outlined" @click="closeDialog">
            close
          </span>
        </div>
        <h2 class="message">
          You must be
          <router-link to="/auth" class="message_link">logged</router-link> in
          to place an order
        </h2>
        <p>
          Don’t have an account?
          <a class="message_link" @click="goToSignUp">Sign up</a>
        </p>
      </div>
    </dialog-window>
  </div>
</template>
<script>
import VueButton from "./UI/VueButton.vue";
import DialogWindow from "@/components/UI/DialogWindow.vue";
import { mapActions, mapState } from "vuex";
import axios from "axios";
export default {
  components: { DialogWindow, VueButton },
  data() {
    return {
      show: false,
      countries: null,
      setWindow: true,
      orderData: {
        country: "",
        name: "",
        surname: "",
        city: "",
        adress: "",
        postCode: "",
        phoneNumber: "",
        products: null,
      },
    };
  },
  computed: {
    ...mapState({
      credentials: (state) => state.auth.credentials,
      cartProducts: (state) => state.cart.cartProducts,
    }),
    Logged() {
      return this.credentials.token;
    },
    notLogged() {
      return !this.credentials.token;
    },
    goToSignUp() {
      this.$router.push("/registration");
    },
  },
  methods: {
    ...mapActions({
      Order: "order/Order",
    }),
    closeDialog() {
      this.show = false;
      this.setWindow = true;
    },
    openOrderWindow() {
      this.show = true;
      //this.$nextTick(() => this.$refs.focusInput.focus());
    },
    goNext() {
      return (this.setWindow = false);
    },
    goBack() {
      return (this.setWindow = true);
    },
    compliteOrder() {
      this.orderData.products = this.cartProducts;
      this.Order(this.orderData);
    },

    async getCountry() {
      const response = await axios.get("https://restcountries.com/v3.1/all");
      return (this.countries = response.data
        .map((item) => item.name.common)
        .sort());
    },
  },
  mounted() {
    this.getCountry();
  },
};
</script>

<style scoped lang="scss">
.dialog-window {
  margin-top: 200px;
}
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
}
.btn-text {
  text-transform: capitalize;
}
.material-symbols-outlined {
  cursor: pointer;
  display: flex;
  color: white;
  margin: 15px 15px 0 0;
}
.material-symbols-outlined:hover {
  color: #555;
}
.navigation {
  display: flex;
  justify-content: space-between;
}
.get-back {
  display: flex;
  margin-left: 10px;
  justify-content: flex-start;
}
.dialog-close {
  display: flex;

  justify-content: flex-end;
  margin-bottom: 5px;
}
.message-box {
  margin: 30px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.89);
  border-radius: 3px;
  min-width: 600px;
  min-height: 200px;

  .message_link {
    color: rgb(73, 73, 251);
    text-decoration: none;
    cursor: pointer;
  }
  .message_link:hover {
    color: white;
  }
}
.text-center {
  color: #fff;
  text-transform: none;
  font-size: 20px;
  margin: -50px 0 60px 0;
  display: block;
  text-align: center;
  width: 450px;
}
.box {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.89);
  border-radius: 3px;
  margin-top: 120px;
  form {
    padding: 50px 100px;
  }
}

.input-container {
  position: relative;
  margin-bottom: 25px;
  width: 100%;
}
.input-container label {
  position: absolute;
  top: 0px;
  left: 0px;
  font-size: 16px;
  color: #fff;
  pointer-event: none;
  transition: all 0.5s ease-in-out;
}
.input-container input {
  border: 0;
  border-bottom: 1px solid #555;
  background: transparent;
  width: 100%;
  padding: 8px 0 5px 0;
  font-size: 16px;
  color: #fff;
}
.input-container input:focus {
  border: none;
  outline: none;
  border-bottom: 1px solid #e74c3c;
}
.btn-window {
  color: #fff;
  background-color: #e74c3c;
  outline: none;
  border: 0;
  color: #fff;
  padding: 10px 20px;
  text-transform: uppercase;
  margin-top: 50px;
  border-radius: 2px;
  cursor: pointer;
  position: relative;
}
.input-container input:focus ~ label,
.input-container input:valid ~ label {
  top: -12px;
  font-size: 12px;
}
.banking-box {
  width: 100%;
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;

  .banking-select {
    border: none;
    border-bottom: 1px solid white;
    width: 100%;
    height: 30px;
    outline: none;
    background-color: rgba(0, 0, 0, 0);
    cursor: pointer;
    color: white;
    select {
      color: white;
    }
  }
  h4 {
    height: 15px;
    text-align: left;
    color: white;
  }
}
</style>
