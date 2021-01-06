<template>
    <div class="bar-chart-box">
		<div class="header-box"></div>
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
			xData: {
				type: Array,
				default: []
			},
			yData: {
				type: Array,
				default: []
			},
			maxDataNum: {
				type: Number,
				default: 0
			}
		},
		data(){
			return{
				dataAxis: []
			}
		},
		mounted() {
		},
		methods:{
			drawChart() {
				this.dataAxis = []
				this.yData.map((d,i)=>{
					if(i%2 ==0){
						this.dataAxis.push(0)
					} else {
						this.dataAxis.push(this.maxDataNum)
					}
				})
				
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
							// rotate: 45
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
							itemStyle: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
									offset: 0,
									color: '#23BAFC' //指0%处的颜色
								}, {
									offset: 1,
									color: '#315DFF' //指100%处的颜色
								}], false)
							},
							barGap:'-75%',
							barWidth: 18,
							tooltip:{
								show:true
							},
							data: this.yData
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
	position: relative;
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