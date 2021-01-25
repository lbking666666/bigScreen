<template>
    <div class="module7">
        <div class="title-box">
            <commonTitle :titleText="titleText"></commonTitle>
        </div>
        <div class="container">
            <div class="box box-3">
                <div class="box-title">5G订购数</div>
                <div class="box-count">{{moduleData.order5g?formatterNumber(moduleData.order5g):0}}</div>
            </div>

            <div class="box box-2">
                <div class="box-title">2l 用户数</div>
                <div class="box-count">{{moduleData.user2i?formatterNumber(moduleData.user2i):0}}</div>
            </div>

            <div class="box box-4" @mouseover="()=>{showTip =true}" @mouseout="()=>{showTip=false}">
                <div class="tip-box">
                    <div class="label">入：
                        {{moduleData.portability_in?formatterNumber(moduleData.portability_in):0}} </div>
                    <div class="label">出：
                        {{moduleData.portability_out?formatterNumber(moduleData.portability_out):0}} </div>
                </div>
                <div class="box-title">携号转网</div>
                <div class="box-count">{{moduleData.portability?formatterNumber(moduleData.portability):0}}</div>
            </div>

            <div class="box box-1">
                <div class="box-title">跨域用户数</div>
                <div class="box-count">{{moduleData.crossuser?formatterNumber(moduleData.crossuser):0}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import commonTitle from "./commonTitle"
import { formatterNumber } from '@/utils/filterNum'

export default {
    name: "",
    components: {
        commonTitle
    },
    props: {
        moduleData: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            showTip: false,
            titleText: '重点业务场景',
        }
    },
    mounted() {},
    methods: {
        formatterNumber(val) {
            if (val) {

                return formatterNumber(val)
            } else {
                return 0
            }
        },
        resizeFontSize(num) {
            if (num) {
                let numStr = String(num)
                let returnClass = ''
                if (numStr.length <= 6) {
                    returnClass = 'font-size-32'
                } else if (numStr.length == 7) {
                    returnClass = 'font-size-28'
                } else if (numStr.length == 8) {
                    returnClass = 'font-size-25'
                } else if (numStr.length == 9) {
                    returnClass = 'font-size-23'
                }
                return returnClass

            } else {
                return 0
            }

        }
    }
}
</script>
<style lang="less" scoped>
.font-size-23 {
    font-size: 23px !important;
}

.font-size-25 {
    font-size: 25px !important;
}

.font-size-28 {
    font-size: 28px !important;
}

.font-size-32 {
    font-size: 32px !important;
}

.module7 {
    width: 100%;
    height: 290px;
    background: url("../assets/yaxin/kuang_zhongdianyewu.png");
    position: relative;
    box-sizing: border-box;

    .title-box {
        padding-top: 5px;
    }

    .container {
        width: 100%;
        position: absolute;
        left: 0;
        top: 57px;

        .box {
            width: 205px;
            height: 100px;
            position: absolute;
            padding-left: 85px;
            text-align: left;

            .tip-box {
                color: #fff;
                position: absolute;
                left: 0;
                bottom: 3px;
                justify-content: space-around;
                display: flex;
                align-items: center;
                width: 100%;

                .label {
                    font-size: 13px;
                    transform: scale(.85, .85);
                }

            }

            .box-title {
                margin-top: 26px;
                font-size: 16px;
                color: #62a5cd;
                line-height: 16px;
                display: flex;
                align-items: center;

                .wenhao {
                    background: url(../assets/yaxin/wenhao.png) no-repeat;
                    height: 18px;
                    width: 18px;
                    display: inline;
                    margin: 0 3px;
                }
            }

            .box-count {
                margin-top: 12px;
                font-size: 24px;
                color: #c7fcfc;
                line-height: 24px;
            }

            &.box-1 {
                background: url("../assets/yaxin/kuayuyonghushu.png") no-repeat;
                background-size: cover;
                right: 20px;
                top: 110px;
            }

            &.box-2 {
                background: url("../assets/yaxin/user.png") no-repeat;
                background-size: cover;
                right: 20px;
                top: 0;
            }

            &.box-3 {
                background: url("../assets/yaxin/5gdinggoushu.png") no-repeat;
                background-size: cover;
                
                left: 20px;
                top: 0;
            }

            &.box-4 {
                background: url("../assets/yaxin/xiehaozhuanwang.png") no-repeat;
                background-size: cover;
                
                left: 20px;
                top: 110px;
            }
        }
    }
}
</style>