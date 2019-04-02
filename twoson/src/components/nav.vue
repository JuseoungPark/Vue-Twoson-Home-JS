<template>
	<div id="gnb">
		<div class="inner">
			<ul class="gnb">
				<li v-for="gnb in gnb" :key="gnb.key" :id="gnb.id">
					<a :href="gnb.link" class="after">
						{{ gnb.menu }}
					</a>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	data () {
		return {
			gnb: [
				{
					menu: '포트폴리오',
					link: 'http://www.twosonsoft.com/portfolio/portfolio.do',
					id: 'menu1',
				},
				{
					menu: '솔루션',
					link: 'http://www.twosonsoft.com/solution/solution.do',
					id: 'menu2',
				},
				{
					menu: '회사정보',
					link: 'http://www.twosonsoft.com/aboutus/aboutus.do',
					id: 'menu3',
				},
				{
					menu: '뉴스룸',
					link: 'http://www.twosonsoft.com/news/news.do',
					id: 'menu4',
				},
			],
		}
	},
}
</script>

<style>
	#gnb {
		position: absolute;
		top: 128px;
		left: 0;
		z-index: 999;
		width: 100%;
	}
	.gnb {
		display: flex;
	}
	.gnb li {
		margin-right: 40px;
		font-size: 17px;
		color: #fff;
		font-weight: 700;
		letter-spacing: -0.04em;
	}
	.gnb li:last-of-type {
		margin-right: 0;
	}
	.gnb a,
	.gnb a:visited,
	.gnb a:hover,
	.gnb a:active{
		-webkit-backface-visibility:hidden;
						backface-visibility:hidden;
		position:relative;
		transition:0.4s all ease;
		color:#fff;
	}
	.gnb a.after:after{
		content: "";
		transition:0.4s all ease;
		-webkit-backface-visibility:hidden;
						backface-visibility:hidden;
		position:absolute;
	}
	.gnb a.after:after{
		height: 3px;
		width: 0;
		background: #fff;
		left: 0;
		top: -16px;
	}
	.gnb a.after:hover:after{
		width:100%;
	}
</style>
