<template>
    <div class="ranking">
		<!-- title在Home中 -->
		<div class="ranking-header">
			<div class="order-number">序号</div>
			<div class="province">省分</div>
			<div class="month-increase">近30天客户涨量(人)</div>
			<div class="last-month-increase">上30天客户涨量(人)</div>
			<div class="growth-rate">增幅</div>
		</div>
		<div class="ranking-body">
			<div class="rank-item" v-for="(item, index) in rankingList" :key="index">
				<div class="order-number" v-if="index >= 3">{{String(index+1)}}</div>
				<div class="order-number" v-else><i class="index-icon" :class="`icon-${index}`"></i></div>
				<div class="province">{{(item.areaName =='中国'?'总部':item.areaName)}}</div>
				<div class="month-increase">{{formatterNumber(item.monthExternalNum)}}</div>
				<div class="last-month-increase">{{formatterNumber(item.lastMonthExternalNum)}}</div>
				<div class="growth-rate">{{item.rate.toFixed(0)}}%</div>
			</div>
		</div>
    </div>
</template>

<script>
    export default {
		name: "ranking",
		props: {
			rankingList: {
				type: Array,
				default: () => ([])
			}
		},
		data(){
			return{
			}
		},
		mounted() {
		},
		methods:{
			formatterNumber(number){
				let num = (number || 0).toString(),
						result = '';
				//判断是否带小数点
				if (num.split('.')[1]) {
					let numInt = num.split('.')[0],
							numFlo = num.split('.')[1];
					result = formatter(numInt) + '.' + numFlo
				} else {
					result = formatter(num);
				}
				return result;
				function formatter(numInt) {
					let resultInt = '';
					while (numInt.length > 3) {
						resultInt = ',' + numInt.slice(-3) + resultInt;
						numInt = numInt.slice(0, numInt.length - 3);
					}
					if (numInt) {
						resultInt = numInt + resultInt;
					}
					return resultInt;
				}
			}
		}
	}
</script>

<style lang="less" scoped>
.ranking{
    height: 100%;
	width: 100%;
	text-align: left;
	box-sizing: border-box;
	color: #fff;
	font-size: 14px;
	padding: 0 31px 0 30px;
	.ranking-header{
		line-height: 39px;
		margin-top: 1px;
		color: #01FFFF;
		font-weight: 500;
		text-shadow: 0px 1px 3px #01FFFF;
		display: flex;
	}
    .ranking-body{
		text-align: center;
		.rank-item{
			height: 34px;
			line-height: 34px;
			margin-top: 9px;
			display: flex;
			&:first-child{
				margin-top: 0;
			}
			&:nth-child(1),
			&:nth-child(2),
			&:nth-child(3){
				margin-top: 14px;
				position: relative;
				&:before{
					content: '';
					position: absolute;
					width: 100%;
					height: 100%;
					top: 0;
					left: 0;
					opacity: 0.4;
				}
				&:after{
					content: '';
					position: absolute;
					top: 0;
					left: 0;
					width: 3px;
					height: 34px;
				}
			}
			&:nth-child(1){
				&:before{
					background: linear-gradient(90deg, rgba(255, 243, 60, 0.59) 0%, rgba(0, 184, 252, 0) 100%);
				}
				&:after{
					background: #FFDA3C;
				}
			}
			&:nth-child(2){
				&:before{
					background: linear-gradient(90deg, rgba(234, 236, 243, 0.5) 0%, rgba(0, 184, 252, 0) 100%);
				}
				&:after{
					background: #EAECF3;
				}
			}
			&:nth-child(3) {
				&:before {
					background: linear-gradient(90deg, rgba(215, 165, 56, 0.51) 0%, rgba(0, 184, 252, 0) 100%);
				}
				&:after {
					background: #D7A538;
				}
			}
			.growth-rate{
				color: #75EF9E;
			}
		}
	}
	.order-number{
		width: 40px;
		text-align: center;
		.index-icon{
			display: inline-block;
			width: 20px;
			height: 15px;
			vertical-align: text-top;
			&.icon-0{
				background: url('../assets/img/diyi.png') no-repeat;
				background-size: contain;
			}
			&.icon-1{
				background: url('../assets/img/dier.png') no-repeat;
				background-size: contain;
			}
			&.icon-2{
				background: url('../assets/img/disan.png') no-repeat;
				background-size: contain;
			}
		}
	}
	.province{
		width: 62px;
		text-align: center;
	}
	.month-increase{
		width: 140px;
		text-align: center;
	}
	.last-month-increase{
		width: 140px;
		text-align: center;
	}
	.growth-rate{
		width: 65px;
		text-align: right;
	}
}
</style>