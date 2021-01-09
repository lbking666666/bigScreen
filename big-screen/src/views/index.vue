<template>
    <div class="home">
        <div class="header">
            <div class="time-box">{{ dateTimeStr }}</div>
        </div>
        <div class="container">
            <div class="left-box">
                <module1 :leftData="leftData" :module1Data="module1Data"></module1>
                <module2 :module2Data="module2Data"></module2>
                <module3 :module3Data="module3Data"></module3>
            </div>
            <div class="center-box">
                <module4 @reName="selectName" :mapData="module4Data"></module4>
                <module5 :module5Data="module5Data"></module5>
            </div>
            <div class="right-box">
                <module6 :module6Data="module6Data" :color="'#B085FF'"></module6>
                <module7 :module7Data="module7Data"></module7>
                <module8 :module8Data="module8Data"></module8>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
let now = new Date()
import module1 from '@/components/module1.vue';
import module2 from '@/components/module2.vue';
import module3 from '@/components/module3.vue';
import module4 from '@/components/module4.vue';
import module5 from '@/components/module5.vue';
import module6 from '@/components/module6.vue';
import module7 from '@/components/module7.vue';
import module8 from '@/components/module8.vue';
import { geAllData,getModule1,  getModule4, getModule5, getModule6, getModule7, getModule8, getBigData } from '@/api/index.js';
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
        module8
    },
    data() {
        return {
            provinceCode:'00',
            module1Data: {},
            module2Data: {},
            module3Data: [],
            module4Data: [],
            module5Data: [],
            module6Data: [],
            module7Data: {},
            module8Data: [],
            leftData: {},
            nowTime: (new Date()).getTime()/1000,
            dateTimeStr: timestampConversion((new Date()).getTime()/1000)
        }
    },
    mounted() {
        this.getData()
        setInterval(()=>{
            this.nowTime += 1
            this.dateTimeStr = timestampConversion(this.nowTime)
        }, 1000)
    },
    methods: {
        getData() {
            this.getBigData();
            this.getModule5Data()
            this.getModule6Data()
            this.getModule7Data()
            this.getModule8Data()
        },
        getBigData() {
            let params = {
                provinceCode: this.provinceCode
            }
            getBigData(params).then(res => {
                if (res.code == 200) {
                    geAllData({}).then(res=>{
                        let list = res.data.twoIandTkjData.minute
                        let cbTotal = 0
                        for(let i in list){
                            let arr = list[i].series['总开户量']
                            let len = arr.length
                            let num = arr[arr.length-1]
                            cbTotal += Number(num)
                        }
                        let list2 = res.data.BusinessAcceptanceData.month
                        let yesdayTotal = 0;
                        let sendayTotal = 0;
                        let dayNum = 0;
                        for(let i in list2){
                            let arr = list2[i].series['总开户量']
                            let len = arr.length
                            let num = arr[arr.length-1]
                            yesdayTotal += Number(num)
                            let newArr = []
                            if(len >7){
                                newArr = arr.slice(len-8,len-1)
                                dayNum = 7
                            }else{
                                newArr = arr
                                dayNum = len-1
                            }
                            newArr.forEach((i)=>{
                                sendayTotal += Number(i)
                            })
                        }
                        let sevenNum =Number(sendayTotal/dayNum).toFixed(0)
                        let data = {
                            todayCount : cbTotal,
                            lastDayPercent: (cbTotal-yesdayTotal)/yesdayTotal,
                            lastSevenPercent:(cbTotal-sevenNum)/sevenNum
                        }
                        this.module1Data = data
                    })
                    let data4 = []
                    res.data.map(item => {
                        if (item.name == '全国') {
                            let values = item.value
                            let data1 = {
                                userCount:values.usercount,
                                onlineCount:values.billuser
                            }
                            this.leftData = data1;
                            let data2 = {
                                day: [{
                                    name: 'cB前台',
                                    value: values.cbfrontinnetday,
                                    per: 80,
                                }, {
                                    name: '掌沃通',
                                    value: values.woinnetday,
                                    per: 20,
                                }, {
                                    name: '其他',
                                    value: values.otherinnetday,
                                    per: 30,
                                }],
                                month: [{
                                    name: 'cB前台',
                                    value: values.cbfrontinnetmonth,
                                    per: 90,
                                }, {
                                    name: '掌沃通',
                                    value: values.woinnetmonth,
                                    per: 30,
                                }, {
                                    name: '其他',
                                    value: values.otherinnetmonth,
                                    per: 26,
                                }],
                            }
                            this.module2Data = data2
                            let data3 = [{ value: values.mobile, name: '移网' },
                                { value: values.broadband, name: '宽带' },
                                { value: values.iptv, name: 'iptv' },
                                { value: values.telephone, name: '固话' },
                                { value: values.otheruser, name: '其它' }
                            ]
                            this.module3Data = data3
                        }else{
                            let values = item.value
                            let params = {
                                name:item.name,
                                value:values.usercount,
                                user:values.cbinnetday,
                                arpu:values.arpu,
                                code:values.provinceCode
                            }
                            data4.push(params)
                        }
                    })
                    if(this.provinceCode == '00'){
                        this.module4Data = data4;
                    }
                    
                }
            })
        },
        getModule5Data() {
            let params = {
                provinceCode: this.provinceCode
            }
            getModule5(params).then(res => {
                if (res.code == 200) {
                    this.module5Data = []
                    res.data.map(item => {
                        let obj = {
                            areaName: item.name,
                            number: item.value.usercount,
                            arpu: item.value.arpu
                        }
                        this.module5Data.push(obj)
                    })
                }
            })
        },
        getModule6Data() {
            let params = {
                provinceCode: this.provinceCode,
                month:now.getMonth() +1
            }
            getModule6(params).then(res => {
                if (res.code == 200) {
                    //过滤数据
                   /* let list = [],arr =['营业厅订单','外围订单']
                    res.data.forEach(item=>{
                        if(arr.indexOf(item.name)!=-1){
                            list.push(item)
                        }
                    })
                    this.module6Data = list*/
                    this.module6Data = res.data
                }
            })
        },
        getModule7Data() {
            let params = {
                provinceCode: this.provinceCode
            }
            getModule7(params).then(res => {
                if (res.code == 200) {
                    this.module7Data = res.data[0].value
                }
            })
        },
        getModule8Data() {
            let params = {
                provinceCode: this.provinceCode
            }
            getModule8(params).then(res => {
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
                    this.module8Data = res.data
                }

            })
        },
        selectName( code) {
            this.provinceCode = code
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