<template>
    <div class="bar-chart-box">
		<div class="header-box">
			<commonTitle :titleText="titleText"></commonTitle>
		</div>
		<div class="chart-out-box">
			<div ref="chart" style="width:100%;height:100%"></div>
		</div>
		
    </div>
</template>

<script>
	import * as echarts from 'echarts'

    export default {
		name: "barChart",
		 props: {
			module5Data: {
				type: Array,
				default: []
			}
		},
		data(){
			return{
				titleText: '全国31省用户量/arpu值',
				dataAxis: [], // 
				xData: [],
				yDataA: [], // 柱状图 用户量
				yDataB: [], // 柱状图 arpu值
				maxDataNum: 0
			}
		},
		mounted() {
			console.log('create', this.module5Data)
			this.transData(this.module5Data)
        	this.drawChart()
		},
		updated() {
			console.log('update', this.module5Data)
			this.transData(this.module5Data)
			this.drawChart()
		},
		methods:{
			transData(data) {
				let vm = this
				// 清空所有数据
				vm.xData = []
				vm.yDataA = []
				vm.yDataB = []
				data.forEach(el => {
					vm.xData.push(el.areaName)
					vm.yDataA.push(el.number)
					vm.yDataB.push(el.arpu)
				})
			},
			drawChart() {
				let chart = this.$refs.chart
				let myChart = echarts.init(chart)
				let options = {
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: "none"
						},
						formatter: function (params, ticket, callback) {
							let str = params[0].data>10000?(params[0].data/10000).toFixed(1)+'W':params[0].data+''
							return str;
						},
						borderColor:'rgba(50,50,50,0.7)',
						borderWidth: 0,
						backgroundColor: 'rgba(50,50,50,0.7)',
						textStyle: {
							color: '#fff',
							fontSize: 14,
							fontWeight: 600
						},
					},
					legend: {
						data: ['用户量', 'arpu值']
					},
					grid: {
						left: '3%',
						right: '4%',
						bottom: '3%',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						name: '',
						nameLocation: "start",
						data: this.xData,
						axisLine: {
							lineStyle: {
								color: '#2EB2B3'
							}
						},
						axisLabel: {
							interval: 0,
							formatter: (val) => {
								let str = val.split('')
								return str.join('\n')
							}
						},
						axisTick: {
							alignWithLabel: true
						}
					}],
					yAxis: [{
						type: 'value',
						show: true,
						axisLabel:{
							formatter:function (value, index) {
								let str = ''
								if(value>10000){
									str = (value/10000).toFixed(1) + 'w'
								} else {
									str = value
								}
								return str;
							}
						},
						axisLine: {
							show: true,
							lineStyle: {
								color: '#2EB2B3'
							}
						},
						splitLine: {
							show: true,
							lineStyle: {
								color: ['#2EB2B3'],
								width: 1,
								type: 'solid'
							}
						},
					}],
					series: [
						{
							type: 'bar',
							name: '用户量',
							itemStyle: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: '#23BAFC' //指0%处的颜色
								}, {
									offset: 1,
									color: '#315DFF' //指100%处的颜色
								}], false)
							},
							// barGap:'-75%',
							barWidth: 8,
							tooltip:{
								show:true
							},
							data: this.yDataA
						},
						{
							type: 'bar',
							name: 'arpu值',
							itemStyle: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: '#7EEEE5' //指0%处的颜色
								}, {
									offset: 1,
									color: '#67C2C2' //指100%处的颜色
								}], false)
							},
							// barGap:'-75%',
							barWidth: 8,
							tooltip:{
								show:true
							},
							data: this.yDataB
						}
					]
				};
				myChart.setOption(options)
				window.addEventListener('resize', () => {
					// 自动渲染echarts
					myChart.resize()
				})
			}
		}
	}
</script>

<style lang="less" scoped>
.bar-chart-box{
	width: 894px;
	height: 288px;
	box-sizing: border-box;
	padding-top: 44px;
	position: absolute;
	top: 676px;
	left: 0;
	.header-box{
		position: absolute;
		top: 8px;
		left: 0;
	}
	.chart-out-box{
		width:100%;
		height:100%;
	}
}
</style>