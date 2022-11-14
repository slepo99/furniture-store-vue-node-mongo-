import DataService from "@/api/StoreData.js";
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
        let data = [];
        if (state.categories.price.lowCost == true) {
          data = state.products.filter((item) => parseInt(item.price) <= 300);
        } else if (state.categories.price.midCost == true) {
          data = state.products.filter(
            (item) => parseInt(item.price) > 300 && parseInt(item.price) <= 600
          );
        } else if (state.categories.price.highCost == true) {
          data = state.products.filter((item) => parseInt(item.price) >= 600);
        } else {
          data = state.products;
        }
        return data;
      },
      
      filterProductsByType(state, getters) {
        let data = [];
        if (state.categories.type.comfort == true) {
          data = getters.filterProductsByPrice.filter(
            (item) => item.type.toLowerCase() == "comfort".toLowerCase()
          );
        } else if (state.categories.type.ancient == true) {
          data = getters.filterProductsByPrice.filter(
            (item) => item.type.toLowerCase() == "ancient".toLowerCase()
          );
        } else if (state.categories.type.special == true) {
          data = getters.filterProductsByPrice.filter(
            (item) => item.type.toLowerCase() == "special".toLowerCase()
          );
        } else if (state.categories.type.sassy == true) {
          data = getters.filterProductsByPrice.filter(
            (item) => item.type.toLowerCase() == "sassy".toLowerCase()
          );
        } else if (state.categories.type.sunny == true) {
          data = getters.filterProductsByPrice.filter(
            (item) => item.type.toLowerCase() == "sunny".toLowerCase()
          );
        } else if (state.categories.type.classy == true) {
          data = getters.filterProductsByPrice.filter(
            (item) => item.type.toLowerCase() == "classy".toLowerCase()
          );
        } else {
          data = getters.filterProductsByPrice;
        }
        return data;
      },
      
      searchProducts(state, getters) {
        let data = [];
        data = getters.filterProductsByType.filter((item) =>
          item.name.toLowerCase().includes(state.text.toLowerCase())
        );
        return data;
        
      },
      //SO BAD CODE, WILL BE REFACTORED SOON :( 
      disableComfort(state, getters) {
        if (
          (state.categories.type.ancient ||
            state.categories.type.special ||
            state.categories.type.classy ||
            state.categories.type.sassy ||
            state.categories.type.sunny) == true
        ) {
          return true;
        } else {
          return false;
        }
      },
      disableAncient(state, getters) {
        if (
          (state.categories.type.comfort ||
            state.categories.type.special ||
            state.categories.type.classy ||
            state.categories.type.sassy ||
            state.categories.type.sunny) == true
        ) {
          return true;
        } else {
          return false;
        }
      },
      disableSpecial(state, getters) {
        if (
          (state.categories.type.comfort ||
            state.categories.type.ancient ||
            state.categories.type.classy ||
            state.categories.type.sassy ||
            state.categories.type.sunny) == true
        ) {
          return true;
        } else {
          return false;
        }
      },
      disableClassy(state, getters) {
        if (
          (state.categories.type.comfort ||
            state.categories.type.special ||
            state.categories.type.ancient ||
            state.categories.type.sassy ||
            state.categories.type.sunny) == true
        ) {
          return true;
        } else {
          return false;
        }
      },
      disableSassy(state, getters) {
        if (
          (state.categories.type.comfort ||
            state.categories.type.special ||
            state.categories.type.ancient ||
            state.categories.type.classy ||
            state.categories.type.sunny) == true
        ) {
          return true;
        } else {
          return false;
        }
      },
      disableSunny(state, getters) {
        if (
          (state.categories.type.comfort ||
            state.categories.type.special ||
            state.categories.type.ancient ||
            state.categories.type.sassy ||
            state.categories.type.classy) == true
        ) {
          return true;
        } else {
          return false;
        }
      },
      products(state) {
        return state.products
      },
      // --------------------------------->
      
      
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    setCategories(state, categories) {
        state.categories = categories
    },
    setText(state, text) {
        state.text = text
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
