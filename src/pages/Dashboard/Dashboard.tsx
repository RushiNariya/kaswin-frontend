import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { set } from 'lodash';
import React from 'react';
import { Fragment, useState } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

import TimeLineChart from '../../components/Charts/TimeLineChart';
import DashboardDatepicaker from '../../components/Datepicker/DashboardDatepicaker';
import PageLayout from '../../components/PageLayout/PageLayout';
import StatusCard from './StatusCard';

function Dashboard() {
  const [isSelectedTab, setIsSelectedTab] = React.useState<number | null>(null);
  const [pageIndex, setPageIndex] = React.useState<number>(0);
  const [pageCount, setPageCount] = React.useState<number>(31);
  const [selectedDate, setSelectedDate] = React.useState<string | null>(null);

  const [value, setValue] = React.useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    setValue(newValue);
  };

  interface MonthInfo {
    name: string;
    year: number;
    days: number;
    month: number;
  }

  const getLast4MonthsInfo = (): MonthInfo[] => {
    const currentDate = new Date();
    const monthsInfo: MonthInfo[] = [];

    for (let i = 0; i < 4; i++) {
      const year = currentDate.getFullYear();
      const month = currentDate.getMonth() - i;
      const date = new Date(year, month, 1);

      const monthName = date.toLocaleString('default', { month: 'long' });
      const monthNumber = date.getMonth() + 1;
      const totalDays = new Date(year, month + 1, 0).getDate();

      monthsInfo.push({
        name: monthName,
        year: year,
        days: totalDays,
        month: monthNumber,
      });
    }

    return monthsInfo;
  };

  const monthsInfo = getLast4MonthsInfo();
  const [selected, setSelected] = useState(monthsInfo[0]);

  return (
    <PageLayout pageTitle="dashboard">
      <div className="flex-1 w-full">
        <div className="grid gap-14 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3  ">
          <StatusCard />
          <div className="flex flex-col gap-[38px] items-center justify-center shrink-0 w-[100%] sm:min-w-min relative col-span-2">
            <div className="flex flex-row items-start justify-between self-stretch shrink-0  relative">
              <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row xl:flex-row gap-0 items-start justify-start shrink-0 relative">
                <div
                  className={`border-solid border-b pt-[7px] pr-2.5 pb-[7px] pl-2.5 flex flex-row gap-2.5 items-start justify-start shrink-0 relative cursor-pointer ${
                    isSelectedTab === 0
                      ? 'border-[#292c2e]'
                      : 'border-[transparent] opacity-[0.5]'
                  }`}
                  onClick={() => setIsSelectedTab(0)}
                >
                  <div
                    className="text-[#292c2e] text-left relative flex items-center justify-start font-[700] text-[14px] leading-[22px] hd:text-[20px]"
                    // style={{
                    //   font: "var(--headline-4-bold, 700 14px/22px 'Mulish', sans-serif)",
                    // }}
                  >
                    Last Month{' '}
                  </div>
                </div>
                <div
                  className={`border-solid border-b pt-[7px] pr-2.5 pb-[7px] pl-2.5 flex flex-row gap-2.5 items-start justify-start shrink-0 relative cursor-pointer ${
                    isSelectedTab === 1
                      ? 'border-[#292c2e]'
                      : 'border-[transparent] opacity-[0.5]'
                  }`}
                  onClick={() => setIsSelectedTab(1)}
                >
                  <div
                    className="text-[#292c2e] text-left relative flex items-center justify-start font-[700] text-[14px] leading-[22px] hd:text-[20px]"
                    // style={{
                    //   font: "var(--headline-4-bold, 700 14px/22px 'Mulish', sans-serif)",
                    // }}
                  >
                    Last 7 Days{' '}
                  </div>
                </div>
                <div
                  className={`border-solid border-b pt-[7px] pr-2.5 pb-[7px] pl-2.5 flex flex-row gap-2.5 items-start justify-start shrink-0 relative cursor-pointer ${
                    isSelectedTab === 2
                      ? 'border-[#292c2e]'
                      : 'border-[transparent] opacity-[0.5]'
                  }`}
                  onClick={() => setIsSelectedTab(2)}
                >
                  <div
                    className="text-[#292c2e] text-left relative flex items-center justify-start font-[700] text-[14px] leading-[22px] hd:text-[20px]"
                    // style={{
                    //   font: "var(--headline-4-bold, 700 14px/22px 'Mulish', sans-serif)",
                    // }}
                  >
                    Previous Session{' '}
                  </div>
                </div>
                <div
                  className={`border-solid border-b pt-[7px] pr-2.5 pb-[7px] pl-2.5 flex flex-row gap-2.5 items-start justify-start shrink-0 relative cursor-pointer ${
                    isSelectedTab === 3
                      ? 'border-[#292c2e]'
                      : 'border-[transparent] opacity-[0.5]'
                  }`}
                >
                  <div
                    className="text-[#292c2e] text-left relative flex items-center justify-start font-[700] text-[14px] leading-[22px] hd:text-[20px]"
                    // style={{
                    //   font: "var(--headline-4-bold, 700 14px/22px 'Mulish', sans-serif)",
                    // }}
                    onClick={() => setIsSelectedTab(3)}
                  >
                    Current Session{' '}
                  </div>
                </div>
              </div>

              <div>
                <Datepicker
                  useRange={false}
                  value={value}
                  onChange={handleValueChange}
                  inputClassName="relative mt-1 w-full h-10 disabled:bg-slate-100 disabled:bg-opacity-40 focus:border-slate-400 cursor-pointer rounded-md py-2 px-3 text-left border-[1px] border-solid focus:outline-none focus-visible:ring-white focus-visible:ring-opacity-75 sm:text-sm"
                  primaryColor="blue"
                  placeholder={'Select dates'}
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10 items-center justify-start shrink-0 self-stretch relative">
              <div className="rounded-[10px] border-solid border-[#d0e1fb] border-[0.5px] p-4 flex flex-col gap-4 items-center justify-center shrink-0  relative overflow-hidden hd:h-[280px]">
                <div className="flex flex-col gap-4 items-center justify-center shrink-0 relative">
                  <svg
                    className="rounded-[27px] pt-1 pr-3 pb-1 pl-3 flex flex-row gap-5 items-center justify-center shrink-0 relative overflow-visible w-[60px] h-[60px] hd:w-[75px] hd:h-[75px]"
                    style={{ transform: 'translate(0px, 0px)' }}
                    viewBox="0 0 44 44"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="44" height="44" rx="22" fill="#E6EFFC" />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M25.4285 13.2481V23.5581C25.4287 23.6198 25.4441 23.6807 25.4737 23.736C25.5032 23.7912 25.5461 23.8394 25.5989 23.8766C26.3459 24.4064 26.9513 25.0905 27.3679 25.8751C27.7844 26.6598 28.0008 27.5238 28 28.3995C28 29.8848 27.3678 31.3094 26.2426 32.3596C25.1174 33.4099 23.5913 34 22 34C20.4087 34 18.8826 33.4099 17.7574 32.3596C16.6321 31.3094 16 29.8848 16 28.3995C15.9992 27.5238 16.2155 26.6598 16.6321 25.8751C17.0486 25.0905 17.6541 24.4064 18.4011 23.8766C18.4539 23.8394 18.4967 23.7912 18.5263 23.736C18.5559 23.6807 18.5713 23.6198 18.5714 23.5581V13.2006C18.5719 12.7763 18.6628 12.3562 18.8386 11.9649C19.0144 11.5736 19.2718 11.2187 19.5958 10.921C19.9197 10.6233 20.3038 10.3886 20.7257 10.2305C21.1476 10.0725 21.599 9.99424 22.0535 10.0003C23.9344 10.0268 25.4285 11.492 25.4285 13.2481ZM20.5 14.5C20.5 13.6716 21.1716 13 22 13C22.8284 13 23.5 13.6716 23.5 14.5V25.1161C24.5399 25.6581 25.25 26.7461 25.25 28C25.25 29.7949 23.7949 31.25 22 31.25C20.2051 31.25 18.75 29.7949 18.75 28C18.75 26.7461 19.4601 25.6581 20.5 25.1161V14.5Z"
                      fill="#292C2E"
                    />
                  </svg>

                  <div className="pr-2 pl-2 flex flex-col gap-[3px] items-center justify-center shrink-0 relative">
                    <div
                      className="text-[#545a5f] text-left relative flex items-center justify-start font-[700] text-[20px] hd:text-[30px]"
                      // style={{ font: "700 20px 'Mulish', sans-serif" }}
                    >
                      550 °C{' '}
                    </div>
                    <div
                      className="text-[#545a5f] text-left relative flex items-center justify-start font-[500] text-[12px] hd:text-[20px]"
                      // style={{
                      //   font: "var(--small-text-1, 500 12px/20px 'Mulish', sans-serif)",
                      // }}
                    >
                      Avg Temperature{' '}
                    </div>
                  </div>
                </div>
                <div
                  className="border-solid border-[#d0e1fb] border-t-[0.5px] border-r-[0] border-b-[0] border-l-[0] self-stretch shrink-0 h-0 relative"
                  style={{
                    transformOrigin: '0 0',
                    transform: 'rotate(0deg) scale(1, 1)',
                  }}
                ></div>
                <div className="pr-2 pl-2 flex flex-row items-center justify-between self-stretch shrink-0 relative">
                  <div
                    className="text-[#545a5f] text-left relative flex items-center justify-start font-[500] text-[12px] hd:text-[20px]"
                    // style={{ font: "500 12px 'Mulish', sans-serif" }}
                  >
                    Max{' '}
                  </div>
                  <div
                    className="text-[#292c2e] text-left relative flex items-center justify-start font-[700] text-[12px] hd:text-[20px]"
                    // style={{ font: "700 12px 'Mulish', sans-serif" }}
                  >
                    550 °C{' '}
                  </div>
                </div>
              </div>
              <div className="rounded-[10px] border-solid border-[#d0e1fb] border-[0.5px] p-4 flex flex-col gap-4 items-center justify-center shrink-0  relative overflow-hidden hd:h-[280px]">
                <div className="flex flex-col gap-4 items-center justify-center shrink-0 relative">
                  <div className="bg-[#e6effc] rounded-[29.09px] pt-2 pr-[5.45px] pl-[5.45px] flex flex-row gap-[18.18px] items-start justify-center shrink-0 w-11 h-11 hd:w-16 hd:h-16 relative">
                    <svg
                      className="pb-0.5 flex flex-row gap-2 items-end justify-center shrink-0 relative overflow-visible w-[22px] h-[22px] hd:w-[35px] hd:h-[35px]"
                      style={{}}
                      viewBox="0 0 22 22"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 7L3 20"
                        stroke="#292C2E"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M11 3L11 20"
                        stroke="#292C2E"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                      <path
                        d="M19 10L19 20"
                        stroke="#292C2E"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>
                  <div className="pr-2 pl-2 flex flex-col gap-[3px] items-center justify-center shrink-0 relative">
                    <div
                      className="text-[#545a5f] text-left relative flex items-center justify-start font-[700] text-[20px] hd:text-[30px]"
                      // style={{ font: "700 20px 'Mulish', sans-serif" }}
                    >
                      8.34 mm/s{' '}
                    </div>
                    <div
                      className="text-[#545a5f] text-left relative flex items-center justify-start font-[500] text-[12px] hd:text-[20px]"
                      // style={{
                      //   font: "var(--small-text-1, 500 12px/20px 'Mulish', sans-serif)",
                      // }}
                    >
                      Avg Vibration{' '}
                    </div>
                  </div>
                </div>
                <div
                  className="border-solid border-[#d0e1fb] border-t-[0.5px] border-r-[0] border-b-[0] border-l-[0] self-stretch shrink-0 h-0 relative"
                  style={{
                    transformOrigin: '0 0',
                    transform: 'rotate(0deg) scale(1, 1)',
                  }}
                ></div>
                <div className="pr-2 pl-2 flex flex-row items-center justify-between self-stretch shrink-0 relative">
                  <div
                    className="text-[#545a5f] text-left relative flex items-center justify-start font-[500] text-[12px] hd:text-[20px]"
                    // style={{ font: "500 12px 'Mulish', sans-serif" }}
                  >
                    Max{' '}
                  </div>
                  <div
                    className="text-[#292c2e] text-left relative flex items-center justify-start font-[700] text-[12px] hd:text-[20px]"
                    // style={{ font: "700 12px 'Mulish', sans-serif" }}
                  >
                    10.3 mm/s{' '}
                  </div>
                </div>
              </div>
              <div className="rounded-[15px] border-solid border-[#d0e1fb] border-[0.5px] pt-4 pr-[30px] pb-4 pl-[30px] flex flex-col gap-2.5 items-start justify-center shrink-0 relative hd:h-[280px]">
                <div className="flex flex-row items-end justify-between self-stretch shrink-0 relative">
                  <div className="text-[#545a5f] text-left relative">
                    <span>
                      <span className="font-[500] text-[10px] leading-[130%] hd:text-[20px]">
                        Total <br />
                      </span>
                      <span className="font-[700] text-[16px] leading-[130%] hd:text-[20px]">
                        Failures
                      </span>
                    </span>{' '}
                  </div>
                  <div
                    className="text-[#F0636D] text-left relative flex items-end justify-start font-[700] text-[20px] leading-[130%] hd:text-[20px]"
                    // style={{ font: "700 20px/130% 'Mulish', sans-serif" }}
                  >
                    20{' '}
                  </div>
                </div>
                <div
                  className="border-solid border-[#d0e1fb] border-t-[0.5px] border-r-[0] border-b-[0] border-l-[0] shrink-0 w-[100%] h-0 relative"
                  style={{
                    transformOrigin: '0 0',
                    transform: 'rotate(0deg) scale(1, 1)',
                  }}
                ></div>
                <div className="flex flex-row items-end justify-between self-stretch shrink-0 relative">
                  <div className="text-[#0d3745] text-left relative">
                    <span>
                      <span className="font-[500] text-[10px] leading-[130%] hd:text-[20px]">
                        Due to
                        <br />
                      </span>
                      <span className="font-[700] text-[16px] leading-[130%] hd:text-[20px]">
                        Temperature
                      </span>
                    </span>{' '}
                  </div>
                  <div
                    className="text-[#292c2e] text-left relative flex items-end justify-start font-[700] text-[20px] leading-[130%] hd:text-[20px]"
                    // style={{ font: "700 20px/130% 'Mulish', sans-serif" }}
                  >
                    10{' '}
                  </div>
                </div>
                <div
                  className="border-solid border-[#d0e1fb] border-t-[0.5px] border-r-[0] border-b-[0] border-l-[0] shrink-0 w-[100%] h-0 relative"
                  style={{
                    transformOrigin: '0 0',
                    transform: 'rotate(0deg) scale(1, 1)',
                  }}
                ></div>
                <div className="flex flex-row items-end justify-between self-stretch shrink-0 relative">
                  <div className="text-[#0d3745] text-left relative">
                    <span>
                      <span className="font-[500] text-[10px]leading-[130%] hd:text-[20px]">
                        Due to
                        <br />
                      </span>
                      <span className="font-[700] text-[16px] leading-[130%] hd:text-[20px]">
                        Vibration
                      </span>
                    </span>{' '}
                  </div>
                  <div
                    className="text-[#efa71c] text-left relative flex items-end justify-start font-[700] text-[20px] leading-[130%] hd:text-[20px]"
                    // style={{ font: "700 20px/130% 'Mulish', sans-serif" }}
                  >
                    10{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-start justify-between  h-9 relative mt-8">
          <DashboardDatepicaker
            pageCount={pageCount}
            pageIndex={pageIndex}
            gotoPage={
              (page: number) => {
                setPageIndex(page);
                setSelectedDate(`${page}/${selected.month}/${selected.year}`);
              }
              // eslint-disable-line no-console
            }
            previousPage={() => {
              if (pageIndex > 0) {
                setPageIndex(pageIndex - 1);
                setSelectedDate(`${pageIndex - 1}/${selected.month}/${selected.year}`);
              }
            }}
            nextPage={() => {
              if (pageIndex < pageCount) {
                setPageIndex(pageIndex + 1);
                setSelectedDate(`${pageIndex + 1}/${selected.month}/${selected.year}`);
              }
            }}
          />

          <div
            className="flex flex-col gap-1 items-start justify-start shrink-0 relative"
            style={{
              zIndex: 9,
            }}
          >
            <Listbox
              value={selected}
              onChange={(value) => {
                setSelected(value);
                setPageCount(value.days);
              }}
            >
              <div className="relative mt-1">
                <Listbox.Button className="relative w-[170px] cursor-pointer rounded-lg bg-white py-2 pl-3 pr-10 text-left border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                  <span className="block truncate">
                    {selected.name} {selected.year}
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <ChevronUpDownIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-xl  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {monthsInfo.map((person, personIdx) => (
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
                              {person.name} {person.year}
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
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-8 items-start justify-center relative mt-8">
          <div className="pr-4 pl-4 flex flex-col gap-[15px] items-start justify-start shrink-0 relative col-span-2">
            <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
              <div
                className="text-[#292c2e] text-left relative"
                style={{
                  font: "var(--headline-3-bold, 700 16px/24px 'Mulish', sans-serif)",
                }}
              >
                Error window{' '}
              </div>
              <div className="bg-[#ffffff] rounded-[5px] pt-1.5 pr-3 pb-1.5 pl-3 flex flex-row gap-2 items-center justify-start shrink-0 relative overflow-hidden">
                <div className="flex flex-row gap-8 items-center justify-start shrink-0 w-[120px] relative overflow-hidden">
                  <div
                    className="text-[#292c2e] text-left relative"
                    style={{
                      font: "var(--headline-4-bold, 700 14px/22px 'Mulish', sans-serif)",
                    }}
                  >
                    Total Failures : 20{' '}
                  </div>
                </div>
                <svg
                  className="pt-[5px] pr-2 pb-[5px] pl-2 flex flex-col gap-[5px] items-start justify-center shrink-0 relative overflow-visible"
                  style={{ transform: 'translate(0px, -26px)' }}
                  width="25"
                  height="27"
                  viewBox="0 0 25 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 18.5L5 13.5L10 8.5"
                    stroke="#AECAF4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15 18.5L20 13.5L15 8.5"
                    stroke="#AECAF4"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
            <div
              className="bg-[#ffffff] rounded-[10px] shrink-0 w-[100%] relative no-scrollbar"
              style={{
                boxShadow: 'inset -1px 1px 9px 0px rgba(0, 0, 0, 0.12)',
                overflowX: 'auto',
              }}
            >
              <TimeLineChart />
            </div>
          </div>
          <div className="flex flex-col items-center justify-center shrink-0 relative mt-4">
            <div className="bg-[#e6effc] rounded-[25px] border-solid border-[#e6effc] border-4 flex flex-col gap-[9px] items-center justify-start self-stretch flex-1 relative">
              <div className="rounded-tl-[25px] rounded-tr-[25px] pt-6 pr-6 pl-6 flex flex-col gap-3 items-start justify-center self-stretch shrink-0 relative">
                <div className="flex flex-row items-center justify-between self-stretch shrink-0 relative">
                  <div
                    className="text-[#292c2e] text-left relative"
                    style={{
                      font: "var(--headline-3-bold, 700 16px/24px 'Mulish', sans-serif)",
                    }}
                  >
                    AI Diagnosis{' '}
                  </div>
                  <svg
                    className="rounded-[5px] cursor-pointer p-2 flex flex-row gap-2.5 items-start justify-start shrink-0 relative overflow-visible"
                    style={{}}
                    width="40"
                    height="40"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 8V21C8 21.5523 8.44772 22 9 22H22M11.1111 16.5556L13.5021 13.2679C13.8741 12.7564 14.6217 12.7144 15.0487 13.1811L16.697 14.9827C17.1377 15.4645 17.9144 15.4015 18.2717 14.855L21.5333 9.86667"
                      stroke="#292C2E"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="flex flex-row gap-1.5 items-center justify-center shrink-0 relative">
                  <div
                    className="text-[#292c2e] text-left relative"
                    style={{
                      font: "var(--headline-4-bold, 700 14px/22px 'Mulish', sans-serif)",
                    }}
                  >
                    Today{' '}
                  </div>
                  <div className="bg-[#545a5f] rounded-[50%] shrink-0 w-[3px] h-[3px] relative"></div>
                  <div className="flex flex-row gap-1 items-center justify-center shrink-0 relative">
                    <div
                      className="text-[#292c2e] text-left relative"
                      style={{
                        font: "var(--small-text-2, 500 10px/18px 'Mulish', sans-serif)",
                      }}
                    >
                      5 min ago{' '}
                    </div>
                    <div className="flex flex-col gap-[0.81px] items-center justify-center shrink-0 w-[13px] h-[13px] relative">
                      <svg
                        className="shrink-0 relative overflow-visible"
                        style={{}}
                        width="13"
                        height="10"
                        viewBox="0 0 13 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.2815 5.79137V4.9944C11.2815 2.35394 9.13556 0.212803 6.48895 0.212803C5.76898 0.211917 5.05808 0.373439 4.40917 0.685344C3.76026 0.997249 3.19006 1.4515 2.74102 2.01429M1.71057 4.20731V5.00429C1.71057 7.64769 3.85545 9.78722 6.50313 9.78722C7.22105 9.78618 7.92969 9.62498 8.57742 9.31537C9.22514 9.00576 9.79564 8.55553 10.2473 7.9975"
                          stroke="#292C2E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M0.50354 5.00005L1.68028 3.8233L2.91051 5.00005"
                          stroke="#292C2E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M12.4965 5.00009L11.3197 6.17683L10.0895 5.00009"
                          stroke="#292C2E"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-[#ffffff] rounded-[15px] pr-4 pl-4 mb-4 flex flex-col gap-2.5 items-center justify-end shrink-0 w-[80%] h-[170px] hd:h-auto relative"
                style={{ overflowY: 'auto' }}
              >
                <div className="rounded-[5px] pt-1 pb-1 flex flex-row items-center justify-between self-stretch shrink-0 relative">
                  <div
                    className="text-[#292c2e] text-left relative"
                    style={{ font: "500 14px/26px 'Mulish', sans-serif" }}
                  >
                    11:10:00 am{' '}
                  </div>
                  <div
                    className="text-[#292c2e] text-left relative"
                    style={{ font: "500 14px/26px 'Mulish', sans-serif" }}
                  >
                    3.056{' '}
                  </div>
                  <div
                    className="text-[#292c2e] text-left relative"
                    style={{ font: "500 14px/26px 'Mulish', sans-serif" }}
                  >
                    Normal{' '}
                  </div>
                </div>
                <div className="border-solid border-[#d0e1fb] border-b pt-1 pb-1 flex flex-row items-center justify-between self-stretch shrink-0 relative">
                  <div
                    className="text-[#292c2e] text-left relative"
                    style={{ font: "500 14px/26px 'Mulish', sans-serif" }}
                  >
                    11:20:00 am{' '}
                  </div>
                  <div
                    className="text-[#292c2e] text-left relative"
                    style={{ font: "500 14px/26px 'Mulish', sans-serif" }}
                  >
                    3.100{' '}
                  </div>
                  <div
                    className="text-[#292c2e] text-left relative"
                    style={{ font: "500 14px/26px 'Mulish', sans-serif" }}
                  >
                    Normal{' '}
                  </div>
                </div>
                <div className="border-solid border-[#d0e1fb] border-b pt-1 pb-1 flex flex-row items-center justify-between self-stretch shrink-0 relative">
                  <div
                    className="text-[#292c2e] text-left relative"
                    style={{ font: "500 14px/26px 'Mulish', sans-serif" }}
                  >
                    11:30:00 am{' '}
                  </div>
                  <div
                    className="text-[#292c2e] text-left relative"
                    style={{ font: "500 14px/26px 'Mulish', sans-serif" }}
                  >
                    2.075{' '}
                  </div>
                  <div
                    className="text-[#292c2e] text-left relative"
                    style={{ font: "500 14px/26px 'Mulish', sans-serif" }}
                  >
                    Normal{' '}
                  </div>
                </div>
                <div className="border-solid border-[#d0e1fb] border-b pt-1 pb-1 flex flex-row items-center justify-between self-stretch shrink-0 relative">
                  <div
                    className="text-[#292c2e] text-left relative"
                    style={{ font: "500 14px/26px 'Mulish', sans-serif" }}
                  >
                    11:40:00 am{' '}
                  </div>
                  <div
                    className="text-[#292c2e] text-left relative"
                    style={{ font: "500 14px/26px 'Mulish', sans-serif" }}
                  >
                    2.075{' '}
                  </div>
                  <div
                    className="text-[#292c2e] text-left relative"
                    style={{ font: "500 14px/26px 'Mulish', sans-serif" }}
                  >
                    Normal{' '}
                  </div>
                </div>
                <div className="border-solid border-[#d0e1fb] border-b pt-1 pb-1 flex flex-row items-center justify-between self-stretch shrink-0 relative">
                  <div
                    className="text-[#292c2e] text-left relative"
                    style={{ font: "500 14px/26px 'Mulish', sans-serif" }}
                  >
                    11:50:00 am{' '}
                  </div>
                  <div
                    className="text-[#292c2e] text-left relative"
                    style={{ font: "500 14px/26px 'Mulish', sans-serif" }}
                  >
                    2.075{' '}
                  </div>
                  <div
                    className="text-[#292c2e] text-left relative"
                    style={{ font: "500 14px/26px 'Mulish', sans-serif" }}
                  >
                    Normal{' '}
                  </div>
                </div>
                <div className="border-solid border-[transparent] border-b pt-1 pb-1 flex flex-row items-center justify-between self-stretch shrink-0 relative">
                  <div
                    className="text-[#292c2e] text-left relative"
                    style={{ font: "500 14px/26px 'Mulish', sans-serif" }}
                  >
                    12:00:00 pm{' '}
                  </div>
                  <div
                    className="text-[#292c2e] text-left relative"
                    style={{ font: "500 14px/26px 'Mulish', sans-serif" }}
                  >
                    3.056{' '}
                  </div>
                  <div
                    className="text-[#292c2e] text-left relative"
                    style={{ font: "500 14px/26px 'Mulish', sans-serif" }}
                  >
                    Normal{' '}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}

export default Dashboard;
