<template>
  <div>
    <div>
      <form action="" @submit.prevent="Login">
        <div>
          <p>Login</p>
          <input
            type="text"
            v-model="data.username"
            placeholder="username..."
          />
        </div>
        <div>
          <p>password</p>
          <input
            type="text"
            v-model="data.password"
            placeholder="password..."
          />
        </div>
        <div>
          <button style="background: #add8e6">Sign In</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
export default {
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
    },
  },
};
</script>

<style></style>
