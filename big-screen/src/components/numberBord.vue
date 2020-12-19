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
                type: String
            }
        },
        data(){
			return{
                numberStr: []
			}
        },
        update() {
            this.transNumber()
        },
		mounted() {
            this.transNumber()
		},
		methods:{
            transNumber(){
                let nums = String(this.bordNumber).split('').reverse() // 获取之后反转顺序
                console.log(nums)
                let allNum = nums.length
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
                console.log(this.numberStr)
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