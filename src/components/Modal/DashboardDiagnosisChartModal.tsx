import { Dialog, Transition } from '@headlessui/react';
import { Icon } from '@iconify/react';
import React, { Fragment } from 'react';
import Datepicker from 'react-tailwindcss-datepicker';

import DashboardAIChart from '../Charts/DashboardAIChart';
import TimeSeriesChart from '../Charts/TimeSeriesChart';

interface DashboardDiagnosisChartModalProps {
  handleClose: () => void;
  open: boolean;
}

function DashboardDiagnosisChartModal({
  handleClose,
  open,
}: DashboardDiagnosisChartModalProps) {
  const [value, setValue] = React.useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue: any) => {
    setValue(newValue);
  };

  const inputRef = React.useRef<any>(null);

  React.useEffect(() => {
    inputRef.current?.focus();
  }, [inputRef.current]);

  return (
    <Dialog as="div" open={open} className="relative z-10" onClose={handleClose}>
      <div className="fixed inset-0 bg-black bg-opacity-25" />

      <div className="fixed inset-0 overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center">
          <Dialog.Panel className=" w-full md:w-[60%] transform overflow-hidden rounded-2xl bg-white p-6 md:p-10 text-left align-middle shadow-xl transition-all">
            <Dialog.Title as="div" className="">
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold leading-6 text-gray-900">
                  AI Diagnosis
                </span>
                <input
                  ref={inputRef}
                  className="h-0 w-0 border-none outline-none focus:outline-none focus:border-none"
                />

                <Icon
                  icon="ion:close"
                  onClick={handleClose}
                  height={25}
                  width={25}
                  className="cursor-pointer"
                />
              </div>
            </Dialog.Title>
            <div className="">
              <div className="flex justify-end mb-6">
                <Datepicker
                  useRange={false}
                  asSingle={true}
                  value={value}
                  onChange={handleValueChange}
                  inputClassName="relative mt-1 w-full h-10 disabled:bg-slate-100 disabled:bg-opacity-40 focus:border-slate-400 cursor-pointer rounded-md py-2 px-3 text-left border-[1px] border-solid focus:outline-none focus-visible:ring-white focus-visible:ring-opacity-75 sm:text-sm"
                  primaryColor="blue"
                  placeholder={'Select dates'}
                  containerClassName="relative mt-8 z-30"
                />
              </div>
              <DashboardAIChart />
            </div>
          </Dialog.Panel>
        </div>
      </div>
    </Dialog>
  );
}

export default DashboardDiagnosisChartModal;
