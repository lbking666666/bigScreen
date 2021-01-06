<template>
    <div class="home">
        <div class="header">
            <div class="time-box"></div>
        </div>
        <div class="container">
            <div class="left-box">
                <module1 :module1Data="module1Data"></module1>
                <module2 :module2Data="module2Data"></module2>
                <module3 :module3Data="module3Data"></module3>
            </div>
            <div class="center-box">
                <module4 @reName="selectName" :remap="remap" :remap2="remap2" :mapData="module4Data"></module4>
                <module5 :module5Data="module5Data"></module5>
            </div>
            <div class="right-box">
                <module6 :module6Data="module6Data"></module6>
                <module7 :module7Data="module7Data"></module7>
                <module8 :module8Data="module8Data"></module8>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import module1 from '@/components/module1.vue';
import module2 from '@/components/module2.vue';
import module3 from '@/components/module3.vue';
import module4 from '@/components/module4.vue';
import module5 from '@/components/module5.vue';
import module6 from '@/components/module6.vue';
import module7 from '@/components/module7.vue';
import module8 from '@/components/module8.vue';
import { showArea } from '@/api/index.js';
export default {
    name: 'Home',
    components: {
        module1,
        module2,
        module3,
        module4,
        module5,
        module6,
        module7,
        module8
    },
    data() {
        return {
            remap: 0,
            remap2: 0,
            mapData: {}, //地图数据
            module1Data: {},
            module2Data: {},
            module3Data: {},
            module4Data: {},
            module5Data: [],
            module6Data: {},
            module7Data: {},
            module8Data: {}
        }
    },
    mounted() {
        this.getData()

    },
    methods: {

        getData() {
            this.getModule1Data()
            this.getModule5Data()
            this.getShowArea()
        },
        getModule1Data(){
            this.module1Data = {
                userCount: 12345, //类型：Number  必有字段  备注：系统用户数
                onlineCount: 5423, //类型：Number  必有字段  备注：营业员在线人数
                todayCount: 2345, //类型：Number  必有字段  备注：营业员在线人数
                lastDayPercent: -0.62, //类型：Number  必有字段  备注：较前日 负数是下降，正数是新增
                lastSevenPercent: 0.83 //类型：Number  必有字段  备注：较7日 负数是下降，正数是新增
            }
        },
        getShowArea() {
            //全国区域查询接口
            let params = {
                areaCode: this.areaCode
            }
            showArea(params).then(res => {
                if (res.code == 200) {
                    let arr1 = [],
                        arr2 = [],
                        arr3 = [],
                        arr4 = []
                    res.data.map(item => {
                        if (item.flag == -1) {
                            let obj = {
                                name: item.areaName.replace('省', '').replace('特别行政区', ''),
                                value: item.num,
                                code: item.areaCode,
                                itemStyle: {
                                    areaColor: '#2569BB',
                                    color: '#2569BB',
                                    borderColor: '#2569BB',
                                }
                            }
                            arr1.push(obj)
                        }
                        if (item.colors == -1) {
                            let colors = {
                                name: item.areaName.replace('省', '').replace('特别行政区', ''),
                                code: item.areaCode,
                            }
                            arr3.push(colors)
                        }
                        if (item.flag >= 0) {
                            let obj = {
                                name: item.areaName.replace('省', '').replace('特别行政区', ''),
                                value: item.num,
                                code: item.areaCode,
                                itemStyle: {
                                    areaColor: '#62A5E6',
                                    color: '#62A5E6',
                                    borderColor: "#62A5E6",
                                }
                            }
                            arr2.push(obj)
                        }

                        if (item.colors == 1) {
                            let colors = {
                                name: item.areaName.replace('省', '').replace('特别行政区', ''),
                                code: item.areaCode,
                            }
                            arr4.push(colors)
                        }
                    })
                    this.module4Data = {
                        used: arr2,
                        unUsed: arr1,
                        colors: arr4,
                        unColors: arr3
                    }
                }
            })
        },
        getModule5Data() {
            this.module5Data = []
            for (let i = 1; i <= 31; i++) {
                let newObj = {
                    number: 100 * i,
                    arpu: 50 * i,
                    areaName: '地区' + String(i),
                    areaCode: String(i)
                }
                this.module5Data.push(newObj)
            }
        },
        selectName(name, code) {
            this.provinceName = name
            this.areaCode = code
        }

    }
}
</script>
<style lang="less" scoped>
/*功能title样式*/
.title {
    width: 100%;
    height: 44px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 19px 0px 12px;

    .icons {
        width: 32px;
        height: 32px;
        margin-right: 3px;
        margin-top: 3px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .title-text {
        font-size: 22px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ECFCFF;
        text-shadow: 0px 2px 6px #4CB5FF;
    }
}

.home {

    /*overflow: hidden;*/
    /*background: #010B3D;*/
    /*display: flex;*/
    flex-direction: column;

    .header {
        display: flex;
        width: 100%;
        height: 86px;
        background: url("../assets/yaxin/dingbubiaoti.png") no-repeat;
        background-size: 100% 100%;

        .time-box {
            position: absolute;
            top: 33px;
            right: 30px;
            width: 250px;
            height: 34px;
            font-family: 'LedFont';
            font-size: 28px;
            color: #88d7fd;
            letter-spacing: .93px;
            text-align: left;
            line-height: 34px;
        }
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 0 auto;
        height: 100vh;

        .left-box {
            width: 460px;
            display: flex;
            flex-direction: column;
            // border: 1px solid red;
        }

        .center-box {
            margin-left: 23px;
            width: 894px;
            display: flex;
            flex-direction: column;
            background: url("../assets/img/img_bg.png") no-repeat center top;
            background-size: 788px 788px;
            padding-top: 10px;
            position: relative;
            // border: 1px solid red;
        }

        .right-box {
            margin-left: 23px;
            width: 460px;
            display: flex;
            flex-direction: column;
            // border: 1px solid red;
        }
    }
}
</style>