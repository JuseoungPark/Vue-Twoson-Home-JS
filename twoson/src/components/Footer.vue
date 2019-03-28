<template>
	<div class="footer">
		<div class="innerWrap">
			<div class="contentWrap">
				<h1 class="footerLogo">
					<img :src="footerLogo" :alt="logoAlt">
				</h1>
				<ul class="coporateInfo01">
					<li	v-for="info in info" :key="info.key">
						{{ info.item }}
					</li>
				</ul>
				<ul class="coporateInfo02">
					<li v-for="address in address" :key="address.key">
						<p>{{ address.item }}</p>
					</li>
				</ul>
				<div
					class="contact"
					v-html="text"
				></div>
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

			info: [
				{ item: '개인정보취급방침' },
				{ item: '찾아오시는 길' },
			],

			address: [
				{ item: '대표이사: 손영대' },
				{ item: '주소: 서울특별시 구로구 디지털로26길 111 JNK디지털타워 502호' },
				{ item: '전화: 02-3461-8686' },
				{ item: '팩스: 070-8677-5460' },
				{ item: '이메일: twosonsoft@twosonsoft.com' },
				{ item: '© TWOSONSOFT. All Rights Resserved.' },
			],

			text: '<p>고객지원</p><p>02.3461.8686</p><p>평일 09:00 ~ 18:00 (주말/공휴일 제외)</p>',
		}
	}
}
</script>


<style>
	.footer {
		background: #444444;
		color: #fff;
		padding: 42px 0;
	}
	.footer .contentWrap {
		display: flex;
	}
	.footerLogo img{
		width: 110px;
	}
	.coporateInfo01 {
		width: 300px;
	}
	.coporateInfo01 li {
		font-size: 15px;
		font-weight: 300;
		letter-spacing: -0.025em;
	}
	.coporateInfo02 li {
		display: inline-block;
		margin-right: 30px;
	}
	.coporateInfo02 li p {
		margin-bottom: 5px;
		font-size: 15px;
		font-weight: 300;
		color: #c2c2c2;
	}
	.contact p {
		font-size: 36px;
		letter-spacing: -0.025em;
		font-weight: 700;
		margin-bottom: 0;
	}
	.contact p:first-of-type {
		font-size: 15px;
		letter-spacing: 0;
		margin-bottom: -5px;
	}
	.contact p:last-of-type {
		font-size: 13px;
		color: #e0e0e0;
		font-weight: 300;
		letter-spacing: 0;
	}
</style>
