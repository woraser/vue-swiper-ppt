// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import axios from 'axios'
import store from './store'
import SockJS from 'sockjs-client'
import Stomp from 'stompjs'
import echarts from 'echarts'
import 'iview/dist/styles/iview.css';    // 使用 CSS


Vue.use(iView);
Vue.config.productionTip = false;
Vue.prototype.$echarts = echarts;

/* 创建使用相关api的axios实例 */
var http = axios.create({
    baseURL: baseUrl,
    timeout: 5000,
});

Vue.prototype.$http = http;

// 初始化websocket组件
Vue.prototype.SockJS = SockJS;
Vue.prototype.Stomp = Stomp;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
});
