<template>
  <div>
    <vue-header />
    <div class="container-body">
      <div>
        <img
          class="login-logo"
          src="@/assets/images/authPage/Group.svg"
          alt=""
        />
      </div>
      <form action="" @submit.prevent="Login">
        <div class="inpit-container">
          <span v-if="v$.data.username.$error" class="error-message">
            {{ usernameErrorMessage() }}
          </span>
          <span v-else-if="this.authError !== null" class="error-message">
            {{ "Wrong username or password" }}
          </span>
          <input
            :class="{
              invalid:
                (v$.data.username.$error && v$.data.username.minLength) ||
                this.authError !== null,
            }"
            class="username"
            type="text"
            v-model="data.username"
            placeholder="username"
          />
        </div>

        <div class="inpit-container">
          <span v-if="v$.data.password.$error" class="error-message">
            {{ passwordErrorMessage() }}
          </span>

          <input
            class="password"
            :class="{
              invalid:
                (v$.data.password.$error && v$.data.password.minLength) ||
                this.authError !== null,
            }"
            type="text"
            v-model="data.password"
            placeholder="password"
          />
        </div>
        <div>
          <button type="submit" class="btn"><p>Sign in</p></button>
        </div>
      </form>
      <div>
        <p>
          Don’t have an account?
          <a @click="signUp" style="color: blue; cursor: pointer">Sign up</a>
        </p>
      </div>
    </div>
    <vue-footer />
  </div>
</template>

<script>
import useValidate from "@vuelidate/core";
import { required, minLength, sameAs } from "@vuelidate/validators";
import { mapActions, mapGetters, mapMutations, mapState } from "vuex";
import VueHeader from "../UI/VueHeader.vue";
import VueFooter from "../UI/VueFooter.vue";
export default {
  components: { VueHeader, VueFooter },
  name: "Auth",
  data() {
    return {
      v$: useValidate(),
      data: {
        username: "",
        password: "",
      },
    };
  },
  validations() {
    return {
      data: {
        username: { required, minLength: minLength(4) },
        password: { required, minLength: minLength(4) },
      },
    };
  },
  computed: {
    ...mapState({
      authError: (state) => state.auth.authError,
    }),
  },
  methods: {
    ...mapActions({
      login: "auth/Login",
    }),

    Login() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.login(this.data);
      }
    },
    signUp() {
      this.$router.push("/registration");
    },
    usernameErrorMessage() {
      if (this.v$.data.username.$errors[0].$params.type == "required") {
        let str = `${this.v$.data.username.$errors[0].$property} is ${this.v$.data.username.$errors[0].$validator}`;
        return str[0].toUpperCase() + str.slice(1);
      } else if (this.v$.data.username.$errors[0].$params.type == "minLength") {
        let str = `${this.v$.data.username.$errors[0].$property} should be at least ${this.v$.data.username.$errors[0].$params.min} characters long`;
        return str[0].toUpperCase() + str.slice(1);
      }
    },
    passwordErrorMessage() {
      if (this.v$.data.password.$errors[0].$params.type == "required") {
        let str = `${this.v$.data.password.$errors[0].$property} is ${this.v$.data.password.$errors[0].$validator}`;
        return str[0].toUpperCase() + str.slice(1);
      } else if (this.v$.data.password.$errors[0].$params.type == "minLength") {
        let str = `${this.v$.data.password.$errors[0].$property} should be at least ${this.v$.data.password.$errors[0].$params.min} characters long`;
        return str[0].toUpperCase() + str.slice(1);
      }
    },
  },
};
</script>

<style scoped lang="scss">
.container-body {
  min-height: 80vh;
  padding: 0;
  width: 100%;
  margin: 0 auto;
  background-size: cover;
  padding-top: 200px;
  .login-logo {
    margin-bottom: 40px;
  }
  .username {
    width: 300px;
    height: 45px;
    left: 490px;
    top: 330px;
    border: 1px solid #b6b6b6;
    border-radius: 4px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    text-transform: uppercase;
    background: url("@/assets/icons/body/user.svg") center left 20px;
    background-repeat: no-repeat, repeat;
    background-size: 30px;
    margin-bottom: 30px;
    outline-color: black;
  }

  .password {
    width: 300px;
    height: 45px;
    left: 490px;
    top: 330px;
    border: 1px solid #b6b6b6;
    border-radius: 4px;
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 30px;
    text-align: center;
    text-transform: uppercase;
    background: url("@/assets/icons/body/lock.svg") center left 20px;
    background-repeat: no-repeat, repeat;
    background-size: 30px;
    outline-color: black;
    margin-bottom: 30px;
  }
  .error-message {
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 5px;
    width: 300px;
    height: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 2px;
  }
  .invalid {
    border-color: red;
    border: 1px solid red;
  }
  .btn {
    width: 300px;
    height: 45px;
    left: 490px;
    top: 483px;
    padding: 0;
    cursor: pointer;
    background: #000000;
    box-shadow: 0px 4px 4px rgba(125, 125, 125, 0.3);
    border-radius: 4px;
    border: 0;
    p {
      font-style: normal;
      font-weight: 300;
      font-size: 16px;
      line-height: 30px;
      text-align: center;
      text-transform: uppercase;
      margin: 5px 0 0 0;
      text-transform: uppercase;
      color: rgb(255, 255, 255);
      height: 100%;
    }
  }
  .btn:hover {
    background: #ffffff;
    p:hover {
      color: #000000;
    }
  }
  .inpit-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
