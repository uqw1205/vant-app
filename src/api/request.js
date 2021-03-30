// 拦截器
import axios from 'axios';
import { Dialog } from 'vant';
import router from '../router';

const ins = axios.create({});

// 拦截器  发送请求的时候拦截
ins.interceptors.request.use((config) => {
  // 为请求头对象，添加token验证的userToken字段
  const configs = config;
  configs.headers.userToken = window.sessionStorage.getItem('token');
  configs.headers.datafrom = 'app';
  return configs;
});

// 拦截器  获取请求的时候 (可以先一步处理data数据)
ins.interceptors.response.use((config) => {
  const configs = config;

  if (configs.data.code !== 200 && configs.data.code !== 0) {
    Dialog.alert({
      message: '登录已过期，请重新登录',
    }).then(() => {
      router.push({ path: '/login' });
    });
  }
  return configs;
});

export default ins;
