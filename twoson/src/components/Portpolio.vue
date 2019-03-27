<template>
	<div id="portPolio">
		<div class="clear">
			<div 
				v-for="project in projects"
				:key="project.key"
				:class="[{ blackTxt: project.black }, project.class]"
			>
				<h4 class="projectTitle">{{ project.title }}</h4>
				<h5 class="projectSubTitle" v-html="project.subTitle"></h5>
				<button class="moreView">{{ project.more }}</button>
			</div>
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
					subTitle: '두손소프트가 새롭게 진행하는 <br>프로젝트입니다.',
					more: '더보기',
					class: 'project ing'
				},
				{
					title: '완료한 프로젝트',
					subTitle: '두손소프트가 오픈시킨 프로젝트입니다. <br>한번 고객과 쌓은 신뢰는 무너지지 않습니다.',
					more: '더보기',
					class: 'project complete',
					black: 'blackTxt'
				},
				{
					title: '입찰 제안',
					subTitle: '두손소프트가 입찰 제안한 프로젝트입니다. 우리의 기술을 자부합니다.',
					more: '더보기',
					class: 'project suggest',
					black: 'blackTxt'
				}
			]
		}
	}
}
</script>

<style>
	#portPolio .project {
		width: 50%;
		padding: 50px 70px 0 70px;
		float: left;
	}
	#portPolio .project.ing {
		height: 720px;
		background: url('../assets/project-ing.png') 47% 50% no-repeat;
	}
	#portPolio .project.complete {
		height: 360px;
		background: url('../assets/project-suggest.png') 0 50% no-repeat;
		background-size: cover;
	}
		#portPolio .project.suggest {
		height: 360px;
		background: #EEEEEE;
	}
	#portPolio .projectTitle {
		font-size: 36px;
		color: #fff;
		letter-spacing: -0.04em;
		font-weight: 600;
		margin-bottom: 20px;
	}
	#portPolio .projectSubTitle 
	{
		font-size: 20px;
		color: #fff;
		letter-spacing: -0.025em;
		font-weight: 300;
		margin-bottom: 98px;
	}
	#portPolio .blackTxt .projectTitle,
	#portPolio .blackTxt .projectSubTitle {
		color: #000;
	}
	#portPolio .blackTxt .moreView {
		background: url('../assets/arrow-black-icon.png') 0 0 no-repeat;
	}
	#portPolio .moreView {
		color: rgba(0, 0, 0, 0);
		background: url('../assets/arrow-white-icon.png') 0 0 no-repeat;
		width: 64px;
		height: 16px;
	}
</style>
