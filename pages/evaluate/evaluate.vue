<template>
	<view class="evaluate">
		<view class="heard">
			<view class="evaluate-ch1-ch">
				<view class="evaluate-ch1-ch1">
					<image :src="custom.img" mode="" class="evaluate-ch1-ch1-picture" />
					<text class="evaluate-ch1-ch1-name">{{custom.fname}}</text>
				</view>
				<view class="evaluate-ch1-ch2">
					<view class="evaluate-ch1-ch2-ch1">
						{{custom.context}}
					</view>
				</view>
				<view class="evaluate-ch1-ch3">
					<text class="cuIcon-evaluate_fill">支持</text>
				</view>
			</view>
		</view>
		<view class="body">
			<view class="three">
				<text class="first">全部回复</text>
				<text class="second">只看楼主</text>
			</view>
			<view class="input" @tap="send">
				<view class="input-ch1">
					<view class="input-ch1-ch1">
						<input type="text" value="" class="eeee" placeholder="回复" disabled="true" />
					</view>
					<button type="" size="mini" class="btn">发布</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				custom: {
					img: "",
					fname: "",
					context: ""
				}
			}
		},
		methods: {
			send() {
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
			}
		},
		onLoad(option) {
			var item = JSON.parse(decodeURIComponent(option.item));
			this.custom = item
		}
	}
</script>

<style>
	.heard {
		margin-top: 5%;
		height: 300rpx;
		border: 1rpx solid #AAAAAA;
		box-shadow: 1rpx 5rpx 10rpx #CCCCCC;
		border-radius: 0.5em;
	}

	.evaluate {
		width: 94%;
		margin-left: 3%;
	}

	.evaluate-ch1-ch {
		margin: 3%;
	}

	.evaluate-ch1-ch1-picture {
		width: 100rpx;
		height: 100rpx;
		border-radius: 5em;
		vertical-align: middle;
		/* 将图片和字垂直居中 */
	}

	.evaluate-ch1-ch1-name {
		margin-left: 3%;
		margin-top: -100%;
	}

	.evaluate-ch1-ch2,
	.evaluate-ch1-ch3 {
		margin-top: 5%;
	}

	.cuIcon-comment {
		margin-left: 5%;
	}

	.body {
		margin-top: 5%;
	}

	.three {
		background-color: #FFFFFF;
		box-shadow: 1rpx 5rpx 10rpx #CCCCCC;
		height: 1000rpx;
		padding-top: 5%;
		padding-left: 4%;
	}

	.second {
		margin-left: 5%;
	}

	.input {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 100rpx;
		/* margin-bottom: 20rpx; */
		background-color: #C0C0C0;
		margin-left: -3%;
	}

	.input-ch1 {
		display: flex;
		flex-direction: row;
		width: 90%;
		margin-left: 5%;
		margin-top: 2.5%;
	}

	.input-ch1-ch1 {
		border: 1rpx solid #AAAAAA;
		margin-left: 5%;
		border-radius: 0.3em;
		background-color: #FFFFFF;
	}

	.btn {
		color: #333333;
	}
	
	.eeee{
		margin-left: 2%;
	}
</style>
