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
        <ul class="pagehome-number">
            <li class="number-all">
                <van-icon name="after-sale" size="40" />
                <b>9990090</b>
                下单小宝币
            </li>
            <li>
                <div class="item">
                    <b>0</b>
                    近日点击量
                </div>
                <div class="item">
                    <b>65</b>
                    累计点击量
                </div>
            </li>
        </ul>
        <div class="click-number">
            <van-row type="flex" justify="space-around">
                <van-col span="12">
                    <div class="item">
                        <h2>百度点击</h2>
                        <p>59</p>
                    </div>
                </van-col>
                <van-col span="12">
                    <div class="item">
                        <h2>360点击</h2>
                        <p>6</p>
                    </div></van-col
                >
                <van-col span="12">
                    <div class="item">
                        <h2>搜狗点击</h2>
                        <p>0</p>
                    </div></van-col
                >
                <van-col span="12">
                    <div class="item">
                        <h2>神马点击</h2>
                        <p>0</p>
                    </div></van-col
                >
            </van-row>
        </div>
        <ul class="pagehome-percent">
            <li>
                <div class="item">
                    <b>65</b>
                    商机总数
                </div>
            </li>
            <li>
                <div class="item">
                    <b>0</b>
                    30天商机数
                </div>
            </li>
            <li class="number-all">
                <van-circle v-model="currentRate" layer-color="#ebedf0" :rate="rate"
                    :color="gradientColor"
                    text="42%"
                />
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  data() {
    return {
      currentRate: 0,
      rate: 50,
      gradientColor: {
        '0%': '#3fecff',
        '100%': '#6149f6',
      },
    };
  },
};
</script>

<style scoped lang="less">
.pagehome-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #009688;
    padding: 8px 3%;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    h1 {
        color: #fff;
        font-size: 16px;
    }
}
.pagehome-number {
    background: #009688;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;
    text-align: left;
    margin: 2% 1%;
    border-radius: 5px;
    li {
        width: 40%;
        flex: 0 0 auto;
    }
    .number-all {
        width: 42%;
        padding-left: 8%;
        border-right: 1px solid rgba(255, 255, 255, 0.1);
    }
    b {
        display: block;
        font-size: 30px;
    }
    .item {
        padding: 10px 0;
    }
}
// 百度点击
.click-number {
    background: #efefef;
    margin: 2% 1%;
    border-radius: 5px;
    padding: 1%;
    .van-col {
        padding: 1%;
        .item {
            background: #fff;
            border-radius: 5px;
        }
        h2 {
            font-size: 14px;
            text-align: left;
            border-bottom: 1px solid #ececec;
            padding: 9px 10px;
        }
        p {
            font-size: 30px;
            padding: 19px 0;
        }
    }
}

.pagehome-percent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #009688;
    margin: 2% 1%;
    border-radius: 5px;
    color: #fff;
    padding: 3%;
    .item {
        text-align: center;
        color: #ddd;
        font-size: 12px;
        b {
            display: block;
            font-size: 42px;
        }
    }
}
</style>
