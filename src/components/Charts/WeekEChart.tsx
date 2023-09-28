import ReactECharts from 'echarts-for-react'; // or var ReactECharts = require('echarts-for-react');
import React from 'react';

function parentData() {
  const list = [
    { name: 'Week1 Day 1', value: 90 },
    { name: 'Week1 Day 2', value: 91 },
    { name: 'Week1 Day 3', value: 93 },
    { name: 'Week1 Day 4', value: 95 },
    { name: 'Week1 Day 5', value: 99 },
    { name: 'Week1 Day 6', value: 110 },
    { name: 'Week1 Day 7', value: 100 },
    { name: 'Week1 Day 8', value: 105 },

    { name: 'Week2 Day 1', value: 101 },
    { name: 'Week2 Day 2', value: 103 },
    { name: 'Week2 Day 3', value: 94 },
    { name: 'Week2 Day 4', value: 96 },
    { name: 'Week2 Day 5', value: 99 },
    { name: 'Week2 Day 6', value: 90 },
    { name: 'Week2 Day 7', value: 101 },
    { name: 'Week2 Day 8', value: 103 },

    { name: 'Week3 Day 1', value: 100 },
    { name: 'Week3 Day 2', value: 120 },
    { name: 'Week3 Day 3', value: 115 },
    { name: 'Week3 Day 4', value: 145 },
    { name: 'Week3 Day 5', value: 101 },
    { name: 'Week3 Day 6', value: 95 },
    { name: 'Week3 Day 7', value: 120 },
    { name: 'Week3 Day 8', value: 124 },

    { name: 'Week4 Day 1', value: 90 },
    { name: 'Week4 Day 2', value: 91 },
    { name: 'Week4 Day 3', value: 93 },
    { name: 'Week4 Day 4', value: 95 },
    { name: 'Week4 Day 5', value: 99 },
    { name: 'Week4 Day 6', value: 110 },
    { name: 'Week4 Day 7', value: 100 },
    { name: 'Week4 Day 8', value: 105 },

    { name: 'Week5 Day 1', value: 101 },
    { name: 'Week5 Day 2', value: 103 },
    { name: 'Week5 Day 3', value: 94 },
    { name: 'Week5 Day 4', value: 96 },
    { name: 'Week5 Day 5', value: 99 },
    { name: 'Week5 Day 6', value: 90 },
    { name: 'Week5 Day 7', value: 101 },
    { name: 'Week5 Day 8', value: 103 },
  ];

  const data: any[] = [];

  for (let i = 0; i < list.length; i++) {
    const result = list[i];
    data.push(result);
  }
  return data;
}

function WeekEChart() {
  const [config, setConfig] = React.useState({
    options: {
      tooltip: {
        trigger: 'axis',
        formatter: function (params: any) {
          return (
            'Time : ' + params[0].axisValue + ', ' + 'Temperature : ' + params[0].value
          );
        },
        axisPointer: {
          animation: false,
        },
      },
      dataZoom: {
        show: true,
        realtime: true,
      },
      legend: {
        // backgroundColor: '#ccc',
        textStyle: {
          fontSize: '1rem',
        },
        icon: 'circle',
        orient: 'horizontal',
        // right: 10,
        top: 20,
      },
      // dataLabels: {
      //   enabled: false,
      // },
      grid: {
        top: 80,
      },
      xAxis: {
        type: 'category',
        tickAmount: 10,
        data: parentData().map((item) => item.name),
        axisLabel: {
          formatter: function (value: any) {
            return value;
          },
        },
      },
      yAxis: {
        type: 'value',
      },
      toolbox: {
        feature: {
          saveAsImage: {
            name: 'Time_Domain_Chart',
            type: 'png',
          },
        },
      },
      series: [
        {
          name: 'Temperature1',
          type: 'line',
          showSymbol: false,
          data: parentData(),
        },
        {
          name: 'Temperature2',
          type: 'line',
          showSymbol: false,
          data: parentData(),
        },
        {
          name: 'Temperature3',
          type: 'line',
          showSymbol: false,
          data: parentData(),
        },
      ],
    },
  });

  return (
    <div className="w-[100%] h-full overflow-scroll">
      <ReactECharts
        option={(config as any).options}
        style={{
          height: '400px',
          overflow: 'scroll',
          backgroundColor: '#F1F1F1',
          borderRadius: '10px',
          border: '1px solid #CED4DA',
        }}
      />
    </div>
  );
}

export default WeekEChart;
