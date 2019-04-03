<template>
	<button type="button" :class="classOfChild" class="moreBtn">
		<span class="hidden">더보기 버튼</span>
	</button>
</template>

<script>
export default {
	props: {
		classOfChild: {
			type: String,
		}
	}
}
</script>

<style>
	.moreBtn {
		background: url('../assets/arrow-black-icon.png') 0 0 no-repeat;
		width: 64px;
		height: 16px;
	}
	.moreBtn.whiteBtn {
		background: url('../assets/arrow-white-icon.png') 0 0 no-repeat;
		width: 64px;
		height: 16px;
	}
	.moreBtn.blueBtn {
		background: url('../assets/arrow-blue-icon.png') 0 0 no-repeat;
		width: 64px;
		height: 16px;
	}
</style>
