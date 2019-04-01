<template>
		<div id="header">
			<div class="inner">
				<a href="" class="menuIcon"></a>
				<h1 class="logo">
					<img :src="img" :alt="imgAlt">
				</h1>
				<button class="contact">{{ contact }}</button>
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
			contact: 'CONTACT'
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
	#header .menuIcon {
		position: absolute;
    top: 46px;
    left: 0;
    width: 37px;
    height: 23px;
		background: url('../assets/menu-btn.png') 0 0 no-repeat;
	}
	#header .logo {
		position: absolute;
    top: 29px;
    left: 50%;
    transform: translate(-50%, 0);
    width: 135px;
    height: 56px;
	}
	#header .contact {
		position: absolute;
    top: 45px;
    right: 0;
		width: 78px;
		font-size: 17px;
	}
</style>
