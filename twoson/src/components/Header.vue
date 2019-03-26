<template>
		<div id="header">
			<v-toolbar-side-icon dark></v-toolbar-side-icon>
			<img :src="img" :alt="imgAlt">
			<button>{{ contact }}</button>
		</div>
</template>

<script>
export default {
	name: 'head',
	data () {
		return {
			img: require('@/assets/logo.png'),
			imgAlt: '로고임',
			contact: '컨텍할껴말껴'
		}
	}
}
</script>

<style>
	#header {
		position: fixed;
		left: 0;
		top: 0;
		z-index: 9;
		height: 114px;
		width: 100%;
		border-bottom: 1px solid rgba(255, 255, 255, .4);
	}
	#header button {
		color: #fff;
	}
</style>
