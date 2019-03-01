import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import './registerServiceWorker'
// npm install axios
// import axios from 'axios'
// npm install vuelidate
import Vuelidate from 'vuelidate'
// npm install hamburgers
import 'hamburgers/dist/hamburgers.css'
// npm install animate.css
import 'animate.css/animate.min.css'

Vue.use(Vuelidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
