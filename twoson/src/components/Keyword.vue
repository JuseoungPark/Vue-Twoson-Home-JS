<template>
	<div class="popularityKeyword">
		<h4>{{ title }}</h4>
		<ul>
			<li v-for="keyword in thema01" :key="keyword.key">
				<button>{{ keyword.item }}</button>
			</li>
		</ul>
		<ul>
			<li v-for="keyword in thema02" :key="keyword.key">
				<button>{{ keyword.item }}</button>
			</li>
		</ul>
		<ul>
			<li v-for="keyword in thema03" :key="keyword.key">
				<button>{{ keyword.item }}</button>
			</li>
		</ul>
		<ul>
			<li v-for="keyword in thema04" :key="keyword.key">
				<button>{{ keyword.item }}</button>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	data () {
		return {
			title: '인기 키워드',

			thema01: [
				{ item: '보험' }, { item: '카드' }, { item: '은행' },
			],
			thema02: [
				{ item: '유통' }, { item: '서비스' },
			],
			thema03: [
				{ item: '의료' }, { item: '공공' },
			],
			thema04: [
				{ item: '교육' },
			],

		}
	},
}
</script>

<style>
	.popularityKeyword {
		min-width: 34%;
		text-align: left;
	}
	.popularityKeyword h4 {
		font-size: 24px;
		font-weight: 600;
		letter-spacing: -0.04em;
		margin-bottom: 20px;
	}
	.popularityKeyword ul,
	.popularityKeyword li {
		padding-left: 0;
	}
	.popularityKeyword ul {
		padding: 10px 0;
		border-bottom: 1px solid #D9D9D9;
	}
	.popularityKeyword ul li {
		display: inline-block;
		margin-right: 8px;
	}
	.popularityKeyword ul li button {
		padding: 4px 16px;
		border: 1px solid #242424;
		border-radius: 5px;
		font-size: 17px;
		font-weight: 400;
	}
	.popularityKeyword ul li button:hover {
		background: #374D9F;
		color: #ffffff;
	}
</style>
