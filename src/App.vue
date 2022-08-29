<template>
  <div class="wrapper">
    <router-view v-slot="{ Component }">
      <transition :name="animation" mode="out-in">
        <component :is="Component"/>
      </transition>
    </router-view>
    <!--    <router-view></router-view>-->
    <transition>
      <Tabbar placeholder route v-if="showFooter && $router.currentRoute.value.meta.showTab">
        <TabbarItem icon="home-o" replace to="/">首页</TabbarItem>
        <TabbarItem icon="apps-o" replace to="/sort">分类</TabbarItem>
        <TabbarItem icon="points" replace to="/bookshelf">书架</TabbarItem>
        <TabbarItem icon="user-circle-o" replace to="/my">我的</TabbarItem>
      </Tabbar>
    </transition>

  </div>
</template>

<script lang="ts">
import {defineComponent, ref, watch, onMounted, onBeforeUnmount} from "vue";
import {useRouter, useRoute} from "vue-router";
import {Tabbar, TabbarItem} from "vant";

export default {
  name: "App",
  components: {
    Tabbar,
    TabbarItem,
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    let oldScrollTop: number = 0; // 记录上一次滚动结束后的滚动距离
    const scrollTop = ref<number>(0); // 记录当前的滚动距离
    let showFooter = ref<boolean>(true);
    const animation = ref('slide');

    function handleScroll() {
      window.addEventListener('scroll', () => {
        scrollTop.value = window.scrollY;
        // console.log(window.scrollY)
      });
    }

    onMounted(() => {
      handleScroll();
    });
    onBeforeUnmount(() => {
      window.removeEventListener('scroll', () => {
      }); // 离开当前组件别忘记移除事件监听
    });
    watch(() => [router.currentRoute.value.path, scrollTop.value], ([newValuePath, newValue1], [oldValuePath, oldValue1]) => {
      // console.log(newValuePath,newValue1,oldValuePath, oldValue1)
      if (newValuePath != oldValuePath) {
        animation.value = route.meta.index == 1 ? 'slide-right' : 'slide-left'
      }
      setTimeout(() => {
        if (newValue1 > oldValue1) {
          showFooter.value = false;
        }
        if (newValue1 < oldValue1) {
          showFooter.value = true;
        }
      }, 20);
    })

    return {
      showFooter,
      animation
    }
  },
  computed: {
    // showFooter() {
    //    console.log(useRouter())
    //    return $route.path.split("/").length < 3;
    //  },
  }
}
</script>
<style lang="stylus" scoped>
.body
  background #f1f3f4

.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active
  height 100%
  will-change transform
  transition all 100ms cubic-bezier(.55, 0, .1, 1)
  position absolute
  backface-visibility hidden

.slide-right-enter-active
  opacity 0
  transform translate3d(-100%, 0, 0)

.slide-right-leave-active
  opacity 0
  transform translate3d(100%, 0, 0)

.slide-left-enter-active
  opacity 0
  transform translate3d(100%, 0, 0)

.slide-left-leave-active
  opacity 0
  transform translate3d(-100%, 0, 0)

</style>