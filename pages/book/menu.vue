<template>
	<view class="menu">
		<view class="body">
			<view class="chapter" v-for="(item,index) in newChapters" @tap="goToChapter(item)">
				{{item}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {

		onLoad: (option) => {
			console.log(option)
		},
		created() {
			this.getChapters()
		},
		data() {
			return {
				firstPage: "1-20章",
				num: 0,
				pages: ["1-50章", "51-100章", "101-150章", "151-200章", "201-250章", "251-300章", "301-350章", "351-400章", "401-450章",
					"451-500章", "501-550章", "551-600章", "601-650章", "651-700章"
				],
				newChapters: []
			}
		},

		methods: {
			getChapters() {
				var chapters = ["第一章 窘境", "第二章 神话降临", "第三章 天残地缺", "第四章 世界升华在即，九弦魔琴", "第五章 桥下卖艺人", "第六章 沅江妖踪现", "第七章 异常",
					"第八章 全市震动，变故生",
					"第九章 扮演进度提升", "第十章 军队动！巨兽攻城", "第十一章 死伤", "第十二章 单手鼓琴，刀斩巨蟒", "第十三章 琴音凝形，搏杀", "第十四章 儒生，斩龙剑", "第十五章 一统江山刘伯温",
					"第十六章 招揽", "第十七章 余波，奖励结算", "第十八章 抽奖", "第十九章 道经轮海卷，实力暴涨！！", "第二十章 隐藏于世，杀手公会", "第二十一章 悬赏", "第二十三章 阿其那的实力被屏蔽",
					"第二十二章 追兵", "第二十四章 荒漠筑起桃花源，丹劲神话", "第二十五章 强势，碰撞", "第二十六章 天诛！天诛！", "第二十七章 将死", "第二十八章 战终，喇嘛", "第二十九章 任务结算",
					"第三十章 震动，最强新人？", "第三十一章 水到渠成，突破！！", "第三十二章 武道宗师", "第三十三章 购买，后续", "第三十四章 烂陀寺老僧", "第三十五章 丹劲神话动第", "三十六章 汝将死，快念佛",
					"第三十七章 举世瞩目，震动请假一天", "第三十八章 迎战，嘲讽", "第三十九章 国之重器，镇国司", "第四十章 各方云集，大战将起", "第四十一章 镇国司五大尊者", "第四十二章 音攻对峙",
					"第四十三章 将军令，外人来", "第四十四章 又被直播，老僧吐血", "第四十五章 回光返照，彻底爆发", "第四十六章 魔刀灭佛", "第四十七章 陈铭登顶", "第四十八章 圣器蜕变，各方动向",
					"第四十九章 天下第一杀手，天残地缺扮演圆满", "第五十章 神泉巅峰，武道宗师巅峰！！"
				]
				const _this = this
				var lists = _this.newChapters;
				chapters.forEach((item, index) => {
						lists.push(item)
					}),
					_this.newChapters = lists;
				/* chapters.forEach((item, index) => {
					this.newChapters.push(item);
				}) */
			},
			goToChapter(item) {
				uni.navigateTo({
					url: "./chapter?name=" + item,
					success: (res) => {
						console.log(res)
					},
					fail: (err) => {
						console.log(err)
					}
				})
			}
		},
		onReachBottom() {
			uni.showLoading({
				title: '加载中'
			})
			const _this = this;
			setTimeout(function() {
				_this.getChapters()
				uni.hideLoading();
			}, 500);
		}
	}
</script>

<style>
	.heard {
		width: 100%;
		position: fixed;
		height: 50rpx;
	}

	.heard-ch {
		background-color: #AAAAAA;
		/* margin-top: -3%; */
		height: 100%;
		font-size: 20rpx;
	}

	.body,
	.heard-ch1 {
		width: 94%;
		margin-left: 3%;
	}

	.body {
		padding-top: 5%;
	}

	.page-first {
		margin-left: 76%;
	}

	.chapter {
		margin-top: 5%;
		border-bottom: 1rpx solid #AAAAAA;
		height: 60rpx;
	}
</style>
