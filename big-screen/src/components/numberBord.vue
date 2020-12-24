<template>
    <div class="number-bord">
        <div class="bord-title">{{title}}</div>
        <div class="number-box">
            <div class="number-item" v-for="(item, index) in numberStr" :key="index" :class="item.comma ? 'comma' : ''">
                <div class="scroll-out-box">
                    <div class="scroll-box" :class="'number-'+item.numStr">
                        <div class="font">0</div>
                        <div class="font">1</div>
                        <div class="font">2</div>
                        <div class="font">3</div>
                        <div class="font">4</div>
                        <div class="font">5</div>
                        <div class="font">6</div>
                        <div class="font">7</div>
                        <div class="font">8</div>
                        <div class="font">9</div>
                    </div>
                </div>

                <div class="number-comma">,</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
		name: "mainten",
        props: {
            title: {
				type: String
            },
            bordNumber: {
                type: Number,
                value: 0
            },
            setTime: {
                type: Boolean,
                value: false
            }
        },
        data(){
			return{
                numberStr: [],
                timer: null,
                fetchNum: 0, // 记录前一个数据
                restTime: 0
			}
        },
        watch: {
            bordNumber(newVal, oldVal) {
                if (!this.setTime) {
                    // console.log('watch mounted')
                    // ajax反应太慢，mounted执行可能与watch同步 
                    // 所以，设置该状态为初始化
                    this.fetchNum = oldVal
                    this.transNumber(newVal)
                } else {
                    // console.log('do loop')
                    // this.setLoop(newVal, oldVal)
                    this.transNumber(newVal)
                }
            }
        },
        mounted() {
            // 首屏加载时，不需要动画
            if (!this.setTime) this.transNumber(this.bordNumber)
		},
        methods:{
            transNumber( num ){
                let nums = String(num).split('').reverse() // 获取之后反转顺序
                let newArray = []
                let oldArray = this.numberStr.reverse() // 用于逐字比较的字符串数组
                for(let i=0; i<nums.length; i++){
                    let newItem = {
                        numStr: nums[i],
                        comma: false
                    }
                    if(i%3 == 0 && i!= 0) {
                        newItem.comma = true 
                    }
                    newArray.push(newItem)
                }
                this.numberStr = newArray.reverse()
                this.fetchNum = num // 完成动画后更新为newNum
            }
		}
    }
</script>

<style lang="less" scoped>
@fontH: 46px;

.number-bord{
    position: relative;
    &::before{
        content: '';
        position: absolute;
        bottom: 3px;
        left: 3px;
        width: 9px;
        height: 9px;
        background: url("../assets/img/conner-icon.png") no-repeat;
        background-size: 100% 100%;
    }
    &::after{
        content: '';
        position: absolute;
        bottom: 3px;
        right: 3px;
        width: 9px;
        height: 9px;
        transform: rotateY(180deg);
        background: url("../assets/img/conner-icon.png") no-repeat;
        background-size: 100% 100%;
    }
    .bord-title{
        font-size: 22px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 500;
        color: #C7FCFC;
        line-height: 30px;
        text-align: left;
        margin-bottom: 7px;
    }
    .number-box{ 
        box-shadow: 0px 0px 10px 0px rgba(1, 255, 255, 0.2);
        border: 2px solid #5594C4;
        padding: 3px 8px 9px 17px;
        display: flex;
        box-sizing: border-box;
        justify-content: flex-end;
        .number-item{
            position: relative;
            width: 30px;
            height: 48px;
            margin-left: 3px;
            &:first-child{
                margin-left: 0;
            }
            &::before{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 30px;
                height: 48px;
                background: linear-gradient(180deg, #337CFF 0%, rgba(0, 255, 255, 0.11) 43%, rgba(0, 255, 255, 0) 55%, #337CFF 100%);
                opacity: 0.36;
            }
            &::after{
                content: '';
                position: absolute;
                left: -4px;
                top: 7px;
                width: 29px;
                height: 46px;
                background: linear-gradient(180deg, #337CFF 0%, rgba(0, 255, 255, 0.11) 24%, rgba(0, 255, 255, 0) 72%, #337CFF 100%);
            }
            &.comma{
                .number-comma{
                    color: #C7FCFC;
                    font-size: 21.6px;
                    position: absolute;
                    bottom: 0;
                    right: 0;
                }
            }
            .scroll-out-box{
                position: absolute;
                left: -4px;
                top: 7px;
                line-height: 46px;
                width: 100%;
                height: 100%;
                overflow: hidden;
                .scroll-box{
                    position: absolute;
                    top: 0;
                    width: 30px;
                    height: auto;
                    transition: top 1s;
                    &.number-0{
                        top: 0;
                    }
                    &.number-1{
                        top: -@fontH;
                    }
                    &.number-2{
                        top: -@fontH * 2;
                    }
                    &.number-3{
                        top: -@fontH * 3;
                    }
                    &.number-4{
                        top: -@fontH * 4;
                    }
                    &.number-5{
                        top: -@fontH * 5;
                    }
                    &.number-6{
                        top: -@fontH * 6;
                    }
                    &.number-7{
                        top: -@fontH * 7;
                    }
                    &.number-8{
                        top: -@fontH * 8;
                    }
                    &.number-9{
                        top: -@fontH * 9;
                    }
                    .font{
                        line-height: 46px;
                        width: 30px;
                        height: 46px;
                        text-align: center;
                        color: #ffffff;
                        font-size: 30px;
                    }
                }
            }
        }
    }
    
}
</style>