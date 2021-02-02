<template>
    <div class="module7">
        <div class="title-box">
            <commonTitle :titleText="titleText"></commonTitle>
        </div>
        <div class="pop-tip" v-if="popIndex!=0" :class="popIndex==1?'max-width':''" :style="{top:top+'px',left:left+'px'}">
            <div class="pop-col" v-if="popIndex==1" v-for="item in pop1List">
                <div class="hd">
                    {{item.title}}
                </div>
                <div class="bd">
                    <div class="col" style="width:40%">跨域用户数：{{item.user}}</div>
                    <div class="col" style="width:60%">异地补换卡：{{item.changeCard}}</div>
                    <div class="col" style="width:40%">异地交费：{{item.pay}}</div>
                    <div class="col" style="width:60%">异地单产品套餐变更：{{item.changePackage}}</div>
                </div>
            </div>
            <div class="pop-col" v-if="popIndex==2" v-for="item in pop2List">
                <div class="hd">
                    {{item.title}}
                </div>
                <div class="bd">
                    <div class="col">2i 用户数：{{item['2i']}}</div>
                    <div class="col">5G 2i 用户数：{{item['5g']}}</div>
                </div>
            </div>
            <div class="pop-col" v-if="popIndex==3" v-for="item in pop3List">
                <div class="hd">
                    {{item.title}}
                </div>
                <div class="bd">
                    <div class="col">5G订购数：{{item['5g']}}</div>
                    <div class="col">4G转5G：{{item['4g']}}</div>
                </div>
            </div>
            <div class="pop-col" v-if="popIndex==4" v-for="item in pop4List">
                <div class="hd">
                    {{item.title}}
                </div>
                <div class="bd">
                    <div class="col">入：{{item.in}}</div>
                    <div class="col">出：{{item.out}}</div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="box box-3" @click.stop="showPop($event,1)">
                <div class="box-title">5G订购数 <i class="wenhao"></i></div>
                <div class="box-count">{{moduleData.order5g?formatterNumber(moduleData.order5g):0}}</div>
            </div>
            <div class="box box-2" @click.stop="showPop($event,2)">
                <div class="box-title">2l 用户数 <i class="wenhao"></i></div>
                <div class="box-count">{{moduleData.user2i?formatterNumber(moduleData.user2i):0}}</div>
            </div>
            <div class="box box-4" @click.stop="showPop($event,3)">
                <!-- <div class="tip-box">
                    <div class="label">入：
                        {{moduleData.portability_in?formatterNumber(moduleData.portability_in):0}} </div>
                    <div class="label">出：
                        {{moduleData.portability_out?formatterNumber(moduleData.portability_out):0}} </div>
                </div> -->
                <div class="box-title">携号转网 <i class="wenhao"></i></div>
                <div class="box-count">{{moduleData.portability?formatterNumber(moduleData.portability):0}}</div>
            </div>
            <div class="box box-1" @click.stop="showPop($event,4)">
                <div class="box-title">跨域用户数 <i class="wenhao"></i></div>
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
            popIndex: 0,
            top: 0,
            left: 0,
            titleText: '重点业务场景',
            pop1List: [{
                title: '黑龙江',
                user: 10,
                changeCard: 20,
                pay: 10,
                changePackage: 40
            }],
            pop2List: [{
                title: '黑龙江',
                '2i': 10,
                '5g': 20
            }],
            pop3List: [{
                title: '黑龙江',
                '5g': 10,
                '4g': 20
            }],
            pop4List: [{
                title: '黑龙江',
                in: 200,
                out: 200
            }, {
                title: '黑龙江',
                in: 200,
                out: 200
            }, {
                title: '黑龙江',
                in: 200,
                out: 200
            }, {
                title: '黑龙江',
                in: 200,
                out: 200
            }, {
                title: '黑龙江',
                in: 200,
                out: 200
            }, {
                title: '黑龙江',
                in: 200,
                out: 200
            }, {
                title: '黑龙江',
                in: 200,
                out: 200
            }, {
                title: '黑龙江',
                in: 200,
                out: 200
            }, {
                title: '黑龙江',
                in: 200,
                out: 200
            }, {
                title: '黑龙江',
                in: 200,
                out: 200
            }, {
                title: '黑龙江',
                in: 200,
                out: 200
            }, {
                title: '黑龙江',
                in: 200,
                out: 200
            }, {
                title: '黑龙江',
                in: 200,
                out: 200
            }, {
                title: '黑龙江',
                in: 200,
                out: 200
            }, {
                title: '黑龙江',
                in: 200,
                out: 200
            }, {
                title: '黑龙江',
                in: 200,
                out: 200
            }]
        }
    },
    mounted() {
        this.handleWin()
    },
    methods: {
        handleWin() {
            let self = this
            document.addEventListener('click', function(e) {
                // 这里that代表组件，this代表document
                // 冒泡也不会隐藏
                
                self.popIndex = 0
            })
        },
        showPop(e, index) {
            if (index == 1) {
                this.top = 190
                this.left = 1420
            } else if (index == 2) {
                this.top = 190
                this.left = 1650
            } else if (index == 3) {
                this.top = 300
                this.left = 1420
            } else if (index == 4) {
                this.top = 300
                this.left = 1650
            }

            this.popIndex = index
        },
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

.pop-tip {
    position: fixed;
    top: 0;
    left: 0;
    width: 254px;
    max-height: 520px;
    overflow-x: hidden;
    border: 1px solid #f79146;
    background: rgba(0, 0, 0, 0.8);
    overflow-y: auto;
    z-index: 999;
    color: #fff;
    font-size: 12px;
    text-align: left;
    padding: 4px 15px;
    line-height: 18px;

    &.max-width {
        width: 280px;
    }

    &::-webkit-scrollbar {
        width: 6px;
    }

    /* 这是针对缺省样式 (必须的) */
    &::-webkit-scrollbar-track {
        background-color: rgba(0, 0, 0, 0.8);
    }

    /* 滚动条的滑轨背景颜色 */

    &::-webkit-scrollbar-thumb {
        background-color: rgba(255, 255, 255, 0.9);
        border-radius: 10px;
    }

    /* 滑块颜色 */

    &::-webkit-scrollbar-button {
        background-color: none;
    }

    /* 滑轨两头的监听按钮颜色 */

    &::-webkit-scrollbar-corner {
        background-color: black;
    }

    /* 横向滚动条和纵向滚动条相交处尖角的颜色 */
    .hd {
        margin-top: 5px;
    }

    .bd {
        display: flex;
        flex-wrap: wrap;

        .col {
            width: 50%;
        }
    }
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 20px;
        flex-wrap: wrap;

        .box {
            width: 205px;
            height: 100px;
            padding-left: 85px;
            text-align: left;
            cursor: pointer;
            margin: 4px 0 8px;


            .tip-box {
                color: #fff;
                position: absolute;
                left: 0;
                bottom: 3px;
                justify-content: space-around;
                display: flex;
                align-items: center;
                width: 100%;
                padding: 0 20px;

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
            }

            &.box-2 {
                background: url("../assets/yaxin/user.png") no-repeat;
                background-size: cover;
            }

            &.box-3 {
                background: url("../assets/yaxin/5gdinggoushu.png") no-repeat;
                background-size: cover;
            }

            &.box-4 {
                background: url("../assets/yaxin/xiehaozhuanwang.png") no-repeat;
                background-size: cover;
            }
        }
    }
}
</style>