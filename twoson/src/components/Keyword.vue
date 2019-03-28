<template>
	<div class="popularityKeyword">
		<h4>{{ title }}</h4>
		<ul v-for="keyword in keywords" :key="keyword.key">
			<li>
				<ul v-for="thema in thema" :key="thema.key">
					<li>{{ keyword.item }}{{ thema.item }}</li>
					<li>{{ keyword.item }}</li>
					<li>{{ keyword.item }}</li>
					<li>{{ keyword.item }}</li>
				</ul>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			title: '인기 키워드',

			thema: [
				{ item: '뀽', }
			],

			keywords: [
				{ item: '안녕', },
				{},
				{},
				{},
			],
		}
	},
}
</script>

<style>
	.popularityKeyword {
		/* width: ; */
		text-align: left;
	}
	.popularityKeyword ul,
	.popularityKeyword li {
		padding-left: 0;
	}
	.popularityKeyword ul li ul li {
		display: inline-block;
		margin-right: 16px;
		padding: 7px 29px;
		border: 1px solid #242424;
		border-radius: 5px;
	}
</style>
