// 引入 ECharts 主模块
var echarts = require('echarts');
var hzmapdata = require('./hangzhou.json');
var data = require('./data.json');
echarts.registerMap('hangzhou', hzmapdata);
//HZ
var chart1 = echarts.init(document.getElementById('main'));
chart1.setOption({
    tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(3,72,123,1)',
        borderColor: '#03487b',
        borderRadius: 8,
        borderWidth: 2,
        padding: 10,    // [5, 10, 15, 20]
        position: function (p) {
            // 位置回调
            // console.log && console.log(p);
            return [p[0] + 10, p[1] - 10];
        },
        formatter: function (params, ticket, callback) {
            console.log(params)
            // var res = 'Function formatter : <br/>' + params.name;
            // for (var i = 0, l = params.length; i < l; i++) {
            //     res += '<br/>' + params[i].seriesName + ' : ' + params[i].value;
            // }
            var obj = data[params.name];
            var res = '<div>' + params.name + '</div><div>企业：' + obj.enterprise + '</div><div>自然人：' + obj.people + '</div>'
            setTimeout(function () {
                // 仅为了模拟异步回调
                callback(ticket, res);
            }, 50);
            return res;
        }
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        tooltip: {
            show: true
        }
    },
    visualMap: {
        min: 0,
        max: 2500,
        show: false,
        inRange: {
            color: ['#ff7980', '#ffb59a', '#ffd6b8']
        },
        formater: 'aaaa{1000-2000}'
    },
    series: [{
        type: 'map',
        map: 'hangzhou',
        roam: false,
        scaleLimit:{
            min:1,
            max:3
        },
        label: {
            normal: {
                show: false
            },
            emphasis: {
                show: false
            }
        },
        itemStyle: {
            normal: {
                areaColor: '#0e2b43',
                borderColor: '#296bac'
            },
            emphasis:{
                label:{
                    show:false
                },
                areaColor:"#0186e1",
                color:'red',
                borderColor:'#48b'
            }
        }
    }]
});
//ZDRQ
var chart2 = echarts.init(document.getElementById('ZDRQ'));
chart2.setOption({
    title: {
        show: true,
        text: "重点人群",
        x: 'center',
        padding: [15, 0, 0, 10],
        textStyle: {
            fontSize: 18,
            fontWeight: 'normal',
            color: '#fff'
        }
    },
    //调整坐标轴的位置
    grid: {
        x: '50px',
        y: '40px',
        x2: '20px',
        y2: '40px',
        borderColor: '#ccc',
        borderWidth: 1
    },
    tooltip: {
        trigger: 'axis'
    },
    xAxis: [
        {
            type: 'value',
            boundaryGap: [0, 0],
            show: true,
            axisTick: false,
            onZero: true,
            lineStyle: {
                color: '#48b',
                width: 1,
                type: 'solid'
            },
            splitLine: {
                show:true,
                lineStyle: {
                    color: ['#265d89'],
                    width: 1,
                    type: 'solid'
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#265d89',
                    width: 1,
                    type: 'solid'
                }
            },
            splitNumber: 5,
            max: 25,
            nameTextStyle: {
                color: "#fff"
            },
            axisLabel: {
                formatter: '{value}万',
                textStyle: {
                    color: '#fff'
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'category',
            axisTick: false,
            axisLine: {
                lineStyle: {
                    color: '#48b',
                    width: 1,
                    type: 'solid'
                }
            },
            splitLine: {
                show:true,
                lineStyle: {
                    color: ['#265d89'],
                    width: 1,
                    type: 'solid'
                }
            },
            data: ['公务员', '律师', '教师', '医护'],
            axisLabel: {
                textStyle: {
                    color: '#fff'
                }
            }
        }
    ],
    series: [
        {
            name: '2011年',
            type: 'bar',
            data: [1, 7, 21, 20],
            itemStyle: {
                normal: {
                    color: function (params) {
                        // build a color map as your need.
                        var colorList = [
                            '#003df4', '#B5C334', '#FCCE10', '#186420'
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            },
            barWidth: 10,
            barGap: '15%'
        }
    ]
});

//ABC
var chart3 = echarts.init(document.getElementById('ABC'));
chart3.setOption({
    title: {
        text: 'ABC三类',
        x: 'center',
        padding: [15, 20, 20, 10],
        textStyle: {
            fontSize: 18,
            fontWeight: 'normal',
            color: '#fff'
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    color: ['#009917', '#fcc100', '#fc4c4c'],
    series: [
        {
            name: '面积模式',
            type: 'pie',
            radius: ['20%', '55%'],
            center: ['50%', '50%'],
            roseType: 'area',
            selectedOffset: 10,
            data: [
                {value: 50, name: 'A类'},
                {value: 70, name: 'B类'},
                {value: 90, name: 'C类'}
            ],
            itemStyle: {
                normal: {
                    label: {
                        show: true,
                        formatter: "{b} \n{c}万 \n{d}%"
                    },
                    labelLine: {
                        show: true,
                        position: 'inner',
                        length: -5
                    }
                }
            }
        }
    ]
});

//查询情况
var chart4 = echarts.init(document.getElementById('CXQK'));
chart4.setOption({
    title: {
        text: '查询情况',
        x: 'center',
        padding: [15, 0, 0, 10],
        textStyle: {
            fontSize: 18,
            fontWeight: 'normal',
            color: '#fff'
        }
    },
    color: ['#00d200', '#ff1111', '#fc4b76'],
    //调整坐标轴的位置
    grid: {
        x: '60px',
        y: '40px',
        x2: '60px',
        y2: '20px',
        borderColor: '#ccc',
        borderWidth: 1
    },
    tooltip: {
        trigger: 'axis'
    },
    textStyle: {
        color: "#ffffff"
    },
    legend: {
        padding: [20, 20, 10, 10],
        x: 'right',
        textStyle: {
            color: '#fff'
        },
        data: ['现场', '网站', 'APP']
    },
    calculable: true,
    xAxis: [
        {
            type: 'category',
            lineStyle: {
                color: '#48b',
                width: 1,
                type: 'solid'
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#48b',
                    width: 1
                }

            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#48b',
                    width: 1
                }
            },
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisTick: false,
            splitArea: {
                show: true,
                areaStyle:{
                    color: [
                        '#205586',
                        '#1a4877'
                    ]
                }
            },
            splitLine: {
                show:true,
                lineStyle: {
                    color: ['#48b'],
                    width: 1,
                    type: 'solid'
                }
            },
            axisLine: {
                show: false
            },
            axisLabel: {
                formatter: '{value} 万'
            }
        },
        {
            type: 'value',
            splitLine: {
                show: false
            },
            axisTick: false,
            axisLine: {
                show: false
            },
            axisLabel: {
                formatter: '{value} 万'
            }
        }
    ],
    series: [
        {
            symbol: 'circle',
            symbolSize: 0,
            yAxisIndex: 0,
            smooth: true,
            name: '现场',
            type: 'line',
            stack: '总量1',
            data: [5, 6, 6.5, 8, 12, 24]
        },
        {
            symbol: 'circle',
            symbolSize: 0,
            yAxisIndex: 0,
            smooth: true,
            name: '网站',
            type: 'line',
            stack: '总量2',
            data: [12, 13, 14, 16, 18, 20]
        },
        {
            symbol: 'circle',
            symbolSize: 0,
            yAxisIndex: 1,
            smooth: true,
            name: 'APP',
            type: 'line',
            stack: '总量3',
            data: [240, 400, 380, 650, 800, 950]
        }
    ]

});


//归集情况
var chart5 = echarts.init(document.getElementById('GJQK'));
chart5.setOption({
    title: [{
        text: '归集情况',
        x: 'center',
        padding: [15, 0, 0, 10],
        textStyle: {
            fontSize: 18,
            fontWeight: 'normal',
            color: '#fff'
        }
    }, {
        text: '上月总归集数：1934.5万',
        padding: [20, 0, 0, 100],
        textStyle: {
            fontSize: 12,
            color: '#ddd'
        }
    }],
    //调整坐标轴的位置
    grid: {
        x: '60px',
        y: '40px',
        x2: '60px',
        y2: '20px',
        borderColor: '#ccc',
        borderWidth: 1
    },
    textStyle: {
        color: "#ffffff"
    },
    tooltip: {
        trigger: 'axis'
    },
    calculable: true,
    legend: {
        data: ['数量', '质量'],
        padding: [20, 60, 10, 10],
        textStyle: {
            color: '#fff'
        },
        x: 'right'
    },
    xAxis: [
        {
            type: 'category',
            axisTick: false,
            lineStyle: {
                color: '#48b',
                width: 1,
                type: 'solid'
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#48b',
                    width: 1
                }
            },
            data: ['市公积金', '社保局', '公安局', '监管局', '地税局', '国税局', '市建委', '民政局', '国土局', '房管局'],
            textStyle: {
                color: '#fff'
            },
            axisLabel: {
                interval: 0
                // rotate: 60,//60度角倾斜显示
                // formatter:function(val) {
                //     return val.split("").join("\n"); //横轴信息文字竖直显示
                // }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            splitArea: {
                show: true
            },
            splitLine: {
                show:true,
                lineStyle: {
                    color: ['#48b'],
                    width: 1,
                    type: 'solid'
                }
            },
            splitArea: {
                show: true,
                areaStyle:{
                    color: [
                        '#205586',
                        '#1a4877'
                    ]
                }
            },
            axisTick: false,
            //name: '数量',
            axisLabel: {
                formatter: '{value} 万'
            },
            axisLine: {
                show: false
            }
        }, {
            splitLine: {
                show: false
            },
            axisTick: false,
            type: 'value',
            //name : '质量',
            axisLabel: {
                formatter: '{value} %'
            },
            axisLine: {
                show: false
            }
        }
    ],
    series: [
        {
            name: '数量',
            type: 'bar',
            barWidth: 10,
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0],
            itemStyle: {
                normal: {
                    color: function (params) {
                        // build a color map as your need.
                        var colorList = [
                            '#C1232B', '#B5C334', '#FCCE10', '#E87C25', '#27727B',
                            '#FE8463', '#9BCA63', '#FAD860', '#F3A43B', '#60C0DD'
                        ];
                        return colorList[params.dataIndex]
                    }
                }
            }
        },
        {
            color: ['#bb4800'],
            symbol: 'circle',
            symbolSize: 8,
            name: '质量',
            type: 'line',
            yAxisIndex: 1,
            data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5]
        }
    ]

});

//用于使chart自适应高度和宽度
window.onload = function () {
    //setTimeout(function () {
    chart1.resize();
    chart2.resize();
    chart3.resize();
    chart4.resize();
    chart5.resize();
    //},500);
};
