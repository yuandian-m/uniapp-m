<template>
	<list-scoll class="swiper-item">
		<list-card v-for="item in list" :key="item.id" :cardInfo="item"></list-card>
	<uni-load-more status="loading"></uni-load-more>
	</list-scoll>
</template>

<script>
	export default{
		props:{
			list:{
				type:Array,
				default(){
					return []
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.swiper-item{
		height: 100%;
	}
</style>
