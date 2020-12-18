<template>
    <div class="map-chart">
        <div ref="map" style="width:100%;height:100%"></div>
    </div>
</template>
<script>
import * as echarts from "echarts";
import axios from 'axios';
let chinaMap = require('./map/china.json')
let map = null
export default {
    name: "mapChart",
    data() {
        return {
            //定义全国省份的数组
            provinces: {
                // 23个省
                '台湾': "taiwan",
                '河北': "hebei",
                '山西': "shanxi",
                '辽宁': "liaoning",
                '吉林': "jilin",
                '黑龙江': "heilongjiang",
                '江苏': "jiangsu",
                '浙江': "zhejiang",
                '安徽': "anhui",
                '福建': "fujian",
                '江西': "jiangxi",
                '山东': "shandong",
                '河南': "henan",
                '湖北': "hubei",
                '湖南': "hunan",
                '广东': "guangdong",
                '海南': "hainan",
                '四川': "sichuan",
                '贵州': "guizhou",
                '云南': "yunnan",
                '陕西': "shanxi1",
                '甘肃': "gansu",
                '青海': "qinghai",
                // 5个自治区
                '新疆': "xinjiang",
                '广西': "guangxi",
                '内蒙古': "neimenggu",
                '宁夏': "ningxia",
                '西藏': "xizang",
                // 4个直辖市
                '北京': "beijing",
                '天津': "tianjin",
                '上海': "shanghai",
                '重庆': "chongqing",
                // 2个特别行政区
                '香港': "xianggang",
                '澳门': "aomen"
            }
        }
    },
    mounted() {
        echarts.registerMap('china', chinaMap);
        this.initMap('china');
    },
    methods: {
        initMap(name) { //初始化中国地图
            map = echarts.init(this.$refs.map)
            let option = {
                geo: {
                    map: name,
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
                            color: "#fff"
                        }
                    },
                    //地图区域的多边形 图形样式，有 normal 和 emphasis 两个状态
                    itemStyle: {
                        //normal 是图形在默认状态下的样式；
                        normal: {
                            borderColor: "#2569BB",
                            areaColor: "#2569BB",
                        },
                        //emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
                        emphasis: {
                            areaColor: "#2569BB",
                            shadowOffsetX: 0,
                            shadowOffsetY: 0,
                            shadowBlur: 20,
                            borderWidth: 0,
                            shadowColor: "rgba(0, 0, 0, 0.5)"
                        }
                    }
                },
                series: [{
                    name: "中国地图",
                    type: "map",
                    //这里是'china',及因为js中注册的名字，如果是上海市，则该出需pName 指的是'shanghai'
                    mapType: name,
                    geoIndex: 0
                    // data: dataList
                }]
            };
            map.setOption(option);
            this.HandleClick()
        },
        HandleClick() {
            // 点击触发
            map.on("click", param => {
                if (param.name in this.provinces) {
                    // 处理省模块
                    let names = param.name;
                    for (let key in this.provinces) {
                        if (names == key) {
                            this.showProvince(this.provinces[key], key);
                            break;
                        }
                    }
                } 
                /*else if (param.name in cityMap) {
                    // 处理市模块
                    let names = param.name;
                    for (let key in cityMap) {
                        if (names == key) {
                            showCitys(cityMap[key], key);
                            break;
                        }
                    }
                }*/
            });
        },
        showProvince(eName,param) {
        	console.log(eName,param)
        	let self = this
        	axios.get(`./map/province/${eName}.json`).then(res=>{
        		console.log(res)
        		echarts.registerMap(eName, eName+'Map');
        		self.initMap(eName+'Map');
        	})
	      }
    }
}
</script>
<style scoped>
.map-chart {
    height: 100%;
    width: 100%;
}
</style>