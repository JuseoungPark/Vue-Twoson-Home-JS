<template>
	<div class="footer">
		<div class="innerWrap">
			<div class="contentWrap">
				<h1 class="footerLogo">
					<img :src="footerLogo" :alt="logoAlt">
				</h1>
				<ul class="coporateInfo01">
					<li	v-for="info in infoDetail" :key="info.key">
						{{ info.item }}
					</li>
				</ul>
				<ul>
					<li class="dib" v-for="address in addressLi" :key="address.key">
						{{ address.hello }}
					</li>
				</ul>
				<footerMenuList></footerMenuList>
				<v-card class="dd" v-html="text" dark />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Footer',
	data () {
		return {
			footerLogo: require('../assets/logo.png'),
			logoAlt: '푸터 로고',
			text: '<p>고객지원</p><p>02.3461.8686</p><p>평일 09:00 ~ 18:00 (주말/공휴일 제외)</p>',
			infoDetail: [
				{ item: '개인정보취급방침' },
				{ item: '찾아오시는 길' },
			],
			addressLi: [
				{ hello: '대표이사: 손영대' },
				{ hello: '주소: 서울특별시 구로구 디지털로26길 111 JNK디지털타워 502호' },
				{ hello: '전화: 02-3461-8686' },
				{ hello: '팩스: 070-8677-5460' },
				{ hello: '이메일: twosonsoft@twosonsoft.com' },
				{ hello: '© TWOSONSOFT. All Rights Resserved.' },
			],
		}
	}
}
</script>


<style>
	.footer {
		background: #444444;
		color: #fff;
	}
	.contentWrap {
		display: flex;
	}
	.footerLogo img{
		width: 110px;
	}
	.coporateInfo01 {
		width: 30%;
	}
	.coporateInfo01 li {
		font-size: 17px;
		font-weight: 300;
		letter-spacing: -0.025em;
	}
	.dib {display: inline-block;margin-right: 30px;}
</style>
