<template>
    <div class="map-chart">
        <div ref="map" style="width:100%;height:100%" @click="reBack"></div>
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
            back: false,
            isAll: true,
            //定义全国省份的数组
           match:{
                // 23个省
                '台湾': [121.509062, 25.044332],
                '河北': [114.502461, 38.045474],
                '山西': [112.549248, 37.857014],
                '辽宁': [123.429096, 41.796767],
                '吉林': [125.3245, 43.886841],
                '黑龙江': [126.642464, 45.756967],
                '江苏': [118.767413, 32.041544],
                '浙江': [120.153576, 30.287459],
                '安徽': [117.283042, 31.86119],
                '福建':[119.306239, 26.075302],
                '江西': [115.892151, 28.676493],
                '山东': [117.000923, 36.675807],
                '河南': [113.665412, 34.757975],
                '湖北': [114.298572, 30.584355],
                '湖南': [112.982279, 28.19409],
                '广东': [113.280637, 23.125178],
                '海南': [110.33119, 20.031971],
                '四川': [104.065735, 30.659462],
                '贵州':  [106.713478, 26.578343],
                '云南': [102.712251, 25.040609],
                '陕西':[108.948024, 34.263161],
                '甘肃':  [103.823557, 36.058039],
                '青海': [101.778916, 36.623178],
                // 5个自治区
                '新疆': [87.617733, 43.792818],
                '广西':  [108.320004, 22.82402],
                '内蒙古':[111.670801, 40.818311],
                '宁夏': [106.278179, 38.46637],
                '西藏': [91.132212, 29.660361],
                // 4个直辖市
                '北京': [116.405285, 39.904989],
                '天津': [117.190182, 39.125596],
                '上海': [121.472644, 31.231706],
                '重庆': [106.504962, 29.533155],
                // 2个特别行政区
                '香港': [114.173355, 22.320048],
                '澳门': [113.54909, 22.198951],
            },
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
                tooltip: {
                    show: true,
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    textStyle: {
                        color: '#fff',
                        fontSize: 16,
                    },
                    borderWidth: 0,
                    trigger: 'item',
                    formatter: function(params) {
                        
                        if(params.seriesType == 'effectScatter'){
                            return
                        }
                        return (params.value ? params.value : 0) + '<br />' + params.name + '每天新增客户量'
                    }
                },
                legend: {
                    show: true,
                    left: 10,
                    bottom: 10,
                    textStyle: {
                        color: '#fff'
                    },
                    orient: 'vertical',
                },
                geo: {
                    map: name,
                    roam: false,
                    zoom: 1,
                    //图形上的文本标签，可用于说明图形的一些数据信息
                    label: {
                        normal: {
                            show: false,
                            fontSize: "10",
                            color: "#fff"
                        },
                        emphasis: {
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
                            areaColor: "#1ACFFF",
                        }
                    },
                    regions: [{
                        name: '河南',
                        itemStyle: {
                            areaColor: '#62A5E6',
                            color: '#62A5E6',
                            borderColor: "#62A5E6",
                        }
                    }, {
                        name: '海南',
                        itemStyle: {
                            areaColor: '#62A5E6',
                            color: '#62A5E6',
                            borderColor: "#62A5E6",
                        }
                    }, {
                        name: '湖北',
                        itemStyle: {
                            areaColor: '#62A5E6',
                            color: '#62A5E6',
                            borderColor: "#62A5E6",
                        }
                    }, {
                        name: '广东',
                        itemStyle: {
                            areaColor: '#62A5E6',
                            color: '#62A5E6',
                            borderColor: "#62A5E6",
                        }
                    }, {
                        name: '山东',
                        itemStyle: {
                            areaColor: '#62A5E6',
                            color: '#62A5E6',
                            borderColor: "#62A5E6",
                        }
                    }, {
                        name: '青海',
                        itemStyle: {
                            areaColor: '#62A5E6',
                            color: '#62A5E6',
                            borderColor: "#62A5E6",
                        }
                    }, {
                        name: '吉林',
                        itemStyle: {
                            areaColor: '#62A5E6',
                            color: '#62A5E6',
                            borderColor: "#62A5E6",
                        }
                    }, {
                        name: '广西',
                        itemStyle: {
                            areaColor: '#62A5E6',
                            color: '#62A5E6',
                            borderColor: "#62A5E6",
                        }
                    }, {
                        name: '上海',
                        itemStyle: {
                            areaColor: '#62A5E6',
                            color: '#62A5E6',
                            borderColor: "#62A5E6",
                        }
                    }, {
                        name: '天津',
                        itemStyle: {
                            areaColor: '#62A5E6',
                            color: '#62A5E6',
                            borderColor: "#62A5E6",
                        }
                    }, {
                        name: '内蒙古',
                        itemStyle: {
                            areaColor: '#62A5E6',
                            color: '#62A5E6',
                            borderColor: "#62A5E6",
                        }
                    }, {
                        name: '辽宁',
                        itemStyle: {
                            areaColor: '#62A5E6',
                            color: '#62A5E6',
                            borderColor: "#62A5E6",
                        }
                    }, {
                        name: '陕西',
                        itemStyle: {
                            areaColor: '#62A5E6',
                            color: '#62A5E6',
                            borderColor: "#62A5E6",
                        }
                    }, {
                        name: '江西',
                        itemStyle: {
                            areaColor: '#62A5E6',
                            color: '#62A5E6',
                            borderColor: "#62A5E6",
                        }
                    }, {
                        name: '贵州',
                        itemStyle: {
                            areaColor: '#62A5E6',
                            color: '#62A5E6',
                            borderColor: "#62A5E6",
                        }
                    }, {
                        name: '宁夏',
                        itemStyle: {
                            areaColor: '#62A5E6',
                            color: '#62A5E6',
                            borderColor: "#62A5E6",
                        }
                    }, {
                        name: '甘肃',
                        itemStyle: {
                            areaColor: '#62A5E6',
                            color: '#62A5E6',
                            borderColor: "#62A5E6",
                        }
                    }, {
                        name: '云南',
                        itemStyle: {
                            areaColor: '#62A5E6',
                            color: '#62A5E6',
                            borderColor: "#62A5E6",
                        }
                    }, {
                        name: '北京',
                        itemStyle: {
                            areaColor: '#488ED6',
                            color: '#488ED6',
                            borderColor: "#488ED6",
                        }
                    }, {
                        name: '河北',
                        itemStyle: {
                            areaColor: '#488ED6',
                            color: '#488ED6',
                            borderColor: "#488ED6",
                        }
                    }, {
                        name: '山西',
                        itemStyle: {
                            areaColor: '#488ED6',
                            color: '#488ED6',
                            borderColor: "#488ED6",
                        }
                    }, {
                        name: '湖南',
                        itemStyle: {
                            areaColor: '#488ED6',
                            color: '#488ED6',
                            borderColor: "#488ED6",
                        }
                    }, {
                        name: '浙江',
                        itemStyle: {
                            areaColor: '#488ED6',
                            color: '#488ED6',
                            borderColor: "#488ED6",
                        }
                    }, {
                        name: '江苏',
                        itemStyle: {
                            areaColor: '#488ED6',
                            color: '#488ED6',
                            borderColor: "#488ED6",
                        }
                    }, {
                        name: '黑龙江',
                        itemStyle: {
                            areaColor: '#2569BB',
                            color: '#2569BB',
                            borderColor: "#2569BB",
                        }
                    }, {
                        name: '云南',
                        itemStyle: {
                            areaColor: '#2569BB',
                            color: '#2569BB',
                            borderColor: "#2569BB",
                        }
                    }, {
                        name: '安徽',
                        itemStyle: {
                            areaColor: '#2569BB',
                            color: '#2569BB',
                            borderColor: "#2569BB",
                        }
                    }, {
                        name: '福建',
                        itemStyle: {
                            areaColor: '#2569BB',
                            color: '#2569BB',
                            borderColor: "#2569BB",
                        }
                    }, {
                        name: '四川',
                        itemStyle: {
                            areaColor: '#2569BB',
                            color: '#2569BB',
                            borderColor: "#2569BB",
                        }
                    }, {
                        name: '新疆',
                        itemStyle: {
                            areaColor: '#2569BB',
                            color: '#2569BB',
                            borderColor: "#2569BB",
                        }
                    }, {
                        name: '西藏',
                        itemStyle: {
                            areaColor: '#2569BB',
                            color: '#2569BB',
                            borderColor: "#2569BB",
                        }
                    }, {
                        name: '重庆',
                        itemStyle: {
                            areaColor: '#2569BB',
                            color: '#2569BB',
                            borderColor: "#2569BB",
                        }
                    }, {
                        name: '台湾',
                        itemStyle: {
                            areaColor: '#2569BB',
                            color: '#2569BB',
                            borderColor: "#2569BB",
                        }
                    }]

                },
                series: [{
                        name: '已接入',
                        type: "map",
                        color: '#62A5E6',
                        geoIndex: 0,
                        data: [{
                            name: "河南",
                            value: 40000,
                            code: '3401',
                        }]
                    },
                    {
                        name: '省份自建平台',
                        type: "map",
                        color: '#488ED6',
                        geoIndex: 0,
                        data: [{
                            name: "北京",
                            value: 20000,
                            code: '3401',
                        }]
                    }, {
                        name: '未接入',
                        type: "map",
                        color: '#2569BB',
                        geoIndex: 0,
                        data: [{
                            name: "安徽",
                            value: 10000,
                            code: '3401',
                        }]
                    }, {
                        name: 'tt',
                        type: 'effectScatter',
                        coordinateSystem: 'geo',
                        symbolSize: 10,
                        encode: {
                            value: 2
                        },
                        showEffectOn: 'render',
                        rippleEffect: {
                            brushType: 'stroke'
                        },
                        hoverAnimation: true,
                        label: {
                            formatter: '{b}',
                            position: 'right',
                            show: true,
                            color:'#fff',
                            fontSize: "10",
                        },
                        itemStyle: {
                            color: '#FFFF02',
                            shadowBlur: 0,
                        },
                        zlevel: 1,
                        data: [{
                                name: "上海",
                                value: this.match[`上海`].concat(400),
                            },
                            {
                                name: "天津",
                                value: this.match[`天津`].concat(400),
                            }
                        ]
                    }
                ]
            };
            console.log(this.match[`上海`])
            map.setOption(option, true);
            if (name == 'china') {

                this.back = false
            } else {

                this.back = true
            }
            window.addEventListener("resize", () => { map.resize(); });
            this.HandleClick()
        },
        reBack() {
            if (this.back) {
                this.$emit('reName', '全国', '1')
                this.initMap('china');
            }

        },
        HandleClick() {
            // 点击触发
            map.on("click", param => {
                let code = param.data ? param.data.code : 0
                if (param.name in this.provinces) {
                    // 处理省模块
                    let names = param.name;
                    for (let key in this.provinces) {
                        if (names == key) {
                            this.showProvince(this.provinces[key], key, code);
                            break;
                        }
                    }
                } else {}
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
        showProvince(eName, param, code) {
            let self = this
            this.$emit('reName', param, code)
            axios.get(`./map/province/${eName}.json`).then(res => {
                echarts.registerMap(eName, res.data);
                self.initMap(eName);
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