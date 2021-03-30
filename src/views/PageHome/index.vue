<template>
    <div class="pagehome-container">
        <div class="pagehome-header">
            <h1>商小宝-商家管理中心</h1>
            <van-image
                round
                width="30px"
                height="30px"
                src="https://img01.yzcdn.cn/vant/cat.jpeg"
                fit="cover"
            />
        </div>
        <loading v-if="showFlag"></loading>
        <template v-else>
        <ul class="pagehome-number">
            <li class="number-all">
                <van-icon name="after-sale" size="40" />
                <b>{{volume}}</b>
                下单小宝币
            </li>
            <li>
                <div class="item">
                    <b>{{today_count}}</b>
                    近日点击量
                </div>
                <div class="item">
                    <b>{{data_count_all}}</b>
                    累计点击量
                </div>
            </li>
        </ul>
        <div class="click-number">
            <van-row type="flex" justify="space-around">
                <van-col span="12">
                    <div class="item">
                        <h2>百度点击</h2>
                        <p>{{data_count.baidu}}</p>
                    </div>
                </van-col>
                <van-col span="12">
                    <div class="item">
                        <h2>360点击</h2>
                        <p>{{data_count[360]}}</p>
                    </div></van-col
                >
                <van-col span="12">
                    <div class="item">
                        <h2>搜狗点击</h2>
                        <p>{{data_count.sogou}}</p>
                    </div></van-col
                >
                <van-col span="12">
                    <div class="item">
                        <h2>神马点击</h2>
                        <p>{{data_count.sm}}</p>
                    </div></van-col
                >
            </van-row>
        </div>
        <ul class="pagehome-percent">
            <li>
                <div class="item">
                    <b>{{business_count.all}}</b>
                    商机总数
                </div>
            </li>
            <li>
                <div class="item">
                    <b>{{business_count.day30}}</b>
                    30天商机数
                </div>
            </li>
            <li class="number-all">
                <van-circle v-model="currentRate" layer-color="#ebedf0" :rate="rate"
                    :color="gradientColor" :speed=30
                    :text="sjpercent"
                />
            </li>
        </ul>
        </template>
    </div>
</template>

<script>
import request from '@/api/request';
import Loading from '@/components/Loading.vue';

export default {
  data() {
    return {
      showFlag: true,
      business_count: {
        all: '',
        day30: '',
        day90: '',
      },
      data_count: {
        360: '',
        baidu: '',
        sm: '',
        sogou: '',
      },
      data_count_all: '',
      today_count: '',
      volume: '',
      currentRate: 0,
      rate: 50,
      gradientColor: {
        '0%': '#3fecff',
        '100%': '#6149f6',
      },
    };
  },
  computed: {
    sjpercent() {
      const fixedNum = (this.business_count.all / this.data_count_all) * 100;
      return `${fixedNum.toFixed(2)}%`;
    },
  },
  components: {
    Loading,
  },
  methods: {
    getHomeData() {
      request.get('/index/Apidata/index_data').then((res) => {
        const { data } = res.data;
        this.business_count = data.business_count;
        this.data_count = data.data_count;
        this.data_count_all = data.data_count_all;
        this.today_count = data.today_count;
        this.volume = data.volume;
        this.showFlag = false;
      });
    },
  },
  created() {
    this.getHomeData();
  },
};
</script>

<style scoped lang="less">
@import url('~@/assets/styles/pagehome.less');
</style>
