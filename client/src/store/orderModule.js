import axios from "axios";
export const orderModule = {
  strict: true,
  state: function () {
    return {};
  },
  getters: {},
  mutations: {},
  actions: {
    async Order({}, data) {
      try {
        const response = await axios.post(
          "http://localhost:5000/order/product",
          data
        );
        console.log('Succesfuly ordered');
      } catch (e) {
        console.log(e);
      }
    },
  },
  namespaced: true,
};
