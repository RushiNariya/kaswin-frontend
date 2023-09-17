import React from 'react';
import ReactApexChart from 'react-apexcharts';

class TimeDomainChart extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      series: [
        {
          name: 'South',
          data: this.generateDayWiseTimeSeries(
            new Date('2023-08-18T00:00:00').getTime(),
            20,
            {
              min: 10,
              max: 60,
            },
            1,
          ),
        },
        {
          name: 'North',
          data: this.generateDayWiseTimeSeries(
            new Date('2023-08-18T00:00:00').getTime(),
            20,
            {
              min: 10,
              max: 20,
            },
            2,
          ),
        },
        {
          name: 'Central',
          data: this.generateDayWiseTimeSeries(
            new Date('2023-08-18T00:00:00').getTime(),
            20,
            {
              min: 10,
              max: 15,
            },
            3,
          ),
        },
      ],
      options: {
        chart: {
          type: 'line',
          height: 350,
          stacked: true,
          events: {
            selection: function (chart: any, e: any) {
              // console.log(new Date(e.xaxis.min));
            },
          },
          zoom: {
            type: 'x',
            enabled: false,
            autoScaleYaxis: true,
          },
          toolbar: {
            tools: {
              download: false,
              selection: false,
              pan: false,
              zoom: false,
            },
          },
        },
        colors: ['#008FFB', '#00E396', '#CED4DC'],
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: 'straight',
          width: 2,
        },
        fill: {
          type: 'image',
        },
        legend: {
          position: 'top',
          horizontalAlign: 'left',
        },
        xaxis: {
          type: 'datetime',
          tickAmount: 24,
          min: new Date('2023-08-18T00:00:00').getTime(),
          max: new Date('2023-08-18T24:00:00').getTime(),
          labels: {
            formatter: function (val: any) {
              const date = new Date(val);
              const hours = date.getHours().toString().padStart(2, '0');
              const minutes = date.getMinutes().toString().padStart(2, '0');
              return `${hours}:${minutes}`;
            },
          },
        },
      },
    };

    this.generateDayWiseTimeSeries = this.generateDayWiseTimeSeries.bind(this);
  }

  generateDayWiseTimeSeries(
    startDate: any,
    numberOfDays: any,
    valueRange: any,
    flag: any,
  ) {
    const dataSeries = [];

    for (let i = 0; i < numberOfDays; i++) {
      const currentDate = new Date(startDate + 60 * 60 * 1000 * i * flag);
      const hours = currentDate.getHours().toString().padStart(2, '0');
      const minutes = currentDate.getMinutes().toString().padStart(2, '0');
      const dataPoint: any = {
        x: currentDate,
        y: [],
      };

      const numStacks =
        Math.floor(Math.random() * (valueRange.max - valueRange.min + 1)) +
        valueRange.min;
      for (let j = 0; j < 1; j++) {
        dataPoint.y.push(
          Math.floor(Math.random() * (valueRange.max - valueRange.min + 1)) +
            valueRange.min,
        );
      }

      dataSeries.push(dataPoint);
    }

    // console.log(dataSeries);

    return dataSeries;
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={(this.state as any).options}
          series={(this.state as any).series}
          type="area"
          height={350}
          width={1000}
        />
      </div>
    );
  }
}

export default TimeDomainChart;
