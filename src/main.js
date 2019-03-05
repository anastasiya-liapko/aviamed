import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'
// npm install vue-resource
import VueResource from 'vue-resource'
// npm install vuelidate
import Vuelidate from 'vuelidate'
// npm install hamburgers
import 'hamburgers/dist/hamburgers.css'
// npm install animate.css
import 'animate.css/animate.min.css'
// npm install vue-awesome-swiper
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css'

Vue.use(VueResource)
Vue.use(Vuelidate)
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false

Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
