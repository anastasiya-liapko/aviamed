import Vue from 'vue'
import Vuex from 'vuex'
import header from '@/store/modules/header'
import home from '@/store/modules/home'
import select from '@/store/modules/select'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  },
  modules: {
    header,
    home,
    select
  }
})
