<template>
    <van-nav-bar
        title="标题"
        left-text="返回"
        left-arrow
        fixed
        placeholder
        @click-left="onClickLeft"
    />
</template>

<script>
import { Toast } from 'vant';

export default {
  methods: {
    onClickLeft() {
      Toast('返回');
    },
  },
};
</script>

<style lang="less">
.van-nav-bar__text,
.van-nav-bar .van-icon{
  color: #009688;
}
.van-circle__text{
  color: #fff;
  font-sizE: 22px;
}
</style>
