<template>
	<!-- Slider main container -->
	<div class="swiper-container">
		<!-- Additional required wrapper -->
		<div class="swiper-wrapper">
			<!-- Slides -->
			<div class="swiper-slide" v-for="Slide in mainVisual" :key="Slide.key">
				<img :src="require(`@/assets/main-visual-${Slide.img}.png`)" :alt="Slide.alt">
				<div class="overlay"></div>
			</div>
		</div>
		<!-- If we need pagination -->
		<div class="swiper-pagination"></div>

		<!-- 플레이, 스탑 버튼 -->
		<div class="swiper-button-play">play</div>
    <div class="swiper-button-pause">stop</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			mainVisual: [
				{
					img: '03',
					alt: '포트폴리오 메인 비쥬얼 이미지',
				},
				{
					img: '02',
					alt: '솔루션 메인 비쥬얼 이미지',
				},
				{
					img: '01',
					alt: '회사정보 메인 비쥬얼 이미지',
				},
				{
					img: '02',
					alt: '솔루션 메인 비쥬얼 이미지',
				},
			]
		}
	}
}
</script>

<style>
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
		width: 100%;
		height: 100vh;
		background: rgba(0, 0, 0, .4)
	}

	/* swiper css costomize */
	.swiper-container {
    width: 100%;
    height: 100vh;
		position: relative;
	}
	.swiper-slide img {
		width: 100%;
		height: auto;
	}
	.swiper-pagination-bullet {
		width: 80px;
		height: 6px;
		border-radius: 0;
		background: #CDCDCD;
		opacity: 1;
	}
	.swiper-pagination-bullet-active {
		background: #374d9f;
	}
	.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {
		margin: 0 2px;
	}
	.swiper-container-horizontal > .swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
		bottom: 7%;
		padding-left: 12.5%;
		width: 75%;
	}
	.swiper-pagination {
		text-align: left;
	}
	.swiper-button-play {
		position: absolute;
		bottom: 50px;
		z-index: 9999;
		color: #fff;
		cursor: pointer;
	}
	.swiper-button-pause {
		position: absolute;
		bottom: 50px;
		z-index: 9999;
		color: #fff;
		left: 100px;
		cursor: pointer;
	}
</style>
