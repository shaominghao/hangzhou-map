// 引入 ECharts 主模块
var echarts = require('echarts');
var data = require('./hangzhou.json');
console.log(data);
echarts.registerMap('hangzhou', data);
var chart = echarts.init(document.getElementById('main'));
chart.setOption({
    series: [{
        type: 'map',
        map: 'hangzhou'
    }]
});




