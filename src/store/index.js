import Vue from 'vue'
import vuex from 'vuex'

import token_store from './modules/token.js';//引入token的store对象

Vue.use(vuex);

export default new vuex.Store({
  modules: {
    tokenStore: token_store
  }
})
