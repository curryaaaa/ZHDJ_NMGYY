<template>
	<view v-if="setting" class="jiangqie-top-bg" style="background-image: url(static/images/mianbackground.png)">

		<view class="jiangqie-userbox">
			<view class="jiangqie-usersetup">
				<image src="/static/images/setup.png"></image>
			</view>
			<view class="jiangqie-userinfo">
				<template v-if="user">
					<view class="jiangqie-useravatar" @click="clickVerify">
						<image :src="user.avatar" mode="aspectFill"></image>
					</view>
					<view class="jiangqie-username">
						<text>{{user.nickname}}</text>
					</view>
				</template>
				<template v-else>
					<view class="jiangqie-useravatar" @click="clickLogin">
						<image src="/static/images/default_avatar.jpg" mode="aspectFill"></image>
						<view class="jiangqie-useralogin">
							<view>立即登录</view>
						</view>
					</view>
				</template>
			</view>
      <view class="container">
        <view class="item" @tap.stop="Wodeintegral">
          <view class="buttonsy " >
            <view class="buttonIco1" >
              <image class="buttimage" src="/static/images/jifen.png" mode="aspectFill"></image>
            </view>
            <view class="buttonIco2">
              <view class="chuizhi">
                我的积分
              </view>
            </view>
          </view>
        </view>
        <view class="item" @click="Gerenxinxi">
          <view class="buttonsy">
            <view class="buttonIco1">
              <image class="buttimage" src="/static/images/jibenxinxi.png" mode="aspectFill"></image>
            </view>
            <view class="buttonIco2">
              <view class="chuizhi">
                个人信息
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
		<view class="jiangqie-listbox jiangqie-postcount">
				<view
					:class="'jiangqie-listblock ' + ('jiangqie-listblock-line')"
					@tap.stop="handlerAbout">
					<view class="jiangqie-listcont">
						<image src="/static/images/more.png" mode="aspectFill"></image>
					</view>
					<view class="jiangqie-listtitle">
            <image src="/static/images/gerendangan.png" mode="aspectFill"></image>
						<text>个人档案</text>
					</view>
				</view>
				<view
					:class="'jiangqie-listblock ' + ('jiangqie-listblock-line')" @click.stop="Wodezuzhi">
					<view class="jiangqie-listcont" >
						<image src="/static/images/more.png" mode="aspectFill"></image>
					</view>
					<button  class="jiangqie-listtitle">
						<image src="/static/images/wodezuzhi.png" mode="aspectFill"></image>
            <text>我的组织</text>
					</button>
				</view>
				<view
					:class="'jiangqie-listblock ' + ('jiangqie-listblock-line')" @tap.stop="DangfeiXQ">
					<view class="jiangqie-listcont">
						<image src="/static/images/more.png" mode="aspectFill"></image>
					</view>
					<button  class="jiangqie-listtitle">
            <image  src="/static/images/wodedangfei.png" mode="aspectFill"></image>
						<text>党费详情</text>
					</button>
				</view>
				<view
					:class="'jiangqie-listblock ' + ('jiangqie-listblock-line')"
					@tap.stop="cailiaoshangbao">
					<view class="jiangqie-listcont">
						<image src="/static/images/more.png" mode="aspectFill"></image>
					</view>
					<view class="jiangqie-listtitle">
            <image src="/static/images/cailiaoshangbao.png" mode="aspectFill"></image>
						<text>材料上报</text>
					</view>
				</view>

				<view
					:class="'jiangqie-listblock ' + ('jiangqie-listblock-line')"
					@tap.stop="handlerClearCache">
					<view class="jiangqie-listcont">
						<image src="/static/images/more.png" mode="aspectFill"></image>
					</view>
					<view class="jiangqie-listtitle">
            <image src="/static/images/tuichu.png" mode="aspectFill"></image>
						<text>退出登录</text>
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

	const Auth = require("@/utils/auth.js");
	const Api = require("@/utils/api.js");
	const Util = require("@/utils/util.js");
	const Rest = require("@/utils/rest.js");

	export default {
		components: {
			
		},
		
		data() {
			this.default = {
				menu: [ //views,likes,favorites,comments,about,feedback,contact,clear,split,link,page
						 {
						tp: 'clear',
						icon: '',
						title: '清除缓存',
						line: 0
					}
				]
			};

			return {
				setting: undefined,
				user: undefined,
				menu: {},
				
				beian_icp: undefined,
			};
		},

		onShow(options) {
			this.user = Auth.getUser();
			Rest.get(Api.JIANGQIE_SETTING_UCENTER).then(res => {
				let menu = this.default.menu;
				if (res.data.menu.length > 0) {
					menu = res.data.menu;
				}

				this.setting = {
					background: res.data.background
				};
				this.menu = menu;

				if (res.data.beian_icp) {
					this.beian_icp = res.data.beian_icp;
				}
			});
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
      handlerAbout(e) {
        uni.navigateTo({
          url: '/pages/about/about'
        });
      },

      Wodeintegral(e){
        uni.navigateTo({
          url: '/pages/basicInformation/basicInformation'
        });
      },
      Gerenxinxi(){
        uni.navigateTo({
          url: '/pages/personalData/personalData'
        });
      },
      Wodezuzhi(){
        uni.navigateTo({
          url: '/pages/wodezuzhi/wodezuzhi'
        });
      },
      DangfeiXQ(){
        uni.navigateTo({
          url: '/pages/partyDues/partyDues'
        });
      },
      cailiaoshangbao(){
        uni.navigateTo({
          url: '/pages/materialDeclaration/materialDeclaration'
        });
      },



			
			/**
			 * 点击 登录
			 */
			clickLogin() {
				Util.openLink('/pages/login/login')
			},

			/**
			 * 点击 认证
			 */
			clickVerify() {
				Util.openLink('/pages/verify/verify')
			},


			/**
			 * 点击 清除缓存
			 */
			handlerClearCache(e) {
				uni.showModal({
					title: '提示',
					content: '重新登录 需要清除缓存',
					success: (res) => {
						if (res.confirm) {
							uni.clearStorageSync();
							
							Util.toast('重新登录');
							
							uni.reLaunch({
								url: '/pages/index/index'
							});
						}
					}

				});
			},

			/**
			 * 点击 评价打分
			 */
			handlerClickScore(e) {
				var plugin = requirePlugin("wxacommentplugin");
				plugin.openComment({
					success: (res) => {
						console.log('plugin.openComment success', res)
					},
					fail: (res) => {
						console.log('plugin.openComment fail', res)
					}
				})
			},

			/**
			 * 点击 打开链接
			 */
			handlerLinkClick(e) {
				let link = e.currentTarget.dataset.link;

				if (link.startsWith('/pages')) {
					uni.navigateTo({
						url: link
					});
				} else {
					uni.navigateToMiniProgram({
						appId: link,
						fail: res => {
							if (res.errMsg && res.errMsg.indexOf('fail cancel') < 0) {
								Util.toast(res.errMsg);
							}
						}
					});
				}
			},

			/**
			 * 点击 打开页面
			 */
			handlerPageClick(e) {
				let page_id = e.currentTarget.dataset.page_id;
				uni.navigateTo({
					url: '/pages/viewhtml/viewhtml?page_id=' + page_id
				});
			},

			clickJiangQie() {
				Util.jiangqie();
			}
		}
	};
</script>

<style lang="scss" scoped>
    .buttonsy{
      display: flex; /* 使用Flexbox布局 */
      justify-content: space-between; /* 在容器里均匀分布子元素 */
      background-color: #ffffff;
      margin: 17rpx;
      padding: 16rpx;
      font-size: 30rpx;
      color: #3d3131;
      border-radius: 20rpx; /* 设置圆角半径为 10px */
      padding-left: 30px;
    }
    .buttimage{
      top: 17%;
      height: 60rpx;
      width: 60rpx;
    }
    .chuizhi{
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      left: 0;
      right: 0;
      font-weight: bold;
    }
    .buttonIco1{
      position: relative;
      //height: 80rpx; /* 假设父容器有固定高度 */
      //background-color: #44d5ba;
      flex: 1; /* 每个项目占据可用空间的相同比例 */

    }
    .buttonIco2{
      position: relative;
      //height: 80rpx; /* 假设父容器有固定高度 */
      //background-color: #44d5ba;
      flex: 2; /* 每个项目占据可用空间的相同比例 */
    }

    /* Flexbox布局容器 */
    .container {
      display: flex; /* 使用Flexbox布局 */
      justify-content: space-between; /* 在容器里均匀分布子元素 */
      text-align: left;
    }

    /* 子元素样式 */
    .item {

      flex: 2; /* 每个项目占据可用空间的相同比例 */
    }
	.jiangqie-top-bg {
    background-repeat: no-repeat;
    background-size: 100% 100%; /* 让背景图铺满整个容器 */
    background-position: 0 -120rpx;
    background-position: center;
    height: 100vh; /* 设置容器高度为视口高度 */

	}

	.jiangqie-userbox {
		//padding-bottom: 30rpx;
		min-height: 410rpx;
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
		height: 240rpx;
		clear: both;
		padding-top: 80rpx;
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

	.jiangqie-usermember {
		height: 30rpx;
		line-height: 30rpx;
		font-size: 24rpx;
		font-weight: 300;
		color: #9B9B9B;
	}

	.jiangqie-listbox {
		padding: 0;
	}

	.jiangqie-postcount {
		//border-bottom: 8rpx solid #F3F3F3;
	}

	.jiangqie-listblock {
		overflow: hidden;
		margin: 8rpx 18rpx;
		padding: 20rpx 0;
    background-color: #FFFFFF;
    border-radius: 20rpx;
	}

	.jiangqie-listblock:last-child {
		border-bottom: none;
	}

	.jiangqie-listcont {
		float: right;
		text-align: right;
	}

	.jiangqie-listcont text {
		font-size: 24rpx;
		font-weight: 200;
		color: #999;
	}

	.jiangqie-listcont image {
		float: right;
		height: 36rpx;
		width: 36rpx;
		padding-right: 22rpx;
		margin-top: 12rpx;
	}

	.jiangqie-listtitle {
		text-align: left;
    display: flex;
    align-items: center; /* 垂直居中 */
	}

	.jiangqie-listtitle text {
		font-size: 30rpx;
		font-weight: 400;
		color: #333;
    display: flex;
		vertical-align: top;
	}


	.jiangqie-listtitle image {
    float: left;
    height: 48rpx;
    width: 48rpx;
    margin-right: 11px;
    margin-top: 1px;
    padding-left: 16px;
	}

	button.jiangqie-listtitle {
		padding: 0;
		line-height: inherit;
		background-color: transparent;
	}

	.jiangqie-listblock-line {
		border-bottom: 1rpx solid #DDD;
	}

	.jiangqie-listblock-line:last-child {
		border-bottom: none;
	}

	.jiangqie-list-split {
		height: 16rpx;
		background-color: #F3F3F3;
	}

	.jiangqie-nomore {


	}

	.jiangqie-text {
		background-color: #FFF;
	}
	
	/* 备案信息 */
	.zhuige-recordinfo {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 32rpx;
		// margin-bottom: 60rpx;
		line-height: 32rpx;
		font-size: 24rpx;
		font-weight: 400;
		color: #999999;
		
		text {
			padding-bottom: 20rpx;
		}
	}
</style>