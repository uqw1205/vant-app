<template>
    <div class="business-container">
        <Hnavbar></Hnavbar>
        <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
            <ul>
                <li
                    v-for="item in dataarr"
                    :key="item.id"
                    @click="showShare = true"
                >
                    <div class="tit">
                        <div class="name">
                            <van-badge dot> <div class="child" /> </van-badge
                            ><span>{{ item.name }}</span>
                        </div>
                        <div class="tel">{{ item.tel }}</div>
                    </div>
                    <div class="desc-wrap">
                        <div class="desc">{{ item.content }}</div>
                        <div class="time">
                            <span>{{ item.time }}</span>
                            <span>{{ item.city }}</span>
                            <span class="from-url">来源：{{ item.from }}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </van-pull-refresh>
        <!-- <van-share-sheet
            v-model="showShare"
            title="立即分享给好友"
            :options="options"
        /> -->
    </div>
</template>

<script>
import { Toast } from 'vant';
import Hnavbar from '@/components/Hnavbar.vue';
import axios from 'axios';

export default {
  data() {
    return {
      dataarr: [
        {
          name: '姓名',
          tel: '13812127874',
          content: '商机内容商机内容商机内容商机内容',
          time: '2021-03-20',
          city: '中国江苏无锡',
          from: 'http://c.tht9702.top/vgo/?sn=115292356417&t=360',
          id: 1,
        },
        {
          name: '姓名1',
          tel: '13812127874',
          content: '商机内容商机内容商机内容商机内容',
          time: '2021-03-20',
          city: '中国江苏无锡',
          from: 'http://c.tht9702.top/vgo/?sn=115292356417&t=360',
          id: 2,
        },
        {
          name: '姓名2',
          tel: '13812127874',
          content: '商机内容商机内容商机内容商机内容',
          time: '2021-03-20',
          city: '中国江苏无锡',
          from: 'http://c.tht9702.top/vgo/?sn=115292356417&t=360',
          id: 3,
        },
        {
          name: '姓名3',
          tel: '13812127874',
          content: '商机内容商机内容商机内容商机内容',
          time: '2021-03-20',
          city: '中国江苏无锡',
          from: 'http://c.tht9702.top/vgo/?sn=115292356417&t=360',
          id: 4,
        },
        {
          name: '姓名4',
          tel: '13812127874',
          content: '商机内容商机内容商机内容商机内容',
          time: '2021-03-20',
          city: '中国江苏无锡',
          from: 'http://c.tht9702.top/vgo/?sn=115292356417&t=360',
          id: 5,
        },
        {
          name: '姓名5',
          tel: '13812127874',
          content: '商机内容商机内容商机内容商机内容',
          time: '2021-03-20',
          city: '中国江苏无锡',
          from: 'http://c.tht9702.top/vgo/?sn=115292356417&t=360',
          id: 6,
        },
      ],
      isLoading: false,
      showShare: false,
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
  components: {
    Hnavbar,
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        Toast('刷新成功');
        this.isLoading = false;
      }, 1000);
    },
  },
  created() {
    axios.get('/index/apidata/get_business.html?page=1&limit=20').then((res) => {
      console.log(res);
    });
  },
};
</script>

<style scoped lang="less">
.business-container {
    background: #f1f1f1;
    li {
        border: 1px solid #e6e6e6;
        background: #fff;
        margin: 1% 1% 2%;
        border-radius: 4px;
        .tit {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 5px 2%;
            border-bottom: 1px solid #e4e4e4;
            .name {
                display: flex;
                align-items: center;
                span {
                    margin-left: 10px;
                    font-size: 18px;
                }
            }
            .tel {
                font-size: 16px;
                color: #444;
            }
        }
        .desc-wrap {
            padding: 0px 8px 8px 17px;
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
}
</style>
