// 拦截器
import axios from 'axios';
import store from '../store/index';
import router from '../router/index';

const ins = axios.create({});

// 拦截器  发送请求的时候拦截
ins.interceptors.request.use((config) => {
  // 为请求头对象，添加token验证的userToken字段
  const configs = config;
  configs.headers.userToken = window.sessionStorage.getItem('token');
  configs.headers.datafrom = 'app';
  return configs;
});

function getToken() {
  axios.get('/index/Jwtdata/get_token_demo').then((res) => {
    const { data } = res;
    store.commit('set_token', data.token.token);
    router.go(0);
  });
}

// 拦截器  获取请求的时候 (可以先一步处理data数据)
ins.interceptors.response.use((config) => {
  const configs = config;
  if (configs.data.code !== 200 && configs.data.code !== 0) {
    getToken();
  }
  return configs;
});

export default ins;
