<template>
  <div class="home">
    <PageHome></PageHome>
    <button @click="handleClick">获取</button>
    <button @click="delToken">删除token</button>
  </div>
</template>

<script>
import request from '@/api/request';
import PageHome from './PageHome/index.vue';

export default {
  name: 'Home',
  components: {
    PageHome,
  },
  methods: {
    handleClick() {
      request
        .post('/index/Apidata/dianji')
        .then((res) => {
          console.log(res);
          console.log(this.$store.state.token);
        });
    },
    delToken() {
      this.$store.commit('del_token');
    },
  },
};
</script>
