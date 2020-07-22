<template>
	<swiper class="swiper-box" @change="awiperChange" :current="tabSwiper">
		<swiper-item v-for="(item,index) in swiperList" class="swiper-item">
			<list-item :list="listCatchData[index]"></list-item>
		</swiper-item>
	</swiper>
</template>

<script>
	import listItem from "./list-item.vue"
	export default {
		components: {
			listItem
		},
		props: {
			swiperList: {
				type: Array,
				default: [],
			},
			tabSwiper: {
				type: Number,
				default: 0,
			},
		},
		data() {
			return {
				swiperIndex: 0,
				list: [],
				listCatchData: {}
			};
		},
		watch: {
			swiperList(newVal) {
				if (newVal.length == 0) return
				this.getList(this.tabSwiper)
			}
		},
		methods: {
			awiperChange(e) {
				const {
					current
				} = e.detail
				this.$emit('getSwiper', current)
				if (!this.listCatchData[current] || this.listCatchData[current].length == 0) {
					this.getList(current)
				}

			},
			getList(index) {
				let name = this.swiperList[index].name
				this.$api.get_list({
					name
				}).then(res => {
					// this.list=res.data
					this.$set(this.listCatchData, index, res.data)
				})
			}
		},
		created() {
			// this.getList()
		}
	}
</script>

<style lang="scss">
	.swiper-box {
		height: 100%;

		.swiper-item {
			height: 100%;
			overflow: hidden;
		}
	}
</style>
