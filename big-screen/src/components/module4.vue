<template>
    <div class="map-chart">
        <div class="map-shadow" v-show="silent"></div>
        <div class="tip-show" v-show="tipShow">暂不支持下钻</div>
        <div ref="map" id="map" style="width:100%;height:100%" v-on:click.stop.prevent="reBack"></div>
    </div>
</template>
<script>
import * as echarts from "echarts";
import axios from 'axios';
let chinaMap = require('./map/china.json')
let map = null,
    time = null
export default {
    name: "mapChart",
    props: {
        mapData: {
            type: Object,
            default: () => ({})
        },
        remap: {
            type: Number,
            default: 0
        },
        remap2: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            back: false,
            isAll: true,
            silent: false,
            cityName: '',
            tipShow: false,
            effArr: [],
            unEffArr: [],
            //定义全国省份的数组
            match: {
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
                '福建': [119.306239, 26.075302],
                '江西': [115.892151, 28.676493],
                '山东': [117.000923, 36.675807],
                '河南': [113.665412, 34.757975],
                '湖北': [114.298572, 30.584355],
                '湖南': [112.982279, 28.19409],
                '广东': [113.280637, 23.125178],
                '海南': [110.33119, 20.031971],
                '四川': [104.065735, 30.659462],
                '贵州': [106.713478, 26.578343],
                '云南': [102.712251, 25.040609],
                '陕西': [108.948024, 34.263161],
                '甘肃': [103.823557, 36.058039],
                '青海': [101.778916, 36.623178],
                // 5个自治区
                '新疆': [87.617733, 43.792818],
                '广西': [108.320004, 22.82402],
                '内蒙古': [111.670801, 40.818311],
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
    watch: {
        'mapData': function(val, old) {
            this.regionsArr = [...val.used, ...val.unUsed]
            val.colors.map(item => {
                if (this.match[item.name]) {
                    let params = {
                        name: item.name,
                        code: item.code,
                        value: this.match[item.name].concat(item.value)
                    }
                    this.effArr.push(params)
                }
            })
            val.unColors.map(item => {
                if (this.match[item.name]) {
                    let params = {
                        name: item.name,
                        code: item.code,
                        value: this.match[item.name].concat(item.value)
                    }
                    this.unEffArr.push(params)
                }
            })
            map.dispose();
            this.initMap('china');
        }
    },
    methods: {
        initMap(name) { //初始化中国地图
            map = echarts.getInstanceByDom(document.getElementById('map')); //有的话就获取已有echarts实例的DOM节点。
            if (map == null) { // 如果不存在，就进行初始化。
                map = echarts.init(document.getElementById('map'));
            }
            this.silent = false
            if (name == 'china') {
                this.back = false
            } else {
                this.back = true
            }
            let option = {
                tooltip: {
                    show: true,
                    backgroundColor: 'rgba(0,0,0,0.4)',
                    textStyle: {
                        color: '#fff',
                        fontSize: 14,
                    },
                    borderWidth: 0,
                    trigger: 'item',
                    formatter: function(params) {
                        if (params.seriesType == 'effectScatter' || params.seriesType == 'scatter') {
                            return
                        }
                        if (params.value || params.value == 0) {
                            if (params.name == "新疆" || params.name == "西藏" || params.name == "云南") {
                                return params.name
                            } else {
                                return params.name + (params.value ? '：' : '') + (params.value ? params.value : '')
                            }
                        } else {
                            return params.name
                        }
                    }
                },
                legend: {
                    show: true,
                    left: 10,
                    bottom: 10,
                    textStyle: {
                        color: '#fff'
                    },
                    data: ['已托管', '未托管'],
                    orient: 'vertical',
                },
                geo: {
                    map: name,
                    roam: false,
                    zoom: (name == 'china') ? 1.2 : ((name == 'heilongjiang' || name == 'gansu' || name == 'guangdong') ? 0.8 : 1),
                    top: (name == 'heilongjiang' || name == 'gansu') ? '20%' : 'center',
                    left: (name == 'heilongjiang' || name == 'gansu') ? '25%' : 'center',
                    // layoutCenter: ['80%','80%'],
                    //图形上的文本标签，可用于说明图形的一些数据信息
                    label: {
                        show: this.back ? true : false,
                        fontSize: "10",
                        formatter: function(param) {
                            // 处理不显示地市
                            if (name == 'xinjiang') {
                                let str = String(param.name)
                                if (str.length > 4) {
                                    return ''
                                } else {
                                    return str
                                }
                            }
                            if(name == 'chongqing'){
                                console.log(param.name)
                                if(param.name == '九龙坡' || param.name == '九龙坡区' ||param.name =="彭水苗族土家族自治县" || param.name=="沙坪坝区" ||param.name=="渝北区"||param.name=="大渡口区" || param.name=="江北区"|| param.name=="渝中区"){
                                    return ''
                                }
                            }
                        },
                        color: "#fff"
                    },
                    emphasis: {
                        label: {
                            show: this.back ? true : false,
                            color: "#fff"
                        },
                        itemStyle: {
                            color: '#1ACFFF',
                            areaColor: "#1ACFFF",
                        }
                    },
                    //地图区域的多边形 图形样式，有 normal 和 emphasis 两个状态
                    itemStyle: {
                        borderColor: "#2569BB",
                        areaColor: "#2569BB",
                    },
                    regions: this.regionsArr
                },
                series: [{
                        name: '已托管',
                        type: "map",
                        color: '#62A5E6',
                        geoIndex: 0,
                        roam: true,
                        data: this.mapData.used,
                    }, {
                        name: '未托管',
                        type: "map",
                        color: '#2569BB',
                        geoIndex: 0,
                        data: this.mapData.unUsed
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
                            color: '#fff',
                            fontSize: "10",
                        },
                        itemStyle: {
                            color: '#FFFF02',
                            shadowBlur: 0,
                        },
                        zlevel: 1,
                        data: this.back ? [] : this.effArr
                    },
                    {
                        name: 'tt2',
                        type: 'scatter',
                        coordinateSystem: 'geo',
                        symbol: 'circle',
                        label: {
                            formatter: function(param) {
                                if (param.name == '香港') {
                                    return '/\n' + ' ' + param.name
                                } else {
                                    return param.name
                                }
                            },
                            position: 'center',
                            show: true,
                            color: '#fff',
                            fontSize: "10",
                        },
                        symbolSize: 0,
                        itemStyle: {
                            color: 'rgba(0,0,0,0)'
                        },
                        data: this.back ? [] : this.unEffArr
                    }
                ]
            };
            map.setOption(option, true);
            window.addEventListener("resize", () => { map.resize(); });
            this.HandleClick()
            return
        },
        reBack() {
            if (this.back) {
                this.$emit('reName', '全国', '1')
                map.dispose();
                this.initMap('china');
            } else {
                map.dispose();
                this.initMap(this.cityName);
            }
        },
        HandleClick() {
            // 点击触发
            map.on("click", param => {
                // 判断点击省份是否是未托管
                let hasAccess = this.mapData.unUsed.find((d) => {
                    return d.name == param.name
                })
                this.silent = true
                let code = param.data ? param.data.code : 0
                if (param.name in this.provinces) {
                    // 处理省模块
                    let names = param.name;
                    for (let key in this.provinces) {
                        if (names == key) {
                            if (!hasAccess) {
                                if (names == "新疆" || names == "西藏" || names == "云南") {
                                    map.dispose();
                                    this.initMap('china');
                                } else {
                                    this.showProvince(this.provinces[key], key, code);
                                }
                                continue;
                            }
                        } else {
                            this.cityName = 'china'
                        }
                    }
                } else {
                    if (param) {
                        this.tipShow = true
                        setTimeout(() => {
                            this.tipShow = false
                        }, 2000)
                        this.back = false
                    }
                }
            });
        },
        showProvince(eName, param, code) {
            let self = this
            axios.get(`./map/province/${eName}.json`).then(res => {
                echarts.registerMap(eName, res.data);
                this.$emit('reName', param, code)
                self.cityName = eName
                map.dispose();
                self.initMap(eName);
            })
        }
    }
}
</script>
<style scoped>
.map-chart {
    height: 631px;
    width: 100%;
    position: relative;
}

.map-shadow {
    width: 100%;
    height: 100%;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 100
}

.tip-show {
    position: absolute;
    top: 50%;
    z-index: 9;
    left: 50%;
    font-size: 0.8rem;
    color: #fff;
    padding: 0.2rem 0.3rem;
    border-radius: 10%;
    background: rgba(0, 0, 0, 0.4);
}
</style>