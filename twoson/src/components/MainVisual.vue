<template>
	<div id="main-visual">
		<MainSlide />
		<Header />
		<Nav />
		<div class="main-copy">
			<h3 class="main-sub-title">두손소프트는 향합니다</h3>
			<h2 class="main-title">SI 사업 기반<br> 자체 플랫폼 서비스</h2>
			<btn :copyOfChild="copy" />
		</div>
	</div>
</template>

<script>
import MainSlide from '@/components/Swiper'

export default {
	data () {
		return {
			copy: '자세히 보기'
		}
	},

	components: {
		MainSlide,
	}
}
</script>

<style>
	.main-copy {
		position: absolute;
		z-index: 99;
		top: 36%;
		left: 13%;
		color: #F9F9F9;
	}
	.main-sub-title {font-size: 23px;font-weight: 400;letter-spacing: -0.04em;margin-bottom: 10px;}
	.main-title {font-size: 36px;font-weight: 700;letter-spacing: -0.04em;margin-bottom: 50px;}
</style>
