import axios from "axios";
import router from "@/router";
export const authModule = {
  state() {
    return {
      credentials: {
        token: localStorage.getItem("token") || null,
        user: localStorage.getItem("user") || null,
      },
    };
  },
  getters: {},
  mutations: {
    setToken(state, token) {
      state.credentials.token = token;
      localStorage.setItem("token", token);
    },
    setUserData(state, user) {
      state.credentials.user = user;
      localStorage.setItem("user", JSON.stringify(user));
    },
    //   deleteToken(state) {
    //     state.credentials.token = null
    //     localStorage.removeItem('token')
    //   }
  },
  actions: {
    async Login({ dispatch }, data) {
      try {
        const response = await axios.post(
          "http://localhost:5000/auth/login",
          data
        );
        dispatch("attempt", response.data.token);
        dispatch("userData", response.data.user);
        router.push('/')
      } catch(e) {
        console.log('Login error');
      }
      
    },
    async attempt({ commit }, token) {
      commit("setToken", token);
    },
    async userData({ commit }, user) {
      commit("setUserData", user);
    },
  },
  namespaced: true,
};
