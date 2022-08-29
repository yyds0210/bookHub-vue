<template>
    <div class="read">
      <Read @setModel="setModel"></Read>
    </div>
</template>
<script lang="ts">
import Read from '@/components/read/Read.vue';
import {ref, defineComponent, toRefs, reactive,toRaw} from 'vue'
// import { toRaw } from '@vue/reactivity'
export default defineComponent({
  name:'read',
  components:{Read},
  setup(props,context){
    //background: "", color:"", text: ""
    // let background = ref('#eee6dd')
    interface theme {
      background : string ,
      color : string ,
      text : string
    }
    let setModel=(item:theme):void=>{
      // let themeDark:theme;
      // themeDark = toRaw(item)
      // background.value=themeDark.background
      document.documentElement.style.setProperty('--read-bg',item.background)
      document.documentElement.style.setProperty('--read-co',item.color)
    }
    return{
      // background,
      setModel,
    }
  },
  created() {
    document.documentElement.style.setProperty('--read-bg','#eee6dd')
  }
})
</script>
<style lang="stylus" scoped>
:root
 --read-bg #eee6dd
 --read-co black
.read
  width 100%
  height 100vh
  color var(--read-co)
  background var(--read-bg)
</style>