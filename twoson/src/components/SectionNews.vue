<template>
	<div id="news" class="news">
		<Title
			:titleOfChild="title"
			:subTitleOfChild01="subTitle01"
			:subTitleOfChild02="subTitle02"
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
			subTitle01: '뉴스부터 사내 소식까지',
			subTitle02: '두손소프트의 따끈따근한 이야기를 전해드립니다.',
		}
	}
}
</script>

<style>
	.news {
		background: #F1F1F1;
		padding: 8% 4%;
    text-align: center;
    margin: 0 auto;
    height: 100vh;
	}
</style>
