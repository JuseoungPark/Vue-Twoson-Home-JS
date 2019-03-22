<template>
	<div class="news-bg">
		<h2 class="sec-title">두손 소식</h2>
		<h3 class="sec-sub-title">뉴스부터 사내 소식까지 <br>두손소프트의 따끈따근한 이야기를 전해드립니다.</h3>
		<!-- <newsSlide></newsSlide> -->
		<NewsSlide />
		
		<SecTitle></SecTitle>
	</div>
</template>

<script>
import SecTitle from '@/components/SectionTitle'
import NewsSlide from '@/components/newsSlide'

export default {
	components: {
		SecTitle,
		NewsSlide
	},
}
</script>

<style>
	.news-bg {
		background: #F1F1F1;
	}
</style>
