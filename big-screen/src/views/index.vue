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
    AI_Cz_Process_Card,queryTop10ByProvince,queryOrderCount,AI_Billing_00003_YMD,AI_Billing_00002_YMD,queryCBSSOpenCount

} from '@/api/index.js';
import numberBord from '@/components/numberBord.vue';
// import { geAllData, getMapData, getModule6, getModule7, getModule8,getModule9, getBigData ,AI_Cz_Users} from '@/api/index.js';
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
        module9,
        numberBord
    },
    data() {
        return {
            provinceCode: '00',
            module1Data: {},
            module2Data: {},
            module3Data: [],
            module4Data:[],
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
        checkTime(num){
            this.timeIndex = num
            // 在这里执行切换整屏的数据
        },
        getMapData() {
            
        },
        getData() {
            this.getModule6Data()
            this.getModule7Data()
            this.getModule8Data()
            this.getModule9Data()
            this.AI_Cz_Users()
            this.AI_Cz_Process_Card()
        },
        AI_Cz_Users(){
            let params = {prov_code: 'ZZ'}
            AI_Cz_Users(params).then(res=>{
                console.log('AI_Cz_Users', res)
            })
        },
        AI_Cz_Process_Card(){
            let params = {prov_code: 'ZZ', cycle: '202012'}
            AI_Cz_Process_Card(params).then(res=>{
                console.log('AI_Cz_Process_Card', res)
            })
        },
        getModule6Data() {

        },
        getModule7Data() {
            this.module7Data = [
                {
                    date:'2021-01-01',
                    saleNum: 123,
                },
                {
                    date:'2021-01-02',
                    saleNum: 13,
                },
                {
                    date:'2021-01-03',
                    saleNum: 23,
                },
                {
                    date:'2021-01-04',
                    saleNum: 223,
                },
                {
                    date:'2021-01-05',
                    saleNum: 123,
                },
                {
                    date:'2021-01-06',
                    saleNum: 13,
                },
                {
                    date:'2021-01-07',
                    saleNum: 166,
                },
            ]
        },
        getModule8Data() {
        },
        getModule9Data() {
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
            .number-boxs{
                display: flex;
                justify-content: space-evenly;
                width: 100%;
                height: 100px;
                position: absolute;
                z-index: 999;
                .number-bord-box{
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