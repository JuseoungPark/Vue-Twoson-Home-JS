<template>
	<div id="app">
		<MainVisual></MainVisual>
		<Portpolio></Portpolio>
		<!-- <CurrentPortpolio></CurrentPortpolio> -->
		<Solution></Solution>
		<!-- <selectBox></selectBox> -->
		<!-- <SelectBox /> -->
		<News>
		</News>
		<footerMenuList></footerMenuList>
		<Footer></Footer>
	</div>
</template>

<script>
import MainVisual from '@/components/MainVisual.vue'
import Header from '@/components/Header.vue'
import Portpolio from '@/components/SectionPortpolio.vue'
import CurrentPortpolio from '@/components/Portpolio.vue'
import Solution from '@/components/Solution'
import SelectBox from '@/components/Select'
import News from '@/components/SectionNews'
import NewsSlide from '@/components/newsSlide'
import footerMenuList from '@/components/footerMenu'
import Footer from '@/components/Footer'
import SecTitle from '@/components/SectionTitle'

export default {
	name: 'app',
	components: {
		MainVisual,
		Header,
		Portpolio,
		CurrentPortpolio,
		Solution,
		SelectBox,
		News,
		NewsSlide,
		footerMenuList,
		Footer,
		SecTitle,
	},
}
</script>

<style>
	* {
		text-decoration: none;
		list-style-type: none;
	}
</style>
