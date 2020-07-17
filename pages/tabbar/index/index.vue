<template>
	<view class="content">
		<!-- 自定义导航栏 -->
		<navbar></navbar>
		<tab :list="list"></tab>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: []
			}
		},
		onLoad() {
this.getTabList()
		},
		methods: {
			getTabList() {
				uniCloud.callFunction({
					name: "get_label"
				}).then(({
					result
				}) => {
					this.list = result.data
				})
			}
		}
	}
</script>

<style>

</style>
