<template>
    <div class="home">
        <div class="header">
            <div class="time-box"></div>
        </div>
        <div class="container">
            <div class="left-box">
                <module1></module1>
                <module2></module2>
                <module3></module3>
            </div>
            <div class="center-box">
                <module4></module4>
                <module5></module5>
            </div>
            <div class="right-box">
                <module6></module6>
                <module7></module7>
                <module8></module8>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import module1 from '@/components/module1.vue';
import module2 from '@/components/module2.vue';
import module3 from '@/components/module3.vue';
import module4 from '@/components/module4.vue';
import module5 from '@/components/module5.vue';
import module6 from '@/components/module6.vue';
import module7 from '@/components/module7.vue';
import module8 from '@/components/module8.vue';
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

        }
    },
    mounted() {
        this.getData()

    },
    methods: {

        getData() {

        },


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

    .query-option {
        flex: 1;
        display: flex;
        justify-content: flex-end;

        .options {
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

            div {
                transform: skewX(45deg);
            }
        }

        .opt-active {
            color: #FFFFFF;
            background: linear-gradient(270deg, #7CF1E0 0%, #2C48A5 100%);
        }
    }
}

.home {

    /*overflow: hidden;*/
    /*background: #010B3D;*/
    /*display: flex;*/
    flex-direction: column;

    .header {
        display: flex;
        width: 100%;
        height: 89px;
        background: url("../assets/img/biaoti.png") no-repeat;
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
            width: 260px;
            text-align: right;
        }
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin: 0 auto;

        // 通用样式 高的div
        .common-style-high {
            width: 500px;
            height: 328px;
            background: url("../assets/img/dingbukuang.png") no-repeat;
            background-size: 100% 100%;
            margin-bottom: 24px;
        }

        // 通用样式 低的div
        .common-style {
            width: 500px;
            height: 300px;
            background: url("../assets/img/dingbukuang.png") no-repeat;
            background-size: 100% 100%;
        }

        .left-box {
            .external {
                margin-bottom: 20px;
                display: flex;
                flex-direction: column;

                .line-chart {
                    width: 100%;
                    height: 257px;
                }
            }

            .inside {
                .line-chart {
                    width: 100%;
                    height: 257px;
                }
            }

        }

        .center-box {
            width: 860px;
            display: flex;
            flex-direction: column;
            background: url("../assets/img/img_bg.png") no-repeat center top;
            background-size: 788px 788px;
            padding-top: 10px;

            .number-boxs {
                display: flex;
                justify-content: center;
                width: 100%;
                height: 100px;

                .number-bord-box {
                    margin-top: 13px;
                    height: 88px;
                }
            }

            .map-chart-home {
                display: flex;
                flex: 1;
                flex-direction: column;
            }

            .bar-chart-home {
                width: 100%;
                height: 320px;
                position: relative;

                .title {
                    position: absolute;
                    top: -20px;
                }

                .bar-chart-option {
                    position: absolute;
                    z-index: 99;
                    top: 25px;
                    right: 20px;
                    display: flex;
                    height: 20px;

                    .options {
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

                        div {
                            transform: skewX(45deg);
                        }
                    }

                    .opt-active {
                        color: #FFFFFF;
                        background: linear-gradient(270deg, #7CF1E0 0%, #2C48A5 100%);
                    }
                }
            }
        }

        .right-box {
            .rank {
                width: 500px;
                height: 330px;
                margin-bottom: 0px;

                .ranking-box {
                    height: 240px;
                }
            }

            .interaction {
                margin-bottom: 24px;
                display: flex;
                flex-direction: column;

                .interaction-box {
                    flex: 1;
                }
            }

            .task {
                margin-bottom: 20px;
            }
        }
    }
}
</style>