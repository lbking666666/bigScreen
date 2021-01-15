<template>
    <div class="charts-wrapper">
        <div class="title-box">
            <commonTitle :titleText="titleText"></commonTitle>
        </div>
        
        <div class="line-chart">
            <div ref="chart" style="width:100%;height:100%"></div>
        </div>
    </div>
</template>
<script>
import * as echarts from "echarts";
import commonTitle from "./commonTitle";
export default {
    name: "mixChart",
    components: { commonTitle },
    props: {
        color: {
            type: String,
            default: '#B085FF',
        },
        code:{
            type:Number,
            default:0
        },
        moduleData: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            titleText: '订单量',
            flag: 0,
            xAxisData: [], // x轴坐标
            seriesData: [], // 显示点数值
            myChart: null
        }
    },
    mounted() {
        this.drawChart()
    },
    updated() {
        this.drawChart()
    },
    methods: {
        dealData(arr) {
            // 清空
            this.xAxisData = []
            this.seriesData = []
            if (arr.length > 0) {
                arr.forEach(ele => {
                    this.xAxisData.push(ele.date)
                    this.seriesData.push(Number(ele[this.code]))
                })
            }
        },
        drawChart() {
            let vm = this
            // 添加销毁chart判断，避免重复绘制chart dom报错
           /* if (vm.myChart) {
                vm.myChart.dispose()
            }*/
            // if (this.moduleData.length > 0) {
            //     this.dealData(this.moduleData[this.flag].value)
            // }
            console.log('this.moduleData111',this.moduleData)
            this.dealData(this.moduleData)
            let chart = this.$refs.chart
            vm.myChart = echarts.init(chart)
            let options = {
                xAxis: {
                    type: 'category',
                    name: '单位:万',
                    nameLocation: 'start',
                    nameTextStyle:{
                        color:'rgba(169, 240, 255, 0.8)'
                    },
                    nameGap: 25,
                    boundaryGap: false,
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0)', 'rgba(59, 157, 230, 0.16)']
                        }
                    },
                    axisLabel: {
                        rotate: 45,
                        fontSize: 12,
                        interval: 0,
                        color: '#01B4FF'
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(42, 244, 255, 0.08)'
                        }
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            color: ['rgba(98, 255, 254, 0.12)'],
                            width: 1,
                            type: 'solid'
                        }
                    },
                    axisTick: {
                        show:false,
                        alignWithLabel: true
                    },
                    data: this.xAxisData
                },
                tooltip: {
                    show: true,
                    trigger: 'item', 
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    textStyle: {
                        color: '#fff',
                        fontSize: 14,
                        fontWeight: 600
                    },

                    borderWidth: 0,
                    formatter: function(params) {
                        let dateStr = vm.moduleData[params.dataIndex].date
                        let nums = (String(params.value).length > 4) ? (Number(params.value / 10000).toFixed(1) + 'W') : String(params.value)

                        return dateStr + '<br>' + '订单量: ' + nums
                    }

                },
                yAxis: {
                    type: 'value',
                    show: true,

                    axisLabel: {
                        formatter: function(value, index) {
                            let str = ''
                            if (value > 10000 && value < 10000000) {
                                str = (value / 10000).toFixed(1) + 'w'
                            } else if (value >= 10000000) {
                                str = (value / 10000000).toFixed(1) + 'kw'
                            } else {
                                str = value
                            }
                            // str = (value / 10000).toFixed(1)
                            return str;
                            // return value
                        },
                        color: '#01B4FF'
                    },
                    axisLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(42, 244, 255, 0.08)'
                        }
                    },
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: ['rgba(98, 255, 254, 0.12)'],
                            width: 1,
                            type: 'solid'
                        }
                    },
                },
                grid: {
                    left: '8%',
                    right: '4%',
                    bottom: '3%',
                    top: '5%',
                    containLabel: true
                },
                series: [{
                    data: this.seriesData,
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 5,
                    itemStyle: {
                        color: this.color,
                        borderColor: "rgba(107, 74, 251, 0.5)",
                        borderWidth: 10,
                        borderType: 'solid'
                    },
                    lineStyle: {
                        color: 'rgba(134, 108, 245, 1)'
                    },
                }]
            }
            vm.myChart.setOption(options)
            window.addEventListener("resize", () => { vm.myChart.resize(); });
        },
        selExternal(type) {
            this.flag = type
        }
    }
}
</script>
<style scoped lang='less'>
.charts-wrapper {
    width: 100%;
    height: 230px;
    background: url(../assets/yaxin/kuang_dingdanliang.png) no-repeat;
    background-size: 100% 100%;
    .title-box{
        padding-top: 7px;
    }
}

.line-chart {
    width: 100%;
    position: relative;
    height: calc(100% - 40px);
}
</style>