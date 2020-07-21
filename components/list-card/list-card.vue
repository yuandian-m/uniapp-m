<template>
	<view class="card_content">
		<view class="card_box">
			<view class="card_img">
				<image src="/static/logo.png" mode="aspectFill"></image>
			</view>
			<view class="card_text">
				<view class="card_text_content">
					<text>
						uni-app开发uni-app开发uni-app开发uni-app开发uni-app开发uni-app开发uni-app开发uni-app开发uni-app开发
						
					</text>
				</view>
				<view class="card_text_item">
					<view class="card_label">
						<text>前端</text>
					</view>
					<view class="card_viewNum">
						<text>3060浏览</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>
	.card_content {
		display: flex;
		flex-direction: column;
		padding: 10px;
		margin: 10px;
		border-radius: 5px;
		box-sizing: border-box;
		box-shadow: 0 0 5px 1px rgba($color: #000000, $alpha: 0.1);
		.card_box {
			display: flex;
			justify-content: space-between;
			align-items: center;

			.card_text {
				flex: 1;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.card_text_content {
					overflow: hidden;
					text-overflow: ellipsis;
					display: -webkit-box;
					-webkit-line-clamp: 2;
					-webkit-box-orient: vertical;
				}

				.card_text_item {
					display: flex;
					justify-content: space-between;
					margin-top: 10px;

					.card_label {
						display: flex;
						align-items: center;
						border: 1px solid $mk-base-color;
						border-radius: 8px;

						text {
							padding: 3px;
							color: $mk-base-color;
							font-size: 14px;

						}
					}

					.card_viewNum {
						text {
							color: #C8C7CC;
							font-size: 14px;

						}
					}
				}
			}

			.card_img {
				width: 60px;
				height: 60px;
				border-radius: 5px;
				overflow: hidden;
				margin-right: 10px;

				image {
					width: 100%;
					height: 100%;
				}
			}
		}
	}
</style>
