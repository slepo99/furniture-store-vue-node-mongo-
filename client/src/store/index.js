import { createStore } from 'vuex'
import { cartModule } from './cartModule'
import { headerModule } from './headerModule'
import { filtersModule } from './filterModule'
import { authModule } from './authModule'
import createPersistedState from "vuex-persistedstate";

export default createStore({
   
  modules: {
    cart: cartModule,
    headerProducts: headerModule,
    filter: filtersModule,
    auth: authModule 
  },
    plugins: [
      createPersistedState({
        paths: ["cart", 'auth']
      })
    ]
})
