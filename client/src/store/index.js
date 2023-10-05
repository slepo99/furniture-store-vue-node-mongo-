import { createStore } from 'vuex'
import { cartModule } from './modules/cartModule'
import { headerModule } from './modules/headerModule'
import { filtersModule } from './modules/filterModule'
import { authModule } from './modules/authModule'
import { registrationModule } from './modules/registrationModule'
import { orderModule } from './modules/orderModule'
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
        paths: ['cart', ]
      })
    ],
    
})
