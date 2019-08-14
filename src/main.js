import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import store from './store'
import http from './components/http';
import Publiccss from './assets/public.css'
Vue.config.productionTip = false;
Vue.prototype.http=http;
Vue.use(iView);
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
