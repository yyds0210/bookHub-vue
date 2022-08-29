<template>
  <div class="Leaderboard">
    <div class="header">
<!--      @click-left="onClickLeft"-->
<!--      @click-right="onClickRight"-->
      <van-nav-bar
          title=""
          :left-text="leftText"
          :right-text="rightText"
          :left-arrow="false"
      />
    </div>
    <van-tabs v-model:active="active">
      <van-tab title="推荐榜"><Books></Books></van-tab>
      <van-tab title="人气榜"><Books></Books></van-tab>
      <van-tab title="热搜榜"><Books></Books></van-tab>
      <van-tab title="完本榜"><Books></Books></van-tab>
    </van-tabs>
  </div>
</template>
<script lang="ts">
import { reactive, onMounted, toRef,toRefs, ref ,computed, watch, defineComponent} from 'vue';
import Books from './Books.vue'
export default {
  name:'Leaderboard',
  props:['leftText','rightText'],
  setup(){
    let active=ref('')
    return{
      active
    }
  },
  components:{Books},
  unmounted() {

  }
}
</script>
<style lang="stylus" scoped>
.Leaderboard
  width: 90vw
  height: 110vw
  background white
  margin: 2vw auto
  border-radius 10px
  .header
    >>>.van-nav-bar__text
      color black
</style>