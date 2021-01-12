<template>
    <div class="number-bord" :class="title == '外部客户累积量' ? 'bord-a' : 'bord-b'">
        <div class="number-box">
            <div class="number-item" v-for="(item, index) in numberStr" :key="index">
                <div class="scroll-out-box" v-if="item !== ','">
                    <div class="scroll-box" :class="'number-'+item">
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

                <div class="comma" v-else>,</div>
            </div>
        </div>

        <div class="bord-title">{{title}}</div>
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
                    // ajax反应太慢，mounted执行可能与watch同步 
                    // 所以，设置该状态为初始化
                    this.fetchNum = oldVal
                    this.transNumber(newVal)
                } else {
                    // console.log('do loop')
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
                let oldArray = this.numberStr.reverse() // 用于逐字比较的字符串数组

                let numInt = String(num)
                let resultInt = ''
                while (numInt.length > 3) {
                    resultInt = ',' + numInt.slice(-3) + resultInt
                    numInt = numInt.slice(0, numInt.length - 3)
                }
                if (numInt) {
                    resultInt = numInt + resultInt;
                }
                this.numberStr = resultInt.split('')
                this.fetchNum = num // 完成动画后更新为newNum
            }
		}
    }
</script>

<style lang="less" scoped>
@fontH: 41px;

.number-bord{
    position: relative;
    padding: 7px 16px 0 104px;
    &.bord-a{
        background: url("../assets/img/number-bg-b.png") no-repeat;
        background-size: 100% 100%;
        width: 408px;
        height: 89px;
        margin-right: 9px;
    }
    &.bord-b{
        background: url("../assets/img/number-bg-a.png") no-repeat;
        background-size: 100% 100%;
        width: 408px;
        height: 89px;
    }
    .bord-title{
        width: 288px;
        height: 28px;
        font-size: 20px;
        font-family: PingFangSC-Semibold, PingFang SC;
        font-weight: 600;
        color: #FFFFFF;
        line-height: 28px;
        text-shadow: 0px 1px 6px #40F5F8;
    }
    .number-box{
        width: 288px;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        height: @fontH;
        line-height: @fontH;
        font-size: 34px;
        font-family: Helvetica-Bold, Helvetica;
        font-weight: bold;
        color: #88D7FD;
        .number-item{
            position: relative;
            font-size: 34px;
            font-family: Helvetica-Bold, Helvetica;
            font-weight: bold;
            color: #88D7FD;
            line-height: 41px;
            width: 20px;
            &:first-child{
                margin-left: 0;
            }
            .comma{
                line-height: @fontH;
                width: 100%;
                height: @fontH;
                text-align: center;
                color: #88d7fd;
            }
            .scroll-out-box{
                position: absolute;
                left: 0;
                top: 0;
                line-height: @fontH;
                width: 100%;
                height: @fontH;
                overflow: hidden;
                .scroll-box{
                    position: absolute;
                    top: 0;
                    width: 20px;
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
                        line-height: @fontH;
                        height: @fontH;
                        text-align: center;
                        color: #88d7fd;
                    }
                }
            }
        }
    }
    
}
</style>