<template>
    <div class="home">
        <div class="header"></div>
        <div class="bar-chart">
            <barChart></barChart>
        </div>
        <mapChart />
        <div class="line-chart">
            <lineChart :color="'rgba(110, 239, 155, 1)'"></lineChart>
        </div>
        <div class="line-chart2">
            <lineChart :color="'rgba(91, 167, 255, 1)'"></lineChart>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import barChart from '@/components/barChart.vue';
import mapChart from '@/components/mapChart.vue';
import lineChart from '@/components/lineChart.vue';
import { addAreaUser, addAreaExternal, areaExternalRank, showWechat, trends, areaExternal, showTask, showArea } from '@/api/index.js';
export default {
    name: 'Home',
    components: {
        barChart,
        mapChart,
        lineChart
    },
    data() {
        return {
            flag1: 10,
            flag2: 10,
            flag3: 11,
            areaCode: 1,
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
                console.log(res)
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
                console.log(res)
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
                console.log(res)
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
    .home{
        width: 100%;
        height: 100vh;
        overflow: hidden;
        background: #233A80;
        display: flex;
        flex-direction: column;
        .header{
            width: 100%;
            height: 89px;
            background: url("../assets/img/biaoti .png") no-repeat;
            background-size: 100% 100%;
        }
        .bar-chart{
            width: 860px;
            height: 320px;
        }
        .line-chart{
            background: url("../assets/img/border.png") no-repeat;
            background-size: 100% 100%;
            width: 500px;
            height: 300px;
        }
        .line-chart2{
            background: url("../assets/img/border.png") no-repeat;
            background-size: 100% 100%;
            width: 500px;
            height: 300px;
        }
    }

</style>