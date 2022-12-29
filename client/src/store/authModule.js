import axios from "axios";
import router from "@/router";
export const authModule = {
  state() {
    return {
      credentials: {
        token: null,
        user: null,
      },
    };
  },
  getters: {},
  mutations: {
    setToken(state, token) {
      state.credentials.token = token;
    },
    setUserData(state, user) {
      state.credentials.user = user;
    },
    deleteToken(state) {
      state.credentials.token = null;
      state.credentials.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      router.push("/auth");
    },
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
        router.push("/");
      } catch (e) {
        console.log("Login error");
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
