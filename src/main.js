import Vue from 'vue'
import App from './App.vue'
import CountryFlag from 'vue-country-flag'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

Vue.component('country-flag', CountryFlag)
library.add(fas);
Vue.component('fa', FontAwesomeIcon)