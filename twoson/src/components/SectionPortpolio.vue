<template>
	<div class="sec-portpolio">
		<v-container>
			<v-layout row wrap>
				<!-- <v-flex d-flex xs6 current>
					<v-card color="purple" dark>
						<v-card-title primary class="title">진행중인 프로젝트</v-card-title>
						<v-card-text v-html="one"></v-card-text>
						<v-button @click="more ++">{{ more }}</v-button>
					</v-card>
				</v-flex>
				<v-flex d-flex xs6 complete>
					<v-layout row wrap>
						<v-flex>
							<v-card color="red" dark>
								<v-card-title primary class="title">완료한 프로젝트</v-card-title>
								<v-card-text v-html="two"></v-card-text>
							</v-card>
						</v-flex>
						<v-flex>
							<v-card color="blue" dark>
								<v-card-title primary class="title">입찰 제안</v-card-title>
								<v-card-text v-html="three"></v-card-text>
							</v-card>
						</v-flex>
					</v-layout>
				</v-flex> -->
				<Project />
			</v-layout>	
		</v-container>
	</div>
</template>

<script>
export default {
}
</script>

<style>
	.sec-portpolio {
		content: '';
		display: block;
		background: url('../assets/portpolio-bg.png') 50% 50% no-repeat;
		background-size: cover;
		width: 100%;
		height: 130vh;
	}
</style>
