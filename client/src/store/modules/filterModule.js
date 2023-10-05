import DataService from "@/services/StoreData.js";
export const filtersModule = {
  strict: true,
  state: function () {
    return {
      products: [],
      categories: {
        price: {
          lowCost: "",
          midCost: "",
          highCost: "",
        },
        type: {
          comfort: false,
          ancient: false,
          special: false,
          sassy: false,
          sunny: false,
          classy: false,
        },
      },
      text: "",
    };
  },
  getters: {
    filterProductsByPrice(state) {
      if (state.categories.price.lowCost == true) {
        return state.products.filter((item) => parseInt(item.price) <= 300);
      } else if (state.categories.price.midCost == true) {
        return state.products.filter(
          (item) => parseInt(item.price) > 300 && parseInt(item.price) <= 600
        );
      } else if (state.categories.price.highCost == true) {
        return state.products.filter((item) => parseInt(item.price) >= 600);
      } else {
        return state.products;
      }
    },

    filterProductsByType(state, getters) {
      const selectedTypes = Object.keys(state.categories.type).filter(
        (key) => state.categories.type[key]
      );
      if (selectedTypes.length === 0) {
        return getters.filterProductsByPrice;
      }
      return getters.filterProductsByPrice.filter((item) => {
        const normalizedType = item.type.toLowerCase();
        return selectedTypes.some(
          (type) => normalizedType === type.toLowerCase()
        );
      });
    },

    searchProducts(state, getters) {
      return getters.filterProductsByType.filter((item) =>
        item.name.toLowerCase().includes(state.text.toLowerCase())
      );
    },
    products(state) {
      return state.products;
    },
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setCategories(state, categories) {
      state.categories = categories;
    },
    setText(state, text) {
      state.text = text;
    },
  },
  actions: {
    async fetchProducts({ state, commit }) {
      try {
        commit("setProducts", await DataService.getData());
      } catch (e) {
        console.log(e);
      }
    },
  },
  namespaced: true,
};
