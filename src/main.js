import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './plugins/element'
import './assets/styles/global.scss'
import axios from 'axios'

const ins = axios.create({
    baseURL: '/api',
    // timeout: 1000
})
Vue.prototype.$http = ins


//Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');