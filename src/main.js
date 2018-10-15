import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vant from 'vant'
import 'vant/lib/vant-css/index.css';
import api from './api'
import errorCodeAlert from './errorCode'

Vue.use(Vant)
Vue.config.productionTip = false;
Vue.prototype.$api = api
Vue.prototype.$errorCodeAlert = errorCodeAlert

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
