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

		<!-- If we need navigation buttons -->
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>

		<!-- If we need scrollbar -->
		<div class="swiper-scrollbar"></div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			mainVisual: [
				{
					img: '01',
					alt: '포트폴리오 메인 비쥬얼 이미지',
				},
				{
					img: '02',
					alt: '솔루션 메인 비쥬얼 이미지',
				},
				{
					img: '01',
					alt: '포트폴리오 메인 비쥬얼 이미지',
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
	.swiper-container {
    width: 100%;
    height: 100vh;
		position: relative;
	}
	.swiper-slide img {
		width: 100%;
		height: auto;
	}
</style>
