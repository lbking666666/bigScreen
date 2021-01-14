<template>
    <div class="module7">
        <div class="title-box">
            <commonTitle :titleText="titleText"></commonTitle>
        </div>
        <div class="container">
            <div class="box box-1">
                <div class="box-title">跨域用户数</div>
                <div class="box-count" >{{formatterNumber(moduleData.dataA)}}</div>
            </div>
            <div class="box box-2">
                <div class="box-title">2l 用户数</div>
                <div class="box-count" >{{formatterNumber(moduleData.dataB)}}</div>
            </div>
            <div class="box box-3">
                <div class="box-title">5G订购数</div>
                <div class="box-count" >{{formatterNumber(moduleData.dataC)}}</div>
            </div>
            <div class="box box-4">
                <div class="box-title">携号转网</div>
                <div class="box-count" >{{formatterNumber(moduleData.dataD)}}</div>
            </div>
        </div>
    </div>
</template>
 
<script>
    import commonTitle from "./commonTitle"
    import {formatterNumber} from '@/utils/filterNum'

    export default {
        name: "",
        components: {
            commonTitle
        },
        props: {
            // moduleData:{
            //     type: Object,
            //     default: {}
            // }
		},
		data(){
			return{
                titleText:'重点业务场景',
                moduleData: {
                    dataA: 41923,
                    dataB: 12314,
                    dataC: 239302,
                    dataD: 97328 
                }
            }
		},
		mounted() {
		},
		methods:{
			formatterNumber(val){
                return formatterNumber(val)
            },
            resizeFontSize(num){
                let numStr = String(num)
                let returnClass = ''
                if (numStr.length <= 6) {
                    returnClass = 'font-size-32'
                } else if (numStr.length == 7) {
                    returnClass = 'font-size-28'
                } else if (numStr.length == 8) {
                    returnClass = 'font-size-25'
                } else if (numStr.length == 9) {
                    returnClass = 'font-size-23'
                }
                return returnClass
            }
		}
	}
</script>

<style lang="less" scoped>
    .font-size-23{
        font-size: 23px !important;
    }
    .font-size-25{
        font-size: 25px !important;
    }
    .font-size-28{
        font-size: 28px !important;
    }
    .font-size-32{
        font-size: 32px !important;
    }
    .module7{
        width: 100%;
        height: 290px;
        background: url("../assets/yaxin/kuang_zhongdianyewu.png");
        position: relative;
        box-sizing: border-box;
        .title-box{
            padding-top: 5px;
        }
        .container{
            width: 100%;
            position: absolute;
            left: 0;
            top: 57px;
            .box{
                width: 205px;
                height: 100px;
                position: absolute;
                padding-left: 85px;
                text-align: left;
                .box-title{
                    margin-top: 30px;
                    font-size: 12px;
                    color: #62a5cd;
                    line-height: 12px;
                }
                .box-count{
                    margin-top: 12px;
                    font-size: 24px;
                    color: #c7fcfc;
                    line-height: 24px;
                }
                &.box-1{
                    background: url("../assets/yaxin/kuayuyonghushu.png") no-repeat;
                    background-size: cover;
                    left: 20px;
                    top: 0;
                }
                &.box-2{
                    background: url("../assets/yaxin/user.png") no-repeat;
                    background-size: cover;
                    right: 20px;
                    top: 0;
                }
                &.box-3{
                    background: url("../assets/yaxin/5gdinggoushu.png") no-repeat;
                    background-size: cover;
                    left: 20px;
                    top: 110px;
                }
                &.box-4{
                    background: url("../assets/yaxin/xiehaozhuanwang.png") no-repeat;
                    background-size: cover;
                    right: 20px;
                    top: 110px;
                }
            }
        }
    }
</style>