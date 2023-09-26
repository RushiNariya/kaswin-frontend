import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import ReactECharts from 'echarts-for-react'; // or var ReactECharts = require('echarts-for-react');
import React, { Component, Fragment } from 'react';

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

// export class TimeEChart extends Component {
//   constructor(props: any) {
//     super(props);
//     this.state = {
//       options: {
//         tooltip: {
//           trigger: 'axis',
//           formatter: function (params: any) {
//             // console.log(params);
//             return (
//               'Time : ' +
//               params[0].value[0] +
//               ', ' +
//               'Temperature : ' +
//               params[0].value[1]
//             );
//           },
//           axisPointer: {
//             animation: false,
//           },
//         },
//         xAxis: {
//           type: 'category',
//         },
//         yAxis: {
//           type: 'value',
//         },
//         series: [
//           {
//             name: 'Temperature',
//             type: 'line',
//             showSymbol: false,
//             data: parentData(),
//           },
//           {
//             name: 'Temperature2',
//             type: 'line',
//             showSymbol: false,
//             data: parentData(),
//           },
//           {
//             name: 'Temperature3',
//             type: 'line',
//             showSymbol: false,
//             data: parentData(),
//           },
//         ],
//       },
//     };
//   }
//   render() {
//     return (
//       <div className="w-[100%] h-full overflow-scroll">
//         <h2 className="text-center my-4 font-bold text-[#292C2E] text-[1.4rem]">
//           Time Domain [g]
//         </h2>
//         <div className="w-full flex gap-4 justify-center mb-4">
//           <div className="flex justify-center items-center">
//             <div className="h-5 w-5 rounded-full bg-[#4796C3] mr-2"></div>{' '}
//             <div>vel_x</div>
//           </div>
//           <div className="flex justify-center items-center">
//             <div className="h-5 w-5 rounded-full bg-[#2ACE60] mr-2"></div>{' '}
//             <div>vel_x</div>
//           </div>
//           <div className="flex justify-center items-center">
//             <div className="h-5 w-5 rounded-full bg-[#F2BE5A] mr-2"></div>{' '}
//             <div>vel_x</div>
//           </div>
//         </div>
//         <ReactECharts
//           option={(this.state as any).options}
//           // className="w-[900px] ml-[-30px] overflow-scroll"
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

function TimeEChart() {
  const [config, setConfig] = React.useState({
    options: {
      tooltip: {
        trigger: 'axis',
        formatter: function (params: any) {
          console.log(params);
          return (
            'Time : ' + params[0].value[0] + ', ' + 'Temperature : ' + params[0].value[1]
          );
        },
        axisPointer: {
          animation: false,
        },
      },
      dataZoom: {
        show: true,
        realtime: true,
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
      xAxis: {
        type: 'category',
      },
      yAxis: {
        type: 'value',
      },
      toolbox: {
        feature: {
          saveAsImage: {
            name: 'Time_Domain_Chart',
            type: 'png',
          },
        },
      },
      series: [
        {
          name: 'Temperature1',
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
  });

  return (
    <div className="w-[100%] h-full overflow-scroll">
      {/* <div className="">
        <h2 className="text-center my-4 font-bold text-[#292C2E] text-[1.4rem]">
          Time Domain [g]
        </h2>
      </div>
      <div className="flex justify-end my-4">
        <Listbox
        // value={selected}
        // onChange={(value) => {
        //   setSelected(value);
        //   setPageCount(value.days);
        // }}
        >
          <div className="relative mt-1">
            <Listbox.Button className="relative w-[170px] bg-[#F1F1F1] cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">Day</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute bg-[#F1F1F1] z-50 border-1 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-xl  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {[
                  {
                    id: 1,
                    value: 'Time',
                  },
                  {
                    id: 2,
                    value: 'Days',
                  },
                  {
                    id: 3,
                    value: 'Week',
                  },
                  {
                    id: 4,
                    value: 'Month',
                  },
                ].map((person, personIdx) => (
                  <Listbox.Option
                    key={personIdx}
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                      }`
                    }
                    value={person}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? 'font-medium' : 'font-normal'
                          }`}
                        >
                          {person.value}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div> */}
      {/* <div className="w-full flex gap-4 justify-center mb-4">
        <div className="flex justify-center items-center">
          <div className="h-5 w-5 rounded-full bg-[#4796C3] mr-2"></div> <div>vel_x</div>
        </div>
        <div className="flex justify-center items-center">
          <div className="h-5 w-5 rounded-full bg-[#2ACE60] mr-2"></div> <div>vel_x</div>
        </div>
        <div className="flex justify-center items-center">
          <div className="h-5 w-5 rounded-full bg-[#F2BE5A] mr-2"></div> <div>vel_x</div>
        </div>
      </div> */}
      <ReactECharts
        option={(config as any).options}
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

export default TimeEChart;
