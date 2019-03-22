<template>
	<div class="footer">
		<v-container>
			<v-layout row wrap>
				<v-flex>
					<v-card dark>로고 들어갈 자리</v-card>
					<v-card>개인정보취급방침</v-card>
					<v-card dark>
						<ul>
							<li class="dib" v-for="address in addressLi" :key="address.key">
								{{ address.hello }}
							</li>
						</ul>
					</v-card>
					<footerMenuList></footerMenuList>
					<v-card class="dd" v-html="text" dark />
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	name: 'Footer',
	data () {
		return {
			text: '<p>고객지원</p><p>02.3461.8686</p><p>평일 09:00 ~ 18:00 (주말/공휴일 제외)</p>',
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
	.dd {
		font-size: 16px;
	}
	.dib {display: inline-block;margin-right: 30px;}
</style>
