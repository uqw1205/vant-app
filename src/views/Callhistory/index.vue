<template>
  <div class="callhistory-container business-container">
    <Hnavbar title="通话记录"></Hnavbar>
    <loading v-if="showListFlag"></loading>
    <template v-else>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell v-for="item in dataarr" :key="item.id">
            <div class="desc-wrap">
							<div class="form-call">来电号码：{{item.call_no}}</div>
							<div class="get-call">接听电话：{{item.called_no}}</div>
              <div class="time">
                <span>{{ item.ring_time | time }}</span>
                <span class="from-url">来源：{{ item.url }}</span>
              </div>
            </div>
          </van-cell>
        </van-list>
        </van-pull-refresh>
    </template>
  </div>
</template>

<script>
import Hnavbar from '@/components/Hnavbar.vue';
import request from '@/api/request';
import Loading from '@/components/Loading.vue';
import { Toast } from 'vant';

export default {
  data() {
    return {
      dataarr: [], // data数据
      loading: false, // 滚动底部时触发 将loading设成true 数据更新完成设置成false
      finished: false, // 数据加载完毕
      refreshing: false, //
      isLoading: false, // 下拉刷新
      page: 1, // 页码
      showListFlag: true, // 判断加载图标
    };
  },
  components: {
    Hnavbar,
    Loading,
  },
  filters: {
    time(value) {
      if (!value) {
        return '123';
      }
      const now = new Date(value * 1000);
      const y = now.getFullYear();
      const m = now.getMonth() + 1;
      const d = now.getDate();
      return `${y}-${m}-${d}`;
    },
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
        this.page = 1;
        this.getListData(this.page);
      }, 1000);
    },
    onLoad() {
      // 到底触发onload事件
      this.page += 1;
      setTimeout(() => {
        request
          .post('/index/Apidata/webcall', {
            page: this.page,
            limit: 20,
          })
          .then((res) => {
            if (!res.data.data.length) {
              this.finished = true;
            }
            this.dataarr.push(...res.data.data);
            this.loading = false;
          });
      }, 50);
    },
    getListData(page) {
      // 获取数据
      request
        .post('/index/Apidata/webcall', {
          page,
          limit: 20,
        })
        .then((res) => {
          this.dataarr = res.data.data;
          this.showListFlag = false; // 是否加载中
          this.page = 1;
        });
    },
  },
  created() {
    this.getListData(this.page, this.limit);
  },
};
</script>

<style lang="less" scoped>
.business-container {
  margin-bottom: 52px;
}
.van-pull-refresh{
    margin-top: 46px;
}
.van-nav-bar__placeholder{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 99;
}
.van-cell{
        border-bottom: 1px solid #e6e6e6;
        background: #fff;
        margin: 1%;
				width: auto;
				padding: 0;
        .desc-wrap {
            padding: 8px;
        }
        .desc {
            text-align: left;
            font-size: 13px;
            margin: 10px 0 16px;
            line-height: 20px;
            height: 40px;
            overflow: hidden;
        }
        .time {
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 13px;
            color: #999;
						margin-top: 7px;
            .city {
                width: 25%;
                flex: 0 0 auto;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }
        }
        .from-url {
            flex: 0 1 auto;
            width: 50%;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            display: block;
        }
}
</style>
