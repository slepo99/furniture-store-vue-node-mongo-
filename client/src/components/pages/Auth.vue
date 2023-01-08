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
        <!-- <small v-if="v$.data.username.required && v$.data.username.$dirty">qwe</small> -->
        <div>
          <input
            class="username"
            type="text"
            v-model="data.username"
            placeholder="USERNAME"
          />
        </div>
        <div>
          <input
            class="password"
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
import { mapActions, mapMutations } from "vuex";
import VueHeader from "../UI/VueHeader.vue";
import VueFooter from "../UI/VueFooter.vue";
export default {
  components: { VueHeader, VueFooter },
  name: "Auth",
  data() {
    return {
      data: {
        username: "",
        password: "",
      },
    };
  },

  methods: {
    ...mapActions({
      login: "auth/Login",
    }),
    Login() {
      this.login(this.data);
      console.log(this.$v);
    },
    signUp() {
      this.$router.push("/registration");
    },
  },
  mounted() {
    
  }
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
  .invalid {
    border-color: red;
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
}
</style>
