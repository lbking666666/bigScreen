<template>
    <div class="ranking">
		<div class="title">
			<CommonTitle :titleText='titleText' />
		</div>
		<div class="tab-box">
			<div class="tab-item" :class="tabIndex===0 ? 'active' : ''" @click="tabChange(0)">热销产品</div>
			<div class="tab-item" :class="tabIndex===1 ? 'active' : ''" @click="tabChange(1)">常用功能</div>
		</div>
    </div>
</template>

<script>
	import CommonTitle from './commonTitle'
    export default {
		name: "",
		components: {
			CommonTitle
		},
		props: {
			
		},
		data(){
			return{
				titleText: '1月热销产品/常用功能TOP10',
				tabIndex: 0, // 0: 热销产品； 1: 常用功能；
			}
		},
		mounted() {
		},
		methods:{
			tabChange (tab) {
				this.tabIndex = tab
			}
		}
	}
</script>

<style lang="less" scoped>
.ranking{
	box-sizing: border-box;
	width: 460px;
	height: 500px;
	background: url(../assets/yaxin/kuang_zuozhong.png) no-repeat;
	background-size: 100% 100%;
	padding-top: 44px;
	position: relative;
	.title{
		position: absolute;
		width: 100%;
		top: 8px;
		left: 0;
	}
	.tab-box{
		position: absolute;
		top: 46px;
		left: 80px;
		width: 300px;
		height: 30px;
		overflow: hidden;
		border-radius: 15px;
		border: 1px solid #3A66D0;
		display: flex;
		.tab-item{
			position: absolute;
			width: 150px;
			line-height: 30px;
			font-size: 14px;
			font-family: PingFangSC-Semibold, PingFang SC;
			font-weight: 600;
			color: #C7FCFC;
			text-align: center;
			&:first-child{
				top: 0;
				left: 0;
			}
			&:last-child{
				top: 0;
				right: 0;
			}
			&.active{
				// border: 1px solid #3A66D0;
				box-shadow: 8px 8px 11px 0px rgba(66, 157, 249, 0.5), -8px -8px 11px 0px rgba(63, 176, 236, 0.33);
			}
		}
	}
}
</style>