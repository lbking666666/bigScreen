<template>
    <div class="module7">
        <commonTitle :titleText="titleText"></commonTitle>
        <div class="unit">单位：笔</div>
        <div class="container">
            <div class="box">
                <div class="box-title">5g订购数</div>
                <div class="box-count">{{module7Data.fiveGCount}}</div>
            </div>
            <div class="box pointer">
                <div class="box-title">跨域用户数</div>
                <div class="box-count">{{module7Data.familyCount}}</div>
                <div class="pointer-view">
                    <p>跨域融合套餐数：{{module7Data.taocanNum}}</p>
                    <p>跨域融合用户数：{{module7Data.rongheNum}}</p>
                </div>
            </div>
            <div class="box pointer">
                <div class="box-title">携号转网</div>
                <div class="box-count">{{module7Data.crossDomainCount}}</div>
                <div class="pointer-view">
                    <p>携入数：{{module7Data.xieruNum}}</p>
                    <p>携出数：{{module7Data.xiechuNum}}</p>
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
            module7Data:{
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
            console.log(this.module7Data)
            /**
             * 5G 不动 fiveGCount
             * 跨域用户数：familyCount = taocanNum + rongheNum
             * 携号转网：crossDomainCount = xieruNum + xiechuNum
             */
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped>
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
                        bottom: 100%;
                        padding: 8px 10px;
                        background: rgba(0, 0, 0, 0.5);
                        border-radius: 4px;
                        color: #fff;
                        font-size: 13px;
                        display: none;
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