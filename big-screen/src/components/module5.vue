<template>
    <div class="bar-chart-box">
		<div class=""></div>
		<div>
			<div ref="chart" style="width:100%;height:100%"></div>
		</div>
		
    </div>
</template>

<script>
    export default {
		name: "barChart",
		props: {
			
		},
		data(){
			return{
			}
		},
		mounted() {
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped>
.bar-chart-box{
	width: 894px;
	height: 288px;
	box-sizing: border-box;
	padding-top: 44px;

}
</style>