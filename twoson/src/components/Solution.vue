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
		
		<div class="solutionDetail">
			<KeyWord />
			<Propose />
		</div>
	</div>
</template>

<script>
import KeyWord from '@/components/Keyword'
import Propose from '@/components/Propose'

export default {
	data: () => ({
		title: '맞춤 솔루션',
		subTitle: '상황에 알맞는 솔루션을 찾아보세요. <br>TS Solution은 경험을 바탕으로 한 기술을 모토로 달려왔습니다.',
		items: [
			'보험', '카드', '은행', '유통', '서비스', '교육', '의료'
		],
	}),

	components: {
		KeyWord,
		Propose,
	}
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
		margin-bottom: 60px;
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

	.solutionDetail {
		display: flex;
		justify-content: space-between;
	}
</style>
