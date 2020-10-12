<template>
	<view id="mine">
		<view class="heard">
			<view class="cuIcon-notice notice"></view>
			<view class="heard-ch1">
				<image :src="images" class="user-images" />
				<view class="user-detils">
					<view class="user-name">
						i3406502251
					</view>
					<view class="user-read-time">
						累计读0小时|今日读0小时
						<text class="cuIcon-playfill"></text>
					</view>
					<view class="pround">
						荣誉
						<text class="cuIcon-playfill"></text>
					</view>
				</view>
			</view>
			<view class="heard-three">
				<view class="my-book" @tap="goTobookrack">
					<view class="my-book-num">3</view>
					<view class="my-book-name text">我的书籍</view>
				</view>
				<view class="my-think" @tap="putout">
					<view class="my-think-num">0</view>
					<view class="my-think-name text">想法/书评/帖子</view>
				</view>
				<view class="my-booklist" @tap="booklist">
					<view class="my-booklist-num">0</view>
					<view class="my-booklist-name text">我的书单</view>
				</view>
			</view>
		</view>
		<view class="body">
			<view class="body-ch1">
				<view class="free" @tap="goToFree">
					今日免费
				</view>
				<view class="sign" @tap="goToCheck">
					签到|活动
				</view>
				<view class="set" @tap="goToSet">
					设置
				</view>
				<view class="help" @tap="goToHelp">
					帮助与反馈
				</view>
				<view class="log" @tap="goToLog">
					退出登录
				</view>
			</view>
		</view>
		<!-- <view class="footer">
			<view class="footer-ch1">
				<view class="set">
					设置
				</view>
				<view class="help" @tap="goToHelp">
					帮助与反馈
				</view>
			</view>
		</view> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				images: "https://facepic.qidian.com/qd_face/349573/a5381679/0"
			}
		},
		methods: {
			goTobookrack() {
				uni.switchTab({
					url: "./bookrack",
					success: (res) => {
						console.log(res);
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			putout() {
				uni.showModal({
					title: '唯唯提示',
					content: '客官，只有等级在100级以上才可以评论呢。',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			booklist() {
				uni.showModal({
					title: '唯唯提示',
					content: '客官,还没买书,书单是空的呢。',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			goToFree() {
				uni.navigateTo({
					url: "../mine/free",
					success: (res) => {
						console.log(res);
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			goToHelp() {
				uni.navigateTo({
					url: "../mine/help",
					success: (res) => {
						console.log(res);
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			goToSet() {
				uni.showModal({
					title: '唯唯提示',
					content: '客官,该功能还没做好呢。',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			goToCheck() {
				uni.showModal({
					title: '唯唯提示',
					content: '客官,该功能还没做好呢。',
					success: function(res) {
						if (res.confirm) {
							console.log('用户点击确定');
						} else if (res.cancel) {
							console.log('用户点击取消');
						}
					}
				});
			},
			goToLog() {
				uni.navigateTo({
					url: "../mine/log",
					success: (res) => {
						console.log(res);
					},
					fail: (err) => {
						console.log(err)
					}
				})
			}
		}
	}
</script>

<style>
	.notice {
		/* 		width: 100rpx;
		height: 100rpx; */
		font-size: 50rpx;
		text-align: center;
		line-height: 50rpx;
		margin-left: 90%;
		font-weight: 500;
	}

	.heard-ch1 {
		margin-top: 3%;
		width: 94%;
		margin-left: 3%;
		display: flex;
	}

	.user-name {
		font-size: 33rpx;
		font-weight: 700;
	}

	.user-detils {
		font-size: 26rpx;
		color: #333333;
		margin-left: 8%;
		font-weight: 600;
	}

	.user-read-time,
	.pround {
		margin-top: 5%;
		color: #AAAAAA;
		font-size: 23rpx;
	}


	.user-images {
		background-image: url(../../static/bookimages/0.png);
		width: 100rpx;
		height: 100rpx;
		border-radius: 2em;
	}



	.heard-three {
		display: flex;
		flex-direction: row;
		width: 100%;
		margin-top: 5%;
	}

	.my-book,
	.my-think,
	.my-booklist {
		text-align: center;
		width: 33.3%;
		/* border-right: 2rpx solid #888888; */
		font-size: 36rpx;
		font-weight: 900;
	}

	.text {
		font-size: 15rpx;
		color: #AAAAAA;
	}

	.body,
	.footer {
		margin-top: 10%;
		width: 94%;
		margin-left: 3%;
	}

	.body {
		height: 150rpx;
		margin-bottom: 10%;
	}

	.free,
	.sign,
	.set,
	.help,
	.log {
		font-size: 30rpx;
		height: 60rpx;
	}

	.free,
	.sign,
	.set,
	.help {
		border-bottom: 2rpx solid #AAAAAA;
	}

	.sign,
	.help,
	.set,
	.log {
		margin-top: 2%;
	}

	.free>.right {
		margin-left: 70%;
	}

	.sign>.right {
		margin-left: 68.5%;
	}

	.set>.right {
		margin-left: 78%;
	}

	.help>.right {
		margin-left: 63.5%;
	}
</style>
