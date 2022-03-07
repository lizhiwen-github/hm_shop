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
		 <!-- 商品展示区域 -->
		 <view class="goods-wrapper">
		 	<view class="title">
				<text>推荐商品</text>
			</view>
			<view class="goods-list">
				<view class="goods-itme">
					<image src="https://typora333.oss-cn-guangzhou.aliyuncs.com/img/ry_01.jpg"></image>
					<view class="price">
						<text>￥2199</text>
						<text>￥2499</text>
					</view>
					<view class="goods-des">
						荣耀X30i 7.45mm超薄全视屏 22.5w超级快充 8G+128G 魅海蓝
					</view>
				</view>
				<view class="goods-itme">
					<image src="https://typora333.oss-cn-guangzhou.aliyuncs.com/img/ry_01.jpg"></image>
					<view class="price">
						<text>￥2199</text>
						<text>￥2499</text>
					</view>
					<view class="goods-des">
						荣耀X30i 7.45mm超薄全视屏 22.5w超级快充 8G+128G 魅海蓝
					</view>
				</view>
				<view class="goods-itme">
					<image src="https://typora333.oss-cn-guangzhou.aliyuncs.com/img/ry_01.jpg"></image>
					<view class="price">
						<text>￥2199</text>
						<text>￥2499</text>
					</view>
					<view class="goods-des">
						荣耀X30i 7.45mm超薄全视屏 22.5w超级快充 8G+128G 魅海蓝
					</view>
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
				// 保存轮播图的url的地址的数组
				swipers:[]
			}
		},
		// 当页面被创建时，会执行该生命周期函数
		onLoad() {
           this.getLunBoData()
		   this.getHotGoods()
		},
		methods: {
		 //获取轮播图的数据
         async getLunBoData(){
			const res= await this.$request({
				  url:'/api/getlunbo'
			  })
			  this.swipers=res.data.message
		  },
		  // 获取商品列表数据
		 async getHotGoods(){
			const res= await this.$request({
				  url:'/api/getgoods?pageindex=1'
			  })
			  console.log(res)
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
					background-color: $hm-shop-color;
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
		.goods-wrapper{
			background-color: #eee;
			overflow: hidden;
			.title{
				background-color: #fff;
				margin: 10rpx 0;
				
				text{
					line-height: 50px;
					height: 50px;
					display: block;
					// background-color: red;
					letter-spacing: 20px;
					text-align: center;
					overflow: hidden;
					color: $hm-shop-color;
				}
			}
			.goods-list{
				padding: 0 15rpx;
				display: flex;
				flex-wrap: wrap;
				justify-content:space-between;
				.goods-itme{
					background-color: #fff;
					width: 355rpx;
					margin: 10rpx 0;
					padding: 15rpx;
					box-sizing: border-box;
					image{
						width: 80%;
						height: 150px;
						display: block;
						margin: 0 auto;
					}
					.price{
						margin: 15rpx 0;
						color: $hm-shop-color;
						font-size: 36rpx;
						text:nth-child(2){
							color: #ccc;
							font-size: 28rpx;
							margin-left: 17rpx;
							text-decoration: line-through;
						}
					}
					.goods-des{
						font-size: 25rpx;
						line-height: 45rpx;
						padding-bottom: 15rpx;
						padding-top: 10rpx;
					}
					
				}
			}
			 
		}

	
	}
</style>
