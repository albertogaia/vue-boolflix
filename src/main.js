import Vue from 'vue'
import App from './App.vue'
import CountryFlag from 'vue-country-flag'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

library.add(fas);
library.add(far);

Vue.component('country-flag', CountryFlag)
Vue.component('fa', FontAwesomeIcon);
Vue.component('far', FontAwesomeIcon);
