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
                        <noticeBord :userData='noticeBordData.userData'
                                    :externalData='noticeBordData.externalData' />
                    </div>
                </div>
                <div class="external common-style">
                    <div class="title">
                        <div class="icons">
                            <img src="../assets/img/waibuzengliang.png" alt="">
                        </div>
                        <div class="title-text">
                            河南新增外部客户量
                        </div>
                        <div class="query-option">
                            <div class="options opt-active"><div>月</div></div>
                            <div class="options"><div>日</div></div>
                        </div>
                    </div>
                    <div class="line-chart">
                        <lineChart :color="'rgba(110, 239, 155, 1)'"></lineChart>
                    </div>
                </div>
                <div class="inside common-style">
                    <div class="title">
                        <div class="icons">
                            <img src="../assets/img/neibuzengliang.png" alt="">
                        </div>
                        <div class="title-text">
                            河南新增内部员工量
                        </div>
                        <div class="query-option">
                            <div class="options opt-active"><div>月</div></div>
                            <div class="options"><div>日</div></div>
                        </div>
                    </div>
                    <div class="line-chart">
                        <lineChart :color="'rgba(91, 167, 255, 1)'"></lineChart>
                    </div>
                </div>
            </div>
            <div class="center-box">
                <div class="map-chart-home">
                    <mapChart></mapChart>
                </div>
                <div class="bar-chart-home">
                    <barChart></barChart>
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
                            发展客户互动数
                        </div>
                    </div>
                    <!--组件引入-->
                    <div class="interaction-box">
                        <interaction></interaction>
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
import { addAreaUser, addAreaExternal, areaExternalRank, showWechat, trends, areaExternal, showTask, showArea } from '@/api/index.js';
export default {
    name: 'Home',
    components: {
        barChart,
        mapChart,
        lineChart,
        noticeBord,
        ranking,
        interaction,
        mainten
    },
    data() {
        return {
            flag1: 10,
            flag2: 10,
            flag3: 11,
            areaCode: 1,
            noticeBordData: {},
            rankingList: [],
            maintenData: {}
        }
    },
    mounted() {
        this.getData()
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
        },
        getAreaUser() {
            //全国新增内部员工量
            let params = {
                areaCode: this.areaCode,
                flag: this.flag1
            }
            addAreaUser(params).then(res => {
                console.log(res)
            })
        },
        getAddAreaExternal() {
            //全国新增外部客户量接口
            let params = {
                areaCode: this.areaCode,
                flag: this.flag2
            }
            addAreaExternal(params).then(res => {
                console.log(res)
            })
        },
        getAreaExternalRank() {
            //全国涨幅省份排行榜接口
            let params = {
                areaCode: this.areaCode
            }
            areaExternalRank(params).then(res => {
                // console.log('排行榜', res)
                this.rankingList = res.data.list.slice(0, 5)
            })
        },
        getShowWechat() {
            //发展客户互动数接口
            let params = {
                areaCode: this.areaCode
            }
            showWechat(params).then(res => {
                console.log(res)
            })
        },
        getTrends() {
            //发展趋势接口
            let params = {
                areaCode: this.areaCode
            }
            trends(params).then(res => {
                // console.log('趋势', res)
                this.noticeBordData = res.data
            })
        },
        getAreaExternal() {
            //各省客户汇总数据接口
            let params = {
                areaCode: this.areaCode,
                flag: this.flag3
            }
            areaExternal(params).then(res => {
                console.log(res)
            })
        },
        getShowTask() {
            //维系任务统计接口
            let params = {
                areaCode: this.areaCode
            }
            showTask(params).then(res => {
                // console.log('维系任务', res.data)
                this.maintenData = res.data
            })
        },
        getShowArea() {
            //全国区域查询接口
            let params = {
                areaCode: this.areaCode
            }
            showArea(params).then(res => {
                console.log(res)
            })
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
            background: url("../assets/img/biaoti .png") no-repeat;
            background-size: 100% 100%;
        }
        .container{
            display: flex;
            flex-direction: row;
            padding: 0 30px;
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
                margin-right: 17px;
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
                margin-right: 19px;
                display: flex;
                flex-direction: column;
                .map-chart-home{
                    display: flex;
                    flex: 1;
                }
                .bar-chart-home{
                    width: 100%;
                    height: 320px;
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