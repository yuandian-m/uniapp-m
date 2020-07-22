<template>
	<view class="content">
		<!-- 自定义导航栏 -->
		<navbar></navbar>
		<tab :list="tabList" @tab="tabClick" :swiperIndex="swiperIndex"></tab>
		<view class="content-list">
				<list :swiperList="tabList" @getSwiper="getSwiper" :tabSwiper="tabSwiper"></list>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabList: [],
				swiperIndex:0,
				tabSwiper:0
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
					this.tabList.unshift(
					{
						name:"全部"
					})
				})
			},
			tabClick(data) {
				// console.log(data)
				this.tabSwiper=data.index
			},
			getSwiper(data){
				this.swiperIndex=data
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
