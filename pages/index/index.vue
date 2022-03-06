<template>
	<view class="home">
		<!-- 轮播图区域 -->
	   <swiper indicator-dots indicator-color indicator-active-color autoplay :interval="5000" circular>
		   <swiper-item  v-for="item in swipers" :key="item.id">
			   <image :src="item.img"></image>
		   </swiper-item>
	   </swiper>
	   <!-- 导航区域 -->
	   <view class="index-nav-wrapper">
			    <view class="index-nav-item">
			 	     <view class="iconfont icon-ziyuan"></view>
				     <text>黑马超市</text>
			    </view>
				<view class="index-nav-item">
					<view class="iconfont icon-guanyuwomen"></view>
					<text>联系我们</text>
				</view>
				<view class="index-nav-item">
					<view class="iconfont icon-tupian"></view>
					<text>社区图片</text>
				</view>
				<view class="index-nav-item">
					<view class="iconfont icon-shipin"></view>
					<text>学习视频</text>
				</view>
		 </view>
		 <!--  -->
	   </view>
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
		.index-nav-wrapper{
			display: flex;
			.index-nav-item{
				flex: 1;
				text-align: center;
				// 设置导航中的文本字体大小
				text{
					font-size: 30rpx;
				}
				// 设置字体图标的样式
				view{
					margin: 10px auto;
					width: 120rpx;
					height: 120rpx;
					background-color: #b50e03;
					border-radius: 60%;
					line-height: 120rpx;
					color: #fff;
					font-size: 50rpx;
					
				}
				// 图片字体图标的样式
				.icon-tupian{
					font-size: 45rpx;
				}
			}
		}
	}
</style>
