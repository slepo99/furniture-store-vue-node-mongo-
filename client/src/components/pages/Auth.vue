<template>
  <div>
    <div>
      <form action="">
        <div>
          <p>Login</p>
          <input type="text" v-model="username" placeholder="username..." />
        </div>
        <div>
          <p>password</p>
          <input type="text" v-model="password" placeholder="password..." />
        </div>
        <div>
          <button @click.prevent="Login" style="background: #add8e6">
            Sign In
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Auth",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    async Login() {
      try {
        const response = await axios.post(`http://localhost:5000/auth/login`, {
          username: this.username,
          password: this.password,
        });
          localStorage.setItem("token", response.data.token);
          //this.$router.push('/')
          console.log(response);
      } catch (err) {
        console.log('wrong password');
      }
    },
   
  },
  
};
</script>

<style></style>
