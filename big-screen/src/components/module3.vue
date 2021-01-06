<template>
    <div class="rose-charts">
        <div class="charts" style="width:100%;height:100%" id="chart"></div>
    </div>
</template>
<script>
let chart = null
import * as echarts from "echarts";
export default {
    name: "roseCharts",
    props: {

    },
    data() {
        return {

        }
    },
    mounted() {
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
                    formatter: ' {c} 户',
                     backgroundColor: 'rgba(0,0,0,0.6)',
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                            fontWeight: 600
                        },
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
                        },
                        data: [
                            { value: 10, name: 'rose1' },
                            { value: 5, name: 'rose2' },
                            { value: 15, name: 'rose3' },
                            { value: 25, name: 'rose4' },
                            { value: 20, name: 'rose5' },
                        ]
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
	height:310px;
	.charts{
		width:100%;
		height:100%;
	}
}
</style>