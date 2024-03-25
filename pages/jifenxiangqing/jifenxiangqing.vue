<template>
  <view class="jiangqie-top-bg" style="background-color: #faecec">

    <view class="jifen ">

    </view>

    <view style="padding-top: 10rpx">
      <view class=" jiangqie-postcount">
        <text class="titles">
          2024年3月
        </text>
        <template v-for="(item, index) in menu">
          <view :class="index == menu.length-1 ?'renwuList-last' :'renwuList'">
            <view class="jiangqie-listcont">
              <view class="box-guize">
                <text style="color: #ff0909 ;font-size: 40rpx ;font-weight: bold">+{{ item.number }}</text>
              </view>
            </view>
            <view class="jiangqie-listtitle">
              <view class="container">
                <view class="box-title">
                  <text>{{ item.title }}</text>
                </view>
                <view>
                  <text style="font-size: 24rpx;color: #c2aeae">{{ item.remark }}</text>
                </view>
              </view>
            </view>
          </view>
        </template>
      </view>
    </view>
    <view style="padding-top: 10rpx">
      <view class=" jiangqie-postcount">
        <text class="titles">
          2024年4月
        </text>
        <template v-for="(item, index) in menu">
          <view :class="index == menu.length-1 ?'renwuList-last' :'renwuList'">
            <view class="jiangqie-listcont">
              <view class="box-guize">
                <text style="color: #ff0909 ;font-size: 40rpx ;font-weight: bold">+{{ item.number }}</text>
              </view>
            </view>
            <view class="jiangqie-listtitle">
              <view class="container">
                <view class="box-title">
                  <text>{{ item.title }}</text>
                </view>
                <view>
                  <text style="font-size: 24rpx;color: #c2aeae">{{ item.remark }}</text>
                </view>
              </view>
            </view>
          </view>
        </template>
      </view>
    </view>
  </view>


</template>

<script>

const Constant = require("@/utils/constants.js");
const Util = require("@/utils/util.js");
const Auth = require("@/utils/auth.js");

export default {
  components: {},

  data() {

    return {
      user: undefined,
      menu: [
        {
          title: '每日首次登录',
          number: 1,
          remark: '2024/3/22 15:04:29',
          state: true
        }, {
          title: '每日练习',
          number: 1,
          remark: '2024/3/22 15:04:29',
          state: false
        }, {
          title: '每日每次练习',
          number: 5,
          remark: '2024/3/22 15:04:29',
          state: true
        }, {
          title: '每日浏览咨询内容',
          number: 3,
          remark: '2024/3/22 15:04:29',
          state: true
        }, {
          title: '每次递交材料',
          number: 2,
          remark: '2024/3/22 15:04:29',
          state: true
        },
        {
          title: '每日首次登录',
          number: 1,
          remark: '2024/3/22 15:04:29',
          state: true
        }, {
          title: '每日练习',
          number: 1,
          remark: '2024/3/22 15:04:29',
          state: false
        }, {
          title: '每日每次练习',
          number: 5,
          remark: '2024/3/22 15:04:29',
          state: true
        }, {
          title: '每日浏览咨询内容',
          number: 3,
          remark: '2024/3/22 15:04:29',
          state: true
        }, {
          title: '每次递交材料',
          number: 2,
          remark: '2024/3/22 15:04:29',
          state: true
        }
      ]
    };
  },


  onLoad(options) {
  },
  onShow(options) {
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

  methods: {

    jifengmingxi() {
      console.log(222222)
      uni.navigateTo({
        url: '/pages/jifenxiangqing/jifenxiangqing'
      });

    },
    tiaozhuan(url) {
      console.log(url)
      if (url == '/pages/index/index') {
        uni.reLaunch({
          url: '/pages/index/index'
        });
      } else {
        uni.navigateTo({
          url: url
        });
      }

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
      Util.toast('此功能未开发');
    }
  }
};
</script>

<style lang="scss" scoped>
.times {
  color: #cc2626;
  font-size: 10rpx;
}

.container {
  display: flex;
  flex-direction: column;

}

.box-title {
  margin-top: 18rpx; /* 调整上下盒子之间的间距 */
  display: flex;

}

.box-guize {
  margin-top: 18rpx; /* 调整上下盒子之间的间距 */
  //display: flex;
  font-size: 20rpx;
}

.renwuList {
  padding: 10rpx 20rpx 20rpx;
  border-bottom: 1px solid #e8e3e3;
  width: 92%; /* 设置横线宽度为父元素宽度的80% */
  margin: 0 auto; /* 居中显示横线 */
}

.renwuList-last {
  padding: 20rpx;
  //border-bottom: 1px solid #e8e3e3;
  width: 92%; /* 设置横线宽度为父元素宽度的80% */
  margin: 0 auto; /* 居中显示横线 */
}

.titles {
  font-weight: bold;
  font-size: 36rpx;

}

.jiangqie-postcount {
  padding: 20rpx 0;
  background-color: #FFFFFF;
  border-radius: 20rpx;
  margin: 5rpx 40rpx;
  height: 100%;
  text-align: center;
}

.shuzi {
  font-size: 80rpx;
  font-weight: bold;
}

.xiangqing {
  font-size: 28rpx;
  padding-top: 20rpx;
}

.buttonIco1 {
  position: relative;
  color: #FFFFFF;
  flex: 2; /* 每个项目占据可用空间的相同比例 */
  padding-left: 40rpx;

}

.jifen {
  display: flex; /* 使用Flexbox布局 */
  justify-content: space-between; /* 在容器里均匀分布子元素 */
  font-size: 30rpx;
  height: 1%;
}

.jiangqie-top-bg {
  background-repeat: no-repeat;
  background-size: 100% 100%; /* 让背景图铺满整个容器 */
  background-position: 0 -120rpx;
  background-position: center;
  //height: 100vh; /* 设置容器高度为视口高度 */

}

.duihuan {
  border: 2px solid rgba(255, 255, 255, 0.5); /* 白色透明边框 */
  border-radius: 40rpx; /* 设置圆角半径为 10px */
  padding: 10rpx 40rpx; /* 上下 10rpx，左右 20rpx */
  position: absolute;
  top: 8%;
  transform: translateY(-50%);

}

.quwancheng {
  font-size: 25rpx;
  background: linear-gradient(to right, #fcbd6e, #ff8679);
  border: 2px solid rgba(225, 183, 183, 0.5); /* 白色透明边框 */
  border-radius: 40rpx; /* 设置圆角半径为 10px */
  padding: 10rpx 20rpx; /* 上下 10rpx，左右 20rpx */

  color: #FFFFFF;
}

.yiwancheng {
  font-size: 25rpx;
  color: #b2a7b1;
  border: 2px solid rgba(211, 150, 150, 0.5); /* 白色透明边框 */
  border-radius: 40rpx; /* 设置圆角半径为 10px */
  padding: 10rpx 20rpx; /* 上下 10rpx，左右 20rpx */
}


.buttonIco2 {
  height: 100rpx;
  color: #FFFFFF;
  flex: 1; /* 每个项目占据可用空间的相同比例 */

}

.jiangqie-listcont {
  float: right;
  height: 36rpx;
  width: 140rpx;
  padding-right: 4rpx;
  //margin-top: 48rpx;
}


.jiangqie-listblock {
  overflow: hidden;
  padding: 20rpx 0;
  background-color: #FFFFFF;
  border-radius: 20rpx;
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

.jiangqie-listcont image {

  height: 40rpx;
  width: 40rpx;


}
</style>