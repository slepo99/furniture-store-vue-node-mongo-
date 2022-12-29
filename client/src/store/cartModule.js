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
    
     getTotalPrice(state) {
      let data = state.cartProducts.reduce((acc, item) => 
          (acc + parseInt(item.price) * item.quantity)
      ,0) 
      return data;
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
    deleteProduct(state, index) {
      return state.cartProducts.splice(index, 1)
    },
   
    
    
  },

  
  namespaced: true,
};

