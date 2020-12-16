<template>
  <div class="home">
    <barChart></barChart>
    <mapChart></mapChart>
    <lineChart></lineChart>
  </div>
</template>

<script>
// @ is an alias to /src
import barChart from '@/components/barChart.vue'
import mapChart from '@/components/mapChart.vue'
import lineChart from '@/components/lineChart.vue'

export default {
  name: 'Home',
  components: {
    barChart,mapChart,lineChart
  }
}
</script>
