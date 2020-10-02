import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tils: [
      {til: "i tried to finish the story"}
    ],
    customers: [
      { id: '1', name: 'user 1',},
    ]
  },
  mutations: {},
  actions: {},
  modules: {}
});
