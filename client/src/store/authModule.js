import axios from "axios";
import router from "@/router";
export const authModule = {
  state() {
    return {
      credentials: {
        token: localStorage.getItem("token") || null,
        user: JSON.parse(localStorage.getItem("user")) || null,
      },
      authError: null,
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
    setAuthError(state, authError) {
      state.authError = authError;
    },
    resetAuthError(state) {
      state.authError = null
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
    async Login({ dispatch, commit }, data) {
      try {
        const response = await axios.post(
          "http://localhost:5000/auth/login",
          data
        );
        dispatch("attempt", response.data.token);
        dispatch("userData", response.data.user);
        router.push("/");
        localStorage.removeItem("error");
      } catch (e) {
        const error = e;
        commit("setAuthError", error);
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
