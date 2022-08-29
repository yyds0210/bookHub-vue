<template>
  <div class="home">
    <div class="header">
      <p style="margin-left: 20px;">男生</p>
      <p style="margin-right: 20px">
        <van-icon name="ellipsis"/>
      </p>
    </div>
    <Search></Search>
    <div class="swiper">
      <van-swipe class="my-swipe" :autoplay="2000" indicator-color="white">
        <van-swipe-item v-for="(imgItem,index) in imgArr" :key="index">
          <img :src="imgItem" alt="">
        </van-swipe-item>
      </van-swipe>
    </div>
    <Leaderboard :leftText="'排行榜'" :rightText="'更多 ▶'"></Leaderboard>
  </div>
</template>
<script lang="ts">
import {reactive, onMounted, toRef, toRefs, ref, computed, watch, defineComponent} from 'vue';
import Search from '@/components/Search.vue'
import Leaderboard from "@/components/home/Leaderboard.vue";

export default {
  name: 'home',
  setup() {
    let imgArr = reactive([
      require('../../assets/image/140.jpg'),
      require('../../assets/image/226.jpg'),
      require('../../assets/image/249.jpg'),
      require('../../assets/image/256.jpg'),
      require('../../assets/image/257.jpg'),
      require('../../assets/image/268.jpg')])
    return {
      imgArr
    }
  },
  components: {Search, Leaderboard},
  unmounted() {

  }
}
</script>
<style lang="stylus" scoped>
body
  box-sizing border-box

  .header
    width: 100%
    height: 10vw
    display flex
    background white
    justify-content space-between
    align-items center
    p
    font-size 2vw

  .swiper
    width: 100%
    height: 50vw
    //background aqua

    .my-swipe
      height: 100%

      img
        width: 100%
        height: 100%
</style>