$(function () {
  // 创建图表
  // 折线图
  init_ndpbChart();
  init_pklChart();

  // 3D 环形图
  init_cscbChart();
  init_sqythChart();
  init_bclxChart();
  init_pxscChart();

  // 雷达图
  init_kczyChart();

  // 仪表图
  init_ksChart();
  init_kcChart();
  init_szChart();

  // 柱形图
  init_xyzbChart();
  init_kbjhChart();

  // 饼图
  init_sexChart();
  init_ageChart();
});

// 年度排班
function init_ndpbChart() {
  //  sectionLeft 左边大区域
  //	blockLeft1
  // 基于准备好的dom，初始化echarts实例
  let ndpbChart = echarts.init(document.getElementById("ndpbChart"));
  // 指定图表的配置项和数据
  let option = {
    // backgroundColor: "#0f2d4f",
    backgroundColor: "rgba(0,0,0,0)",
    // 左上角标题
    // title: {
    //     text: '年度排班情况',
    //     textStyle: {
    //         fontWeight: 'normal',
    //         fontSize: 16,
    //         color: '#dfe3e7'
    //     },
    //     // 位置信息
    //     left: '6%',
    //     top: '4%'
    // },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#dfe3e7",
        },
      },
    },
    legend: {
      icon: "rect",
      itemWidth: 14,
      itemHeight: 14,
      itemGap: 13,
      data: ["主体班", "非主体班"],
      right: "4%",
      textStyle: {
        fontSize: 12,
        color: "#dfe3e7",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false, // 坐标轴两边留白策略
        axisPointer: {
          show: true,
        },
        // 坐标轴刻度
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: "#dfe3e7",
          },
        },
        data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      },
      {
        axisPointer: {
          show: false,
        },
        // 坐标轴轴线
        axisLine: {
          lineStyle: {
            color: "rgba(0,0,0,0)",
          },
        },
        // 坐标轴刻度
        axisTick: {
          show: false,
        },

        // position: 'bottom',
        // offset: 20,
        // data: ['', '', '', '', '', '', '', '', '', '', {
        //     value: '周六',
        //     textStyle: {
        //         align: 'left'
        //     }
        // }, '周日']
      },
    ],
    yAxis: [
      {
        type: "value",
        position: "left",
        // name: '单位（%）',
        // 坐标轴刻度
        axisTick: {
          show: false,
        },
        // 坐标轴轴线
        axisLine: {
          show: false,
          lineStyle: {
            color: "#dfe3e7",
          },
        },
        // 坐标轴标签
        axisLabel: {
          margin: 10,
          formatter: "{value}",
          textStyle: {
            fontSize: 14,
          },
        },
        // 分割线
        splitLine: {
          lineStyle: {
            color: "#1b3a5b",
            width: 12,
          },
        },
      },
    ],
    // 数据线数据
    series: [
      {
        name: "主体班",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        legendHoverLink: true, // 鼠标悬浮图例高亮
        lineStyle: {
          normal: {
            width: 3,
          },
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(137, 189, 27, 0.3)",
                },
                {
                  offset: 0,
                  color: "rgba(137, 189, 27, 0)",
                },
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)",
            shadowBlur: 0,
          },
        },
        itemStyle: {
          normal: {
            color: "#fcab23",
            borderColor: "rgba(137,189,2,0.27)",
            borderWidth: 12,
          },
        },
        data: [0, 18, 25, 35, 25, 22, 23, 40, 30, 35, 40, 49],
        markPoint: {
          data: [
            {
              name: "坐标1",
              xAxis: "7",
              yAxis: "23",
            },
          ],
          symbol: "circle", // 标注点形状
          symbolSize: 10, // 标注图形的大小
          // 标记点样式
          itemStyle: {
            normal: {
              label: {
                show: false, //开启显示
                position: "top", //在上方显示
                textStyle: {
                  //数值样式
                  color: "black",
                  fontSize: 16,
                },
              },
            },
          },
        },
      },
      {
        name: "非主体班",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false, // 显示线上的点
        lineStyle: {
          normal: {
            width: 3,
          },
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 136, 212, 0.3)",
                },
                {
                  offset: 0,
                  color: "rgba(0, 136, 212, 0)",
                },
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)",
            shadowBlur: 10,
          },
        },
        // 线条样式
        itemStyle: {
          normal: {
            color: "#62d4ff",
            borderColor: "rgba(0,136,212,0.2)",
            borderWidth: 12,
          },
        },
        data: [0, 12, 8, 20, 28, 18, 17, 25, 41, 36, 20, 28],
        markPoint: {
          data: [
            {
              name: "标记点2",
              xAxis: "7",
              yAxis: "17",
            },
          ],
          symbol: "emptyCircle", // 标注点形状
          symbolSize: 10, // 标注图形的大小
          // 标记点样式
          itemStyle: {
            normal: {
              label: {
                show: false, //开启显示
                position: "top", //在上方显示
                textStyle: {
                  //数值样式
                  color: "black",
                  fontSize: 16,
                },
              },
              borderColor: "#62d4ff",
              borderWidth: 2,
            },
          },
        },
      },
    ],
  };
  // 使用刚指定的配置项和数据显示图表。
  ndpbChart.setOption(option);
}

// 处事承办
function init_cscbChart() {
  let cscbChart = Highcharts.chart("cscbChart", {
    chart: {
      type: "pie",
      options3d: {
        enabled: true, // 是否使用3D效果
        alpha: 55, // 沿y轴向内的倾斜角度
        // beta: 10,  // 图表视图旋转角度(表现为左右歪斜)
      },
      // backgroundColor: "#0f2d4f", // 整个图表的背景
      backgroundColor: "none", // 整个图表的背景
    },
    // 总标题
    title: {
      text: "",
      margin: 0,
    },
    // 子标题
    subtitle: {
      text: "",
      margin: 0,
    },
    // 版权标签
    credits: {
      enabled: false, // 隐藏右下角水印
    },
    // 鼠标悬浮在饼上显示数据
    tooltip: {
      // pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      backgroundColor: "#d7ddee",
      borderColor: "rgba(200,90, 90, .3)",
      useHTML: true, // 是否使用html来渲染提示信息
      formatter: function () {
        return (
          "<b>" +
          this.key +
          "</b>" +
          "<br/>" +
          '<span style="margin: auto;">' +
          this.y +
          "</span> "
        );
      },
      // pointFormat: "<b>{series.data[1]}</b>"
    },
    // 图例
    legend: {
      // useHTML: true, // 使用html格式来自定义格式
      // // 自定义样式
      // labelFormatter: function() {
      // 	return `<div style='fontSize: 14px; width: 112px;whiteSpace: nowrap; overflow: hidden; textOverflow: ellipsis'>${this.name}</div>`
      // },
      // itemDistance: 100, // 定义legendItem间距
      align: "right", // 水平方向放置
      verticalAlign: "top", //垂直方向位置
      layout: "vertical", // 垂直布局
      x: 0, //距离x轴的距离
      y: 100, //距离Y轴的距离
      squareSymbol: true, // 图例标记的形状是否为正方形
      // backgroundColor: "#bfa", // 图例背景图片
      // borderRadius: 10, // 图例背景边框圆角
      // maxHeight: 200, // 最大高度
      // lineHeight: 200, // 行高
    },
    //  饼图配置
    plotOptions: {
      series: {
        // general options for all series
      },
      pie: {
        allowPointSelect: true, // 点击标签时允许序列的点被选择
        // cursor: "pointer",
        innerSize: 150, // innerSize内部成环
        depth: 50, // 饼图的厚度
        size: 180, // 饼图的直径, 相对于绘图区。可以是百分比或者是像素值
        colors: ["#0499c6", "#84d0d9", "#a6bbc5", "#02e29c"], // 饼图分块的颜色
        showInLegend: false, //  是否显示部分序列或全部序列的类型在图例中
        startAngle: 20, // 饼图块开始的角度，0是上边，90是右边
        center: ["30%", "50%"], // 饼图的中心相对于绘图区。可以是百分比或者是像素值
        slicedOffset: 0, // 当饼图的一块移出饼图中心时，应该移动多少像素
        // 饼图上的数据标识
        dataLabels: {
          useHTML: true, // 是否使用html去渲染图例
          enabled: false, // 是否显示饼图的线形tip, 也就是饼两边的连线
          crop: true, // 是否隐藏落在绘图区域外的数据标签
          format:
            '<div class="dataLabels"><b>{point.name}</b>: {point.percentage:.1f} %</div>',
          style: {
            color: "rgba(26, 178, 255, 1)",
          },
          // 下面这些都适用于连线的标签，但不适用于饼上的数据标签
          backgroundColor: "#eee", // 数据标签的背景色
          borderColor: "#333", // 数据标签的边框色
          distance: 30, // 数据标签到饼图边缘的距离
        },
      },
      // 饼图的事件触发
      events: {
        // 点击事件
        click: () => {},
      },
    },
    // 数据列是一组数据集合
    series: [
      {
        name: "处事承办",
        data: [
          ["教务一处", 199],
          ["教务二处", 199],
          ["教务三处", 199],
          ["培训中心", 199],
        ],
      },
    ],
  });
}

// 市区一体化
function init_sqythChart() {
  let sqythChart = Highcharts.chart("sqythChart", {
    chart: {
      type: "pie",
      options3d: {
        enabled: true, // 是否使用3D效果
        alpha: 55, // 沿y轴向内的倾斜角度
        // beta: 10,  // 图表视图旋转角度(表现为左右歪斜)
      },
      // backgroundColor: "#0f2d4f", // 整个图表的背景
      backgroundColor: "none", // 整个图表的背景
    },
    // 总标题
    title: {
      text: "",
      margin: 0,
    },
    // 子标题
    subtitle: {
      text: "",
      margin: 0,
    },
    // 版权标签
    credits: {
      enabled: false, // 隐藏右下角水印
    },
    // 鼠标悬浮在饼上显示数据
    tooltip: {
      // pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      backgroundColor: "#d7ddee",
      borderColor: "rgba(200,90, 90, .3)",
      useHTML: true, // 是否使用html来渲染提示信息
      formatter: function () {
        return (
          "<b>" +
          this.key +
          "</b>" +
          "<br/>" +
          '<span style="margin: auto;">' +
          this.y +
          "</span> "
        );
      },
      // pointFormat: "<b>{series.data[1]}</b>"
    },
    // 图例
    legend: {
      // useHTML: true, // 使用html格式来自定义格式
      // // 自定义样式
      // labelFormatter: function() {
      // 	return `<div style='fontSize: 14px; width: 112px;whiteSpace: nowrap; overflow: hidden; textOverflow: ellipsis'>${this.name}</div>`
      // },
      // itemDistance: 100, // 定义legendItem间距
      align: "right", // 水平方向放置
      verticalAlign: "top", //垂直方向位置
      layout: "vertical", // 垂直布局
      x: 0, //距离x轴的距离
      y: 100, //距离Y轴的距离
      squareSymbol: true, // 图例标记的形状是否为正方形
      // backgroundColor: "#bfa", // 图例背景图片
      // borderRadius: 10, // 图例背景边框圆角
      // maxHeight: 200, // 最大高度
      // lineHeight: 200, // 行高
    },
    //  饼图配置
    plotOptions: {
      series: {
        // general options for all series
      },
      pie: {
        allowPointSelect: true, // 点击标签时允许序列的点被选择
        // cursor: "pointer",
        innerSize: 150, // innerSize内部成环
        depth: 50, // 饼图的厚度
        size: 180, // 饼图的直径, 相对于绘图区。可以是百分比或者是像素值
        colors: ["#0499c6", "#84d0d9", "#a6bbc5", "#02e29c"], // 饼图分块的颜色
        showInLegend: false, //  是否显示部分序列或全部序列的类型在图例中
        startAngle: 20, // 饼图块开始的角度，0是上边，90是右边
        center: ["30%", "50%"], // 饼图的中心相对于绘图区。可以是百分比或者是像素值
        slicedOffset: 0, // 当饼图的一块移出饼图中心时，应该移动多少像素
        // 饼图上的数据标识
        dataLabels: {
          useHTML: true, // 是否使用html去渲染图例
          enabled: false, // 是否显示饼图的线形tip, 也就是饼两边的连线
          crop: true, // 是否隐藏落在绘图区域外的数据标签
          format:
            '<div class="dataLabels"><b>{point.name}</b>: {point.percentage:.1f} %</div>',
          style: {
            color: "rgba(26, 178, 255, 1)",
          },
          // 下面这些都适用于连线的标签，但不适用于饼上的数据标签
          backgroundColor: "#eee", // 数据标签的背景色
          borderColor: "#333", // 数据标签的边框色
          distance: 30, // 数据标签到饼图边缘的距离
        },
      },
      // 饼图的事件触发
      events: {
        // 点击事件
        click: () => {},
      },
    },
    // 数据列是一组数据集合
    series: [
      {
        name: "市区一体化",
        data: [
          ["浙江区", 199],
          ["黄岩区", 199],
          ["路桥区", 199],
          ["台州湾新区", 199],
        ],
      },
    ],
  });
}

// 班次类型
function init_bclxChart() {
  let bclxChart = Highcharts.chart("bclxChart", {
    chart: {
      type: "pie",
      options3d: {
        enabled: true, // 是否使用3D效果
        alpha: 55, // 沿y轴向内的倾斜角度
        // beta: 10,  // 图表视图旋转角度(表现为左右歪斜)
      },
      // backgroundColor: "#0f2d4f", // 整个图表的背景
      backgroundColor: "none", // 整个图表的背景
    },
    // 总标题
    title: {
      text: "",
      margin: 0,
    },
    // 子标题
    subtitle: {
      text: "",
      margin: 0,
    },
    // 版权标签
    credits: {
      enabled: false, // 隐藏右下角水印
    },
    // 鼠标悬浮在饼上显示数据
    tooltip: {
      // pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      backgroundColor: "#d7ddee",
      borderColor: "rgba(200,90, 90, .3)",
      useHTML: true, // 是否使用html来渲染提示信息
      formatter: function () {
        return (
          "<b>" +
          this.key +
          "</b>" +
          "<br/>" +
          '<span style="margin: auto;">' +
          this.y +
          "</span> "
        );
      },
      // pointFormat: "<b>{series.data[1]}</b>"
    },
    // 图例
    legend: {
      // useHTML: true, // 使用html格式来自定义格式
      // // 自定义样式
      // labelFormatter: function() {
      // 	return `<div style='fontSize: 14px; width: 112px;whiteSpace: nowrap; overflow: hidden; textOverflow: ellipsis'>${this.name}</div>`
      // },
      // itemDistance: 100, // 定义legendItem间距
      align: "right", // 水平方向放置
      verticalAlign: "top", //垂直方向位置
      layout: "vertical", // 垂直布局
      x: 0, //距离x轴的距离
      y: 100, //距离Y轴的距离
      squareSymbol: true, // 图例标记的形状是否为正方形
      // backgroundColor: "#bfa", // 图例背景图片
      // borderRadius: 10, // 图例背景边框圆角
      // maxHeight: 200, // 最大高度
      // lineHeight: 200, // 行高
    },
    //  饼图配置
    plotOptions: {
      series: {
        // general options for all series
      },
      pie: {
        allowPointSelect: true, // 点击标签时允许序列的点被选择
        // cursor: "pointer",
        innerSize: 150, // innerSize内部成环
        depth: 50, // 饼图的厚度
        size: 180, // 饼图的直径, 相对于绘图区。可以是百分比或者是像素值
        colors: ["#0499c6", "#84d0d9", "#a6bbc5", "#02e29c"], // 饼图分块的颜色
        showInLegend: false, //  是否显示部分序列或全部序列的类型在图例中
        startAngle: 20, // 饼图块开始的角度，0是上边，90是右边
        center: ["30%", "50%"], // 饼图的中心相对于绘图区。可以是百分比或者是像素值
        slicedOffset: 0, // 当饼图的一块移出饼图中心时，应该移动多少像素
        // 饼图上的数据标识
        dataLabels: {
          useHTML: true, // 是否使用html去渲染图例
          enabled: false, // 是否显示饼图的线形tip, 也就是饼两边的连线
          crop: true, // 是否隐藏落在绘图区域外的数据标签
          format:
            '<div class="dataLabels"><b>{point.name}</b>: {point.percentage:.1f} %</div>',
          style: {
            color: "rgba(26, 178, 255, 1)",
          },
          // 下面这些都适用于连线的标签，但不适用于饼上的数据标签
          backgroundColor: "#eee", // 数据标签的背景色
          borderColor: "#333", // 数据标签的边框色
          distance: 30, // 数据标签到饼图边缘的距离
        },
      },
      // 饼图的事件触发
      events: {
        // 点击事件
        click: () => {},
      },
    },
    // 数据列是一组数据集合
    series: [
      {
        name: "班次类型 ",
        data: [
          ["县处级", 199],
          ["乡科级", 199],
          ["其他主体", 199],
          ["其他非主体", 199],
          ["社会培训", 199],
        ],
      },
    ],
  });
}

// 培训时长
function init_pxscChart() {
  let pxscChart = Highcharts.chart("pxscChart", {
    chart: {
      type: "pie",
      options3d: {
        enabled: true, // 是否使用3D效果
        alpha: 55, // 沿y轴向内的倾斜角度
        // beta: 10,  // 图表视图旋转角度(表现为左右歪斜)
      },
      // backgroundColor: "#0f2d4f", // 整个图表的背景
      backgroundColor: "none", // 整个图表的背景
    },
    // 总标题
    title: {
      text: "",
      margin: 0,
    },
    // 子标题
    subtitle: {
      text: "",
      margin: 0,
    },
    // 版权标签
    credits: {
      enabled: false, // 隐藏右下角水印
    },
    // 鼠标悬浮在饼上显示数据
    tooltip: {
      // pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
      backgroundColor: "#d7ddee",
      borderColor: "rgba(200,90, 90, .3)",
      useHTML: true, // 是否使用html来渲染提示信息
      formatter: function () {
        return (
          "<b>" +
          this.key +
          "</b>" +
          "<br/>" +
          '<span style="margin: auto;">' +
          this.y +
          "</span> "
        );
      },
      // pointFormat: "<b>{series.data[1]}</b>"
    },
    // 图例
    legend: {
      // useHTML: true, // 使用html格式来自定义格式
      // // 自定义样式
      // labelFormatter: function() {
      // 	return `<div style='fontSize: 14px; width: 112px;whiteSpace: nowrap; overflow: hidden; textOverflow: ellipsis'>${this.name}</div>`
      // },
      // itemDistance: 100, // 定义legendItem间距
      align: "right", // 水平方向放置
      verticalAlign: "top", //垂直方向位置
      layout: "vertical", // 垂直布局
      x: 0, //距离x轴的距离
      y: 100, //距离Y轴的距离
      squareSymbol: true, // 图例标记的形状是否为正方形
      // backgroundColor: "#bfa", // 图例背景图片
      // borderRadius: 10, // 图例背景边框圆角
      // maxHeight: 200, // 最大高度
      // lineHeight: 200, // 行高
    },
    //  饼图配置
    plotOptions: {
      series: {
        // general options for all series
      },
      pie: {
        allowPointSelect: true, // 点击标签时允许序列的点被选择
        // cursor: "pointer",
        innerSize: 150, // innerSize内部成环
        depth: 50, // 饼图的厚度
        size: 180, // 饼图的直径, 相对于绘图区。可以是百分比或者是像素值
        colors: ["#0499c6", "#84d0d9", "#a6bbc5", "#02e29c"], // 饼图分块的颜色
        showInLegend: false, //  是否显示部分序列或全部序列的类型在图例中
        startAngle: 20, // 饼图块开始的角度，0是上边，90是右边
        center: ["30%", "50%"], // 饼图的中心相对于绘图区。可以是百分比或者是像素值
        slicedOffset: 0, // 当饼图的一块移出饼图中心时，应该移动多少像素
        // 饼图上的数据标识
        dataLabels: {
          useHTML: true, // 是否使用html去渲染图例
          enabled: false, // 是否显示饼图的线形tip, 也就是饼两边的连线
          crop: true, // 是否隐藏落在绘图区域外的数据标签
          format:
            '<div class="dataLabels"><b>{point.name}</b>: {point.percentage:.1f} %</div>',
          style: {
            color: "rgba(26, 178, 255, 1)",
          },
          // 下面这些都适用于连线的标签，但不适用于饼上的数据标签
          backgroundColor: "#eee", // 数据标签的背景色
          borderColor: "#333", // 数据标签的边框色
          distance: 30, // 数据标签到饼图边缘的距离
        },
      },
      // 饼图的事件触发
      events: {
        // 点击事件
        click: () => {},
      },
    },
    // 数据列是一组数据集合
    series: [
      {
        name: "培训时长",
        data: [
          ["短期班", 199],
          ["中期班", 199],
          ["长期班", 199],
          ["轮训班", 199],
        ],
      },
    ],
  });
}

// 课程库资源分布 (雷达图)
function init_kczyChart() {
  let kczyChart = echarts.init(document.getElementById("kczyChart"));
  let color = ["#e9df3d", "#f79c19", "#21fcd6", "#08c8ff", "#df4131"];
  let data = [
    {
      name: "专题课程",
      value: 620,
    },
    {
      name: "案例教学",
      value: 800,
    },
    {
      name: "现场教学",
      value: 120,
    },
    {
      name: "实训教学",
      value: 400,
    },
    {
      name: "专题讲座",
      value: 600,
    },
  ];

  // let max = data[0].value; // 雷达数值的界限
  let max = 900;

  // 这里遍历是为了确保雷达图超过预设界限
  data.forEach(function (d) {
    max = d.value > max ? d.value : max;
  });

  // todo
  // 雷达图上覆盖渲染的数据
  let renderData = [
    {
      value: [],
      name: "课程库资源分布",
      // symbol: 'none',
      symbol: "circle",
      lineStyle: {
        normal: {
          color: "#ecc03e",
          width: 2,
        },
      },
      areaStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(
            0,
            0,
            1,
            0,
            [
              {
                offset: 0,
                color: "#FFD018",
              },
              {
                offset: 1,
                color: "#9f8124",
              },
            ],
            false
          ),
        },
      },
    },
  ];

  data.forEach(function (d, i) {
    let value = ["", "", "", "", ""]; // 5个维度的数值
    (value[i] = max), (renderData[0].value[i] = d.value);
    renderData.push({
      value: value,
      // symbol: 'circle',
      symbol: "none",
      symbolSize: 12,
      lineStyle: {
        normal: {
          color: "transparent",
        },
      },
      itemStyle: {
        normal: {
          color: color[i],
        },
      },
    });
  });

  // 雷达图的指示器, 雷达器多维度变量
  let indicator = [];

  // 复用data中的数据
  data.forEach(function (d) {
    indicator.push({
      name: d.name,
      max: max,
      color: "#fff",
      axisLabel: {
        show: false, // 是否显示刻度标签
      },
    });
  });

  // 单独去显示这一条刻度线
  indicator[0].axisLabel.show = true;

  option = {
    // backgroundColor: "#01193d",
    backgroundColor: "rgba(0,0,0,0)",
    // tooltip: {
    //     show: true,
    //     trigger: "item"
    // },
    tooltip: {
      formatter: function (params) {
        var results = "";
        for (var i = 0; i < params.data.value.length; i++) {
          results += indicator[i].name + "：" + params.value[i] + "<br>";
        }
        results = "课程库资源分布<br>" + results;
        return results;
      },
    },
    // 雷达图主体
    radar: {
      center: ["50%", "50%"],
      radius: "70%",
      startAngle: 90, // 起始角度
      splitNumber: 3, // 雷达图的环数
      // shape: "circle", // 雷达图形状
      name: {
        // (圆外的标签)雷达图每个指示器名称的配置项。
        // formatter: "{value}",
        textStyle: {
          fontSize: 20,
          color: "#fff",
          fontWeight: 400,
        },
      },
      // 雷达图背景区域
      splitArea: {
        areaStyle: {
          color: "transparent",
        },
      },
      // 坐标轴刻度相关配置
      axisLabel: {
        show: true, // 是否显示刻度标签
        interval: "auto", // 坐标轴刻度标签的显示间隔, 在类目轴中有效
        inside: false, // 坐标轴刻度是否朝内, 默认朝外
        length: 10, // 坐标轴刻度的长度

        color: "#7b8b9e",
        fontSize: 16,
        fontStyle: "normal",
        fontWeight: "400",
      },
      // 坐标轴线
      axisLine: {
        show: true,
        lineStyle: {
          color: "rgba(255, 255, 255, 0.5)",
        },
      },
      // 坐标刻度线
      axisTick: {
        show: true,
        alignWithLabel: false, // 类目轴中在 boundaryGap 为 true 的时候有效，可以保证刻度线和标签对齐
        interval: "auto", //坐标轴刻度的显示间隔，在类目轴中有效。默认会采用标签不重叠的策略间隔显示标签。可以设置成 0 强制显示所有标签。如果设置为 1，表示『隔一个标签显示一个标签』，如果值为 2，表示隔两个标签显示一个标签，以此类推
        inside: false, //坐标轴刻度是否朝内，默认朝外。
        length: 5, //坐标轴刻度的长度。
      },
      // 分隔线
      splitLine: {
        show: true,
        lineStyle: {
          color: "rgba(255, 255, 255, 0.5)",
        },
      },
      indicator: indicator,
    },
    series: [
      {
        type: "radar",
        data: renderData,
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  kczyChart.setOption(option);
}

// 评课率 / 优秀率
function init_pklChart() {
  //  sectionLeft 左边大区域
  //	blockLeft1
  // 基于准备好的dom，初始化echarts实例
  let pklChart = echarts.init(document.getElementById("pklChart"));
  // 指定图表的配置项和数据
  let option = {
    // backgroundColor: "#0f2d4f",
    backgroundColor: "rgba(0,0,0,0)",
    // 左上角标题
    // title: {
    //     text: '年度排班情况',
    //     textStyle: {
    //         fontWeight: 'normal',
    //         fontSize: 16,
    //         color: '#dfe3e7'
    //     },
    //     // 位置信息
    //     left: '6%',
    //     top: '4%'
    // },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        lineStyle: {
          color: "#dfe3e7",
        },
      },
    },
    legend: {
      icon: "rect",
      itemWidth: 14,
      itemHeight: 14,
      itemGap: 13,
      data: ["评课率", "优秀率"],
      right: "4%",
      textStyle: {
        fontSize: 12,
        color: "#dfe3e7",
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false, // 坐标轴两边留白策略
        axisPointer: {
          show: true,
        },
        // 坐标轴刻度
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: "#dfe3e7",
          },
        },
        data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      },
      {
        axisPointer: {
          show: false,
        },
        // 坐标轴轴线
        axisLine: {
          lineStyle: {
            color: "rgba(0,0,0,0)",
          },
        },
        // 坐标轴刻度
        axisTick: {
          show: false,
        },

        // position: 'bottom',
        // offset: 20,
        // data: ['', '', '', '', '', '', '', '', '', '', {
        //     value: '周六',
        //     textStyle: {
        //         align: 'left'
        //     }
        // }, '周日']
      },
    ],
    yAxis: [
      {
        type: "value",
        position: "left",
        // name: '单位（%）',
        // 坐标轴刻度
        axisTick: {
          show: false,
        },
        // 坐标轴轴线
        axisLine: {
          show: false,
          lineStyle: {
            color: "#dfe3e7",
          },
        },
        // 坐标轴标签
        axisLabel: {
          margin: 10,
          formatter: "{value}",
          textStyle: {
            fontSize: 14,
          },
        },
        // 分割线
        splitLine: {
          lineStyle: {
            color: "#1b3a5b",
            width: 12,
          },
        },
      },
    ],
    // 数据线数据
    series: [
      {
        name: "评课率",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false,
        legendHoverLink: true, // 鼠标悬浮图例高亮
        lineStyle: {
          normal: {
            width: 3,
          },
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(137, 189, 27, 0.3)",
                },
                {
                  offset: 0,
                  color: "rgba(137, 189, 27, 0)",
                },
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)",
            shadowBlur: 0,
          },
        },
        itemStyle: {
          normal: {
            color: "#fc8123",
            borderColor: "#fc8123",
            borderWidth: 12,
          },
        },
        data: [0, 18, 25, 35, 25, 22, 23, 40, 30, 35, 40, 49],
        markPoint: {
          data: [
            {
              name: "坐标1",
              xAxis: "7",
              yAxis: "23",
            },
          ],
          symbol: "circle", // 标注点形状
          symbolSize: 10, // 标注图形的大小
          // 标记点样式
          itemStyle: {
            normal: {
              label: {
                show: false, //开启显示
                position: "top", //在上方显示
                textStyle: {
                  //数值样式
                  color: "black",
                  fontSize: 16,
                },
              },
            },
          },
        },
      },
      {
        name: "优秀率",
        type: "line",
        smooth: true,
        symbol: "circle",
        symbolSize: 5,
        showSymbol: false, // 显示线上的点
        lineStyle: {
          normal: {
            width: 3,
          },
        },
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
              0,
              0,
              0,
              1,
              [
                {
                  offset: 0,
                  color: "rgba(0, 136, 212, 0.3)",
                },
                {
                  offset: 0,
                  color: "rgba(0, 136, 212, 0)",
                },
              ],
              false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)",
            shadowBlur: 10,
          },
        },
        // 线条样式
        itemStyle: {
          normal: {
            color: "#6c7aff",
            borderColor: "#6c7aff",
            borderWidth: 12,
          },
        },
        data: [0, 12, 8, 20, 28, 18, 17, 25, 41, 36, 20, 28],
        markPoint: {
          data: [
            {
              name: "标记点2",
              xAxis: "7",
              yAxis: "17",
            },
          ],
          symbol: "emptyCircle", // 标注点形状
          symbolSize: 10, // 标注图形的大小
          // 标记点样式
          itemStyle: {
            normal: {
              label: {
                show: false, //开启显示
                position: "top", //在上方显示
                textStyle: {
                  //数值样式
                  color: "black",
                  fontSize: 16,
                },
              },
              borderColor: "#62d4ff",
              borderWidth: 2,
            },
          },
        },
      },
    ],
  };
  // 使用刚指定的配置项和数据显示图表。
  pklChart.setOption(option);
}

// 课时、课程、师资
function init_ksChart() {
  let value = "4"; // 这里来设置仪表盘轴线的维度
  // 基于准备好的dom，初始化echarts实例
  let ksChart = echarts.init(document.getElementById("ksChart"));

  // 设置仪表盘数值
  let getmax = 100; // 打满仪表盘的机值
  let getvalue = 62; // 仪表盘显示的值

  let option = {
    title: [
      {
        text: "课时",
        bottom: "5%",
        x: "center",
        // borderColor: "#1598FF",
        // borderWidth: 1,
        // borderRadius: 56,
        // backgroundColor: "#1598FF",
        padding: [7, 30], // 内边距
        textStyle: {
          fontWeight: 400,
          fontSize: 22,
          color: "#fff",
        },
      },
    ],
    // 角度轴向
    angleAxis: {
      show: false,
      max: (getmax * 360) / 270, //-45度到225度，二者偏移值是270度除360度
      type: "value",
      startAngle: 225, //极坐标初始角度
      splitLine: {
        show: false,
      },
    },
    barMaxWidth: 20, //圆环宽度
    radiusAxis: {
      show: false,
      type: "category",
    },

    //圆环位置和大小
    polar: {
      center: ["50%", "50%"],
      radius: "120%",
    },

    series: [
      // 上层圆环
      {
        type: "bar",
        data: [
          {
            //上层圆环，显示数据
            value: getvalue,
            itemStyle: {
              color: "#888aff",
            },
          },
        ],
        barGap: "-100%", //柱间距离,上下两层圆环重合
        coordinateSystem: "polar",
        roundCap: true, //顶端圆角
        z: 3, //圆环层级，同z-index
      },

      //下层圆环，显示最大值
      {
        type: "bar",
        data: [
          {
            value: getmax,
            itemStyle: {
              color: "#1598FF",
              opacity: 0.2,
              borderWidth: 0,
            },
          },
        ],
        barGap: "-100%",
        coordinateSystem: "polar",
        roundCap: true,
        z: 1,
      },

      //仪表盘
      {
        type: "gauge",
        startAngle: 225, //起始角度，同极坐标
        endAngle: -45, //终止角度，同极坐标
        clockwise: true, // 仪表盘刻度是否是顺时针增长, 默认为true
        // 仪表盘轴线（轮廓线）
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        // 仪表盘刻度线样式（这里是内环）
        axisTick: {
          show: false,
          // show: true, // 是否显示刻度(线),默认 true。
          // splitNumber: 5, // 分隔线之间分割的刻度数,默认 5。
          // length: 8, // 刻度线长。支持相对半径的百分比,默认 8。
          // lineStyle: {
          //   // 刻度线样式。
          //   color: "#eee", //线的颜色,默认 #eee。
          //   opacity: 1, //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
          //   width: 1, //线度,默认 1。
          //   type: "solid", //线的类型,默认 solid。 此外还有 dashed,dotted
          //   shadowBlur: 10, //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
          //   shadowColor: "#fff", //阴影颜色。支持的格式同color。
          // },
        },
        axisLabel: {
          show: false,
        },
        splitLabel: {
          show: false,
        },
        pointer: {
          // 分隔线
          show: false, //是否显示指针
          shadowColor: "auto", //默认透明
          shadowBlur: 5,
          length: "50%",
          width: "2",
        },

        itemStyle: {
          color: "#888aff",
          borderColor: "#888aff",
          borderWidth: 3,
        },

        // 仪表盘中间数值的细节
        detail: {
          formatter: function (params) {
            // return getvalue + "人";  // 这里可以返回带上单位的数值
            return getvalue + "%";
          },
          color: "#FFC42F",
          fontFamily: "PingFangSC-Medium",
          fontSize: 23,
          offsetCenter: [0, 0], // 仪表盘中心数值的位置偏移
        },

        title: {
          show: false,
        },

        data: [
          {
            value: getvalue,
          },
        ],
      },
      {
        name: "外部刻度",
        type: "gauge",
        //  center: ['20%', '50%'],
        radius: "75%",
        min: 0, //最小刻度
        max: 100, //最大刻度
        splitNumber: 4, //刻度数据数量
        startAngle: 225,
        endAngle: -45,

        // 表盘一圈的轴线
        axisLine: {
          show: true,
          // 表盘轴线样式
          lineStyle: {
            width: 1,
            color: [[1, "rgba(0,0,0,0)"]],
          },
        },

        //刻度标签
        axisLabel: {
          show: true,
          color: "#FFFFFF",
          distance: -10, // 外侧文字距离表圈的距离
          // 数据范围代表的显示在外围
          // formatter: function (value) {
          //   if(value === 10) return '优'
          //   else if (value === 50) return '良'
          //   else if (value === 90) return '差'
          //   return ''
          // }
        },

        //刻度线样式
        axisTick: {
          show: true,
          splitNumber: 5, // 分隔线之间的刻度数
          lineStyle: {
            color: "#24d8e9", //用颜色渐变函数不起作用
            opacity: 0.6,
            width: 2,
          },
          length: -3, // 刻度线长度
          distance: 1, // 刻度线内侧向内
        },

        //分隔线样式
        splitLine: {
          show: false,
          length: -20, // 分割线线长, 支持相对半径的百分比
          lineStyle: {
            color: "#C7CBCF", //用颜色渐变函数不起作用
          },
        },
        detail: {
          show: false,
        },
        pointer: {
          show: false,
        },
      },
    ],
  };
  ksChart.setOption(option, true);
}

function init_kcChart() {
  // 基于准备好的dom，初始化echarts实例
  let kcChart = echarts.init(document.getElementById("kcChart"));

  // 设置仪表盘数值
  let getmax = 100; // 打满仪表盘的机值
  let getvalue = 62; // 仪表盘显示的值

  let option = {
    title: [
      {
        text: "课程",
        bottom: "5%",
        x: "center",
        // borderColor: "#1598FF",
        // borderWidth: 1,
        // borderRadius: 56,
        // backgroundColor: "#1598FF",
        padding: [7, 30], // 内边距
        textStyle: {
          fontWeight: 400,
          fontSize: 22,
          color: "#fff",
        },
      },
    ],
    // 角度轴向
    angleAxis: {
      show: false,
      max: (getmax * 360) / 270, //-45度到225度，二者偏移值是270度除360度
      type: "value",
      startAngle: 225, //极坐标初始角度
      splitLine: {
        show: false,
      },
    },
    barMaxWidth: 20, //圆环宽度
    radiusAxis: {
      show: false,
      type: "category",
    },

    //圆环位置和大小
    polar: {
      center: ["50%", "50%"],
      radius: "120%",
    },

    series: [
      // 上层圆环
      {
        type: "bar",
        data: [
          {
            //上层圆环，显示数据
            value: getvalue,
            itemStyle: {
              color: "#888aff",
            },
          },
        ],
        barGap: "-100%", //柱间距离,上下两层圆环重合
        coordinateSystem: "polar",
        roundCap: true, //顶端圆角
        z: 3, //圆环层级，同z-index
      },

      //下层圆环，显示最大值
      {
        type: "bar",
        data: [
          {
            value: getmax,
            itemStyle: {
              color: "#1598FF",
              opacity: 0.2,
              borderWidth: 0,
            },
          },
        ],
        barGap: "-100%",
        coordinateSystem: "polar",
        roundCap: true,
        z: 1,
      },

      //仪表盘
      {
        type: "gauge",
        startAngle: 225, //起始角度，同极坐标
        endAngle: -45, //终止角度，同极坐标
        clockwise: true, // 仪表盘刻度是否是顺时针增长, 默认为true
        // 仪表盘轴线（轮廓线）
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        // 仪表盘刻度线样式（这里是内环）
        axisTick: {
          show: false,
          // show: true, // 是否显示刻度(线),默认 true。
          // splitNumber: 5, // 分隔线之间分割的刻度数,默认 5。
          // length: 8, // 刻度线长。支持相对半径的百分比,默认 8。
          // lineStyle: {
          //   // 刻度线样式。
          //   color: "#eee", //线的颜色,默认 #eee。
          //   opacity: 1, //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
          //   width: 1, //线度,默认 1。
          //   type: "solid", //线的类型,默认 solid。 此外还有 dashed,dotted
          //   shadowBlur: 10, //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
          //   shadowColor: "#fff", //阴影颜色。支持的格式同color。
          // },
        },
        axisLabel: {
          show: false,
        },
        splitLabel: {
          show: false,
        },
        pointer: {
          // 分隔线
          show: false, //是否显示指针
          shadowColor: "auto", //默认透明
          shadowBlur: 5,
          length: "50%",
          width: "2",
        },

        itemStyle: {
          color: "#888aff",
          borderColor: "#888aff",
          borderWidth: 3,
        },

        // 仪表盘中间数值的细节
        detail: {
          formatter: function (params) {
            // return getvalue + "人";  // 这里可以返回带上单位的数值
            return getvalue + "%";
          },
          color: "#FFC42F",
          fontFamily: "PingFangSC-Medium",
          fontSize: 23,
          offsetCenter: [0, 0], // 仪表盘中心数值的位置偏移
        },

        title: {
          show: false,
        },

        data: [
          {
            value: getvalue,
          },
        ],
      },
      {
        name: "外部刻度",
        type: "gauge",
        //  center: ['20%', '50%'],
        radius: "75%",
        min: 0, //最小刻度
        max: 100, //最大刻度
        splitNumber: 4, //刻度数据数量
        startAngle: 225,
        endAngle: -45,

        // 表盘一圈的轴线
        axisLine: {
          show: true,
          // 表盘轴线样式
          lineStyle: {
            width: 1,
            color: [[1, "rgba(0,0,0,0)"]],
          },
        },

        //刻度标签
        axisLabel: {
          show: true,
          color: "#FFFFFF",
          distance: -10, // 外侧文字距离表圈的距离
          // 数据范围代表的显示在外围
          // formatter: function (value) {
          //   if(value === 10) return '优'
          //   else if (value === 50) return '良'
          //   else if (value === 90) return '差'
          //   return ''
          // }
        },

        //刻度线样式
        axisTick: {
          show: true,
          splitNumber: 5, // 分隔线之间的刻度数
          lineStyle: {
            color: "#24d8e9", //用颜色渐变函数不起作用
            opacity: 0.6,
            width: 2,
          },
          length: -3, // 刻度线长度
          distance: 1, // 刻度线内侧向内
        },

        //分隔线样式
        splitLine: {
          show: false,
          length: -20, // 分割线线长, 支持相对半径的百分比
          lineStyle: {
            color: "#C7CBCF", //用颜色渐变函数不起作用
          },
        },
        detail: {
          show: false,
        },
        pointer: {
          show: false,
        },
      },
    ],
  };
  kcChart.setOption(option, true);
}

function init_szChart() {
  let value = "4"; // 这里来设置仪表盘轴线的维度
  // 基于准备好的dom，初始化echarts实例
  let szChart = echarts.init(document.getElementById("szChart"));

  // 设置仪表盘数值
  let getmax = 100; // 打满仪表盘的机值
  let getvalue = 62; // 仪表盘显示的值

  let option = {
    title: [
      {
        text: "师资",
        bottom: "5%",
        x: "center",
        // borderColor: "#1598FF",
        // borderWidth: 1,
        // borderRadius: 56,
        // backgroundColor: "#1598FF",
        padding: [7, 30], // 内边距
        textStyle: {
          fontWeight: 400,
          fontSize: 22,
          color: "#fff",
        },
      },
    ],
    // 角度轴向
    angleAxis: {
      show: false,
      max: (getmax * 360) / 270, //-45度到225度，二者偏移值是270度除360度
      type: "value",
      startAngle: 225, //极坐标初始角度
      splitLine: {
        show: false,
      },
    },
    barMaxWidth: 20, //圆环宽度
    radiusAxis: {
      show: false,
      type: "category",
    },

    //圆环位置和大小
    polar: {
      center: ["50%", "50%"],
      radius: "120%",
    },

    series: [
      // 上层圆环
      {
        type: "bar",
        data: [
          {
            //上层圆环，显示数据
            value: getvalue,
            itemStyle: {
              color: "#888aff",
            },
          },
        ],
        barGap: "-100%", //柱间距离,上下两层圆环重合
        coordinateSystem: "polar",
        roundCap: true, //顶端圆角
        z: 3, //圆环层级，同z-index
      },

      //下层圆环，显示最大值
      {
        type: "bar",
        data: [
          {
            value: getmax,
            itemStyle: {
              color: "#1598FF",
              opacity: 0.2,
              borderWidth: 0,
            },
          },
        ],
        barGap: "-100%",
        coordinateSystem: "polar",
        roundCap: true,
        z: 1,
      },

      //仪表盘
      {
        type: "gauge",
        startAngle: 225, //起始角度，同极坐标
        endAngle: -45, //终止角度，同极坐标
        clockwise: true, // 仪表盘刻度是否是顺时针增长, 默认为true
        // 仪表盘轴线（轮廓线）
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },
        // 仪表盘刻度线样式（这里是内环）
        axisTick: {
          show: false,
          // show: true, // 是否显示刻度(线),默认 true。
          // splitNumber: 5, // 分隔线之间分割的刻度数,默认 5。
          // length: 8, // 刻度线长。支持相对半径的百分比,默认 8。
          // lineStyle: {
          //   // 刻度线样式。
          //   color: "#eee", //线的颜色,默认 #eee。
          //   opacity: 1, //图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。
          //   width: 1, //线度,默认 1。
          //   type: "solid", //线的类型,默认 solid。 此外还有 dashed,dotted
          //   shadowBlur: 10, //(发光效果)图形阴影的模糊大小。该属性配合 shadowColor,shadowOffsetX, shadowOffsetY 一起设置图形的阴影效果。
          //   shadowColor: "#fff", //阴影颜色。支持的格式同color。
          // },
        },
        axisLabel: {
          show: false,
        },
        splitLabel: {
          show: false,
        },
        pointer: {
          // 分隔线
          show: false, //是否显示指针
          shadowColor: "auto", //默认透明
          shadowBlur: 5,
          length: "50%",
          width: "2",
        },

        itemStyle: {
          color: "#888aff",
          borderColor: "#888aff",
          borderWidth: 3,
        },

        // 仪表盘中间数值的细节
        detail: {
          formatter: function (params) {
            // return getvalue + "人";  // 这里可以返回带上单位的数值
            return getvalue + "%";
          },
          color: "#FFC42F",
          fontFamily: "PingFangSC-Medium",
          fontSize: 23,
          offsetCenter: [0, 0], // 仪表盘中心数值的位置偏移
        },

        title: {
          show: false,
        },

        data: [
          {
            value: getvalue,
          },
        ],
      },
      {
        name: "外部刻度",
        type: "gauge",
        //  center: ['20%', '50%'],
        radius: "75%",
        min: 0, //最小刻度
        max: 100, //最大刻度
        splitNumber: 4, //刻度数据数量
        startAngle: 225,
        endAngle: -45,

        // 表盘一圈的轴线
        axisLine: {
          show: true,
          // 表盘轴线样式
          lineStyle: {
            width: 1,
            color: [[1, "rgba(0,0,0,0)"]],
          },
        },

        //刻度标签
        axisLabel: {
          show: true,
          color: "#FFFFFF",
          distance: -10, // 外侧文字距离表圈的距离
          // 数据范围代表的显示在外围
          // formatter: function (value) {
          //   if(value === 10) return '优'
          //   else if (value === 50) return '良'
          //   else if (value === 90) return '差'
          //   return ''
          // }
        },

        //刻度线样式
        axisTick: {
          show: true,
          splitNumber: 5, // 分隔线之间的刻度数
          lineStyle: {
            color: "#24d8e9", //用颜色渐变函数不起作用
            opacity: 0.6,
            width: 2,
          },
          length: -3, // 刻度线长度
          distance: 1, // 刻度线内侧向内
        },

        //分隔线样式
        splitLine: {
          show: false,
          length: -20, // 分割线线长, 支持相对半径的百分比
          lineStyle: {
            color: "#C7CBCF", //用颜色渐变函数不起作用
          },
        },
        detail: {
          show: false,
        },
        pointer: {
          show: false,
        },
      },
    ],
  };
  szChart.setOption(option, true);
}

// 学员占比班次柱形图
function init_xyzbChart() {
  // 基于准备好的dom，初始化echarts实例
  let xyzbChart = echarts.init(document.getElementById("xyzbChart"));
  let option = {
    // backgroundColor: "#00265f",
    backgroundColor: "rgba(0,0,0,0)",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["主体班", "非主体班"],
      align: "left", // 配置图例图标和文字的相对位置, (谁在左，谁在右)
      top: 10,
      right: 10,
      textStyle: {
        color: "#fff",
      },
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 35,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category", // 类目轴，适用于离散的类目数据
        data: ["第一季度", "第二季度", "第三季度", "第四季度"],
        axisLine: {
          show: false,
          lineStyle: {
            color: "#063374",
            width: 1,
            type: "solid",
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "#fff",
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        // 设置数值范围
        max: 20, // 坐标轴刻度最大值

        axisLabel: {
          margin: 10,
          formatter: "{value}",
          textStyle: {
            fontSize: 14,
            color: "#fff",
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: "#00c7ff",
            width: 1,
            type: "solid",
          },
        },
        // 分割线
        splitLine: {
          lineStyle: {
            color: "#1b3a5b",
            width: 12,
          },
        },
      },
    ],
    series: [
      {
        name: "主体班",
        type: "bar",
        data: [8, 8, 8, 8],
        barWidth: 10, //柱子宽度
        barGap: 1, //柱子之间间距
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#F85D0E",
              },
              {
                offset: 1,
                color: "#FFD99E",
              },
            ]),
            opacity: 1,
          },
        },
      },
      {
        name: "非主体班",
        type: "bar",
        data: [13, 13, 13, 13],
        barWidth: 10,
        barGap: 1,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#669BFC",
              },
              {
                offset: 1,
                color: "#D3E5FF",
              },
            ]),
            opacity: 1,
          },
        },
      },
    ],
  };
  xyzbChart.setOption(option, true);
}

// 开班计划柱形图
function init_kbjhChart() {
  // 基于准备好的dom，初始化echarts实例
  let kbjhChart = echarts.init(document.getElementById("kbjhChart"));
  let option = {
    // backgroundColor: "#00265f",
    backgroundColor: "rgba(0,0,0,0)",
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
    },
    legend: {
      data: ["主体班", "非主体班"],
      align: "left", // 配置图例图标和文字的相对位置, (谁在左，谁在右)
      top: 10,
      right: 10,
      textStyle: {
        color: "#fff",
      },
      itemWidth: 10,
      itemHeight: 10,
      itemGap: 35,
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category", // 类目轴，适用于离散的类目数据
        data: ["第一季度", "第二季度", "第三季度", "第四季度"],
        axisLine: {
          show: false,
          lineStyle: {
            color: "#063374",
            width: 1,
            type: "solid",
          },
        },
        axisTick: {
          show: false,
        },
        axisLabel: {
          show: true,
          textStyle: {
            color: "#fff",
          },
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        // 设置数值范围
        max: 20, // 坐标轴刻度最大值

        axisLabel: {
          margin: 10,
          formatter: "{value}",
          textStyle: {
            fontSize: 14,
            color: "#fff",
          },
        },
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
          lineStyle: {
            color: "#00c7ff",
            width: 1,
            type: "solid",
          },
        },
        // 分割线
        splitLine: {
          lineStyle: {
            color: "#1b3a5b",
            width: 12,
          },
        },
      },
    ],
    series: [
      {
        name: "主体班",
        type: "bar",
        data: [8, 8, 8, 8],
        barWidth: 10, //柱子宽度
        barGap: 1, //柱子之间间距
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#F85D0E",
              },
              {
                offset: 1,
                color: "#FFD99E",
              },
            ]),
            opacity: 1,
          },
        },
      },
      {
        name: "非主体班",
        type: "bar",
        data: [13, 13, 13, 13],
        barWidth: 10,
        barGap: 1,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#669BFC",
              },
              {
                offset: 1,
                color: "#D3E5FF",
              },
            ]),
            opacity: 1,
          },
        },
      },
    ],
  };
  kbjhChart.setOption(option, true);
}

// 性别、年龄
function init_sexChart() {
  // 基于准备好的dom，初始化echarts实例
  let sexChart = echarts.init(document.getElementById("sexChart"));

  // 饼图的数据集
  let seriesData = [
    {
      name: "男",
      value: "60",
    },
    {
      name: "女",
      value: "40",
    },
  ];
  let legendData = ["男", "女"];
  let colorList = ["#0C91ED", "#A4E6D8"];
  let option = {
    // 这里的背景颜色是做渐变的，注释掉了
    // backgroundColor: {
    //   type: "linear",
    //   x: 0,
    //   y: 0,
    //   x2: 1,
    //   y2: 1,
    //   colorStops: [
    //     {
    //       offset: 0,
    //       color: "#0f2c70", // 0% 处的颜色
    //     },
    //     {
    //       offset: 1,
    //       color: "#091732", // 100% 处的颜色
    //     },
    //   ],
    //   globalCoord: false, // 缺省为 false
    // },
    // backgroundColor: "#035083",
    backgroundColor: "rgba(0,0,0,0)",
    title: {
      text: "性别",
      x: "center",
      y: "center",
      textStyle: {
        color: "#fff",
      },
    },
    // 悬浮饼图显示的提示框
    tooltip: {
      show: true,
      trigger: "item",
      borderColor: "rgba(255,255,255,.3)",
      backgroundColor: "#e8f2ff",
      borderWidth: 1,
      padding: 5,
      formatter: function (parms) {
        var str =
          parms.marker +
          "" +
          parms.data.name +
          "</br>" +
          // "数量：" +
          // parms.data.value +
          // "头</br>" +
          "占比：" +
          parms.percent +
          "%";
        return str;
      },
    },
    legend: {
      type: "scroll", // 可滚动翻页的图例
      orient: "horizontal", // 图例列表的布局朝向
      left: "center",
      // top: "middle",
      bottom: "10%",
      align: "auto", // 文本对齐
      itemGap: 30, // 图例每项之间的间隔, 横向布局时为水平间隔，纵向布局时为纵向间隔
      itemWidth: 14,
      itemHeight: 14,
      textStyle: {
        color: "#fff",
      },
      data: legendData,
    },
    series: [
      {
        type: "pie",
        z: 3,
        center: ["50%", "50%"],
        radius: ["25%", "45%"],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        itemStyle: {
          normal: {
            color: function (params) {
              return colorList[params.dataIndex];
            },
          },
        },
        // 饼图外的数据标签
        label: {
          show: false,
          position: "outside",
          formatter: "{a|{b}：{d}%}\n{hr|}",
          rich: {
            hr: {
              backgroundColor: "t",
              borderRadius: 3,
              width: 3,
              height: 3,
              padding: [3, 3, 0, -12],
            },
            a: {
              padding: [-30, 15, -20, 15],
            },
          },
        },
        // 数据标签的线段
        labelLine: {
          show: false,
          normal: {
            length: 20,
            length2: 30,
            lineStyle: {
              width: 1,
            },
          },
        },
        data: seriesData,
      },
      // 下面两块是给饼图添加背景圆环
      // {
      //   name: "第一层环",
      //   type: "pie",
      //   z: 2,
      //   tooltip: {
      //     show: false,
      //   },
      //   center: ["50%", "50%"],
      //   radius: ["45%", "58%"],
      //   hoverAnimation: false,
      //   clockWise: false,
      //   itemStyle: {
      //     normal: {
      //       // shadowBlur: 40,
      //       // shadowColor: 'rgba(0, 255, 255,.3)',
      //       color: "rgba(1,15,80,.4)",
      //     },
      //     emphasis: {
      //       color: "rgba(1,15,80,.4)",
      //     },
      //   },
      //   label: {
      //     show: false,
      //   },
      //   data: [100],
      // },
      // {
      //   name: "第二层环",
      //   type: "pie",
      //   z: 1,
      //   tooltip: {
      //     show: false,
      //   },
      //   center: ["50%", "50%"],
      //   radius: ["58%", "76%"],
      //   hoverAnimation: false,
      //   clockWise: false,
      //   itemStyle: {
      //     normal: {
      //       // shadowBlur: 40,
      //       // shadowColor: 'rgba(0, 255, 255,.3)',
      //       color: "rgba(0,15,69,.2)",
      //     },
      //     emphasis: {
      //       color: "rgba(0,15,69,.2)",
      //     },
      //   },
      //   label: {
      //     show: false,
      //   },
      //   data: [100],
      // },
    ],
  };
  sexChart.setOption(option, true);
}

function init_ageChart() {
  // 基于准备好的dom，初始化echarts实例
  let ageChart = echarts.init(document.getElementById("ageChart"));

  // 饼图的数据集
  let seriesData = [
    {
      name: "35~44",
      value: "35",
    },
    {
      name: "25~34",
      value: "35",
    },
    {
      name: "25岁以下",
      value: "10",
    },
    {
      name: "45以上",
      value: "20",
    },
  ];
  let legendData = [
    ["25岁以下", "25~34"],
    ["35~44", "45以上"],
  ];
  let colorList = ["#dcb822", "#6992b6", "#6648ff", "#f8707f"];
  let option = {
    // 这里的背景颜色是做渐变的，注释掉了
    // backgroundColor: {
    //   type: "linear",
    //   x: 0,
    //   y: 0,
    //   x2: 1,
    //   y2: 1,
    //   colorStops: [
    //     {
    //       offset: 0,
    //       color: "#0f2c70", // 0% 处的颜色
    //     },
    //     {
    //       offset: 1,
    //       color: "#091732", // 100% 处的颜色
    //     },
    //   ],
    //   globalCoord: false, // 缺省为 false
    // },
    backgroundColor: "#035083",
    title: {
      text: "年龄",
      x: "center",
      y: "center",
      textStyle: {
        color: "#fff",
      },
    },
    // 悬浮饼图显示的提示框
    tooltip: {
      show: true,
      trigger: "item",
      borderColor: "rgba(255,255,255,.3)",
      backgroundColor: "#e8f2ff",
      borderWidth: 1,
      padding: 5,
      formatter: function (parms) {
        var str =
          parms.marker +
          "" +
          parms.data.name +
          "</br>" +
          // "数量：" +
          // parms.data.value +
          // "头</br>" +
          "占比：" +
          parms.percent +
          "%";
        return str;
      },
    },
    legend: [
      {
        type: "scroll", // 可滚动翻页的图例
        orient: "horizontal", // 图例列表的布局朝向
        left: "center",
        // top: "middle",
        bottom: "10%",
        align: "auto", // 文本对齐
        itemGap: 30, // 图例每项之间的间隔, 横向布局时为水平间隔，纵向布局时为纵向间隔
        itemWidth: 14,
        itemHeight: 14,
        textStyle: {
          color: "#fff",
        },
        data: legendData[0],
      },
      {
        type: "scroll", // 可滚动翻页的图例
        orient: "horizontal", // 图例列表的布局朝向
        left: "center",
        // top: "middle",
        bottom: "2%",
        align: "auto", // 文本对齐
        itemGap: 42, // 图例每项之间的间隔, 横向布局时为水平间隔，纵向布局时为纵向间隔
        itemWidth: 14,
        itemHeight: 14,
        textStyle: {
          color: "#fff",
        },
        data: legendData[1],
      },
    ],
    series: [
      {
        type: "pie",
        z: 3,
        center: ["50%", "50%"],
        radius: ["25%", "45%"],
        clockwise: true,
        avoidLabelOverlap: true,
        hoverOffset: 15,
        itemStyle: {
          normal: {
            color: function (params) {
              return colorList[params.dataIndex];
            },
          },
        },
        // 饼图外的数据标签
        label: {
          show: false,
          position: "outside",
          formatter: "{a|{b}：{d}%}\n{hr|}",
          rich: {
            hr: {
              backgroundColor: "t",
              borderRadius: 3,
              width: 3,
              height: 3,
              padding: [3, 3, 0, -12],
            },
            a: {
              padding: [-30, 15, -20, 15],
            },
          },
        },
        // 数据标签的线段
        labelLine: {
          show: false,
          normal: {
            length: 20,
            length2: 30,
            lineStyle: {
              width: 1,
            },
          },
        },
        data: seriesData,
      },
      // 下面两块是给饼图添加背景圆环
      // {
      //   name: "第一层环",
      //   type: "pie",
      //   z: 2,
      //   tooltip: {
      //     show: false,
      //   },
      //   center: ["50%", "50%"],
      //   radius: ["45%", "58%"],
      //   hoverAnimation: false,
      //   clockWise: false,
      //   itemStyle: {
      //     normal: {
      //       // shadowBlur: 40,
      //       // shadowColor: 'rgba(0, 255, 255,.3)',
      //       color: "rgba(1,15,80,.4)",
      //     },
      //     emphasis: {
      //       color: "rgba(1,15,80,.4)",
      //     },
      //   },
      //   label: {
      //     show: false,
      //   },
      //   data: [100],
      // },
      // {
      //   name: "第二层环",
      //   type: "pie",
      //   z: 1,
      //   tooltip: {
      //     show: false,
      //   },
      //   center: ["50%", "50%"],
      //   radius: ["58%", "76%"],
      //   hoverAnimation: false,
      //   clockWise: false,
      //   itemStyle: {
      //     normal: {
      //       // shadowBlur: 40,
      //       // shadowColor: 'rgba(0, 255, 255,.3)',
      //       color: "rgba(0,15,69,.2)",
      //     },
      //     emphasis: {
      //       color: "rgba(0,15,69,.2)",
      //     },
      //   },
      //   label: {
      //     show: false,
      //   },
      //   data: [100],
      // },
    ],
  };
  ageChart.setOption(option, true);
}




