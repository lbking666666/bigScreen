<template>
    <div class="notice-bord">
		<!-- title写在Home中 -->
		<div class="bord-body">
			<div class="bord-user">
				<p>今日新增内部员工量{{ userData.totalNum }}，较昨日
					<span class="font-red" v-if="userData.lastRate.indexOf('-') >= 0">下降{{userData.lastRate.split('-')[1]}}</span>
					<span class="font-green" v-else-if="userData.lastRate.indexOf('-') == -1">上升{{userData.lastRate}}</span>
					<span v-else>持平</span>，
				</p>
				<p>较7日均值
					<span class="font-red" v-if="userData.sevenRate.indexOf('-') >= 0">下降{{userData.sevenRate.split('-')[1]}}</span>
					<span class="font-green" v-else-if="userData.sevenRate.indexOf('-') == -1">上升{{userData.sevenRate}}</span>
					<span v-else>持平</span>，
				</p>
				<p>较上月同期
					<span class="font-red" v-if="userData.lastMonthRate.indexOf('-') >= 0">下降{{userData.lastMonthRate.split('-')[1]}}</span>
					<span class="font-green" v-else-if="userData.lastMonthRate.indexOf('-') == -1">上升{{userData.lastMonthRate}}</span>
					<span v-else>持平</span>；
				</p>
			</div>

			<div class="bord-external">
				<p>外部客户量{{ externalData.totalNum }}，较昨日
					<span class="font-red" v-if="externalData.lastRate.indexOf('-') >= 0">下降{{externalData.lastRate.split('-')[1]}}</span>
					<span class="font-green" v-else-if="externalData.lastRate.indexOf('-') == -1">上升{{externalData.lastRate}}</span>
					<span v-else>持平</span>，
				</p>
				<p>较7日均值
					<span class="font-red" v-if="externalData.sevenRate.indexOf('-') >= 0">下降{{externalData.sevenRate.split('-')[1]}}</span>
					<span class="font-green" v-else-if="externalData.sevenRate.indexOf('-') == -1">上升{{externalData.sevenRate}}</span>
					<span v-else>持平</span>，
				</p>
				<p>较上月同期
					<span class="font-red" v-if="externalData.lastMonthRate.indexOf('-') >= 0">下降{{externalData.lastMonthRate.split('-')[1]}}</span>
					<span class="font-green" v-else-if="externalData.lastMonthRate.indexOf('-') == -1">上升{{externalData.lastMonthRate}}</span>
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
					lastRate: '0%',
					totalNum: 0,
					sevenRate: '0%',
					lastMonthRate: '0%'
				})
			},
			userData: {
				type: Object,
				default: () => ({
					lastRate: '0%',
					totalNum: 0,
					sevenRate: '0%',
					lastMonthRate: '0%'
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
.notice-bord{
	height: 100%;
	width: 100%;
	padding: 21px 0 0 31px;
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
	.bord-external{
		margin-top: 56px;
	}
}
</style>