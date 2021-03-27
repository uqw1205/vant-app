<template>
    <div id="app">
        <router-view></router-view>
        <div class="nav-fix">
            <div class="nav-item" v-for="(item,index) in menuList" :key="index">
                <router-link :to="{name: item.name}" :exact="item.exact">
                    <van-icon :name="item.icon" />
                    {{ item.title }}
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      menuList: [
        {
          name: 'Home',
          path: '/',
          exact: false,
          title: '首页',
          icon: 'wap-home-o',
        },
        {
          name: 'Business',
          path: '/business',
          exact: true,
          title: '商机',
          icon: 'balance-pay',
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

.nav-fix {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    background: #fff;
    border-top: 1px solid #dedede;
    display: flex;
    justify-content: space-between;
    align-content: center;
    padding: 7px 0 4px;
    .nav-item{
        flex: 1;
    }
    a {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-content: center;
        text-align: center;
        color: #777;
        font-size: 12px;
        i {
            font-size: 24px;
        }
    }
    .router-link-exact-active {
        color: #009688;
    }
}
</style>
