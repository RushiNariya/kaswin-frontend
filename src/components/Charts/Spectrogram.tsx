import ReactECharts from 'echarts-for-react'; // or var ReactECharts = require('echarts-for-react');
import React, { Component } from 'react';

import data from '../../data/data';

const colors = ['#202223', '#BBC0C3'];

export class Spectrogram extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      options: {
        color: colors,
        tooltip: {
          trigger: 'none',
          axisPointer: {
            type: 'cross',
          },
        },
        legend: {},
        grid: {
          top: 70,
          bottom: 50,
        },
        xAxis: [
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true,
            },
            axisLine: {
              onZero: false,
            },

            // prettier-ignore
            data: ['2016-1', '2016-2', '2016-3', '2016-4', '2016-5', '2016-6', '2016-7', '2016-8', '2016-9', '2016-10', '2016-11', '2016-12'],
          },
          {
            type: 'category',
            axisTick: {
              alignWithLabel: true,
            },
          },
        ],
        yAxis: [
          {
            type: 'value',
          },
        ],
        series: [
          {
            name: 'Precipitation(2015)',
            type: 'line',
            smooth: true,
            emphasis: {
              focus: 'series',
            },
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
          },
          {
            name: 'Precipitation(2016)',
            type: 'line',
            smooth: true,
            emphasis: {
              focus: 'series',
            },
            data: [3.9, 5.9, 11.1, 18.7, 48.3, 69.2, 231.6, 46.6, 55.4, 18.4, 10.3, 0.7],
          },
        ],
      },
    };
  }
  render() {
    return (
      <div className="w-[100%] h-full overflow-scroll">
        <h2 className="text-center my-4 font-bold text-[#292C2E] text-[1.4rem]">
          Spectrogram Z-axis
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

export default Spectrogram;
