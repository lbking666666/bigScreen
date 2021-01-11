<template>
    <div class="module2">
        <commonTitle :titleText="titleText"></commonTitle>
        <div class="query-option">
            <div class="options" :class="flag=='day'?'opt-active':''" @click="selExternal('day')">
                <div>日</div>
            </div>
            <div class="options" :class="flag=='month'?'opt-active':''" @click="selExternal('month')">
                <div>月</div>
            </div>
        </div>
        <div style="margin-top:30px;">
            <span class="top-title-left">触点</span>
            <span class="top-title-right">发展量</span>
        </div>
        <div style="margin-top: 80px;" v-if="showData">
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
export default {
    name: "",
    components: { commonTitle },
    props: {
        module2Data: {
            type: Object,
            default: ()=>({})
        }
    },
    data() {
        return {
            showData:false,
            listData:[],
            flag:'day',
            bg:['linear-gradient(270deg, #FF5353 0%, #FFB378 100%)','linear-gradient(270deg, #8153FF 0%, #78A5FF 100%)','linear-gradient(270deg, #49CCEF 0%, #75F0C2 100%)','linear-gradient(270deg, #376CDE 0%, #2CC9FF 100%)'],  
            bc:['#FFB278','#78A5FF','#75F0C2','#2CC9FF'], 
            titleText: '各触点发展用户分布'
        }
    },
    watch:{
    	'module2Data':function(val){
			this.showData =true
            this.listData = val[this.flag]
    	}
    },
    mounted() {},
    methods: {
    	selExternal(type){
        	this.flag = type
            this.listData = this.module2Data[this.flag]
        }
    }
}
</script>
<style lang="less" scoped>
.module2 {
    width: 100%;
    height: 323px;
    padding: 8px;
    background: url("../assets/yaxin/kuang_zuozhong.png");
}

.container {
    display: flex;
    justify-content: space-around;
    // float: left;
    width: 100%;
    height: 50px;
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
</style>