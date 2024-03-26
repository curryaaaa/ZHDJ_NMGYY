<template>
  <view class="container">
    <template v-for="(item, index) in steps">

      <view class="jiangqie-content-box">
        <view class="form-item">
          <view class="money">
            {{ item.description }}
          </view>
          <view class="data">
            <button @click="showFile"
                    :style="`background-color: ${item.start == 0 ? '#ef851b' : item.start == 1 ? '#eaaa1f' : '#e63621'}`"
                    class="submit-button">{{ item.start == 0 ? '待上报':item.start ==1 ? '审批中':'已完成' }}</button>
          </view>
        </view>
      </view>
      <view v-show="item.title" class="jiangqie-listtitle">
        <view class="flexjiantou">
          <image src="/static/images/jiantou.png"></image>
        </view>
        <text>{{ item.title }}</text>
      </view>
    </template>
  </view>


</template>

<script>

const Constant = require("@/utils/constants.js");
const Util = require("@/utils/util.js");

export default {
  components: {},

  data() {
    return {
      steps: [ //start:0未上报，start:1已上报审批中，start:2已上报完成
        {
          title: '1个月内',
          description: '申请入党',
          buttonText: '待上报',
          id:1,
          start:2,
        },
        {
          title: '6个月以上',
          description: '党支部与申请人谈话',
          buttonText: '待上报',
          id:2,
          start:2,
        },
        {
          title: '12个月以上',
          description: '确认为入党积极分子',
          buttonText: '待上报',
          id:3,
          start:2,
        },
        {
          title: ' ',
          description: '党员发展对象',
          buttonText: '待上报',
          id:4,
          start:1,
        },
        {
          title: '3个月内',
          description: '接受为预备党员',
          buttonText: '待上报',
          id:5,
          start:0,
        },
        {
          title: ' ',
          description: '报上级党委审批',
          buttonText: '待上报',
          id:6,
          start:0,
        },
        {
          title: '1个月内',
          description: '预备党员转正',
          buttonText: '待上报',
          id:7,
          start:0,
        },
        {
          title: ' ',
          description: '报上级党委审批',
          buttonText: '待上报',
          id:8,
          start:0,
        },
        {
          title: false,
          description: '材料归档',
          buttonText: '流程图',
          id:9,
          start:0,
        }
      ]
    };
  },


  methods: {


  }
};
</script>

<style lang="scss" scoped>
.flexjiantou{
 flex: 2
}

.jiangqie-listtitle {
  display: flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}

.jiangqie-listtitle image {
  height: 100rpx;
  float: right;

  width: 80rpx;
  margin-right: 11px;
  margin-top: 14rpx;
}
.jiangqie-listtitle text {
  font-size: 30rpx;
  flex: 2;
  font-weight: 400;
  color: #807e7e;


}

.arrow-down {
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 10px solid black; /* 可以根据需要修改箭头的大小和颜色 */
}

.submit-button {

  color: white;
  width: 150rpx;
  height: 60rpx;
  font-size: 24rpx;
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
  text-align: center;
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
  padding: 20rpx 30rpx 10rpx 30rpx;
  box-sizing: border-box;
  background: #fff1f1;
  border-radius: 10rpx;
  box-shadow: 0 0 10rpx #bebaba;
}


</style>