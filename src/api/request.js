// 拦截器
import axios from 'axios';
import store from '../store/index';

const ins = axios.create({
  baseURL: 'http://suxiaomo.qicp.vip/',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

// 拦截器  发送请求的时候拦截
ins.interceptors.request.use((config) => {
  // 为请求头对象，添加token验证的userToken字段
  const configs = config;
  configs.headers.userToken = window.sessionStorage.getItem('token');
  configs.headers.datafrom = 'app';
  return configs;
});

function getToken() {
  // const url = 'http%3A%2F%2Fsuxiaomo.top%2Findex%2FJwtdata%2Fget_token';
  // 如果token失效 或者 刚登陆 -> 获取需要访问网址 -> 运行open.weixin链接 -> 取到code ->  获取Token
  const newCode = window.location.search.split('=')[1].split('&')[0];
  ins.get(`/index/Jwtdata/get_token?code=${newCode}`).then((res) => {
    const { data } = res;
    store.commit('set_token', data.token.token);
  });
}

// 拦截器  获取请求的时候
ins.interceptors.response.use((config) => {
  const configs = config;
  // 如果没有token
  if (window.location.search.indexOf('code') > 0) {
    getToken();
  } else if (!window.sessionStorage.token) {
    // 获取code
    const { href } = window.location;
    const newHref = href.replace(/:/g, '%3A').replace(/\//g, '%2F');
    window.location.href = `https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx44127092a6287b63&redirect_uri=${newHref}&response_type=code&scope=snsapi_userinfo&state=STATE&connect_redirect=1#wechat_redirect`;
  }
  return configs;
});

export default ins;