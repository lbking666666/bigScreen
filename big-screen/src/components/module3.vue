<template>
    <div class="module2">
        <commonTitle :titleText="titleText"></commonTitle>
        <!-- <div class="query-option">
            <div class="options" :class="flag=='day'?'opt-active':''" @click="selExternal('day')">
                <div>日</div>
            </div>
            <div class="options" :class="flag=='month'?'opt-active':''" @click="selExternal('month')">
                <div>月</div>
            </div>
        </div> -->
        <div class="bar-box">
            <tabs :barNames="barNames" @checkItem="changeBar"/>
        </div>
        <div style="margin-top:5px">
            <span class="top-title-left">触点</span>
            <span class="top-title-right">发展量</span>
        </div>
        <div v-if="showData">
            <div class="container" v-for="(item,index) in listData" :key="index">
                <div class="title">{{item.name}}</div>
                <div class="process">
                	<div class="process-dot" :style="'background:'+bc[index]"></div>
                    <div class="per" :style="'width:'+ item.per+'%;background:'+bg[index]"></div>
                </div>
                <div class="total">{{String(item.value).length > 4?Number(item.value/10000).toFixed(1)+'万':item.value}}</div>
            </div>
        </div>
    </div>
</template>
<script>
import commonTitle from "./commonTitle";
import tabs from '@/components/tabs.vue';
export default {
    name: "",
    components: { 
        commonTitle,
        tabs 
    },
    props: {
        moduleData: {
            type: Object,
            default: ()=>({})
        }
    },
    data() {
        return {
            showData:  false,
            listData:[
                // {
                //     name:'wqq',
                //     per:20,

                // },
                // {
                //     name:'wqq',
                //      per:20,

                // },
                // {
                //     name:'wqq',
                //      per:20,

                // },
                // {
                //     name:'wqq',
                //      per:20,

                // },
                // {
                //     name:'wqq',
                //      per:20,

                // },

            ],
            barNames: ['新开户分布', '全国用户分布'],
            flag:'day',
            bg:[
            'linear-gradient(270deg, #ffb077 0%, #ff5353 100%)',
            'linear-gradient(270deg, #3efc9f 0%, #f7d54f 100%)',
            'linear-gradient(270deg, #73eec4 0%, #49ccf0 100%)',
            'linear-gradient(270deg, #799dff 0%, #8153ff 100%)',
            'linear-gradient(270deg, #2dc4fe 0%, #366bda 100%)'
            ],  
            bc:['#ffb077','#3efc9f','#73eec4','#799dff','#2dc4fe'], 
            titleText: '用户类型分布',
            activeIndex:0
        }
    },
    watch:{
    	'moduleData':function(val){
			this.showData =true
            this.listData = val[this.flag]
    	}
    },
    mounted() {},
    methods: {
    	selExternal(type){
        	this.flag = type
            this.listData = this.moduleData[this.flag]
        },
        changeBar (num) {
            console.log('num', num)
            this.activeIndex = num
        }
    }
}
</script>
<style lang="less" scoped>
.module2 {
    width: 100%;
    height: 323px;
    padding: 8px;
    // background: url("../assets/yaxin/kuang_zuozhong.png");
    background:url(../assets/yaxin/kuang_rexiaochangyong.png) no-repeat;
}

.container {
    display: flex;
    justify-content: space-around;
    // float: left;
    width: 100%;
    height: 30px;
    padding: 0 20px;
    font-size: 14px;
    font-family: PingFangSC-Regular, PingFang SC;
    font-weight: 400;
    color: #FFFFFF;
}

.process {
    width: 50%;
    height: 10px;
    background: rgba(136, 215, 253, 0.2);
    border-radius: 7px;
    position: relative;
}

.process .process-dot {
    position: absolute;
    top: 0;
    left: -8px;
    width: 5px;
    height: 10px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
}


.process .per {
    width: 50%;
    height: 10px;
    border-radius: 7px;
}

.title {
    width: 77px;
    display: flex;
    margin-right: 16px;
    justify-content: flex-start;
}

.total {
    width: 101px;
}

.top-title-left {
    height: 14px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #88D7FD;
    line-height: 14px;
    text-shadow: 0px 0px 4px rgba(136, 215, 253, 0.6);
    float: left;
    margin-left: 20px;
}

.top-title-right {
    height: 14px;
    font-size: 14px;
    font-family: PingFangSC-Medium, PingFang SC;
    font-weight: 500;
    color: #88D7FD;
    line-height: 14px;
    text-shadow: 0px 0px 4px rgba(136, 215, 253, 0.6);
    float: right;
    margin-right: 20px;
    width: 100px;
}
.query-option {
   	padding:5px 20px;
    flex: 1;
    z-index:9;
    display: flex;
    justify-content: flex-end;
    .options {
        height: 19px;
        line-height: 19px;
        padding:0 8px;
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
.bar-box{
    display: flex;
    justify-content: center;
}
</style>