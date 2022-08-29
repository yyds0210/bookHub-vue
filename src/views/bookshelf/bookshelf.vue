<template>
  <div class="bookshelf">
    <!--    头部-->
    <div class="bookShelf-header">
      <div class="frostedGlass"></div>
      <!--    搜索和观看历史和更多-->
      <div class="header-operate">
        <div class="icon-box">
          <van-icon name="search"/>
          <van-icon name="clock-o"/>
          <van-icon name="ellipsis"/>
        </div>
      </div>
      <!--    阅读时长-->
      <div class="header-time">
        <div class="time-left"><span>0</span><span>阅读时长/小时</span></div>
        <div class="time-right">
          <van-button type="primary" size="small" round color="orange">登 录</van-button>
        </div>
      </div>
    </div>
    <van-nav-bar
        :right-text="rightText?'编辑':'取消'"
        @click-right="onClickRight"
    />
    <div class="bookShelf-list" :style="{'height':rightText?'155vw':'140vw'}">
      <boolShelfList :rightText="rightText"></boolShelfList>
    </div>
  </div>
</template>
<script lang="ts">
import {ref,reactive} from 'vue'
import boolShelfList from '@/components/bookShelf/bookShelfList.vue'
export default {
  name: 'bookshelf',
  components:{boolShelfList},
  setup() {
    let rightText=ref(<boolean>true)
    let onClickRight=():void =>{
      rightText.value=!rightText.value
    }
    return {
      onClickRight,
      rightText,
    }
  }
}
</script>
<style lang="stylus" scoped>
.bookshelf
  width 100%
  height 100%

  .bookShelf-header
    width 100%
    height 35vw
    background #0AAEB3
    //background-image url("@/assets/image/256.jpg")
    //background-size 100% 100%
    .header-operate
      width 100%
      height 10vw
      //background blue

      .icon-box
        float right
        width 40%
        height 100%
        //background aquamarine
        display flex
        justify-content space-around
        align-items center
        font-size 5vw

    .header-time
      width 100%
      height 25vw
      //background blueviolet
      display flex
      justify-content space-between
      align-items center

      .time-left
        display flex
        height 20vw;
        flex-direction column
        justify-content space-around
        align-items center
        //background aquamarine
        margin-left 10vw

        span:nth-child(1)
          font-size 10vw

        span:nth-child(2)
          font-size 3vw

      .time-right
        //background antiquewhite
        margin-right 10vw
  >>>.van-nav-bar__text
    color black
  .bookShelf-list
    overflow-y scroll
</style>