import ReactECharts from 'echarts-for-react'; // or var ReactECharts = require('echarts-for-react');
import React, { Component } from 'react';

const colors = ['#202223', '#BBC0C3'];

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

// console.log(data);

export class Temperature extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      options: {
        tooltip: {
          trigger: 'axis',
          formatter: function (params: any) {
            // console.log(params);
            const date = new Date(params.name);
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
        toolbox: {
          feature: {
            saveAsImage: {
              name: 'Temperature_Chart',
              type: 'png',
            },
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
            data: data,
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="w-[100%] h-full overflow-scroll">
        <h2 className="text-center my-4 font-bold text-[#292C2E] text-[1.4rem]">
          Temperature
        </h2>
        <ReactECharts
          option={(this.state as any).options}
          // className="w-[900px] ml-[-30px]"
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

export default Temperature;
