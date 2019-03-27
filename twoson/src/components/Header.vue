<template>
		<div id="header">
			<div class="inner">
				<v-toolbar-side-icon dark></v-toolbar-side-icon>
				<h1>
					<img :src="img" :alt="imgAlt">
				</h1>
				<button>{{ contact }}</button>
			</div>
		</div>
</template>

<script>
export default {
	name: 'head',
	data () {
		return {
			img: require('@/assets/logo.png'),
			imgAlt: '두손소프트 로고',
			contact: '컨텍할거면 클릭해라'
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
		padding-top: 28px;
	}
	#header button {
		color: #fff;
	}
</style>
