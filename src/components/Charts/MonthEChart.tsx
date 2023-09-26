import ReactECharts from 'echarts-for-react'; // or var ReactECharts = require('echarts-for-react');
import React from 'react';

function parentData() {
  const list = [
    { name: 'Jan Day 1', value: 90 },
    { name: 'Jan Day 2', value: 91 },
    { name: 'Jan Day 3', value: 93 },
    { name: 'Jan Day 4', value: 95 },
    { name: 'Jan Day 5', value: 99 },
    { name: 'Jan Day 6', value: 110 },
    { name: 'Jan Day 7', value: 100 },
    { name: 'Jan Day 8', value: 105 },
    { name: 'Jan Day 9', value: 101 },
    { name: 'Jan Day 10', value: 103 },
    { name: 'Jan Day 11', value: 94 },
    { name: 'Jan Day 12', value: 96 },
    { name: 'Jan Day 13', value: 99 },
    { name: 'Jan Day 14', value: 90 },
    { name: 'Jan Day 15', value: 101 },
    { name: 'Jan Day 16', value: 103 },
    { name: 'Jan Day 17', value: 90 },
    { name: 'Jan Day 18', value: 91 },
    { name: 'Jan Day 19', value: 93 },
    { name: 'Jan Day 20', value: 95 },
    { name: 'Jan Day 21', value: 99 },
    { name: 'Jan Day 22', value: 110 },
    { name: 'Jan Day 23', value: 100 },
    { name: 'Jan Day 24', value: 105 },
    { name: 'Jan Day 25', value: 101 },
    { name: 'Jan Day 26', value: 103 },
    { name: 'Jan Day 27', value: 94 },
    { name: 'Jan Day 28', value: 96 },
    { name: 'Jan Day 29', value: 99 },
    { name: 'Jan Day 30', value: 90 },

    { name: 'Feb Day 1', value: 101 },
    { name: 'Feb Day 2', value: 103 },
    { name: 'Feb Day 3', value: 94 },
    { name: 'Feb Day 4', value: 96 },
    { name: 'Feb Day 5', value: 99 },
    { name: 'Feb Day 6', value: 90 },
    { name: 'Feb Day 7', value: 101 },
    { name: 'Feb Day 8', value: 103 },
    { name: 'Feb Day 9', value: 101 },
    { name: 'Feb Day 10', value: 103 },
    { name: 'Feb Day 11', value: 94 },
    { name: 'Feb Day 12', value: 96 },
    { name: 'Feb Day 13', value: 99 },
    { name: 'Feb Day 14', value: 90 },
    { name: 'Feb Day 15', value: 101 },
    { name: 'Feb Day 16', value: 103 },
    { name: 'Feb Day 17', value: 90 },
    { name: 'Feb Day 18', value: 91 },
    { name: 'Feb Day 19', value: 93 },
    { name: 'Feb Day 20', value: 95 },
    { name: 'Feb Day 21', value: 99 },
    { name: 'Feb Day 22', value: 110 },
    { name: 'Feb Day 23', value: 100 },
    { name: 'Feb Day 24', value: 105 },
    { name: 'Feb Day 25', value: 101 },
    { name: 'Feb Day 26', value: 103 },
    { name: 'Feb Day 27', value: 94 },
    { name: 'Feb Day 28', value: 96 },
  ];

  const data: any[] = [];

  for (let i = 0; i < list.length; i++) {
    const result = list[i];
    data.push(result);
  }
  return data;
}

function MonthEChart() {
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

export default MonthEChart;
