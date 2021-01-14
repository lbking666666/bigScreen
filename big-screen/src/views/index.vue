<template>
    <div class="home">
        <div class="header">
            <div class="time-box">{{ dateTimeStr }}</div>

            <div class="time-selection">
                <span class="time-n">Time：</span>
                <span class="time-option" :class="timeIndex == 0 ? 'active' : ''" @click="checkTime(0)">日</span>
                <span class="time-option" :class="timeIndex == 1 ? 'active' : ''" @click="checkTime(1)">月</span>
                <span class="time-option" :class="timeIndex == 2 ? 'active' : ''" @click="checkTime(2)">年</span>
            </div>
        </div>
        <div class="container">
            <div class="left-box">
                <module1 :leftData="leftData" :moduleData="module1Data"></module1>
                <module2 :moduleData="module7Data"></module2>
                <module3 :moduleData="module3Data"></module3>
                <module4 :moduleData="module4Data"></module4>
            </div>
            <div class="center-box">
                <module5 @reName="selectName" :mapData="mapData" :min="min" :max="max"></module5>
                <module6 :moduleData="module6Data"></module6>
            </div>
            <div class="right-box">
                <!-- 重点业务场景 -->
                <module7 :moduleData="module7Data"></module7>
                <!-- 热销产品/常用功能TOP3 -->
                <module8 :moduleData="module8Data"></module8>
                <!-- <module9 :moduleData="module9Data"></module9>  -->
            </div>
        </div>
    </div>
</template>
<script>
let now = new Date()
import module1 from '@/components/module1.vue';
import module2 from '@/components/module2.vue';
import module3 from '@/components/module3.vue';
import module4 from '@/components/module4.vue';
import module5 from '@/components/module5.vue';
import module6 from '@/components/module6.vue';
import module7 from '@/components/module7.vue';
import module8 from '@/components/module8.vue';
import module9 from '@/components/module9.vue';
import { geAllData, getMapData, getModule6, getModule7, getModule8,getModule9, getBigData } from '@/api/index.js';
import { timestampConversion } from '@/utils/unixToTime.js'
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
        module8,
        module9
    },
    data() {
        return {
            provinceCode: '00',
            module1Data: {},
            module2Data: {},
            module3Data: [],
            module4Data: [],
            module6Data: [],
            module7Data: [],
            module8Data: {},
            module9Data: [],
            mapData: [],
            min: 0,
            max: 100,
            provinceName: '全国',
            leftData: {},
            nowTime: (new Date()).getTime() / 1000,
            dateTimeStr: timestampConversion((new Date()).getTime() / 1000),
            timeIndex: 0, // 0: 日; 1: 月; 2: 年;
        }
    },
    mounted() {
        this.getData()
        this.getMapData()
        setInterval(() => {
            this.nowTime += 1
            this.dateTimeStr = timestampConversion(this.nowTime)
        }, 1000)
    },
    methods: {
        checkTime(num){
            this.timeIndex = num
            // 在这里执行切换整屏的数据
        },
        getMapData() {
            getMapData().then(res => {
                if (res.code == 200) {
                    let list = []
                    let sort = []
                    res.data.forEach(item => {
                        if (item.name !== '全国总量') {
                            let values = item.value
                            let params = {
                                name: item.name,
                                value: values.usercount,
                                user: values.cbinnetday,
                                billuser: values.billuser,
                                arpu: values.arpu,
                                code: values.province_code
                            }
                            list.push(params)
                            sort.push(values.usercount)
                        }
                    })
                    sort.sort(function(a, b) {
                        return a - b;
                    });
                    this.min = Number(sort[0])
                    this.max = Number(sort[30])
                    this.mapData = list
                }
            })
        },
        getData() {
            this.getBigData();
            this.getModule6Data()
            // this.getModule7Data()
            this.getModule8Data()
            this.getModule9Data()
        },
        getBigData() {
            let params = {
                provinceCode: this.provinceCode
            }
            getBigData(params).then(res => {
                if (res.code == 200) {
                    //请求接口获取今日开户量比较数据
                    geAllData({ provinceCode: this.provinceCode }).then(res => {
                        let list = res.data.twoIandTkjData.minute
                        let list2 = res.data.BusinessAcceptanceData.month
                        if (list && list2) {
                            let cbTotal = 0 //今日总量
                            let yesdayTotal = 0; //昨日总量
                            let oldYesdayTotal = 0;
                            let sendayTotal = 0; //七日总量
                            let dayNum = 0; //七日天数七日平均数
                            for (let i in list) { //循环计算出今日总量
                                if (this.provinceName.indexOf(i) != -1) {
                                    let arr = list[i].series['总开户量']
                                    let len = arr.length
                                    let num = arr[len - 1]
                                    cbTotal = Number(num)
                                }

                            }

                            for (let i in list2) { //循环计算出七日总量及七日具体天数
                                if (this.provinceName.indexOf(i) != -1) {
                                    let arr = list2[i].series['总开户量']
                                    let len = arr.length
                                    let num = arr[len - 1]
                                    yesdayTotal = Number(num)
                                    oldYesdayTotal = Number(arr[len - 2])
                                    let newArr = []
                                    if (len > 9) {
                                        newArr = arr.slice(len - 9, len - 2)
                                        dayNum = 7
                                    } else {
                                        newArr = arr
                                        dayNum = len - 2
                                    }
                                    newArr.forEach((i) => {
                                        sendayTotal += Number(i)
                                    })
                                }

                            }

                            let sevenNum = Number(sendayTotal / dayNum).toFixed(0) //
                            //组装数据
                            let data = {
                                todayCount: cbTotal,
                                lastDayPercent: (yesdayTotal - oldYesdayTotal) / oldYesdayTotal,
                                lastSevenPercent: (yesdayTotal - sevenNum) / sevenNum
                            }
                            this.module1Data = data
                        }

                    })
                    //循环数据拼接module1、2、3、4数据
                    res.data.map(item => {
                        if (item.name.indexOf(this.provinceName) != 1) {
                            let values = item.value
                            if (values) { //判断数据是否返回
                                //module1左侧数据
                                let data1 = {
                                    userCount: values.usercount,
                                    onlineCount: values.billuser
                                }
                                this.leftData = data1;
                                //module2数据
                                let allDayD = Number(values.cbfrontinnetday) + Number(values.woinnetday) + Number(values.otherinnetday)
                                let allMonD = Number(values.cbfrontinnetmonth) + Number(values.woinnetmonth) + Number(values.otherinnetmonth)

                                let data2Day = [{
                                    name: 'cB前台',
                                    value: values.cbfrontinnetday,
                                    per: (100 * values.cbfrontinnetday / allDayD).toFixed(1),
                                }, {
                                    name: '掌沃通',
                                    value: values.woinnetday,
                                    per: (100 * values.woinnetday / allDayD).toFixed(1),
                                }, {
                                    name: '其他',
                                    value: values.otherinnetday,
                                    per: (100 * values.otherinnetday / allDayD).toFixed(1),
                                }]

                                let data2Month = [{
                                    name: 'cB前台',
                                    value: values.cbfrontinnetmonth,
                                    per: (100 * values.cbfrontinnetmonth / allMonD).toFixed(1),
                                }, {
                                    name: '掌沃通',
                                    value: values.woinnetmonth,
                                    per: (100 * values.woinnetmonth / allMonD).toFixed(1),
                                }, {
                                    name: '其他',
                                    value: values.otherinnetmonth,
                                    per: (100 * values.otherinnetmonth / allMonD).toFixed(1),
                                }]

                                data2Day.sort(function(a, b) {
                                    return b.value - a.value
                                })
                                data2Month.sort(function(a, b) {
                                    return b.value - a.value
                                })

                              /*  this.module2Data = {
                                    day: data2Day,
                                    month: data2Month
                                }*/

                                //module3数据
                                let data3 = [{ value: values.mobile, name: '移网' },
                                    { value: values.broadband, name: '宽带' },
                                    { value: values.iptv, name: 'iptv' },
                                    { value: values.telephone, name: '固话' },
                                    { value: values.otheruser, name: '其它' }
                                ]
                                this.module3Data = data3
                            }

                        }
                    })

                }
            })
        },
        getModule6Data() {
            let params = {
                provinceCode: this.provinceCode
            }
            getModule6(params).then(res => {
                if (res.code == 200) {
                    this.module6Data = []
                    if (res.data.length > 0) { //判断是否返回数据且不为空
                        let list = []
                        res.data.map(item => {
                            if (item.name != '全国总量') {
                                let arr = item.value.split(',')
                                let obj = {
                                    areaName: item.name,
                                    number: Number(arr[0].split('=')[1]),
                                    arpu: Number(arr[1].split('=')[1].replace('}', ""))
                                }
                                list.push(obj)
                            }
                        })
                        let arr = list.sort(function (a, b) { return b.number - a.number; })     
                        this.module6Data = arr
                    }
                }
            })
        },
        getModule7Data() {
            let params = {
                provinceCode: this.provinceCode,
                month: now.getMonth() + 1
            }
            getModule7(params).then(res => {
                if (res.code == 200) {
                    //过滤数据
                    /* let list = [],arr =['营业厅订单','外围订单']
                     res.data.forEach(item=>{
                         if(arr.indexOf(item.name)!=-1){
                             list.push(item)
                         }
                     })
                     this.module6Data = list*/
                    if (res.data.length > 0) {
                        this.module7Data = res.data
                    }

                }
            })
        },
        getModule8Data() {
            let params = {
                provinceCode: this.provinceCode
            }
            getModule8(params).then(res => {
                if (res.code == 200) {
                    if (res.data[0]) {
                        this.module8Data = res.data[0].value
                    }
                }
            })
        },
        getModule9Data() {
            let params = {
                provinceCode: this.provinceCode
            }
            getModule9(params).then(res => {
                /* //过滤数据
                 let list = [],arr = ['产品名称','常用功能']
                 if (res.code == 200) {
                     res.data.forEach(item=>{
                         if(arr.indexOf(item.name) != -1){
                             list.push(item)
                         }
                     })
                     this.module8Data = list
                 }*/
                if (res.code == 200) {
                    if (res.data.length > 0) {
                        this.module9Data = res.data
                    }

                }
            })
        },
        selectName(name, code) {
            this.provinceCode = code
            this.provinceName = name
            this.getData()
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
    height: 100%;

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
            height: 34px;
            font-family: 'LedFont';
            font-size: 28px;
            color: #88d7fd;
            letter-spacing: .93px;
            text-align: right;
            line-height: 34px;
        }

        .time-selection{
            position: absolute;
            top: 44px;
            left: 32px;
            height: 26px;
            line-height: 26px;
            text-align: left;
            font-size: 16px;
            font-family: Helvetica;
            color: #FFFFFF;
            // .time-n{
                
            // }
            .time-option{
                display: inline-block;
                height: 26px;
                width: 72px;
                line-height: 26px;
                margin-left: 14px;
                box-sizing: border-box;
                border-radius: 4px;
                border: 2px solid #026D7E;
                text-align: center;
                cursor: pointer;
                &.active{
                     background: rgba(41, 205, 255, 0.3);
                    box-shadow: 0px 0px 10px 0px rgba(1, 196, 251, 0.7);
                    border-radius: 4px;
                    border: 2px solid #00FFFF;
                }
            }
        }
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 0 auto;
        height: calc(100% - 100px);

        .left-box {
            width: 460px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }

        .center-box {
            margin-left: 23px;
            width: 894px;
            display: flex;
            flex-direction: column;
            background: url("../assets/img/img_bg.png") no-repeat center top;
            background-size: 788px 788px;
            padding-top: 10px;
            justify-content: space-between;
            position: relative;
        }

        .right-box {
            margin-left: 23px;
            width: 460px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }
}
</style>