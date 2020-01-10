import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: {}
  },
  mutations: {
    userInfo: function (state, payload) {
      state.userInfo = payload
    }
  },
  actions: {

  }
})
