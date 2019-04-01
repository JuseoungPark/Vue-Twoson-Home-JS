<template>
	<div class="propose">
		<h4>{{ title }}</h4>
		<ul class="proposeList">
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
			title: '인기 솔루션',

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
					name: '모바일 전자약관 & 청약서',
					link: '',
				},
			],
		}
	}
}
</script>

<style>
	.propose {
		display: flex;
	}
	.propose h4 {
		font-size: 24px;
		font-weight: 600;
		letter-spacing: -0.04em;
		margin-bottom: 20px;
		width: 132px;
	}
	.proposeList {
		display: flex;
	}
	.proposeList li {
		width: 280px;
		height: 400px;
		margin-right: 46px;
	}
	.proposeList li:last-of-type {
		margin-right: 0;
	}
	.proposeList li:hover .solutionName {
		background: #000;
		color: #fff;
	}
	.proposeList li img {
		width: auto;
		height: 350px;
	}
	.solutionName {
		background: #ffffff;
		color: #222;
		font-size: 17px;
		padding: 8px 0;
	}
</style>
