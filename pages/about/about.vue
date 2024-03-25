<template>
	<view class="container">

		<view class="jiangqie-content-box">
      <view class="form-item">
        <view class="label">
          <view>入党积极分子申请书</view>
          <view class="dates">2001-10-12</view>
        </view>

        <view class="data">
          <button @click="showFile" class="submit-button">查看</button>
        </view>
      </view>

		</view>
	</view>
</template>

<script>
	/*
	 * 酱茄小程序开源版
	 * 作者: 追格
	 * 文档：https://www.zhuige.com/docs/zxfree.html
	 * github: https://github.com/zhuige-com/jiangqie_kafei
	 * gitee: https://gitee.com/zhuige_com/jiangqie_kafei
	 * Copyright © 2020-2024 www.zhuige.com All rights reserved.
	 */
	const Constant = require("@/utils/constants.js");
	const Util = require("@/utils/util.js");

	export default {
		components: {
			
		},
		
		data() {
			return {
				version: Constant.JQ_VERSION,
			};
		},

		onLoad(options) {},

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

      showFile(){
        wx.openDocument({
          filePath: 'static/ceshi.pdf',
          fileType: 'pdf',
          showMenu: true,
          success: function(res) {
            console.log('打开文档成功');
          },
          fail: function(error) {
            wx.showToast({
              icon: 'none',
              title: '打开文件失败'
            });
          },
        });

      },
			/**
			 * 点击复制网址
			 */
			copy(e) {
				let text = e.currentTarget.dataset.text;
				uni.setClipboardData({
					data: text,
					success: (res) => {
						uni.getClipboardData({
							success: (res) => {
								Util.toast('网址已复制');
							}
						});
					},
					fail: (res) => {
						if (res.errMsg && res.errMsg.indexOf('cancel') < 0) {
							Util.toast(res.errMsg);
						}
					}
				});
			},

			/**
			 * 点击 提示
			 */
			tipClick() {
				Util.toast('酱茄小程序开源版');
			}
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

.dates{
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
  margin-right: 10px;
  //font-weight: bolder;
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