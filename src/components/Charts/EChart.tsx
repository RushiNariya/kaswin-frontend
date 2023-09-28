import ReactECharts from 'echarts-for-react'; // or var ReactECharts = require('echarts-for-react');
import React, { Component } from 'react';

import data from '../../data/data';

// export class EChart extends Component {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       options: {
//         // dataset: [
//         //   {
//         //     id: 'dataset_raw',
//         //     source: data,
//         //   },
//         //   {
//         //     id: 'dataset_since_1950_of_germany',
//         //     fromDatasetId: 'dataset_raw',
//         //     transform: {
//         //       type: 'filter',
//         //       config: {
//         //         and: [
//         //           { dimension: 'Year', gte: 1950 },
//         //           { dimension: 'Country', '=': 'Germany' },
//         //         ],
//         //       },
//         //     },
//         //   },
//         //   {
//         //     id: 'dataset_since_1950_of_france',
//         //     fromDatasetId: 'dataset_raw',
//         //     transform: {
//         //       type: 'filter',
//         //       config: {
//         //         and: [
//         //           { dimension: 'Year', gte: 1950 },
//         //           { dimension: 'Country', '=': 'France' },
//         //         ],
//         //       },
//         //     },
//         //   },
//         // ],

//         tooltip: {
//           trigger: 'axis',
//         },
//         xAxis: [
//           {
//             type: 'category',
//             nameLocation: 'middle',
//             data: [
//               {
//                 Income: 1234,
//                 Year: 1900,
//               },
//               {
//                 Income: 2234,
//                 Year: 1901,
//               },
//               {
//                 Income: 1334,
//                 Year: 1902,
//               },
//               {
//                 Income: 2334,
//                 Year: 1903,
//               },
//               {
//                 Income: 234,
//                 Year: 1904,
//               },
//               {
//                 Income: 134,
//                 Year: 1905,
//               },
//               {
//                 Income: 1214,
//                 Year: 1906,
//               },
//               {
//                 Income: 1734,
//                 Year: 1907,
//               },
//               {
//                 Income: 1684,
//                 Year: 1908,
//               },
//               {
//                 Income: 1230,
//                 Year: 1930,
//               },
//             ].map((item) => item.Year),
//             // data: [1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910],
//           },
//           // {
//           //   type: 'category',
//           //   nameLocation: 'middle',
//           //   // data: [1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910],
//           // },
//         ],
//         yAxis: {
//           type: 'value',
//         },
//         series: [
//           {
//             name: 'India',
//             type: 'line',
//             data: [
//               {
//                 Income: 1234,
//                 Year: 1900,
//               },
//               {
//                 Income: 2234,
//                 Year: 1901,
//               },
//               {
//                 Income: 1334,
//                 Year: 1902,
//               },
//               {
//                 Income: 2334,
//                 Year: 1903,
//               },
//               {
//                 Income: 234,
//                 Year: 1904,
//               },
//               {
//                 Income: 134,
//                 Year: 1905,
//               },
//               {
//                 Income: 1214,
//                 Year: 1906,
//               },
//               {
//                 Income: 1734,
//                 Year: 1907,
//               },
//               {
//                 Income: 1684,
//                 Year: 1908,
//               },
//               {
//                 Income: 1230,
//                 Year: 1910,
//               },
//             ].map((item) => item.Income),
//             showSymbol: false,
//             // encode: {
//             //   x: 'Year',
//             //   y: 'Income',
//             //   itemName: 'Year',
//             //   tooltip: ['Income'],
//             // },
//           },
//           {
//             name: 'Aus',
//             type: 'line',
//             data: [
//               {
//                 Income: 3234,
//                 Year: 1900,
//               },
//               {
//                 Income: 2234,
//                 Year: 1901,
//               },
//               {
//                 Income: 2334,
//                 Year: 1902,
//               },
//               {
//                 Income: 2434,
//                 Year: 1903,
//               },
//               {
//                 Income: 1214,
//                 Year: 1904,
//               },
//               {
//                 Income: 2034,
//                 Year: 1905,
//               },
//               {
//                 Income: 3714,
//                 Year: 1906,
//               },
//               {
//                 Income: 2334,
//                 Year: 1907,
//               },
//               {
//                 Income: 1904,
//                 Year: 1908,
//               },
//               {
//                 Income: 1230,
//                 Year: 1930,
//               },
//             ].map((item) => item.Income),
//             showSymbol: false,
//             // encode: {
//             //   x: 'Year',
//             //   y: 'Income',
//             //   itemName: 'Year',
//             //   tooltip: ['Income'],
//             // },
//           },
//         ],
//       },
//     };
//   }
//   render() {
//     return (
//       <div className="w-[100%] h-full overflow-scroll">
//         <h2 className="text-center my-4 font-bold text-[#292C2E] text-[1.4rem]">
//           FFT Domain [g]
//         </h2>
//         <div className="w-full flex gap-4 justify-center mb-4">
//           <div className="flex justify-center items-center">
//             <div className="h-5 w-5 rounded-full bg-[#4796C3] mr-2"></div>{' '}
//             <div>acc_x</div>
//           </div>
//           <div className="flex justify-center items-center">
//             <div className="h-5 w-5 rounded-full bg-[#2ACE60] mr-2"></div>{' '}
//             <div>acc_x</div>
//           </div>
//           <div className="flex justify-center items-center">
//             <div className="h-5 w-5 rounded-full bg-[#F2BE5A] mr-2"></div>{' '}
//             <div>acc_x</div>
//           </div>
//         </div>
//         <ReactECharts
//           option={(this.state as any).options}
//           // notMerge={true}
//           // lazyUpdate={true}
//           // theme={'theme_name'}
//           // onChartReady={this.onChartReadyCallback}
//           // onEvents={EventsDict}
//           // opts={}
//           // className="w-[1000px] h-[350px]"
//           style={{
//             height: '400px',
//             overflow: 'scroll',
//             backgroundColor: '#F1F1F1',
//             borderRadius: '10px',
//             border: '1px solid #CED4DA',
//           }}
//         />
//       </div>
//     );
//   }
// }

function EChart() {
  const [config, setConfig] = React.useState({
    options: {
      // dataset: [
      //   {
      //     id: 'dataset_raw',
      //     source: data,
      //   },
      //   {
      //     id: 'dataset_since_1950_of_germany',
      //     fromDatasetId: 'dataset_raw',
      //     transform: {
      //       type: 'filter',
      //       config: {
      //         and: [
      //           { dimension: 'Year', gte: 1950 },
      //           { dimension: 'Country', '=': 'Germany' },
      //         ],
      //       },
      //     },
      //   },
      //   {
      //     id: 'dataset_since_1950_of_france',
      //     fromDatasetId: 'dataset_raw',
      //     transform: {
      //       type: 'filter',
      //       config: {
      //         and: [
      //           { dimension: 'Year', gte: 1950 },
      //           { dimension: 'Country', '=': 'France' },
      //         ],
      //       },
      //     },
      //   },
      // ],

      tooltip: {
        trigger: 'axis',
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
      toolbox: {
        feature: {
          saveAsImage: {
            name: 'FFT_Domain_Chart',
            type: 'png',
          },
        },
      },
      grid: {
        top: 80,
      },
      xAxis: [
        {
          type: 'category',
          nameLocation: 'middle',
          data: [
            {
              Income: 1234,
              Year: 1900,
            },
            {
              Income: 2234,
              Year: 1901,
            },
            {
              Income: 1334,
              Year: 1902,
            },
            {
              Income: 2334,
              Year: 1903,
            },
            {
              Income: 234,
              Year: 1904,
            },
            {
              Income: 134,
              Year: 1905,
            },
            {
              Income: 1214,
              Year: 1906,
            },
            {
              Income: 1734,
              Year: 1907,
            },
            {
              Income: 1684,
              Year: 1908,
            },
            {
              Income: 1230,
              Year: 1930,
            },
          ].map((item) => item.Year),
          // data: [1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910],
        },
        // {
        //   type: 'category',
        //   nameLocation: 'middle',
        //   // data: [1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910],
        // },
      ],
      yAxis: {
        type: 'value',
      },
      series: [
        {
          name: 'India',
          type: 'line',
          data: [
            {
              Income: 1234,
              Year: 1900,
            },
            {
              Income: 2234,
              Year: 1901,
            },
            {
              Income: 1334,
              Year: 1902,
            },
            {
              Income: 2334,
              Year: 1903,
            },
            {
              Income: 234,
              Year: 1904,
            },
            {
              Income: 134,
              Year: 1905,
            },
            {
              Income: 1214,
              Year: 1906,
            },
            {
              Income: 1734,
              Year: 1907,
            },
            {
              Income: 1684,
              Year: 1908,
            },
            {
              Income: 1230,
              Year: 1910,
            },
          ].map((item) => item.Income),
          showSymbol: false,
          // encode: {
          //   x: 'Year',
          //   y: 'Income',
          //   itemName: 'Year',
          //   tooltip: ['Income'],
          // },
        },
        {
          name: 'Aus',
          type: 'line',
          data: [
            {
              Income: 3234,
              Year: 1900,
            },
            {
              Income: 2234,
              Year: 1901,
            },
            {
              Income: 2334,
              Year: 1902,
            },
            {
              Income: 2434,
              Year: 1903,
            },
            {
              Income: 1214,
              Year: 1904,
            },
            {
              Income: 2034,
              Year: 1905,
            },
            {
              Income: 3714,
              Year: 1906,
            },
            {
              Income: 2334,
              Year: 1907,
            },
            {
              Income: 1904,
              Year: 1908,
            },
            {
              Income: 1230,
              Year: 1930,
            },
          ].map((item) => item.Income),
          showSymbol: false,
          // encode: {
          //   x: 'Year',
          //   y: 'Income',
          //   itemName: 'Year',
          //   tooltip: ['Income'],
          // },
        },
        {
          name: 'Shri Lanka',
          type: 'line',
          data: [
            {
              Income: 3134,
              Year: 1900,
            },
            {
              Income: 2134,
              Year: 1901,
            },
            {
              Income: 2034,
              Year: 1902,
            },
            {
              Income: 2000,
              Year: 1903,
            },
            {
              Income: 1914,
              Year: 1904,
            },
            {
              Income: 1934,
              Year: 1905,
            },
            {
              Income: 1714,
              Year: 1906,
            },
            {
              Income: 1534,
              Year: 1907,
            },
            {
              Income: 1104,
              Year: 1908,
            },
            {
              Income: 1030,
              Year: 1930,
            },
          ].map((item) => item.Income),
          showSymbol: false,
          // encode: {
          //   x: 'Year',
          //   y: 'Income',
          //   itemName: 'Year',
          //   tooltip: ['Income'],
          // },
        },
      ],
    },
  });
  return (
    <div className="w-[100%] h-full overflow-scroll">
      <h2 className="text-center my-4 font-bold text-[#292C2E] text-[1.4rem]">
        FFT Domain [g]
      </h2>
      {/* <div className="w-full flex gap-4 justify-center mb-4">
        <div className="flex justify-center items-center">
          <div className="h-5 w-5 rounded-full bg-[#4796C3] mr-2"></div> <div>acc_x</div>
        </div>
        <div className="flex justify-center items-center">
          <div className="h-5 w-5 rounded-full bg-[#2ACE60] mr-2"></div> <div>acc_x</div>
        </div>
        <div className="flex justify-center items-center">
          <div className="h-5 w-5 rounded-full bg-[#F2BE5A] mr-2"></div> <div>acc_x</div>
        </div>
      </div> */}
      <ReactECharts
        option={(config as any).options}
        // notMerge={true}
        // lazyUpdate={true}
        // theme={'theme_name'}
        // onChartReady={this.onChartReadyCallback}
        // onEvents={EventsDict}
        // opts={}
        // className="w-[1000px] h-[350px]"
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

export default EChart;
