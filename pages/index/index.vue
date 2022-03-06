<template>
	<view class="home">
	   <swiper indicator-dots indicator-color indicator-active-color autoplay :interval="5000" circular>
		   <swiper-item  v-for="item in swipers" :key="item.id">
			   <image :src="item.img"></image>
		   </swiper-item>
	   </swiper>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 保存轮播图的url的地址的数组
				swipers:[]
			}
		},
		// 当页面被创建时，会执行该生命周期函数
		onLoad() {
           this.getLunBoData()
		},
		methods: {
		 //获取轮播图的数据
         async getLunBoData(){
			const res= await this.$request({
				  url:'/api/getlunbo'
			  })
			  this.swipers=res.data.message
		  }
		}
	}
</script>

<style lang="scss">
	.home{
		swiper{
			width: 750rpx;
			height: 380rpx;
			image{
				width: 100%;
				height: 100%;
			}
		}
	}
</style>
