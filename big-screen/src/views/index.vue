<template>
    <div class="home">
        <div class="header">
            <div class="time-box">
                <div class="time-str" v-for="(item, index) in dateTimeStr" :key="index">{{item}}</div>
            </div>
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
                <module2 :code="provinceCode" :moduleData="module2Data" :countStr="countStr"></module2>
                <module3 :moduleData="module3Data" :code="provinceCode" :list="dataList2"></module3>
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
                <module9 :list1="list1" :list2="list2"></module9>
            </div>
        </div>
    </div>
</template>
<script>
let now = new Date()
let month = Number(now.getMonth()+1)
let monthLen = String(month).length
let month_num = (monthLen>1)?month:0+String(month)
let day = now.getDate()
let dayLen = String(day).length;
let day_num = (dayLen>1)?day: 0 + String(day)
import module1 from '@/components/module1.vue';
import module2 from '@/components/module2.vue';
import module3 from '@/components/module3.vue';
import module4 from '@/components/module4.vue';
import module5 from '@/components/module5.vue';
import module6 from '@/components/module6.vue';
import module7 from '@/components/module7.vue';
import module8 from '@/components/module8-B.vue';
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
    getMapData,
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
            totalServer:0,
            serverNum:0,
            module1Data: {},
            module2Data: {},
            module3Data: [],
            dataList2:[],
            module4Data: [],
            module6Data: [],
            module7Data: [],
            module8Data: [],
            list1: [],
            list2: [],
            module9Data: [],
            mapData: [],
            sqltype:'day',
            min: 0,
            max: 100,
            provinceName: '全国',
            leftData: 0,
            leftdata1:0,
            nowTime: (new Date()).getTime() / 1000,
            dateTimeStr: timestampConversion((new Date()).getTime() / 1000).split(''),
            timeIndex: 0, // 0: 日; 1: 月; 2: 年;
            setTime: false,
            date:now.getFullYear() +'-'+ month_num +'-'+day_num,
            externalTotal: 0,
            dateB:'H',
            startDate:now.getFullYear() +'-'+  month_num +'-'+day_num + '-00',
            endDate:now.getFullYear() +'-'+  month_num +'-'+day_num + '-'+now.getHours(),
            externalAdd: 0
        }
    },
    mounted() {
        this.getData()
        this.getMapData()
        setInterval(()=>{
            this.setTime = true
            this.getSetTime() 
        },5000)
        setInterval(()=>{
            this.serverQuer = true
        },300000)
        setInterval(() => {
            this.nowTime += 1
            this.dateTimeStr = timestampConversion(this.nowTime).split('')
        }, 1000)
    },
    methods: {
        checkTime(num) {
            this.timeIndex = num
            if (num == 0) {
                this.sqltype = 'day'
                this.dateB = 'H'
                this.date =now.getFullYear() +'-'+  month_num +'-'+day_num;
                this.startDate = now.getFullYear() +'-'+  month_num +'-'+day_num + '-00'
                this.endDate = now.getFullYear() +'-'+  month_num +'-'+day_num + '-'+now.getHours()
            } else if (num == 1) {
                 this.sqltype = 'month'
                 this.dateB = 'D'
                 this.date = now.getFullYear() +'-'+ month_num
                this.startDate = now.getFullYear() +'-'+ month_num +'-01'
                this.endDate = now.getFullYear() +'-'+  month_num +'-'+day_num
            } else if (num == 2) {
                 this.sqltype = 'year'
                 this.dateB = 'M'
                 this.date = now.getFullYear()
                 this.startDate = now.getFullYear() +'-01'
                 this.endDate = now.getFullYear() +'-'+ month_num
            }
            this.getData()
            // 在这里执行切换整屏的数据
        },
        getSetTime() {
            this.AsynOpen()
            this.AI_Produce()
            this.AI_Billing()
            this.getQueryOrderCount()
            this.Trade()
            this.Openbusi()
            this.getBigData()
            if(this.serverQuer == true){
                this.ServiceOrder()
            }else{
                if(this.serverNum == 0){
                    this.module4Data.dataA  = this.module4Data.dataA + 1
                }else{
                    this.module4Data.dataA  = this.module4Data.dataA + this.serverNum/60
                }
                
            }
            this.AI_Credit()
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
        //在网用户
        // ...
        //出账用户
        AI_Cz_Users() {
            let params = { prov_code: this.provinceCode }
            AI_Cz_Users(params).then(res => {
                this.module1Data.AI_Cz_Users = res.data
            })
        },
        //上月出账金额
        AI_Cz_Process_Card() {
            let params = { prov_code: this.provinceCode, cycle: '202012' }
            AI_Cz_Process_Card(params).then(res => {
                this.module1Data.AI_Cz_Process_Card = res.data.income
            })
        },
        //当月实时收入
        AI_Billing() {
            let params = { prov_code: this.provinceCode }
            AI_Billing(params).then(res => {
                this.module1Data.AI_Billing = res.data.cb
            })
        },
        //订单量
        Trade() {
            //busi=00&date=H&end=2021-01-14-23&prov_code=ZZ&start=2021-01-14-00
            let params = {
                busi: '00',
                date: this.dateB,
                end: this.endDate,
                prov_code: this.provinceCode,
                start: this.startDate,
            }
            Trade(params).then(res => {
                if (this.dateB == 'H') {
                    this.countStr = '万'
                    this.module2Data = res.RSP.DATA
                } else if (this.dateB == 'D') {
                    this.countStr = '千万'
                    let list = []
                    res.RSP.DATA.map(item => {
                        let obj = {
                            date: item.date.slice(5),
                            ZZ: item.ZZ
                        }
                        list.push(obj)
                    })
                    this.module2Data = list
                } else {
                    this.countStr = '千万'
                    this.module2Data = res.RSP.DATA
                }

                // console.log(params, this.module2Data)
            })
        },
        //用户类型分布
        Openbusi() {
            //busi=A&city_code=0010&date=2021-01-14&prov_code=ZZ
            let params = {
                busi: 'A',
                date: this.date,
                prov_code: this.provinceCode,
            }
            Openbusi(params).then(res => {
                this.module3Data = res.RSP.DATA[0]
            })
        },
        getBigData() {
            //busi=A&city_code=0010&date=2021-01-14&prov_code=ZZ
            let params = {
                provinceCode: this.provinceCode,
            }
            getBigData(params).then(res => {
                this.dataList2 = res.data[0]
                this.leftdata1 = Number(res.data[0].value.usercount)
            })
        },
        //生产运营情况 服务工单数
        ServiceOrder() {
            ServiceOrder().then(res => {
                this.module4Data.dataA = 0
                // 日的
                 res.data[this.sqltype].map(dayObj => {
                    if(this.provinceCode == dayObj.provinceCode){
                        //存储有值
                        if(this.serverQuer){
                            this.module4Data.dataA = this.totalServer
                            //五分钟直接数据差值
                            this.serverNum = dayObj.serviceOrder - this.totalServer
                            //新的数据值
                            this.totalServer = dayObj.serviceOrder
                            this.serverQuer = false
                        }else{
                            this.totalServer = dayObj.serviceOrder
                            this.module4Data.dataA = this.totalServer - 60
                        }
                    }
                })
            })
        },
        //生产运营情况 停机量
        AI_Credit() {
            //prov_code=ZZ&sqltype=month
            let params = {
                prov_code: this.provinceCode,
                sqltype: this.sqltype,
            }
            AI_Credit(params).then(res => {
                console.log(this.sqltype)
                console.log(res.data[this.sqltype])
                if(res.data[this.sqltype]){

                this.module4Data.dataB = res.data[this.sqltype].stopNum
                this.module4Data.dataC = res.data[this.sqltype].openNum
                }

            })
        },
        //今日缴费
        AI_Produce() {
            //prov_code=ZZ&sqltype=day
            let params = {
                prov_code: this.provinceCode,
                sqltype: 'day',
            }
            AI_Produce(params).then(res => {
                this.externalAdd = Number(Number(res.data['day'].pay_money).toFixed(0))
                this.leftData= this.leftdata1+ Number(this.externalAdd)
            })
        },
        //今日开户量
        AsynOpen() {
            //city_code=0010&date=2021-01-14&prov_code=ZZ
            let month = Number(now.getMonth()+1)
            let monthLen = String(month).length
            let month_num = (monthLen>1)?month:0+String(month)
            let day = now.getDate()
            let dayLen = String(day).length;
            let day_num = (dayLen>1)?day: 0 + String(day)
            let params = {
                prov_code: this.provinceCode,
                date: now.getFullYear() +'-'+ month_num +'-'+day_num,
            }
            AsynOpen(params).then(res => {

                this.externalTotal = res.RSP.DATA[0][this.provinceCode]
            })
        },
        //全国31省用户量/arpu值
        getQueryUserCountByProvince() {
            let params = {
                provinceCode: (this.provinceCode != 'ZZ') ? this.provinceCode : '00'
            }
            queryUserCountByProvince(params).then(res => {
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
                        let arr = list.sort(function(a, b) { return b.number - a.number; })
                        this.module6Data = arr
                    }
                }
            })
        },
        //热销产品/常用功能TOP3
        getQueryTop10ByProvince() {
            let params = {
                provinceCode: this.provinceCode,
                timeDimension: this.sqltype,
            }
            queryTop10ByProvince(params).then(res => {
                if (res.code == 200) {
                    if (res.data.length > 0) {
                        let list = []
                        let arr1 = [],
                            arr2 = []

                        let max1 = res.data[0].value[0].product_count
                        let max2 = res.data[1].value[0].function_count

                        res.data[0].value.forEach(child => {
                            let data = {
                                name: child.product_name,
                                num: child.product_count,
                                percent: Number((child.product_count * 100/max1).toFixed(0))
                            }
                            arr1.push(data)
                        })
                        res.data[1].value.forEach(child => {
                            let data = {
                                name: child.function_name,
                                num: child.function_count,
                                percent: Number((child.function_count * 100/max2).toFixed(0))
                            }
                            arr2.push(data)
                        })
                        list = [{ list: arr1 }, { list: arr2 }]
                        this.module8Data = list
                    }
                }
            })
            // this.module8Data=[
            //     {list: [
            //         {name: '普通付费关系变更', num: 2763873, percent: 100},
            //         {name: '普通付费关系变更换入', num: 2163873, percent: 90},
            //         {name: 'fakeName', num: 1763873, percent: 80},
            //         {name: 'fakeName', num: 1063873, percent: 50},
            //         {name: 'fakeName', num: 763873, percent: 40},
            //     ]},
            //     {list: [
            //         {name: '普通付费关系变更', num: 2763873, percent: 100},
            //         {name: '普通付费关系变更换入', num: 2163873, percent: 90},
            //         {name: 'fakeName', num: 1763873, percent: 80},
            //         {name: 'fakeName', num: 1063873, percent: 50},
            //         {name: 'fakeName', num: 763873, percent: 40},
            //     ]}
            // ]
        },
        //重点业务
        getQueryOrderCount() {
            let params = {
                provinceCode: this.provinceCode,
                timeDimension: this.sqltype
            }
            queryOrderCount(params).then(res => {
                // 该接口暂时切换为原来的静态数据
                this.module7Data = res.data[0]
            })
        },
        getAI_Billing_00003_YMD() {
            let params = {
                prov_code: this.provinceCode,
                sqltype: this.sqltype
            }
            AI_Billing_00003_YMD(params).then(res => {
                if (res.code == 200) {
                    this.list1 = res.data[this.sqltype].slice(0, 5)
                }

            })
        },
        getAI_Billing_00002_YMD() {
            let params = {
                prov_code: this.provinceCode,
                sqltype: this.sqltype
            }
            AI_Billing_00002_YMD(params).then(res => {
                if (res.code == 200) {
                    this.list2 = res.data[this.sqltype].slice(0, 5)
                }
            })
        },
        getQueryCBSSOpenCount() {
            let params = {
                provinceCode: this.provinceCode,
            }
            queryCBSSOpenCount(params).then(res => {

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
        background: url("../assets/yaxin/header-bg.png") no-repeat;
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