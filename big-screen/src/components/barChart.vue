<template>
    <div class="bar-chart">
        <div ref="chart" style="width:100%;height:100%"></div>
    </div>
</template>

<script>
    import * as echarts from 'echarts'
    export default {
        name: "barChart",
        data(){
            return{
                dataAxis:[]
            }
        },
        mounted() {
            this.drawChart()
        },
        methods:{

            drawChart(){
                var MyCubeRect = echarts.graphic.extendShape({
                    shape: {
                        x: 0,
                        y: 0,
                        width: 18, //柱宽
                        zWidth: 11, //阴影折角宽
                        zHeight: 11, //阴影折角高
                    },
                    buildPath: function (ctx, shape) {
                        const api = shape.api;
                        const xAxisPoint = api.coord([shape.xValue, 0]);
                        const p0 = [shape.x, shape.y];
                        const p1 = [shape.x - shape.width / 2, shape.y];
                        const p4 = [shape.x + shape.width / 2, shape.y];
                        const p2 = [xAxisPoint[0] - shape.width / 2, xAxisPoint[1]];
                        const p3 = [xAxisPoint[0] + shape.width / 2, xAxisPoint[1]];
                        ctx.moveTo(p0[0], p0[1]); //0
                        ctx.lineTo(p1[0], p1[1]); //1
                        ctx.lineTo(p2[0], p2[1]); //2
                        ctx.lineTo(p3[0], p3[1]); //3
                        ctx.lineTo(p4[0], p4[1]); //4
                        ctx.lineTo(p0[0], p0[1]); //0
                        ctx.closePath();
                    }
                });
                var MyCubeShadow = echarts.graphic.extendShape({
                    shape: {
                        x: 0,
                        y: 0,
                        width: 18,
                        zWidth: 11,
                        zHeight: 11,
                    },
                    buildPath: function (ctx, shape) {
                        const api = shape.api;
                        const xAxisPoint = api.coord([shape.xValue, 0]);
                        // const p0 = [shape.x, shape.y];
                        const p1 = [shape.x - shape.width / 2, shape.y];
                        const p4 = [shape.x + shape.width / 2, shape.y];
                        const p6 = [shape.x + shape.width / 2 + shape.zWidth, shape.y - shape.zHeight];
                        const p7 = [shape.x - shape.width / 2 + shape.zWidth, shape.y - shape.zHeight];
                        const p3 = [xAxisPoint[0] + shape.width / 2, xAxisPoint[1]];
                        const p5 = [xAxisPoint[0] + shape.width / 2 + shape.zWidth, xAxisPoint[1] - shape.zHeight];
                        ctx.moveTo(p4[0], p4[1]); //4
                        ctx.lineTo(p3[0], p3[1]); //3
                        ctx.lineTo(p5[0], p5[1]); //5
                        ctx.lineTo(p6[0], p6[1]); //6
                        ctx.lineTo(p4[0], p4[1]); //4
                        ctx.moveTo(p4[0], p4[1]); //4
                        ctx.lineTo(p6[0], p6[1]); //6
                        ctx.lineTo(p7[0], p7[1]); //7
                        ctx.lineTo(p1[0], p1[1]); //1
                        ctx.lineTo(p4[0], p4[1]); //4
                        ctx.closePath();
                    }
                });
                echarts.graphic.registerShape('MyCubeRect', MyCubeRect);
                echarts.graphic.registerShape('MyCubeShadow', MyCubeShadow);
                let chart = this.$refs.chart
                let myChart = echarts.init(chart)
                let options = {
                    // color: '#3398DB',
                    // tooltip: {
                    //     trigger: 'axis',
                    //     axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                    //         type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                    //     }
                    // },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis: [
                        {
                            type: 'category',
                            data: ['北京', '上海', '广州', '深圳', '哈尔滨', '吉林', '辽宁','北京', '上海', '广州', '深圳', '哈尔滨',],
                            axisLine:{
                                lineStyle:{
                                    color:'#2EB2B3'
                                }
                            },
                            axisLabel:{
                                rotate: 45
                            },
                            axisTick: {
                                alignWithLabel: true
                            }
                        }
                    ],
                    yAxis: [
                        {
                            type: 'value',
                            name: '数量:人',
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
                                    color: ['#2EB2B3'],
                                    width: 1,
                                    type: 'solid'
                                }
                            },
                        }
                    ],
                    series: [
                        { // For shadow
                            type: 'bar',
                            itemStyle: {
                                color: 'rgba(0,0,0,0.05)'
                            },
                            barGap: '100%',
                            barCategoryGap: '0%',
                            data: [0, 400,0, 400,0, 400,0, 400,0, 400,0, 400],
                            animation: false
                        },
                        {
                            type: 'custom',
                            renderItem: function (params, api) {
                                let location = api.coord([api.value(0), api.value(1)]);
                                return {
                                    type: 'group',
                                    children: [
                                    {
                                        type: 'MyCubeRect',
                                        shape: {
                                        api,
                                            xValue: api.value(0),
                                            yValue: api.value(1),
                                            x: location[0],
                                            y: location[1]
                                        },
                                        style: {
                                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                offset: 0, color: '#75FFFB'                   //指0%处的颜色
                                            }, {
                                                offset: 1, color: '#2151FF'                 //指100%处的颜色
                                            }], false)
                                        }
                                    },
                                    {
                                        type: 'MyCubeShadow',
                                        shape: {
                                            api,
                                            xValue: api.value(0),
                                            yValue: api.value(1),
                                            x: location[0],
                                            y: location[1]
                                        },
                                        style: {
                                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                                offset: 0, color: '#75FFFB'                   //指0%处的颜色
                                            }, {
                                                offset: 1, color: '#2151FF'                 //指100%处的颜色
                                            }], false)
                                        }
                                    }]
                                };
                            },
                            data: [10, 52, 200, 334, 390, 330,10, 52, 200, 334, 390, 330]
                        }
                    ]
                };
                myChart.setOption(options)
            }
        }
    }
</script>

<style scoped>
    .bar-chart{
        width: 100%;
        height: 100%;
        border: 1px solid red;
    }
</style>