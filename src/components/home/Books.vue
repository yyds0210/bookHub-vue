<template>
  <div class="books">
      <div class="written-container" @click="toRead">
        <div class="book-image"><img src="../../assets/image/5.jpg" alt=""></div>
        <div class="book-describe">
         <p class="name">1 女仲裁的上门女婿</p>
         <p class="type">都市</p>
        </div>
      </div>
    <div class="written-container">
      <div class="book-image"><img src="../../assets/image/5.jpg" alt=""></div>
      <div class="book-describe">
        <p class="name">1 女仲裁的上门女婿</p>
        <p class="type">都市</p>
      </div>
    </div>
    <div class="written-container">
      <div class="book-image"><img src="../../assets/image/5.jpg" alt=""></div>
      <div class="book-describe">
        <p class="name">1 女仲裁的上门女婿</p>
        <p class="type">都市</p>
      </div>
    </div>
    <div class="written-container">
      <div class="book-image"><img src="../../assets/image/5.jpg" alt=""></div>
      <div class="book-describe">
        <p class="name">1 女仲裁的上门女婿</p>
        <p class="type">都市</p>
      </div>
    </div>
    <div class="written-container">
      <div class="book-image"><img src="../../assets/image/5.jpg" alt=""></div>
      <div class="book-describe">
        <p class="name">1 女仲裁的上门女婿</p>
        <p class="type">都市</p>
      </div>
    </div>
    <div class="written-container">
      <div class="book-image"><img src="../../assets/image/5.jpg" alt=""></div>
      <div class="book-describe">
        <p class="name">1 女仲裁的上门女婿</p>
        <p class="type">都市</p>
      </div>
    </div>
    <div class="written-container">
      <div class="book-image"><img src="../../assets/image/5.jpg" alt=""></div>
      <div class="book-describe">
        <p class="name">1 女仲裁的上门女婿</p>
        <p class="type">都市</p>
      </div>
    </div>
    <div class="written-container">
      <div class="book-image"><img src="../../assets/image/5.jpg" alt=""></div>
      <div class="book-describe">
        <p class="name">1 女仲裁的上门女婿</p>
        <p class="type">都市</p>
      </div>
    </div>

  </div>
</template>
<script lang="ts">
import { reactive, onMounted, toRef,toRefs, ref ,computed, watch, defineComponent} from 'vue';
import {useRouter} from "vue-router";

export default {
  name:'Books',
  setup(){
    let router=useRouter()
    let toRead=()=>{
      router.push({path:'/read',query:{}})
    }
    return{
      router,
      toRead,
    }
  },
}
</script>
<style lang="stylus" scoped>
.books
  width: 95%;
  display flex
  justify-content flex-start
  margin: auto;
  flex-wrap wrap
  .written-container
    display flex
    width: 42%;
    height: 15vw;
    margin: 3vw;
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