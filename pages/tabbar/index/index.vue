<template>
	<view class="content">
		<!-- 自定义导航栏 -->
		<navbar></navbar>
		<tab :list="tabList" @tab="tabClick"></tab>
		<view class="content-list">
			<list-scoll class="list_scoll">
				<list-card v-for="item in 10"></list-card>
			</list-scoll>
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: []
			}
		},
		onLoad() {
			this.getTabList()
		},
		methods: {
			getTabList() {
				// uniCloud.callFunction({
				// 	name: "get_label"
				// }).then(({
				// 	result
				// }) => {
				// 	this.tabList = result.data
				// })
				this.$api.get_table().then(res => {
					const {
						data
					} = res;
					this.tabList = data
				})
			},
			tabClick(data) {
				console.log(data)
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		height: 100%;
		display: flex;
	}

	.content {
		display: flex;
		flex-direction: column;
		flex: 1;
		overflow: hidden;
		.content-list {
			flex: 1;
			box-sizing: border-box;
			overflow: hidden;
			.list_scoll{
				height: 100%;
				display: flex;
				flex-direction: column;
			}
		}
	}
</style>
