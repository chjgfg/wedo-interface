<template>
	<view class="detailbook">
		<view class="detail">
			<view class="heard" @tap="goToChapter(images.name)">
				<view class="heard-ch1">
					<view class="heard-ch1-ch1">
						{{images.name}}
					</view>
					<view class="heard-ch1-ch2">
						作者|玄幻作品
					</view>
					<view class="heard-ch1-ch3">
						连载中16.7万字
					</view>
				</view>
				<view class="heard-ch2">
					<view class="heard-ch2-ch1">
						<image :src="images.img" class="picture" />
					</view>
				</view>
			</view>


			<view class="body">
				<view class="body-ch1">
					<view class="body-ch1-ch1">
						<view class="body-ch1-ch1-ch1">57万</view>
						<view class="body-ch1-ch1-ch2">人气</view>
					</view>
					<view class="body-ch1-ch2">
						<view class="body-ch1-ch2-ch1">18970</view>
						<view class="body-ch1-ch2-ch2">点赞</view>
					</view>
					<view class="body-ch1-ch3">
						<view class="body-ch1-ch3-ch1">1094</view>
						<view class="body-ch1-ch3-ch2">粉丝</view>
					</view>
				</view>
				<view class="body-ch2">
					<view class="body-ch2-ch1">
						大周皇子周元，原本拥有圣龙之命，却被敌国武王以亿万大周子民为要挟，蟒雀吞龙，夺走其圣龙气运。
						　　周元入祖地，遇夭夭；重开八脉，再踏征途。
						　　少年执笔，龙蛇舞动；劈开乱世，点亮苍穹。
						　　气掌乾坤的世界里，究竟是蟒雀吞龙，还是圣龙崛起？！
					</view>
				</view>
				<view class="body-ch3">
					<text class="body-ch3-ch1">最新</text>
					<text class="body-ch3-ch2">第七百八十九章 血祭</text>
					<text class="body-ch3-ch3" @tap="goToMenu">5小时前更新<text class="cuIcon-right" /></text>
				</view>
			</view>


			<view class="footer">
				<view class="footer-ch1">
					<text class="footer-ch1-ch1">书圈</text>
					<text class="footer-ch1-ch2">1094粉丝,27条发言</text>
					<text class="footer-ch1-ch3" @tap="popup">写书评</text>
				</view>
				<view class="footer-ch2">
					<scroll-view :scroll-top="scrollTop" scroll-x="true" class="scroll-x">
						<view class="scroll-view-item" v-for="(item,index) in image">
							<view class="scroll-view-item-test">
								<view id="demo1" class="scroll-view-item1 uni-bg-red">
									<image :src="item.img" mode="" class="scroll-view-item1-picture" />
									<text class="scroll-view-item1-ch2">{{item.fname}}</text>
									<text class="scroll-view-item1-ch3">8月12日</text>
								</view>
								<view id="demo2" class="scroll-view-item2 uni-bg-green" @tap="goToEvaluate(item)">
									<view class="scroll-view-item2-ch1">
										<view class="scroll-view-item2-ch1-ch1">
											{{item.context}}
										</view>
									</view>
								</view>
								<!-- 	<view id="demo3" class="scroll-view-item3 uni-bg-blue">
									<text class="cuIcon-appreciate scroll-view-item3-ch1">5</text>
									<text class="cuIcon-new scroll-view-item3-ch2">1</text>
								</view> -->
							</view>
						</view>
					</scroll-view>
				</view>
				<view class="footer-ch3">
					<view class="footer-ch3-ch1" @tap="goToEvaluateList">进入圈子,查看全部27条发言</view>
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
				images: {
					img: "https://bookcover.yuewen.com/qdbimg/349573/1023237367/90",
					name: "我有一面招魂幡"
				},
				image: [{
						img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3629996925,3918753872&fm=11&gp=0.jpg",
						fname: "老舍",
						context: "也许在某一天，我们会遇见更好的自己;或许有一天起，我们之间的那些感情就会成为最美好的情绪。"
					},
					{
						img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=594569889,4090780496&fm=11&gp=0.jpg",
						fname: "老子",
						context: "时间能带走的太多太多，一个不留神，就可能会沉溺在回忆里。未来的每一分每一秒，都需要独自面对。"
					},
					{
						img: "https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4137571849,605617090&fm=11&gp=0.jpg",
						fname: "老妖怪",
						context: "没有哪种教育能及得上逆境。"
					}
				]
			}
		},
		methods: {
			goToChapter(name) {
				uni.navigateTo({
					url: './chapter?name=' + name,
					success: (res) => {
						console.log(res);
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			goToMenu() {
				uni.navigateTo({
					url: './menu?id=cdcdcdcdc',
					success: (res) => {
						console.log(res);
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			goToEvaluateList() {
				uni.navigateTo({
					url: '../evaluate/evaluatelist',
					success: (res) => {
						console.log(res);
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			popup() {
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
			goToEvaluate(item) {
				uni.navigateTo({
					url: '../evaluate/evaluate?item=' + encodeURIComponent(JSON.stringify(item)),
					success: (res) => {
						console.log(res);
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
		},
		onLoad: (option) => {
			console.log(option.name)
		}
	}
</script>

<style>
	.detail {
		width: 94%;
		margin-left: 3%;
	}

	.heard {
		margin-top: 6%;
		display: flex;
		flex-direction: row;
		border-bottom: 2rpx solid #AAAAAA;
		padding-bottom: 2%;
	}

	.heard-ch1-ch1 {
		font-size: 36rpx;
		font-weight: 600;
	}

	.heard-ch1-ch2,
	.heard-ch1-ch3 {
		font-size: 26rpx;
		margin-top: 7%;
	}

	.heard-ch1 {
		margin-left: 5%;
	}

	.heard-ch2 {
		margin-left: 20%;
	}

	.picture {
		background-image: url(../../static/bookimages/150.jpg);
		width: 202rpx;
		height: 300rpx;
		border-radius: 0.3em;
	}

	.body {
		margin-top: 5%;
	}

	.body-ch1 {
		width: 100%;
		display: flex;
	}

	.body-ch1-ch1,
	.body-ch1-ch2,
	.body-ch1-ch3 {
		width: 33.3%;
		margin-left: 2%;
		text-align: center;
	}

	.body-ch1-ch1-ch1,
	.body-ch1-ch2-ch1,
	.body-ch1-ch3-ch1 {
		font-size: 33rpx;
		font-weight: 900;
	}


	.body-ch2 {
		height: 160rpx;
	}

	.body-ch2,
	.body-ch3 {
		margin-top: 4%;
	}

	.body-ch3 {
		border-bottom: 1rpx solid #AAAAAA;
		padding-bottom: 2%;
	}

	.body-ch2-ch1 {
		font-size: 26rpx;
		width: 90%;
		margin-left: 5%;
	}

	.body-ch3-ch1 {
		font-size: 36rpx;
		font-weight: 900;
	}

	.body-ch3-ch2 {
		margin-left: 6%;
		font-size: 34rpx;
	}

	.body-ch3-ch3,
	.body-ch3-ch3>text {
		font-size: 25rpx !important;
		margin-left: 16%;
		color: #FF0000;
	}

	.scroll-x {
		white-space: nowrap;
		/* 不换行 */
		height: 350rpx;
	}

	.scroll-view-item {
		vertical-align: middle;
		display: inline-block;
		width: 80%;
		font-size: 36rpx;
		margin-left: 6%;
		height: 250rpx;
		margin-top: 5%;
		margin-bottom: 6%;
	}

	.scroll-view-item-test {
		border: 1rpx solid #808080;
		height: 300rpx;
		width: 96%;
		border-radius: 0.5em;
		padding-bottom: 10%;
	}


	.body-ch3-ch3,
	.body-ch1-ch1-ch2,
	.body-ch1-ch2-ch2,
	.body-ch1-ch3-ch2,
	.scroll-view-item2-ch1 {
		font-size: 20rpx;
	}

	.scroll-view-item2-ch1-ch1 {
		font-size: 33rpx;
		/* overflow: hidden;
		text-overflow: ellipsis;
		-webkit-line-clamp: 2; */
		/* 在第几行显示... */
		/* display: -webkit-box;
		-webkit-box-orient: vertical; */
		white-space: normal;
		/* 换行 */
	}

	.scroll-view-item1 {
		margin-top: 2%;
		text-align: center;
	}

	.scroll-view-item2 {
		margin-top: 2%;
		margin-left: 5%;
		width: 90%;
	}

	.scroll-view-item1-ch2,
	.scroll-view-item1-ch3 {
		font-size: 30rpx;
	}

	.scroll-view-item1-ch2 {
		margin-left: 5%;
	}

	.scroll-view-item1-ch3 {
		margin-left: 40%;
	}

	/* 
	.scroll-view-item3 {
		font-size: 20rpx;
		margin-left: 60%;
	}

	.scroll-view-item3-ch1,
	.scroll-view-item3-ch2 {
		font-size: 30rpx;
	}

	.scroll-view-item3-ch1 {
		margin-left: 30%;
	}

	.scroll-view-item3-ch2 {
		margin-left: 10%;
	}
 */

/* 	.footer-ch2 {
		height: 400rpx;
	} */
	

	.footer {
		margin-top: 6%;
	}

	.footer-ch1-ch1,
	.footer-ch1-ch2,
	.footer-ch1-ch3 {
		text-align: center;
	}

	.footer-ch1-ch1 {
		font-size: 36rpx;
		font-weight: 900;
	}

	.footer-ch1-ch2 {
		margin-left: 6%;
		font-size: 26rpx;
	}

	.footer-ch1-ch3 {
		margin-left: 35%;
		font-size: 30rpx;
		color: #0081FF;
	}


	.footer-ch3 {
		width: 94%;
		margin-left: 3%;
		margin-top: 12%;
	}

	.footer-ch3-ch1 {
		width: auto;
		text-align: center;
		font-size: 34rpx;
		color: #0081FF;
	}

	.scroll-view-item1-picture {
		width: 100rpx;
		height: 100rpx;
		border-radius: 2em;
		vertical-align: middle;
	}
</style>
