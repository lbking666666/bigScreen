<template>
    <div class="home">
        <div class="header">
            <div class="time-box"></div>
        </div>
        <div class="container">
            <div class="left-box">
                <module1 :module1Data="module1Data"></module1>
                <module2 :module2Data="module2Data"></module2>
                <module3 :module3Data="module3Data"></module3>
            </div>
            <div class="center-box">
                <module4 :module4Data="module4Data"></module4>
                <module5 :module5Data="module5Data"></module5>
            </div>
            <div class="right-box">
                <module6 :module6Data="module6Data"></module6>
                <module7 :module7Data="module7Data"></module7>
                <module8 :module8Data="module8Data"></module8>
            </div>
        </div>
    </div>
</template>
<script>
// @ is an alias to /src
import module1 from '@/components/module1.vue';
import module2 from '@/components/module2.vue';
import module3 from '@/components/module3.vue';
import module4 from '@/components/module4.vue';
import module5 from '@/components/module5.vue';
import module6 from '@/components/module6.vue';
import module7 from '@/components/module7.vue';
import module8 from '@/components/module8.vue';
import {} from '@/api/index.js';
export default {
    name: 'Home',
    components: {
        module1,
        module2,
        module3,
        module4,
        module5,
        module6,
        module7,
        module8
    },
    data() {
        return {
            module1Data:{},
            module2Data:{},
            module3Data:{},
            module4Data:{},
            module5Data:[],
            module6Data:{},
            module7Data:{},
            module8Data:{}
        }
    },
    mounted() {
        this.getData()

    },
    methods: {

        getData() {
            this.getModule5Data()
        },

        getModule5Data () {
            this.module5Data = []
            for (let i=1; i<=31; i++) {
                let newObj = {
                    number: 100*i,
                    arpu: 50*i,
                    areaName: '地区'+String(i),
                    areaCode: String(i)
                }
                this.module5Data.push(newObj)
            }
        }
    }
}
</script>
<style lang="less" scoped>
/*功能title样式*/
.title {
    width: 100%;
    height: 44px;
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 19px 0px 12px;

    .icons {
        width: 32px;
        height: 32px;
        margin-right: 3px;
        margin-top: 3px;

        img {
            width: 100%;
            height: 100%;
        }
    }

    .title-text {
        font-size: 22px;
        font-family: PingFangSC-Regular, PingFang SC;
        font-weight: 400;
        color: #ECFCFF;
        text-shadow: 0px 2px 6px #4CB5FF;
    }
}

.home {

    /*overflow: hidden;*/
    /*background: #010B3D;*/
    /*display: flex;*/
    flex-direction: column;

    .header {
        display: flex;
        width: 100%;
        height: 89px;
        background: url("../assets/img/biaoti.png") no-repeat;
        background-size: 100% 100%;

        .time-box {
            position: absolute;
            top: 33px;
            right: 30px;
            width: 250px;
            height: 34px;
            font-family: 'LedFont';
            font-size: 28px;
            color: #88d7fd;
            letter-spacing: .93px;
            text-align: left;
            line-height: 34px;
        }
    }

    .container {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        margin: 0 auto;
        height: 100vh;

        .left-box {
            width: 460px;
            display: flex;
            flex-direction: column;
            border: 1px solid red;
        }

        .center-box {
            width: 894px;
            display: flex;
            flex-direction: column;
            background: url("../assets/img/img_bg.png") no-repeat center top;
            background-size: 788px 788px;
            padding-top: 10px;
            border: 1px solid red;
        }

        .right-box {
            width: 460px;
            display: flex;
            flex-direction: column;
            border: 1px solid red;
        }
    }
}
</style>