<template>
    <div class="interaction-con">
        <div class="left-wrap">
            <div class="box">
                <div class="titles">
                    发消息量
                </div>
                <div class="msg-count count">
                    {{formatterNumber(showWechatData.messageCnt)||0}}
                </div>
            </div>
            <div class="box">
                <div class="titles">
                    聊天总量
                </div>
                <div class="msg-total-count count">
                    {{formatterNumber(showWechatData.chatCnt)||0}}
                </div>
            </div>
            <div class="box">
                <div class="titles">
                    平均回复时长
                </div>
                <div class="msg-res-count count">
                    {{showWechatData.avgReplyTime||0}} <span>分</span>
                </div>
            </div>
        </div>
        <div class="right-wrap">
            <div class="ring-chart" ref="chart">
                <canvas id="canvas" :width="width" :height="height"></canvas>
                <div class="center-text">
                    <div class="percent">{{showWechatData.replyPercentage?showWechatData.replyPercentage.toFixed(1):0}}<span>%</span></div>
                    <div class="text">聊天回复占比</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "interaction",
        data(){
            return {
                ringWidth: 15,
                percent: 63,
                width:0,
                height:0,
            }
        },
        props:{
            showWechatData:{
                type:Object
            }
        },
        mounted() {
            this.$nextTick(()=>{
                this.width = this.$refs.chart.offsetWidth
                this.height = this.$refs.chart.offsetHeight
                this.ringWidth = (this.width*15)/233
                //console.log('this.height',this.width, this.height,this.ringWidth)
                //this.drawCanvas()
            })
            window.addEventListener('resize',() => {
                this.$nextTick(()=>{
                    this.width = this.$refs.chart.offsetWidth
                    this.height = this.$refs.chart.offsetWidth
                    this.ringWidth = (this.width*15)/233
                    // console.log('this.height',this.width, this.height,this.ringWidth)
                    this.drawCanvas()
                })
            })
        },
        updated() {
            this.drawCanvas()
        },
        methods:{
            drawCanvas(){
                // console.log('this.showWechatData.replyPercentage', this.showWechatData.replyPercentage)
                let ringDom = document.getElementById('canvas')
                let width = ringDom.offsetWidth
                let height = ringDom.offsetHeight
                //console.log(width,height)
                let ctx = ringDom.getContext('2d')
                ctx.clearRect(0,0,width,height);
                ctx.beginPath();
                ctx.lineWidth = this.ringWidth;
                ctx.strokeStyle = 'rgba(42, 244, 255, 0.3)';
                ctx.arc(width/2, height/2, (width/2)-11*2, 0, Math.PI * 2);
                ctx.stroke();
                ctx.beginPath();
                // let grd=ctx.createLinearGradient(0,0,0,0)
                // grd.addColorStop(0,"yellow");
                // grd.addColorStop(1,"red");

                let grd=ctx.createLinearGradient(width/2,0,width/2,height);
                grd.addColorStop("0","rgba(110, 239, 155, 1)");
                grd.addColorStop(1,"rgba(64, 245, 248, 1)");
                ctx.strokeStyle = grd;
                ctx.arc(width/2, height/2, (width/2)-11*2, -0.25*2*Math.PI, (Math.PI * 2 * (Number(this.showWechatData.replyPercentage)/100))-0.25*2*Math.PI);
                ctx.stroke();
            },
            formatterNumber(number){
                let num = (number || 0).toString(),
                    result = '';
                //判断是否带小数点
                if (num.split('.')[1]) {
                    let numInt = num.split('.')[0],
                        numFlo = num.split('.')[1];
                    result = formatter(numInt) + '.' + numFlo
                } else {
                    result = formatter(num);
                }
                return result;
                function formatter(numInt) {
                    let resultInt = '';
                    while (numInt.length > 3) {
                        resultInt = ',' + numInt.slice(-3) + resultInt;
                        numInt = numInt.slice(0, numInt.length - 3);
                    }
                    if (numInt) {
                        resultInt = numInt + resultInt;
                    }
                    return resultInt;
                }
            }
        }
    }
</script>

<style scoped lang="less">
    .interaction-con{
        width: 100%;
        height: 100%;
        display: flex;
        .left-wrap{
            display: flex;
            height: 100%;
            flex-direction: column;
            margin-left: 21px;
            margin-top: 6px;
            .box{
                width: 178px;
                height: 70px;
                background: url("../assets/img/border.png") no-repeat;
                background-size: 100% 100%;
                margin-bottom: 14px;
                .titles{
                    height: 35px;
                    line-height: 35px;
                    font-size: 18px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 400;
                    color: #C7FCFC;
                }
                .count{
                    height: 35px;
                    line-height: 35px;
                    font-size: 20px;
                    font-family: PingFangSC-Regular, PingFang SC;
                    font-weight: 700;
                    color: #C7FCFC;
                }
                .msg-count{
                    color: rgba(165, 249, 168, 1);
                }
                .msg-res-count{
                    color: rgba(0, 223, 237, 1);
                    span{
                        font-size: 18px;
                    }
                }
            }
        }
        .right-wrap{
            height: 100%;
            width: 302px;
            display: flex;
            justify-content: center;
            .ring-chart{
                width: 223px;
                height: 223px;
                margin-top: 14px;
                background: url("../assets/img/circle.png") no-repeat;
                background-size: 100% 100%;
                position: relative;
                .center-text{
                    position: absolute;
                    top: 43px;
                    left: 43px;
                    width: 137px;
                    height: 137px;
                    background: linear-gradient(360deg, rgba(96, 183, 255, 0.04) 0%, rgba(37, 255, 255, 0.4) 100%);
                    filter: blur(0px);
                    border-radius: 50%;
                    .percent{
                        margin-top: 24px;
                        font-size: 40px;
                        font-family: PingFangSC-Semibold, PingFang SC;
                        font-weight: 600;
                        color: #FFFFFF;
                        span{
                            font-size: 33px;
                        }
                    }
                    .text{
                        font-size: 18px;
                        font-family: PingFangSC-Regular, PingFang SC;
                        font-weight: 400;
                        color: #C7FCFC;
                        /*line-height: 25px;*/
                    }
                }
            }
        }
    }
</style>