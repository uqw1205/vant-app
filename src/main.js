import Vue from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/vant';
import '@/assets/styles/reset.less';

Vue.config.productionTip = false;

axios.interceptors.request.use((config) => {
  // 为请求头对象，添加token验证的userToken字段
  const configs = config;
  configs.headers.userToken = window.sessionStorage.getItem('token');
  configs.headers.dataform = 'app';
  return configs;
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
