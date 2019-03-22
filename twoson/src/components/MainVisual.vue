<template>
	<div id="main-visual">
		<Header />
		<div class="overlay"></div>
		<div class="main-copy">
			<h3 class="main-sub-title">두손소프트는 향합니다</h3>
			<h2 class="main-title">SI 사업 기반<br> 자체 플랫폼 서비스</h2>
			<button>자세히 보기</button>
		</div>
	</div>
</template>
<script>
import Header from '@/components/Header'

export default {
	components: {
		Header
	}
}
</script>

<style>
	#main-visual {
		background: url('../assets/main-visual-01.png') 50% 50% no-repeat;
		width: 100%;
		height: 100vh;
		position: relative;
	}
	.overlay {
		height: 100vh;
		background: #000;
		opacity: .5;
	}
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
