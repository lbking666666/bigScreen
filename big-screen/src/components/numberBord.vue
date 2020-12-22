<template>
    <div class="number-bord">
        <div class="bord-title">{{title}}</div>
        <div class="number-box">
            <div class="number-item" v-for="(item, index) in numberStr" :key="index"><div class="font" :class="item.comma ? 'comma' : ''">{{item.numStr}}</div></div>
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
                fetchNum: 0,
                restTime: 0
			}
        },
        watch: {
            bordNumber(newVal, oldVal) {
                if (!this.setTime) {
                    // console.log('watch mounted')
                    // ajax反应太慢，mounted执行可能与watch同步 
                    // 所以，设置该状态为初始化
                    this.fetchNum = newVal
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
                // console.log('transNumber work')
                let nums = String(num).split('').reverse() // 获取之后反转顺序
                let newArray = []
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
            },
            /**
             * 每5s从接口重新获取一次新的数据
             * 但是，考虑到，接口返回事件不会很及时
             * 所以，动画方法设置为两段执行。
             * 0s-1s：执行动画本体；
             * 设置动画本体，为5-10个关键帧动画，不足5个差额的，递增几个数，就是几个关键帧
             * 2s-5s：执行clearInterval
             * 当5s结束时，理论上接口返回新的数据，就会重新开启这个loop过程；
             * 即便接口无法及时返回数据，也只是loop中间的停滞时间增加，感知较小
             * 
             * @param {number} newVal 新的值
             * @param {number} oldVal 旧的值
             */
            setLoop (newVal, oldVal) {
                let diff = newVal - oldVal
                let eachTime = 0
                let eachAdd = 0
                let rest = 0
                if (diff <= 10) {
                    eachAdd = 1
                    eachTime = 1000/diff
                } else {
                    eachAdd = parseInt(diff / 10) // 获取每次累加最大整数
                    rest = diff % 10 // 获取最后一次所需额外增加的数字
                    eachTime = 100
                }
                // console.log('eachTime', eachTime)
                this.timer = setInterval(() => {
                    this.restTime += 1
                    // console.log(this.restTime)
                    if (diff <= 10 && this.restTime == diff) {
                        this.fetchNum += eachAdd
                        this.restTime = 0
                    } else if (this.restTime == 10 && diff > 10) {
                        this.fetchNum += (eachAdd + rest)
                        this.restTime = 0
                    } else {
                        this.fetchNum += eachAdd
                    }
                    this.transNumber(this.fetchNum)
                    if (this.fetchNum == newVal) {
                        // console.log('clean')
                        clearInterval(this.timer)
                    }
                }, eachTime)
            }
		}
    }
</script>

<style lang="less" scoped>
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
            .font{
                position: absolute;
                left: -4px;
                top: 7px;
                line-height: 46px;
                width: 100%;
                height: 100%;
                text-align: center;
                color: #ffffff;
                font-size: 30px;
                z-index: 3;
                &.comma{
                    &::after{
                        content: ',';
                        color: #C7FCFC;
                        font-size: 21.6px;
                        position: absolute;
                        bottom: -2px;
                        right: -4px;
                    }
                }
            }
        }
    }
    
}
</style>