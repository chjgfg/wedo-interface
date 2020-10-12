<template>
	<view class="index">
		<view id="heard">
			<view class="heards">
				<view class="container">
					<!--弹性布局  -->
					<view class="green text time">
						本周已读<view>0</view>分钟
					</view>
					<view class="red text2">
						<view class="r1 red cuIcon-calendar" @tap="rili"></view>
						<view class="r1 blue cuIcon-search" @tap="fangdajing"></view>
						<view class="r1 green cuIcon-add" @tap="jiahao"></view>
					</view>
				</view>
			</view>
		</view>

		<view id="body">
			<view>
				<view v-for="(item,i) in images" class="photo" @tap="image(item.img)">
					<image :src="item.img" alt="" class="image-child" />
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

				images: []
			}
		},
		methods: {
			rili() {
				console.log("rili")
			},
			fangdajing() {
				uni.navigateTo({
					url: "../search/search",
					animationType: 'slide-in-right',
					animationDuration: 200,
					success: (res) => {
						console.log(res);
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			jiahao() {
				console.log("jiahao")
			},
			image(item) {
				uni.navigateTo({
					url: "../book/detailbook",
					success: (res) => {
						console.log(res);
					},
					fail: (err) => {
						console.log(err)
					}
				})
				console.log(item)
			}
		},

		created() {
			var ar = [{
					img: "http://bookcover.yuewen.com/qdbimg/349573/1023210850/180",
				},
				{
					img: "http://bookcover.yuewen.com/qdbimg/349573/1018970147/180",
				}, {
					img: "https://bookcover.yuewen.com/qdbimg/349573/1023233212/150",
				}, {
					img: "https://bookcover.yuewen.com/qdbimg/349573/1015648531/150",
				}, {
					img: "https://bookcover.yuewen.com/qdbimg/349573/1019664125/150",
				}, {
					img: "https://bookcover.yuewen.com/qdbimg/349573/1010868264/150",
				}, {
					img: "https://bookcover.yuewen.com/qdbimg/349573/1021295622/150",
				},
				{
					img: "https://bookcover.yuewen.com/qdbimg/349573/1018027842/150",
				},
				{
					img: "https://bookcover.yuewen.com/qdbimg/349573/1016861609/150",
				}, {
					img: "https://bookcover.yuewen.com/qdbimg/349573/1017125042/150",
				}, {
					img: "https://bookcover.yuewen.com/qdbimg/349573/1015648531/150",
				}, {
					img: "http://bookcover.yuewen.com/qdbimg/349573/1023210850/180",
				}, {
					img: "https://bookcover.yuewen.com/qdbimg/349573/1018970292/150",
				}, {
					img: "https://bookcover.yuewen.com/qdbimg/349573/1009480992/150",
				},
				{
					img: "https://bookcover.yuewen.com/qdbimg/349573/1010400217/150",
				}
			]
			ar.forEach((item, index) => {
				this.images.push(item)
			})
			console.log(this.images)
			// 使用uni.getNetworkType()和uni.onNetworkStatusChange()对网络进行监听
			/* 	const _this = this
				uni.request({
					url: "http://192.168.1.105:9876/book/bookList",
					header: {
						'content-type': 'application/json'
					},
					method: "GET",
					success: (res) => {
						var arr = [];
						res.data.object.forEach((item, index) => {
							this.images.push(item)
						})
						console.log(this.images)
					},
					fail: (err) => {
						console.log(err)
					}
				}) */
		}
	}
</script>

<style>
	/* @import url("../../static/css/iconfont.css"); */

	.index {
		position: relative;
	}

	.heard {
		position: absolute;

	}

	.heards {
		border-top: 1rpx solid #F2F6FC;
		position: fixed;
		/* 浮动 */
		width: 100%;
		z-index: 100;
	}

	.container {
		display: flex;
		/* 两个子view都是弹性布局 */
		flex-direction: row;
		/* 按行排列 */
		z-index: 100;
	}

	.time {
		padding-left: 3%;
	}

	.green {
		background-color: #F2F6FC;
		line-height: 50rpx;
	}

	.green>view {
		display: inline-block;
		font-size: 36rpx;
		text-align: center;
	}

	.red {
		background-color: #F2F6FC;
	}

	.blue {
		background-color: #F2F6FC;
	}

	.text,
	.text2 {
		width: 70%;
		/* 指定宽 */
		height: 50rpx;
	}

	.text2 {
		width: 30%;
		display: flex;
		/* 三个都是弹性布局 */
	}

	.r1 {
		width: 33.3%;
		/* height: 25%; */
		/* border: 1rpx solid #333333; */
		text-align: center;
		line-height: 50rpx;
		font-size: 36rpx;
	}


	#body {}

	#body>view {
		padding-top: 10%;
	}

	.photo {
		width: 33%;
		display: inline-block;
		margin-left: 0.3%;
		margin-bottom: 5%;
	}

	.image-child {
		background-image: url(../../static/bookimages/150.jpg);
		width: 202rpx;
		height: 300rpx;
		/* 	width: 80%;
		height: 150%; */
		border-radius: 0.3em;
		/* margin-top: -15%; */
		padding-top: -10%;
		margin-left: 10%;
	}
</style>
