// 立即执行函数，防止变量污染 (function() {})();

//流量预测1
(function () {
  // 1.实例化
  var myChart = echarts.init(document.querySelector(".pre1 .chart"));
  var ROOT_PATH = 'https://cdn.jsdelivr.net/gh/apache/echarts-website@asf-site/examples';

  var option;
  
  myChart.showLoading();
  $.get(ROOT_PATH + '/data/asset/data/confidence-band.json', function (data) {
      myChart.hideLoading();
  
      var base = -data.reduce(function (min, val) {
          return Math.floor(Math.min(min, val.l));
      }, Infinity);
      myChart.setOption(option = {
        // title: {
        //     text: 'Confidence Band',
        //     left: 'center',
        //     color: '#FFFFFF',
        //     textStyle: {
        //       color : '#FFF'
        //     }
        // },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                animation: false,
                label: {
                    backgroundColor: '#ccc',
                    borderColor: '#FFFAFA',
                    borderWidth: 1,
                    shadowBlur: 0,
                    shadowOffsetX: 0,
                    shadowOffsetY: 0,

                    color: 'FFFAFA'
                }
            },
            formatter: function (params) {
                return params[2].name + '<br />' + ((params[2].value - base) * 100).toFixed(1) + '%';
            }
        },
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
                    var date = new Date(value);
                    return idx === 0 ? value : [date.getMonth() + 1, date.getDate()].join('-');
                },
                color: "#FFF"
            },
            boundaryGap: false
        },
        yAxis: {
            axisLabel: {
                formatter: function (val) {
                    return (val - base) * 100 + '%';
                },
                color: "#FFF"
            },
            axisPointer: {
                label: {
                    formatter: function (params) {
                        return ((params.value - base) * 100).toFixed(1) + '%';
                    }
                }
            },
            splitNumber: 3
        },
        series: [{
            name: 'L',
            type: 'line',
            data: data.map(function (item) {
                return item.l + base;
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
                return item.u - item.l;
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
                return item.value + base;
            }),
            hoverAnimation: false,
            symbolSize: 6,
            itemStyle: {
                color: '#DC143C'
            },
            showSymbol: false
        }]
    });
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
  $.get(ROOT_PATH + '/data/asset/data/confidence-band.json', function (data) {
    myChart.hideLoading();

    var base = -data.reduce(function (min, val) {
        return Math.floor(Math.min(min, val.l));
    }, Infinity);
    myChart.setOption(option = {
    //   title: {
    //       text: 'Confidence Band',
    //       left: 'center',
    //       color: '#FFFFFF',
    //       textStyle: {
    //         color : '#FFF'
    //       }
    //   },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross',
              animation: false,
              label: {
                  backgroundColor: '#ccc',
                  borderColor: '#FFFAFA',
                  borderWidth: 1,
                  shadowBlur: 0,
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,

                  color: 'FFFAFA'
              }
          },
          formatter: function (params) {
              return params[2].name + '<br />' + ((params[2].value - base) * 100).toFixed(1) + '%';
          }
      },
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
                  var date = new Date(value);
                  return idx === 0 ? value : [date.getMonth() + 1, date.getDate()].join('-');
              },
              color: "#FFF"
          },
          boundaryGap: false
      },
      yAxis: {
          axisLabel: {
              formatter: function (val) {
                  return (val - base) * 100 + '%';
              },
              color: "#FFF"
          },
          axisPointer: {
              label: {
                  formatter: function (params) {
                      return ((params.value - base) * 100).toFixed(1) + '%';
                  }
              }
          },
          splitNumber: 3
      },
      series: [{
          name: 'L',
          type: 'line',
          data: data.map(function (item) {
              return item.l + base;
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
              return item.u - item.l;
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
              return item.value + base;
          }),
          hoverAnimation: false,
          symbolSize: 6,
          itemStyle: {
              color: '#DC143C'
          },
          showSymbol: false
      }]
  });
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
  $.get(ROOT_PATH + '/data/asset/data/confidence-band.json', function (data) {
    myChart.hideLoading();

    var base = -data.reduce(function (min, val) {
        return Math.floor(Math.min(min, val.l));
    }, Infinity);
    myChart.setOption(option = {
        //   title: {
        //       text: 'Confidence Band',
        //       left: 'center',
        //       color: '#FFFFFF',
        //       textStyle: {
        //         color : '#FFF'
        //       }
        //   },
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  type: 'cross',
                  animation: false,
                  label: {
                      backgroundColor: '#ccc',
                      borderColor: '#FFFAFA',
                      borderWidth: 1,
                      shadowBlur: 0,
                      shadowOffsetX: 0,
                      shadowOffsetY: 0,
    
                      color: 'FFFAFA'
                  }
              },
              formatter: function (params) {
                  return params[2].name + '<br />' + ((params[2].value - base) * 100).toFixed(1) + '%';
              }
          },
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
                      var date = new Date(value);
                      return idx === 0 ? value : [date.getMonth() + 1, date.getDate()].join('-');
                  },
                  color: "#FFF"
              },
              boundaryGap: false
          },
          yAxis: {
              axisLabel: {
                  formatter: function (val) {
                      return (val - base) * 100 + '%';
                  },
                  color: "#FFF"
              },
              axisPointer: {
                  label: {
                      formatter: function (params) {
                          return ((params.value - base) * 100).toFixed(1) + '%';
                      }
                  }
              },
              splitNumber: 3
          },
          series: [{
              name: 'L',
              type: 'line',
              data: data.map(function (item) {
                  return item.l + base;
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
                  return item.u - item.l;
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
                  return item.value + base;
              }),
              hoverAnimation: false,
              symbolSize: 6,
              itemStyle: {
                  color: '#DC143C'
              },
              showSymbol: false
          }]
      });
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
  $.get(ROOT_PATH + '/data/asset/data/confidence-band.json', function (data) {
    myChart.hideLoading();

    var base = -data.reduce(function (min, val) {
        return Math.floor(Math.min(min, val.l));
    }, Infinity);
    myChart.setOption(option = {
    //   title: {
    //       text: 'Confidence Band',
    //       left: 'center',
    //       color: '#FFFFFF',
    //       textStyle: {
    //         color : '#FFF'
    //       }
    //   },
      tooltip: {
          trigger: 'axis',
          axisPointer: {
              type: 'cross',
              animation: false,
              label: {
                  backgroundColor: '#ccc',
                  borderColor: '#FFFAFA',
                  borderWidth: 1,
                  shadowBlur: 0,
                  shadowOffsetX: 0,
                  shadowOffsetY: 0,

                  color: 'FFFAFA'
              }
          },
          formatter: function (params) {
              return params[2].name + '<br />' + ((params[2].value - base) * 100).toFixed(1) + '%';
          }
      },
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
                  var date = new Date(value);
                  return idx === 0 ? value : [date.getMonth() + 1, date.getDate()].join('-');
              },
              color: "#FFF"
          },
          boundaryGap: false
      },
      yAxis: {
          axisLabel: {
              formatter: function (val) {
                  return (val - base) * 100 + '%';
              },
              color: "#FFF"
          },
          axisPointer: {
              label: {
                  formatter: function (params) {
                      return ((params.value - base) * 100).toFixed(1) + '%';
                  }
              }
          },
          splitNumber: 3
      },
      series: [{
          name: 'L',
          type: 'line',
          data: data.map(function (item) {
              return item.l + base;
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
              return item.u - item.l;
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
              return item.value + base;
          }),
          hoverAnimation: false,
          symbolSize: 6,
          itemStyle: {
              color: '#DC143C'
          },
          showSymbol: false
      }]
  });
});

option && myChart.setOption(option);
})();

//背景流量对比1
(function l1 (){

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
        textStyle:{
            color:"#FFF"
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
            axisLabel:{
                textStyle:{
                    color:`#FFF`
                }
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            axisLabel:{
                textStyle:{
                    color:`#FFF`
                }
            }
        }
    ],
    series: [
        {
            name: '背景流量利用率',
            type: 'bar',
            stack:'1',
            emphasis: {
                focus: 'series'
            },
            data: [0.19, 0.2, 0.25, 0.3, 0.1]
        },
        {
            name: '输入流量利用率',
            type: 'bar',
            stack:'1',
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

(function l2 (){
  var myChart = echarts.init(document.querySelector(".com2 .chart"));
  var option;
  
  option = {

    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['OD1', 'OD2', 'OD3'],
        textStyle:{
            color:'#FFF'
        },
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        borderColor:'#FFF',
        containLabel: true,
    },
    xAxis: {
        boundaryGap: false,
        type: 'category',
        data: ['0S', '10S', '20S', '30S', '40S', '50S'],
        axisLabel:{
            textStyle:{
                color:`#FFF`
            }
        }
    },
    yAxis: {
        type: 'value',
        axisLabel:{
            textStyle:{
                color:`#FFF`
            }
        }
    },
    series: [
        {
            name: 'OD1',
            type: 'line',
            step: 'end',
            data: [20, 32, 10, 34, 30, 30],
            color:'red'
        },
        {
            name: 'OD2',
            type: 'line',
            step: 'end',
            data: [25, 36, 15, 31,  15, 15],
            color:'skyblue'
        },
        {
            name: 'OD3',
            type: 'line',
            step: 'end',
            data: [50, 42, 41, 44, 50, 50],
            color:'yellow'
        }
    ]
};

  

  
  option && myChart.setOption(option);

})();


//OD1拓扑
function c1 (){
  var myChart = echarts.init(document.querySelector(".op1 .chart"));
  var option;

  option = {
      title: {
          text: 'OD1拓扑',
          left: 'center',
          color: '#FFFFFF',
          textStyle: {
            color : '#FFF'
          }
      },

    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 30,
            roam: true,
            label: {
                show: true
            },
            edgeSymbol: ['circle', 'none'],
            edgeSymbolSize: [4, 10],
            edgeLabel: {
                fontSize: 10
            },
            data: [{
                name: '主机0',
                x: 300,
                y: 300
            }, {
                name: '主机1',
                x: 800,
                y: 300
            },{
                name: '主机2',
                x: 550,
                y: 0
            },{
                name: '路由3',
                x: 550,
                y: 100
            }, {
                name: '路由1',
                x: 550,
                y: 300,
            },{
                name:'路由0',
                x:375,
                y:300,
            },{
                name:'路由2',
                x:725,
                y:300,
            }
            ],
            // links: [],
            links: [
                {
                source: '主机0',
                target: '路由0',
                lineStyle: {
                color : "#FFF",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },

            }, {
                source: '主机1',
                target: '路由2',
            lineStyle: {
                color : "#FFF",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },
            }, {
               source: '主机2',
                target: '路由3',
            lineStyle: {
                color : "#FFF",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },
            }, {
                source: '路由0',
                target: '路由1',
                lineStyle: {
                    color :"#FFF",
                    curveness: 0,
                    opacity: 0.9,
                    width: 2,
                }
            }, {
                source: '路由1',
                target: '路由2',
                lineStyle: {
                    color :"#FFF",
                    curveness: 0,
                    opacity: 0.9,
                    width: 2,
                }
            },{
                source: '路由1',
                target: '路由3',
                lineStyle: {
                    color :"#FFF",
                    curveness: 0,
                    opacity: 0.9,
                    width: 2,
                }
            },{
                source: '路由0',
                target: '路由3',
                lineStyle: {
                    color :"#FFF",
                    curveness: 0,
                    opacity: 0.9,
                    width: 2,
                }
            },{
                source: '路由3',
                target: '路由2',
                lineStyle: {
                    color :"#FFF",
                    curveness: 0,
                    opacity: 0.9,
                    width: 2,
                }
            }
            ],

        }
    ]


};

option && myChart.setOption(option,true);
};

//OD2拓扑
function c2 (){
  var myChart = echarts.init(document.querySelector(".op2 .chart"));
  var option;

  option = {
    title: {
        text: 'OD2拓扑',
        left: 'center',
        color: '#FFFFFF',
        textStyle: {
          color : '#FFF'
        }
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 30,
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
                x: 300,
                y: 300
            }, {
                name: '主机1',
                x: 800,
                y: 300
            },{
                name: '主机2',
                x: 550,
                y: 0
            },{
                name: '路由3',
                x: 550,
                y: 100
            }, {
                name: '路由1',
                x: 550,
                y: 300,
            },{
                name:'路由0',
                x:375,
                y:300,
            },{
                name:'路由2',
                x:725,
                y:300,
            }
            ],
            // links: [],
            links: [
                {
                source: '主机0',
                target: '路由0',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },
            }, {
                source: '主机1',
                target: '路由2',
                label: {
                    formatter:"-->",
                    show: true
                },
            lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },
            }, {
               source: '主机2',
                target: '路由3',
            lineStyle: {
                color : "#FFF",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },
            }, {
                source: '路由0',
                target: '路由1',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                    color :"red",
                    curveness: 0,
                    opacity: 0.9,
                    width: 2,
                }
            }, {
                source: '路由1',
                target: '路由2',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                    color :"red",
                    curveness: 0,
                    opacity: 0.9,
                    width: 2,
                }
            },{
                source: '路由1',
                target: '路由3',
                lineStyle: {
                    color :"#FFF",
                    curveness: 0,
                    opacity: 0.9,
                    width: 2,
                }
            },{
                source: '路由0',
                target: '路由3',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                    color :"yellow",
                    curveness: 0,
                    opacity: 0.9,
                    width: 2,
                }
            },{
                source: '路由3',
                target: '路由2',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                    color :"yellow",
                    curveness: 0,
                    opacity: 0.9,
                    width: 2,
                }
            }
            ],

        }
    ]


};
  
  option && myChart.setOption(option,true);
};

//OD3拓扑
function c3 (){
  var myChart = echarts.init(document.querySelector(".op3 .chart"));
  var option;

  option = {
    title: {
        text: 'OD3拓扑',
        left: 'center',
        color: '#FFFFFF',
        textStyle: {
          color : '#FFF'
        }
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 30,
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
                x: 300,
                y: 300
            }, {
                name: '主机1',
                x: 800,
                y: 300
            },{
                name: '主机2',
                x: 550,
                y: 0
            },{
                name: '路由3',
                x: 550,
                y: 100
            }, {
                name: '路由1',
                x: 550,
                y: 300,
            },{
                name:'路由0',
                x:375,
                y:300,
            },{
                name:'路由2',
                x:725,
                y:300,
            }
            ],
            // links: [],
            links: [
                {
                source: '主机0',
                target: '路由0',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },
            }, {
                source: '主机1',
                target: '路由2',
            lineStyle: {
                color : "#FFF",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },
            }, {
               source: '主机2',
                target: '路由3',
            label: {
                    formatter:"<--",
                    show: true
                },
            lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },
            }, {
                source: '路由0',
                target: '路由1',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                    color :"red",
                    curveness: 0,
                    opacity: 0.9,
                    width: 2,
                }
            }, {
                source: '路由1',
                target: '路由2',
                lineStyle: {
                    color :"#FFF",
                    curveness: 0,
                    opacity: 0.9,
                    width: 2,
                }
            },{
                source: '路由1',
                target: '路由3',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                    color :"red",
                    curveness: 0,
                    opacity: 0.9,
                    width: 2,
                }
            },{
                source: '路由0',
                target: '路由3',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                    color :"yellow",
                    curveness: 0,
                    opacity: 0.9,
                    width: 2,
                }
            },{
                source: '路由3',
                target: '路由2',
                lineStyle: {
                    color :"#FFF",
                    curveness: 0,
                    opacity: 0.9,
                    width: 2,
                }
            }
            ],

        }
    ]


};
  
  option && myChart.setOption(option,true);
};

//OD4拓扑
function c4 (){
  var myChart = echarts.init(document.querySelector(".op4 .chart"));
  var option;

  option = {
    title: {
        text: 'OD4拓扑',
        left: 'center',
        color: '#FFFFFF',
        textStyle: {
          color : '#FFF'
        }
    },
    tooltip: {},
    animationDurationUpdate: 1500,
    animationEasingUpdate: 'quinticInOut',
    series: [
        {
            type: 'graph',
            layout: 'none',
            symbolSize: 30,
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
                x: 300,
                y: 300
            }, {
                name: '主机1',
                x: 800,
                y: 300
            },{
                name: '主机2',
                x: 550,
                y: 0
            },{
                name: '路由3',
                x: 550,
                y: 100
            }, {
                name: '路由1',
                x: 550,
                y: 300,
            },{
                name:'路由0',
                x:375,
                y:300,
            },{
                name:'路由2',
                x:725,
                y:300,
            }
            ],
            // links: [],
            links: [
                {
                source: '主机0',
                target: '路由0',
                lineStyle: {
                color : "#FFF",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },

            }, {
                source: '主机1',
                target: '路由2',
                label: {
                    formatter:"-->",
                    show: true
                },
            lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },
            }, {
               source: '主机2',
                target: '路由3',
            label: {
                formatter:"-->",
                show: true
            },
            lineStyle: {
                color : "red",
                opacity: 0.9,
                width: 2,
                curveness: 0
            },
            }, {
                source: '路由0',
                target: '路由1',
                lineStyle: {
                    color :"#FFF",
                    curveness: 0,
                    opacity: 0.9,
                    width: 2,
                }
            }, {
                source: '路由1',
                target: '路由2',
            label: {
                    formatter:"-->",
                    show: true
                },                
                lineStyle: {
                    color :"red",
                    curveness: 0,
                    opacity: 0.9,
                    width: 2,
                }
            },{
                source: '路由1',
                target: '路由3',
            label: {
                    formatter:"<--",
                    show: true
                },
                lineStyle: {
                    color :"red",
                    curveness: 0,
                    opacity: 0.9,
                    width: 2,
                }
            },{
                source: '路由0',
                target: '路由3',
                lineStyle: {
                    color :"#FFF",
                    curveness: 0,
                    opacity: 0.9,
                    width: 2,
                }
            },{
                source: '路由3',
                target: '路由2',
                label: {
                    formatter:"-->",
                    show: true
                },
                lineStyle: {
                    color :"yellow",
                    curveness: 0,
                    opacity: 0.9,
                    width: 2,
                }
            }
            ],

        }
    ]


};
  
  option && myChart.setOption(option,true);

};

//时延
function shiyan (){
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
              color : '#FFF'
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
          top:"10%",//与上方的距离 可百分比% 可像素px
          data: ['OD1时延', 'OD2时延','OD3时延'],
          textStyle :{
              color:'#FFF'
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
              axisLabel : {
                  textStyle : {
                      color :'#FFF'
                  }
              }
          }
      ],
      yAxis: [
          {
              type: 'value',
              axisLabel : {
                  textStyle : {
                      color :'#FFF'
                  }
              }
          }
      ],
      series: [
          {
              name: 'OD1时延',
              type: 'bar',
              color :'red',
              emphasis: {
                  focus: 'series'
              },
              data: [20, 21.5, 22, 20, 20.5]
          },
          {
              name: 'OD2时延',
              type: 'bar',
              color:'skyblue',
              emphasis: {
                  focus: 'series'
              },
              data: [22, 21.5, 23, 25, 21.5]
          },
          {
              name: 'OD3时延',
              type: 'bar',
              color:'yellow',
              emphasis: {
                  focus: 'series'
              },
              data: [19, 21, 18, 16, 15]
          },
      ]
  };
  
    
  
    
    myChart1.setOption(option,true);
    myChart2.setOption(option,true);
    myChart3.setOption(option,true);
    myChart4.setOption(option,true);
  
  };