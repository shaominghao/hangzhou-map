// 引入 ECharts 主模块
var echarts = require('echarts');
var data = require('./hangzhou.json');
console.log(data);
echarts.registerMap('hangzhou', data);
//HZ
var chart = echarts.init(document.getElementById('main'));
chart.setOption({
    series: [{
        type: 'map',
        map: 'hangzhou'
    }]
});
//ZDRQ
var chart2 = echarts.init(document.getElementById('ZDRQ'));
chart2.setOption({
    title: {
        show: true,
        text: "重点人群",
        x: 'center',
        padding:[30,0,0,10],
        textStyle: {
            fontSize: 24,
            fontWeight: 'bolder',
            color: '#fff'
        }
    },
    //调整坐标轴的位置
    grid:{
        x:'60px',
        y:'80px',
        x2:'60px',
        y2:'30px'
    },
    xAxis: [
        {
            type: 'value',
            boundaryGap: [0, 0],
            show: true,
            onZero: true,
            lineStyle: {
                color: '#48b',
                width: 1,
                type: 'solid'
            },
            splitNumber: 5,
            max: 25,
            nameTextStyle: {
                color: "#fff"
            },
            axisLabel : {
                formatter: '{value} 万',
                textStyle:{
                    color:'#fff'
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'category',
            data: ['公务员', '律师', '教师', '医护'],
            axisLabel : {
                textStyle:{
                    color:'#fff'
                }
            }
        }
    ],
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [1, 7, 21, 20],
            itemStyle:{
                barBorderColor:'#fff',
                barBorderWidth:1,
                normal:{
                    color:'red'
                }
            },
            barWidth: 10
        }
    ]
});

//ABC
var chart3 = echarts.init(document.getElementById('ABC'));
chart3.setOption({
    title: {
        text: 'ABC三类',
        x: 'center',
        padding:[30,0,0,10],
        textStyle: {
            fontSize: 24,
            fontWeight: 'bolder',
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color: ['rgb(254,67,101)','rgb(249,205,173)','rgb(200,200,169)','rgb(131,175,155)'],
    series: [
        {
            name:'面积模式',
            type:'pie',
            radius : [30, 80],
            center : ['50%', '60%'],
            roseType : 'area',
            data:[
                {value:50, name:'A类'},
                {value:70, name:'B类'},
                {value:90, name:'C类'}
            ],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: "{b} \n{c}万 \n{d}%"
                    },
                    labelLine: {
                        show: true
                    }
                },
            }
        }
    ]
});

//查询情况
var chart4 = echarts.init(document.getElementById('CXQK'));
chart4.setOption({
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]

});


//归集情况
var chart5 = echarts.init(document.getElementById('GJQK'));
chart5.setOption({
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        show: true,
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
    calculable: true,
    legend: {
        data: ['数量', '质量']
    },
    xAxis: [
        {
            type: 'category',
            data: ['市公积金中心', '人力社保局', '公安局', '市场监管局', '地税局', '国税局', '市建委', '民政局', '国土局', '房管局']
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '数量',
            axisLabel: {
                formatter: '{value}'
            }
        }, {
            type : 'value',
            name : '质量',
            axisLabel : {
                formatter: '{value} %'
            }
        }
    ],
    series: [
        {
            name: '数量',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0]
        },
        {
            name: '质量',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5]
        }
    ]

});

