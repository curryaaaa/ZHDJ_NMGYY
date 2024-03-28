<template>
  <view class="container">

    <view class="jiangqie-content-box">
      <view class="form-item">
        <view class="label">
          <view>转入党员补交党费</view>
          <view class="dates">2022-05-06 16:15:09</view>
        </view>
        <view class="money">
          108.00
        </view>
        <view class="data">
          <button @click="showFile" class="submit-button">详情</button>
        </view>
      </view>

    </view>
    <view class="jiangqie-content-box">
      <view class="form-item">
        <view class="label">
          <view>转入党员补交党费</view>
          <view class="dates">2022-05-06 16:15:09</view>
        </view>
        <view class="money">
          108.00
        </view>
        <view class="data">
          <button @click="showFile" class="submit-button">详情</button>
        </view>
      </view>

    </view>
    <view>
      <uni-popup ref="alertDialog" type="dialog">

        <uni-popup-dialog cancelText="关闭"  title="转入党员补交党费" @close="dialogClose" :show-cancel-button="false">
          <view class="xiangqing">
            <view class="label-title">
              <view>姓名</view>
            </view>
            <view class="money-title">
              董阳
            </view>
          </view>
          <view class="xiangqing">
            <view class="label-title">
              <view>缴费单号</view>
            </view>
            <view class="money-title">
              3370438437
            </view>
          </view>
          <view class="xiangqing">
            <view class="label-title">
              <view>应缴金额</view>
            </view>
            <view class="money-title">
              108
            </view>
          </view>
          <view class="xiangqing">
            <view class="label-title">
              <view>减免金额</view>
            </view>
            <view class="money-title">
              0
            </view>
          </view>
          <view class="xiangqing">
            <view class="label-title">
              <view>组织名称</view>
            </view>
            <view class="money-title">
              心血管内科党支部
            </view>
          </view>
          <view class="xiangqing">
            <view class="label-title">
              <view>入账规则</view>
            </view>
            <view class="money-title">
              内蒙古自治区人民医院（党群平台）
            </view>
          </view>
          <view class="xiangqing">
            <view class="label-title">
              <view>缴费状态</view>
            </view>
            <view class="money-title">
              已交费
            </view>
          </view>
          <view class="xiangqing">
            <view class="label-title">
              <view>支付渠道</view>
            </view>
            <view class="money-title">
              二维码
            </view>
          </view>
          <view class="xiangqing">
          <view class="label-title">
            <view>启用时间</view>
          </view>
          <view class="money-title">
            2022/5/6 16:15:09
          </view>
        </view>
          <view class="xiangqing">
            <view class="label-title">
              <view>缴费时间</view>
            </view>
            <view class="money-title">
              2022-05-06 17:24:34
            </view>
          </view>
          <view class="xiangqing">
            <view class="label-title">
              <view>有效期</view>
            </view>
            <view class="money-title">
              2022-08-06
            </view>
          </view>

        </uni-popup-dialog>
      </uni-popup>
    </view>
  </view>

</template>

<script>

const Constant = require("@/utils/constants.js");
const Util = require("@/utils/util.js");

export default {
  components: {},

  data() {
    return {
      version: Constant.JQ_VERSION,
    };
  },

  onLoad(options) {
  },

  onShareAppMessage() {
    return {
      title: getApp().globalData.appName,
      path: 'pages/index/index'
    };
  },

  // #ifdef MP-WEIXIN
  onShareTimeline() {
    return {
      title: getApp().globalData.appName
    };
  },
  // #endif

  methods: {

    showFile() {
      this.$refs.alertDialog.open()

    },
    dialogClose() {
      console.log('点击关闭')
    },
  }
};
</script>

<style lang="scss" scoped>


.submit-button {
  background-color: #e63621; /* 初始颜色 */
  color: white; /* 文字颜色 */
  width: 116rpx;
  height: 72rpx;
  font-size: 28rpx;
}

.dates {
  padding-top: 16rpx;
  font-size: 22rpx;
}

.form-item {
  display: flex;
  align-items: center;
  padding: 8rpx 8rpx 16rpx;
}

.xiangqing {
  display: flex;
  align-items: center;
  padding: 8rpx 8rpx 16rpx;
}

.label-title {
  flex: 1;
  text-align: left;
  //margin-right: 220rpx;
  //font-weight: bolder;
}

.money-title {
  flex: 2;
  text-align: right;
  //font-weight: bolder;
}

.label {
  flex: 2;
  text-align: left;
  margin-right: 20rpx;
  //font-weight: bolder;
}

.data {

  text-align: right;

}

.money {
  flex: 1;
  text-align: right;
  margin-right: 20rpx;
  font-weight: bolder;
}

.container {
  padding: 0 20rpx 30rpx 20rpx;
  box-sizing: border-box;
  overflow: hidden;
}


.jiangqie-content-box {
  width: 100%;
  margin-top: 30rpx;
  padding: 30rpx;
  box-sizing: border-box;
  background: #fff;
  border-radius: 10rpx;
  box-shadow: 0 0 10rpx #eee;
}


</style>