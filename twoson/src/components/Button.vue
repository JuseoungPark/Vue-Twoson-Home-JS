<template>
	<button class="ctaBtn">{{ copyOfChild }}</button>
</template>

<script>
export default {
	props: ['copyOfChild'],
	data () {
		return {
		}
	},
}
</script>

<style>
	.ctaBtn {
		padding: 7px 25px;
		border: 1px solid #EEEEEE;
		font-size: 18px;
		color: #D6D6D6;
		font-weight: 300;
		border-radius: 15px;
	}
</style>
