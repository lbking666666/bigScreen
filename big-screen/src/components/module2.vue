<template>
	<div class="module2">
		<commonTitle :titleText="titleText"></commonTitle>
		<div style="display:flex;justify-content: space-between;margin-bottom: 20px;">
			<span class="top-title-left">触点</span>
			<span class="top-title-right" >发展量</span>
		</div>
		<div v-for="(item, index) in module2Data">
		<div class="container">
			<div class="title">{{item.chudian}}</div>
			<div class="processyuan" :style="item.xiaogada"></div>
			<div class="process">
				<div :style="item.color" v-bind:style="{width: item.percent+'%'}"></div>
			</div>
			<div class="total">{{String(item.count).length > 4?Number(item.count/10000).toFixed(1)+'万':item.count}}</div>
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
            module2Data: {
				type: Array,
				default: []
			}
		},
		data(){
			return{
				titleText:'各触点发展用户分布',
				color:[
					''
				]
			}
		},
		watch:{
			module2Data(v){
				console.log(v)
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
		background: url("../assets/yaxin/kuang_zuozhong.png");
	}
	.container{
		display: flex;
		justify-content: space-around;
		// float: left;
		width: 100%;
		height: 50px;
		font-size: 14px;
		font-family: PingFangSC-Regular, PingFang SC;
		font-weight: 400;
		color: #FFFFFF;
	}
	.process{
		width: 60%;
		height: 10px;
		background: rgba(136, 215, 253, 0.2);
		border-radius: 7px;
		position: relative;
	}
	.processyuan{
		width: 5px;
		height: 10px;
		background: red;
		border-radius: 50px 0 0 50px;
		position: relative;
    	left: 8px;
	}

	.process div{
		width: 60%;
		height: 10px;
		border-radius: 7px;
		background: linear-gradient(270deg, #FF5353 0%, #FFB378 100%);
	}
	.title{
		width: 20%;
		display: flex;
		justify-content: flex-start;
	}
	.total{
		width: 10%;
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
		margin-left: 5px;


	}
	.top-title-right{
		height: 14px;
		font-size: 14px;
		font-family: PingFangSC-Medium, PingFang SC;
		font-weight: 500;
		color: #88D7FD;
		line-height: 14px;
		text-shadow: 0px 0px 4px rgba(136, 215, 253, 0.6);
		// float: right;
		margin-right: 10px;
	}

</style>
