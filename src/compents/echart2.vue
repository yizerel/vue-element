<template>
<div class="echarts-demo">
    <div id="chart" ref="chart" style="width: 300px; height: 250px"></div>
</div>
</template>

<script>

export default {
    data() {
        return {
            chart: null,
        };
    },
    mounted() {
        this.chart = this.$echarts.init(this.$refs.chart);
        this.chart.setOption({
            title:{
                text: 'ECharts 折线'
            },
            grid: {
                x : 25, // 左: 默认 80px
                y : 30, // 上: 默认 60px
                x2: 10, // 右: 默认 80px
                // y2: 10, // 下: 默认 60px
            },
            xAxis: {
                type: 'value',
                // show: false,
                min : 5,
                boundaryGap: true,
            },
            yAxis: {
                type: 'value',
            },
            series: [{
                type      : 'line',
                smooth    : true,
                color     : '#2d8cf0',
                showSymbol: true,
                data      : [[5, 15], [10, 20], [20, 66.5], [25, 46.5], [30, 80], [35, 20], [40, 10]],

                // 渐变效果
                areaStyle : {
                    color : new this.$echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        { offset: 0, color: '#2d8cf0' },
                        { offset: 0.7, color: 'rgba(255, 255, 255, 0)' }
                    ])
                },
            }]
        });
    }
};
</script>