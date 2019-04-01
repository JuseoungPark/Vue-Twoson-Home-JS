<template>
	<div class="titleWrap">
		<h2 class="txtTitle">{{ titleOfChild }}</h2>
		<h3 class="subTitle">{{ subTitleOfChild01 }}<br>{{ subTitleOfChild02 }}</h3>
	</div>
</template>

<script>
export default {
	// props: [
	// 	'titleOfChild',
	// 	'subTitleOfChild',
	// ]
	// props: {
	// 	titleOfChild: Object,
	// 	subTitleOfChild: Object,
	// }
	props: {
		titleOfChild: {
			type: String,
		},
		subTitleOfChild01: {
			type: String
		},
		subTitleOfChild02: {
			type: String
		},
	},
}
</script>

<style>
	.titleWrap {
		text-align: center;
		padding-bottom: 90px;
		letter-spacing: -0.025em;
	}
	.txtTitle {
		font-size: 36px;
		font-weight: 900;
		margin-bottom: 20px;
	}
	.subTitle {
		font-size: 21px;
		font-weight: 300;
	}
</style>
