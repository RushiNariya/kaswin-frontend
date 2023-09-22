import ReactECharts from 'echarts-for-react';
import React from 'react';

class ClassificationChart extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      options: {
        title: {
          //   text: 'Basic Radar Chart',
        },
        legend: {
          show: false,
          data: ['Allocated Budget', 'Actual Spending'],
        },
        radar: {
          shape: 'circle',
          indicator: [
            { name: 'Operation', max: 6500 },
            { name: 'Crash', max: 16000 },
            { name: 'Coolant', max: 30000 },
            { name: 'Balance', max: 38000 },
            { name: 'Normal', max: 52000 },
          ],
          axisName: {
            color: '#292c2e',
            fontFamily: 'Mulish',
            fontSize: 14,
            fontWeight: 700,
            lineHeight: 22,
          },
          splitArea: {
            show: false,
          },
        },

        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
              {
                value: [4200, 3000, 20000, 35000, 50000],
                name: 'Allocated Budget',
              },
            ],
            areaStyle: {
              color: '#FCDB9C',
            },
            itemStyle: {
              color: '#F2BE5A',
            },
            lineStyle: {
              color: '#F2BE5A',
              width: 2,
              type: 'solid',
              opacity: 1,
            },
          },
        ],
      },
    };
  }

  render() {
    return (
      <div className="">
        <ReactECharts
          option={(this.state as any).options}
          //   className="w-[900px] ml-[-30px]"
          style={{
            height: '400px',
          }}
        />
      </div>
    );
  }
}

export default ClassificationChart;