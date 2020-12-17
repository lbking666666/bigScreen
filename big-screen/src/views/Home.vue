<template>
    <div class="home">
        <div class="bar-chart">
            <barChart></barChart>
        </div>
        <mapChart />
        <lineChart />
        <noticeBord :userData='noticeBordData.userData'
                    :externalData='noticeBordData.externalData' />
    </div>
</template>
<script>
// @ is an alias to /src
import barChart from '@/components/barChart.vue';
import mapChart from '@/components/mapChart.vue';
import lineChart from '@/components/lineChart.vue';
import noticeBord from '@/components/noticeBord.vue'
import { addAreaUser, addAreaExternal, areaExternalRank, showWechat, trends, areaExternal, showTask, showArea } from '@/api/index.js';
export default {
    name: 'Home',
    components: {
        barChart,
        mapChart,
        lineChart,
        noticeBord
    },
    data() {
        return {
            flag1: 10,
            flag2: 10,
            flag3: 11,
            areaCode: 1,
            noticeBordData: {}
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
                console.log('趋势', res)
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
        .bar-chart{
            width: 300px;
            height: 200px;
        }
    }

</style>