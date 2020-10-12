<template>
	<view id="search">
		<view class="search-ch">
			<view class="heard">
				<view class="heard-h">
					<view class="input-icon">
						<view class="input-icon-ch1">
							<input type="text" class="input" placeholder="客官,请输入..." @input="getvalue">
						</view>
					</view>
					<view class="frond">
						<view class="frond-ch1" @tap="getinputvalue">
							搜索
						</view>
					</view>
				</view>
			</view>
			<view class="body">
				<view class="body-children1" :class="num === 0 ? 'block' : 'none' ">
					<view class="body-ch1">
						<view class="body-ch1-ch1">
							<view class="tuijian">为你推荐</view>
							<view class="gengxin cuIcon-refresh" @tap="getsome"></view>
						</view>
						<view class="cate-item">
							<view v-for="(item,index) in category" class="cate">
								<view class="item">{{item}}</view>
							</view>
						</view>
					</view>
					<view class="body-ch2">
						<view class="book-cate">
							<view class="book-cate-ch1" v-for="(item,index) in bookCate" :class="index == indexs ? 'red' : 'nored'" @tap="getbook(index)" :key="index">{{item}}</view><!-- index == indexs ? 'red' : 'none' -->
						</view>
						<view class="books">
							<view class="books-ch1" v-for="(item,index) in books">{{item}}</view>
						</view>
					</view>
				</view>
				
				
				
				<view class="body-children2" :class="num === 1 ? 'block' : 'none' ">
					<view class="body-children2-ch1">
						<view class="people" v-for="(item,index) in people" @tap="gotoAuthor(item.name)">
							<image :src="item.image" class="people-pricture"></image>
							<text class="line-heigh">{{item.name}}</text>
						</view>
					</view>
					<view class="body-children2-ch2">
						<view class="book" v-for="(item,index) in bookImages" @tap="gotoBook(item.name)">
							<image :src="item.img" class="book-pricture"></image>
							<text class="line-heigh">{{item.name}}</text>
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
				indexs: 0,
				color: '',
				value: "",
				num: 0,
				category: ["家族", "男生热读榜TOP", "男生月票榜TOP", "坑爹", "男生原创榜TOP", "异世大陆"],
				bookCate: ["玄幻", "奇幻", "武侠", "仙侠", "都市", "现实", "军事"],
				book: [
					['挂机无敌', '随机捕捉一个气运之子', '我真的想长生不老', '超次元星卡师', '武夫凶猛', '反派的荣耀', '无限末日玩家', '武神败家子', '我真不是武二代'],
					['野猪人之兽人帝国崛起', '明天一起去开荒吗', '霍格沃茨的神秘人复苏', '最强称号大师', '以骑士领主之名', '我能登入异世界', '极寒从1886开始', '无限特异点', '进化岛屿国度'],
					['我真没想这么火', '大周第一国师', '最强正派系统', '本武', '诸天乱世枭雄', '我真不是武林大佬', '我真的想当朝廷鹰犬', '武侠之生死存档', '我有一台强化机'],
					['西游之大道宝瓶', '随身半斗米，异界修仙', '轮回诸天，道途永无止境！', '携混沌观想图，穿越小世界', '上清灵宝经，做上清高徒', '诛仙长生传', '我能契约英雄联盟', '洪荒之太白剑仙',
						'我的空间能种武功秘籍'
					],
					['我的姐姐是超模', '大佬从养猪开始', '平常人类的平凡生活', '垄断在日本', '开局就成了嫌疑人', '我的深海渔场', '重启白金时代', '我的姐姐是女团队长', '1991从芯开始'],
					['大国小商', '何以为姻', '90后的互联网时代', '医旅研途', '传奇机长', '郊野小庄主', '逆袭酿酒界大佬', '带个陶罐去扶贫', '环保人员'],
					['黑夜将尽', '每天一个终极技能', '从特种兵开始的军旅生涯', '我叫余则成', '谍战之最强搭档', '关东警事之谍王', '异星蛮人传', '金革之声', '零式战争']
				],
				books: [],
				people: [{
						image: "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1601527225860&di=8f8fe974ea72e52c9a3f1a927c7924c1&imgtype=0&src=http%3A%2F%2Fimg1.gtimg.com%2Fcul%2Fpics%2Fhv1%2F170%2F63%2F2206%2F143461385.jpg",
						name: "老舍"
					},
					{
						image: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2057190651,3048740532&fm=26&gp=0.jpg",
						name: "老子"
					},
					{
						image: "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2595443084,3661606087&fm=26&gp=0.jpg",
						name: "老妖精"
					}
				],
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
				bookImages: [{
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
						img: "https://bookcover.yuewen.com/qdbimg/349573/1023627913/90",
						name: "杀手就该全撑肉"
					}
				],
			}
		},
		onLoad() {
			this.getsome();
			this.getbook(0)
		},
		computed: {
			setindexss: function(index) {
				if (this.indexs === index) {
					return 'red';
				}
				return 'none';
			}
		},
		methods: {
			getvalue(e) {
				this.value = e.target.value
			},
			getinputvalue() {
				console.log(this.value)
				if (this.value === "" || this.value === undefined) {
					uni.showModal({
						title: "唯唯提示",
						content: "客官,您输入的为空哦!!!",
						success: (res) => {
							this.num = 0
							console.log(res)
							return;
						},
						fail: (err) => {
							console.log(err)
							return;
						}
					})
				} else {
					this.num = 1
				}
			},
			getsome() {
				this.category = []
				var category0 = ["家族", "男生热读榜TOP", "男生月票榜TOP", "坑爹", "男生原创榜TOP", "异世大陆", "东方玄幻", "美女", "爽文", "男生高分书籍", "医生文", "玄幻",
					"透视文", "男生完本榜TOP", "男生高质量书籍", "都市", "疯狂", "异术超能", "强者", "都市高手", "穿越文", "废柴流", "宝物", "惊悚|恐怖"
				]
				var max = category0.length
				var min = 0;
				var arr = new Array(max);
				for (var i = 0; i < max; i++) {
					var k = parseInt(Math.random() * (max - min)) + min; //指定生成某一范围内的随机数
					arr.push(k + "");
				}
				var array = []
				for (var k = 0; k < arr.length; k++) { //数组去重
					if (arr[k] !== undefined) {
						if (!array.includes(arr[k])) {
							array.push(arr[k])
						}
					}
				}
				for (var m = 0; m < array.length - 1; m++) {
					if (m === 6) {
						break
					}
					this.category.push(category0[array[m]])
				}
				arr = new Array(max);
				array = []
			},

			getbook(index) {
				this.indexs = index;
				console.log(this.bookCate[index].fontcolor('red'))
				this.books = []
				for (var i = 0; i < this.book[index].length; i++) { 
					this.books.push(i + 1 + "    " + this.book[index][i])
				}
			},
			gotoBook(item) {
				uni.navigateTo({
					url: "../book/detailbook?name=" + item,
					success: (res) => {
						console.log(res)
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
			gotoAuthor(item) {
				uni.navigateTo({
					url: "../author/author?name=" + item,
					success: (res) => {
						console.log(res)
					},
					fail: (err) => {
						console.log(err)
					}
				})
			},
		}
	}
</script>

<style>
	/* @import url("../../static/css/iconfont.css"); */

	.red {
		color: #ff0000;
		border-bottom: 2px solid #FF0000;
	}

	.block {
		display: block;
	}

	.none {
		display: none;
	}

	.search {
		margin: 0;
	}

	.search-ch {
		width: 100%;
		height: 60rpx;
		padding-top: 0.5%;
		padding-bottom: 1%;
		border-bottom: 1rpx solid #;
		/* box-shadow: 1rpx 2rpx 20rpx #E5E5E5; */
	}

	.heard-h {
		display: flex;
		margin-bottom: 5%;
	}

	/* 	.body-children1 {
		display: none;
	} */

	.input-icon {
		width: 75%;
	}

	.input-icon-ch1 {
		width: 80%;
		margin-left: 10%;
		border-radius: 0.8em;
		border: 1rpx solid #3B4144;
		line-height: 60rpx;
	}

	.input {
		display: inline-block;
		vertical-align: middle;
		font-size: 60%;
		width: 90%;
		margin-left: 5%;
		font-size: 34rpx;
		margin-bottom: 1%;
	}

	.frond {
		width: 25%;
		margin-left: -3%;
		font-size: 30rpx;
	}

	.frond-ch1 {
		width: 80%;
		/* border-radius: 0.8em; */
		line-height: 60rpx;
		text-align: center;
	}

	.body {
		width: 100%;
		height: 1px;
		/* border-bottom: 1px solid #333333; */
		padding-top: 3%;
	}

	.body-ch1 {
		height: 200rpx;
		border-bottom: 1rpx solid #D3D3D3;
	}

	.body-ch1-ch1 {
		width: 95%;
		margin-left: 2.5%;
		/* background-color: #3B4144; */
		display: flex;
		flex-direction: row;

		/* height: 200rpx; */
	}

	.tuijian {
		width: 70%;
		font-size: 36rpx;
	}

	.gengxin {
		font-size: 155%;
		margin-left: 55%;
		width: 30%;
	}


	.cate-item {
		width: 100%;
	}

	.cate {
		font-size: 22rpx;
		width: 30%;
		margin-top: 2%;
		margin-left: 2.5%;
		display: inline-flex;
	}

	.item {
		font-size: 26rpx;
		border: 1rpx solid #E6E6FA;
		background-color: #E6E6FA;
		border-radius: 0.5em;
	}

	.body-ch2 {
		margin-top: 8%;
		font-size: 20rpx;
		/* cursor: pointer; */
	}

	.book-cate {
		margin-left: 1.5%;
		display: flex;
		flex-direction: row;
	}

	.book-cate-ch1 {
		margin-left: 1%;
		font-size: 36rpx;
	}

	.body-children2 {
		width: 94%;
		margin-left: 3%;
	}

	.body-children2-ch1 {
		padding-bottom: 5%;
		border-bottom: 1rpx solid #AAAAAA;

	}

	.body-children2-ch2 {
		padding-top: 5%;
	}

	.books {
		margin-top: 5%;
		margin-left: 2.5%;

	}

	.books-ch1 {
		width: 50%;
		margin-bottom: 2%;
		display: inline-flex;
		font-size: 26rpx;
	}

	.people,
	.book {
		display: inline-flex;
		width: 100%;
		height: 100rpx;
		margin-top: 2%;
	}

	.people-pricture {
		background-image: url(../../static/bookimages/150.jpg);
		border-radius: 2em;
		width: 100rpx;
		height: 100rpx;
	}

	.book-pricture {
		background-image: url(../../static/bookimages/150.jpg);
		width: 100rpx;
		height: 150rpx;
		border-radius: 0.3em;
	}

	.line-heigh {
		text-align: center;
		margin-left: 5%;
		margin-top: 8%;
	}
</style>
