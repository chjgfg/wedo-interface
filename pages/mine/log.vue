<template>
	<view class="log">
		<view class="heard">
			<view class="heard-ch1" :class="changenum === 0 ? 'ok' : 'no'">
				<view class="heard-ch1-ch1">
					<input type="number" placeholder="手机号" @input="inputIt" :maxlength='11' />
				</view>
				<view class="heard-ch1-ch2">
					<input type="number" placeholder="验证码" class="input" :maxlength='6' @input="inputIt2" />
					<view class="text" :class=" num === 0 ? 'none' : 'red' ">获取验证码</view>
				</view>
				<view class="btn">
					<view class="btn-ch1">
						<button type="primary" class="btn-ch1-ch1" @tap="ok">登录</button>
					</view>
				</view>
				<view class="msg">
					<view class="msg-ch1" @tap="change">账号密码登录</view>
				</view>
			</view>

			<view class="heard-ch2" :class="changenum === 1 ? 'ok' : 'no'">
				<view class="heard-ch1-ch1">
					<input type="number" placeholder="手机号/账号" @input="inputIt" :maxlength='11' />
				</view>
				<view class="heard-ch1-ch2">
					<input type="password" placeholder="密码" class="input password" :maxlength='12' @input="inputIt2" />
				</view>
				<view class="btn">
					<view class="btn-ch1">
						<button type="primary" class="btn-ch1-ch1" @tap="ok">登录</button>
					</view>
				</view>
				<view class="msg">
					<view class="msg-ch1" @tap="change">手机号快捷登录</view>
				</view>
			</view>

		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num: 0,
				changenum: 0,
				first: "",
				second: ""
			}
		},
		methods: {
			change() {
				if (this.changenum === 0) {
					this.changenum = 1
				} else {
					this.changenum = 0
				}
			},
			inputIt(e) {
				console.log(e.detail.value)
				if (e.detail.value.length === 11) {
					this.num = 1;
					this.first = e.detail.value
				}
			},
			inputIt2(e) {
				this.second = e.detail.value
				console.log(e.detail.value)
			},
			ok(){
				console.log(this.first + "---" + this.second)
			}
		},
	}
</script>

<style>
	.log {
		width: 94%;
		margin-left: 3%;
	}

	.heard {
		margin-top: 30%;
	}

	.heard-ch1,
	.heard-ch2 {
		width: 80%;
		margin-left: 10%;
	}

	.heard-ch2 {
		display: none;
	}

	.heard-ch1-ch1 {
		height: 60rpx;
		border-bottom: 1rpx solid #dddddd;
	}

	.heard-ch1-ch2 {
		border-bottom: 1rpx solid #dddddd;
		display: flex;
		flex-direction: row;
		height: 100rpx;
	}

	.input {
		width: 70%;
		margin-top: 5%;
		line-height: 100rpx;
	}

	.text {
		width: 30%;
		margin-top: 5%;
		height: 40rpx;
	}

	.btn {
		margin-top: 10%;
		height: 220rpx;
	}

	.btn-ch1 {
		height: 90rpx;
	}

	.btn-ch1-ch1 {
		height: 90rpx;
		border-radius: 0.5em;
	}

	.red {
		color: #FF0000;
	}

	.msg {
		width: 100%;
	}

	.msg-ch1 {
		font-size: 26rpx;
		color: #0081FF;
		text-align: center;
	}

	.password {
		width: 100%;
	}

	.ok {
		display: block;
	}

	.no {
		display: none;
	}
</style>
