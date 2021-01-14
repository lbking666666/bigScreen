<template>
    <div class="module-4">
		<div class="title">
			<CommonTitle :titleText='titleText' />
		</div>
		
		<div class="ball-box ball-1">
			<p class="num">{{formatter(dataA)}}</p>
			<p class="name">服务工单数</p>
		</div>
		<div class="ball-box ball-2">
			<p class="num">{{formatter(dataB)}}</p>
			<p class="name">停机量 </p>
		</div>
		<div class="ball-box ball-3">
			<p class="num">{{formatter(dataC)}}</p>
			<p class="name">开机量</p>
		</div>
    </div>
</template>

<script>
	import CommonTitle from './commonTitle'
	import {formatterNumber} from '@/utils/filterNum'
    export default {
		name: "",
		components: {
			CommonTitle
		},
		props: {
			// moduleData: {
			// 	type: Array,
			// 	default: () => ([])
			// }
		},
		data(){
			return{
				titleText: '生产运营情况',
				dataA: 2342,
				dataB: 342423,
				dataC: 43412
			}
		},
		mounted() {
		},
		updated() {
		},
		methods:{
			formatter(val) {
				return formatterNumber(val)
			}
		}
	}
</script>

<style lang="less" scoped>
.module-4{
	box-sizing: border-box;
	width: 460px;
	height: 150px;
	background: url(../assets/yaxin/150h.png) no-repeat;
	background-size: 100% 100%;
	position: relative;
	.title{
		margin-top: 6px;
	}

	.ball-box{
		position: absolute;
		top: 48px;
		width: 110px;
		height: 110px;
		background: url(../assets/yaxin/jifeixinkong.png) no-repeat;
		background-size: cover;
		text-align: center;
		p{
			padding: 0;
			margin: 0;
		}
		&.ball-1{
			left: 30px;
		}
		&.ball-2{
			left: 175px;
		}
		&.ball-3{
			right: 30px;
		}
		.num{
			font-size: 20px;
			padding-top: 35px;
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #FFFFFF;
			line-height: 27px;
		}
		.name{
			font-size: 15px;
			transform: scale(0.6, 0.6);
			font-family: PingFangSC-Medium, PingFang SC;
			font-weight: 500;
			color: #C7FCFC;
		}
	}
}
</style>