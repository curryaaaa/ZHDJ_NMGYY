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