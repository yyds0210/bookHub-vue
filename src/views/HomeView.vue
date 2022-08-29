<template>
  <div class="home">
<!--    <img alt="Vue logo" src="../assets/logo.png">-->
<!--    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>-->
  </div>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { reactive, onMounted, toRef,toRefs, ref ,computed, watch, defineComponent} from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    // HelloWorld,
  },
});
</script>
