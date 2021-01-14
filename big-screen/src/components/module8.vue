<template>
    <div class="rose-charts">
        <div class="title-box">
            <commonTitle :titleText="titleText"></commonTitle>
        </div>
    	
    	<div class="bar-box">
	        <div class="bar-item">热销产品</div>
            <div class="bar-item">常用功能</div>
	    </div>

        <div class="top-boxs">
            <div class="top-2-box"></div>
        </div>
    </div>
</template>
<script>
let chart = null
import * as echarts from "echarts";
import commonTitle from "./commonTitle";
import {formatterNumber} from '@/utils/filterNum'
export default {
    name: "roseCharts",
    props: {
        moduleData:{
            type:Array,
            default:[]
        }
    },
    components:{commonTitle},
    data() {
        return {
        	titleText:'热销产品/常用功能TOP3'
        }
    },
    mounted() {
    },
    updated() {
    },
    methods: {
    }
}
</script>
<style lang="less" scoped>
.rose-charts{
    box-sizing: border-box;
	width:100%;
	height:280px;
	background:url(../assets/yaxin/kuang_rexiaochangyong.png) no-repeat;
    background-size: cover;
    .title-box{
        margin-top: 5px;
    }
}
</style>