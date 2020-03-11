import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import CompositionAPI from '@vue/composition-api'
import './main.css'

Vue.use(CompositionAPI)

new Vue({
  render: h => h(App),
}).$mount('#app')
