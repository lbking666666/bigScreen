<template>
    <div class="module1">
        <commonTitle :titleText="titleText"></commonTitle>
		<div class="left">

        </div>
        <div class="right">

        </div>
    </div>
</template>

<script>
    import commonTitle from "./commonTitle";
    export default {
		name: "",
        components:{commonTitle},
		props: {
			
		},
		data(){
			return{
                titleText:'告示板'
			}
		},
		mounted() {
		},
		methods:{
			
		}
	}
</script>

<style lang="less" scoped>
    .module1{
        width: 100%;
        height: 323px;
        background: url("../assets/yaxin/kuang_zuoshang.png");
        .left{
            width: 205px;
            height: 246px;
        }
        .right{
            width: 205px;
            height: 246px;
            background: url("../assets/yaxin/jinrikaihu.png");
        }
    }
</style>