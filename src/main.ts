import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vant from 'vant'; //引入vant
import 'vant/lib/index.css';

import "amfe-flexible"; //自适应

// import axios from 'axios'

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

// import "./assets/main.css";

import 'default-passive-events' //禁止Chrome 捕获机制警告
// Vue.prototype.$axios = 'axios' ;//引入axios
createApp(App).use(store).use(router).use(vant).use(ElementPlus).mount('#app')
