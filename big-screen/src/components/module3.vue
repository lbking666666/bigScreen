<template>
    <div class="rose-charts">
    	<commonTitle :titleText="titleText"></commonTitle>
    	<div class="charts-wrapper">
	        <div class="charts" id="chart"></div>
	    </div>
    </div>
</template>
<script>
let chart = null
import * as echarts from "echarts";
import commonTitle from "./commonTitle";
import {formatterNumber} from '@/utils/filterNum'
export default {
    name: "roseCharts",
    props: {
        module3Data:{
            type:Array,
            default:[]
        }
    },
    components:{commonTitle},
    data() {
        return {
        	titleText:'全国用户类型分布'
        }
    },
    mounted() {
    	this.initChart()
    },
    updated() {
        this.initChart()
    },
    methods: {
        initChart() {
            chart = echarts.getInstanceByDom(document.getElementById('chart')); //有的话就获取已有echarts实例的DOM节点。
            if (chart == null) { // 如果不存在，就进行初始化。
                chart = echarts.init(document.getElementById('chart'));
            }
            let option = {
                tooltip: {
                    trigger: 'item',
                    formatter: (val)=> {
                        return formatterNumber(val.value) + '户'
                    },
                    backgroundColor: 'rgba(0,0,0,0.6)',
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
                color:['#248DEA','#22DEEE','#2DFF9E','#FEC14D','#F95537'],
                series: [
                    {
                        name: '面积模式',
                        type: 'pie',
                        radius: [30, 110],
                        center: ['50%', '50%'],
                        roseType: 'area',
                        label:{
                        	fontSize:15,
                            shadowColor:'transparent',
                            borderWidth:0,
                            color:'#fff',
                            formatter: (val)=> {
                                return `${val.name} ${val.percent.toFixed(1)}%`
                            }
                        },
                        data: this.module3Data
                    }
                ]
            };
            chart.setOption(option, true);
            window.addEventListener("resize", () => { chart.resize(); });
            return
        }

        }
    }
</script>
<style lang="less" scoped>
.rose-charts{
	width:100%;
	height:290px;
	padding:8px;
	background:url(../assets/yaxin/kuang_zuoxia.png) no-repeat;
	background-size:100%;
	.charts-wrapper{
		width:100%;
		height:calc(100% - 40px);
		display:flex;
		align-items: center;
	}
	.charts{
		width:100%;
		height:96%;
	}
}
</style>