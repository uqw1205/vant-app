import Vue from 'vue';
import './api/request';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/vant';
import '@/assets/styles/reset.less';
import './mock';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
