<template>
  <view v-if="setting" class="jiangqie-top-bg" style="background-image: url(../../static/images/mianbackground.png)">

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

    <view class=" jiangqie-postcount">
      <!-- form演示 -->
      <view class="padingdata">
        <form @submit="formSubmit">
          <view class="form-item">
            <text class="label">姓名</text>
            <view class="data"><input v-model="formData.name" name="input" placeholder="请输入姓名" :disabled="state" /></view>
          </view>
          <view class="form-item">
            <text class="label">出生日期</text>
            <view class="data"><input v-model="formData.birthday" name="birthday" :disabled="state" placeholder=""/></view>
          </view>
          <view class="form-item">
            <text class="label">性别</text>
            <view class="data"><input v-model="formData.gender" name="birthday" :disabled="state" placeholder=""/></view>
          </view>
          <view class="form-item">
            <text class="label">民族</text>
            <view class="data"><input v-model="formData.minzu" name="minzu" :disabled="state" placeholder=""/></view>
          </view>
          <view class="form-item">
            <text class="label">入党日期</text>
            <view class="data"><input v-model="formData.rudangday" :disabled="state" name="rudangday" placeholder=""/>
            </view>
          </view>
          <view class="form-item">
            <text class="label">转正日期</text>
            <view class="data"><input v-model="formData.zhuanzhengday" :disabled="state" name="zhuanzhengday"
                                      placeholder=""/></view>
          </view>
          <view class="form-item">
            <text class="label">所在党支部</text>
            <view class="data"><input v-model="formData.suozaidangzhibu" :disabled="state" name="suozaidangzhibu"
                                      placeholder=""/></view>
          </view>
          <view class="form-item">
            <text class="label">入党介绍人</text>
            <view class="data"><input v-model="formData.rudangjieshaoren" :disabled="state" name="rudangjieshaoren"
                                      placeholder=""/></view>
          </view>
          <view class="form-item">
            <text class="label">上级党委通过日期</text>
            <view class="data"><input v-model="formData.tongguoday" :disabled="state" name="tongguoday" placeholder=""/>
            </view>
          </view>
          <view class="form-item">
            <text class="label">学历</text>
            <view class="data"><input v-model="formData.xueli" :disabled="state" name="xueli" placeholder=""/></view>
          </view>
          <view class="form-item">
            <text class="label">入学日期</text>
            <view class="data"><input v-model="formData.ruxueriqi" :disabled="state" name="ruxueriqi" placeholder=""/>
            </view>
          </view>
          <view class="form-item">
            <text class="label">毕业日期</text>
            <view class="data"><input v-model="formData.biyeriqi" :disabled="state" name="biyeriqi" placeholder=""/></view>
          </view>
          <view class="form-item">
            <text class="label">学位</text>
            <view class="data"><input v-model="formData.xuewei" :disabled="state" name="xuewei" placeholder=""/></view>
          </view>
          <view class="form-item">
            <text class="label">教育类别</text>
            <view class="data"><input v-model="formData.jiaoyuleibie" :disabled="state" name="jiaoyuleibie" placeholder=""/>
            </view>
          </view>
          <view class="form-item">
            <text class="label">专业技术资格</text>
            <view class="data"><input v-model="formData.jiaoyuleibie" :disabled="state" name="jiaoyuleibie"
                                      placeholder=""/></view>
          </view>
          <view class="form-item">
            <text class="label">获得资格日期</text>
            <view class="data"><input v-model="formData.huodezizhiriqi" :disabled="state" name="huodezizhiriqi"
                                      placeholder=""/></view>
          </view>
          <view class="form-item">
            <text class="label">专业技术职称聘任时间</text>
            <view class="data"><input v-model="formData.jiaoyuleibie" :disabled="state" name="jiaoyuleibie" placeholder=""/></view>
          </view>
          <view class="form-item">
            <text class="label">籍贯</text>
            <view class="data"><input v-model="formData.jiguan" :disabled="state" name="jiguan" placeholder=""/></view>
          </view>
          <view class="form-item">
            <text class="label">家庭住址</text>
            <view class="data"><input v-model="formData.jiatingzhuzhi" :disabled="state" name="jiatingzhuzhi"
                                      placeholder=""/></view>
          </view>
          <view class="form-item">
            <text class="label">联系电话</text>
            <view class="data"><input v-model="formData.phone" :disabled="state" name="phone" placeholder=""/></view>
          </view>
          <view class="form-item">
            <text class="label">参加工作时间</text>
            <view class="data"><input v-model="formData.canjiagongzuoshijian" :disabled="state" name="canjiagongzuoshijian"
                                      placeholder=""/></view>
          </view>
          <view class="form-item">
            <text class="label">现工作岗位开始时间</text>
            <view class="data"><input v-model="formData.gongzuokaishishijian" :disabled="state" name="gongzuokaishishijian"
                                      placeholder=""/></view>
          </view>
          <view class="form-item">
            <text class="label">工号</text>
            <view class="data"><input v-model="formData.gonghao" :disabled="state" name="gonghao" placeholder=""/></view>
          </view>
          <view class="form-item">
            <text class="label">所在科室</text>
            <view class="data"><input v-model="formData.suozaikeshi" :disabled="state" name="suozaikeshi" placeholder=""/>
            </view>
          </view>
          <view class="form-item">
            <text class="label">现工作岗位类型</text>
            <view class="data"><input v-model="formData.xiangangweileixing" :disabled="state" name="xiangangweileixing"
                                      placeholder=""/></view>
          </view>
          <view class="form-item">
            <text class="label">参加民主评选时间</text>
            <view class="data"><input v-model="formData.pingxuanshijia" :disabled="state" name="pingxuanshijia"
                                      placeholder=""/></view>
          </view>
          <view class="form-item">
            <text class="label">民主评议结果</text>
            <view class="data"><input v-model="formData.minzhupingyi" :disabled="state" name="minzhupingyi" placeholder=""/>
            </view>
          </view>
          <view class="form-item">
            <text class="label">进入现支部方式</text>
            <view class="data"><input v-model="formData.jinrufangshi" :disabled="state" name="jinrufangshi" placeholder=""/>
            </view>
          </view>
          <view class="form-item">
            <text class="label">进入现支部时间</text>
            <view class="data"><input v-model="formData.jinrufangshitime" :disabled="state" name="jinrufangshitime"
                                      placeholder=""/></view>
          </view>
          <view class="form-item">
            <text class="label">原组织关系所在地</text>
            <view class="data"><input v-model="formData.gaunxisuozaidi" :disabled="state" name="gaunxisuozaidi"
                                      placeholder=""/></view>
          </view>


          <view style="padding-bottom:30rpx">
            <button form-type="submit" class="submit-button">{{ state? '编辑':'提交' }}</button>
          </view>

        </form>

      </view>
    </view>
  </view>
</template>

<script>


const Auth = require("@/utils/auth.js");
const Api = require("@/utils/api.js");
const Util = require("@/utils/util.js");
const Rest = require("@/utils/rest.js");

export default {
  components: {},
  data() {
    return {
      default: {},
      setting: undefined,
      user: undefined,
      menu: {},
      beian_icp: undefined,
      state:true, //true代表编辑按钮，false代表提交
      formData: {
        name: '张三',
        birthday: '1990-01-01',
        gender:'男',
        minzu: '汉族',
        rudangday: '2010-07-20',
        zhuanzhengday: '2012-09-30',
        suozaidangzhibu: 'XX街道党支部',
        rudangjieshaoren: '王五',
        tongguoday: '2010-08-01',
        xueli: '本科',
        ruxueriqi: '2006-09-01',
        biyeriqi: '2010-06-30',
        xuewei: '学士',
        jiaoyuleibie: '全日制',
        zhuanyejishuzige: '高级工程师',
        huodezizhiriqi: '2014-03-15',
        zhuanyejishuzhichenpingrenshijian: '2016-02-10',
        jiguan: '江苏省南京市',
        jiatingzhuzhi: 'XX小区XX号',
        phone: '13812345678',
        canjiagongzuoshijian: '2010-09-01',
        gongzuokaishishijian: '2010-09-01',
        gonghao: 'A123456',
        suozaikeshi: 'XX科室',
        xiangangweileixing: '管理岗',
        pingxuanshijia: '2018-05-20',
        minzhupingyi: '优秀',
        jinrufangshi: '选举产生',
        jinrufangshitime: '2010-08-15',
        gaunxisuozaidi: '上海市'

      }

    }
        ;
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

  },

  // #ifdef MP-WEIXIN
  onShareTimeline() {

  },
  // #endif

  methods: {
    formSubmit(e) {
      if (this.state){
        console.log('现在进行编辑')
        this.state=false
      }else {
        console.log(e);
        uni.showModal({
          content: '问卷调查内容：' + JSON.stringify(e.detail.value)
        });
        //这是确认对话框
        this.state=true
      }

    }
  }
};
</script>

<style lang="scss" scoped>



.submit-button {
  background-color: #e63621; /* 初始颜色 */
  color: white; /* 文字颜色 */
}



.form-item {
  display: flex;
  align-items: center;
  margin-bottom: 20rpx;
  border-bottom: 1px solid #9d9999; /* 添加下划线样式 */
  padding: 8rpx 8rpx 16rpx;
}

.label {
  flex: 1;
  text-align: left;
  margin-right: 10px;
//font-weight: bolder;
}

.data {
  flex: 1;
  text-align: right;
  color: #858282;
}

.divider {
  height: 1px;
  background-color: #000;
  margin-top: 20px;
  margin-bottom: 20px;
}

.jiangqie-postcount {
  padding: 20rpx 30rpx;
  background-color: #FFFFFF;
  height: 100%;
  text-align: center;
}

.buttonsy {
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


</style>