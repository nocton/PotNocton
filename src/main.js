import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueKonva from 'vue-konva';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faPhoneAlt)
library.add(faEnvelope)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false


import './css/divs.css';
import './css/componentes.css';
import './css/sombras.css';
import './css/conteudo.css';


Vue.use(VueKonva);

Vue.config.productionTip = false;

Vue.use(require('vue-easeljs'));

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
