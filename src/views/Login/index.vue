<template>
  <van-form @submit="onSubmit">
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
    <div style="margin: 16px">
      <van-button round block type="info" native-type="submit" @click="loginFun"
        >提交</van-button
      >
    </div>
  </van-form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    loginFun() {
      if (!this.username || !this.password) {
        console.log('用户名或密码不能为空');
      } else {
        axios.get(
          '/index/Jwtdata/get_token_demo',
        ).then((res) => {
          console.log(res);

          const { data } = res;
          this.$store.commit('set_token', data.token.token);

          if (this.$store.state.token) {
            this.$router.push('/');
          } else {
            this.$router.replace('/login');
          }
          //   if (res.data.data === 0) {

        //     window.localStorage.setItem('username', res.data.username);
        //     window.localStorage.setItem('token', res.data.token);
        //     this.$store.dispatch('setToken', res.data.token);
        //     this.$store.dispatch('setUser', res.data.username);
        //     console.log('login success');
        //   }
        });
      }
    },
  },
};
</script>

<style>
</style>
