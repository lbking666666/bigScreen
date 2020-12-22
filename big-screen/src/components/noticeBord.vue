<template>
    <div class="notice-bord">
		<!-- title写在Home中 -->
		<div class="bord-body">
			<div class="bord-user">
				<p>今日新增内部员工量{{ userData.addNum }}，较昨日
					<span class="font-red" v-if="userData.lastRate&&String(userData.lastRate).indexOf('-') >= 0">下降{{fixedNum(userData.lastRate)}}</span>
					<span class="font-green" v-else-if="userData.lastRate&&String(userData.lastRate).indexOf('-') == -1">上升{{fixedNum(userData.lastRate)}}</span>
					<span v-else>持平</span>，
				</p>
				<p>较7日均值
					<span class="font-red" v-if="userData.sevenRate&&String(userData.sevenRate).indexOf('-') >= 0">下降{{fixedNum(userData.sevenRate)}}</span>
					<span class="font-green" v-else-if="userData.sevenRate&&String(userData.sevenRate).indexOf('-') == -1">上升{{fixedNum(userData.sevenRate)}}</span>
					<span v-else>持平</span>，
				</p>
				<p>较上月同期
					<span class="font-red" v-if="userData.lastMonthRate&&String(userData.lastMonthRate).indexOf('-') >= 0">下降{{fixedNum(userData.lastMonthRate)}}</span>
					<span class="font-green" v-else-if="userData.lastMonthRate&&String(userData.lastMonthRate).indexOf('-') == -1">上升{{fixedNum(userData.lastMonthRate)}}</span>
					<span v-else>持平</span>；
				</p>
			</div>

			<div class="bord-external">
				<p>外部客户量{{ externalData.addNum }}，较昨日
					<span class="font-red" v-if="externalData.lastRate&&String(externalData.lastRate).indexOf('-') >= 0">下降{{fixedNum(externalData.lastRate)}}</span>
					<span class="font-green" v-else-if="externalData.lastRate&&String(externalData.lastRate).indexOf('-') == -1">上升{{fixedNum(externalData.lastRate)}}</span>
					<span v-else>持平</span>，
				</p>
				<p>较7日均值
					<span class="font-red" v-if="externalData.sevenRate&&String(externalData.sevenRate).indexOf('-') >= 0">下降{{fixedNum(externalData.sevenRate)}}</span>
					<span class="font-green" v-else-if="externalData.sevenRate&&String(externalData.sevenRate).indexOf('-') == -1">上升{{fixedNum(externalData.sevenRate)}}</span>
					<span v-else>持平</span>，
				</p>
				<p>较上月同期
					<span class="font-red" v-if="externalData.lastMonthRate&&String(externalData.lastMonthRate).indexOf('-') >= 0">下降{{fixedNum(externalData.lastMonthRate)}}</span>
					<span class="font-green" v-else-if="externalData.lastMonthRate&&String(externalData.lastMonthRate).indexOf('-') == -1">上升{{fixedNum(externalData.lastMonthRate)}}</span>
					<span v-else>持平</span>。
				</p>
			</div>
		</div>
    </div>
</template>

<script>
    export default {
		name: "noticeBord",
		props: {
			externalData: {
				type: Object,
				default: () => ({
					lastRate: 0,
					totalNum: 0,
					sevenRate: 0,
					lastMonthRate: 0
				})
			},
			userData: {
				type: Object,
				default: () => ({
					lastRate: 0,
					totalNum: 0,
					sevenRate: 0,
					lastMonthRate: 0
				})
			}
		},
		data(){
			return{
			}
		},
		mounted() {
			//console.log('userData', this.userData)
		},
		methods:{
			fixedNum(num){
				num = num.toFixed(1)
				if(num){
					let str = (String(num).indexOf('-') >= 0)?String(num).split('-')[1]:num
					
					let backStr =  str +'%'
					
					return backStr
				}
				
			}
		}
	}
</script>

<style lang="less" scoped>
.notice-bord{
	height: 100%;
	width: 100%;
	padding: 21px 29px 0 31px;
	line-height: 28px;
	font-size: 19px;
	text-align: left;
	box-sizing: border-box;
	color: #fff;
	p{
		margin: 0;
		letter-spacing: 1px;
	}
	.font-green{
		color: #75ef9e;
	}
	.font-red{
		color: #ff3d60;
	}
	.bord-user{
		padding-bottom: 28px;
		border-bottom: 2px dashed rgba(98, 255, 254, .3);
	}
	.bord-external{
		margin-top: 28px;
	}
}
</style>