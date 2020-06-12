import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueKonva from 'vue-konva';

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
