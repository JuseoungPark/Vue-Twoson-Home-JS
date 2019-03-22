<template>
	<div class="footer-menu">
		<v-container>
			<ul class="flex">
				<li v-for="Menu in footerMenu" :key="Menu.key">
					<button class="footer-btn">
						{{ Menu.name }}
						<v-icon />
					</button>
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
				{ name: '포트폴리오' },
				{ name: '솔루션' },
				{ name: '회사정보' },
				{ name: '뉴스룸' },
			],
		}
  }
}
</script>

<style>
	.footer-menu {
		background: #374D9F;
		color: #fff;
	}
	.footer-btn {
		border: 1px solid #C3CAE2;
		padding: 16px 30px;
		border-radius: 50px;
	}
	.flex {
		display: flex;
		justify-content: space-between;
	}
</style>
