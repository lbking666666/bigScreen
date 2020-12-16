<template>
    <div class="home">
        <barChart />
        <mapChart />
        <lineChart />
    </div>
</template>
<script>
// @ is an alias to /src
import barChart from '@/components/barChart.vue';
import mapChart from '@/components/mapChart.vue';
import lineChart from '@/components/lineChart.vue';
import { addAreaUser } from '@/api/index.js';
export default {
    name: 'Home',
    components: {
        barChart,
        mapChart,
        lineChart
    },
    mounted() {
        console.log(323)
        this.getData()
    },
    methods: {
        getData() {
            console.log(222)
            this.getAreaUser()
        },
        getAreaUser() {
            console.log(1)
            addAreaUser().then(res => {
                console.log(res)
            })
        }
    }
}
</script>