<template>
    <div class="map-chart">
        <div ref="map" style="width:100%;height:100%"></div>
    </div>
</template>
<script>
export default {
    name: "mapChart",
    data() {
        return {
            a: 1,
            n: 1
        }
    },
    method: {
        show() {
            console.log(1)
        }
    }
}
</script>
<style scoped>
</style>