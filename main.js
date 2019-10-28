import Vue from 'vue'
import App from './App'
import Mean from '@/component/Mean.vue'
import MyCardBtn from '@/component/mycardBtn.vue'
Vue.config.productionTip = false

App.mpType = 'app'
Vue.component('Mean',Mean)
Vue.component('MyCardBtn',MyCardBtn)
const app = new Vue({
    ...App
})
app.$mount()
