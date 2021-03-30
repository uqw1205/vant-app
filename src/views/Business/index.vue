<template>
    <div class="business-container">
        <Hnavbar></Hnavbar>
        <loading v-if="showListFlag"></loading>
        <template v-else>
            <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
                    <ul>
                        <li
                            v-for="item in dataarr"
                            :key="item.id"
                            @click="showShare = true"
                        >
                            <div class="tit">
                                <div class="name">
                                    <van-badge
                                        dot
                                        color="#1989fa"
                                        v-if="item.is_read"
                                    >
                                        <div class="child" />
                                    </van-badge>
                                    <van-badge dot v-else>
                                        <div class="child" />
                                    </van-badge>

                                    <span v-if="item.name">{{
                                        item.name
                                    }}</span>
                                    <span v-else>{{ item.ip }}</span>
                                </div>
                                <div class="tel">{{ item.phone }}</div>
                            </div>
                            <div class="desc-wrap">
                                <div class="desc">{{ item.content }}</div>
                                <div class="time">
                                    <span>{{ item.create_time | time }}</span>
                                    <span class="city">
                                        {{ item.province + item.district }}
                                    </span>
                                    <span class="from-url"
                                        >来源：{{ item.url }}</span
                                    >
                                </div>
                            </div>
                        </li>
                    </ul>
            </van-pull-refresh>
        </template>
    </div>
</template>

<script>
import { Toast } from 'vant';
import Hnavbar from '@/components/Hnavbar.vue';
import Loading from '@/components/Loading.vue';
import request from '@/api/request';

export default {
  data() {
    return {
      dataarr: [],
      isLoading: false,
      showShare: false,
      dataComplete: false,
      showListFlag: true,
      page: 1,
      limit: 20,
      options: [
        [
          { name: '微信', icon: 'wechat' },
          { name: '朋友圈', icon: 'wechat-moments' },
          { name: '微博', icon: 'weibo' },
          { name: 'QQ', icon: 'qq' },
        ],
        [
          { name: '复制链接', icon: 'link' },
          { name: '分享海报', icon: 'poster' },
          { name: '二维码', icon: 'qrcode' },
          { name: '小程序码', icon: 'weapp-qrcode' },
        ],
      ],
    };
  },
  computed: {},
  components: {
    Hnavbar,
    Loading,
  },
  methods: {
    onRefresh() {
      this.showListFlag = true;
      setTimeout(() => {
        Toast('刷新成功');
        this.getListData();
        this.isLoading = false;
      }, 1000);
    },
    getListData(page, limit) {
      request
        .get('/index/Apidata/get_business', {
          page,
          limit,
        })
        .then((res) => {
          this.dataarr = res.data.data;
          this.dataComplete = true;
          this.showListFlag = false;
        });
    },
  },
  filters: {
    time(value) {
      const now = new Date(value * 1000);
      const y = now.getFullYear();
      const m = now.getMonth() + 1;
      const d = now.getDate();
      return `${y}-${m}-${d}`;
    },
  },
  created() {
    this.getListData(this.page, this.limit);
  },
};
</script>

<style scoped lang="less">
@import url("~@/assets/styles/business.less");
</style>
