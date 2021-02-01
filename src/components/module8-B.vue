<template>
    <div class="rose-charts">
        <div class="title-box">
            <commonTitle :titleText="titleText" />
        </div>
        <div class="bar-box">
            <tabs :barNames="barNames" @checkItem="changeBar" />
        </div>
        <div class="list-title">
            <div class="title-1">{{chartName[activeIndex]}}</div>
            <div class="title-2">{{countStr[activeIndex]}}</div>
        </div>
        <div class="list-box">
            <div class="container" v-for="(item, index) in list" :key="index">
                <div class="title">{{item.name}}</div>
                <div class="process">
                    <div class="process-dot" :style="'background:'+bc[index]"></div>
                    <div class="per" :style="`width: ${item.percent}%; background: ${bg[index]}`"></div>
                </div>
                <div class="total">{{formatterNumber(item.num)}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import commonTitle from "./commonTitle.vue";
import tabs from '@/components/tabs.vue';
import { formatterNumber } from '@/utils/filterNum'
export default {
    name: "roseCharts",
    components: {
        commonTitle,
        tabs
    },
    props: {
        moduleData: {
            type: Array,
            default: []
        }
    },
    data() {
        return {
            titleText: '热销产品/常用功能TOP5',
            barNames: ['热销产品', '常用功能'],
            chartName: ['产品', '功能'],
            countStr: ['订购量', '使用次数'],
            activeIndex: 0,
            list: [],
            bg: [
                'linear-gradient(270deg, #45fb9d 0%, #f8d551 100%)',
                'linear-gradient(270deg, #38fca3 0%, #48ccee 100%)',
                'linear-gradient(270deg, #2dc7ff 0%, #4e85ff 100%)',
                'linear-gradient(270deg, #30c9f7 0%, #47f89c 100%)',
                'linear-gradient(270deg, #366fdf 0%, #23c4fe 100%)'
            ],
            bc: ['#45fb9d', '#38fca3', '#2dc7ff', '#799dff', '#366fdf'],
        }
    },
    mounted() {
        if (this.moduleData[this.activeIndex]) {
            this.list = this.moduleData[this.activeIndex].list
        }

    },
    updated() {
        this.list = this.moduleData[this.activeIndex].list
    },
    methods: {
        changeBar(num) {
            this.activeIndex = num
            this.list = []
            this.list = this.moduleData[num].list
        },
        formatterNumber(num) {
            return formatterNumber(num)
        }
    }
}
</script>
<style lang="less" scoped>
.rose-charts {
    box-sizing: border-box;
    width: 100%;
    height: 295px;
    background: url(../assets/yaxin/kuang_rexiaochangyong.png) no-repeat;
    background-size: cover;
    position: relative;

    .title-box {
        margin-top: 5px;
    }

    .bar-box {
        position: absolute;
        top: 52px;
        left: 80px;
        width: 300px;
        height: 32px;
    }

    .list-title{
        color: #88d7fd;
        font-size: 14px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        text-shadow: 0px 0px 2px #9bd6f1;
        position: absolute;
        width: 100%;
        top: 97px;
        left: 0;
        line-height: 15px;
        text-align: left;
        .title-1{
            position: absolute;
            top: 0;
            left: 20px;
        }
        .title-2{
            position: absolute;
            width: 100px;
            top: 0;
            right: 0;
        }
    }

    .list-box{
        position: absolute;
        width: 100%;
        top: 120px;
        left: 0;
        .container {
            display: flex;
            width: 100%;
            height: 15px;
            line-height: 15px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
            padding-left: 20px;
            margin-bottom: 18px;
            .title {
                width: 114px;
                text-align: left;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }

            .process{
                width: 200px;
                margin-left: 14px;
                height: 10px;
                margin-top: 2px;
                background: rgba(136, 215, 253, 0.2);
                border-radius: 7px;
                position: relative;

                .process-dot {
                    position: absolute;
                    top: 0;
                    left: -8px;
                    width: 5px;
                    height: 10px;
                    border-top-left-radius: 10px;
                    border-bottom-left-radius: 10px;
                }

                .per {
                    // width: 50%;
                    height: 10px;
                    border-radius: 5px;
                }
            }

            .total {
                width: 100px;
                margin-left: 12px;
                text-align: left;
            }
        }
    }
}
</style>