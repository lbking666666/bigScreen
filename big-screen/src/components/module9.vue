<template>
    <div class="ranking">
        <div class="title">
            <CommonTitle :titleText='titleText' />
        </div>
        <div class="tab-box">
            <!-- <div class="tab-item" :class="tabIndex===0 ? 'active' : ''" @click="tabChange(0)">热销产品</div>
            <div class="tab-item" :class="tabIndex===1 ? 'active' : ''" @click="tabChange(1)">常用功能</div> -->
            <tabs :barNames="barNames" @checkItem="tabChange" />
        </div>
        <div class="ranking-box">
            <!-- title在Home中 -->
            <div class="ranking-header">
                <div class="name">排名&nbsp;&nbsp;&nbsp;&nbsp;费用名称</div>
                <!-- <div class="name">费用名称</div> -->
                <div class="order-num">费用(万元)</div>
                <div class="order-num">用户数(万户)</div>
                <!-- <div class="name">业务名称</div>
				<div class="order-num">订单量(笔)</div> -->
            </div>
            <div class="ranking-body">
                <div class="rank-item" v-for="(item, index) in activeList" :key="index">
                    <div class="index" v-if="index >= 3">{{String(index+1)}}</div>
                    <div class="index" v-else><i class="index-icon" :class="`icon-${index}`"></i></div>
                    <div class="name">{{tabIndex == 0 ? item.product_name : item.function_name}}</div>
                    <div class="order-num">{{tabIndex == 0 ? formatterNumber(item.product_count) : formatterNumber(item.function_count)}}</div>
                    <div class="order-num">{{tabIndex == 0 ? formatterNumber(item.product_count) : formatterNumber(item.function_count)}}</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import CommonTitle from './commonTitle'
import tabs from '@/components/tabs.vue';
import { formatterNumber } from '@/utils/filterNum'
export default {
    name: "",
    components: {
        CommonTitle,
        tabs
    },
    props: {
        moduleData: {
            type: Array,
            default: () => ([])
        }
    },
    data() {
        return {
            titleText: '收入TOP5',
            tabIndex: 0, // 0: 热销产品； 1: 常用功能；
            activeList: [{
                    product_name: 123,
                    product_count: 123,
                },
                {
                    product_name: 123,
                    product_count: 123,
                },
                {
                    product_name: 123,
                    product_count: 123,
                },
                {
                    product_name: 123,
                    product_count: 123,
                },
                {
                    product_name: 123,
                    product_count: 123,
                },
            ],
            barNames: ['热销产品', '常用功能'],
        }
    },
    mounted() {},
    updated() {
        this.activeList = this.moduleData.length > 0 ? this.moduleData[this.tabIndex].value : []
    },
    methods: {
        tabChange(tab) {
            this.tabIndex = tab
        },
        formatterNumber(val) {
            return formatterNumber(val)
        }
    }
}
</script>
<style lang="less" scoped>
.ranking {
    box-sizing: border-box;
    width: 460px;
    height: 355px;
    // background: url(../assets/yaxin/rank-bg.png) no-repeat;
    background: url(../assets/yaxin/kuang_rexiaochangyong.png) no-repeat;
    background-size: 100% 100%;
    padding-top: 86px;
    position: relative;

    .title {
        position: absolute;
        width: 100%;
        top: 10px;
        left: 0;
    }

    .tab-box {
        position: absolute;
        top: 50px;
        left: 80px;
        width: 300px;
        height: 30px;
        display: flex;

        .tab-item {
            box-sizing: border-box;
            position: absolute;
            width: 150px;
            line-height: 28px;
            height: 30px;
            font-size: 14px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #88D7FD;
            text-align: center;
            cursor: pointer;

            &:first-child {
                top: 0;
                left: 0;
                overflow: hidden;
                border-radius: 15px 0 0 15px;
                border-top: 1px solid #3A66D0;
                border-left: 1px solid #3A66D0;
                border-bottom: 1px solid #3A66D0;
            }

            &:last-child {
                top: 0;
                right: 0;
                overflow: hidden;
                border-radius: 0 15px 15px 0;
                border-top: 1px solid #3A66D0;
                border-right: 1px solid #3A66D0;
                border-bottom: 1px solid #3A66D0;
            }

            &.active {
                box-shadow: 0 0 11px 8px rgba(66, 157, 249, 0.5) inset;
                color: #C7FCFC;
            }
        }
    }

    .ranking-box {
        position: absolute;
        top: 102px;
        left: 0;
        width: 100%;
        text-align: left;
        box-sizing: border-box;
        color: #fff;
        font-size: 14px;
        padding: 0 23px 0 21px;

        .ranking-header {
            line-height: 14px;
            margin-top: 1px;
            display: flex;

            .index,
            .name,
            .order-num {
                font-size: 14px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #01FFFF;
                line-height: 14px;
                text-shadow: 0px 0px 4px rgba(1, 255, 255, 0.6);
            }
        }

        .ranking-body {
            text-align: center;
            margin-top: 12px;

            .rank-item {
                height: 34px;
                line-height: 34px;
                margin-top: 9px;
                display: flex;
                position: relative;

                &:before {
                    content: '';
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    top: 0;
                    left: 0;
                    background: linear-gradient(90deg, #24517F 0%, rgba(0, 184, 252, 0) 100%);
                    opacity: 0.4;
                }

                &:first-child {
                    margin-top: 0;
                }

                &:nth-child(1),
                &:nth-child(2),
                &:nth-child(3) {
                    position: relative;
                    height: 30px;
                    line-height: 30px;

                    &:before {
                        content: '';
                        position: absolute;
                        width: 100%;
                        height: 100%;
                        top: 0;
                        left: 0;
                        opacity: 0.4;
                    }

                    &:after {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 0;
                        width: 3px;
                        height: 30px;
                    }
                }

                &:nth-child(1) {
                    &:before {
                        background: linear-gradient(90deg, rgba(255, 243, 60, 0.59) 0%, rgba(0, 184, 252, 0) 100%);
                    }

                    &:after {
                        background: #FFDA3C;
                    }
                }

                &:nth-child(2) {
                    &:before {
                        background: linear-gradient(90deg, rgba(234, 236, 243, 0.5) 0%, rgba(0, 184, 252, 0) 100%);
                    }

                    &:after {
                        background: #EAECF3;
                    }
                }

                &:nth-child(3) {
                    &:before {
                        background: linear-gradient(90deg, rgba(215, 165, 56, 0.51) 0%, rgba(0, 184, 252, 0) 100%);
                    }

                    &:after {
                        background: #D7A538;
                    }
                }

                .growth-rate {
                    color: #75EF9E;
                }
            }
        }

        .index {
            width: 73px;
            text-align: center;
            padding-right: 20px;

            .index-icon {
                display: inline-block;
                width: 20px;
                height: 15px;
                vertical-align: text-top;

                &.icon-0 {
                    background: url('../assets/yaxin/diyi.png') no-repeat;
                    background-size: contain;
                }

                &.icon-1 {
                    background: url('../assets/yaxin/dier.png') no-repeat;
                    background-size: contain;
                }

                &.icon-2 {
                    background: url('../assets/yaxin/disan.png') no-repeat;
                    background-size: contain;
                }
            }
        }

        .name {
            width: 220px;
            text-align: left;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #FFFFFF;
            overflow: hidden;
            padding-right: 10px;
        }

        .order-num {
            width: 133px;
            text-align: left;
            // padding-right: 57px;
            font-size: 14px;
            font-family: PingFangSC-Medium, PingFang SC;
            font-weight: 500;
            color: #C7FCFC;
        }
    }
}
</style>