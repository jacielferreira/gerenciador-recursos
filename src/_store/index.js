import Vue from 'vue';
import Vuex from 'vuex';
import { menu } from './menu.module';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    menu
  }
});
