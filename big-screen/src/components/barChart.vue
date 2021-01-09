<template>
    <div class="bar-chart">
        <div ref="chart" id="chart" style="width:100%;height:100%"></div>
    </div>
</template>
<script>
let myChart = null
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
    data() {
        return {
            dataAxis: []
        }
    },
    mounted() {
        this.drawChart()
    },
    updated() {
        myChart.dispose();
        this.drawChart()
    },
    methods: {
        drawChart() {
            //console.log('yData',this.yData.length,this.maxDataNum)
            this.dataAxis = []
            this.yData.map((d,i)=>{
                if(i%2 ==0){
                    this.dataAxis.push(0)
                } else {
                    this.dataAxis.push(this.maxDataNum)
                }
            })
            myChart = echarts.getInstanceByDom(document.getElementById('chart')); //有的话就获取已有echarts实例的DOM节点。
                 if (myChart == null) { // 如果不存在，就进行初始化。
                     myChart = echarts.init(document.getElementById('chart'));
                 }
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
                    name: '(人)',
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

                    // nameTextStyle: {
                    //     align: "left"
                    // },
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
                    { // For shadow
                        type: 'bar',
                        itemStyle: {
                            normal: {color: 'rgba(59, 157, 230, 0.1)'},
                        },
                        barWidth:36,
                        data: this.dataAxis,
                        tooltip:{
                            show:false
                        },
                        animation: false,
                        z:1
                    },
                    {
                        type: 'bar',
                        itemStyle: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: '#2FFFF9' //指0%处的颜色
                            }, {
                                offset: 1,
                                color: '#1800FF' //指100%处的颜色
                            }], false)
                        },
                        barGap:'-75%',
                        barWidth: 18,
                        tooltip:{
                            show:true
                        },
                        data: this.yData,
                        z:2
                    },
                    // {
                    //     type: 'custom',
                    //     zlevel: 2,
                    //     renderItem: function(params, api) {
                    //         let location = api.coord([api.value(0), api.value(1)]);
                    //         return {
                    //             type: 'group',
                    //             children: [{
                    //                     type: 'MyCubeRect',
                    //                     shape: {
                    //                         api,
                    //                         xValue: api.value(0),
                    //                         yValue: api.value(1),
                    //                         x: location[0],
                    //                         y: location[1]
                    //                     },
                    //                     style: {
                    //                         fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    //                             offset: 0,
                    //                             color: '#75FFFB' //指0%处的颜色
                    //                         }, {
                    //                             offset: 1,
                    //                             color: '#2151FF' //指100%处的颜色
                    //                         }], false)
                    //                     }
                    //                 },
                    //                 {
                    //                     type: 'MyCubeShadow',
                    //                     shape: {
                    //                         api,
                    //                         xValue: api.value(0),
                    //                         yValue: api.value(1),
                    //                         x: location[0],
                    //                         y: location[1]
                    //                     },
                    //                     style: {
                    //                         fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    //                             offset: 0,
                    //                             color: '#75FFFB' //指0%处的颜色
                    //                         }, {
                    //                             offset: 1,
                    //                             color: '#2151FF' //指100%处的颜色
                    //                         }], false)
                    //                     }
                    //                 }
                    //             ]
                    //         };
                    //     },
                    //     data: this.yData
                    // }
                ]
            };
            myChart.setOption(options)
            window.addEventListener('resize', () => {
                // 自动渲染echarts
                myChart.resize();
            })
        }
    }
}
</script>
<style scoped>
.bar-chart {
    width: 100%;
    height: 100%;
}
</style>