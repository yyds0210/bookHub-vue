<template>
  <div class="search">
    <van-search
        v-model="searchValue"
        shape="round"
        background="#f1f3f4"
        placeholder="请输入搜索关键词"
    />
  </div>
</template>
<script lang="ts">
import { reactive, onMounted, toRef,toRefs, ref ,computed, watch, defineComponent} from 'vue';
export default {
  setup(){
    let searchValue=ref('')
    return{
      searchValue
    }
  },
  unmounted() {

  }
}
</script>
<style lang="stylus" scoped>

</style>