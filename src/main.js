// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from "axios"
import { Popup } from 'mint-ui';

import { Swipe, SwipeItem,Lazyload } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(Lazyload)
Vue.component(Popup.name, Popup);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.config.productionTip = false
Vue.prototype.$axios = Axios
Axios.interceptors.response.use(function(res){
	return res.data
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
