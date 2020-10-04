<template>
	<view class="chapter" @touchstart="start" @touchend="end">
		<view class="heard" :class="num1 === 0 ? 'ok': 'no'">
			<view class="heard-ch1">
				<text class="heard-ch1-ch1 cuIcon-back" @tap="back"></text>
				<text class="heard-ch1-ch2 cuIcon-more"></text>
			</view>
		</view>
		<view class="body">
			<view class="title">
				第一章
			</view>
			<view class="context">
				<p>　　顾九章表示歉意，白石也非常大度表示无碍。</p>
				<p>　　双方并未继续在这件事上进行纠缠，仿佛一切都忘记，白石继续取出九霄环佩，与众人一起论琴。</p>
				<p>　　九霄环佩琴声回荡起来，中途却有几位老儒面露尴尬离席，倒不是他们对白石有什么意见，只是今日孔阙袭击与白石大打出手这件事刺激到他们，为了避祸，他们选择迅速离去，深怕孔阙那个疯子杀个回马枪。</p>
				<p>　　实际上，尼山圣境无法与衍圣公府做完全切割，纵使孔阙再怎么上蹿下跳，一旦遭遇真正危险时，尼山圣境里隐居众多老儒自然不是坐视不管。</p>
				<p>　　另外一方面，衍圣公府现如今的一连串动作，存在一大部分儒林看不惯问题，但孔阙也是货真价实在办事，虽然作风粗糙，却一样给他们获利。</p>
				<p>　　所谓的吃相好看与难看问题就在这，衍圣公府与儒林各方都有密切往来，早已在青州境内形成巨大利益链，孔阙固然做事荒唐，但换一位衍圣公府主事，一样会关注这些事，只不过手段会更老练一点。</p>
				<!--	<p>　　“白掌门实力，我等也是刮目相看。”</p>
				<p>　　“全赖智源溪的帮助。”</p>
				<p>　　智源溪有那么神奇吗？</p>
				<p>　　墨水果然玄妙，但依靠墨水就可以直接抗衡衍圣公府的天屏武典，实在是...</p>
				<p>　　今日一战，白石的表现真正惊艳到几位老儒，孔阙所仰仗的天屏武典白阳之力，加上虎魄甲，竟无法拿下先天修为白石，要知道这位白掌门也是刚刚踏入先天不久。</p>
				<p>　　刚刚踏入先天修为，可是战斗时候意志力与作战风格，非常熟练，完全不似刚刚掌握先天气罩的武者。</p>
				<p>　　最为关键是，白石修炼仅仅是天道轮回诀六种异种真气中一种，竟可以不落下风，甚至还让孔阙暗中吃亏，难不成智源溪里面悟道的墨水，可以让他地狱道真气变强到这一步？</p>
				<p>　　无法理解...</p>
				<p>　　几位老儒准备接下来前往智源溪，也参悟一下，说不定这把岁数还可以突破一把？</p>
				<p>　　顾九章也是仔细观察过两人交战，刚刚最后一招时，白石的墨水出现特殊性质变化，几乎瞬间压垮虎魄真气防线，虽没有重创孔阙，但代表白石完全有反制孔阙能力。</p>
				<p>　　穿上虎魄甲都无法压制白石，代表下一次对上，孔阙起码还需戴上其他神器。</p>
				<p>　　想到那人脾气，顾九章就头疼...</p>
				<p>　　衍圣公府内，孔阙闭上眼修行，周围虎魄真气源源不断汇聚头顶，化为宏大灼热白阳，照耀在整个大殿上，不断吐着热气翻腾，最终狂热能量消散后，孔阙徐徐收回力道。</p>
				<p>　　天屏武典，是衍圣公府最强武学，融合其中特质的孔阙，浑身上下透着凶悍气息。</p>
				<p>　　暗处几位下属徐徐走出：“公子，是否需要准备携带剩下神器，一举击杀泰山白石。”</p>
				<p>　　提到白石，孔阙摆了摆手：“那位白掌门，同样有所保留底牌，没有必要贸然出手。”</p>
				<p>　　作为衍圣公府的主人，孔公子你在尼山圣境出手已经很贸然，现在觉得自己不能贸然出手？</p>
				<p>　　这几位部署都是孔府家将与幕僚，跟随孔府上代家主多年，随着前任家主暴毙后，整套体系都留下交给孔阙。</p>
				<p>　　虽然孔阙行事荒唐，可是对于这套成熟的运作班底，却是格外信任，给与他们足够资源去运作各方。</p>
				<p>　　因此这些幕僚说话也是没有任何顾忌，堂堂泰山派掌门，想针对就针对。</p>
				<p>　　“天帝印，现在看起来还在叶寒手上。”</p>
				<p>　　孔阙喃喃自语，周围幕僚则面面相觑，不明白这时候提到天帝印又是什么原因。</p>
				<p>　　“公子的意思是？”</p>
				<p>　　“无法用武力压迫泰山派与它背后道家各派，青州四寺背后一样有其他佛家高手支持，反过来说，与魔门纠缠不休的驼山剑庄，还有蒙山十三寨，实际上已是一清二楚。”</p>
				<p>　　驼山剑庄与蒙山十三寨，都有宗师坐镇的势力，实际上反而底牌几乎尽显，尤其是蒙山十三寨，经历一连串斗争，只剩五位寨主，蒙山玉皇实力最强，挂心橛子则是智囊头部。</p>
				<p>　　夜半时分。</p>
				<p>　　白石独自一人，在观川亭内，轻轻拨动九霄环佩琴。</p>
				<p>　　古今兴废有若反掌，青山绿水则固无恙，千载得失是非，尽付之渔樵一话而已。</p>
				<p>　　琴声起，仿佛墨分五彩，构建出一副独特音色画面，层次丰富而鲜明。强音可如焦墨，浓郁而坚挺。轻音可如湿墨，飘渺而明晰，其间又有丰富的过渡色彩。</p>
				<p>　　“问乾坤古往今来，任桑田沧海悠悠。”</p>
				<p>　　阳鸟月兔，飞鸟难留。天高地下，渺渺虚舟。总寄身寥廓。何虑何忧。光阴如水东流，渔人樵子，不识有王侯。信乎渔人樵子，不识有王侯。这江山与我度春秋。</p>
				<p>　　三大音在白石切换下，其中散音松沉而旷远，让人起远古之思；其泛音则如天籁，有一种清冷入仙之感。</p>
				<p>　　按音主要在白石手指下，变得吟猱余韵、细微悠长，时如人语，可以对话，时如人心之绪，缥缈多变。泛音象天，按音如人。</p>
				<p>　　最终的散音则同大地，称为天地人三籁。因此古琴一器具三籁，可以状人情之思，也可以达天地宇宙之理。</p>
				<p>　　但今夜，气氛确实有点不同寻常。</p>
				<p>　　就在这时，孔阙手持一柄特殊的宝盒，再度这样闯入尼山圣境的观川亭，口气中带着一种狂霸姿态。</p>
				<p>　　“论古今有许多英雄，为卿为相，定伯匡王，成灵气焰，四海漾荣光，至今都已成空，尽成空。繁华凋谢，竟与草茅微贱同。荣枯胜败，显晦兴亡，时移势改，落花随水去也任流东。”</p>
				<p>　　这番出自白石演奏琴谱里面诗词，代表孔阙并非一位不学无术之辈，同时白石琴声停止，背对孔阙片刻后，这位泰山派掌门人，缓缓开口到：“衍圣公府之主，这一次前来，是为何事？”</p>
				<p>　　抓住手上宝盒的孔阙，浑身上下白阳气流暴涨：“你猜猜看，我意欲何为？”</p>
				<p>　　没有任何犹豫，白石直接回到：“谈合作，谋天帝印，铲除驼山剑庄与蒙山十三寨。”</p>
				<p>　　出乎意料答案，孔阙则嘿一笑，非常随意坐在对面，而白石将准备好茶壶取出，一杯茶倒下时竟冒出一丝热气，代表他早就在等待孔阙。</p> -->
			</view>
		</view>
		<view class="footer" :class="num1 === 0 ? 'ok': 'no'">
			<view class="footer-ch1">
				<text class="befor" @tap="pageSubstract">上一页</text>
				<text class="bookList" @click="showDrawer('showLeft')">目&emsp;录</text>
				<text class="after" @tap="pageAdd">下一页</text>
			</view>
		</view>

		<view class="displayList">
			<view class="displayList-ch1" :class="num2 === 0 ? 'no' : 'ok'">
				<view class="displayList-ch1-footer">
					<uni-drawer ref="showLeft" mode="left" :mask-click="false" @change="change($event,'showLeft')"
					 :maskClick=true>
						<view class="scroll-view">
							<scroll-view class="scroll-view-box ssss" scroll-y="true">
								<view class="close">
									章节目录
								</view>
								<view class="info-content" v-for="item in list" :key="item" @tap="changePage(item)">
									<text>{{item}}</text>
								</view>
							</scroll-view>
						</view>
					</uni-drawer>
				</view>
			</view>
			<view class="displayList-ch2"></view>
		</view>
	</view>
</template>

<script>
	import uniDrawer from "@/components/uni-drawer/uni-drawer.vue"
	export default {
		components: {
			uniDrawer
		},
		data() {
			return {
				num1: 0,
				num2: 0,
				scrollTop: 0,
				startData: {
					clientX: 0,
					clientY: 0
				},
				list: []
			}
		},
		onLoad: (option) => {
			console.log(option)
		},
		onReachBottom: () => {
			/* 	uni.showLoading({
					title: '加载中'
				});
				setTimeout(function() {
					uni.hideLoading();
				}, 2000); */
		},
		methods: {

			start(e) {
				var subY = e.changedTouches[0].clientY;
				var subX = e.changedTouches[0].clientX;
				this.startData.clientX = subX;
				this.startData.clientY = subY;
			},
			end(e) {
				const subX = e.changedTouches[0].clientX - this.startData.clientX;
				const subY = e.changedTouches[0].clientY - this.startData.clientY;
				var suby = this.startData.clientY
				var subx = this.startData.clientX
				if (suby >= 243 && suby <= 405) {
					if (subx >= 144 && subx <= 240) {
						console.log("ok")
						if (this.num1 === 0) {
							this.num1 = 1
							return;
						} else {
							this.num1 = 0
							return;
						}
					}
				}
				if (subY > 50) {
					console.log('上滑 ====>' + subY)
					return;
				} else if (subY < -50) {
					console.log('下滑 ====>' + subY)
					return;
				} else {
					if (subX > 50) {
						console.log('右滑')
						return;
					} else if (subX < -50) {
						console.log('左滑')
						return;
					} else {
						// console.log('无效')
						return;
					}
				}
			},
			back() {
				console.log("返回")
				uni.navigateBack({
					delta: 1
				})
			},
			pageSubstract() {
				console.log("页数-1")
			},
			pageAdd() {
				console.log("页数+1")
			},
			showDrawer(e) {
				this.num2 = 1
				this.num1 = 0
				console.log(this.num2)
				if (this.num2 === 0) {
					this.num2 = 1
				} else {
					this.num2 = 0
				}
				this.$refs[e].open()
				console.log(e)
			},
			// 关闭窗口
			/* 			closeDrawer(e) {
							this.$refs[e].close()
						}, */
			// 抽屉状态发生变化触发
			change(e, type) {
				console.log((type === 'showLeft' ? '左窗口' : '右窗口') + (e ? '打开' : '关闭'));
				this[type] = e
			},
			/* 			onNavigationBarButtonTap(e) {
							if (this.showLeft) {
								this.$refs.showLeft.close()
							} else {
								this.$refs.showLeft.open()
							}
						},
						// app端拦截返回事件 ，仅app端生效
						onBackPress() {
							if (this.showRight || this.showLeft) {
								this.$refs.showLeft.close()
								this.$refs.showRight.close()
								return true
							}
						}, */
			findOne(item) {
				console.log(item)
				if (this.num2 === 0) {
					this.num2 = 1
				} else {
					this.num2 = 0
				}
				this.num1 = 0
			},
			changePage(item) {
				this.num2 = 1
				this.num1 = 0
				console.log(item)
			},
			addList() {
				var arr = ["第一章 蟒雀吞龙", "第二章 源纹", "第三章 苏幼微", "第四章 源纹的力量", "第五章 齐岳、柳溪", "第六章 祖地宗祠", "第七章 神秘之地", "第八章 寻八脉", "第九章 八脉现",
					"第十章 得授机缘", "第十一章 齐王的胃口", "第十二章 源食", "第十三章 冲脉", "第十四章 神魂", "第十五章 混沌神磨观想法", "第十六章 挖墙角", "第十七章 林枫", "第十八章 文武",
					"第十九章 开脉", "第二十章 源术", "第二十一章 龙步，龙碑手", "第二十二章 大考来临", "第二十三章 初露峥嵘", "第二十四章 显威", "第二十五章 战林枫", "第二十六章 崛起之势",
					"第二十七章 大考落幕",
					"第二十八章 入甲院", "第二十九章 玉灵瀑", "第三十章 开三脉", "第三十一章 立威", "第三十二章 冰火聚源纹", "第三十三章 两女相见", "第三十四章 谋灵瀑", "第三十五章 玉灵瀑之斗",
					"第三十六章 阴招", "第三十七章 双双突破", "第三十八章 黑林山脉", "第三十九章 遇敌", "第四十章 只剩这个了", "第四十一章 玄芒术", "第四十二章 三十六兽开脉纹", "第四十三章 修炼玄芒术",
					"第四十四章 苏幼微的进步", "第四十五章 府试之前", "第四十六章 府试开始", "第四十七章 异样", "第四十八章 下一个", "第四十九章 战柳溪", "第五十章 惊艳全场"
				];
				if (this.num2 === 0) {
					this.num2 = 1
				} else {
					this.num2 = 0
				}
				arr.forEach((item, index) => {
					// console.log(item)
					this.list.push(item)
				})
			},
			goTop: function(e) {
				this.scrollTop = 0
			},
		},
		created() {
			this.addList()
		}
	}
</script>

<style>
	.ok {
		display: none;
	}

	.no {
		display: block;
	}

	.heard {
		height: 150rpx;
		background-color: #8799A3;
		opacity: 0.9;
		/* 透明度,越小越透明 */
		position: fixed;
		width: 100%;
		padding-top: 100rpx;
		z-index: 100;
	}

	.heard-ch1 {
		width: 90%;
		margin-left: 5%;
		font-size: 36rpx;
	}

	.heard-ch1-ch2 {
		margin-left: 85%;
	}


	.chapter {
		background-color: #efd794;
	}

	.body {
		padding-top: 50rpx;
		width: 94%;
		margin-left: 3%;
		height: 100%;
	}


	.title {
		padding-top: 10%;
		font-size: 50rpx;
		text-align: center;
	}

	.context {
		margin-top: 5%;
		font-size: 40rpx;
	}

	p {
		margin-bottom: 5%;
	}

	.footer {
		height: 100rpx;
		background-color: #8799A3;
		position: fixed;
		opacity: 0.9;
		bottom: 0;
		width: 100%;
		z-index: 100;
	}

	.footer-ch1 {
		width: 100%;
		height: 100rpx;
		display: flex;
	}

	.befor,
	.bookList,
	.after {
		width: 33.3%;
		text-align: center;
		line-height: 100rpx;
		font-size: 36rpx;
	}


	.displayList {
		position: fixed;
		top: 0;
		display: flex;
		width: 100%;
		z-index: 9990;
	}

	.displayList-ch1 {
		/* background-color: #FFA200; */
		width: 80%;
	}

	.displayList-ch1-footer-ch>view {
		margin-left: 10%;
	}

	.displayList-ch1-footer-ch {
		border-bottom: 2rpx solid #777777;
		height: 100rpx;
		line-height: 100rpx;
	}

	.displayList-ch2 {
		width: 20%;
		background-color: #3B4144;
		opacity: 0.8;
	}


	.scroll-view {
		flex: 1
	}

	.scroll-view-box {
		flex: 1;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
	}

	/* 	.info {
		padding: 15px;
		color: #666;
	} */

	.close {
		padding: 15px;
	}

	.info-content {
		margin-left: 30rpx;
	}

	.info-content>text {
		line-height: 100rpx;
	}

	.ssss {
		background-color: #efd794;
	}
</style>
