// 立即执行函数，防止变量污染 (function() {})();

//流量预测1
(function () {
    // 1.实例化
    var myChart = echarts.init(document.querySelector(".pre1 .chart"));
    //   var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

    var option;

    myChart.showLoading();
    $.get('../data/od1.json', function (arr) {
        // console.log('data', arr);
        let data = arr.slice(0, 10)
        let i = 0
        setInterval(() => {
            if (i >= arr.length) {
                i = 0
            }
            data = arr.slice(i, i + 10)

            i += 1
            // myChart.setOption(option)
            myChart.hideLoading();


            // var base = -data.reduce(function (min, val) {
            //     return Math.floor(Math.min(min, val.l));
            // }, Infinity);
            myChart.setOption(option = {
                // title: {
                //     text: 'Confidence Band',
                //     left: 'center',
                //     color: '#FFFFFF',
                //     textStyle: {
                //       color : '#FFF'
                //     }
                // },
                // tooltip: {
                //     trigger: 'axis',
                //     axisPointer: {
                //         type: 'cross',
                //         animation: false,
                //         label: {
                //             backgroundColor: '#ccc',
                //             borderColor: '#FFFAFA',
                //             borderWidth: 1,
                //             shadowBlur: 0,
                //             shadowOffsetX: 0,
                //             shadowOffsetY: 0,

                //             color: 'FFFAFA'
                //         }
                //     },
                //     formatter: function (params) {
                //         return params[2].name + '<br />' + ((params[2].value - base) * 100).toFixed(1) + '%';
                //     }
                // },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,

                },
                xAxis: {
                    type: 'category',
                    data: data.map(function (item) {

                        return item.date;
                    }),

                    axisLabel: {
                        formatter: function (value, idx) {
                            var date = new Date(Number(value));

                            return [date.getHours(),date.getMinutes()].join(':');
                        },
                        color: "#FFF"
                    },
                    boundaryGap: false
                },
                yAxis: {
                    axisLabel: {
                        formatter: function (val) {
                            return val;
                        },
                        color: "#FFF"
                    },
                    // axisPointer: {
                    //     label: {
                    //         formatter: function (params) {
                    //             return ((params.value - base) * 100).toFixed(1) + '%';
                    //         }
                    //     }
                    // },
                    splitNumber: 3
                },
                series: [{
                    name: 'L',
                    type: 'line',
                    data: data.map(function (item) {
                        return item.l;
                    }),
                    lineStyle: {
                        opacity: 0
                    },
                    stack: 'confidence-band',
                    symbol: 'none'
                }, {
                    name: 'U',
                    type: 'line',
                    data: data.map(function (item) {
                        return item.u;
                    }),
                    lineStyle: {
                        opacity: 0
                    },
                    areaStyle: {
                        color: '#F8F8FF'
                    },
                    stack: 'confidence-band',
                    symbol: 'none'
                }, {
                    type: 'line',
                    data: data.map(function (item) {
                        return item.value;
                    }),
                    hoverAnimation: false,
                    symbolSize: 6,
                    itemStyle: {
                        color: '#DC143C'
                    },
                    showSymbol: false
                }]
            });
        }, 3000)
    });

    option && myChart.setOption(option);
})();

//流量预测2
(function () {
    // 1.实例化
    var myChart = echarts.init(document.querySelector(".pre2 .chart"));
    var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

    var option;
    myChart.showLoading();
    $.get('../data/od2.json', function (arr) {
        // console.log('data', arr);
        let data = arr.slice(0, 10)
        let i = 0
        setInterval(() => {
            if (i >= arr.length) {
                i = 0
            }
            data = arr.slice(i, i + 10)

            i += 1
            // myChart.setOption(option)
            myChart.hideLoading();


            // var base = -data.reduce(function (min, val) {
            //     return Math.floor(Math.min(min, val.l));
            // }, Infinity);
            myChart.setOption(option = {
                // title: {
                //     text: 'Confidence Band',
                //     left: 'center',
                //     color: '#FFFFFF',
                //     textStyle: {
                //       color : '#FFF'
                //     }
                // },
                // tooltip: {
                //     trigger: 'axis',
                //     axisPointer: {
                //         type: 'cross',
                //         animation: false,
                //         label: {
                //             backgroundColor: '#ccc',
                //             borderColor: '#FFFAFA',
                //             borderWidth: 1,
                //             shadowBlur: 0,
                //             shadowOffsetX: 0,
                //             shadowOffsetY: 0,

                //             color: 'FFFAFA'
                //         }
                //     },
                //     formatter: function (params) {
                //         return params[2].name + '<br />' + ((params[2].value - base) * 100).toFixed(1) + '%';
                //     }
                // },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,

                },
                xAxis: {
                    type: 'category',
                    data: data.map(function (item) {

                        return item.date;
                    }),

                    axisLabel: {
                        formatter: function (value, idx) {
                            var date = new Date(Number(value));

                            return [date.getHours(),date.getMinutes()].join(':');
                        },
                        color: "#FFF"
                    },
                    boundaryGap: false
                },
                yAxis: {
                    axisLabel: {
                        formatter: function (val) {
                            return val;
                        },
                        color: "#FFF"
                    },
                    // axisPointer: {
                    //     label: {
                    //         formatter: function (params) {
                    //             return ((params.value - base) * 100).toFixed(1) + '%';
                    //         }
                    //     }
                    // },
                    splitNumber: 3
                },
                series: [{
                    name: 'L',
                    type: 'line',
                    data: data.map(function (item) {
                        return item.l;
                    }),
                    lineStyle: {
                        opacity: 0
                    },
                    stack: 'confidence-band',
                    symbol: 'none'
                }, {
                    name: 'U',
                    type: 'line',
                    data: data.map(function (item) {
                        return item.u;
                    }),
                    lineStyle: {
                        opacity: 0
                    },
                    areaStyle: {
                        color: '#F8F8FF'
                    },
                    stack: 'confidence-band',
                    symbol: 'none'
                }, {
                    type: 'line',
                    data: data.map(function (item) {
                        return item.value;
                    }),
                    hoverAnimation: false,
                    symbolSize: 6,
                    itemStyle: {
                        color: '#DC143C'
                    },
                    showSymbol: false
                }]
            });
        }, 3000)
    });

    option && myChart.setOption(option);
})();

//流量预测3
(function () {
    // 1.实例化
    var myChart = echarts.init(document.querySelector(".pre3 .chart"));
    var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

    var option;

    myChart.showLoading();
    $.get('../data/od3.json', function (arr) {
        // console.log('data', arr);
        let data = arr.slice(0, 10)
        let i = 0
        setInterval(() => {
            if (i >= arr.length) {
                i = 0
            }
            data = arr.slice(i, i + 10)

            i += 1
            // myChart.setOption(option)
            myChart.hideLoading();


            // var base = -data.reduce(function (min, val) {
            //     return Math.floor(Math.min(min, val.l));
            // }, Infinity);
            myChart.setOption(option = {
                // title: {
                //     text: 'Confidence Band',
                //     left: 'center',
                //     color: '#FFFFFF',
                //     textStyle: {
                //       color : '#FFF'
                //     }
                // },
                // tooltip: {
                //     trigger: 'axis',
                //     axisPointer: {
                //         type: 'cross',
                //         animation: false,
                //         label: {
                //             backgroundColor: '#ccc',
                //             borderColor: '#FFFAFA',
                //             borderWidth: 1,
                //             shadowBlur: 0,
                //             shadowOffsetX: 0,
                //             shadowOffsetY: 0,

                //             color: 'FFFAFA'
                //         }
                //     },
                //     formatter: function (params) {
                //         return params[2].name + '<br />' + ((params[2].value - base) * 100).toFixed(1) + '%';
                //     }
                // },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,

                },
                xAxis: {
                    type: 'category',
                    data: data.map(function (item) {

                        return item.date;
                    }),

                    axisLabel: {
                        formatter: function (value, idx) {
                            var date = new Date(Number(value));

                            return [date.getHours(),date.getMinutes()].join(':');
                        },
                        color: "#FFF"
                    },
                    boundaryGap: false
                },
                yAxis: {
                    axisLabel: {
                        formatter: function (val) {
                            return val;
                        },
                        color: "#FFF"
                    },
                    // axisPointer: {
                    //     label: {
                    //         formatter: function (params) {
                    //             return ((params.value - base) * 100).toFixed(1) + '%';
                    //         }
                    //     }
                    // },
                    splitNumber: 3
                },
                series: [{
                    name: 'L',
                    type: 'line',
                    data: data.map(function (item) {
                        return item.l;
                    }),
                    lineStyle: {
                        opacity: 0
                    },
                    stack: 'confidence-band',
                    symbol: 'none'
                }, {
                    name: 'U',
                    type: 'line',
                    data: data.map(function (item) {
                        return item.u;
                    }),
                    lineStyle: {
                        opacity: 0
                    },
                    areaStyle: {
                        color: '#F8F8FF'
                    },
                    stack: 'confidence-band',
                    symbol: 'none'
                }, {
                    type: 'line',
                    data: data.map(function (item) {
                        return item.value;
                    }),
                    hoverAnimation: false,
                    symbolSize: 6,
                    itemStyle: {
                        color: '#DC143C'
                    },
                    showSymbol: false
                }]
            });
        }, 3000)
    });

    option && myChart.setOption(option);
})();

//流量预测4
(function () {
    // 1.实例化
    var myChart = echarts.init(document.querySelector(".pre4 .chart"));
    var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

    var option;

    myChart.showLoading();
    $.get('../data/od4.json', function (arr) {
        // console.log('data', arr);
        let data = arr.slice(0, 10)
        let i = 0
        setInterval(() => {
            if (i >= arr.length) {
                i = 0
            }
            data = arr.slice(i, i + 10)

            i += 1
            // myChart.setOption(option)
            myChart.hideLoading();


            // var base = -data.reduce(function (min, val) {
            //     return Math.floor(Math.min(min, val.l));
            // }, Infinity);
            myChart.setOption(option = {
                // title: {
                //     text: 'Confidence Band',
                //     left: 'center',
                //     color: '#FFFFFF',
                //     textStyle: {
                //       color : '#FFF'
                //     }
                // },
                // tooltip: {
                //     trigger: 'axis',
                //     axisPointer: {
                //         type: 'cross',
                //         animation: false,
                //         label: {
                //             backgroundColor: '#ccc',
                //             borderColor: '#FFFAFA',
                //             borderWidth: 1,
                //             shadowBlur: 0,
                //             shadowOffsetX: 0,
                //             shadowOffsetY: 0,

                //             color: 'FFFAFA'
                //         }
                //     },
                //     formatter: function (params) {
                //         return params[2].name + '<br />' + ((params[2].value - base) * 100).toFixed(1) + '%';
                //     }
                // },
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true,

                },
                xAxis: {
                    type: 'category',
                    data: data.map(function (item) {

                        return item.date;
                    }),

                    axisLabel: {
                        formatter: function (value, idx) {
                            var date = new Date(Number(value));

                            return [date.getHours(),date.getMinutes()].join(':');
                        },
                        color: "#FFF"
                    },
                    boundaryGap: false
                },
                yAxis: {
                    axisLabel: {
                        formatter: function (val) {
                            return val;
                        },
                        color: "#FFF"
                    },
                    // axisPointer: {
                    //     label: {
                    //         formatter: function (params) {
                    //             return ((params.value - base) * 100).toFixed(1) + '%';
                    //         }
                    //     }
                    // },
                    splitNumber: 3
                },
                series: [{
                    name: 'L',
                    type: 'line',
                    data: data.map(function (item) {
                        return item.l;
                    }),
                    lineStyle: {
                        opacity: 0
                    },
                    stack: 'confidence-band',
                    symbol: 'none'
                }, {
                    name: 'U',
                    type: 'line',
                    data: data.map(function (item) {
                        return item.u;
                    }),
                    lineStyle: {
                        opacity: 0
                    },
                    areaStyle: {
                        color: '#F8F8FF'
                    },
                    stack: 'confidence-band',
                    symbol: 'none'
                }, {
                    type: 'line',
                    data: data.map(function (item) {
                        return item.value;
                    }),
                    hoverAnimation: false,
                    symbolSize: 6,
                    itemStyle: {
                        color: '#DC143C'
                    },
                    showSymbol: false
                }]
            });
        }, 3000)
    });

    option && myChart.setOption(option);
})();

//背景流量对比1
(function l1() {

    var myChart = echarts.init(document.querySelector(".com1 .chart"));
    var option;


    option = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },
        legend: {
            data: ['背景流量利用率', '输入流量利用率'],
            textStyle: {
                color: "#FFF"
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '2%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['0-10s', '10-20s', '20-30s', '30-40s', '40-50s'],
                axisLabel: {
                    textStyle: {
                        color: `#FFF`
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: `#FFF`
                    }
                }
            }
        ],
        series: [
            {
                name: '背景流量利用率',
                type: 'bar',
                stack: '1',
                emphasis: {
                    focus: 'series'
                },
                data: [0.19, 0.2, 0.25, 0.3, 0.1]
            },
            {
                name: '输入流量利用率',
                type: 'bar',
                stack: '1',
                emphasis: {
                    focus: 'series'
                },
                data: [0.2, 0.1, 0.1, 0.2, 0.31]
            },

        ]
    };

    option && myChart.setOption(option);

})();

//背景流量对比2
// var myChart = echarts.init(document.querySelector(".com2 .chart"));

(function l2() {
    var myChart = echarts.init(document.querySelector(".com2 .chart"));
    var option;

    option = {

        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['OD1', 'OD2', 'OD3'],
            textStyle: {
                color: '#FFF'
            },
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            borderColor: '#FFF',
            containLabel: true,
        },
        xAxis: {
            boundaryGap: false,
            type: 'category',
            data: ['0S', '10S', '20S', '30S', '40S', '50S'],
            axisLabel: {
                textStyle: {
                    color: `#FFF`
                }
            }
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                textStyle: {
                    color: `#FFF`
                }
            }
        },
        series: [
            {
                name: 'OD1',
                type: 'line',
                step: 'end',
                data: [20, 32, 10, 34, 30, 30],
                color: 'red'
            },
            {
                name: 'OD2',
                type: 'line',
                step: 'end',
                data: [25, 36, 15, 31, 15, 15],
                color: 'skyblue'
            },
            {
                name: 'OD3',
                type: 'line',
                step: 'end',
                data: [50, 42, 41, 44, 50, 50],
                color: 'yellow'
            }
        ]
    };




    option && myChart.setOption(option);

})();


//OD1拓扑
function c1() {
    var myChart = echarts.init(document.querySelector(".op1 .chart"));
    var option;
    option = {
        title: {
            text: 'OD主机0-主机7',
            left: 'center',
            color: '#FFFFFF',
            textStyle: {
                color: '#FFF'
            }
        },
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: 'quinticInOut',
        series: [
            {
                type: 'graph',
                layout: 'none',
                symbolSize: 15,
                roam: true,
                label: {
                    show: true
                },
                edgeSymbol: ['circle', 'none'],
                edgeSymbolSize: [4, 10],
                edgeLabel: {
                    fontSize: 20
                },
                data: [{
                    name: '主机0',
                    x: 450,
                    y: 0
                },{
                    name: '主机1',
                    x: 550,
                    y: 0
                },{
                    name: '主机2',
                    x: 610,
                    y: 60
                },{
                    name: '主机3',
                    x: 350,
                    y: 90
                },{
                    name: '主机4',
                    x: 630,
                    y: 100
                },{
                    name: '主机5',
                    x: 530,
                    y: 160
                },{
                    name: '主机6',
                    x: 345,
                    y: 125
                },{
                    name: '主机7',
                    x: 410,
                    y: 180
                },{
                    name: '0',
                    x: 500,
                    y: 0
                }, {
                    name: '1',
                    x: 450,
                    y: 25
                }, {
                    name: '2',
                    x: 550,
                    y: 25
                }, {
                    name: '3',
                    x: 540,
                    y: 50
                }, {
                    name: '4',
                    x: 570,
                    y: 40
                }, {
                    name: '5',
                    x: 530,
                    y: 75
                }, {
                    name: '6',
                    x: 475,
                    y: 70
                }, {
                    name: '7',
                    x: 580,
                    y: 60
                }, {
                    name: '8',
                    x: 510,
                    y: 100
                }, {
                    name: '9',
                    x: 425,
                    y: 70
                }, {
                    name: '10',
                    x: 400,
                    y: 50
                }, {
                    name: '11',
                    x: 570,
                    y: 90
                }, {
                    name: '12',
                    x: 430,
                    y: 95
                }, {
                    name: '13',
                    x: 380,
                    y: 90
                }, {
                    name: '14',
                    x: 600,
                    y: 100
                }, {
                    name: '15',
                    x: 590,
                    y: 125
                }, {
                    name: '16',
                    x: 560,
                    y: 130
                }, {
                    name: '17',
                    x: 530,
                    y: 130
                }, {
                    name: '18',
                    x: 500,
                    y: 140
                }, {
                    name: '19',
                    x: 375,
                    y: 125
                }, {
                    name: '20',
                    x: 560,
                    y: 110
                }, {
                    name: '21',
                    x: 470,
                    y: 130
                }, {
                    name: '22',
                    x: 430,
                    y: 130
                }, {
                    name: '23',
                    x: 410,
                    y: 150
                }],
                links: [
                    {
                    source: '主机0',
                    target: '1',
                    label: {
                        formatter:"-->",
                        show: true
                    },
                    lineStyle: {
                    color : "red",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '主机1',
                    target: '2',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '主机2',
                    target: '7',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '主机3',
                    target: '13',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '主机4',
                    target: '14',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '主机5',
                    target: '17',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '主机6',
                    target: '19',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '主机7',
                    target: '23',
                    label: {
                        formatter:"<--",
                        show: true
                    },
                    lineStyle: {
                    color : "red",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '0',
                    target: '1',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '0',
                    target: '2',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '1',
                    target: '3',
                    label: {
                        formatter:"-->",
                        show: true
                    },
                    lineStyle: {
                    color : "yellow",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '1',
                    target: '6',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '1',
                    target: '9',
                    label: {
                        formatter:"<--",
                        show: true
                    },
                    lineStyle: {
                    color : "red",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '2',
                    target: '3',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '2',
                    target: '4',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '3',
                    target: '5',
                    label: {
                        formatter:"<--",
                        show: true
                    },
                    lineStyle: {
                    color : "yellow",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '3',
                    target: '6',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '4',
                    target: '7',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '5',
                    target: '8',
                    label: {
                        formatter:"<--",
                        show: true
                    },
                    lineStyle: {
                    color : "yellow",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '6',
                    target: '8',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '6',
                    target: '9',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '7',
                    target: '8',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '7',
                    target: '11',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '8',
                    target: '12',
                    label: {
                        formatter:"<--",
                        show: true
                    },
                    lineStyle: {
                    color : "yellow",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '8',
                    target: '11',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '8',
                    target: '17',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '8',
                    target: '18',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '8',
                    target: '20',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '9',
                    target: '10',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '9',
                    target: '12',
                    label: {
                        formatter:"-->",
                        show: true
                    },
                    lineStyle: {
                    color : "red",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '9',
                    target: '13',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '10',
                    target: '13',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '11',
                    target: '14',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '11',
                    target: '20',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '12',
                    target: '13',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '12',
                    target: '19',
                    label: {
                        formatter:"<--",
                        show: true
                    },
                    lineStyle: {
                    color : "yellow",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '12',
                    target: '21',
                    label: {
                        formatter:"-->",
                        show: true
                    },
                    lineStyle: {
                    color : "red",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '14',
                    target: '15',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '15',
                    target: '16',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '16',
                    target: '17',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '17',
                    target: '18',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '18',
                    target: '21',
                    label: {
                        formatter:"-->",
                        show: false
                    },
                    lineStyle: {
                    color : "white",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '19',
                    target: '23',
                    label: {
                        formatter:"-->",
                        show: true
                    },
                    lineStyle: {
                    color : "yellow",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '21',
                    target: '22',
                    label: {
                        formatter:"<--",
                        show: true
                    },
                    lineStyle: {
                    color : "red",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },},{
                    source: '22',
                    target: '23',
                    label: {
                        formatter:"<--",
                        show: true
                    },
                    lineStyle: {
                    color : "red",
                    opacity: 0.9,
                    width: 2,
                    curveness: 0
                },}
                ]
            }
        ]
    };


    option && myChart.setOption(option, true);
};

//OD2拓扑
function c2() {
    var myChart = echarts.init(document.querySelector(".op2 .chart"));
    var option;

    option = {
        title: {
            text: 'OD主机1-主机5',
            left: 'center',
            color: '#FFFFFF',
            textStyle: {
                color: '#FFF'
            }
        },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 15,
            roam: true,
            label: {
                show: true
            },
            edgeSymbol: ['circle', 'none'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                fontSize: 20
            },
            data: [{
                name: '主机0',
                x: 450,
                y: 0
            },{
                name: '主机1',
                x: 550,
                y: 0
            },{
                name: '主机2',
                x: 610,
                y: 60
            },{
                name: '主机3',
                x: 350,
                y: 90
            },{
                name: '主机4',
                x: 630,
                y: 100
            },{
                name: '主机5',
                x: 530,
                y: 160
            },{
                name: '主机6',
                x: 345,
                y: 125
            },{
                name: '主机7',
                x: 410,
                y: 180
            },{
                name: '0',
                x: 500,
                y: 0
            }, {
                name: '1',
                x: 450,
                y: 25
            }, {
                name: '2',
                x: 550,
                y: 25
            }, {
                name: '3',
                x: 540,
                y: 50
            }, {
                name: '4',
                x: 570,
                y: 40
            }, {
                name: '5',
                x: 530,
                y: 75
            }, {
                name: '6',
                x: 475,
                y: 70
            }, {
                name: '7',
                x: 580,
                y: 60
            }, {
                name: '8',
                x: 510,
                y: 100
            }, {
                name: '9',
                x: 425,
                y: 70
            }, {
                name: '10',
                x: 400,
                y: 50
            }, {
                name: '11',
                x: 570,
                y: 90
            }, {
                name: '12',
                x: 430,
                y: 95
            }, {
                name: '13',
                x: 380,
                y: 90
            }, {
                name: '14',
                x: 600,
                y: 100
            }, {
                name: '15',
                x: 590,
                y: 125
            }, {
                name: '16',
                x: 560,
                y: 130
            }, {
                name: '17',
                x: 530,
                y: 130
            }, {
                name: '18',
                x: 500,
                y: 140
            }, {
                name: '19',
                x: 375,
                y: 125
            }, {
                name: '20',
                x: 560,
                y: 110
            }, {
                name: '21',
                x: 470,
                y: 130
            }, {
                name: '22',
                x: 430,
                y: 130
            }, {
                name: '23',
                x: 410,
                y: 150
            }],
            links: [
                {
                source: '主机0',
                target: '1',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '主机1',
                target: '2',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '主机2',
                target: '7',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '主机3',
                target: '13',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '主机4',
                target: '14',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '主机5',
                target: '17',
                label: {
                    formatter:"<--",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '主机6',
                target: '19',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '主机7',
                target: '23',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '0',
                target: '1',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '0',
                target: '2',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '1',
                target: '3',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '1',
                target: '6',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '1',
                target: '9',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '2',
                target: '3',
                label: {
                    formatter:"<--",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '2',
                target: '4',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '3',
                target: '5',
                label: {
                    formatter:"<--",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '3',
                target: '6',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '4',
                target: '7',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '5',
                target: '8',
                label: {
                    formatter:"<--",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '6',
                target: '8',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '6',
                target: '9',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '7',
                target: '8',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '7',
                target: '11',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '8',
                target: '12',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '8',
                target: '11',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '8',
                target: '17',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '8',
                target: '18',
                label: {
                    formatter:"<--",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '8',
                target: '20',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '9',
                target: '10',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '9',
                target: '12',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '9',
                target: '13',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '10',
                target: '13',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '11',
                target: '14',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '11',
                target: '20',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '12',
                target: '13',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '12',
                target: '19',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '12',
                target: '21',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '14',
                target: '15',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '15',
                target: '16',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '16',
                target: '17',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '17',
                target: '18',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '18',
                target: '21',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '19',
                target: '23',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '21',
                target: '22',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '22',
                target: '23',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },}
            ]
        }
    ]
};

    option && myChart.setOption(option, true);
};

//OD3拓扑
function c3() {
    var myChart = echarts.init(document.querySelector(".op3 .chart"));
    var option;

    option = {
        title: {
            text: 'OD主机3-主机2',
            left: 'center',
            color: '#FFFFFF',
            textStyle: {
                color: '#FFF'
            }
        },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 15,
            roam: true,
            label: {
                show: true
            },
            edgeSymbol: ['circle', 'none'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                fontSize: 20
            },
            data: [{
                name: '主机0',
                x: 450,
                y: 0
            },{
                name: '主机1',
                x: 550,
                y: 0
            },{
                name: '主机2',
                x: 610,
                y: 60
            },{
                name: '主机3',
                x: 350,
                y: 90
            },{
                name: '主机4',
                x: 630,
                y: 100
            },{
                name: '主机5',
                x: 530,
                y: 160
            },{
                name: '主机6',
                x: 345,
                y: 125
            },{
                name: '主机7',
                x: 410,
                y: 180
            },{
                name: '0',
                x: 500,
                y: 0
            }, {
                name: '1',
                x: 450,
                y: 25
            }, {
                name: '2',
                x: 550,
                y: 25
            }, {
                name: '3',
                x: 540,
                y: 50
            }, {
                name: '4',
                x: 570,
                y: 40
            }, {
                name: '5',
                x: 530,
                y: 75
            }, {
                name: '6',
                x: 475,
                y: 70
            }, {
                name: '7',
                x: 580,
                y: 60
            }, {
                name: '8',
                x: 510,
                y: 100
            }, {
                name: '9',
                x: 425,
                y: 70
            }, {
                name: '10',
                x: 400,
                y: 50
            }, {
                name: '11',
                x: 570,
                y: 90
            }, {
                name: '12',
                x: 430,
                y: 95
            }, {
                name: '13',
                x: 380,
                y: 90
            }, {
                name: '14',
                x: 600,
                y: 100
            }, {
                name: '15',
                x: 590,
                y: 125
            }, {
                name: '16',
                x: 560,
                y: 130
            }, {
                name: '17',
                x: 530,
                y: 130
            }, {
                name: '18',
                x: 500,
                y: 140
            }, {
                name: '19',
                x: 375,
                y: 125
            }, {
                name: '20',
                x: 560,
                y: 110
            }, {
                name: '21',
                x: 470,
                y: 130
            }, {
                name: '22',
                x: 430,
                y: 130
            }, {
                name: '23',
                x: 410,
                y: 150
            }],
            links: [
                {
                source: '主机0',
                target: '1',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '主机1',
                target: '2',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '主机2',
                target: '7',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '主机3',
                target: '13',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '主机4',
                target: '14',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '主机5',
                target: '17',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '主机6',
                target: '19',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '主机7',
                target: '23',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '0',
                target: '1',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "green",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '0',
                target: '2',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "green",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '1',
                target: '3',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "yellow",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '1',
                target: '6',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '1',
                target: '9',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "yellow",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '2',
                target: '3',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '2',
                target: '4',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "green",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '3',
                target: '5',
                label: {
                    formatter:"<--",
                    show: true
                },
                lineStyle: {
                color : "yellow",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '3',
                target: '6',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '4',
                target: '7',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "green",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '5',
                target: '8',
                label: {
                    formatter:"<--",
                    show: true
                },
                lineStyle: {
                color : "yellow",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '6',
                target: '8',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '6',
                target: '9',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '7',
                target: '8',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "yellow",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '7',
                target: '11',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '8',
                target: '12',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '8',
                target: '11',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '8',
                target: '17',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '8',
                target: '18',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '8',
                target: '20',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '9',
                target: '10',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '9',
                target: '12',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '9',
                target: '13',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "yellow",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '10',
                target: '13',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '11',
                target: '14',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '11',
                target: '20',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '12',
                target: '13',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '12',
                target: '19',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '12',
                target: '21',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '14',
                target: '15',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '15',
                target: '16',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '16',
                target: '17',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '17',
                target: '18',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '18',
                target: '21',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '19',
                target: '23',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '21',
                target: '22',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '22',
                target: '23',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },}
            ]
        }
    ]
};

    option && myChart.setOption(option, true);
};

//OD4拓扑
function c4() {
    var myChart = echarts.init(document.querySelector(".op4 .chart"));
    var option;

    option = {
        title: {
            text: 'OD主机6-主机4',
            left: 'center',
            color: '#FFFFFF',
            textStyle: {
                color: '#FFF'
            }
        },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 15,
            roam: true,
            label: {
                show: true
            },
            edgeSymbol: ['circle', 'none'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                fontSize: 20
            },
            data: [{
                name: '主机0',
                x: 450,
                y: 0
            },{
                name: '主机1',
                x: 550,
                y: 0
            },{
                name: '主机2',
                x: 610,
                y: 60
            },{
                name: '主机3',
                x: 350,
                y: 90
            },{
                name: '主机4',
                x: 630,
                y: 100
            },{
                name: '主机5',
                x: 530,
                y: 160
            },{
                name: '主机6',
                x: 345,
                y: 125
            },{
                name: '主机7',
                x: 410,
                y: 180
            },{
                name: '0',
                x: 500,
                y: 0
            }, {
                name: '1',
                x: 450,
                y: 25
            }, {
                name: '2',
                x: 550,
                y: 25
            }, {
                name: '3',
                x: 540,
                y: 50
            }, {
                name: '4',
                x: 570,
                y: 40
            }, {
                name: '5',
                x: 530,
                y: 75
            }, {
                name: '6',
                x: 475,
                y: 70
            }, {
                name: '7',
                x: 580,
                y: 60
            }, {
                name: '8',
                x: 510,
                y: 100
            }, {
                name: '9',
                x: 425,
                y: 70
            }, {
                name: '10',
                x: 400,
                y: 50
            }, {
                name: '11',
                x: 570,
                y: 90
            }, {
                name: '12',
                x: 430,
                y: 95
            }, {
                name: '13',
                x: 380,
                y: 90
            }, {
                name: '14',
                x: 600,
                y: 100
            }, {
                name: '15',
                x: 590,
                y: 125
            }, {
                name: '16',
                x: 560,
                y: 130
            }, {
                name: '17',
                x: 530,
                y: 130
            }, {
                name: '18',
                x: 500,
                y: 140
            }, {
                name: '19',
                x: 375,
                y: 125
            }, {
                name: '20',
                x: 560,
                y: 110
            }, {
                name: '21',
                x: 470,
                y: 130
            }, {
                name: '22',
                x: 430,
                y: 130
            }, {
                name: '23',
                x: 410,
                y: 150
            }],
            links: [
                {
                source: '主机0',
                target: '1',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '主机1',
                target: '2',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '主机2',
                target: '7',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '主机3',
                target: '13',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '主机4',
                target: '14',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '主机5',
                target: '17',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '主机6',
                target: '19',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '主机7',
                target: '23',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '0',
                target: '1',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '0',
                target: '2',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '1',
                target: '3',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '1',
                target: '6',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '1',
                target: '9',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '2',
                target: '3',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '2',
                target: '4',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '3',
                target: '5',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '3',
                target: '6',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '4',
                target: '7',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '5',
                target: '8',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '6',
                target: '8',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '6',
                target: '9',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '7',
                target: '8',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '7',
                target: '11',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '8',
                target: '12',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "yellow",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '8',
                target: '11',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "yellow",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '8',
                target: '17',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '8',
                target: '18',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '8',
                target: '20',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '9',
                target: '10',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '9',
                target: '12',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '9',
                target: '13',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '10',
                target: '13',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '11',
                target: '14',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "yellow",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '11',
                target: '20',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '12',
                target: '13',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '12',
                target: '19',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "yellow",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '12',
                target: '21',
                label: {
                    formatter:"-->",
                    show: false
                },
                lineStyle: {
                color : "white",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '14',
                target: '15',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '15',
                target: '16',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '16',
                target: '17',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '17',
                target: '18',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '18',
                target: '21',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '19',
                target: '23',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '21',
                target: '22',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },},{
                source: '22',
                target: '23',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },}
            ]
        }
    ]
};

    option && myChart.setOption(option, true);

};

//时延
function shiyan() {
    var myChart1 = echarts.init(document.querySelector(".op1 .chart"));
    var myChart2 = echarts.init(document.querySelector(".op2 .chart"));
    var myChart3 = echarts.init(document.querySelector(".op3 .chart"));
    var myChart4 = echarts.init(document.querySelector(".op4 .chart"));

    var option;

    option = {
        title: {
            text: '时延图展示',
            left: 'center',
            color: '#FFFFFF',
            textStyle: {
                color: '#FFF'
            }
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
                type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
        },

        legend: {
            show: true,
            top: "10%",//与上方的距离 可百分比% 可像素px
            data: ['OD1时延', 'OD2时延', 'OD3时延'],
            textStyle: {
                color: '#FFF'
            }
        },
        grid: {
            top: '20%',
            left: '3%',
            right: '4%',
            bottom: '2%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                data: ['0-10s', '10-20s', '20-30s', '30-40s', '40-50s'],
                axisLabel: {
                    textStyle: {
                        color: '#FFF'
                    }
                }
            }
        ],
        yAxis: [
            {
                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: '#FFF'
                    }
                }
            }
        ],
        series: [
            {
                name: 'OD1时延',
                type: 'bar',
                color: 'red',
                emphasis: {
                    focus: 'series'
                },
                data: [20, 21.5, 22, 20, 20.5]
            },
            {
                name: 'OD2时延',
                type: 'bar',
                color: 'skyblue',
                emphasis: {
                    focus: 'series'
                },
                data: [22, 21.5, 23, 25, 21.5]
            },
            {
                name: 'OD3时延',
                type: 'bar',
                color: 'yellow',
                emphasis: {
                    focus: 'series'
                },
                data: [19, 21, 18, 16, 15]
            },
        ]
    };




    myChart1.setOption(option, true);
    myChart2.setOption(option, true);
    myChart3.setOption(option, true);
    myChart4.setOption(option, true);

};