import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Title from '@/components/Title'

Vue.component ('Header', Header)
Vue.component ('Footer', Footer)
Vue.component ('Title', Title)

import Project from '@/components/Portpolio'
Vue.component ('Project', Project)

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
