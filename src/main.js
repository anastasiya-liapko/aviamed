import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'
// npm install axios
import axios from 'axios'
// npm install vuelidate
import Vuelidate from 'vuelidate'
// npm install hamburgers
import 'hamburgers/dist/hamburgers.css'
// npm install animate.css
import 'animate.css/animate.min.css'
// npm install vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
//npm install vue-photoswipe
// import VuePhotoSwipe from 'vue-photoswipe'
// npm install v-photoswipe 

// npm install vue-masked-input

Vue.use(Vuelidate)
Vue.use(VueAwesomeSwiper)
// Vue.use(VuePhotoSwipe)

Vue.config.productionTip = false

axios.defaults.baseURL = '/dist'

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
