import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    info: {
      sex:'',
      username: '',
      qq: '',
      number: '',
      xy: '',
      mj: '',
      zy1: '',
      zy2: '',
      zy3: '',

    }
  },
  mutations: {
    copy(state, infos) {
      state.info = infos
    }
  }
})

export default store
