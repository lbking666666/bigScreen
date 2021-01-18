<template>
    <div class="module1">
        <div class="title-box">
            <commonTitle :titleText="titleText"></commonTitle>
        </div>
        
        <div class="container">
            <div class="column">
                <h4>用户情况</h4>
                <div class="box">
                    <div class="col">
                        <div class="hd">在网用户</div>
                        <div class="bd">{{formatter(leftData)}}</div>
                    </div>
                    <div class="col">
                        <div class="hd">出账用户</div>
                        <div class="bd">{{formatter(moduleData.AI_Cz_Users)}}</div>
                    </div>
                </div>
            </div>
            <div class="column">
                <h4>收入情况 (万元)</h4>
                <div class="box">
                    <div class="col">
                        <div class="hd"><span>本 月 实 时 计 费 收 入</span></div>
                        <div class="bd">{{formatter(moduleData.AI_Billing)}}</div>
                    </div>
                    <div class="col">
                        <div class="hd"><span>上月出账金额</span></div>
                        <div class="bd">{{formatter(moduleData.AI_Cz_Process_Card)}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import commonTitle from "./commonTitle";
import { formatterNumber } from "../utils/filterNum"
export default {
    name: "",
    components: { commonTitle },
    props: {
        leftData: {
            type: Number,
            default: 0
        },
        moduleData: {
            type: Object,
            default: {}
        }
    },
    data() {
        return {
            titleText: '概览'
        }
    },
    mounted() {},
    methods: {
        formatter(n){
            return formatterNumber(n)
        }
    }
}
</script>
<style lang="less" scoped>
.module1 {
    width: 100%;
    height: 270px;
    background: url("../assets/yaxin/kuang_gailan.png");
    display: flex;
    flex-direction: column;

    .title-box{
        padding-top: 5px;
    }
    .container {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        .column{
            width: 100%;
            height: 100%;
            h4{
                font-size:14px;
                color:#C7FCFC;
                margin:0;
                margin-bottom: 8px;
                text-align: left;
                padding-left: 20px;
            }
            .box{
                display:flex;
                justify-content: space-evenly;
                .col{
                    background:url(../assets/yaxin/yongxinqingkuang.png) no-repeat;
                    background-size:100%;
                    width:205px;
                    height:71px;
                    .hd{
                        color:#88D7FD;
                        font-size:12px;
                        padding:5px 0;
                    }
                    .bd{
                        color:#C7FCFC;
                        font-size:28px;
                    }
                }
            }
        }
        
    }
}
</style>