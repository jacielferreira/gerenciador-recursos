import Vue from 'vue';
import App from './App.vue';
import { router } from './_helpers/routes';
import { store } from './_store/index'
import vuetify from './plugins/vuetify';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount('#app');
