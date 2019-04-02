<template>
	<div class="newsSlide">
		<!-- Slider main container -->
		<div class="twosonNews">
			<!-- Additional required wrapper -->
			<div class="swiper-wrapper">
				<!-- Slides -->
				<div class="swiper-slide" v-for="Slide in news" :key="Slide.key">
					<img :src="require(`@/assets/news-${Slide.thumb}.jpg`)" :alt="Slide.alt">
					<div class="overlay"></div>
				</div>
			</div>
			<!-- If we need scrollbar -->
    	<div class="swiper-scrollbar"></div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'NewsSlide',
	data () {
		return {
			news: [
				{
					thumb: '01',
					alt: '뉴스 1',
				},
				{
					thumb: '02',
					alt: '뉴스 2',
				},
				{
					thumb: '03',
					alt: '뉴스 3',
				},
				{
					thumb: '04',
					alt: '뉴스 4',
				},
			]
		}
	},
	computed: {
		pages () {

		}
	}
}
</script>

<style>
	.twosonNews .swiper-slide {
		width: 356px;
		height: 356px;
		overflow: hidden;
	}
	.twosonNews .swiper-slide img {
		width: auto;
		height: 100%;
	}
	.twosonNews .swiper-slide .overlay {
		display: none;
	}
</style>
