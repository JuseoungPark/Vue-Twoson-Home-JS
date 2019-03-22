import '@babel/polyfill'
import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Header from '@/components/Header'
import SecTitle from '@/components/SectionTitle'

Vue.config.productionTip = false

new Vue({
	router,
	store,
	Header,
	SecTitle,
	render: h => h(App)
}).$mount('#app')
