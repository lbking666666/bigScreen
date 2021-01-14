<template>
    <div class="module7">
        <commonTitle :titleText="titleText"></commonTitle>
        <div class="unit">单位：笔</div>
        <div class="container">
            <div class="box">
                <div class="box-title">5G订购数</div>
                <div class="box-count" :class="resizeFontSize(moduleData.order5g)">{{formatterNumber(moduleData.order5g)}}</div>
            </div>
            <div class="box pointer">
                <div class="box-title">跨域用户数</div>
                <div class="box-count" :class="resizeFontSize(moduleData.crossuser)">{{formatterNumber(moduleData.crossuser)}}</div>
                <div class="pointer-view">
                    <p>套餐数：{{formatterNumber(moduleData.crossmixmenu)}}</p>
                    <p>用户数：{{formatterNumber(moduleData.crossmixuser)}}</p>
                </div>
            </div>
            <div class="box pointer">
                <div class="box-title">携号转网</div>
                <div class="box-count" :class="resizeFontSize(moduleData.portability)">{{formatterNumber(moduleData.portability)}}</div>
                <div class="pointer-view">
                    <p>携入数：{{formatterNumber(moduleData.portability_in)}}</p>
                    <p>携出数：{{formatterNumber(moduleData.portability_out)}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import commonTitle from "./commonTitle";
    import {formatterNumber} from '@/utils/filterNum'

    export default {
		name: "",
        components:{commonTitle},

        props: {
            moduleData:{
                type: Object,
                default:{}
            }
		},
		data(){
			return{
                titleText:'重点业务场景'
            }
		},
		mounted() {
		},
		methods:{
			formatterNumber(val){
                return formatterNumber(val)
            },
            resizeFontSize(num){
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
            }
		}
	}
</script>

<style lang="less" scoped>
    .font-size-23{
        font-size: 23px !important;
    }
    .font-size-25{
        font-size: 25px !important;
    }
    .font-size-28{
        font-size: 28px !important;
    }
    .font-size-32{
        font-size: 32px !important;
    }
    .module7{
        width: 100%;
        height: 170px;
        background: url("../assets/yaxin/kuang_youzhong.png");
        display: flex;
        flex-direction: column;
        .unit{
            width: 100%;
            text-align: right;
            height: 20px;
            font-size: 14px;
            font-family: PingFangSC-Regular, PingFang SC;
            font-weight: 400;
            color: #A9F0FF;
            line-height: 20px;
            padding-right: 8px;
        }
        .container{
            width: 100%;
            flex: 1;
            display: flex;
            justify-content: space-around;
            .box{
                width: 140px;
                height: 90px;
                background: url("../assets/yaxin/xitongyonghu.png") no-repeat;
                background-size: 100% 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                &.pointer{
                    cursor: pointer;
                    position: relative;
                    .pointer-view{
                        position: absolute;
                        bottom: 40%;
                        width:auto;
                        padding: 8px 12px;
                        background: rgba(0, 0, 0, 0.8);
                        border-radius: 4px;
                        color: #fff;
                        font-size: 13px;
                        display: none;
                        p{
                            margin:4px 0;
                        }
                    }
                    &:hover{
                        .pointer-view{
                            display: block;
                        }
                    }
                }
                .box-title{
                    font-size: 14px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #88D7FD;
                    line-height: 24px;
                    text-shadow: 0px 0px 4px rgba(1, 138, 255, 0.6);
                    margin-bottom: 5px;
                }
                .box-count{
                    font-size: 32px;
                    font-family: PingFangSC-Medium, PingFang SC;
                    font-weight: 500;
                    color: #C7FCFC;
                    line-height: 26px;
                }
            }
        }
    }
</style>