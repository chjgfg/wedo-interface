<template>

	<view id="booktstore">
		<view class="context">
			<view class="heard">
				<!-- 顶部的分类 -->
				<view class="fenlei">
					<view class="fenlei-heard">
						<scroll-view class="scroll-view_H" scroll-x="true" @scroll="scroll">
							<view class="men scroll-view-item_H" v-for="(item,index) in fenlei" @tap="">
								{{item}}
							</view>
						</scroll-view>
						<!-- 顶部分类的放大镜 -->
						<view class="bgc">
							<view class="bgc-ch1 cuIcon-search" @tap="tosearch"></view>
						</view>
					</view>
				</view>
			</view>

			<!-- 具体的书 -->
			<view class="body">
				<view class="body-ch1">
					<view class="scroll-view">
						<!-- 轮播图 -->
						<swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
						 :autoplay="true" interval="5000" duration="500" @change="cardSwiper" indicator-color="#8799a3"
						 indicator-active-color="#0081ff" id="uni-swiper-dots-horizontal">
							<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
								<view class="swiper-item">
									<image :src="item.url" mode="widthFix " v-if="item.type=='image'" class="images" /><!-- mode="aspectFill" -->
								</view>
							</swiper-item>
						</swiper>
					</view>
				</view>

				<view class="body-ch2">
					<view class="body-ch2-ch1">

						<view class="current-ch1">本期主打</view>
						<view class="current-ch2" @tap="gotoDetali(bookname)">
							<!-- 主打的一个图片 -->
							<image src="http://bookcover.yuewen.com/qdbimg/349573/1018970147/180" class="picture"  mode="widthFix" />
							<view class="current-ch2-picture">
								<view class="current-ch2-picture-ch">
									<view class="current-ch2-picture-ch-title">
										{{bookname}}
									</view>
									<view class="current-ch2-picture-ch-context">
										穿越异界，当大家都在忙着修行的时候，王烨：“聚仙草？不死药？我今天该吃哪一道？”当大家都在忙着搜寻炼制法宝的灵材而不得时，‘‘通灵仙金，万灵紫玉，这么多乱七八糟的，我该用什么炼制我的法宝呢？”
									</view>
									<view class="current-ch2-picture-ch-foot">
										亡不起
									</view>
								</view>
							</view>
						</view>
						<!-- 主打的三个图片   -->
						<view class="current-ch3">
							<view class="current-three">
								<view class="current-three-item" v-for="(item,index) in images" @tap="gotoDetali(item.name)">
									<image :src="item.img" class="item-picture" />
									<view class="picture-font">{{item.name}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>

				<view class="body-ch3">
					<view class="body-ch3-ch1">
						<view class="more">
							<view class="morebook-ch1">热血玄幻</view>
							<view class="morebook-ch2" @tap="morebook">更多好书
								<text class="cuIcon-right" />
							</view>
						</view>
						<view class="more-books">
							<view class="more-books-images">
								<view class="" v-for="(item,index) in moreImages" class="more-books-item" @tap="gotoDetali(item.name)">
									<image :src="item.img" class="more-books-item-images" />
									<view class="more-books-item-front">{{item.name}}</view>
								</view>
							</view>
						</view>
					</view>
				</view>

				<view class="body-ch3" :class="num === 0 ? 'none' : 'block'">
					<view class="body-ch3-ch1">
						<view class="more">
							<view class="morebook-ch1">热血玄幻</view>
							<view class="morebook-ch2" @tap="morebook">更多好书
								<text class="cuIcon-right" />
							</view>
						</view>
						<view class="more-books">
							<view class="more-books-images">
								<view class="" v-for="(item,index) in moreImages" class="more-books-item" @tap="gotoDetali(item.name)">
									<image :src="item.img" class="more-books-item-images" />
									<view class="more-books-item-front">{{item.name}}</view>
								</view>
							</view>
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
				bookname: "我有一个资源挂",
				dotStyle: true,
				cardCur: 0,
				num: 0,
				fenlei: ["玄幻", "奇幻", "武侠", "仙侠", "都市", "现实", "军事", "历史", "游戏", "体育", "科幻", "悬疑", "女生", "轻小说", ""],
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],

				images: [{
						img: "http://bookcover.yuewen.com/qdbimg/349573/1023210850/180",
						name: "诸天地下城"
					},
					{
						img: "https://bookcover.yuewen.com/qdbimg/349573/1009480992/150",
						name: "超神机械师"
					},
					{
						img: "https://bookcover.yuewen.com/qdbimg/349573/1010400217/150",
						name: "黎明之剑"
					}
				],
				moreImages: [{
						img: "https://bookcover.yuewen.com/qdbimg/349573/1023237367/90",
						name: "我有一面招魂幡"
					},
					{
						img: "https://bookcover.yuewen.com/qdbimg/349573/1023489349/90",
						name: "外挂测评员"
					},
					{
						img: "https://bookcover.yuewen.com/qdbimg/349573/1023718967/90",
						name: "开局扮演封于修"
					}, {
						img: "https://bookcover.yuewen.com/qdbimg/349573/1023682089/90",
						name: "修仙手游世界的白"
					}, {
						img: "https://bookcover.yuewen.com/qdbimg/349573/1023388336/90",
						name: "九域仙主"
					}, {
						img: "https://bookcover.yuewen.com/qdbimg/349573/1023718967/90",
						name: "杀手就该全撑肉"
					}
				],

			}
		},
		onLoad() {
			this.TowerSwiper('swiperList');
			// 初始化towerSwiper 传已有的数组名即可
		},
		methods: {
			scroll: function(e) {
				console.log(e)
			},

			tosearch() {
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

			// cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// towerSwiper
			// 初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},

			// towerSwiper触摸开始
			TowerStart(e) {
				this.towerStart = e.touches[0].pageX
			},

			// towerSwiper计算方向
			TowerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
			},

			morebook(e) {
				uni.navigateTo({
					url: "../book/morebook?id=" + "scacsacsacac",
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

			getbooks() {
				let list = [{
						img: "https://bookcover.yuewen.com/qdbimg/349573/1017125042/150",
						name: "临渊行"
					},
					{
						img: "https://bookcover.yuewen.com/qdbimg/349573/1021781295/150",
						name: "全世界都不知道我多强"
					},
					{
						img: "https://bookcover.yuewen.com/qdbimg/349573/1016660823/150",
						name: "我的徒弟都是大反派"
					},
					{
						img: "https://bookcover.yuewen.com/qdbimg/349573/1004608738/150",
						name: "圣墟"
					},
					{
						img: "https://bookcover.yuewen.com/qdbimg/349573/1019399088/150",
						name: "从精神病院走出的强者"
					},
					{
						img: "https://bookcover.yuewen.com/qdbimg/349573/1017021237/150",
						name: "最初进化"
					},
					{
						img: "https://bookcover.yuewen.com/qdbimg/349573/1011058239/150",
						name: "伏天氏"
					},
					{
						img: "https://bookcover.yuewen.com/qdbimg/349573/1015411312/150",
						name: "白骨大圣"
					},
					{
						img: "https://bookcover.yuewen.com/qdbimg/349573/2952453/150",
						name: "完美世界"
					},
					{
						img: "https://bookcover.yuewen.com/qdbimg/349573/1015411312/150",
						name: "诸天最强大BOSS"
					},
					{
						img: "https://bookcover.yuewen.com/qdbimg/349573/1014920025/150",
						name: "元尊"
					},
					{
						img: "https://bookcover.yuewen.com/qdbimg/349573/1009704712/150",
						name: "牧神记"
					},
					{
						img: "https://bookcover.yuewen.com/qdbimg/349573/1023032608/150",
						name: "开局炼体三千层"
					},
					{
						img: "https://bookcover.yuewen.com/qdbimg/349573/1017125042/150",
						name: "临渊行"
					},
					{
						img: "https://bookcover.yuewen.com/qdbimg/349573/1019254153/150",
						name: "凶猛道侣也重生了"
					},
					{
						img: "https://bookcover.yuewen.com/qdbimg/349573/1009454017/150",
						name: "万道龙皇"
					},
					{
						img: "https://bookcover.yuewen.com/qdbimg/349573/3546912/150",
						name: "万古神帝"
					},
					{
						img: "https://bookcover.yuewen.com/qdbimg/349573/1015057056/150",
						name: "从大佬到武林盟主"
					}
				];
				const _this = this
				var lists = _this.moreImages;
				list.forEach((item, index) => {
						lists.push(item)
					}),
					_this.moreImages = lists;
			},
			gotoDetali(item) {
				uni.navigateTo({
					url: "../book/detailbook?name=" + item,
					success: (res) => {
						console.log(res)
					},
					fail: (err) => {
						console.log(err)
					}
				})
			}
		},
		// 下拉刷新
		onPullDownRefresh() {
			setTimeout(function() {
				uni.stopPullDownRefresh();
			}, 1000);
		},
		// 上拉加载
		onReachBottom() {
			const _this = this;
			setTimeout(function() {
				_this.getbooks()
				/* if (_this.num === 0) {
					_this.num = 1
				} else {
					_this.num = 0
				} */
			}, 500);
		}
	}
</script>

<style>
	/* @import url("../../static/css/iconfont.css"); */

	.fenlei {
		width: 100%;
		position: fixed;
		z-index: 500;
		background-color: #F2F6FC;
	}

	.fenlei-heard {
		display: flex;
		flex-direction: row;
		font-size: 20rpx;
		width: 98%;
		margin-left: 1%;
	}

	scroll-view ::-webkit-scrollbar {
		/* scroll-view 滚动条消失 */
		width: 0;
		height: 0;
		background-color: transparent;
	}

	.scroll-view_H {
		white-space: nowrap;
		width: 100%;
		background-color: #F2F6FC;
		/* box-shadow: 5rpx 2rpx 20rpx #CCCCCC; */
	}

	.scroll-view-item_H {
		display: inline-block;
		width: 17%;
		line-height: 80rpx;
		text-align: center;
		font-size: 36rpx;
	}

	/* 	uni-swiper .uni-swiper-dots-horizontal {
		left: 50% !important;
		bottom: 10px !important;
		text-align: center !important;
		white-space: nowrap;
		-webkit-transform: translate(-50%);
		transform: translate(-50%);
		top: 180rpx;
	}
 */
	.bgc {
		width: 20%;
		position: fixed;
		height: 80rpx;
		text-align: center;
		line-height: 60rpx;
		margin-left: 83%;
		background-color: #F2F6FC;

	}

	.images {
		background-image: url(../../static/bookimages/150.jpg);
		width: 90%;
		margin-left: 5%;
		height: 300rpx;
		border-radius: 0.5em;
	}

	.bgc-ch1 {
		width: 70%;
		margin-left: 10%;
		height: 60rpx;
		margin-top: 10rpx;
		font-size: 36rpx;
	}

	.body {
		padding-top: 10%;
	}

	.current-ch1 {
		margin-bottom: 4%;
		font-size: 36rpx;
		font-weight: 900;
	}

	.body-ch2-ch1 {
		width: 90%;
		margin-left: 5%;
		/* height: 200rpx; */
	}

	.picture {
		background-image: url(../../static/bookimages/150.jpg);
		height: 300rpx;
		width: 30%;
		display: inline-block;
		border-radius: 0.3em;
	}

	.current-ch2 {
		display: flex;
	}

	.current-ch2-picture {
		width: 65%;
		margin-left: 5%;
		word-wrap: break-word;
	}

	.current-ch2-picture-ch {
		height: 150rpx;
		display: block;
		font-size: 30rpx;
	}

	.current-ch2-picture-ch-title {
		font-size: 30rpx;
		font-weight: 600;
	}

	.current-ch2-picture-ch-context {
		font-size: 26rpx;
		height: 150rpx;
	}

	.current-ch2-picture-ch-foot {
		margin-top: 12%;
	}

	.current-ch3 {
		margin-top: 5%;

	}

	.current-three {
		display: flex;
		flex-direction: row;
		margin-left: -6%;
	}

	.current-three-item {
		margin-left: 5%;
		width: 100%;
		/* height: 25%; */
	}

	.item-picture {
		background-image: url(../../static/bookimages/150.jpg);
		border-radius: 0.3em;
		width: 202rpx;
		height: 300rpx;
	}

	.picture-font {
		padding-top: 5%;
		font-size: 26rpx;
		width: 80%;
	}

	.body-ch3 {
		margin-top: 10%;
	}

	.body-ch3-ch1 {
		width: 90%;
		margin-left: 5%;
	}

	.more {
		display: flex;
		flex-direction: row;
	}

	.more-books {
		margin-top: -1%;
	}

	.morebook-ch1 {
		width: 50%;
		font-size: 36rpx;
		font-weight: 900;
	}

	.morebook-ch2 {
		font-size: 30rpx;
		margin-left: 50%;
		color: #AAAAAA;
		width: 50%;
	}

	.more-books-images {
		margin-left: -6%;
	}

	.more-books-item {
		display: inline-block;
		margin-left: 5%;
		margin-top: 4%;
		height: 350rpx;
		width: 202rpx;
		vertical-align: middle;
		/* padding-left: 2%; */
	}

	.more-books-item-images {
		background-image: url(../../static/bookimages/150.jpg);
		width: 202rpx;
		height: 300rpx;
		border-radius: 0.3em;
	}

	.more-books-item-front {
		font-size: 26rpx;
		margin-top: 3%;
		width: 100%;
	}


	.none {
		display: none;
	}

	.block {
		display: block;
	}
</style>
