import { createStore } from 'vuex'
import { cartModule } from './cartModule'
import { headerModule } from './headerModule'
import { filtersModule } from './filterModule'
import { authModule } from './authModule'
import { registrationModule } from './registrationModule'
import { orderModule } from './orderModule'
import createPersistedState from "vuex-persistedstate";

export default createStore({
   
  modules: {
    cart: cartModule,
    headerProducts: headerModule,
    filter: filtersModule,
    auth: authModule ,
    registration: registrationModule,
    order: orderModule
  

  },
    plugins: [
      createPersistedState({
        paths: ['cart', 'auth']
      })
    ],
    
})
