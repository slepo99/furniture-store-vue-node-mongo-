import axios from "axios";
export const registrationModule = {
  state() {
    return {
      params: {
        status: null,
        message: null,
      },
    };
  },
  getters: {},
  mutations: {
    setStatus(state, status) {
      state.params.status = status;
    },
    setMessage(state, message) {
      state.params.message = message;
    },
  },
  actions: {
    async Registration({ dispatch }, data) {
      try {
        const response = await axios.post(
          "http://localhost:5000/auth/registration",
          data
        );
        dispatch("responseStatus", response.status);
        dispatch("responseMessage", response.data.message);
        console.log(response);
      } catch (e) {
        console.log(e);
      }
    },
    async responseStatus({ commit }, status) {
      commit("setStatus", status);
    },
    async responseMessage({ commit }, message) {
      commit("setMessage", message);
    },
  },

  namespaced: true,
};
