<template>
	<div class="select">
		<v-layout>
    <v-flex xs12 sm6 offset-sm4>
      <v-card>
        <v-card-actions>
          <v-select v-model="size" :items="items" label="Size"></v-select>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
		<v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
			<v-layout row wrap>
				<v-flex
					v-for="n in 4"
					:key="n"
					xs4
				>
					<v-card flat tile>
						<v-img
							:src="`https://unsplash.it/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
							height="100px"
						></v-img>
					</v-card>
				</v-flex>
			</v-layout>
		</v-container>
	</div>
</template>

<script>
export default {
	name: 'SelectBox',
	data: () => ({
		size: 'sm',
		items: [
			{ text: 'Extra small (2px)', value: 'xs' },
			{ text: 'Small (4px)', value: 'sm' },
			{ text: 'Medium (8px)', value: 'md' },
			{ text: 'Large (16px)', value: 'lg' },
			{ text: 'Extra large (24px)', value: 'xl' }
		]
	})
}
</script>

<style>
	.menuable__content__active {
		top: 0;
		left: 0;
	}
	.v-menu__content {
		top: 0;
		left: 0;
	}
</style>
