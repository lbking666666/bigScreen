<template>
    <div class="mainten">
        <div class="volume-box">
            <div class="volume-value">{{maintenData.taskNum}}</div>
            <div class="volume-title">任务下发量</div>
        </div>
        <div class="fake-proportion">
            <div class="proportion-title">维系任务完成占比</div>
            <div class="proportion-value">
                <span>{{parseFloat(maintenData.taskRate).toFixed(1)}}</span>
                <span class="percent-sign">%</span>
            </div>
        </div>
        <!-- 
        <div class="proportion-box">
        </div>
        -->
    </div>
</template>

<script>
    export default {
		name: "mainten",
        props: {
            maintenData: {
				type: Object,
				default: () => ({
                    taskNum: '0',
                    taskRate: '0%'
                })
            }
        },
        data(){
			return{
			}
		},
		mounted() {
		},
		methods:{
		}
    }
</script>

<style lang="less" scoped>
.mainten{
    position: relative;
    .volume-box{
        position: absolute;
        top: 32px;
        left: 18px;
        width: 193px;
        height: 193px;
        background: url("../assets/img/renwuxiafa.png") no-repeat;
        background-size: 100% 100%;
        text-align: center;
        .volume-value{
            position: absolute;
            line-height: 53px;
            font-size: 38px;
            color: #fff;
            top: 50px;
            width: 100%;
        }
        .volume-title{
            position: absolute;
            bottom: 54px;
            width: 100%;
            color: #C7FCFC;
            line-height: 28px;
            font-size: 20px;
        }
    }
    .fake-proportion{
        position: absolute;
        top: 55px;
        left: 237px;
        width: 240px;
        height: 233px;
        background: url("../assets/img/renwuzhanbi.png") no-repeat;
        background-size: 100% 100%;
        text-align: center;
        .proportion-title{
            position: absolute;
            top: -32px;
            width: 100%;
            line-height: 25px;
            font-size: 18px;
            color: #40F5F8;
        }
        .proportion-value{
            position: absolute;
            top: 73px;
            width: 100%;
            color: #fff;
            font-size: 41.6px;
            line-height: 58px;
            padding-left: 7px;
            text-shadow: 5px -4px #62ffff12;
            .percent-sign{
                font-size: 20.8px;
            }
        }
    }
    // .proportion-box{

    // }
}
</style>