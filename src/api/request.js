// 拦截器
import axios from 'axios';

const ins = axios.create({});

// 拦截器  发送请求的时候拦截
ins.interceptors.request.use((config) => {
  // 为请求头对象，添加token验证的userToken字段
  const configs = config;
  configs.headers.userToken = window.sessionStorage.getItem('token');
  configs.headers.dataform = 'app';
  return configs;
});

// 拦截器  获取请求的时候 (可以先一步处理data数据)
// axios.interceptors.response.use((config) => {

// });

export default ins;
