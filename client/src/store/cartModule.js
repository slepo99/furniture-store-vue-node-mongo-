export const cartModule = {
  state: function () {
    return {
      cartProducts: [],
      productCount: "1",
    };
  },
 
  getters: {
    cartProducts(state) {
      return state.cartProducts;
    },

    productCount(state) {
      return state.productCount;
    },
    saveData(state) {
      return window.localStorage.setItem('cart', JSON.stringify(state.cartProducts))
     }
  },
 
  mutations: {
    setProducts(state, cartProducts) {
      state.cartProducts = cartProducts;
    },
    updateProductCount(state, productCount) {
      state.productCount = productCount;
    },
    createProduct(state, newProduct) {
      if (state.cartProducts.length) {
        let isProductExists = false;
        state.cartProducts.map(function (item) {
          if (item._id === newProduct._id) {
            isProductExists = true;
            item.quantity++;
          }
        });
        if (!isProductExists) {
          state.cartProducts.push(newProduct);
        }
      } else {
        state.cartProducts.push(newProduct);
      }
    
    },
    
  },
  actions: {



  },
  
  namespaced: true,
};

