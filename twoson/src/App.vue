<template>
	<div id="app">
		<MainVisual></MainVisual>
		<Aside />
		<Portpolio></Portpolio>
		<Solution></Solution>
		<News></News>
		<footerMenuList />
		<Footer />
	</div>
</template>

<script>
import MainVisual from '@/components/MainVisual.vue'
import Portpolio from '@/components/SectionPortpolio.vue'
import CurrentPortpolio from '@/components/Portpolio.vue'
import Solution from '@/components/Solution'
import SelectBox from '@/components/Select'
import News from '@/components/SectionNews'
import NewsSlide from '@/components/newsSlide'
import footerMenuList from '@/components/footerMenu'
import Aside from '@/components/Aside'

export default {
	name: 'app',
	components: {
		MainVisual,
		Portpolio,
		CurrentPortpolio,
		Solution,
		SelectBox,
		News,
		NewsSlide,
		footerMenuList,
		Aside,
	},
}
</script>

<style>
	* {
		text-decoration: none;
		list-style-type: none;
	}
	.inner,
	.innerWrap {
		width: 75%;
		margin: 0 auto;
		height: 100%;
		position: relative;
	}
	.clear::after {
		content: '';
		clear: both;
	}
	ul {
		padding: 0;
	}
	.hidden {
		text-indent: -9999px;
		font-size: 0;
	}
</style>
