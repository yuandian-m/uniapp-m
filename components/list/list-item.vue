<template>
	<list-scoll class="list-scroll" @loadmore="loadmore">
		<list-card mode="base" :cardInfo="item" v-for="item in list" :key="item._id"></list-card>
		<uni-load-more v-if="list.length === 0 || list.length > 7" iconType="snow" :status="load.loading"></uni-load-more>
	</list-scoll>
</template>

<script>
	export default {
		props: {
			list: {
				type: Array,
				default () {
					return []
				}
			},
			load: {
				type: Object,
				default () {
					return {
						loading: "loading"
					}
				}
			}
		},
		methods: {
			loadmore() {
				this.$emit('loadmore')
			}
		}
	}
</script>

<style>
	.list-scroll {
		height: 100%;
	}
</style>
