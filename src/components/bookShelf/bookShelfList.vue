<template>
  <div class="bookShelfList">
    <div class="list-box" v-for="(item,index) in bookList" :key="index">
      <van-swipe-cell>
        <div class="written-container">
          <van-checkbox v-model="item.status" @click="ck" v-if="rightText===false"
                        style="margin-right: 2vw;"></van-checkbox>
          <div class="book-image"><img src="../../assets/image/5.jpg" alt=""></div>
          <div class="book-describe">
            <p class="name">{{ item.title }}</p>
            <p class="type">{{ item.name }}</p>
            <p class="type">{{ item.schedule }}</p>
          </div>
        </div>
        <template #right>
          <van-button square type="danger" text="删除" @click="onClickButton(item,index)"/>
        </template>
      </van-swipe-cell>
      <van-action-bar style="margin-bottom: 12vw;" v-if="rightText===false">
        <van-checkbox v-model="checkedAll" @click="ckAll" style="margin:0 3vw;"></van-checkbox>
        <van-action-bar-button type="danger" text="删除" @click="batchDelete"/>
      </van-action-bar>
    </div>
  </div>
</template>
<script lang="ts">
import {ref, reactive} from 'vue'
import {Toast} from 'vant';

export default {
  name: 'bookShelfList',
  props: ['rightText'],
  setup() {
    // console.log(props)
    let checked = ref(false)
    let checkedAll = ref(false)
    let bookList = reactive([{
      img: require('../../assets/image/5.jpg'),
      title: 'The Way To Go',
      name: '未知作者',
      schedule: '9%',
      status: false,
    }, {
      img: require('../../assets/image/5.jpg'),
      title: 'The Way To Go',
      name: '未知作者',
      schedule: '9%',
      status: false,
    }, {
      img: require('../../assets/image/5.jpg'),
      title: 'The Way To Go',
      name: '未知作者',
      schedule: '9%',
      status: false,
    }, {
      img: require('../../assets/image/5.jpg'),
      title: 'The Way To Go',
      name: '未知作者',
      schedule: '9%',
      status: false,
    }, {
      img: require('../../assets/image/5.jpg'),
      title: 'The Way To Go',
      name: '未知作者',
      schedule: '9%',
      status: false,
    }, {
      img: require('../../assets/image/5.jpg'),
      title: 'The Way To Go',
      name: '未知作者',
      schedule: '9%',
      status: false,
    }, {
      img: require('../../assets/image/5.jpg'),
      title: 'The Way To Go',
      name: '未知作者',
      schedule: '9%',
      status: false,
    }])
    let onClickButton = (item: object, index: number) => {
      bookList.splice(index, 1)
      Toast.success('删除成功');
    }
    //反选
    let ck = (): void => {
      let _bookList = bookList.filter(item => {
        return item.status
      })
      checkedAll.value = _bookList.length == bookList.length;
    }
    //全选
    let ckAll = (): void => {
      bookList.forEach(item => {
        item.status = checkedAll.value
      })
    }
    //批量删除
    let batchDelete = () => {
      // console.log(toRaw(bookList))
      // bookList = bookList.filter((item: theme) => {
      //   return item.status == false
      // })
      // console.log(bookList)
    }
    return {
      checked,
      checkedAll,
      bookList,
      onClickButton,
      ck,
      ckAll,
      batchDelete,

    }
  }
}
</script>
<style lang="stylus" scoped>
.list-box
  border-bottom 1px solid #aaaaaa
  margin-bottom 2vw

  .goods-card
    margin 0

  //background-color: @white

  .delete-button
    height 100%

  >>> .van-button--square
    height: 100%;

  .written-container
    display flex
    width: 50%;
    height: 20vw;
    padding: 3vw;
    //background blueviolet
    border-radius 5px

    .book-image
      width: 40%
      height: 100%

      img
        width: 100%
        border-top-left-radius 5px
        border-bottom-left-radius 5px
        height: 100%

    .book-describe
      display flex
      flex-direction column
      justify-content space-between

      p
        margin: 0 0 0 2.5vw;
        padding: 0;
        font-size 2vw
        font-family '楷体'
</style>