<template>
	<div class="footerMenu">
		<v-container>
			<ul class="flex">
				<li v-for="Menu in footerMenu" :key="Menu.key">
					<a :href="Menu.link">
						<button class="footerBtn">{{ Menu.name }}</button>
					</a>
				</li>
			</ul>
		</v-container>
	</div>
</template>

<script>
export default {
	name: 'footerMenuList',
	data () {
		return {
			footerMenu: [
				{
					name: '포트폴리오',
					link: 'http://www.twosonsoft.com/portfolio/portfolio.do',
				},
				{
					name: '솔루션',
					link: '',
				},
				{
					name: '회사정보',
					link: '',
				},
				{
					name: '뉴스룸',
					link: '',
				},
			],
		}
  }
}
</script>

<style>
	.footerMenu {
		background: #374D9F;
		color: #fff;
	}
	.footerMenu .container {
		width: 640px;
	}
	.footerBtn {
		border: 1px solid #C3CAE2;
		padding: 16px 30px;
		border-radius: 50px;
		font-size: 17px;
	}
	.flex {
		display: flex;
		justify-content: space-between;
	}
	.footerMenu a {
		color: #fff;
	}
</style>
