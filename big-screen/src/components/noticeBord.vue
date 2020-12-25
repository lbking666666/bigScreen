<template>
    <div class="notice-bord">
		<!-- title写在Home中 -->
		<div class="bord-body">
			<div class="bord-user">
				<p class="bold-text">
					<span>{{provinceName||'全国'}}昨日：</span>
				</p>
				<p>外部客户量{{ externalData.addNum }}，较前日
					<span class="font-red" v-if="externalData.lastRate&&String(externalData.lastRate).indexOf('-') >= 0">
						<img src="../assets/img/xiajiang.png" alt="">
						{{fixedNum(externalData.lastRate)}}
					</span>
					<span class="font-green" v-else-if="externalData.lastRate&&String(externalData.lastRate).indexOf('-') == -1">
						<img src="../assets/img/shangsheng.png" alt="">
						{{fixedNum(externalData.lastRate)}}
					</span>
					<span v-else>持平</span>，
				</p>
				<p>较7日均值
					<span class="font-red" v-if="externalData.sevenRate&&String(externalData.sevenRate).indexOf('-') >= 0">
						<img src="../assets/img/xiajiang.png" alt="">
						{{fixedNum(externalData.sevenRate)}}
					</span>
					<span class="font-green" v-else-if="externalData.sevenRate&&String(externalData.sevenRate).indexOf('-') == -1">
						<img src="../assets/img/shangsheng.png" alt="">
						{{fixedNum(externalData.sevenRate)}}
					</span>
					<span v-else>持平</span>，
				</p>
				<p>较上月同期
					<span class="font-red" v-if="externalData.lastMonthRate&&String(externalData.lastMonthRate).indexOf('-') >= 0">
						<img src="../assets/img/xiajiang.png" alt="">
						{{fixedNum(externalData.lastMonthRate)}}
					</span>
					<span class="font-green" v-else-if="externalData.lastMonthRate&&String(externalData.lastMonthRate).indexOf('-') == -1">
						<img src="../assets/img/shangsheng.png" alt="">
						{{fixedNum(externalData.lastMonthRate)}}
					</span>
					<span v-else>持平</span>。
				</p>
				<p>
					外部客户累计量{{externalData.totalNum}}
				</p>
			</div>

			<div class="bord-external">
				<p>内部员工量{{ userData.addNum }}，较前日
					<span class="font-red" v-if="userData.lastRate&&String(userData.lastRate).indexOf('-') >= 0">
						<img src="../assets/img/xiajiang.png" alt="">
						{{fixedNum(userData.lastRate)}}
					</span>
					<span class="font-green" v-else-if="userData.lastRate&&String(userData.lastRate).indexOf('-') == -1">
						<img src="../assets/img/shangsheng.png" alt="">
						{{fixedNum(userData.lastRate)}}
					</span>
					<span v-else>持平</span>，
				</p>
				<p>较7日均值
					<span class="font-red" v-if="userData.sevenRate&&String(userData.sevenRate).indexOf('-') >= 0">
						<img src="../assets/img/xiajiang.png" alt="">
						{{fixedNum(userData.sevenRate)}}
					</span>
					<span class="font-green" v-else-if="userData.sevenRate&&String(userData.sevenRate).indexOf('-') == -1">
						<img src="../assets/img/shangsheng.png" alt="">
						{{fixedNum(userData.sevenRate)}}
					</span>
					<span v-else>持平</span>，
				</p>
				<p>较上月同期
					<span class="font-red" v-if="userData.lastMonthRate&&String(userData.lastMonthRate).indexOf('-') >= 0">
						<img src="../assets/img/xiajiang.png" alt="">
						{{fixedNum(userData.lastMonthRate)}}
					</span>
					<span class="font-green" v-else-if="userData.lastMonthRate&&String(userData.lastMonthRate).indexOf('-') == -1">
						<img src="../assets/img/shangsheng.png" alt="">
						{{fixedNum(userData.lastMonthRate)}}
					</span>
					<span v-else>持平</span>；
				</p>
				<p>
					内部客户累计量{{userData.totalNum}}
				</p>
			</div>
		</div>
    </div>
</template>

<script>
    export default {
		name: "noticeBord",
		props: {
			externalData: {
				type: Object,
				default: () => ({
					lastRate: 0,
					totalNum: 0,
					sevenRate: 0,
					lastMonthRate: 0
				})
			},
			userData: {
				type: Object,
				default: () => ({
					lastRate: 0,
					totalNum: 0,
					sevenRate: 0,
					lastMonthRate: 0
				})
			},
			provinceName:{
				type: String,
				default:'全国'
			}
		},
		data(){
			return{
			}
		},
		mounted() {
			//console.log('userData', this.userData)
		},
		methods:{
			fixedNum(num){
				num = num.toFixed(1)
				if(num){
					let str = (String(num).indexOf('-') >= 0)?String(num).split('-')[1]:num
					
					let backStr =  str +'%'
					
					return backStr
				}
				
			}
		}
	}
</script>

<style lang="less" scoped>
.notice-bord{
	height: 100%;
	width: 100%;
	padding: 12px 29px 0 31px;
	line-height: 28px;
	font-size: 19px;
	text-align: left;
	box-sizing: border-box;
	color: #fff;
	p{
		margin: 0;
		letter-spacing: 1px;
	}
	.font-green{
		color: rgba(136, 215, 253, 1);
		vertical-align: top;
	}
	.font-red{
		color: rgba(106, 243, 152, 1);
		vertical-align: top;
	}
	.bord-user{
		padding-bottom: 5px;
		border-bottom: 2px dashed rgba(98, 255, 254, .3);
		font-size: 18px;
		p{
			font-weight: 400;
			display: flex;
			span{
				display: flex;
				align-items: center;
				img{
					width: 13px;
					height: 18px;
				}
			}
		}
		.bold-text{
			font-weight: 600;
		}
	}
	.bord-external{
		margin-top: 5px;
		font-size: 18px;
		p{
			font-weight: 400;
			display: flex;
			span{
				display: flex;
				align-items: center;
				img{
					width: 13px;
					height: 18px;
				}
			}
		}
	}
}
</style>