<template>
	<div class="aside">
		<a
			class="snsIcon"
			v-for="sns in sns"
			:key="sns.key"
			:href="sns.link"
		><span :class="sns.class"></span></a>
	</div>
</template>

<script>
export default {
	data () {
		return {
			sns: [
				{
					class: 'insta',
					link: '',
				},
				{
					class: 'nb',
					link: '',
				},
				{
					class: 'fb',
					link: 'https://www.facebook.com/%EB%91%90%EC%86%90%EC%86%8C%ED%94%84%ED%8A%B8-475420589273928/',
				},
				{
					class: 'top',
					link: '#',
				},
			]
		}
	}
}
</script>

<style>
	.aside {
		position: fixed;
		z-index: 9999;
		right: 0;
		bottom: 174px;
	}
	.aside .snsIcon {
		background: rgba(0, 0, 0, .4);
		width: 54px;
		height: 54px;
		display: block;
		padding: 18px;
		margin-bottom: 2px;
	}
	.aside .snsIcon:nth-of-type(3) {
		margin-bottom: 184px;
	}
	.aside .snsIcon:last-of-type {
		margin-bottom: 0;
		padding: 18px 21px;
	}
	.aside .snsIcon .insta {
		background: url('../assets/icon-sns-inst.png') 0 0 no-repeat;
		width: 19px;
		height: 19px;
		display: block;
	}
	.aside .snsIcon .nb {
		background: url('../assets/icon-sns-nb.png') 0 0 no-repeat;
		width: 19px;
		height: 19px;
		display: block;
	}
	.aside .snsIcon .fb {
		background: url('../assets/icon-sns-fb.png') 0 0 no-repeat;
		width: 19px;
		height: 19px;
		display: block;
	}
	.aside .snsIcon .top {
		background: url('../assets/icon-top.png') 0 0 no-repeat;
		width: 12px;
		height: 18px;
		display: block;
		padding: 18px 21px;
	}
</style>
