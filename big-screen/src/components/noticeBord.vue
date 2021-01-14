<template>
    <div class="notice-bord">
		<!-- title写在Home中 -->
		<div class="bord-body">
			<div class="bord-user">
				<p class="bold-text">
					<span>{{provinceName||'全国'}}昨日：</span>
				</p>
				<p>外部客户量{{ externalData.distinctAddNum }}，较前日
					<span class="font-red" v-if="externalData.distinctLastRate&&String(externalData.distinctLastRate).indexOf('-') >= 0">
						<img src="../assets/img/xiajiang.png" alt="">
						{{fixedNum(externalData.distinctLastRate)}}
					</span>
					<span class="font-green" v-else-if="externalData.distinctLastRate&&String(externalData.distinctLastRate).indexOf('-') == -1">
						<img src="../assets/img/shangsheng.png" alt="">
						{{fixedNum(externalData.distinctLastRate)}}
					</span>
					<span v-else>持平</span>，
				</p>
				<p>较7日均值
					<span class="font-red" v-if="externalData.distinctSevenRate&&String(externalData.distinctSevenRate).indexOf('-') >= 0">
						<img src="../assets/img/xiajiang.png" alt="">
						{{fixedNum(externalData.distinctSevenRate)}}
					</span>
					<span class="font-green" v-else-if="externalData.distinctSevenRate&&String(externalData.distinctSevenRate).indexOf('-') == -1">
						<img src="../assets/img/shangsheng.png" alt="">
						{{fixedNum(externalData.distinctSevenRate)}}
					</span>
					<span v-else>持平</span>，
					较上月同期
					<span class="font-red" v-if="externalData.distinctLastMonthRate&&String(externalData.distinctLastMonthRate).indexOf('-') >= 0">
						<img src="../assets/img/xiajiang.png" alt="">
						{{fixedNum(externalData.distinctLastMonthRate)}};
					</span>
					<span class="font-green" v-else-if="externalData.distinctLastMonthRate&&String(externalData.distinctLastMonthRate).indexOf('-') == -1">
						<img src="../assets/img/shangsheng.png" alt="">
						{{fixedNum(externalData.distinctLastMonthRate)}};
					</span>
					<span v-else>持平</span>;
				</p>
				<p>
					外部客户累积量{{externalData.distinctTotalNum}}，重复占比数据
					<span class="font-red" v-if="externalData.duplicateRate&&String(externalData.duplicateRate).indexOf('-') >= 0">
						{{fixedNum(externalData.duplicateRate)}};
					</span>
					<span class="font-green" v-else-if="externalData.duplicateRate&&String(externalData.duplicateRate).indexOf('-') == -1">
						{{fixedNum(externalData.duplicateRate)}};
					</span>
					<span v-else>0</span>
				</p>
			</div>

			<div class="bord-external">
				<p>内部员工量{{ userData.distinctAddNum }}，较前日
					<span class="font-red" v-if="userData.distinctLastRate&&String(userData.distinctLastRate).indexOf('-') >= 0">
						<img src="../assets/img/xiajiang.png" alt="">
						{{fixedNum(userData.distinctLastRate)}}
					</span>
					<span class="font-green" v-else-if="userData.distinctLastRate&&String(userData.distinctLastRate).indexOf('-') == -1">
						<img src="../assets/img/shangsheng.png" alt="">
						{{fixedNum(userData.distinctLastRate)}}
					</span>
					<span v-else>持平</span>，
				</p>
				<p>较7日均值
					<span class="font-red" v-if="userData.distinctSevenRate&&String(userData.distinctSevenRate).indexOf('-') >= 0">
						<img src="../assets/img/xiajiang.png" alt="">
						{{fixedNum(userData.distinctSevenRate)}}
					</span>
					<span class="font-green" v-else-if="userData.distinctSevenRate&&String(userData.distinctSevenRate).indexOf('-') == -1">
						<img src="../assets/img/shangsheng.png" alt="">
						{{fixedNum(userData.distinctSevenRate)}}
					</span>
					<span v-else>持平</span>，
					较上月同期
					<span class="font-red" v-if="userData.distinctLastMonthRate&&String(userData.distinctLastMonthRate).indexOf('-') >= 0">
						<img src="../assets/img/xiajiang.png" alt="">
						{{fixedNum(userData.distinctLastMonthRate)}}
					</span>
					<span class="font-green" v-else-if="userData.distinctLastMonthRate&&String(userData.distinctLastMonthRate).indexOf('-') == -1">
						<img src="../assets/img/shangsheng.png" alt="">
						{{fixedNum(userData.distinctLastMonthRate)}}
					</span>
					<span v-else>持平</span>
				</p>
				<p>
					内部员工累积量{{userData.distinctTotalNum}}
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
					distinctAddNum: 0,
					distinctLastRate: 0,
					distinctTotalNum: 0,
					distinctSevenRate: 0,
					distinctLastMonthRate: 0,
					duplicateRate: 0,
				})
			},
			userData: {
				type: Object,
				default: () => ({
					distinctAddNum: 0,
					distinctLastRate: 0,
					distinctTotalNum: 0,
					distinctSevenRate: 0,
					distinctLastMonthRate: 0
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
		padding-bottom: 14px;
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
		margin-top: 14px;
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