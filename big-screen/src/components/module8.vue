<template>
    <div class="ranking">
		<div class="title">
			<CommonTitle :titleText='titleText' />
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
				titleText: '1月热销产品/常用功能TOP10'
			}
		},
		mounted() {
		},
		methods:{
			
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
	.title{

	}
}
</style>