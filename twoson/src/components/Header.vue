<template>
		<div id="header">
			<v-card
			color=""
			flat
			>
				<v-toolbar color="black" dark>
					<v-toolbar-side-icon></v-toolbar-side-icon>
					<v-spacer></v-spacer>
				</v-toolbar>
			</v-card>
		</div>
</template>

<script>
export default {
	name: 'head',
	data () {
		return {

		}
	}
}
</script>

<style>
	.header {
		position: absolute;
		left: 0;
		top: 0;
		z-index: 99;
	}
	.v-toolbar__content {
		padding: 0 12%;
	}
</style>
