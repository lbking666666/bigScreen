<template>
    <div class="bar-out-box">
        <div class="bar-item" :class="activeIndex ? '' : 'active'" @click="changeBar(0)">{{barNames[0]}}</div>
        <div class="bar-item" :class="activeIndex ? 'active' : ''" @click="changeBar(1)">{{barNames[1]}}</div>
    </div>
</template>

<script>
export default {
    name: "",
    props: {
        barNames:{
            type:Array,
            default:[]
        }
    },
    data() {
        return {
            activeIndex: 0
        }
    },
    mounted() {
    },
    updated() {
    },
    methods: {
        changeBar (num) {
            this.activeIndex = num
            this.$emit('checkItem', num)
        }
    }
}
</script>

<style lang="less" scoped>
.bar-out-box{
    box-sizing: border-box;
    width: 300px;
    height: 32px;
    position: relative;
    .bar-item{
        position: absolute;
        top: 0;
        width: 150px;
        height: 32px;
        line-height: 30px;
        color: #88d7fd;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
        &:first-child{
            left: 0;
            border-left: 2px solid #1f3584;
            border-top: 2px solid #1f3584;
            border-bottom: 2px solid #1f3584;
            border-radius: 16px 0 0 16px;
        }
        &:last-child{
            right: 0;
            border-right: 2px solid #1f3584;
            border-top: 2px solid #1f3584;
            border-bottom: 2px solid #1f3584;
            border-radius: 0 16px 16px 0;
        }
        &.active{
            box-shadow: inset 0 0 8px 8px #20498e;
            border: 0;
            line-height: 32px;
            color: #bbeef1;
        }
    }
}
</style>