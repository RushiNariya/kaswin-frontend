import ReactECharts from 'echarts-for-react'; // or var ReactECharts = require('echarts-for-react');
import React, { Component } from 'react';

const colors = ['#202223', '#BBC0C3'];

function parentData() {
  function randomData(i: any) {
    now = new Date(+now + oneDay);
    value = value + Math.random() * 21 - 10;
    return {
      name: now.toString(),
      value: [`${h + ':' + m}`, Math.round(value)],
    };
  }
  const data: any[] = [];
  let now = new Date(1997, 9, 3);
  const oneDay = 24 * 3600 * 1000;
  let value = Math.random() * 1000;
  let h = 0;
  let m = 0;
  for (let i = 0; i < 1500; i++) {
    const result = randomData(i);
    m++;
    if (h === 24) break;
    if (m === 60) h++, (m = 0);
    data.push(result);
  }
  return data;
}

export class TimeEChart extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      options: {
        tooltip: {
          trigger: 'axis',
          formatter: function (params: any) {
            // console.log(params);
            return (
              'Time : ' +
              params[0].value[0] +
              ', ' +
              'Temperature : ' +
              params[0].value[1]
            );
          },
          axisPointer: {
            animation: false,
          },
        },
        xAxis: {
          type: 'category',
        },
        yAxis: {
          type: 'value',
        },
        series: [
          {
            name: 'Temperature',
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
    };
  }
  render() {
    return (
      <div className="w-[100%] h-full overflow-scroll">
        <h2 className="text-center my-4 font-bold text-[#292C2E] text-[1.4rem]">
          Time Domain [g]
        </h2>
        <div className="w-full flex gap-4 justify-center mb-4">
          <div className="flex justify-center items-center">
            <div className="h-5 w-5 rounded-full bg-[#4796C3] mr-2"></div>{' '}
            <div>vel_x</div>
          </div>
          <div className="flex justify-center items-center">
            <div className="h-5 w-5 rounded-full bg-[#2ACE60] mr-2"></div>{' '}
            <div>vel_x</div>
          </div>
          <div className="flex justify-center items-center">
            <div className="h-5 w-5 rounded-full bg-[#F2BE5A] mr-2"></div>{' '}
            <div>vel_x</div>
          </div>
        </div>
        <ReactECharts
          option={(this.state as any).options}
          // className="w-[900px] ml-[-30px] overflow-scroll"
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
}

export default TimeEChart;
