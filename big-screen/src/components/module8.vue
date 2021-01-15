<template>
    <div class="rose-charts">
        <div class="title-box">
            <commonTitle :titleText="titleText" />
        </div>
    	
    	<div class="bar-box">
            <tabs :barNames="barNames" @checkItem="changeBar" />
        </div>

        <div class="top-boxs">
            <div class="top-2-box">
                <div class="title">TOP2</div>
                <div class="bg">
                    <p class="value">{{list[1]?list[1].num:''}}</p>
                    <p class="name">{{list[1]?list[1].name:''}}</p>
                </div>
            </div>
            <div class="top-1-box">
                <div class="title">TOP1</div>
                <div class="bg">
                    <p class="value">{{list[0]?list[0].num:''}}</p>
                    <p class="name">{{list[0]?list[0].name:''}}</p>
                </div>
            </div>
            <div class="top-3-box">
                <div class="title">TOP3</div>
                <div class="bg">
                    <p class="value">{{list[2]?list[2].num:''}}</p>
                    <p class="name">{{list[2]?list[2].name:''}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import commonTitle from "./commonTitle.vue";
import tabs from '@/components/tabs.vue';
import {formatterNumber} from '@/utils/filterNum'
export default {
    name: "roseCharts",
    components: {
        commonTitle,
        tabs
    },
    props: {
        moduleData:{
            type:Array,
            default:[]
        }
    },
    data() {
        return {
            titleText:'热销产品/常用功能TOP3',
            barNames: ['热销产品', '常用功能'],
            activeIndex: 0,
            list:[]
        }
    },
    mounted() {
        if(this.moduleData[this.activeIndex]){
            this.list = this.moduleData[this.activeIndex].list
        }
        
    },
    updated() {
        this.list = this.moduleData[this.activeIndex].list
    },
    methods: {
        changeBar (num) {
            console.log(num)
            this.activeIndex = num
            this.list = []
            this.list = this.moduleData[num].list
        }
    }
}
</script>

<style lang="less" scoped>
.rose-charts{
    box-sizing: border-box;
	width:100%;
	height:295px;
	background:url(../assets/yaxin/kuang_rexiaochangyong.png) no-repeat;
    background-size: cover;
    position: relative;
    .title-box{
        margin-top: 5px;
    }
    .bar-box{
        position: absolute;
        top: 52px;
        left: 80px;
        width: 300px;
        height: 32px;
    }

    .top-boxs{
        .top-1-box{
            position: absolute;
            top: 103px;
            left: 147px;
            .title{
                font-size: 13px;
                color: #ffe578;
                padding-bottom: 8px;
            }
            .bg{
                height: 113px;
                width: 168px;
                background:url(../assets/yaxin/top1.png) no-repeat;
                background-size: cover;
                text-align: center;
                p{
                    margin: 0;
                    padding: 0;
                }
                .value{
                    padding-top: 58px;
                    font-size: 20px;
                    font-weight: 600;
                    color: #fff;
                }
                .name{
                    padding-top: 8px;
                    font-size: 14px;
                    color: #c3f7f8;
                    overflow:hidden;
                    padding:6px 20px;
                    height:14px;
                }
            }
        }
        .top-2-box{
            position: absolute;
            top: 118px;
            left: 14px;
            .title{
                font-size: 13px;
                color: #40f5f8;
                padding-bottom: 6px;
            }
            .bg{
                height: 124px;
                width: 124px;
                background:url(../assets/yaxin/top_2.png) no-repeat;
                background-size: cover;
                text-align: center;
                p{
                    margin: 0;
                    padding: 0;
                }
                .value{
                    padding-top: 45px;
                    font-size: 20px;
                    font-weight: 600;
                    color: #fff;
                }
                .name{
                    padding-top: 6px;
                    font-size: 14px;
                    padding:6px 20px;
                    overflow:hidden;
                    height:14px;
                    color: #c3f7f8;
                }
            }
        }
        .top-3-box{
            position: absolute;
            top: 118px;
            right: 14px;
            .title{
                font-size: 13px;
                color: #40f5f8;
                padding-bottom: 6px;
            }
            .bg{
                height: 124px;
                width: 124px;
                background:url(../assets/yaxin/top_2.png) no-repeat;
                background-size: cover;
                text-align: center;
                p{
                    margin: 0;
                    padding: 0;
                }
                .value{
                    padding-top: 45px;
                    font-size: 22px;
                    font-weight: 600;
                    color: #fff;
                }
                .name{
                    padding-top: 6px;
                    font-size: 14px;
                    overflow:hidden;
                    height:14px;
                    padding:6px 20px;
                    color: #c3f7f8;
                }
            }
        }
    }
}
</style>