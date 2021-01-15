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
                <div class="number-boxs">
                    <div class="number-bord-box">
                        <numberBord :title="'今日开户量'" :bordNumber="externalTotal" :setTime="setTime" />
                    </div>
                    <div class="number-bord-box">
                        <numberBord :title="'今日缴费金额（万元）'" :bordNumber="externalAdd" :setTime="setTime" />
                    </div>
                </div>
                <module5 @reName="selectName" :mapData="mapData" :min="min" :max="max"></module5>
                <module6 :moduleData="module6Data"></module6>
            </div>
            <div class="right-box">
                <!-- 重点业务场景 -->
                <module7 :moduleData="module7Data"></module7>
                <!-- 热销产品/常用功能TOP3 -->
                <module8 :moduleData="module8Data"></module8>
                <module9 :moduleData="module9Data"></module9>
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
import {
    AI_Cz_Users,
    AI_Cz_Process_Card,
    AI_Billing,
    Trade,
    Openbusi,
    getBigData,
    ServiceOrder,
    AI_Credit,
    AI_Produce,
    AsynOpen,
    queryUserCountByProvince,
    queryOrderCount,
    queryTop10ByProvince,
    AI_Billing_00003_YMD,
    AI_Billing_00002_YMD,
    queryCBSSOpenCount

} from '@/api/index.js';
import numberBord from '@/components/numberBord.vue';
// import { geAllData, getMapData, getModule6, getModule7, getModule8,getModule9, getBigData ,AI_Cz_Users} from '@/api/index.js';
import { timestampConversion } from '@/utils/unixToTime.js'
export default {
    name: 'index',
    components: {
        module1,
        module2,
        module3,
        module4,
        module5,
        module6,
        module7,
        module8,
        module9,
        numberBord
    },
    data() {
        return {
            provinceCode: 'ZZ',
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
            setTime: false,
            externalTotal: 0,
            externalAdd: 0
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
        checkTime(num) {
            this.timeIndex = num
            // 在这里执行切换整屏的数据
        },
        getMapData() {

        },
        getData() {
            this.AI_Cz_Users()
            this.AI_Cz_Process_Card()
            this.AI_Billing()
            this.Trade()
            this.Openbusi()
            this.getBigData()
            this.ServiceOrder()
            this.AI_Credit()
            this.AI_Produce()
            this.AsynOpen()
            this.getQueryUserCountByProvince()
            this.getQueryTop10ByProvince()
            this.getQueryOrderCount()
            this.getAI_Billing_00003_YMD()
            this.getAI_Billing_00002_YMD()
            this.getQueryCBSSOpenCount()
        },
        //在网用户
        // ...
        //出账用户
        AI_Cz_Users(){
            let params = {prov_code: 'ZZ'}
            AI_Cz_Users(params).then(res=>{
                console.log('AI_Cz_Users', res)
                this.module1Data.AI_Cz_Users = res.data
            })
        },
        //上月出账金额
        AI_Cz_Process_Card(){
            let params = {prov_code: 'ZZ', cycle: '202012'}
            AI_Cz_Process_Card(params).then(res=>{
                console.log('AI_Cz_Process_Card', res)
                this.module1Data.AI_Cz_Process_Card = res.data.income
            })
        },
        //当月实时收入
        AI_Billing(){
            let params = {prov_code: 'ZZ'}
            AI_Billing(params).then(res=>{
                console.log('AI_Billing', res)
                this.module1Data.AI_Billing = res.data.cb
            })
        },
        //订单量
        Trade(){
            //busi=00&date=H&end=2021-01-14-23&prov_code=ZZ&start=2021-01-14-00
            let params = {
                busi: '00',
                date: 'H',
                end: '2021-01-14-23',
                prov_code: 'ZZ',
                start: '2021-01-14-00',
            }
            Trade(params).then(res=>{
                console.log('Trade', res)
                this.module7Data = res.RSP.DATA
            })
        },
        //用户类型分布
        Openbusi(){
            //busi=A&city_code=0010&date=2021-01-14&prov_code=ZZ
            let params = {
                busi: 'A',
                city_code: '0010',
                date: '2021-01-14',
                prov_code: 'ZZ',
            }
            Openbusi(params).then(res=>{
                console.log('Openbusi', res)
                this.module3Data = res.RSP.DATA[0]
                console.log('this.module3Data',this.module3Data)
            })
        },
        getBigData(){
            //busi=A&city_code=0010&date=2021-01-14&prov_code=ZZ
            let params = {
                provinceCode: '10',
            }
            getBigData(params).then(res=>{
                console.log('getBigData', res)
            })
        },
        //生产运营情况 服务工单数
        ServiceOrder(){
            ServiceOrder().then(res=>{
                console.log('ServiceOrder', res)
                this.module4Data.dataA = 0
                // 日的
                res.data.day.map(dayObj =>{
                    this.module4Data.dataA += dayObj.serviceOrder
                })
                console.log('this.module4Data.dataA',this.module4Data.dataA)
            })
        },
        //生产运营情况 停机量
        AI_Credit(){
            //prov_code=ZZ&sqltype=month
            let params = {
                prov_code: 'ZZ',
                sqltype: 'month',
            }
            AI_Credit(params).then(res=>{
                console.log('AI_Credit', res)
                this.module4Data.dataB = res.data.month.stopNum

            })
        },
        //地图今日开户量
        AI_Produce(){
            //prov_code=ZZ&sqltype=day
            let params = {
                prov_code: 'ZZ',
                sqltype: 'day',
            }
            AI_Produce(params).then(res=>{
                console.log('AI_Produce', res)
            })
        },
        //生产运营情况 开机量
        AsynOpen() {
            //city_code=0010&date=2021-01-14&prov_code=ZZ
            let params = {
                prov_code: 'ZZ',
                city_code: '0010',
                date: '2021-01-14',
            }
            AsynOpen(params).then(res => {
                console.log('AsynOpen', res)
                this.module4Data.dataC = res.RSP.DATA[0]['0010']
            })
        },
        getQueryUserCountByProvince(){
            let params = {
                provinceCode:(this.provinceCode!='ZZ')?this.provinceCode:'00'
            }
            queryUserCountByProvince(params).then(res=>{
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
        getQueryTop10ByProvince() {
            let params = {
                provinceCode:this.provinceCode,
                timeDimension:'month'
            }
            queryTop10ByProvince(params).then(res => {
                if (res.code == 200) {
                    if (res.data.length > 0) {
                        console.log(res.data)
                        this.module9Data = res.data
                    }

                }
            })
        },

        getQueryOrderCount() {
            queryOrderCount().then(res => {

            })
        },
        getAI_Billing_00003_YMD() {
            AI_Billing_00003_YMD().then(res => {

            })
        },
        getAI_Billing_00002_YMD() {
            AI_Billing_00002_YMD().then(res => {

            })
        },
        getQueryCBSSOpenCount() {
            queryCBSSOpenCount().then(res => {

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

        .time-selection {
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
            .time-option {
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

                &.active {
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
        height: 970px;
        margin-top: -6px;

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

            .number-boxs {
                display: flex;
                justify-content: space-evenly;
                width: 100%;
                height: 100px;
                position: absolute;
                z-index: 999;

                .number-bord-box {
                    margin-top: 13px;
                    height: 88px;
                }
            }
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