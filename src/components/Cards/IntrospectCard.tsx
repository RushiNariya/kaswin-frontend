import { Icon } from '@iconify/react';
import React from 'react';

import { IntrospectListType } from '../../types/types';

function IntrospectCard({
  data,
  selectedIntrospect,
  selectIntrospectHandler,
}: {
  data: IntrospectListType;
  selectedIntrospect: IntrospectListType | null;
  selectIntrospectHandler: (data: IntrospectListType) => void;
}) {
  return (
    <div className="text-center w-full md:min-w-[100px] md:max-w-[100%] lg:max-w-[100%]">
      <div className="w-full">
        <div
          onClick={() => selectIntrospectHandler(data)}
          className={`object-cover  cursor-pointer md:hover:scale-105 transform
        transition duration-500 overflow-hidden w-full relative object-center flex flex-col gap-y-6 justify-between h-40 hd:min-h-[215px] p-4 py-6 mx-auto rounded-3xl border-2 ${
          selectedIntrospect?.id === data.id
            ? 'border-2 border-[#426AB9] introspect-card-selected'
            : 'introspect-card'
        }`}
        >
          <div className="flex flex-col justify-between flex-1">
            <div>
              <div className="flex mb-3">
                {data.running ? (
                  <Icon icon="formkit:radio" className="mr-2" color="green" />
                ) : (
                  <Icon icon="formkit:radio" className="mr-2 text-main-yellow" />
                )}
                <span>{data.name}</span>
              </div>
              <div>
                <span className="text-[1.2rem] mb-3 font-bold flex justify-start">
                  {data.sensorId}
                </span>
              </div>
            </div>
            <div className="flex">
              <div className="p-1 px-2 border rounded-md border-red-500 text-red-500">
                {data.sensorType}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IntrospectCard;
