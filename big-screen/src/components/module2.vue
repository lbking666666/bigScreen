<template>
	<div class="module2">
		<commonTitle :titleText="titleText"></commonTitle>
		<div style="margin-top:30px;">
			<span class="top-title-left">触点</span>
			<span class="top-title-right" >发展量</span>
		</div>
		<div style="margin-top: 80px;">
		<div class="container">   
			<div class="title">cB前台</div>
			<div class="process">
				<div v-bind:style="{width: health+'%'}"></div>
			</div>
			<div class="total">{{String(num).length > 4?Number(num/10000).toFixed(1)+'万':num}}</div>
		</div>
		<div class="container">
			<div class="title">大流量APP</div>
			<div class="process1">
				<div v-bind:style="{width: health1+'%'}"></div>
			</div>
			<div class="total">{{String(num1).length > 4?Number(num1/10000).toFixed(1)+'万':num1}}</div>
		</div>
		<div class="container">
			<div class="title">掌沃通</div>
			<div class="process2">
				<div v-bind:style="{width: health2+'%'}"></div>
			</div>
			<div class="total">{{String(num2).length > 4?Number(num2/10000).toFixed(1)+'万':num2}}</div>
		</div>
		<div class="container">
			<div class="title">其他</div>
			<div class="process3">
				<div v-bind:style="{width: health3+'%'}"></div>
			</div>
			<div class="total">{{String(num3).length > 4?Number(num3/10000).toFixed(1)+'万':num3}}</div>
		</div>
		</div>
	</div>
</template>


<script>
	import commonTitle from "./commonTitle";
    export default {
		name: "",
		components:{commonTitle},
		props: {
			
		},
		data(){
			return{
				health :30,
				health1 :50,
				health2 :60,
				health3 :100,
				num:11000,
				num1:11000,
				num2:11000,
				num3:113300,
				titleText:'各触点发展用户分布'
			}
		},
		mounted() {
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped>
	.module2{
		width: 100%;
		height: 323px;
		padding:8px;
		background: url("../assets/yaxin/kuang_zuozhong.png");
	}
	.container{
		display: flex;
		justify-content: space-around;
		// float: left;
		width: 100%;
		height: 50px;
		padding:0 20px;
		font-size: 14px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
	}
	.process{
		width: 50%;
		height: 10px;
		background: rgba(136, 215, 253, 0.2);
		border-radius: 7px;
		position: relative;
	}
	.process:before{
		content: '';
		position: absolute;
		top: 0;
		left: -8px;
		width: 5px;
		height: 10px;
		background: #FFB278;
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	.process1{
		width: 50%;
		height: 10px;
		background: rgba(136, 215, 253, 0.2);
		border-radius: 7px;
		position: relative;
	}
	.process1:before{
		content: '';
		width: 5px;
		height: 10px;
		background: #78A5FF;
		position: absolute;
		top: 0;
		left: -8px;
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	.process2{
		width: 50%;
		height: 10px;
		background: rgba(136, 215, 253, 0.2);
		border-radius: 7px;
		position: relative;
	}
	.process2:before{
		content: '';
		position: absolute;
		top: 0;
		left: -8px;
		width: 5px;
		height: 10px;
		background: #75F0C2;
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	.process3{
		width: 50%;
		height: 10px;
		background: rgba(136, 215, 253, 0.2);
		border-radius: 7px;
		position: relative;
	}
	.process3:before{
		content: '';
		position: absolute;
		top: 0;
		left: -8px;
		width: 5px;
		height: 10px;
		background: #2CC9FF;
		border-top-left-radius: 10px;
		border-bottom-left-radius: 10px;
	}
	.process div{
		width: 50%;
		height: 10px;
		border-radius: 7px;
		background: linear-gradient(270deg, #FF5353 0%, #FFB378 100%);
	}
	.process1 div{
		width: 50%;
		height: 10px;
		border-radius: 7px;
		background: linear-gradient(270deg, #8153FF 0%, #78A5FF 100%);
	}
	.process2 div{
		width: 50%;
		height: 10px;
		border-radius: 7px;
		background: linear-gradient(270deg, #49CCEF 0%, #75F0C2 100%);
	}
	.process3 div{
		width: 50%;
		height: 10px;
		border-radius: 7px;
		background: linear-gradient(270deg, #376CDE 0%, #2CC9FF 100%);
	}
	.title{
		width: 77px;
		display: flex;
		margin-right:16px;
		justify-content: flex-start;
	}
	.total{
		width: 101px;
		// float: left;
	}
	.top-title-left{
		height: 14px;
		font-size: 14px;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #88D7FD;
		line-height: 14px;
		text-shadow: 0px 0px 4px rgba(136, 215, 253, 0.6);
		float: left;
		margin-left: 20px;
	}
	.top-title-right{
		height: 14px;
		font-size: 14px;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #88D7FD;
		line-height: 14px;
		text-shadow: 0px 0px 4px rgba(136, 215, 253, 0.6);
		float: right;
		margin-right: 20px;
		width:100px;
	}
	
</style>