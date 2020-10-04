<template>
	<view class="book">
		<view class="more-book">
			<view v-for="(item,index) in images" :key="index" class="books" @tap="gotoDetali(item.name)">
				<image :src="item.img" class="books-item" />
				<view class="bookimage-text">{{item.name}}</view>
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
		onLoad: (option) => {
			console.log(option)
		},
		methods: {
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
				var lists = _this.images;
				list.forEach((item, index) => {
						/* if (item.name.length > 5) {
							item.name = item.name.substring(0, 5) + "..."
						} */
						// console.log(item.name)
						lists.push(item)
					}),
					_this.images = lists;
			},
			gotoDetali(item) {
				uni.navigateTo({
					url: "./detailbook?name=" + item,
					success: (res) => {
						console.log(res)
					},
					fail: (err) => {
						console.log(err)
					}
				})
			}
		},
		created() {
			this.getbooks()
		},
		onReachBottom() {
			this.getbooks()
		}
	}
</script>

<style>
	.book {
		width: 96%;
		margin-left: 2%;
	}

	.books {
		display: inline-block;
		margin-left: 4%;
		margin-top: 4%;
		width: 202rpx;
		height: 350rpx;
		vertical-align: middle;
	}

	.books-item {
		background-image: url(../../static/bookimages/150.jpg);
		width: 202rpx;
		height: 300rpx;
		border-radius: 0.3em;
	}

	.bookimage-text {
		font-size: 26rpx;
		width: 100%;
	}
</style>
