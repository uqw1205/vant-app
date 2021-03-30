<template>
    <div class="home">
        <PageHome></PageHome>
        <button @click="handleClick">获取点击量</button>
        <button @click="delToken">删除token</button>
        <button @click="handleTel">获取通话记录</button>
    </div>
</template>

<script>
import request from '@/api/request';
// import axios from 'axios';
import PageHome from './PageHome/index.vue';

export default {
  components: {
    PageHome,
  },
  methods: {
    handleClick() {
      request.get('/index/Apidata/dianji').then((res) => {
        console.log(res);
        console.log(this.$store.state.token);
      });
    },
    delToken() {
      this.$store.commit('del_token');
    },
    handleTel() {
      request.get('/index/Apidata/webcall').then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
