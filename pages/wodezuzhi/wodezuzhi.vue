<template>
  <view class="jiangqie-top-bg" style="background-image: url(static/images/mianbackground.png)">
    <view class="jiangqie-userbox">
      <view class="jiangqie-usersetup">
        <image src="/static/images/setup.png"></image>
      </view>
      <view class="jiangqie-userinfo">
        <template v-if="user">
          <view class="jiangqie-useravatar">
            <image :src="user.avatar" mode="aspectFill"></image>
          </view>
        </template>
        <template v-else>
          <view class="jiangqie-useravatar">
            <image src="/static/images/default_avatar.jpg" mode="aspectFill"></image>
          </view>
        </template>
      </view>
    </view>
    <view class="container">

      <view class="jiangqie-content-box">
        <view class="form-item">
          <view class="label-title">
            <view class="redimg"></view>
            <view>党组织信息</view>

          </view>

          <view class="data">

          </view>
        </view>
        <view id="app">
          <view v-for="index in 5" :key="index">
            <view class="form-item">
              <view class="label">
                <view style="display: inline-flex;">组织简称</view>
              </view>
              <view class="data">
                向阳社区团支部
              </view>
            </view>
          </view>
        </view>
      </view>

      <view class="jiangqie-content-box">
        <view class="form-item">
          <view class="label-title">
            <view class="redimg"></view>
            <view>组织成员-党员</view>

          </view>

          <view class="data">

          </view>
        </view>
        <view>
          <view v-for="index in 5" :key="index" style=" border-bottom: 1px solid #9d9999 ;margin-top: 20rpx ">
            <view class="form-item">
              <view class="label">
                <view style="display: inline-flex;">余芷慧</view>
              </view>
              <view class="data">
                书记
              </view>

            </view>
            <view class="form-item">
              <view class="label">
                <view style="display: inline-flex;">手机号码</view>
              </view>
              <view class="data">
                15565656251
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>

const Constant = require("@/utils/constants.js");
const Auth = require("@/utils/auth.js");
const Util = require("@/utils/util.js");

export default {
  components: {},

  data() {
    return {
      version: Constant.JQ_VERSION,
      user: undefined,
    };
  },

  onLoad(options) {
    this.user = Auth.getUser();
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

  methods: {}
}
</script>

<style lang="scss" scoped>
.redimg {
  height: 50rpx;
  width: 6rpx;
  background-color: #e63621; /* 初始颜色 */
  display: inline-block;
  margin-right: 20rpx;
}

.jiangqie-top-bg {
  background-repeat: no-repeat;
  background-size: 100% 100%; /* 让背景图铺满整个容器 */
  background-position: center;
  height: 100vh; /* 设置容器高度为视口高度 */

}

.jiangqie-userbox {
  //padding-bottom: 30rpx;
  min-height: 280rpx;
}

.jiangqie-usersetup {
  display: none;
  padding-top: 40rpx;
  height: 40rpx;
  line-height: 40rpx;
}

.jiangqie-usersetup image {
  float: right;
  height: 36rpx;
  width: 36rpx;
  margin-right: 40rpx;
}

.jiangqie-userinfo {
  padding-bottom: 20rpx;
  text-align: center;
}

.jiangqie-useravatar {
  text-align: center;
  height: 200rpx;
  clear: both;
  padding-top: 40rpx;
}

.jiangqie-useravatar image {
  height: 152rpx;
  width: 152rpx;
  border-radius: 152rpx;
  border: 12rpx solid #FFF;
  margin-bottom: 20rpx;
}

.jiangqie-username {
  height: 50rpx;
  line-height: 50rpx;
  font-size: 36rpx;
  font-weight: 500;
  color: #FFF;
}

.jiangqie-useralogin {
  height: 50rpx;
  line-height: 50rpx;
  font-size: 30rpx;
  font-weight: 300;
  color: #FFF;
}


.jiangqie-top-bg {
  background-repeat: no-repeat;
  background-size: 100% 100%; /* 让背景图铺满整个容器 */
  background-position: center;
  height: 100vh; /* 设置容器高度为视口高度 */

}

.submit-button {
  background-color: #e63621; /* 初始颜色 */
  color: white; /* 文字颜色 */
  width: 116rpx;
  height: 72rpx;
  font-size: 28rpx;
}

.dates {
  padding-top: 16rpx;
  font-size: 28rpx;
}

.form-item {
  display: flex;
  align-items: center;
  padding: 8rpx 8rpx 16rpx;
  font-size: 30rpx;
}

.label {
  flex: 2;
  text-align: left;
  margin-right: 10px;
  //font-weight: bolder;
}

.label-title {
  text-align: left;
  margin-right: 10px;
  //font-weight: bolder;
  font-size: 40rpx;
  display: flex;
}

.data {

  text-align: right;

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