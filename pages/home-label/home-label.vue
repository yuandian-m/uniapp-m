<template>
	<view class="label">
		<view class="label-box">
			<view class="label-header">
				<view class="label-title">我的标签</view>
				<view class="label-edit" @click="handleEdit">{{is_edit?'完成':'编辑'}}</view>
			</view>
			<uni-load-more v-if="loading" status="loading" iconType="snow"></uni-load-more>
			<view class="label-content" v-if="!loading">
				<view class="label-content__item" v-for="(item,index) in myLabelList" :key="item._id">
					{{item.name}}
					<uni-icons v-if="is_edit" class="icons-close" type="clear" size="20" color="red" @click="handleDel(index)"></uni-icons>
				</view>
				<view v-if="myLabelList.length === 0 && !loading" class="no-data">
					当前没有数据
				</view>
			</view>

		</view>
		<view class="label-box">
			<view class="label-header">
				<view class="label-title">标签推荐</view>
			</view>
				<uni-load-more v-if="loading" status="loading" iconType="snow"></uni-load-more>
			<view class="label-content" v-if="!loading">
				<view class="label-content__item" v-for="(item,index) in recommendList" :key="item._id" @click="handleAdd(index)">{{item.name}}</view>
			</view>
			<view v-if="recommendList.length === 0  && !loading" class="no-data">
				当前没有数据
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				is_edit: false,
				myLabelList: [],
				recommendList: [],
				loading:true,
			}
		},
		onLoad() {
			this.getMyLabel()
		},
		methods: {
			handleEdit() {
				if (this.is_edit) {
					this.is_edit = false
					let label = this.myLabelList.map(item => item._id)
					this.setUpdateLabel(label)
				} else {
					this.is_edit = true
				}
			},
			getMyLabel() {
				this.loading = true
				this.$api.get_label({
					type: "all"
				}).then(res => {
					const {
						data
					} = res
				
					this.myLabelList = data.filter(item => item.current)
					this.recommendList = data.filter(item => !item.current)
					this.loading = false
				})
			},
			handleDel(index) {
				this.recommendList.unshift(this.myLabelList[index])
				this.myLabelList.splice(index, 1)
			},
			handleAdd(index) {
				if (this.is_edit) {
					this.myLabelList.push(this.recommendList[index])
					this.recommendList.splice(index, 1)
				}

			},
			setUpdateLabel(label) {
					
				uni.showLoading()
				this.$api.update_label({label}).then(res => {
					if (res.code == 200) {
						
						uni.hideLoading()
						uni.showToast({
							title: "更新成功",
							icon: "none"
						})
						uni.$emit('labelChange')
					}
				})
			}
		},
	}
</script>

<style lang="scss">
	page {
		background-color: #f5f5f5;
	}

	.label {
		.label-box {
			background-color: #fff;
			margin-bottom: 10px;

			.label-header {
				display: flex;
				justify-content: space-between;
				padding: 10px 15px;
				font-size: 14px;
				color: #666;
				border-bottom: 1px #f5f5f5 solid;

				.label-edit {
					color: #30b33a;
					font-weight: bold;
				}
			}

			.label-content {
				display: flex;
				flex-wrap: wrap;
				padding: 15px;
				padding-top: 0;

				.label-content__item {
					position: relative;
					padding: 2px 5px;
					margin-top: 12px;
					margin-right: 10px;
					border-radius: 5px;
					border: 1px #666 solid;
					font-size: 14px;
					color: #666;

					.icons-close {
						position: absolute;
						right: -8px;
						top: -8px;
						background-color: #fff;
						border-radius: 50%;
					}
				}
			}
		}
	}

	.no-data {
		width: 100%;
		text-align: center;
		padding: 50px 0;
		color: #999;
		font-size: 14px;
	}
</style>
