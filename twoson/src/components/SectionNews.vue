<template>
	<div class="news-bg">
		<Title
			:titleOfChild="title"
			:subTitleOfChild="subTitle"
		></Title>
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

	data () {
		return {
			title: '두손 소식',
			subTitle: '뉴스부터 사내 소식까지 <br> 두손소프트의 따끈따근한 이야기를 전해드립니다.',
		}
	}
}
</script>

<style>
	.news-bg {
		background: #F1F1F1;
	}
</style>
