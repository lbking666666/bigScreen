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
            <tabs :barNames="barNames" @checkItem="changeBar" />
        </div>
        <div style="padding:5px 0 15px; display: flex; justify-content: space-between;">
            <span class="top-title-left">类型</span>
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
            default: () => ({})
        },
        code: {
            type: String,
            default: 'ZZ',
        },
        list: {
            type: Object,
            default: () => ({})
        }
    },
    data() {
        return {
            showData: false,
            listData: [

            ],
            barNames: ['新开户分布', '全国用户分布'],
            flag: 'day',
            bg: [
                'linear-gradient(270deg, #ffb077 0%, #ff5353 100%)',
                'linear-gradient(270deg, #3efc9f 0%, #f7d54f 100%)',
                'linear-gradient(270deg, #73eec4 0%, #49ccf0 100%)',
                'linear-gradient(270deg, #799dff 0%, #8153ff 100%)',
                'linear-gradient(270deg, #2dc4fe 0%, #366bda 100%)'
            ],
            bc: ['#ffb077', '#3efc9f', '#73eec4', '#799dff', '#2dc4fe'],
            titleText: '用户类型分布',
            activeIndex: 0
        }
    },
    watch: {
        'moduleData': function(val) {
            if(this.activeIndex == 0){
                this.listData = this.getData(val)
            }
            
            // this.listData = val[this.flag]
        }
    },
    mounted() {
    },
    methods: {
        selExternal(type) {
            this.flag = type
            // this.listData = this.moduleData[this.flag]
        },
        getData(val) {
            this.showData = true
            let total = 0;
            for (let key in val) {
                total += val[key][this.code]
            }
            total = total 
             let list = [{
                name: '移网',
                per: val['M'][this.code] / (total/100),
                value: val['M'][this.code]
            },{
                name: '固话',
                per: val['G'][this.code] / (total/100),
                value: val['G'][this.code]
            },{
                name: '宽带',
                per: val['K'][this.code] / (total/100),
                value: val['K'][this.code]
            },{
                name: 'IPTV',
                per: val['I'][this.code]/ (total/100),
                value: val['I'][this.code]
            },{
                name: '其他',
                per: val['T'][this.code] / (total/100),
                value: val['T'][this.code]
            }]
            
                return list
        },
        getList(data) {
            let total = Number(data.mobile)+ Number(data.telephone)+Number(data.broadband) +Number(data.iptv)+Number(data.otheruser)
            console.log(total)
            let list = [{
                        name: '移网',
                        per: Number(data.mobile) / (total/100),
                        value: data.mobile
                    },{
                        name: '固话',
                        per: data.telephone / (total/100),
                        value: data.telephone
                    },{
                        name: '宽带',
                        per: data.broadband / (total/100),
                        value: data.broadband
                    },{
                        name: 'IPTV',
                        per: data.iptv / (total/100),
                        value: data.iptv
                    },{
                        name: '其他',
                        per: data.otheruser / (total/100),
                        value: data.otheruser
                    }]
            return list
        },
        changeBar(num) {
            this.activeIndex = num
            if (num == 0) {
                this.listData = this.getData(this.moduleData)
            } else {
                this.listData = this.getList(this.list.value)
                console.log('22listData',this.listData)
            }

        }
    }
}
</script>
<style lang="less" scoped>
.module2 {
    width: 100%;
    height: 275px;
    padding: 8px;
    // background: url("../assets/yaxin/kuang_zuozhong.png");
    background: url(../assets/yaxin/kuang_rexiaochangyong.png) no-repeat;
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
    padding: 5px 20px;
    flex: 1;
    z-index: 9;
    display: flex;
    justify-content: flex-end;

    .options {
        height: 19px;
        line-height: 19px;
        padding: 0 8px;
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

.bar-box {
    display: flex;
    justify-content: center;
    margin:10px 0;
}
</style>