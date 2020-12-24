<template>
    <div class="home">
        <div class="header"></div>
        <div class="container">
            <div class="left-box">
                <div class="notice-wrap common-style-high">
                    <div class="title">
                        <div class="icons">
                            <img src="../assets/img/gaoshiban.png" alt="">
                        </div>
                        <div class="title-text">
                            告示板
                        </div>
                    </div>
                    <div class="line-chart">
                        <noticeBord :provinceName="provinceName"
                                    :userData='noticeBordData.userData'
                                    :externalData='noticeBordData.externalData' />
                    </div>
                </div>
                <div class="external common-style">
                    <div class="title">
                        <div class="icons">
                            <img src="../assets/img/waibuzengliang.png" alt="">
                        </div>
                        <div class="title-text">
                            {{provinceName||'全国'}}外部客户新增量
                        </div>
                        <div class="query-option">
                            <div class="options" :class="flag2==11?'opt-active':''" @click="selExternal(11)"><div>月</div></div>
                            <div class="options" :class="flag2==10?'opt-active':''" @click="selExternal(10)"><div>日</div></div>
                        </div>
                    </div>
                    <div class="line-chart">
                        <lineChart :xData="externalXData" :yData="externalYData" :color="'rgba(110, 239, 155, 1)'"></lineChart>
                    </div>
                </div>
                <div class="inside common-style">
                    <div class="title">
                        <div class="icons">
                            <img src="../assets/img/neibuzengliang.png" alt="">
                        </div>
                        <div class="title-text">
                            {{provinceName||'全国'}}内部员工新增量
                        </div>
                        <div class="query-option">
                            <div class="options" :class="flag1==11?'opt-active':''" @click="selInside(11)"><div>月</div></div>
                            <div class="options" :class="flag1==10?'opt-active':''" @click="selInside(10)"><div>日</div></div>
                        </div>
                    </div>
                    <div class="line-chart">
                        <lineChart :xData="insideXData" :yData="insideYData" :color="'rgba(91, 167, 255, 1)'"></lineChart>
                    </div>
                </div>
            </div>
            <div class="center-box">
                <div class="number-boxs">
                    <div class="number-bord-box">
                        <numberBord :title="'外部客户累积量'" :bordNumber="externalTotal" :setTime="setTime" />
                    </div>
                    <div class="number-bord-box">
                        <numberBord :title="'外部客户新增量'" :bordNumber="externalAdd" :setTime="setTime" />
                    </div>
                </div>
                <div class="map-chart-home">
                    <mapChart @reName="selectName" :remap="remap" :remap2="remap2" :mapData="mapData"></mapChart>
                </div>

                <div class="bar-chart-home">
                    <div class="title">
                        <div class="icons">
                            <img src="../assets/img/quanguo.png" alt="">
                        </div>
                        <div class="title-text">
                            全国各省外部客户量
                        </div>
                    </div>
                    <div class="bar-chart-option">
                        <div class="options" :class="flag3==365?'opt-active':''" @click="selTotal(365)"><div>年</div></div>
                        <div class="options" :class="flag3==30?'opt-active':''" @click="selTotal(30)"><div>月</div></div>
                        <div class="options" :class="flag3==7?'opt-active':''" @click="selTotal(7)"><div>日</div></div>
                    </div>
                    <barChart :xData="barXData" :yData="barYData" :maxDataNum="maxDataNum"></barChart>
                </div>
            </div>
            <div class="right-box">
                <div class="rank common-style-high">
                    <div class="title">
                        <div class="icons">
                            <img src="../assets/img/quanguo.png" alt="">
                        </div>
                        <div class="title-text">
                            全国涨幅省份排行榜
                        </div>
                    </div>
                    <!--组件引入-->
                    <div class="ranking-box">
                        <ranking :rankingList='rankingList' />
                    </div>
                </div>
                <div class="interaction common-style">
                    <div class="title">
                        <div class="icons">
                            <img src="../assets/img/hudong.png" alt="">
                        </div>
                        <div class="title-text">
                            客户互动分析
                        </div>
                    </div>
                    <!--组件引入-->
                    <div class="interaction-box">
                        <interaction :showWechatData="showWechatData"></interaction>
                    </div>
                </div>
                <div class="task common-style">
                    <div class="title">
                        <div class="icons">
                            <img src="../assets/img/renwu.png" alt="">
                        </div>
                        <div class="title-text">
                            维系任务量
                        </div>
                    </div>
                    <!--组件引入-->
                    <div class="mainten-box">
                        <mainten :maintenData="maintenData" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import barChart from '@/components/barChart.vue';
import mapChart from '@/components/mapChart.vue';
import lineChart from '@/components/lineChart.vue';
import noticeBord from '@/components/noticeBord.vue';
import ranking from '@/components/ranking.vue';
import interaction from '@/components/interaction.vue';
import mainten from '@/components/mainten.vue';
import numberBord from '@/components/numberBord.vue';
import { addAreaUser, addAreaExternal, areaExternalRank, showWechat, trends, areaExternal, showTask, showArea, showExternal } from '@/api/index.js';

export default {
    name: 'Home',
    components: {
        barChart,
        mapChart,
        lineChart,
        noticeBord,
        ranking,
        interaction,
        mainten,
        numberBord
    },
    data() {
        return {
            flag1: 10,
            flag2: 10,
            flag3: 30,
            areaCode: 1,
            noticeBordData: {},
            remap:0,
            remap2:0,
            rankingList: [],
            maintenData: {},
            externalList: [], // 外部客户量数据
            externalXData: [], // 外部x轴数据
            externalYData: [], // 外部y轴数据
            insideList: [], // 内部客户量数据
            insideXData: [], // 内部x轴数据
            insideYData: [], // 内部y轴数据
            provinceTotalList: [], // 各省数据汇总
            barXData: [], // 各省数据汇总x轴数据
            barYData: [], // 各省数据汇总y轴数据
            maxDataNum: 0, // 汇总图y轴最大值
            provinceName:'', // 选择的省份
            showWechatData: {}, // 互动数接口
            externalTotal: 0,//外部客户累积量
            externalAdd: 0,//外部客户新增量
            mapData:{},//地图数据
            setTime: false
        }
    },
    mounted() {
        this.getData()
        setInterval(()=>{
            this.setTime = true
            this.showExternal() //客户新增量和客户总量查询接口
            this.getTrends() //发展趋势接口
        },5000)
        setInterval(()=>{
            this.getAreaUser() //全国新增内部员工量
            this.getAddAreaExternal() //全国新增外部客户量接口
            this.getAreaExternal() //各省客户汇总数据接口
        },3600000)
    },
    methods: {
        getData() {
            this.getAreaUser() //全国新增内部员工量
            this.getAddAreaExternal() //全国新增外部客户量接口
            this.getAreaExternalRank() //全国涨幅省份排行榜接口
            this.getShowWechat() //发展客户互动数接口
            this.getTrends() //发展趋势接口
            this.getAreaExternal() //各省客户汇总数据接口
            this.getShowTask() //维系任务统计接口
            this.getShowArea()//全国区域查询接口
            this.showExternal() //客户新增量和客户总量查询接口
        },
        getAreaUser() {
            //全国新增内部员工量
            let params = {
                areaCode: this.areaCode,
                flag: this.flag1
            }
            this.remap = 0
            addAreaUser(params).then(res => {
                //console.log(res)
                if(res.code == 200){
                    this.insideList = res.data.list
                    this.insideXData =  this.insideList.map(data=>{
                        return data.objDate
                    })
                    this.remap = 1
                    this.insideYData =  this.insideList.map(data=>{
                        return data.addNum
                    })
                }
            })
        },
        getAddAreaExternal() {
            //全国新增外部客户量接口
            let params = {
                areaCode: this.areaCode,
                flag: this.flag2
            }
            this.remap2 = 0
            addAreaExternal(params).then(res => {
                //console.log(res)
                if(res.code == 200){
                    this.externalList = res.data.list
                    this.externalXData =  this.externalList.map(data=>{
                        return data.objDate
                    })
                    this.remap2 = 1
                    this.externalYData =  this.externalList.map(data=>{
                        return data.addNum
                    })
                }
            })
        },
        getAreaExternalRank() {
            //全国涨幅省份排行榜接口
            let params = {
                areaCode: this.areaCode
            }
            areaExternalRank(params).then(res => {
                // console.log('排行榜', res)
                if(res.code == 200){
                    this.rankingList = res.data.list.slice(0, 5)
                }
            })
        },
        getShowWechat() {
            //发展客户互动数接口
            let params = {
                areaCode: this.areaCode
            }
            showWechat(params).then(res => {
               // console.log(res)
                if(res.code == 200){
                    this.showWechatData = res.data
                }
            })
        },
        getTrends() {
            //发展趋势接口
            let params = {
                areaCode: this.areaCode
            }
            trends(params).then(res => {
                // console.log('趋势', res)
                if(res.code == 200){
                   this.noticeBordData = res.data
                }

            })
        },
        getAreaExternal() {
            //各省客户汇总数据接口
            let params = {
                areaCode: this.areaCode,
                flag: this.flag3
            }
            areaExternal(params).then(res => {
                //console.log(res)
                if(res.code == 200){
                    if(res.data.list){
                        this.provinceTotalList = res.data.list
                        this.barXData =  this.provinceTotalList.map(data=>{
                            return data.areaName
                        })
                        this.barYData =  this.provinceTotalList.map(data=>{
                            return data.addNum
                        })
                        this.maxDataNum = Math.max(...this.barYData)
                    }
                }
            })
        },
        getShowTask() {
            //维系任务统计接口
            let params = {
                areaCode: this.areaCode
            }
            showTask(params).then(res => {
                // console.log('维系任务', res.data)
                if(res.code == 200){
                    this.maintenData = res.data
                }
            })
        },
        getShowArea() {
            //全国区域查询接口
            let params = {
                areaCode: this.areaCode
            }
            showArea(params).then(res => {
                 if(res.code == 200){
                    let arr1 = [],arr2 =[],arr3=[],arr4=[]
                    res.data.map(item=>{
                        if(item.flag == -1){
                           let obj = {
                                name:item.areaName.replace('省','').replace('特别行政区',''),
                                value:item.num,
                                code:item.areaCode,
                                itemStyle: {
                                    areaColor: '#2569BB',
                                    color:'#2569BB',
                                    borderColor: '#2569BB',
                                }
                            }
                            arr1.push(obj)
                        }
                        if(item.colors ==-1){
                            let colors = {
                                name: item.areaName.replace('省','').replace('特别行政区',''),
                                code:item.areaCode,
                            }
                            arr3.push(colors)
                        }
                        if(item.flag>=0){
                            let obj = {
                                name:item.areaName.replace('省','').replace('特别行政区',''),
                                value:item.num,
                                code:item.areaCode,
                                itemStyle: {
                                    areaColor: '#62A5E6',
                                    color: '#62A5E6',
                                    borderColor: "#62A5E6",
                                }
                            }
                            arr2.push(obj)
                        }

                        if(item.colors ==1){
                            let colors = {
                                name: item.areaName.replace('省','').replace('特别行政区',''),
                                code:item.areaCode,
                            }
                            arr4.push(colors)
                        }
                    })
                    this.mapData = {
                        used:arr2,
                        unUsed:arr1,
                        colors:arr4,
                        unColors:arr3
                    }
                    //console.log(this.mapData)
                }
            })
        },
        showExternal() {
            //客户新增量和客户总量查询接口
            let params = {
                areaCode: 1
            }
            showExternal(params).then(res => {
                //console.log(res)
                if(res.code == 200){
                    this.externalTotal =res.data.totalExternal
                    this.externalAdd = res.data.addExternal
                }
            })
        },
        // 外部客户量选择筛选条件
        selExternal(sel){
            this.flag2 = sel
            this.getAddAreaExternal()
        },
        // 内部客户量选择筛选条件
        selInside(sel){
            this.flag1 = sel
            this.getAreaUser()
        },
        //
        selTotal(sel){
            this.flag3 = sel
            this.getAreaExternal()
        },
        selectName(name,code){
            this.provinceName = name
            this.areaCode = code
            this.getTrends() // 告示板
            this.getAreaUser() //全国新增内部员工量
            this.getAddAreaExternal() //全国新增外部客户量接口
            this.getShowWechat() //发展客户互动数接口
            this.getShowTask() //维系任务统计接口
        }

    }
}
</script>
<style lang="less" scoped>
    /*功能title样式*/
    .title{
        width: 100%;
        height: 44px;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: 12px 19px 0px 12px;
        .icons{
            width: 32px;
            height: 32px;
            margin-right: 3px;
            margin-top: 3px;
            img{
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
        .query-option{
            flex: 1;
            display: flex;
            justify-content: flex-end;
            .options{
                width: 40px;
                height: 19px;
                line-height: 19px;
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #308BFD;
                border: 1px solid #308BFD;
                transform: skew(-45deg);
                margin-right: 5px;
                cursor: pointer;
                div{
                    transform: skewX(45deg);
                }
            }
            .opt-active{
                color: #FFFFFF;
                background: linear-gradient(270deg, #7CF1E0 0%, #2C48A5 100%);
            }
        }
    }
    .home{
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background: #010B3D;
        display: flex;
        flex-direction: column;
        .header{
            display: flex;
            width: 100%;
            height: 89px;
            background: url("../assets/img/biaoti.png") no-repeat;
            background-size: 100% 100%;
        }
        .container{
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            margin: 0 auto;
            // 通用样式 高的div
            .common-style-high{
                width: 500px;
                height: 328px;
                background: url("../assets/img/dingbukuang.png") no-repeat;
                background-size: 100% 100%;
                margin-bottom: 24px;
            }
            // 通用样式 低的div
            .common-style{
                width: 500px;
                height: 300px;
                background: url("../assets/img/dingbukuang.png") no-repeat;
                background-size: 100% 100%;
            }
            .left-box{
                /*margin-right: 17px;*/
                .notice-wrap{

                }
                .external{
                    margin-bottom: 20px;
                    display: flex;
                    flex-direction: column;
                    .line-chart{
                        width: 100%;
                        height: 257px;
                    }
                }
                .inside {
                    .line-chart{
                        width: 100%;
                        height: 257px;
                    }
                }

            }
            .center-box{
                width: 860px;
                /*margin-right: 19px;*/
                display: flex;
                flex-direction: column;
                background: url("../assets/img/img_bg.png") no-repeat center top;
                background-size: 788px 788px;
                padding-top: 10px;
                .number-boxs{
                    display: flex;
                    justify-content: space-around;
                    width: 100%;
                    height: 100px;
                    .number-bord-box{
                        height: 62px;
                    }
                }
                .map-chart-home{
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                }
                .bar-chart-home{
                    width: 100%;
                    height: 320px;
                    position: relative;
                    .title{
                        position: absolute;
                        top: -20px;
                    }
                    .bar-chart-option{
                        position: absolute;
                        z-index: 99;
                        top: 25px;
                        right: 20px;
                        display: flex;
                        height: 20px;
                        .options{
                            width: 40px;
                            height: 19px;
                            line-height: 19px;
                            font-size: 14px;
                            font-family: PingFangSC-Medium, PingFang SC;
                            font-weight: 500;
                            color: #308BFD;
                            border: 1px solid #308BFD;
                            transform: skew(-45deg);
                            margin-right: 5px;
                            cursor: pointer;
                            div{
                                transform: skewX(45deg);
                            }
                        }
                        .opt-active{
                            color: #FFFFFF;
                            background: linear-gradient(270deg, #7CF1E0 0%, #2C48A5 100%);
                        }
                    }
                }
            }
            .right-box{
                .rank{
                    width: 500px;
                    height: 330px;
                    .ranking-box{
                        height: 240px;
                    }
                }
                .interaction{
                    margin-bottom: 20px;
                    display: flex;
                    flex-direction: column;
                    .interaction-box{
                        flex: 1;
                    }
                }
                .task{

                }
            }
        }
    }
</style>