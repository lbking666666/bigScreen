<template>
    <div class="module1">
        <commonTitle :titleText="titleText"></commonTitle>
        <div class="container">
            <div class="column">
                <h4>用户情况</h4>
                <div class="box">
                    <div class="col">
                        <div class="hd">在网用户</div>
                        <div class="bd">234,567,890</div>
                    </div>
                    <div class="col">
                        <div class="hd">出账用户</div>
                        <div class="bd">{{moduleData.AI_Cz_Users}}</div>
                    </div>
                </div>
            </div>
            <div class="column">
                <h4>收入情况 (万元)</h4>
                <div class="box">
                    <div class="col">
                        <div class="hd">本月实时计费收入</div>
                        <div class="bd">{{moduleData.AI_Billing}}</div>
                    </div>
                    <div class="col">
                        <div class="hd">上月出账金额</div>
                        <div class="bd">{{moduleData.AI_Cz_Process_Card}}</div>
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
        
    }
}
</script>
<style lang="less" scoped>
.module1 {
    width: 100%;
    height: 265px;
    background: url("../assets/yaxin/kuang_gailan.png");
    display: flex;
    flex-direction: column;

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