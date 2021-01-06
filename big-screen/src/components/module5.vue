<template>
    <div class="bar-chart-box">
		<div class="header-box">
			{{titleText}}
		</div>
		<div class="chart-out-box">
			<div class="shadow"></div>
			<div ref="chart" style="width:100%;height:100%"></div>
		</div>
		
    </div>
</template>

<script>
	import * as echarts from 'echarts'

    export default {
		name: "barChart",
		components: {
		},
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
				vm.xData.push('')
				vm.yDataA.push(0)
				vm.yDataB.push(0)
				data.forEach(el => {
					vm.xData.push(el.areaName)
					vm.yDataA.push(el.number)
					vm.yDataB.push(el.arpu)
				})
				vm.xData.push('')
				vm.yDataA.push(0)
				vm.yDataB.push(0)
			},
			drawChart() {
				let chart = this.$refs.chart
				let myChart = echarts.init(chart)
				let options = {
					title: {
						text: '单位：万户',
						top: '14px',
						textStyle: {
							color: '#A9F0FF',
							fontWeight: 400,
							fontSize: 12
						}
					},
					tooltip: {
						trigger: 'axis',
						axisPointer: {
							type: "none"
						},
						formatter: function (params, ticket, callback) {
							let str = params[0].data>10000?(params[0].data/10000).toFixed(1)+'W':params[0].data+''
							if(params[0].name === ''){
								return ''
							}else{
								return str
							}
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
						data: ['用户数', 'arpu值'],
						right: '40px',
						top: '13px',
						textStyle: {
							color: '#A9F0FF'
						}
					},
					grid: {
						left: '34px',
						right: '40px',
						bottom: '6px',
						containLabel: true
					},
					xAxis: [{
						type: 'category',
						name: '',
						nameLocation: "start",
						data: this.xData,
						axisLine: {
							lineStyle: {
								color: '#01B4FF'
							}
						},
						axisLabel: {
							fontWeight: 'lighter',
							fontSize: '12px',
							interval: 0,
							formatter: (val) => {
								let str = val.split('')
								return str.join('\n')
							}
						},
						axisTick: {
							show: false
						},
						offset: 2,
						boundaryGap: ['20%', '20%']
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
							show: false,
							lineStyle: {
								color: '#01B4FF'
							}
						},
						splitLine: {
							show: false
						},
					}],
					series: [
						{
							type: 'bar',
							name: '用户数',
							itemStyle: {
								color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
										offset: 0,
										color: '#23BAFC' //指0%处的颜色
									}, {
										offset: 1,
										color: '#315DFF' //指100%处的颜色
									}], false),
								barBorderRadius: [2, 2, 0, 0]
							},
							barGap: 0,
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
									}], false),
								barBorderRadius: [2, 2, 0, 0]
							},
							barGap: 0,
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
	background: url(../assets/yaxin/kuang_zhongjian.png) no-repeat;
	background-size: contain;
	.header-box{
		position: absolute;
		width: 100%;
		text-align: center;
		top: 8px;
		left: 0;
		line-height: 36px;
		height: 36px;
        font-size: 20px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 36px;
        letter-spacing: 1px;
        text-shadow: 0px 2px 4px #0B63C9;
	}
	.chart-out-box{
		width:100%;
		height:100%;
		position: relative;
		.shadow{
			position: absolute;
			width: 782px;
			height: 200px;
			bottom: 0;
			left: 72px;
			background: rgba(98, 226, 255, 0.2);
			opacity: 0.2;
		}
	}
}
</style>