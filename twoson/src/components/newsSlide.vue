<template>
	<div class="newsSlide">
		<ul>
			<li
				v-for="Slides in Slide"
				:key="Slides.key"
			>
				<button @click="pages()">{{ Slides.imgTitle }}</button>
				<!-- <img src="../assets/logo.png" alt=""> -->
				<v-img
					:src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
					width="250px"
					height="250px"
					class="radius"
				></v-img>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'NewsSlide',
	data () {
		return {
			Slide: [
				{ fileName: 'logo.png', imgTitle: '제목입니다' },
				{ fileName: 'ddssdfsdfsdfsdfdfsd', imgTitle: '둘째 제목입니다' },
				{ fileName: 'ddssdfsdfsdfsdfsd', imgTitle: '셋째 제목입니다' },
				{ fileName: 'ddsfsdfsdfsdfsdfsfsdfsdfsdfsd', imgTitle: '넷째 제목입니다' },
				{ fileName: 'ddsfsdfsdfsdfsdfsfsdfsdfsdfsd', imgTitle: '다섯째 제목입니다' }
			]
		}
	},
	computed: {
		pages () {

		}
	}
}
</script>

<style>
	.newsSlide li {
		display: inline-block;
		margin-right: 40px;
	}
	.radius {
		border-radius: 50%;
	}
</style>
