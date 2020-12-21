<template>
    <div class="line-chart">
        <div ref="chart" style="width:100%;height:100%"></div>
    </div>
</template>

<script>
    import * as echarts from "echarts";

    export default {
        name: "lineChart",
        props:{
            color:{
                type:String,
                default: '#fff',
            },
            xData:{
                type: Array,
                default: []
            },
            yData:{
                type: Array,
                default: []
            },
        },
        data(){
            return{

            }
        },
        mounted() {
            this.drawChart()
        },
        updated() {
            this.drawChart()
        },
        methods:{
            drawChart() {
                let chart = this.$refs.chart
                let myChart = echarts.init(chart)
                let options = {
                    xAxis: {
                        type: 'category',
                        boundaryGap: false,
                        axisLine:{
                            lineStyle:{
                                color:'#2EB2B3'
                            }
                        },
                        axisLabel:{
                            rotate: 45
                        },
                        name: '(人)',
                        nameLocation: 'start',
                        data: this.xData
                    },
                    tooltip:{
                        show:true,
                        // trigger: 'item',
                        // position: 'top',
                        // padding: [5, 15],
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        // backgroundColor:'rgba(77, 237, 242, 0.2)',
                        // backgroundColor: this.color,
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                            fontWeight: 600
                        },
                        borderWidth: 0,
                        formatter: function(params) {
                            let nums = (String(params.value).length>4)?(Number(params.value/10000).toFixed(1)+'W'):String(params.value)

                            console.log(nums)
                            return nums
                        }
                        
                    },
                    yAxis: {
                        type: 'value',
                        show:true,
                        axisLine:{
                            show:true,
                            lineStyle:{
                                color:'#2EB2B3'
                            }
                        },
                        splitLine: {
                            show: true,
                            lineStyle:{
                                color: ['rgba(98, 255, 254, 0.12)'],
                                width: 1,
                                type: 'solid'
                            }
                        },
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    series: [{
                        data: this.yData,
                        type: 'line',
                        smooth: true,
                        symbol: 'circle',
                        symbolSize: 8,
                        itemStyle: {
                            normal: {
                                color: this.color,
                                borderColor: "#fff",
                                borderWidth: 2,
                                borderType: 'solid'
                            }
                        },
                        lineStyle:{
                            color: this.color
                        },
                        areaStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: this.color,
                            }, {
                                offset: 1,
                                color: this.color.replace('1)','0.1)'),
                            }])
                        },
                    }]
                }
                myChart.setOption(options)
            }
        }
    }
</script>

<style scoped>
    .line-chart{
        width: 100%;
        height: 100%;
    }
</style>