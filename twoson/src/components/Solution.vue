<template>
	<div id="solution">
		<Title
			:titleOfChild="title"
			:subTitleOfChild="subTitle"
		></Title>
		<div class="occupational-group-search">
			<div class="select-box">
				<p>우리 기업은</p>
				<v-menu :nudge-width="100">
					<template v-slot:activator="{ on }">
						<v-toolbar-title v-on="on">
							<span>직군 선택</span>
							<v-icon dark></v-icon>
						</v-toolbar-title>
					</template>

					<v-list>
						<v-list-tile
							v-for="item in items"
							:key="item"
						>
							<v-list-tile-title v-text="item"></v-list-tile-title>
						</v-list-tile>
					</v-list>
				</v-menu>
				<em>관련 사업을 하고 있습니다.</em>
			</div>
			<button>검색하기</button>	
		</div>
		<v-layout row wrap>
			<v-flex xs12 sm5 md3>
				<v-card dark color="purple" class="popularityKeyword">
					<v-card-text>여기는 인기키워드 sdfsdfsdfdddddddddddddddddddddddddddddddddssssssssdfsdfsd</v-card-text>
				</v-card>
			</v-flex>
			<v-flex xs12 sm5 md5 offset-xs0 offset-lg2>
				<v-card dark color="green" class="popularitySolution">
					<v-card-text>여기는 인기솔루션 dsfsdfsddddddddddddddddsfsdfsdfsdfsdfsdfsdfddsfdsqrwerweyerfcxxzgbdfhsdgrfeqwrfsdfsdfsdfsdfsdf</v-card-text>
				</v-card>
			</v-flex>
		</v-layout>
	</div>
</template>

<script>
export default {
	data: () => ({
		items: [
			'보험', '카드', '은행', '유통', '서비스', '교육', '의료'
		],
	})
}
</script>

<style>
	#solution {
		padding-bottom:60px;
		text-align: center;
		width: 75%;
		margin: 0 auto;
	}
	.occupational-group-search {
		text-align: left;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	.select-box p {
		font-size: 21px;
		font-weight: 400;
		letter-spacing: -0.025em;
	}
	.select-box em {
		font-size: 21px;
		font-weight: 400;
		font-style: normal;
		letter-spacing: -0.025em;
		margin-left: 20px;
	}
	.v-toolbar__title {
		display: inline-block;
		padding-bottom: 7px;
		border-bottom: 2px solid #000;
	}
	.v-toolbar__title:not(:first-child) {
		margin: 0;
	}
	.v-menu {
		display: inline-block;
	}
	.v-toolbar__title span {
		font-size: 36px;
		font-weight: 700;
		letter-spacing: -0.025em;
		padding: 0 20px;
	}
	.occupational-group-search button {
		color: #374d9f;
		font-size: 21px;
		font-weight: 700;
		letter-spacing: -0.025em;
	}
</style>
