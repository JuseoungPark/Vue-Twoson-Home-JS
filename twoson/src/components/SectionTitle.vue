<template>
	<div>
		<h2>{{ title }} :: <span v-if="isVisible">{{ visit }}</span></h2>
		<input type="text" @keyup="visit++" v-model="title">
		<button @click="visitCount()">Visit Count</button>
		<h3>{{ subTitle }}</h3>

		<a href="#" @click.prevent="aaa ()">
			aaaaaa <span @click.stop="bbb ()">bbbbbb</span>
		</a>

		<button @click="disabled = !disabled">disabled</button>

		<span>{{ title }}</span> <span class="red">{{ reversedMessage }}</span>

		<div :class="{red:disabled}">REDDDDD</div>
	</div>
</template>

<script>
export default {
	name: 'SecTitle',
	data () {
		return {
			title: '두손 소식',
			// subTitle: '뉴스부터 사내 소식까지 두손소프트의 따끈따근한 이야기를 전해드립니다.',
			visit: 0,
			isVisible: false,
			disabled: false
		}
	},
	methods: {
		visitCount () {
			this.visit++
			this.isVisible = true
		},
		aaa () {
			console.log('aaaaaaaaaaaaaa')
		},
		bbb () {
			console.log('bbbb')
		}
	},
	computed: {
		subTitle () {
			return 'Hi~' + this.title + 'You are' + this.visit + 'Time Visited.'
		},
		reversedMessage: function () {
      // `this` 는 vm 인스턴스를 가리킵니다.
      return this.title.split('').reverse().join('')
    }
	},

	watch: {
		title: function () {
			console.log('ddsfsd', this.title)
		}
	}
}
</script>

<style>
	.red {
		color: #fff;
	}
</style>
