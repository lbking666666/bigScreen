<template>
    <div class="charts-wrapper">
        <commonTitle :titleText="titleText"></commonTitle>
        <div class="line-chart">
            <div class="query-option">
                <div class="options" :class="flag==0?'opt-active':''" @click="selExternal(0)">
                    <div>营业厅</div>
                </div>
                <div class="options" :class="flag==1?'opt-active':''" @click="selExternal(1)">
                    <div>外围</div>
                </div>
            </div>
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
            default: '#fff',
        },
        module6Data: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            titleText: '1月订单量',
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
                    this.xAxisData.push(Number(ele.date.split('-')[2]))
                    if(this.flag==1){
                        this.seriesData.push(ele.outertrade)
                    }else{
                        this.seriesData.push(ele.malltrade)
                    }
                    
                })
            }
        },
        drawChart() {
            let vm = this
            // 添加销毁chart判断，避免重复绘制chart dom报错
           /* if (vm.myChart) {
                vm.myChart.dispose()
            }*/
            if (this.module6Data.length > 0) {
                this.dealData(this.module6Data[this.flag].value)
            }
            let chart = this.$refs.chart
            vm.myChart = echarts.init(chart)
            let options = {
                xAxis: {
                    type: 'category',
                    axisLine: {
                        lineStyle: {
                            color: '#2EB2B3'
                        }
                    },
                    boundaryGap: true,
                    splitArea: {
                        show: true,
                        areaStyle: {
                            color: ['rgba(250,250,250,0)', 'rgba(59, 157, 230, 0.16)']
                        }
                    },
                    axisLabel: {
                        rotate: 45,
                        fontSize: 10,
                        interval: 0
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
                        let dateStr = vm.module6Data[vm.flag].value[params.dataIndex].date
                        let nums = (String(params.value).length > 4) ? (Number(params.value / 10000).toFixed(1) + 'W') : String(params.value)

                        return dateStr + '<br>' + '订单量: ' + nums
                    }

                },
                yAxis: {
                    type: 'value',
                    show: true,
                    name: '单位：万',
                    nameLocation: 'end',
                    axisLabel: {
                        formatter: function(value, index) {
                            // let str = ''
                            // if (value > 10000) {
                            //     str = (value / 10000).toFixed(1) + 'w'
                            // } else {
                            //     str = value
                            // }
                            // return str;
                            return value
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
                    top: '15%',
                    containLabel: true
                },
                series: [{
                    data: this.seriesData,
                    type: 'line',
                    smooth: true,
                    symbol: 'circle',
                    symbolSize: 8,
                    itemStyle: {
                        color: this.color,
                        borderColor: "#fff",
                        borderWidth: 1,
                        borderType: 'solid'
                    },
                    lineStyle: {
                        color: this.color
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
    background: url(../assets/yaxin/kuang_youshang.png) no-repeat;
    background-size: 100%;
    height: 254px;
    padding: 8px;
}

.line-chart {
    width: 100%;
    position: relative;
    height: calc(100% - 40px);
}

.query-option {
    position: absolute;
    right: 4%;
    top: 2%;
    flex: 1;
    z-index: 9;
    display: flex;
    justify-content: flex-end;

    .options {
        height: 19px;
        line-height: 19px;
        padding: 0 8px;
        font-size: 14px;
        font-family: PingFangSC-Medium, PingFang SC;
        font-weight: 500;
        color: #308BFD;
        border: 1px solid #308BFD;
        transform: skew(-45deg);
        margin-right: 5px;
        cursor: pointer;

        div {
            transform: skewX(45deg);
        }
    }

    .opt-active {
        color: #FFFFFF;
        background: linear-gradient(270deg, #7CF1E0 0%, #2C48A5 100%);
    }
}
</style>