<template>
  <div class="read">
    <div class="container">
      <span style="font-size: 1vw;margin:2vw ;">第一章 阴阳诡异</span>
      <readBook :fontSize="fontSize" :patternIndex="patternIndex" :resultPaging="resultPaging" :currentPaging="currentPaging"
                @touchRelease="touchRelease"
                @setRead="setRead"
                ref="readBook"></readBook>
      <span style="position: absolute;left: 2vw;bottom: 2vw;font-size: 1vw">{{ currentPaging }}/{{
          resultPaging
        }}</span>
      <transition name="myTop">
        <div class="top" v-show="showEdit">
          <van-nav-bar
              title="标题"
              left-text="返回"
              left-arrow
              @click-left.stop="onClickLeft"
          />
        </div>
      </transition>
      <transition name="myBottom">
        <div class="bottom" v-show="showEdit">
          <div class="box">
            <p @click.stop="setFontSize(0)">Aa-</p>
            <p @click.stop="setFontSize(1)">Aa+</p>
          </div>
          <div class="box">
            <p @click.stop="setModel(item,index)" v-for="(item,index) in editList" :key="index"
               :class="{active:index==i}">{{ item.text }}</p>
          </div>
          <div class="box">
            <p @click.stop="setPattern(0)" :class="{active:patternIndex==0}">上下滑动</p>
            <p @click.stop="setPattern(1)" :class="{active:patternIndex==1}">左右滑动</p>
          </div>
          <div class="switching">
            <p @click.stop="">上一章</p>
            <p @click.stop="directory">目录</p>
            <p @click.stop="">下一章</p>
          </div>
        </div>
      </transition>
      <!--      目录-->
      <van-popup v-model:show="tableContentShow" closeable position="left" :style="{ height: '100%' }">
        <div class="tableContents-container">
          <p v-for="(item,index) in tableContentsData" :key="index" style="padding-right: 60vw;">{{ item }}</p>
        </div>
      </van-popup>
    </div>
  </div>
</template>
<script lang="ts">
import {ref, reactive, defineComponent, onMounted,nextTick } from 'vue'
import {useRouter} from "vue-router";
import {Toast} from 'vant';
import readBook from './readBook.vue'
import number from "async-validator/dist-types/validator/number";

export default defineComponent({
  name: 'ReadComponents',
  components: {readBook},
  setup(props, context) {
    let router = useRouter()
    let fontIndex = ref(0)
    let i = ref(0)  //颜色控制
    let patternIndex = ref(1)
    let fontSize = reactive({
      titleFont: 6,
      contentFont: 3,
    })
    let editList = reactive([
      {text: '默认', color: '#5c5d58', background: '#eee6dd'},
      {text: '夜间', color: '#666', background: '#000'},
      {text: '护眼', color: '#5c5d58', background: '#c8e8c8'}
    ])
    let tableContentShow = ref(false) //是否显示目录
    let tableContentsData = reactive(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '1', '2', '3', '4', '5', '6', '7']) //目录
    let showEdit = ref(false)  //是否显示遮罩层
    let readBook = ref()
    let resultPaging = ref(0)//总页数
    let currentPaging = ref(1) //第几页
    // let edit = (e: object): void => {
    //   showEdit.value = !showEdit.value
    // }
    let onClickLeft = () => {
      router.go(-1)
    }
    //字体控制
    let setFontSize = (index: number): void => {
      if (index == 0) {
        if (fontSize.titleFont < 2 || fontSize.contentFont < 2) {
          Toast('在小点你特么能看见吗')
          return
        } else {
          fontSize.titleFont = fontSize.titleFont - 1
          fontSize.contentFont = fontSize.contentFont - 1
          // console.log(fontSize.titleFont,fontSize.contentFont)
          // document.documentElement.style.setProperty('--fontSize-h', `${fontSize.titleFont}vw`)
          // document.documentElement.style.setProperty('--fontSize-content', `${fontSize.contentFont}vw`)
        }0
      }
      if (index == 1) {
        if (fontSize.titleFont > 10 || fontSize.contentFont > 10) {
          Toast('破手机想要多大的字?你特么瞎啊')
          return
        } else {
          fontSize.titleFont = fontSize.titleFont + 1
          fontSize.contentFont = fontSize.contentFont + 1
          // console.log(fontSize.titleFont,fontSize.contentFont)
          // document.documentElement.style.setProperty('--fontSize-h', `${fontSize.titleFont}vw`)
          // document.documentElement.style.setProperty('--fontSize-content', `${fontSize.contentFont}vw`)
        }
      }
      nextTick(()=>{
        mounted()
      })
    }
    //模式控制
    let setModel = (item: object, index: number): void => {
      i.value = index
      context.emit('setModel', item);
    }
    //滑动控制
    let setPattern = (index: number): void => {
      patternIndex.value = index
    }
    let directory = (): void => {
      tableContentShow.value = true
    }
    // 获取总页数
    let mounted = () => {
      let myRef = readBook.value.myRef
      console.log(myRef.scrollWidth)
      if (patternIndex.value === 1) {
        resultPaging.value = Math.floor(myRef.scrollWidth / myRef.clientWidth)
      }
    }
    let touchRelease = (e: string) => {
      if (e == 'left') {
        currentPaging.value++
      } else if (e == 'right') {
        currentPaging.value--
      }
    }
    let setRead=((e:string)=>{
      if(patternIndex.value==1){
        if(e=='left'){
          showEdit.value=false
        }else if(e=='center'){
          showEdit.value=!showEdit.value
        }else if(e=='right'){
          showEdit.value=false
        }
      }else if(patternIndex.value==0){
        showEdit.value=!showEdit.value
      }

    })
    onMounted(() => {
      mounted()
    })
    return {
      router,
      showEdit,//是否显示编辑
      i,
      fontIndex,
      patternIndex,
      editList,
      fontSize,
      tableContentShow,
      tableContentsData,
      readBook,
      resultPaging,
      currentPaging,
      // edit,
      onClickLeft,
      setPattern,
      setFontSize,
      setModel,
      directory,
      touchRelease,
      setRead,
    }
  }
})
</script>
<style lang="stylus" scoped>
.container
  width 100%
  height 100%

  .top
    position absolute
    top 0
    left 0
    width 100%
    height 10vw
    z-index 2

    >>> .van-nav-bar
      height 100%
      background black
      opacity 0.8

    >>> .van-badge__wrapper
      color white

    >>> .van-nav-bar__text
      color white

    >>> .van-nav-bar__title
      color white

  .bottom
    width 100%
    height 50vw
    background black
    position absolute
    bottom 0
    left 0
    opacity 0.8
    color white
    font-size 2vw

    .box
      display flex
      justify-content center

      p
        border 1px solid #576059
        width 25vw
        height 7vw
        text-align center
        line-height 7vw
        margin 2vw

    .switching
      display flex
      justify-content space-between
      align-items center
      height: 15vw;

      p
        border 1px solid #576059
        width 100%
        height 100%
        text-align center
        line-height 15vw


//.myTop-leave-active,
//.myTop-enter-active {
//  transition: all .2s ease;
//}
//.myTop-enter-active,
//.myTop-leave-active {
//  transition: all .2s ease;
//}
//
//.myTop-leave-active,
//.myTop-enter {
//  height 0
//}
//
//.myTop-leave,
//.myTop-enter-active {
//  height 10vw
//}
.active
  border 1px solid #2a7afe !important
</style>