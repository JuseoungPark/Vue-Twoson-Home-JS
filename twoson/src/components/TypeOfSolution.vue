<template>
	<div id="typeOfSolution">
		<ul class="solutionWrap">
			<li v-for="solution in solutions" :key="solution.key">
				<a :href="solution.link">
					<figure>
						<img :src="require(`@/assets/${solution.img}.png`)" :alt="solution.imgAlt"><!--
						--><figcaption class="solutionName">{{ solution.name }}</figcaption>
					</figure>
				</a>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			solutions: [
				{
					img: 'solution-01',
					imgAlt: '보험 관련 솔루션',
					name: '모바일 설명서',
					link: '',
				},
				{
					img: 'solution-02',
					imgAlt: '보험 관련 솔루션',
					name: '좋은 날씨',
					link: '',
				},
				{
					img: 'solution-03',
					imgAlt: '보험 관련 솔루션',
					name: '미세먼지는 보통',
					link: '',
				},
				{
					img: 'solution-02',
					imgAlt: '보험 관련 솔루션',
					name: '초미세먼지는 양호',
					link: '',
				},
			]
		}
	}
}
</script>

<style>
	.solutionWrap {
		display: flex;
		justify-content: space-between;
		padding: 0;
		/* max-width:95%;
		margin: 0 auto; */
	}
</style>
