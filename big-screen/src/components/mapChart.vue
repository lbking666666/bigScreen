<template>
    <div class="map-chart">
        <div ref="map" style="width:100%;height:100%"></div>
    </div>
</template>
<script>
let echarts = require("echarts/lib/echarts");
require("echarts/lib/chart/map");
let chinaMap = require('./map/china.json')
export default {
    name: "mapChart",
    data() {
        return {

        }
    },
    mounted() {
    	this.initMap();
    },
    methods: {

        initMap() {
        	let map = echarts.init(this.$refs.map)
        	echarts.registerMap('china', chinaMap);
            let option = {
                geo: {
                    map: 'china',
                    roam: false,
                    scaleLimit: {
                        min: 1.2,
                        max: 3
                    },
                    zoom: 1.2,
                    //图形上的文本标签，可用于说明图形的一些数据信息
                    label: {
                        normal: {
                            show: true,
                            fontSize: "10",
                            color: "rgba(0,0,0,0.7)"
                        }
                    },
                    //地图区域的多边形 图形样式，有 normal 和 emphasis 两个状态
                    itemStyle: {
                        //normal 是图形在默认状态下的样式；
                        normal: {
                            borderColor: "rgba(0, 0, 0, 0.2)"
                        },
                        //emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                        emphasis: {
                            areaColor: "#F3B329",
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowBlur: 20,
                            borderWidth: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)"
                        }
                    }
                },
                series: [{
                    name: "信息量",
                    type: "map",
                    //这里是'china',及因为js中注册的名字，如果是上海市，则该出需pName 指的是'shanghai'
                    mapType:'china',
                    geoIndex: 0
                    // data: dataList
                }]
            };

            map.setOption(option);
        }
    }
}
</script>
<style scoped>
.map-chart{
	height:500px;
}
</style>