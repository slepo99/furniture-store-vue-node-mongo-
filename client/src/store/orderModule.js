import axios from "axios";
export const orderModule = {
  strict: true,
  state: function () {
    return {
      orderedItems: null
    };
  },
  getters: {},
  mutations: {
    setOrderedItems(state, orderedItems) {
      state.orderedItems = orderedItems
    }
  },
  actions: {
    async Order({}, data) {
      try {
        const response = await axios.post(
          "http://localhost:5000/order/product",
          data
        );
        console.log("Succesfuly ordered");
      } catch (e) {
        console.log(e);
      }
    },
    async getOrderedItems({commit}) {
      try {
        const response = await axios.get("http://localhost:5000/order/product");
        commit('setOrderedItems', response.data)
        console.log(response.data);
      } catch (e) {
        console.log(e);
      }
    },
    async deleteOrderedItem({}, id) {
      try {
        const response = await axios.delete(`http://localhost:5000/order/product/${id}`)
        console.log(response);
      } catch(e) {
        console.log(e);
      }
    }
  },
  namespaced: true,
};
