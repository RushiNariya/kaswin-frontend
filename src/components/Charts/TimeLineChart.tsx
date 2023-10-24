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
                moment('04:54', 'HH:mm').toDate().getTime(),
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
                moment('19:54', 'HH:mm').toDate().getTime(),
                moment('22:54', 'HH:mm').toDate().getTime(),
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
        colors: ['#4796C3', '#82649F'],
        legend: {
          position: 'bottom',
          horizontalAlign: 'center',
          fontSize: '12px',
          fontWeight: 500,
          itemMargin: {
            horizontal: 10,
          },
          markers: {
            width: 15,
            height: 15,
          },
        },
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
        responsive: [
          {
            breakpoint: 2300,
            options: {
              chart: {
                height: 350,
              },
            },
          },
        ],
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
          height={700}
          width="140%"
        />
      </div>
    );
  }
}

export default TimeLineChart;
