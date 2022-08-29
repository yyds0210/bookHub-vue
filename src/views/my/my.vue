<template>
  <div class="my">
    <!--    扫码-夜间切换-设置-->
    <div class="header">
      <div class="scanIt-model">
        <van-icon name="scan"/>
        <van-icon name="bulb-o"/>
      </div>
      <div class="setUp">
        <van-icon name="setting-o"/>
      </div>
    </div>
    <!--    用户信息-->
    <!--    未登录-->
    <div class="user-container">
      <div class="avatar">
        <img src="../../assets/image/5.jpg" alt="">
        <van-button type="primary" size="mini" round color="orange" @click.stop="login">点 击 登 录</van-button>
      </div>
    </div>
    <!--    已登陆-->
    <!--    <div class="user-container" @click="toUserinfo">-->
    <!--      <div class="avatar">-->
    <!--        <i class="iconfont icon-morentouxiang1"></i>-->
    <!--      </div>-->
    <!--    </div>-->
    <!--    充值-->
    <div class="recharge">
      <div class="account">
        <div><span>--</span><span>书币</span></div>
        <div><span>--</span><span>书豆</span></div>
        <div><span>--</span><span>优惠券</span></div>
      </div>
      <div class="account-button">
        <van-button type="default" size="mini" round>充 值</van-button>
      </div>
    </div>
    <!--    VIP-->
    <div class="vip-container">

    </div>
    <!--    标签导航-->
    <div class="tabNav">
      <div class="nav">
        <van-icon name="edit" color="#e73f32"/>
        <span>签到</span></div>
      <div class="nav">
        <van-icon name="column" color="#0780d8"/>
        <span>阅历</span></div>
      <div class="nav">
        <van-icon name="shopping-cart" color="#f09132"/>
        <span>购物车</span></div>
      <div class="nav">
        <van-icon name="bell" color="#ad40bf"/>
        <span>消息</span></div>
    </div>
    <!--    操作-->
    <div class="operate">
      <p>
        <van-icon name="newspaper-o"/>
        <span>最近阅读</span></p>
      <p>
        <van-icon name="cart-o"/>
        <span>我的藏书</span></p>
      <p>
        <van-icon name="like-o"/>
        <span>想读</span></p>
      <p>
        <van-icon name="bulb-o"/>
        <span>想法</span></p>
      <p>
        <van-icon name="orders-o"/>
        <span>书单</span></p>
      <p>
        <van-icon name="gift-card-o"/>
        <span>奖品</span></p>
    </div>

    <!--    登陆时要弹出的框-->
    <van-share-sheet
        v-model:show="showShare"
        title="登录"
        :options="options"
        @select="onSelect"
    />

  </div>
</template>
<script lang="js">
import {ref, reactive, toRefs} from "vue";
import {useRouter} from "vue-router";

export default {
  name: 'my',
  setup() {
    const showShare = ref(false);
    const options = reactive([
      {name: '游客登录', icon: 'wechat'}
      // { name: '微信', icon: 'wechat' },
      // { name: '微博', icon: 'weibo' },
      // { name: '复制链接', icon: 'link' },
      // { name: '分享海报', icon: 'poster' },
      // { name: '二维码', icon: 'qrcode' },
    ]);
    const router = useRouter()
    const login = function login() {
      showShare.value = true
    }
    const toUserinfo = () => {
      // router.push({path:'/userInfo',query:''})
    }
    const onSelect = (option) => {
      router.push({path: '/login', query: {option: option.name}})
      // Toast(option.name);
      showShare.value = false;
    };
    return {
      login,
      options,
      onSelect,
      showShare,
      toUserinfo
    }
  }
}
</script>
<style lang="stylus" scoped>
.my
  .header
    width: 100%
    height: 15vw
    background white
    display flex
    justify-content space-between
    font-size 6vw

    .scanIt-model
      width: 20vw
      //background blue
      display flex
      justify-content space-around
      align-items center

    .setUp
      width: 20vw
      //background blue
      display flex
      justify-content space-around
      align-items center

  .user-container
    width: 100%
    height: 25vw
    background white

    .avatar
      width: 40%
      height: 100%
      display flex
      justify-content space-between
      align-items center
      margin-left: 20px;

      img
        width: 20vw
        height: 20vw
        border-radius 50%

      i
        font-size 20vw
        color #e5e5e5

  .recharge
    width: 100%
    height: 10vw
    background white
    display flex
    justify-content space-between
    padding: 5vw 0

    .account
      width: 50%
      display flex
      justify-content space-between
      margin-left: 5vw;

      div
        display flex
        justify-content space-between
        flex-direction column
        align-items center

        span
          font-size 2vw

    .account-button
      margin-right: 5vw;

      >>> .van-button--round
        color orange
        border 1px solid orange
        padding: 0 2vw;

  .vip-container
    width: 95%
    height: 10vw
    background black
    margin: auto;
    border-radius 3vw

  .tabNav
    width: 95%
    background white
    height: 25vw
    margin: 3vw auto
    border-radius 3vw
    display flex
    justify-content space-around
    align-items center

    .nav
      display flex
      flex-direction column
      align-items center

      span
        font-size 2vw

  .operate
    width: 95%
    height: 80vw
    background white
    margin: auto
    border-radius 3vw
    display flex
    flex-direction column
    justify-content space-around

    p
      border-bottom 1px solid #aaaaaa
      font-size 4vw
      margin: 0 5vw
      padding: 0 0 3vw 0;
      display flex
      justify-content flex-start
      align-items center

      >>> .van-icon
        font-size 6vw

      span
        margin-left: 5vw;
</style>