<template>
	<view class="evaluatelist">
		<view class="heard">
			<view class="heard-ch1">
				<image src="../../static/bookimages/90.jpg" mode="" class="evaluate-picture"></image>
			</view>
			<view class="heard-ch2">
				<view class="bookname">
					招魂幡
				</view>
				<view class="author">
					作者
				</view>
				<view class="other">
					<text class="bookfriends">书友<text>1111</text></text>
					<text class="say">发言<text>1111</text></text>
				</view>
			</view>
			<view class="heard-ch3">
				<view class="addit"><text>加入</text></view>
			</view>
		</view>

		<view class="body">
			<view class="body-ch1">
				<view class="title">
					<text class="new">最新</text>
					<text class="hot">最热</text>
				</view>
				<scroll-view :scroll-top="scrollTop" scroll-y="true" class="scroll-Y evaluate">
					<view v-for="(item,index) in evaluateList" :key="index" class="evaluate-ch1">
						<view class="evaluate-ch1-ch">
							<view class="evaluate-ch1-ch1">
								<image :src="item.img" mode="" class="evaluate-ch1-ch1-picture" />
								<text class="evaluate-ch1-ch1-name">{{item.fname}}</text>
							</view>
							<view class="evaluate-ch1-ch2" @tap="goToEvaluate(item)">
								<view class="evaluate-ch1-ch2-ch1">
									{{item.context}}
								</view>
							</view>
							<view class="evaluate-ch1-ch3">
								<text class="cuIcon-evaluate_fill" @tap="support(index)" :class="index === color ? 'red' : 'no'">支持</text>
								<text class="cuIcon-comment" @tap="comment">评论</text>
							</view>
						</view>
					</view>
				</scroll-view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scrollTop: 0,
				evaluateList: [],
				color: -1
			}
		},
		created() {
			this.getEvaluate()
		},
		methods: {
			getEvaluate() {
				var evaluate = [{
						img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1194131577,2954769920&fm=26&gp=0.jpg",
						fname: "情殇天下",
						context: "请系好安全带,高速飙车,一脚油门踩到底的那种"
					},
					{
						img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2319772070,3114389419&fm=26&gp=0.jpg",
						fname: "情殇地下",
						context: "现在最好看的书,高速飙车"
					},
					{
						img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1741424648,2803775455&fm=11&gp=0.jpg",
						fname: "情非天下",
						context: "开车慢点,注意安全"
					},
					{
						img: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=819635182,2054230561&fm=11&gp=0.jpg",
						fname: "痛苦天下",
						context: "北京交通委提醒您:道路千万条,安全第一条,行车不规范,家里添口人"
					},
				]
				const _this = this
				evaluate.forEach((item, index) => {
					_this.evaluateList.push(item);
				})
			},
			goToEvaluate(item) {
				uni.navigateTo({
					url: './evaluate?item=' + encodeURIComponent(JSON.stringify(item)),
					success: (res) => {
						console.log(res);
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			support(index) {
				this.color = index
				/* if (this.color === 0) {
					this.color = 1
				} else {
					this.color = 0
				} */
			},
			comment() {
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
		}
	}
</script>

<style>
	.evaluatelist {
		margin-top: 10%;
		width: 94%;
		margin-left: 3%;
	}

	.heard {
		display: flex;
		flex-direction: row;
	}

	.heard-ch1 {
		width: 33%;
	}

	.heard-ch2 {
		width: 44%;
	}

	.heard-ch3 {
		width: 23%;
	}

	.evaluate-picture {
		width: 202rpx;
		height: 300rpx;
		border-radius: 0.3em;
	}

	.bookname {
		font-size: 36rpx;
		font-weight: 900;
	}

	.author {
		font-size: 30rpx;
	}

	.other {
		font-size: 33rpx;
		font-weight: 500;
	}

	.say {
		margin-left: 5%;
		border-left: 1rpx solid #AAAAAA;
		padding-left: 5%;
	}

	.addit {
		width: 100rpx;
		height: 50rpx;
		border: 1rpx solid #ED1C24;
		border-radius: 0.5em;
	}

	.addit>text {
		font-size: 26rpx;
		text-align: center;
		line-height: 50rpx;
		margin-left: 25%;
	}

	.body {
		margin-top: 10%;
	}

	.title {
		height: 50rpx;
		border-bottom: 1rpx solid #AAAAAA;
	}

	.evaluate {
		margin-top: 5%;
	}

	.evaluate-ch1 {
		box-shadow: 1rpx 5rpx 10rpx #CCCCCC;
		margin-bottom: 5%;
		border: 1rpx solid #AAAAAA;
		border-radius: 0.5em;
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

	.red {
		color: #FF0000;
	}
</style>
