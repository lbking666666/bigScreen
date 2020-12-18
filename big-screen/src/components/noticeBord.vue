<template>
    <div class="notice-bord">
		<div class="bord-title">
			<i class="title-icon"></i>
			<span>告示板</span>
		</div>

		<div class="bord-body">
			<div class="bord-user">
				<p>今日新增内部员工量{{ userData.totalNum }}，较昨日
					<span class="font-red" v-if="userData.lastRate.indexOf('-') >= 0">下降{{userData.lastRate.split('-')[1]}}</span>
					<span class="font-green" v-else>上升{{userData.lastRate}}</span>，
				</p>
				<p>较7日均值
					<span class="font-red" v-if="userData.sevenRate.indexOf('-') >= 0">下降{{userData.sevenRate.split('-')[1]}}</span>
					<span class="font-green" v-else>上升{{userData.sevenRate}}</span>，
				</p>
				<p>较上月同期
					<span class="font-red" v-if="userData.lastMonthRate.indexOf('-') >= 0">下降{{userData.lastMonthRate.split('-')[1]}}</span>
					<span class="font-green" v-else>上升{{userData.lastMonthRate}}</span>；
				</p>
			</div>

			<div class="bord-external">
				<p>外部客户量{{ externalData.totalNum }}，较昨日
					<span class="font-red" v-if="externalData.lastRate.indexOf('-') >= 0">下降{{externalData.lastRate.split('-')[1]}}</span>
					<span class="font-green" v-else>上升{{externalData.lastRate}}</span>，
				</p>
				<p>较7日均值
					<span class="font-red" v-if="externalData.sevenRate.indexOf('-') >= 0">下降{{externalData.sevenRate.split('-')[1]}}</span>
					<span class="font-green" v-else>上升{{externalData.sevenRate}}</span>，
				</p>
				<p>较上月同期
					<span class="font-red" v-if="externalData.lastMonthRate.indexOf('-') >= 0">下降{{externalData.lastMonthRate.split('-')[1]}}</span>
					<span class="font-green" v-else>上升{{externalData.lastMonthRate}}</span>。
				</p>
			</div>
		</div>
    </div>
</template>

<script>
    export default {
		name: "barChart",
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
			console.log(this.externalData)
		},
		methods:{

		}
	}
</script>

<style lang="less" scoped>
.notice-bord{
	border: 1px solid #dddddd;
	height: 330px;
	width: 500px;
	text-align: left;
	background-color: blue;
	color: #fff;
	.font-green{
		color: #75ef9e;
	}
	.font-red{
		color: #ff3d60;
	}
}
</style>