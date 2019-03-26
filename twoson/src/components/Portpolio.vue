<template>
	<div id="portPolio">
		<div v-for="project in projects" :key="project.key" class="projectBox">
			<h4>{{ project.title }}</h4>
			<h5>{{ project.subTitle }}</h5>
			<button>{{ project.more }}</button>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			projects: [
				{
					title: '진행중인 프로젝트',
					subTitle: '우리가 짱임 이거보셈',
					more: '더보기',
				},
				{
					title: '진행중인 프로젝트',
					subTitle: '우리가 짱임 이거보셈',
					more: '더보기',
				},
				{
					title: '진행중인 프로젝트',
					subTitle: '우리가 짱임 이거보셈',
					more: '더보기',
				}
			]
		}
	}
}
</script>

<style>
	.projectBox {
		width: 500px;
		height: 200px;
	}
</style>
