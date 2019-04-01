<template>
	<div class="pra">
		<button @click="show = !show">클릭하면 밑에 나타날거야</button>
		<hr>
		<transition name="slide-fade">
			<div v-if="show">
				dfsdfsdfd
			</div>
		</transition>
	</div>
</template>

<script>
export default {
	data () {
		return {
			show: false
		}
	},
}
</script>

<style>
	.pra {
		font-size: 40px;
		position: relative;
		z-index: 9999;
	}
	.slide-fade-enter-active {
		transition: all .3s ease;
	}
	.slide-fade-leave-active {
		transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-fade-enter, .slide-fade-leave-to
	/* .slide-fade-leave-active below version 2.1.8 */ {
		transform: translateX(10px);
		opacity: 0;
	}
</style>
