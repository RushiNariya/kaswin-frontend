import React from 'react';
import ReactApexChart from 'react-apexcharts';

class TimeSeriesChart extends React.Component {
  xPoints = [
    '00:00',
    '02:00',
    '04:00',
    '06:00',
    '08:00',
    '10:00',
    '12:00',
    '14:00',
    '16:00',
    '18:00',
    '20:00',
    '22:00',
    '24:00',
  ];
  constructor(props: any) {
    super(props);

    this.state = {
      series: [
        {
          name: 'XYZ MOTORS',
          data: [2.5, 3.2, 2.8, 3.5, 4, 5, 1.4, 4.0, 6.5, 10, 3.5, 3.4],
        },
      ],

      options: {
        chart: {
          type: 'area',
          stacked: false,
          zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true,
          },
          toolbar: {
            tools: {
              download: false,
              selection: false,
              pan: true,
              zoom: false,
            },
          },
        },
        dataLabels: {
          enabled: false,
        },
        markers: {
          size: 0,
        },
        title: {
          align: 'left',
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100],
          },
        },
        yaxis: {
          // labels: {
          //   formatter: function (val: any) {
          //     return val.toFixed(2);
          //   },
          // },
        },
        xaxis: {
          categories: this.xPoints,
        },
        tooltip: {
          cssClass: 'time-series-chart',
          shared: false,

          marker: {
            show: true,
          },

          y: {
            formatter: function (val: any) {
              return val.toFixed(0) + 'm/s';
            },
          },
          fillSeriesColor: false,
          custom: (value: any) => {
            return ` <div class="tooltip-box">
                <div style="margin-bottom: 5px; font-size: 0.6rem; opacity: 0.5;">${
                  this.xPoints[value?.dataPointIndex]
                } am</div>
                <h2 style="font-weight: 700; margin-bottom: 5px;">${
                  value.series[0][value?.dataPointIndex]
                } m/s</h2>
                <div style="font-size: 0.7rem;">Above thresold ↑</div>
              </div>`;
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={(this.state as any).options}
          series={(this.state as any).series}
          type="area"
          height={300}
        />
      </div>
    );
  }
}

export default TimeSeriesChart;
