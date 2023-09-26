import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/24/outline';
import React, { Fragment } from 'react';

import DaysEChart from './Charts/DaysEChart';
import MonthEChart from './Charts/MonthEChart';
import TimeEChart from './Charts/TimeEChart';
import WeekEChart from './Charts/WeekEChart';

const list = [
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
];

export default function TimeChartDropDown() {
  const [selected, setSelected] = React.useState(list[0]);

  function renderChart() {
    switch (selected.value) {
      case 'Time':
        return <TimeEChart />;
      case 'Days':
        return <DaysEChart />;
      case 'Week':
        return <WeekEChart />;
      case 'Month':
        return <MonthEChart />;
      default:
        return <TimeEChart />;
    }
  }

  return (
    <div className="w-[100%] h-full overflow-scroll">
      <div className="">
        <h2 className="text-center my-4 font-bold text-[#292C2E] text-[1.4rem]">
          Time Domain [g]
        </h2>
      </div>
      <div className="flex justify-end my-4">
        <Listbox
          value={selected}
          onChange={(value) => {
            setSelected(value);
          }}
        >
          <div className="relative mt-1">
            <Listbox.Button className="relative w-[170px] bg-[#F1F1F1] cursor-pointer rounded-lg py-2 pl-3 pr-10 text-left border focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{selected.value}</span>
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
              <Listbox.Options className="absolute bg-[#F1F1F1] z-50 border-1 mt-1 max-h-60 w-full overflow-auto rounded-md py-1 text-base shadow-xl  ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                {list.map((person, personIdx) => (
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
      </div>
      {renderChart()}
    </div>
  );
}
