import React from 'react';
import ReactApexChart from 'react-apexcharts';

class DemoTwo extends React.Component {
  constructor(props: any) {
    super(props);

    this.state = {
      series: [
        {
          name: 'High - 2013',
          data: [28, 29, 33, 36, 32, 32, 33],
        },
        // {
        //   name: 'Low - 2013',
        //   data: [12, 11, 14, 18, 17, 13, 13],
        // },
      ],
      options: {
        chart: {
          height: 350,
          type: 'line',
          // dropShadow: {
          //   enabled: true,
          //   color: '#000',
          //   top: 18,
          //   left: 7,
          //   blur: 10,
          //   opacity: 0.2,
          // },
          toolbar: {
            show: false,
          },
        },
        colors: ['#77B6EA', '#545454'],
        dataLabels: {
          enabled: true,
        },
        stroke: {
          curve: 'straight',
        },
        title: {
          text: 'Average High & Low Temperature',
          align: 'left',
        },
        grid: {
          borderColor: '#e7e7e7',
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        markers: {
          size: 1,
        },
        xaxis: {
          // type: 'datetime',
          categories: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
          labels: {
            formatter: function (val: any) {
              // console.log(val);
              // const date = new Date(val);
              // const hours = date.getHours().toString().padStart(2, '0');
              // const minutes = date.getMinutes().toString().padStart(2, '0');
              // return `${hours}:${minutes}`;
              return val;
            },
          },
        },
        yaxis: {
          title: {
            text: 'Temperature',
          },
          min: 5,
          max: 40,
        },
        legend: {
          position: 'top',
          horizontalAlign: 'right',
          floating: true,
          offsetY: -25,
          offsetX: -5,
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
          type="line"
          height={350}
        />
      </div>
    );
  }
}

export default DemoTwo;
