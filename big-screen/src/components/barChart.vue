<template>
    <div class="bar-chart">
        <div ref="chart" style="width:100%;height:100%"></div>
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
    data() {
        return {
            dataAxis: []
        }
    },
    mounted() {
        this.drawChart()
    },
    updated() {
        this.drawChart()
    },
    methods: {
        drawChart() {
            console.log('yData',this.yData.length,this.maxDataNum)
            this.dataAxis = []
            this.yData.map((d,i)=>{
                if(i%2 ==0){
                    this.dataAxis.push(0)
                } else {
                    this.dataAxis.push(this.maxDataNum)
                }
            })
            // var MyCubeRect = echarts.graphic.extendShape({
            //     shape: {
            //         x: 0,
            //         y: 0,
            //         width: 18, //柱宽
            //         zWidth: 11, //阴影折角宽
            //         zHeight: 11, //阴影折角高
            //     },
            //     buildPath: function(ctx, shape) {
            //         const api = shape.api;
            //         const xAxisPoint = api.coord([shape.xValue, 0]);
            //         const p0 = [shape.x, shape.y];
            //         const p1 = [shape.x - shape.width / 2, shape.y];
            //         const p4 = [shape.x + shape.width / 2, shape.y];
            //         const p2 = [xAxisPoint[0] - shape.width / 2, xAxisPoint[1]];
            //         const p3 = [xAxisPoint[0] + shape.width / 2, xAxisPoint[1]];
            //         ctx.moveTo(p0[0], p0[1]); //0
            //         ctx.lineTo(p1[0], p1[1]); //1
            //         ctx.lineTo(p2[0], p2[1]); //2
            //         ctx.lineTo(p3[0], p3[1]); //3
            //         ctx.lineTo(p4[0], p4[1]); //4
            //         ctx.lineTo(p0[0], p0[1]); //0
            //         ctx.closePath();
            //     }
            // });
            // var MyCubeShadow = echarts.graphic.extendShape({
            //     shape: {
            //         x: 0,
            //         y: 0,
            //         width: 18,
            //         zWidth: 11,
            //         zHeight: 11,
            //     },
            //     buildPath: function(ctx, shape) {
            //         const api = shape.api;
            //         const xAxisPoint = api.coord([shape.xValue, 0]);
            //         // const p0 = [shape.x, shape.y];
            //         const p1 = [shape.x - shape.width / 2, shape.y];
            //         const p4 = [shape.x + shape.width / 2, shape.y];
            //         const p6 = [shape.x + shape.width / 2 + shape.zWidth, shape.y - shape.zHeight];
            //         const p7 = [shape.x - shape.width / 2 + shape.zWidth, shape.y - shape.zHeight];
            //         const p3 = [xAxisPoint[0] + shape.width / 2, xAxisPoint[1]];
            //         const p5 = [xAxisPoint[0] + shape.width / 2 + shape.zWidth, xAxisPoint[1] - shape.zHeight];
            //         ctx.moveTo(p4[0], p4[1]); //4
            //         ctx.lineTo(p3[0], p3[1]); //3
            //         ctx.lineTo(p5[0], p5[1]); //5
            //         ctx.lineTo(p6[0], p6[1]); //6
            //         ctx.lineTo(p4[0], p4[1]); //4
            //         ctx.moveTo(p4[0], p4[1]); //4
            //         ctx.lineTo(p6[0], p6[1]); //6
            //         ctx.lineTo(p7[0], p7[1]); //7
            //         ctx.lineTo(p1[0], p1[1]); //1
            //         ctx.lineTo(p4[0], p4[1]); //4
            //         ctx.closePath();
            //     }
            // });
            // echarts.graphic.registerShape('MyCubeRect', MyCubeRect);
            // echarts.graphic.registerShape('MyCubeShadow', MyCubeShadow);
            let chart = this.$refs.chart
            let myChart = echarts.init(chart)
            let options = {
                tooltip: {
                    trigger: 'axis',
                    // position: 'top',
                    // padding: [5, 15],
                    // formatter(params) {
                    //     // if (params.seriesType == 'bar') {
                    //     //     console.log(222,params)
                    //     //     return
                    //     // }
                    //     // if(params.seriesType =='custom') {
                    //         const currentData = params.data;
                    //         let text = '';
                    //         text = `${String(currentData).length>4?(Number(currentData/10000).toFixed(1)+'W'):String(currentData)}`
                    //         return text;
                    //     // }
                    //
                    // },
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
                        rotate: 45
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
                    // axisLabel:{
                    //     formatter:function (value, index) {
                    //         let str = ''
                    //         if(value>10000){
                    //             str = (value/10000).toFixed(1)
                    //         } else {
                    //             str = value
                    //         }
                    //         return str;
                    //     }
                    // },
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