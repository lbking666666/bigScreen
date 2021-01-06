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
                        4亿
                    </div>
                </div>
                <div class="left-bottom">
                    <div class="box-title">
                        营业员在线人数
                    </div>
                    <div class="box-num">
                        302,090
                    </div>
                </div>
            </div>
            <div class="right">
                <div class="right-top">
                    <div class="box-title">
                        今日开户数
                    </div>
                    <div class="box-num">
                        1,790
                    </div>
                </div>
                <div class="right-bottom">
                    <p>较前日
                        <span class="font-red">
                            <img src="../assets/img/xiajiang.png" alt="">
                            60%
                        </span>
                        <span class="font-green">
                            <img src="../assets/img/shangsheng.png" alt="">
                            80%
                        </span>
                        <span>持平</span>，
                    </p>
                    <p>较7日均值
                        <span class="font-red">
                            <img src="../assets/img/xiajiang.png" alt="">
                            60%
                        </span>
                        <span class="font-green">
                            <img src="../assets/img/shangsheng.png" alt="">
                            80%
                        </span>
                        <span>持平</span>
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
			
		},
		data(){
			return{
                titleText:'告示板'
			}
		},
		mounted() {
		},
		methods:{
			
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
                        margin: 0;
                        font-size: 18px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #FFFFFF;
                        line-height: 38px;
                    }
                }
            }
        }
    }
</style>