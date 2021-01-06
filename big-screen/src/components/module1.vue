<template>
    <div class="module1">
        <commonTitle :titleText="titleText"></commonTitle>
        <div class="container">
            <div class="left">
                <div class="left-top">
                    <div class="box-title">
                        系统用户数
                    </div>
                    <div class="box-num">
                        {{module1Data.userCount}}
                    </div>
                </div>
                <div class="left-bottom">
                    <div class="box-title">
                        营业员在线人数
                    </div>
                    <div class="box-num">
                        {{module1Data.onlineCount}}
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="right-top">
                    <div class="box-title">
                        今日开户数
                    </div>
                    <div class="box-num">
                        {{module1Data.todayCount}}
                    </div>
                </div>
                <div class="right-bottom">
                    <p>较前日
                        <span class="font-red" v-if="String(module1Data.lastDayPercent).indexOf('-') == -1">
                            <img src="../assets/yaxin/shangsheng.png" alt="">
                            {{fixedNum(module1Data.lastDayPercent)}}
                        </span>
                        <span class="font-green" v-else-if="String(module1Data.lastDayPercent).indexOf('-') >= 0">
                            <img src="../assets/yaxin/xiajiang.png" alt="">
                            {{fixedNum(module1Data.lastDayPercent)}}
                        </span>
                        <span v-else>持平</span>，
                    </p>
                    <p>较7日均值
                        <span class="font-red" v-if="String(module1Data.lastSevenPercent).indexOf('-') == -1">
                            <img src="../assets/yaxin/shangsheng.png" alt="">
                            {{fixedNum(module1Data.lastSevenPercent)}}
                        </span>
                        <span class="font-green" v-else-if="String(module1Data.lastSevenPercent).indexOf('-') >= 0">
                            <img src="../assets/yaxin/xiajiang.png" alt="">
                            {{fixedNum(module1Data.lastSevenPercent)}}
                        </span>
                        <span v-else>持平</span>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import commonTitle from "./commonTitle";
    export default {
		name: "",
        components:{commonTitle},
		props: {
            module1Data:{
                type: String,
                default:{}
            }
		},
		data(){
			return{
                titleText:'告示板'
			}
		},
		mounted() {
		    console.log('module1Data', this.module1Data)
		},
		methods:{
            fixedNum(num){
                num = (Number(num)*100).toFixed(1)
                if(num){
                    let str = (String(num).indexOf('-') >= 0)?String(num).split('-')[1]:num
                    let backStr =  str +'%'
                    return backStr
                }

            }
		}
	}
</script>

<style lang="less" scoped>
    .module1{
        width: 100%;
        height: 323px;
        background: url("../assets/yaxin/kuang_zuoshang.png");
        display: flex;
        flex-direction: column;
        .container{
            display: flex;
            flex: 1;
            justify-content: space-around;
            align-items: center;
            .box-title{
                font-size: 14px;
                font-family: PingFangSC-Regular, PingFang SC;
                font-weight: 400;
                color: #88D7FD;
                line-height: 24px;
                text-shadow: 0px 0px 4px rgba(1, 138, 255, 0.6);
                margin-bottom: 5px;
            }
            .box-num{
                font-size: 32px;
                font-family: PingFangSC-Medium, PingFang SC;
                font-weight: 500;
                color: #C7FCFC;
                line-height: 26px;
            }
            .left{
                width: 205px;
                height: 246px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .left-top{
                    width: 100%;
                    height: 116px;
                    background: url("../assets/yaxin/xitongyonghu.png");
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .left-bottom{
                    width: 100%;
                    height: 116px;
                    background: url("../assets/yaxin/xitongyonghu.png");
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

            }
            .right{
                width: 205px;
                height: 246px;
                background: url("../assets/yaxin/jinrikaihu.png");
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                .right-top{
                    width: 100%;
                    height: 116px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }
                .right-bottom{
                    width: 100%;
                    height: 116px;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    p{
                        width: 161px;
                        text-align: left;
                        margin: 0;
                        font-size: 18px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #FFFFFF;
                        line-height: 38px;
                        display: flex;
                        .font-red{
                            color: #FC5660;
                            display: flex;
                            align-items: center;
                        }
                        .font-green{
                            color: #63F595;
                            display: flex;
                            align-items: center;
                        }
                    }
                }
            }
        }
    }
</style>