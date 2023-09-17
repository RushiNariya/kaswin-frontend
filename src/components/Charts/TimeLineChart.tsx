import moment from 'moment';
import React from 'react';
import ReactApexChart from 'react-apexcharts';

class TimeLineChart extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      series: [
        {
          name: 'Vibration',
          data: [
            {
              x: 'Vibration',
              y: [
                moment('01:54', 'HH:mm').toDate().getTime(),
                moment('03:54', 'HH:mm').toDate().getTime(),
              ],
              fillColor: '#4796C3',
            },
            {
              x: 'Vibration',
              y: [
                moment('09:54', 'HH:mm').toDate().getTime(),
                moment('12:54', 'HH:mm').toDate().getTime(),
              ],
              fillColor: '#4796C3',
            },
          ],
        },
        {
          name: 'Temperature',
          data: [
            {
              x: 'Temperature',
              y: [
                moment('09:54', 'HH:mm').toDate().getTime(),
                moment('12:54', 'HH:mm').toDate().getTime(),
              ],
              fillColor: '#82649F',
            },

            {
              x: 'Temperature',
              y: [
                moment('21:54', 'HH:mm').toDate().getTime(),
                moment('23:54', 'HH:mm').toDate().getTime(),
              ],
              fillColor: '#82649F',
            },
          ],
        },
      ],
      options: {
        chart: {
          height: 350,
          type: 'rangeBar',
          toolbar: {
            show: false,
          },
        },
        colors: ['#4796C3', '#82649F'],
        tooltip: {
          enabled: true,
          custom: function ({ series, seriesIndex, dataPointIndex, w }: any) {
            if (seriesIndex === 0) {
              return (
                '<div class="rounded-tl-lg rounded-tr-lg rounded-br-lg pt-1 pr-2.5 pb-1 pl-2.5 flex flex-row gap-[15px] items-center justify-start relative overflow-hidden">' +
                '<span>' +
                'S1 8 mm/s Vibration exceeded' +
                '</span>' +
                '</div>'
              );
            } else {
              return (
                '<div class="rounded-tl-lg rounded-tr-lg rounded-br-lg pt-1 pr-2.5 pb-1 pl-2.5 flex flex-row gap-[15px] items-center justify-start relative overflow-hidden">' +
                '<span>' +
                `S3 550&deg Temperature exceeded` +
                '</span>' +
                '</div>'
              );
            }
          },
        },
        plotOptions: {
          bar: {
            horizontal: true,
            distributed: true,
            dataLabels: {
              hideOverflowingLabels: false,
            },
            borderRadius: 4,
            rangeBarOverlap: true,
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function (val: any, opts: any) {
            const label = opts.w.globals.labels[opts.dataPointIndex];
            const a = moment(val[0]);
            return a.format('hh:mm a');
          },
          style: {
            colors: ['#f3f4f5', '#fff'],
          },
        },

        xaxis: {
          type: 'datetime',
          tickAmount: 12,
          min: moment('00:00', 'HH:mm').toDate().getTime(),
          max: moment('24:00', 'HH:mm').toDate().getTime(),
          labels: {
            formatter: function (val: any) {
              const date = new Date(val);
              const hours = date.getHours().toString().padStart(2, '0');
              const minutes = date.getMinutes().toString().padStart(2, '0');
              return `${hours}:${minutes}`;
            },
          },
        },
        yaxis: {
          show: false,
        },
        grid: {
          xaxis: {
            lines: {
              show: true,
            },
          },
          yaxis: {
            lines: {
              show: false,
            },
          },
        },
      },
    };
  }

  render() {
    return (
      <div id="chart" className="overflow-auto no-scrollbar">
        <ReactApexChart
          options={(this.state as any).options}
          series={(this.state as any).series}
          type="rangeBar"
          height={350}
          width={1000}
        />
      </div>
    );
  }
}

export default TimeLineChart;
