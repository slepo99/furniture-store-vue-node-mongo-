import { createStore } from 'vuex'
import { cartModule } from './cartModule'
import { headerModule } from './headerModule'
import { filtersModule } from './filterModule'
import createPersistedState from "vuex-persistedstate";

export default createStore({
   
  modules: {
    cart: cartModule,
    headerProducts: headerModule,
    filter: filtersModule,
  },
    plugins: [
      createPersistedState({
        paths: ["cart"]
      })
    ]
})
