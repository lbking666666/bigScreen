<template>
    <div class="common-title">
        <div class="text">
            {{titleText}}
        </div>
    </div>
</template>

<script>
    export default {
        name: "commonTitle",
        props:{
            titleText:{
                type: String,
                default: ''
            }
        }
    }
</script>

<style scoped lang="less">
    .common-title{
        width: 100%;
        height: 36px;
        display: flex;
        justify-content: center;
        align-items: center;
        .left-line{
            flex: 1;
            height: 2px;
            background: linear-gradient(90deg, rgba(28, 48, 60, 0.05) 0%, rgba(52, 224, 255, 0.75) 100%);
        }
        .right-line{
            flex: 1;
            height: 2px;
            background: linear-gradient(90deg, rgba(52, 224, 255, 0.75) 0%, rgba(28, 48, 60, 0.05) 100%);
        }
        .text{
            min-width: 206px;
            max-width: 300px;
            font-size: 20px;
            margin: 0 10px;
            font-family: PingFangSC-Semibold, PingFang SC;
            font-weight: 600;
            color: #FFFFFF;
            line-height: 36px;
            letter-spacing: 1px;
            text-shadow: 0px 2px 4px #0B63C9;
        }
    }
</style>